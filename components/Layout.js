import Footer from './Footer';
import Header from './Header';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { vidsAtom } from '../atoms';

function Layout({ children }) {
	const [_, setVids] = useRecoilState(vidsAtom);

	const fetchYoutube = async () => {
		const data = await fetch('/api/youtube');
		const result = await data.json();
		setVids(result.items);
	};

	useEffect(() => {
		fetchYoutube();
	}, []);

	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

export default Layout;
