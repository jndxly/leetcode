// 获取 gulp
var gulp = require('gulp');
// 获取 uglify 模块（用于压缩 JS）
var uglify = require('gulp-uglify');
/*合并js文件*/
var concat = require('gulp-concat');
// 压缩 js 文件
// 在命令行使用 gulp script 启动此任务
gulp.task('jscompress', function() {
    // 1. 找到文件
    return gulp.src(['bigNumAdd.js','convert.js','!gulpfile.js'])
    //2.合并文件
        .pipe(concat('qiwan_core.js'))
    // 3. 压缩文件
        .pipe(uglify())
        // 4. 另存压缩后的文件
        .pipe(gulp.dest('dist'));
});