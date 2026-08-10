import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import WhatsAppBot from '../components/WhatsAppBot/WhatsAppBot'
import { WhatsAppBotProvider } from '../components/WhatsAppBot/WhatsAppBotProvider'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'

function MainLayout() {
  return (
    <WhatsAppBotProvider>
      <div className="app-shell">
        <Navbar />
        <main className="app-main">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppBot />
        <ScrollToTop />
      </div>
    </WhatsAppBotProvider>
  )
}

export default MainLayout
