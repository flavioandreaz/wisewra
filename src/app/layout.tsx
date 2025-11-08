import type { Metadata } from "next";
import { Nunito} from "next/font/google";
import "@/styles/globals.css";

const nunito = Nunito({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WiseWra",
  description: "WiseWra app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={cn(nunito.variable, "antialiased font-sans dark")}>
        {children}
      </body>
    </html>
  );
}
