import Layout from '../components/Layout';
import '../styles/globals.css';
import { RecoilRoot } from 'recoil';

function App({ Component, pageProps }) {
	return (
		<RecoilRoot>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</RecoilRoot>
	);
}

export default App;
