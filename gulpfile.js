const gulp = require('gulp');

// 拷贝非ts外的所有文件
function cp() {
    const filelTypes = ["json", "wxml", "wxss", "jpg", "png", "gif"]
    // ['src/**/*.wxml', 'src/**/*.json', 'src/**/*.wxss'];
    const src = filelTypes.map((fileType) => `src/**/*${fileType}`)
    const dest = 'dist'
    gulp.src(src, { base: './src' }).pipe(gulp.dest(dest))
}
gulp.task('cp', (done) => {
    cp()
    done();
});
gulp.task('default', gulp.parallel('cp'), (done) => {
    done();
});