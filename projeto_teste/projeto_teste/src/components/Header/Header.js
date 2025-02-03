import styles from "./Header.module.css";

export default function Header() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
        <li><a href="/">Home</a></li>
        <li><a href="/medico">Médicos</a></li>
        <li><a href="/paciente">Pacientes</a></li>
        <li><a href="/consulta">Consultas</a></li>
      </ul>
    </nav>
  );
}