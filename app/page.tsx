"use client"
import CTA from "@/components/home/CTA"
import Features from "@/components/home/Features"
import Footer from "@/components/home/Footer"
import Header from "@/components/home/Header"
import Hero from "@/components/home/Hero"
import Stats from "@/components/home/Stats"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <Stats />
      <CTA />
      <Footer />
    </div>
  )
}