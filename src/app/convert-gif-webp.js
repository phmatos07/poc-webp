const exec = require('child_process').execFile;
const GetBinService = require('./../shared/services/get-bin.service');
const BinNameEnum = require('./../shared/enum/bin-name.enum');

/**
 * @description ConvertGifWebp (gif2webp) - Converta uma imagem GIF em WebP
 * @returns Promise
 */
const ConvertGifWebp = (inputImage, outputImage, option = '-q 70 -quiet') => {

  const STRENGTH_NAME = '-o'; // Força a especificação do nome referente ao arquivo WebP de saída
  const query = `${option} "${inputImage}" ${STRENGTH_NAME} "${outputImage}"`;

  return new Promise((resolve) => {
    exec(`"${GetBinService(BinNameEnum.GIF2_WEBP)}"`, query.split(/\s+/), { shell: true }, (error, stdout, stderr) => {
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

module.exports = ConvertGifWebp;
