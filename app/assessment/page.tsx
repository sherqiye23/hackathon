"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card } from "@/components/ui/card"
import { StepNavigation } from "@/components/assessment/StepNavigation"
import { IncomeStep } from "@/components/assessment/IncomeStep"
import { DataSourcesStep } from "@/components/assessment/DataSourcesStep"
import { ReviewStep } from "@/components/assessment/ReviewStep"

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
                    {step === 1 && <IncomeStep {...formData} onChange={handleInputChange} />}
                    {step === 2 && <DataSourcesStep {...formData} onChange={handleInputChange} />}
                    {step === 3 && <ReviewStep {...formData} />}

                    <StepNavigation step={step} onPrevious={handlePrevious} onNext={handleNext} onSubmit={handleSubmit} />
                </Card>
            </div>
        </DashboardLayout>
    )
}