import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
   
        images: {
          remotePatterns: [
            // 1
            {
                protocol: 'https',
                hostname : 'sevensol.com',
                port: '',
                pathname: '/wp-content/uploads/2022/10/innovation.png',
            },
            // 2
            {
                protocol: 'https',
                hostname : 'sevensol.com',
                port: '',
                pathname: '/wp-content/uploads/2022/10/quality.png',
            },
            // 3
              {
                protocol: 'https',
                hostname : 'sevensol.com',
                port: '',
                pathname: '/wp-content/uploads/2022/10/experience.png',
            },
            // 4
            {
                protocol: 'https',
                hostname : 'sevensol.com',
                port: '',
                pathname: '/wp-content/uploads/2022/10/happy-clients.png',
            },
            // 5
            {
                protocol: 'https',
                hostname : 'sevensol.com',
                port: '',
                pathname: '/wp-content/uploads/2022/10/support.png',
            },
            // ---------------------- Below configuration is process images -----------------
            // 6
            {
                protocol: 'https',
                hostname : 'conremenergy.co.za',
                port: '',
                pathname: '/wp-content/uploads/2024/02/Request-Call.png',
            },
            // 7
            {
                protocol: 'https',
                hostname : 'conremenergy.co.za',
                port: '',
                pathname: '/wp-content/uploads/2024/02/Consultation.png',
            },
            // 8
            {
                protocol: 'https',
                hostname : 'conremenergy.co.za',
                port: '',
                pathname: '/wp-content/uploads/2024/02/Planning.png',
            },
            // 9
            {
                protocol: 'https',
                hostname : 'conremenergy.co.za',
                port: '',
                pathname: '/wp-content/uploads/2024/02/Work-Process.png',
            },
            // 10
            {
                protocol: 'https',
                hostname : 'conremenergy.co.za',
                port: '',
                pathname: '/wp-content/uploads/2024/02/Deliver.png',
            },
            // 11
            {
                protocol: 'https',
                hostname : 'conremenergy.co.za',
                port: '',
                pathname: '/wp-content/uploads/2024/02/Correcting.png',
            },

            {
                protocol: 'https',
                hostname: 'sitenivel.com.br',
                port: '',
                pathname: '/wp-content/uploads/2024/03/Artboard-1@2x2.png'
            }



          ]
        },
      
};

export default nextConfig;

// module.exports = {
//     images : {
//         domains : ['sevensol.com']
//     }
// }
