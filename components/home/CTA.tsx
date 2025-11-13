import Link from "next/link";
import { Button } from "../ui/button";

export default function CTA() {
    return (
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
    )
}