const path = require('path');
const OperatingSystemEnum = require('../enum/operating-system.enum');
const ArchitectureEnum = require('../enum/architecture.enum');
const BinNameEnum = require('./../enum/bin-name.enum');
const FOLDER_LEVEL = '../../../';

const GetBinService = (binName = BinNameEnum.LINUX) => {

  try {
    switch (process.platform) {
      case OperatingSystemEnum.MAC_OSX:
        return path.join(__dirname, FOLDER_LEVEL, `${process.env.LIBWEBP_MAC_OSX}/${binName}`);

      case OperatingSystemEnum.LINUX:
        return path.join(__dirname, FOLDER_LEVEL, `${process.env.LIBWEBP_LINUX}/${binName}`);

      case OperatingSystemEnum.WINDOWS:
        if (process.arch === ArchitectureEnum.X64) {
          return path.join(__dirname, FOLDER_LEVEL, `${process.env.LIBWEBP_WINDOWS_64}\\${binName}.exe`);
        }
        throw new Error(process.arch);

      default:
        throw new Error(process.platform);
    }
  } catch (error) {
    console.group('Infelizmente não damos suporte para essa arquitetura de sistema.');
    console.warn(error);
    console.groupEnd();
  }
};

module.exports = GetBinService;
