const dotenv = require('dotenv').config();
const path = require('path');
const fs = require('fs');
const OperatingSystemEnum = require('../enum/operating-system.enum');
const ArchitectureEnum = require('../enum/architecture.enum');
const BinNameEnum = require('./../enum/bin-name.enum');

const GetBinService = (binName = BinNameEnum.CWEBP) => {

  try {

    if (dotenv.error) {
      throw dotenv.error;
    }

    const FOLDER_LEVEL = '../../../';

    switch (process.platform) {
      case OperatingSystemEnum.MAC_OSX:
        var exePathMacOsx = path.join(__dirname, FOLDER_LEVEL, `${process.env.LIBWEBP_MAC_OSX}/${binName}`);
        fs.chmodSync(exePathMacOsx, 0o755);
        return exePathMacOsx;

      case OperatingSystemEnum.LINUX:
        var exePathLinux = path.join(__dirname, FOLDER_LEVEL, `${process.env.LIBWEBP_LINUX}/${binName}`) || '';
        fs.chmodSync(exePathLinux, 0o755);
        return exePathLinux;

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
