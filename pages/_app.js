import Footer from '../components/Footer';
import Header from '../components/Header';

function App({ Component, pageProps }) {
	return (
		<>
			<Header />
			<Component {...pageProps} />
			<Footer />
			<style jsx global>{`
				* {
					margin: 0;
					padding: 0;
					box-sizing: border-box;
				}
				ul,
				ol,
				li {
					list-style: none;
				}
				a {
					text-decoration: none;
				}
				main {
					min-height: 700px;
					padding: 100px 5vw;
				}
			`}</style>
		</>
	);
}

export default App;
