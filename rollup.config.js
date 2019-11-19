import typescript from 'rollup-plugin-typescript';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';
import resolve from 'rollup-plugin-node-resolve';
const extensions = ['.js', '.ts'];

export default {
  input: 'source/piko.ts',
  output: [
    {
      file: pkg.main,
      name: 'color',
      format: 'commonjs',
      sourcemap: true,
      plugins: [
        terser(),
      ],
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [

    // Compile TypeScript files.
    typescript({
      exclude: 'node_modules/**',
    }),

    resolve({
      mainFields: ['module', 'jsnext'],
      extensions,
    }),

    babel({
      exclude: 'node_modules/**',
      extensions,
      runtimeHelpers: true,
    }),

    commonjs(),
  ],
}