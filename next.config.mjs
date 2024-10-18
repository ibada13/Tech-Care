/** @type {import('next').NextConfig} */
const nextConfig = {
    
        images: {
            remotePatterns: [
              {
                protocol: 'https',
                hostname: 'fedskillstest.ct.digital',
                port: '', // Leave empty for default
                pathname: '/**', // Allows all paths under this domain
              },  ]    
      },
};

export default nextConfig;
