"use client"
import { useState, useMemo, ChangeEvent } from "react"
import { useRouter } from "next/navigation"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card } from "@/components/ui/card"
import { Step2PhotoUpload } from "@/components/assessment/Step2PhotoUpload"
import { Step1BillSelection } from "@/components/assessment/Step1BillSelection"
import { AssessmentFooter } from "@/components/assessment/AssessmentFooter"

type FormData = {
    selectedBillType: string;
    uploadedPhoto: File | null;
}

export default function AssessmentPage() {
    const router = useRouter()
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState<FormData>({
        selectedBillType: "",
        uploadedPhoto: null,
    })

    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    // File upload handler
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData((prev) => ({ ...prev, uploadedPhoto: e.target.files![0] }))
        }
    }

    // Photo removal handler
    const handlePhotoRemove = () => {
        setFormData((prev) => ({ ...prev, uploadedPhoto: null }))
    }

    // Create URL for photo preview
    const photoPreviewUrl = useMemo(() => {
        if (formData.uploadedPhoto) {
            return URL.createObjectURL(formData.uploadedPhoto);
        }
        return null;
    }, [formData.uploadedPhoto]);


    const handleNext = () => {
        // Validation for Step 1
        if (step === 1) {
            if (!formData.selectedBillType) {
                alert("Please select a bill type to continue.");
                return;
            }
        }
        // Proceed to the next step
        if (step < 2) setStep(step + 1)
    }

    const handlePrevious = () => {
        if (step > 1) setStep(step - 1)
    }

    const handleSubmit = () => {
        // Validation for the final step
        if (!formData.uploadedPhoto) {
            alert("Please upload a photo to complete the assessment.");
            return;
        }

        // Simulation: Save data and navigate
        const dataToStore = {
            selectedBillType: formData.selectedBillType,
            uploadedPhotoName: formData.uploadedPhoto.name,
        };

        localStorage.setItem("assessmentData", JSON.stringify(dataToStore))
        router.push("/assessment-results")

        // Revoke the object URL to free up memory
        if (photoPreviewUrl) URL.revokeObjectURL(photoPreviewUrl);
    }

    return (
        <DashboardLayout>
            <div className="max-w-4xl mx-auto">
                {/* Progress */}
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-3xl font-bold text-foreground">Quick Assessment</h1>
                        <div className="text-sm text-muted-foreground">Step {step} of 2</div>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                        <div
                            className="bg-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(step / 2) * 100}%` }}
                        />
                    </div>
                </div>

                <Card>
                    {step === 1 && (
                        <Step1BillSelection
                            selectedBillType={formData.selectedBillType}
                            onBillChange={(val) => handleInputChange("selectedBillType", val)}
                        />
                    )}

                    {step === 2 && (
                        <Step2PhotoUpload
                            uploadedPhoto={formData.uploadedPhoto}
                            photoPreviewUrl={photoPreviewUrl}
                            onFileChange={handleFileChange}
                            onPhotoRemove={handlePhotoRemove}
                        />
                    )}

                    {/* Footer */}
                    <AssessmentFooter
                        step={step}
                        onPrevious={handlePrevious}
                        onNext={handleNext}
                        onSubmit={handleSubmit}
                    />
                </Card>
            </div>
        </DashboardLayout>
    )
}