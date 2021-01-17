// special icons se LFDS


const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const svgo = require('gulp-svgo');
var fs = require('fs');
var path = require('path');
var merge = require('merge-stream');
const svgPath = 'src/svg/special';
function getFolders(dir) {
  return fs.readdirSync(dir)
    .filter(function(file) {
      return fs.statSync(path.join(dir, file)).isDirectory();
    });
}
const config = {
  shape: {
    id: {
      generator: 'icon-',
    },
  },
  
  mode: {
    
    symbol: {
      // Activate the defs mode
      dest:'',
      bust: false, // Cache busting
      example: false, // Build a page
      sprite: 'icons.svg'
    },
  },
};

var folders = getFolders(svgPath);

const buildSpriteSpecial = () => {
  var tasks = folders.map(function(folder) {
   
    return gulp.src(path.join(svgPath, folder, '/**/*.svg'))
      .pipe(
        svgo({
          plugins: [
            { removeTitle: true },
            { convertColors: {currentColor: '#FF0000'}}
          ],
        })
      )
      .pipe(svgSprite(config))
      .pipe(gulp.dest('dist/sprite/special/' + folder));

  });
 return merge(tasks);  
};
module.exports = buildSpriteSpecial;