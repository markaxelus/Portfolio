import './global.css'

export const metadata = {
  title: 'Portfolio',
  description: 'Mark\'s Portfolio',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
  