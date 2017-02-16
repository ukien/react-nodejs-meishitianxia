/**
 * Created by Administrator on 2017/2/5.
 */
var gulp = require("gulp");

var gulpUglify = require("gulp-uglify");
var autoPrefixer = require("gulp-autoprefixer");

gulp.task("script",function () {
    gulp.src("./js/index.js")
        .pipe(gulpUglify())
        .pipe(gulp.dest("./dist/js"))
});

gulp.task("css",function () {
    gulp.src("./css/*.css")
        .pipe(autoPrefixer({
            browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:true //是否去掉不必要的前缀 默认：true
        }))
        .pipe(gulp.dest("./dist/css"))
});