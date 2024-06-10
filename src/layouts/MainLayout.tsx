import type { Metadata } from "next";
import '@mantine/core/styles.css';
import { Days_One } from "next/font/google";
import { getServerSession } from "next-auth";
import AuthSessionProvider from "@providers/AuthSessionProvider";

import '@mantine/core/styles.css';
import "@styles/globals.sass";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

const daysone = Days_One({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Counter-Strike 2 Grenades",
  description: "Counter-Strike 2 Granades, Smokes, Lineups",
  icons: { icon: "/logos/next-icon.svg" }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <AuthSessionProvider session={session}>
        <head>
          <ColorSchemeScript />
        </head>
        <body>
          <MantineProvider
            theme={{
              fontFamily: daysone.style.fontFamily
            }}
          >{children}</MantineProvider>
        </body>
      </AuthSessionProvider>
    </html>
  );
}
