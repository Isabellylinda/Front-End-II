import './globals.css'; // Estilos globais
import Header from '../components/Header/Header'; // Importa o Header

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        <Header />
        {children} {/* Renderiza cada página */}
      </body>
    </html>
  );
}