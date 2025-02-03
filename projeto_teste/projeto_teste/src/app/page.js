import styles from './page.module.css';

export default function Page() {
  return (
    <div className={styles.title}>
      <h1>Bem-vindo à Clínica Médica</h1>
      <p>Escolha uma opção no menu acima.</p>
    </div>
  );
}