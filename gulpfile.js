const gulp = require('gulp');
const clean = require('./src/tasks/clean');
const buildSprite = require('./src/tasks/build-sprite');
const buildSpriteSpecial = require('./src/tasks/build-sprite-special');
const buildSvg = require('./src/tasks/build-svg-dist');

/* Tasks */
gulp.task('clean', clean);
gulp.task('build:sprite', buildSprite);
gulp.task('build:spriteSpecial', buildSpriteSpecial);
gulp.task('build:svg', buildSvg);
gulp.task('build', ['build:sprite', 'build:spriteSpecial', 'build:svg']);
