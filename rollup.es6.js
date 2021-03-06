/* eslint-disable */
import { terser } from 'rollup-plugin-terser'
import commonjs from 'rollup-plugin-commonjs'
import html from 'rollup-plugin-bundle-html'
export default [
  {
    input: 'src/es6-index.js',
    plugins: [
      commonjs({
        include: '**'
      }),
      terser(),
      html({
          template: 'src/entry/index.html',
          dest: "builds/es6/rollup/web",
          filename: 'index.html'
      })
    ],
    output: {
      file: __dirname + '/builds/es6/rollup/web/index.js',
      format: 'iife',
      name: 'index'
    }
  },
  {
    input: 'src/es6-lib.js',
    plugins: [
      commonjs({
        include: '**'
      }),
      terser()
    ],
    output: {
      file: __dirname + '/builds/es6/rollup/node/lib.js',
      format: 'umd',
      name: 'lib'
    }
  }
]
