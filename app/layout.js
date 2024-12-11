import ClientLayout from "./ClientLayout";

export const metadata = {
  title: "Neelothpal Samala",
  description: "My Personal Portfolio",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
