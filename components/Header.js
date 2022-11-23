import Link from 'next/link';
import { useRouter } from 'next/router';

function Header() {
	const router = useRouter();

	return (
		<header>
			<h1>
				<Link href='/'>DCODELAB</Link>
			</h1>

			<nav>
				<Link href='/about' style={{ color: router.pathname === '/about' ? 'hotpink' : 'gray' }}>
					About
				</Link>
				<Link
					href='/youtube'
					style={{ color: router.pathname === '/youtube' ? 'hotpink' : 'gray' }}>
					Youtube
				</Link>
			</nav>
		</header>
	);
}

export default Header;
