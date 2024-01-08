/** @type {import('next').NextConfig} */

const withPWA = require('@ducanh2912/next-pwa').default({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true,
    scope: '/app',
    sw: 'service-worker.js'
});

const nextConfig = {
    images: {
        domains: ['job-infos.kyawzinthiha.com']
    }
}

module.exports = nextConfig
