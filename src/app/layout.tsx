import { Footer } from "@/layouts/Footer";
import "./globals.css";

export const metadata = {
  title: "Ana Paula",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@500;900&family=Roboto+Slab:wght@500;900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="bg-stone-500">
        {children}
        <Footer />
      </body>
    </html>
  );
}
