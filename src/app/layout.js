import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

const font = Source_Sans_3({ subsets: ["latin"] });

export const metadata = {
  title: "Alura Flix - Willian",
  description: "Projeto final do curso defront end da alura",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={font.className}>{children}</body>
    </html>
  );
}
