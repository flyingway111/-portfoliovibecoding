'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Projects from '@/components/projects'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Splash from '@/components/splash'

export default function Page() {
  const [splashDone, setSplashDone] = useState(false)

  return (
    <>
      {!splashDone && <Splash onDone={() => setSplashDone(true)} />}
      <main
        style={{
          opacity: splashDone ? 1 : 0,
          transform: splashDone ? 'translateY(0)' : 'translateY(12px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <Navbar />
        <Hero />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
