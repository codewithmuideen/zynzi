import useScrollReveal from '../hooks/useScrollReveal'
import Hero         from '../components/sections/Hero'
import ProofStrip   from '../components/sections/ProofStrip'
import HowItWorks   from '../components/sections/HowItWorks'
import Features     from '../components/sections/Features'
import WhoItsFor    from '../components/sections/WhoItsFor'
import TrustSection from '../components/sections/TrustSection'
import VenuesHosts  from '../components/sections/VenuesHosts'
import FinalCTA     from '../components/sections/FinalCTA'

export default function Home() {
  useScrollReveal()

  return (
    <main>
      <Hero />
      <ProofStrip />
      <HowItWorks />
      <Features />
      <WhoItsFor />
      <TrustSection />
      <VenuesHosts />
      <FinalCTA />
    </main>
  )
}
