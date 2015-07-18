module.exports = function(grunt) {

  grunt.initConfig({
    less: {
      compile :{
        options: {
          sourceMap: true,
          sourceMapFilename: 'css/main.css.map',
          sourceMapRootpath: '/v2',
          sourceMapURL: 'main.css.map',
          strictMath: true 
        },
        files: [
          {
            expand: true,
            cwd: 'src/less',
            src: ['*.less'],
            dest: 'css/',
            ext: '.css'
          }
        ]
      },
    },

    watch: {
      less: {
        files: 'src/less/*.less',
        tasks: 'less'
      }
    },
  });

  // Load the plugin that provides the "less" task.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');



}