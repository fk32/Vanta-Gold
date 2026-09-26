export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body style={{margin:0, background:'#050505'}}>{children}</body>
    </html>
  )
}
