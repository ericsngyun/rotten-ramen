import Nav from '@/components/navbar/Nav'
import './globals.css'

export const metadata = {
  title: 'Rotten-Ramen|Anime, Manga, Webtoon, ...',
  description: 'Website for ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <html lang="en">
      <body>
        <Nav/>
        {children}
      </body>
    </html>
    </>
  )
} 
