import { Inter } from "next/font/google";
import "./globals.css";
import './EditorDeCodigoPage.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CodeVerse",
  description: "Es una plantilla para proyectos de la materia de compiladores",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
