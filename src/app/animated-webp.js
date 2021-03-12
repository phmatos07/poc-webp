const exec = require('child_process').execFile;
const GetBinService = require('./../shared/services/get-bin.service');
const BinNameEnum = require('./../shared/enum/bin-name.enum');

/**
 * @description AnimatedWebp (img2webp) - Crie um arquivo WebP animado a partir de uma sequência de imagens de entrada.
 * @returns Promise
 */
const AnimatedWebp = (inputImages, outputImage, option = '-loop 0 -q 70') => {

  const STRENGTH_NAME = '-o'; // Força a especificação do nome referente ao arquivo WebP de saída
  const queryString = Array.isArray(inputImages) && inputImages.join(' ') || null;
  const query = `${option} ${queryString} ${STRENGTH_NAME} "${outputImage}"`;

  return new Promise((resolve) => {
    exec(`"${GetBinService(BinNameEnum.IMG2_WEBP)}"`, query.split(/\s+/), { shell: true }, (error, stdout, stderr) => {
      try {
        if (error) {
          throw error;
        }
        resolve(stdout ? stdout : stderr);
      } catch (error) {
        console.group(`Comando Executado: ${query}`);
        console.log('----------------------------------------------------------------');
        console.warn(error);
        console.groupEnd();
      }
    });
  });
};

module.exports = AnimatedWebp;
