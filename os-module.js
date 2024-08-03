import { platform, arch, cpus, totalmem, freemem } from 'os';

export const getSystemInfo = () => ({
  operatingSystem: platform(),
  cpuArchitecture: arch(),
  numberOfCPUs: cpus().length,
  totalMemory: (totalmem() / (1024 ** 3)).toFixed(2),
  freeMemory: (freemem() / (1024 ** 3)).toFixed(2)
});
