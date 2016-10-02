module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
    options: {
      separator: '',
    },
    dist: {
      src: [ 'styles/reset.scss','styles/style.scss', 'styles/slick.scss', 'styles/slick-theme.scss'],
      dest: 'styles/main.scss',
    },
  },
    sass: {
    dist: {
      files: [{
        expand: true,
        cwd: 'styles',
        src: ['main.scss'],
        dest: 'dist',
        ext: '.css'
      }]
    }
  },
  cssmin: {
  target: {
    files: [{
      expand: true,
      cwd: 'dist',
      src: ['main.css'],
      dest: 'dist',
      ext: '.min.css'
    }]
  }
},

    watch: {
  css: {
    files: 'styles/*.scss',
    tasks: ['concat','sass'],
    options: {
      livereload: true,
    },
  },
},
  });

grunt.loadNpmTasks('grunt-contrib-concat');
 grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', [ 'concat','sass','cssmin']);

};