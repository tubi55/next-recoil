import Link from 'next/link';
import { useRouter } from 'next/router';

function Header() {
	const router = useRouter();

	return (
		<>
			<header>
				<h1>
					<Link href='/' legacyBehavior>
						<a>DCODELAB</a>
					</Link>
				</h1>

				<nav>
					<Link href='/about' legacyBehavior>
						<a className={router.pathname === '/about' ? 'active' : ''}>About</a>
					</Link>
					<Link href='/youtube' legacyBehavior>
						<a className={router.pathname === '/youtube' ? 'active' : ''}>Youtube</a>
					</Link>
				</nav>
			</header>

			<style jsx>{`
				header {
					width: 100%;
					height: 100px;
					background-color: #222;
					padding: 30px 5vw;
					box-sizing: border-box;
					display: flex;
					justify-content: space-between;
					align-items: center;
				}
				header nav {
					display: flex;
					gap: 40px;
				}
				header h1 a {
					text-decoration: none;
					font: bold 30px/1 'arial';
					color: #fff;
				}
				header nav a {
					text-decoration: none;
					font: bold 16px/1 'arial';
					color: #555;
				}
				header nav a.active {
					color: hotpink;
				}
			`}</style>
		</>
	);
}

export default Header;
