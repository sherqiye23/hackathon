import { Shield } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"

export default function Hero() {
    return (
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
    )
}