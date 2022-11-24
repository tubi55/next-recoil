import HeadInfo from '../components/Head';
import { useRecoilValue } from 'recoil';
import { vidsAtom } from '../atoms';

function Youtube() {
	const Vids = useRecoilValue(vidsAtom);
	console.log(Vids);

	return (
		<main>
			<HeadInfo title={'Youtube'} />
			<h1>Youtube</h1>

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
		</main>
	);
}

export default Youtube;
