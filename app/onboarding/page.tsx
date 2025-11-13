"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"
import { Step1 } from "@/components/onboarding/Step1"
import { Step2 } from "@/components/onboarding/Step2"

export default function OnboardingPage() {
    const router = useRouter()
    const [step, setStep] = useState(1)
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({ country: "US", referralCode: "" })

    const handleNext = async () => {
        if (step === 1) return setStep(2)

        setLoading(true)
        try {
            const user = JSON.parse(localStorage.getItem("user") || "{}")
            await fetch("/api/onboarding", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...user, ...formData }),
            })
            setTimeout(() => router.push("/dashboard"), 1000)
        } catch (err) {
            console.error(err)
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="flex items-center gap-2 mb-8 justify-center">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="text-xl font-bold text-foreground">CreditFlow</span>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>{step === 1 ? "Welcome to CreditFlow" : "Optional: Referral Code"}</CardTitle>
                        <CardDescription>
                            {step === 1 ? "Let's set up your account" : "Get bonus points for referrals"}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {step === 1 ? (
                            <Step1 formData={formData} setFormData={setFormData} onNext={handleNext} />
                        ) : (
                            <Step2 formData={formData} setFormData={setFormData} onNext={handleNext} loading={loading} />
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
