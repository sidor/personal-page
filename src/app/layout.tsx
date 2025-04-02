import type { Metadata } from "next";
import { Bitter, Homemade_Apple } from "next/font/google";
import "@/styles/globals.scss";
import Footer from "@/components/Footer";

const bitter = Bitter({
    variable: "--font-bitter",
    subsets: ["latin"],
    display: "swap",
    weight: ["500", "600", "700"],
});

const homemadeApple = Homemade_Apple({
    variable: "--font-homemade-apple",
    subsets: ["latin"],
    weight: ["400"],
});

export const metadata: Metadata = {
    title: process.env.NEXT_PUBLIC_SITE_TITLE,
    description: process.env.NEXT_PUBLIC_SITE_DESCRIPION,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${bitter.variable} ${homemadeApple.variable} antialiased flex flex-col min-h-screen`}
            >
                <main className="flex-grow">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
