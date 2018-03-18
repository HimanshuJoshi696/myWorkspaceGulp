
/* variables defination */
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cleanCss = require('gulp-clean-css');
/* Definations */

gulp.task('gulp-message', function(){
    return console.log('Congratulation you are in the first step');
});

/* copy css files from source to destinations design styles to assest dist*/

gulp.task('copyCssFiles', function(){
    return gulp.src('custom_design/styles/*.css')
        .pipe(gulp.dest('custom_minify_dis/css'));      
});
gulp.task('copyJsFiles', function(){
        return gulp.src('custom_design/scripts/*.js') .pipe(gulp.dest('custom_minify_dis/js'));
});
/* End copy css files */

/*use plugin Starts  and convert sass file to css*/
gulp.task('sass', function(){
    return gulp.src('custom_design/styles/sass/*.scss') 
    .pipe(sass()) 
    .pipe(gulp.dest('custom_minify_dis/css/sass'));
});
/*End plugin Starts*/

/* using uglify minify jss plugin Starts*/
gulp.task('uglifyJs', function(){
    return gulp.src('custom_design/scripts/*.js') 
    .pipe(uglify()) 
    .pipe(gulp.dest('custom_minify_dis/js/minify'));
});
/*End uglify plugin Starts*/


/* concat three files (customjs forms nakuljs)and do it minify */
gulp.task('jsFieChanges', function(){
    return gulp.src('custom_design/scripts/*.js')
    .pipe(concat('all_minify_file_concat.js'))
    .pipe(uglify())
    .pipe(gulp.dest('custom_minify_dis/js'))
});
/* End concat three files (customjs forms nakuljs)and do it minify */

/* minify css  */
gulp.task('minify-css', function(){
    return gulp.src('custom_design/styles/*.css')
    .pipe(cleanCss())
    .pipe(gulp.dest('custom_minify_dis/css/minify-Css'))
});
/* End minify css*/

/* minify Html*/

/* End minify html*/

/* Watch all the js css and html files and do minify if any changes on the particular page */
gulp.task('watch', function(){
    gulp.watch('custom_design/scripts/*.js', ['jsFieChanges']);
    gulp.watch('custom_design/styles/sass/*.scss', ['sass']);
    gulp.watch('custom_design/styles/*.css', ['minify-css']);
});

/* End watcher */

/* Default task run all the task at one time*/
gulp.task('default', ['gulp-message', 'uglifyJs', 'watch']);
/* End default task*/