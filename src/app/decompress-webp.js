const exec = require('child_process').execFile;
const GetBinService = require('./../shared/services/get-bin.service');
const BinNameEnum = require('./../shared/enum/bin-name.enum');

/**
 * @description DecompressWebp (dwebp) - Descompacta arquivos WebP em imagens PNG, PAM, PPM ou PGM. Nota: Arquivos WebP animados não são suportados
 * @returns Promise
 */
const DecompressWebp = (inputImage, outputImage, option = '') => {

  const STRENGTH_NAME = '-o'; // Força a especificação do nome referente ao arquivo WebP de saída
  const query = `"${inputImage}" ${STRENGTH_NAME} ${option} "${outputImage}"`;

  return new Promise((resolve) => {
    exec(`"${GetBinService(BinNameEnum.DWEBP)}"`, query.split(/\s+/), { shell: true }, (error, stdout, stderr) => {
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

module.exports = DecompressWebp;
