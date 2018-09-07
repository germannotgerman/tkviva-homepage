var gulp = require("gulp"),
postcss = require("gulp-postcss"),
cssImport = require("postcss-import");

gulp.task("styles", function(){
	return gulp.src('./app/assets/dev_styles/styles.css')
	.pipe(postcss([cssImport]))
	.on('error', function(errorInfo){
		console.log(errorInfo.toString());
		this.emit('end');
	})
	.pipe(gulp.dest('./app/styles'));
});