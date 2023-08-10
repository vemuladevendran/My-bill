import { CapacitorConfig } from '@capacitor/cli';
import { url } from 'inspector';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'My Bill',
  webDir: 'www',
  server: {
    // androidScheme: 'https',
    url: 'http://192.168.224.166:8100',
    cleartext: true
  }
};

export default config;
