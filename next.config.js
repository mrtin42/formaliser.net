/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            stream: require.resolve('stream-browserify'),
            crypto: require.resolve('crypto-browserify'),
        }
    }
}

module.exports = nextConfig
