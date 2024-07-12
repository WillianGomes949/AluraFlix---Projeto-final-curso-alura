import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

const font = Source_Sans_3({ subsets: ["latin"] });

export const metadata = {
  title: "Alura Flix - Willian",
  description: "Projeto final do curso de front - End da alura",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={font.className}>
        <div className="bg-gray-800">{children}</div>
        </body>
    </html>
  );
}
