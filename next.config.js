/** @type {import('next').NextConfig} */

const youtube_key = process.env.YOUTUBE_KEY;

const nextConfig = {
	reactStrictMode: true,
	async rewrites() {
		return [
			{
				source: '/api/youtube',
				destination: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${youtube_key}&playlistId=PLtt429gshWMp4G-VhNTFhBzBTd7GOEz-G&maxResults=4`,
			},
		];
	},
};

module.exports = nextConfig;
