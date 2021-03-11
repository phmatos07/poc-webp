const dotenv = require('dotenv').config();
const ConvertWebp = require('./convert-webp/convert-webp');
const DecompressWebp = require('./decompress-webp/decompress-webp');

try {

  if (dotenv.error) {
    throw dotenv.error;
  }

  // ConvertWebp('images/teste.jpg', 'build/teste.webp', '-q 80', '-v');
  // DecompressWebp('build/teste.webp', 'teste.png', '-q 80', '-v');

} catch (error) {
  console.error(error);
}
