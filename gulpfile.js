var gulp = require("gulp");

var fs = require("fs"),
    del = require('del'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    sass   = require("gulp-ruby-sass"),    
    browserify = require("browserify"),
    uglify = require('gulp-uglify'),
    streamify = require('gulp-streamify'),
    babel = require('gulp-babel'),
    gutil = require('gulp-util'),
    babelify = require("babelify"),
    cssBase64 = require('gulp-css-base64'),    
    source = require('vinyl-source-stream'),
    webpack = require('webpack'),
    webpackConfig = require('./webpack.config.js'),
    WebpackDevServer = require('webpack-dev-server'),
    webpackCompiler = webpack(webpackConfig);


gulp.task('clean', function() {
    return del.sync(['build/*']);
});

gulp.task('scripts', ['webpack'], function() {
    gulp.src('./build/*.debug.js')
        //.pipe(concat('index.debug.js'))
        .pipe(gulp.dest('./build'))
        .pipe(uglify())
        .pipe(rename(function(path){
            path.basename = path.basename.replace('.debug','')
        }))
        .pipe(gulp.dest('./build'))
});

gulp.task('webpack', function(callback) {
    webpackCompiler.run(function(err, stats){
        if (err) throw new gutil.PluginError('[webpack]', err);
        gutil.log('[webpack]', stats.toString({ colors: true }));
        callback();
    });
});

gulp.task('dump',['clean'],function(callback){
    
    gulp.src(['./node_modules/lie/dist/lie.polyfill.min.js'])    
        .pipe(gulp.dest('./build/vendor/lie'));

    gulp.src(['./node_modules/regenerator/runtime.js'])
        .pipe(streamify(uglify()))      
        .pipe(gulp.dest('./build/vendor/regenerator'));
    


    gulp.src(['./node_modules/react/dist/react.js','node_modules/react-dom/dist/react-dom.js','node_modules/react/dist/react-with-addons.js','./node_modules/react/dist/react.min.js','./node_modules/react/dist/react-with-addons.min.js','./node_modules/react-dom/dist/react-dom.min.js'])    
        .pipe(streamify(uglify()))          
        .pipe(gulp.dest('./build/vendor/react'))
    
    return callback()
})

gulp.task('sass',function() {
    sass('./src/css/**/*.sass')
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(gulp.dest('./src/css'));

    fs.mkdirSync("./build/css");
    
    return gulp.src("src/css/*.css")
        .pipe(cssBase64())
        .pipe(gulp.dest('./build/css'));
    
});


//gulp.task('babel',function(){
//    return  gulp.src('src/**/*.jsx')
//        .pipe(babel({
//            presets: ['es2015','react']
//        }))
//        .pipe(gulp.dest('src'));
//})

gulp.task('browserify',['babel'],function(callback){
    browserify("./src/js/app.js", { debug: false })
        .bundle()
        .pipe(source('app.debug.js'))  //vinyl-source-stream
        .pipe(gulp.dest('./build/js/'))
        .pipe(rename('app.js'))
        .pipe(streamify(uglify()))      //gulp-streamify  , gulp-uglify    
        .pipe(gulp.dest('./build/js/'))

    return callback()
})

gulp.task('start', function() {
    WebpackDevServer(webpack(webpackConfig), {
        publicPath: webpackConfig.output.publicPath,
        hot: true,
        noInfo: false,
        historyApiFallback: true
    }).listen(3000, '127.0.0.1', function (err, result) {
            if (err) {
                console.log(err);
            }
            console.log('Listening at localhost:3000');
        });
});


gulp.task('build',['clean','browserify','sass','dump'],function(cb){
    return cb()
})

gulp.task('watch',function(){
    gulp.watch('./**/*.jsx',['browserify']);

    gulp.watch('./**/*.sass',['sass']);        
});

gulp.task('default', ['clean','scripts', 'sass','dump']);

gulp.task('go',['default','start']);

//gulp.task('default',['build']);
