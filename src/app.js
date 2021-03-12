const ConvertWebp = require('./app/convert-webp');
const DecompressWebp = require('./app/decompress-webp');
const ConvertGifWebp = require('./app/convert-gif-webp');
const AnimatedWebp = require('./app/animated-webp');

// ConvertWebp('images/teste1.jpg', 'build/webp/teste.webp', '-q 20').then((dados) => console.log(dados));
// DecompressWebp('build/webp/teste.webp', 'teste.png').then((dados) => console.log(dados));
// ConvertGifWebp('images/teste.gif', 'build/gif/teste.webp', '-q 20').then((dados) => console.log(dados));

/* const imagens = [
  '"images/teste1.jpg"',
  '-lossy',
  '"images/teste2.jpg"',
  '-d 100',
  '"images/teste3.jpg"',
  '-d 100',
  '"images/teste4.jpg"'
];
AnimatedWebp(imagens, 'build/webp/teste.webp').then((dados) => console.log(dados)); */
