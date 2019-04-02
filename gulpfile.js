'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');

gulp.task('copyfiles', function(){
	gulp.src('node_modules/syncfusion-javascript/Scripts/ej/web/ej.web.all.min.js')
        .pipe(gulp.dest('vendor'));
	gulp.src('node_modules/syncfusion-javascript/Scripts/ej/common/ej.unobtrusive.min.js')
        .pipe(gulp.dest('public/scripts'));
    gulp.src('node_modules/syncfusion-ej-global/i18n/*.js')
        .pipe(gulp.dest('public/scripts/i18n'));
    gulp.src('node_modules/syncfusion-ej-global/l10n/*.js')
        .pipe(gulp.dest('public/scripts/l10n'));
	gulp.src('node_modules/syncfusion-javascript/Content/ej/web/bootstrap-theme/**')
        .pipe(gulp.dest('public/content/ejthemes/bootstrap-theme'));
	gulp.src('node_modules/syncfusion-javascript/Content/ej/web/default-theme/**')
        .pipe(gulp.dest('public/content/ejthemes/default-theme'));
	gulp.src('node_modules/syncfusion-javascript/Content/ej/web/material/**')
        .pipe(gulp.dest('public/content/ejthemes/material'));
	gulp.src('node_modules/syncfusion-javascript/Content/ej/web/office-365/**')
        .pipe(gulp.dest('public/content/ejthemes/office-365'));
	gulp.src('node_modules/syncfusion-javascript/Content/ej/web/common-images/**')
        .pipe(gulp.dest('public/content/ejthemes/common-images'));
	gulp.src('node_modules/syncfusion-javascript/Content/ej/web/responsive-css/**')
        .pipe(gulp.dest('public/content/ejthemes/responsive-css'));
	gulp.src('node_modules/syncfusion-javascript/Content/ej/web/ribbon-css/**')
        .pipe(gulp.dest('public/content/ejthemes/ribbon-css'));
	gulp.src('node_modules/syncfusion-javascript/Content/ej/web/ej.widgets.core.bootstrap.min.css')
        .pipe(gulp.dest('public/content/ejthemes'));
	gulp.src('node_modules/syncfusion-javascript/Content/ej/web/ej.widgets.core.min.css')
        .pipe(gulp.dest('public/content/ejthemes'));
	gulp.src('node_modules/syncfusion-javascript/Content/ej/web/ej.widgets.core.material.min.css')
        .pipe(gulp.dest('public/content/ejthemes'));
	gulp.src('node_modules/syncfusion-javascript/Content/ej/web/ej.widgets.core.office-365.min.css')
        .pipe(gulp.dest('public/content/ejthemes'));
	gulp.src('app/routes/**')
        .pipe(gulp.dest('public/js'));
	gulp.src('app/templates/**')
		.pipe(rename(function (path) {
			path.extname = ".html";
		}))
        .pipe(gulp.dest('public/html'));
	
});