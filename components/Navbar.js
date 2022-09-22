import { useRouter } from "next/router";
import Link from "next/link";
import utilStyles from '../styles/utils.module.css';


const navigationRoutes = ["home", "about", "contact"];

export default function Navbar() {
    const router = useRouter();
    return (
        <nav className={utilStyles.navContainer}>
            {navigationRoutes.map((singleRoute) => {
                return (
                    <NavigationLink
                        key={singleRoute}
                        href={`/${singleRoute}`}
                        text={singleRoute}
                        router={router}
                    />
                );
            })}
        </nav>
    );
}

function NavigationLink({ href, text, router }) {
    const isActive = router.asPath === (href === "/home" ? "/" : href);
    return (
        <Link href={href === "/home" ? "/" : href} passHref>
            <a
                href={href === "/home" ? "/" : href}
                className={utilStyles.navItem}>
                <span>{text}</span>
            </a>
        </Link>
    );
}