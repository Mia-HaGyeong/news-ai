import type { Metadata } from "next";
// import { ClerkProvider, SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Noto_Serif_KR } from 'next/font/google';
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers";

const inter = Inter({ subsets: ["latin"] });
const notoSerifKR = Noto_Serif_KR({
  variable: '--font-noto-serif-korean',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "AI Researcher",
  description: "AI Researcher",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ClerkProvider>
    //   <html lang="en" className="light" suppressHydrationWarning={true}>
    //     <body className={`${inter.className} ${notoSerifKR.className} antialiased`}>
    //       <ThemeProvider>
    //         <header className="flex justify-end items-center p-4 gap-4 h-16">
    //           <SignedOut>
    //             <SignInButton />
    //             <SignUpButton />
    //           </SignedOut>
    //           <SignedIn>
    //             <UserButton />
    //           </SignedIn>
    //         </header>
    //         {children}
    //       </ThemeProvider>
    //     </body>
    //   </html>
    // </ClerkProvider>
    <html lang="en" className="light" suppressHydrationWarning={true}>
      <body className={`${inter.className} ${notoSerifKR.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
