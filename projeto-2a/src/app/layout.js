
import "./globals.css";
import Header from "../components/header/Header";
;


export const metadata = {
  title: "Primeira aplicação",
  description: "Aplicação de front-end II",
  charset: 'UTF-8',
  author: 'Ana Isabely',
  keywords: 'HTML, CSS, JavaScript, React, Next.js'
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}