"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Shield, TrendingUp, Users } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">CreditFlow</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link href="/register">
              <Button>Get Started</Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Fair Credit Scores for Everyone
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              CreditFlow uses advanced AI and alternative data sources to provide accurate credit assessments, enabling
              financial inclusion for millions of underbanked individuals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Your Assessment
                </Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="bg-linear-to-br from-primary/10 to-secondary/10 rounded-2xl h-80 flex items-center justify-center">
              <div className="text-center">
                <Shield className="w-24 h-24 text-primary mx-auto mb-4 opacity-80" />
                <p className="text-foreground font-semibold">Secure & Fair Assessment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-muted py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose CreditFlow</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform combines cutting-edge AI technology with inclusive practices to revolutionize credit
              assessment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <TrendingUp className="w-8 h-8 text-primary mb-2" />
                <CardTitle>AI-Powered Scoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Machine learning models analyze patterns beyond traditional credit history
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Financial Inclusion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Empowering underbanked individuals with fair credit access and opportunities
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Digital Identity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Secure verification using advanced identity technology and biometrics
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Transparent Process</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Clear, explainable scoring methodology you can understand and improve
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50M+</div>
            <p className="text-muted-foreground">Assessments Completed</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">95%</div>
            <p className="text-muted-foreground">User Satisfaction</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">45+</div>
            <p className="text-muted-foreground">Countries Supported</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Access Fair Credit?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Get your AI-powered credit assessment in minutes. No hidden fees, no surprises.
          </p>
          <Link href="/register">
            <Button size="lg" variant="secondary">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Compliance
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© 2025 CreditFlow. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground">
                Twitter
              </a>
              <a href="#" className="hover:text-foreground">
                LinkedIn
              </a>
              <a href="#" className="hover:text-foreground">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}