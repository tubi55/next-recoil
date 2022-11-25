import { useRouter } from 'next/router';

function YoutubeDetail() {
	const router = useRouter();
	console.log(router);

	return (
		<main>
			<figure className='vidFrame'>
				<iframe src={`https://www.youtube.com/embed/${router.query.id}`} frameBorder='0'></iframe>
			</figure>

			<h1>{router.query.title}</h1>
			<p>{router.query.description}</p>

			<style jsx>{`
				.vidFrame {
					width: 100%;
					height: 60vh;
				}
				.vidFrame iframe {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			`}</style>
		</main>
	);
}

export default YoutubeDetail;
