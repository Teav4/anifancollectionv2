/** @type {import('next').NextConfig} */

const path = require('path');

const basePath = '/ani';

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
	webpackDevMiddleware: config => {
		config.watchOptions = {
			poll: 1000,
			aggregateTimeout: 300
		}

		return config
	},
  swcMinify: true,
  eslint: {
    dirs: ['pages', 'api', 'constants'],
  },
  basePath,
  sassOptions: {
    includePaths: [path.join(__dirname)],
  },
}

module.exports = nextConfig
