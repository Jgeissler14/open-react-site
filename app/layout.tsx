import type {Metadata} from "next";
import {Mulish} from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "@/components/layout/Navbar";
import {ThemeProvider} from "@/app/theme-provider";
import Footer from "@/components/layout/Footer";
import { DynaPuff } from "@next/font/google"

const font = DynaPuff({
    subsets: ["latin"],
    weight: '400',
});

export const metadata: Metadata = {
    title: "Cloudzap",
    description: "DevOps for Federal Contractors on Azure",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className="dark">
        <body className={font.className}>
        <ThemeProvider>
            <Navbar/>
            {children}
            <Footer/>
        </ThemeProvider>
        </body>
        </html>
    );
}
