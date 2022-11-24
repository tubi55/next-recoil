import Head from 'next/head';

function HeadInfo({ title }) {
	return (
		<Head>
			<title>{`DCODELAB | ${title}`}</title>
		</Head>
	);
}

export default HeadInfo;
