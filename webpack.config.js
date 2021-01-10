// const path = require('path');

// module.exports = {
//   entry: './src/code.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'code.bundle.js',
//   },
//   module: {
//     // babel.config.js의 설정을 이용
//     rules: [{ test: /\.js$/, use: 'babel-loader' }],
//   },
//   // 프로덕션 모드로 설정하면 자바스크립트 코드 압축을 포함한 여러가지 최적화 기능이 기본으로 들어간다.
//   mode: 'production',
//   // 웹팩은 기본적으로 자바스크립트 파일을 압축한다. 하지만 바벨이 제대로 실행됐는지 확인하기 위해 압축 기능을 잠시 끈다.
//   optimization: { minimizer: [] },
// };
