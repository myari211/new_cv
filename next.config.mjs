/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/new_cv',
    assetPrefix: '/new_cv/',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
