import path from 'path'
import alias from '@rollup/plugin-alias'

export default {
  input: 'src/input.js',
  output: {
    dir: 'dist',
    format: 'cjs'
  },
  plugins: [
    alias({
      entries: {
        '@': path.join(__dirname, 'src'),
      },
    }),
  ]
}
