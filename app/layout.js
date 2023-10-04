
import { Inter } from 'next/font/google'
import './home.css'
const inter = Inter({ subsets: ['latin'] })
import NavBar from '@/src/components/share_component/navbar/NavBar'
import Footer from '@/src/components/share_component/footer/Footer'

export const metadata = {
  title: 'Accessorices Shop',
  description: 'Generated by accessorices shop',

}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">

      <body className={inter.className}>
          <NavBar />
          <main>
            {children}
          </main>
          <Footer />
      </body>
    </html>
  )
}
