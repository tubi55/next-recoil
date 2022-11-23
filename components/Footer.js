function Footer() {
	return (
		<>
			<footer>
				<h1>DCODELAB</h1>
				<p>2023 dcodelab&copy; All rights reserved.</p>
			</footer>
			<style jsx>{`
				footer {
					width: 100%;
					padding: 50px 5vw;
					border-top: 1px solid #ddd;
					display: flex;
					justify-content: space-between;
				}
				footer h1 {
					font: bold 18px/1 'arial';
					color: #555;
				}
			`}</style>
		</>
	);
}

export default Footer;
