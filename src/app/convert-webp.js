const exec = require('child_process').execFile;
const GetBinService = require('./../shared/services/get-bin.service');
const BinNameEnum = require('./../shared/enum/bin-name.enum');

/**
 * @description ConvertWebp (cwebp) - Comprimir um arquivo de imagem em um arquivo WebP
 * @returns Promise
 */
const ConvertWebp = (inputImage, outputImage, option = '-q 70 -quiet') => {

  const STRENGTH_NAME = '-o'; // Força a especificação do nome referente ao arquivo WebP de saída
  const query = `${option} "${inputImage}" ${STRENGTH_NAME} "${outputImage}"`;

  return new Promise((resolve) => {
    exec(`"${GetBinService(BinNameEnum.CWEBP)}"`, query.split(/\s+/), { shell: true }, (error, stdout, stderr) => {
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

module.exports = ConvertWebp;
