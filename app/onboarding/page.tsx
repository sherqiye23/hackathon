"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TrendingUp, ArrowRight, CheckCircle } from "lucide-react"

export default function OnboardingPage() {
    const router = useRouter()
    const [step, setStep] = useState(1)
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        country: "US",
        referralCode: "",
    })

    const handleNext = async () => {
        if (step === 1) {
            setStep(2)
        } else if (step === 2) {
            setLoading(true)

            // Call onboarding API
            try {
                const user = JSON.parse(localStorage.getItem("user") || "{}")
                await fetch("/api/onboarding", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        ...user,
                        ...formData,
                    }),
                })

                setTimeout(() => {
                    router.push("/dashboard")
                }, 1000)
            } catch (error) {
                console.error("Onboarding error:", error)
                setLoading(false)
            }
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
                    {step === 1 && (
                        <>
                            <CardHeader>
                                <CardTitle>Welcome to CreditFlow</CardTitle>
                                <CardDescription>Let's set up your account</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-4">
                                    <div>
                                        <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                                        <h3 className="text-lg font-semibold text-foreground text-center mb-2">Account Created</h3>
                                        <p className="text-sm text-muted-foreground text-center">
                                            Your account has been successfully created. Let's personalize your experience.
                                        </p>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="country">Country</Label>
                                        <select
                                            id="country"
                                            value={formData.country}
                                            onChange={(e) => setFormData((prev) => ({ ...prev, country: e.target.value }))}
                                            className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                                        >
                                            <option value="US">United States</option>
                                            <option value="MX">Mexico</option>
                                            <option value="NG">Nigeria</option>
                                            <option value="IN">India</option>
                                            <option value="BR">Brazil</option>
                                            <option value="KE">Kenya</option>
                                        </select>
                                    </div>
                                </div>

                                <Button onClick={handleNext} className="w-full">
                                    Continue
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </CardContent>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <CardHeader>
                                <CardTitle>Optional: Referral Code</CardTitle>
                                <CardDescription>Get bonus points for referrals</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="referral">Referral Code (optional)</Label>
                                    <Input
                                        id="referral"
                                        placeholder="Enter a referral code"
                                        value={formData.referralCode}
                                        onChange={(e) => setFormData((prev) => ({ ...prev, referralCode: e.target.value }))}
                                    />
                                    <p className="text-xs text-muted-foreground">
                                        If someone referred you, enter their code to get bonus credit score points
                                    </p>
                                </div>

                                <Button onClick={handleNext} className="w-full" disabled={loading}>
                                    {loading ? "Setting up..." : "Get Started"}
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </CardContent>
                        </>
                    )}
                </Card>
            </div>
        </div>
    )
}