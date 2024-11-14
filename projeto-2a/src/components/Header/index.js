import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>Meu Logo</div>
            <button className={styles.menuButton} onClick={toggleMenu}>
                {menuOpen ? "✖" : "☰"}
            </button>
            <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/sobre">Sobre</Link></li>
                    <li><Link href="/contato">Contato</Link></li>
                </ul>
            </nav>
        </header>
    );
}
