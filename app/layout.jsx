import "./globals.css";
export const metadata = {
  title: "AI Security",
  description: "Landing Page"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}