/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.ignoreWarnings = [
      {
        module: /node_modules\/punycode/,
        message: /.*The `punycode` module is deprecated.*/,
      },
    ];
    return config;
  },
  images: {
    domains: ['res.cloudinary.com'], 
  },
}

module.exports = nextConfig
