import HeadInfo from '../components/Head';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { vidsAtom } from '../atoms';

function Youtube() {
	const Vids = useRecoilValue(vidsAtom);
	console.log(Vids);
	return (
		<main>
			<HeadInfo title={'Youtube'} />
			<h1>Youtube</h1>
		</main>
	);
}

export default Youtube;
