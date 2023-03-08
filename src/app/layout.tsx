import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: {
    default: "Pokemons",
    template: "%s | Pokemons",
  },
  description: "Poekemon next app for 1.WebIT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <nav>
            <Link href="/">PokeHome</Link>
          </nav>
          <div style={{ padding: "20px 0", width: "100%" }}>{children}</div>
        </main>
      </body>
    </html>
  );
}
