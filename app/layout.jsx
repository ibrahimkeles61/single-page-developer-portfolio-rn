import "./globals.css";

export const metadata = {
  title: "İbrahim Keleş",
  // description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/assets/favicon_io/favicon.ico"
          type="image/x-icon"
          sizes="48x48"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}