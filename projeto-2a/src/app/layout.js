import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: "Projeto Isabelly",
  description: "Portfólio da isa",
  charset: 'UTF-8',
  author: 'IsaLinda',
  keywords: 'HTML, CSS, JavaScript, React, Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
