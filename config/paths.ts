import path from 'path'

interface Paths {
  src: string
  build: string
  public: string
}

const paths: Paths = {
  // Source files
  src: path.resolve(__dirname, '../src'),

  // Production build files
  build: path.resolve(__dirname, '../dist'),

  // Static files that get copied to build folder
  public: path.resolve(__dirname, '../public'),
}

export default paths