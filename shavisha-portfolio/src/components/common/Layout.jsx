import Footer from './Footer'
import Navigation from '../navigation/Navigation'

export default function Layout({ children }) {
  return (
    <div className="min-h-dvh bg-background text-primary-text relative">
      <div className="fixed inset-0 bg-noise" />
      <Navigation />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  )
}
