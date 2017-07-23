import alias from 'rollup-plugin-alias';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';

export default {
  entry: 'src/main.ts',
  format: 'iife',
  dest: 'build/bundle.es2015.js',
  sourceMap: true,
  plugins: [
    typescript(),
    alias({
      rxjs: __dirname + '/node_modules/rxjs-es',
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
  ],
};
