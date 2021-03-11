const exec = require('child_process').execFile;
const Cwebp = require('./cwebp');

const ConvertWebp = (inputImage, outputImage, option, logging = '-quiet') => {

  const query = `${option} "${inputImage}" -o "${outputImage}" "${logging}"`;

  return new Promise((resolve) => {
    exec(`"${Cwebp()}"`, query.split(/\s+/), { shell: true }, (error, stdout, stderr) => {
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
