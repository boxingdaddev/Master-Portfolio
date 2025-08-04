import './globals.css'

export const metadata = {
  title: 'Adam Makhyoun Portfolio',
  description: 'Mobile Developer specializing in React Native & Expo',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
