/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{protocol: "https", hostname: "rickandmortyapi.com"}]
    },
    rewrites: () => {
        return [
            {
                source: "/",
                destination: "/home"
            },
            {
                source: "/pagina-sem-hook",
                destination: "/hook-page"
            }
        ]
    }
};

export default nextConfig;
