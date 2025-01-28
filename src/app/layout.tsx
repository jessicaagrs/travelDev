import type { Metadata } from 'next';
import { Roboto, Poppins } from 'next/font/google';
import '@/styles/globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
  variable: '--roboto',
});

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--poppins',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Travel Dev',
  description: 'Everything you need for your travels.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/logo.svg" sizes="any" />
      </head>
      <body className={`${roboto.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
