import HeadInfo from '../components/Head';
import { useRecoilValue } from 'recoil';
import { vidsAtom } from '../atoms';
import Link from 'next/link';

function Main() {
	const Vids = useRecoilValue(vidsAtom);

	return (
		<main>
			<HeadInfo title={'Home'} />
			<h1>Main</h1>
			<section>
				{!Vids && <p>Loading...</p>}
				{Vids?.map((vid, idx) => {
					if (idx >= 2) return;

					return (
						<article key={vid.id}>
							<div className='pic'>
								<Link
									href={{
										pathname: `/detail/${vid.snippet.resourceId.videoId}`,
										query: {
											title: vid.snippet.title,
											description: vid.snippet.description,
										},
									}}>
									<img src={vid.snippet.thumbnails.high.url} alt={vid.snippet.title} />
								</Link>
							</div>
							<h2>{vid.snippet.title}</h2>
						</article>
					);
				})}
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
