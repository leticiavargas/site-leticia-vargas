import localFont from "next/font/local";
import { Inter } from 'next/font/google'
import "./globals.css";

const fivoSans = localFont({
  src: [
    {
      path: "./fonts/FivoSansModern-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/FivoSansModern-Bold.otf",
      weight: "700",
      style: "normal",
    }
  ],
  variable: "--font-fivo-sans",
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: "Letícia Vargas",
  description: "Pensar em uma descrição boa ... ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${fivoSans.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
