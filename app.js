import { getSystemInfo } from './os-module.js';
import fs from 'fs';

const systemInfo = getSystemInfo();
const systemInfoString = `
Platform: ${systemInfo.operatingSystem}
Arch: ${systemInfo.cpuArchitecture}
Number of CPUs: ${systemInfo.numberOfCPUs}
Total Memory: ${systemInfo.totalMemory} GB
Free Memory: ${systemInfo.freeMemory} GB
`;

fs.writeFile('system-info.txt', systemInfoString, (err) => {
  if (err) throw err;
  console.log('System information has been saved to system-info.txt');
});
