const exec = require('child_process').execFile;
const GetBinService = require('./../shared/services/get-bin.service');
const BinNameEnum = require('./../shared/enum/bin-name.enum');

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
        console.warn(error);
      }
    });
  });
};

module.exports = ConvertWebp;
