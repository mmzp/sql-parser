import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import {terser} from 'rollup-plugin-terser';
 
const ENV = process.env.NODE_ENV;
 
export default {
  input: 'index.js',
  output: {
    file: `sql-parser.min.js`,
    format: 'umd',
    name: 'SqlParser'
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
    }),
    replace({
      exclude: 'node_modules/**',
      ENV: JSON.stringify(process.env.NODE_ENV),
    }),
    (ENV === 'production' && terser()),
  ],
};