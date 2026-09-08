import Footer from './Footer'
import Navigation from '../navigation/Navigation'

export default function Layout({ children }) {
  return (
    <div className="min-h-dvh bg-background text-primary-text">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
