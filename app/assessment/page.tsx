"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowRight, ArrowLeft } from "lucide-react"

export default function AssessmentPage() {
    const router = useRouter()
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({
        monthlyIncome: "",
        employmentStatus: "",
        yearsEmployed: "",
        mobileOperator: "",
        ecommerceAccount: "",
        utilityBills: "",
    })

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    const handleNext = () => {
        if (step < 3) setStep(step + 1)
    }

    const handlePrevious = () => {
        if (step > 1) setStep(step - 1)
    }

    const handleSubmit = () => {
        // In a real app, this would submit to an API
        localStorage.setItem("assessmentData", JSON.stringify(formData))
        router.push("/assessment-results")
    }

    return (
        <DashboardLayout>
            <div className="max-w-2xl mx-auto">
                {/* Progress */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-3xl font-bold text-foreground">Credit Assessment</h1>
                        <div className="text-sm text-muted-foreground">Step {step} of 3</div>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                        <div
                            className="bg-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(step / 3) * 100}%` }}
                        />
                    </div>
                </div>

                <Card>
                    {step === 1 && (
                        <>
                            <CardHeader>
                                <CardTitle>Income & Employment</CardTitle>
                                <CardDescription>Help us understand your financial situation</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="income">Monthly Income (USD)</Label>
                                    <Input
                                        id="income"
                                        type="number"
                                        placeholder="e.g., 2500"
                                        value={formData.monthlyIncome}
                                        onChange={(e) => handleInputChange("monthlyIncome", e.target.value)}
                                    />
                                </div>

                                <div className="space-y-3">
                                    <Label>Employment Status</Label>
                                    <RadioGroup
                                        value={formData.employmentStatus}
                                        onValueChange={(val) => handleInputChange("employmentStatus", val)}
                                    >
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="employed" id="employed" />
                                            <Label htmlFor="employed" className="cursor-pointer font-normal">
                                                Employed (Full-time)
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="self-employed" id="self-employed" />
                                            <Label htmlFor="self-employed" className="cursor-pointer font-normal">
                                                Self-Employed
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="freelance" id="freelance" />
                                            <Label htmlFor="freelance" className="cursor-pointer font-normal">
                                                Freelance/Contract
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="unemployed" id="unemployed" />
                                            <Label htmlFor="unemployed" className="cursor-pointer font-normal">
                                                Unemployed
                                            </Label>
                                        </div>
                                    </RadioGroup>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="years">Years at Current Job</Label>
                                    <Input
                                        id="years"
                                        type="number"
                                        placeholder="e.g., 3"
                                        value={formData.yearsEmployed}
                                        onChange={(e) => handleInputChange("yearsEmployed", e.target.value)}
                                    />
                                </div>
                            </CardContent>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <CardHeader>
                                <CardTitle>Alternative Data Sources</CardTitle>
                                <CardDescription>Connect your data to improve your score</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-3">
                                    <Label>Mobile Payment History</Label>
                                    <RadioGroup
                                        value={formData.mobileOperator}
                                        onValueChange={(val) => handleInputChange("mobileOperator", val)}
                                    >
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="yes" id="mobile-yes" />
                                            <Label htmlFor="mobile-yes" className="cursor-pointer font-normal">
                                                Yes, connect my account
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="no" id="mobile-no" />
                                            <Label htmlFor="mobile-no" className="cursor-pointer font-normal">
                                                No, skip for now
                                            </Label>
                                        </div>
                                    </RadioGroup>
                                </div>

                                <div className="space-y-3">
                                    <Label>E-commerce Purchase History</Label>
                                    <RadioGroup
                                        value={formData.ecommerceAccount}
                                        onValueChange={(val) => handleInputChange("ecommerceAccount", val)}
                                    >
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="yes" id="ecom-yes" />
                                            <Label htmlFor="ecom-yes" className="cursor-pointer font-normal">
                                                Yes, connect my account
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="no" id="ecom-no" />
                                            <Label htmlFor="ecom-no" className="cursor-pointer font-normal">
                                                No, skip for now
                                            </Label>
                                        </div>
                                    </RadioGroup>
                                </div>

                                <div className="space-y-3">
                                    <Label>Utility Bill Payment History</Label>
                                    <RadioGroup
                                        value={formData.utilityBills}
                                        onValueChange={(val) => handleInputChange("utilityBills", val)}
                                    >
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="yes" id="utility-yes" />
                                            <Label htmlFor="utility-yes" className="cursor-pointer font-normal">
                                                Yes, connect my account
                                            </Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="no" id="utility-no" />
                                            <Label htmlFor="utility-no" className="cursor-pointer font-normal">
                                                No, skip for now
                                            </Label>
                                        </div>
                                    </RadioGroup>
                                </div>
                            </CardContent>
                        </>
                    )}

                    {step === 3 && (
                        <>
                            <CardHeader>
                                <CardTitle>Review Assessment</CardTitle>
                                <CardDescription>Confirm your information is correct</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="bg-muted p-4 rounded-lg space-y-3">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Monthly Income</span>
                                        <span className="font-semibold text-foreground">${formData.monthlyIncome}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Employment Status</span>
                                        <span className="font-semibold text-foreground capitalize">{formData.employmentStatus}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Years Employed</span>
                                        <span className="font-semibold text-foreground">{formData.yearsEmployed} years</span>
                                    </div>
                                    <div className="border-t border-border pt-3 mt-3">
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Data Sources Connected</span>
                                            <span className="font-semibold text-foreground">
                                                {
                                                    [formData.mobileOperator, formData.ecommerceAccount, formData.utilityBills].filter(
                                                        (v) => v === "yes",
                                                    ).length
                                                }
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                                    <p className="text-sm text-foreground">
                                        Your information is encrypted and will only be used to calculate your fair credit score. We never
                                        share your data with third parties.
                                    </p>
                                </div>
                            </CardContent>
                        </>
                    )}

                    {/* Footer */}
                    <CardContent className="flex gap-4 pt-6 border-t border-border mt-6">
                        <Button variant="outline" onClick={handlePrevious} disabled={step === 1} className="flex-1 bg-transparent">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Previous
                        </Button>
                        {step < 3 ? (
                            <Button onClick={handleNext} className="flex-1">
                                Next
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        ) : (
                            <Button onClick={handleSubmit} className="flex-1">
                                Complete Assessment
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        )}
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    )
}