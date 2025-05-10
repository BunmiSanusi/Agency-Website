import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "Agency Website",
  description: "Figma UI design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
          <Navbar />
        <main className="">{children}</main>
      </body>
      <Footer />
    </html>
  );
}
