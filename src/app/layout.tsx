import localFont from "next/font/local";
import "./globals.css";
import Menu from "@/components/menu";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "400", "700", "900"],
  style: "normal",
  variable: "--roboto",
  subsets: ["latin"],
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      >
        <Menu op1={"Página 1"} op2={"Página 2"} op3={"Página 3"} op4={"Página 4"} />
        {children}
      </body>
    </html>
  );
}
