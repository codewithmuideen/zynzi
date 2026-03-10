import { Routes, Route } from 'react-router-dom'
import Navbar        from './components/layout/Navbar'
import Footer        from './components/layout/Footer'
import ScrollToHash  from './components/ScrollToHash'
import Home          from './pages/Home'
import Contact       from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfUse    from './pages/TermsOfUse'

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/"               element={<Home />} />
        <Route path="/contact"        element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use"   element={<TermsOfUse />} />
      </Routes>
      <Footer />
    </>
  )
}
