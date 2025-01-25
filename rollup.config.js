export default {
    input: 'src/FPS.js',
    output: [
     {
      format: 'umd',
      name: 'FPS',
      file: 'build/three-fps.js',
      indent: '\t'
     },
     {
      format: 'es',
      name: 'FPS',
      file: 'build/three-fps.module.js',
      indent: '\t'
     }
    ],
    watch: {
        include: 'src/**'
    },
};