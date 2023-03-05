/** @type {import('next').NextConfig} */
module.exports = {
	experimental: { appDir: true },
	reactStrictMode: true,
	images: {
		domains: ["via.placeholder.com"],
		formats: ["image/avif", "image/webp"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "assets.vercel.com",
				port: "",
				pathname: "/image/upload/**",
			},
		],
	},
};
