import "./globals.css";

export const metadata = {
  title: "DHAARA '26 | Sri Lanka's Premier Inter-Faculty Music Competition",
  icons: {
    icon: "/assets/logo_gold.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
