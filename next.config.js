/** @type {import('next').NextConfig} */

const youtube_key = process.env.YOUTUBE_KEY;

const nextConfig = {
	reactStrictMode: true,
	async rewrites() {
		return [
			{
				source: '/api/youtube',
				destination: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${youtube_key}&playlistId=PLGOVj4gmzJyDZ4VkTTHeQFBnJzNPCjxYJ&maxResults=14`,
			},
		];
	},
};

module.exports = nextConfig;
