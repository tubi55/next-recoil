import HeadInfo from '../components/Head';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { vidsAtom } from '../atoms';

function Main() {
	const [Vids, setVids] = useRecoilState(vidsAtom);

	const fetchYoutube = async () => {
		const data = await fetch('/api/youtube');
		const result = await data.json();
		setVids(result.items);
	};

	useEffect(() => {
		fetchYoutube();
	}, []);

	return (
		<main>
			<HeadInfo title={'Home'} />
			<h1>Main</h1>
			<section>
				{!Vids && <p>Loading...</p>}
				{Vids?.map((vid) => (
					<article key={vid.id}>
						<div className='pic'>
							<img src={vid.snippet.thumbnails.high.url} alt={vid.snippet.title} />
						</div>
						<h2>{vid.snippet.title}</h2>
					</article>
				))}
			</section>

			<style jsx>{`
				h1 {
					margin-bottom: 40px;
				}
				section {
					width: 100%;
					display: flex;
					justify-content: space-between;
					align-content: flex-start;
					flex-wrap: wrap;
				}
				section article {
					width: 48%;
					margin-bottom: 50px;
				}
				section article .pic {
					overflow: hidden;
					width: 100%;
					height: 20vh;
				}
				section article .pic img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
				section article h2 {
					font: bold 14px/1.2 'arial, 돋움';
					color: #555;
					margin-top: 20px;
				}

				@media screen and (max-width: 740px) {
					section article {
						width: 100%;
					}
					section article .pic {
						height: 15vh;
					}
				}
			`}</style>
		</main>
	);
}

export default Main;
