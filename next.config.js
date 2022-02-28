const withTM = require('next-transpile-modules')([
  '@mui/material',
  '@mui/system',
]); // pass the modules you would like to see transpiled

module.exports =   withTM({
    reactStrictMode: true,
    webpack: (config) => {
      config.resolve.alias = {
        ...config.resolve.alias,
      };
      return config;
    },
  }
);
