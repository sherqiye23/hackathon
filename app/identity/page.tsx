"use client"
import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import IdentityHeader from "@/components/identity/IdentityHeader"
import VerificationStatus from "@/components/identity/VerificationStatus"
import FaceVerification from "@/components/identity/FaceVerification"
import DocumentVerification from "@/components/identity/DocumentVerification"
import VerificationSuccess from "@/components/identity/VerificationSuccess"

export default function IdentityPage() {
    const [verificationStep, setVerificationStep] = useState(1)
    const [idData, setIdData] = useState({
        fullName: "",
        dateOfBirth: "",
        idNumber: "",
        idType: "passport",
    })
    const [faceVerified, setFaceVerified] = useState(false)
    const [documentVerified, setDocumentVerified] = useState(false)

    const handleStartFaceVerification = () => {
        setTimeout(() => {
            setFaceVerified(true)
            setVerificationStep(2)
        }, 2000)
    }

    const handleVerifyDocument = () => {
        setTimeout(() => {
            setDocumentVerified(true)
            setVerificationStep(3)
        }, 2000)
    }

    return (
        <DashboardLayout>
            <div className="max-w-3xl mx-auto space-y-6">
                <IdentityHeader />
                <VerificationStatus faceVerified={faceVerified} documentVerified={documentVerified} />

                {!faceVerified && (
                    <FaceVerification onStart={handleStartFaceVerification} />
                )}

                {faceVerified && !documentVerified && (
                    <DocumentVerification
                        idData={idData}
                        setIdData={setIdData}
                        onVerify={handleVerifyDocument}
                    />
                )}

                {faceVerified && documentVerified && <VerificationSuccess />}
            </div>
        </DashboardLayout>
    )
}