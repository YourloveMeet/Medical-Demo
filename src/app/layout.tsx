import type { Metadata } from "next";
import { PageLoader } from "@/components/page-loader";
import "./globals.css";

export const metadata: Metadata = {
  title: "PhysioVital",
  description: "PhysioVital portfolio hero page"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
