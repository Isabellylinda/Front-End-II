import styles from './page.module.css';

export default function Page() {
  return (
    <div className={styles.title}>
      <h1>Bem-vindo ao Hospital Lopes</h1>
      <p>Sua saúde é nossa prioridade. Atendimento médico de qualidade e acolhedor para você e sua família.</p>
    </div>
  );
}