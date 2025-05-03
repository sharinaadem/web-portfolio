import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sharina Adem | Creative Developer",
  description: "Sharina Adem - Web Developer & UI/UX Designer crafting digital experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Poppins:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-poppins">
        {children}
      </body>
    </html>
  );
}
