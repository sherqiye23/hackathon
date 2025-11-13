"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertCircle, Camera, Upload } from "lucide-react"

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
        // Simulate face verification
        setTimeout(() => {
            setFaceVerified(true)
            setVerificationStep(2)
        }, 2000)
    }

    const handleVerifyDocument = () => {
        // Simulate document verification
        setTimeout(() => {
            setDocumentVerified(true)
            setVerificationStep(3)
        }, 2000)
    }

    return (
        <DashboardLayout>
            <div className="max-w-3xl mx-auto space-y-6">
                {/* Header */}
                <div>
                    <h1 className="text-3xl font-bold text-foreground mb-2">Digital Identity Verification</h1>
                    <p className="text-muted-foreground">
                        Secure your account and improve your credit assessment with identity verification
                    </p>
                </div>

                {/* Verification Progress */}
                <Card>
                    <CardHeader>
                        <CardTitle>Verification Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div
                                        className={`w-10 h-10 rounded-full flex items-center justify-center ${faceVerified ? "bg-primary/10" : "bg-muted"}`}
                                    >
                                        {faceVerified ? (
                                            <CheckCircle className="w-6 h-6 text-primary" />
                                        ) : (
                                            <Camera className="w-6 h-6 text-muted-foreground" />
                                        )}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-foreground">Facial Recognition</div>
                                        <div className="text-sm text-muted-foreground">Verify your identity with biometrics</div>
                                    </div>
                                </div>
                                {faceVerified && <Badge className="bg-primary">Verified</Badge>}
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div
                                        className={`w-10 h-10 rounded-full flex items-center justify-center ${documentVerified ? "bg-primary/10" : "bg-muted"}`}
                                    >
                                        {documentVerified ? (
                                            <CheckCircle className="w-6 h-6 text-primary" />
                                        ) : (
                                            <Upload className="w-6 h-6 text-muted-foreground" />
                                        )}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-foreground">Document Verification</div>
                                        <div className="text-sm text-muted-foreground">Upload and verify your ID document</div>
                                    </div>
                                </div>
                                {documentVerified && <Badge className="bg-primary">Verified</Badge>}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Facial Recognition */}
                {!faceVerified && (
                    <Card>
                        <CardHeader>
                            <CardTitle>Facial Recognition Verification</CardTitle>
                            {/* Note: Facial and document verification steps are simulated. 
                            No real AI or identity verification is performed in this demo. */}
                            <CardDescription>We use advanced AI to verify your identity securely</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="bg-muted/50 rounded-lg aspect-video flex items-center justify-center border-2 border-dashed border-border">
                                <div className="text-center">
                                    <Camera className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                                    <p className="text-muted-foreground">Camera feed would appear here</p>
                                    <p className="text-sm text-muted-foreground mt-1">In a real app, this would use WebRTC</p>
                                </div>
                            </div>

                            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 space-y-2">
                                <div className="flex gap-2">
                                    <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-sm font-semibold text-foreground">Privacy Assured</p>
                                        <p className="text-sm text-muted-foreground">Your facial data is encrypted and never stored</p>
                                    </div>
                                </div>
                            </div>

                            <Button className="w-full" size="lg" onClick={handleStartFaceVerification}>
                                <Camera className="w-4 h-4 mr-2" />
                                Start Facial Verification
                            </Button>
                        </CardContent>
                    </Card>
                )}

                {faceVerified && !documentVerified && (
                    <Card>
                        <CardHeader>
                            <CardTitle>Document Verification</CardTitle>
                            <CardDescription>Upload a clear photo of your ID document</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* ID Type Selection */}
                                <div className="space-y-3">
                                    <Label className="text-base">ID Type</Label>
                                    <div className="space-y-2">
                                        {["passport", "national-id", "drivers-license"].map((type) => (
                                            <label
                                                key={type}
                                                className="flex items-center p-3 border border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                                            >
                                                <input
                                                    type="radio"
                                                    name="idType"
                                                    value={type}
                                                    checked={idData.idType === type}
                                                    onChange={(e) => setIdData((prev) => ({ ...prev, idType: e.target.value }))}
                                                    className="mr-3"
                                                />
                                                <span className="text-sm font-medium text-foreground capitalize">{type.replace("-", " ")}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Document Upload */}
                                <div className="space-y-3">
                                    <Label className="text-base">Upload Document</Label>
                                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:bg-muted/50 cursor-pointer transition-colors">
                                        <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                                        <p className="text-sm font-medium text-foreground">Drop file here or click</p>
                                        <p className="text-xs text-muted-foreground mt-1">PNG, JPG up to 10MB</p>
                                    </div>
                                </div>
                            </div>

                            {/* ID Information */}
                            <div className="space-y-4 border-t border-border pt-6">
                                <h3 className="font-semibold text-foreground">ID Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Full Name (as on ID)</Label>
                                        <Input
                                            id="name"
                                            placeholder="John Doe"
                                            value={idData.fullName}
                                            onChange={(e) => setIdData((prev) => ({ ...prev, fullName: e.target.value }))}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="dob">Date of Birth</Label>
                                        <Input
                                            id="dob"
                                            type="date"
                                            value={idData.dateOfBirth}
                                            onChange={(e) => setIdData((prev) => ({ ...prev, dateOfBirth: e.target.value }))}
                                        />
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <Label htmlFor="idnum">ID Number</Label>
                                        <Input
                                            id="idnum"
                                            placeholder="Enter your ID number"
                                            value={idData.idNumber}
                                            onChange={(e) => setIdData((prev) => ({ ...prev, idNumber: e.target.value }))}
                                        />
                                    </div>
                                </div>
                            </div>

                            <Button className="w-full" size="lg" onClick={handleVerifyDocument}>
                                Verify Document
                            </Button>
                        </CardContent>
                    </Card>
                )}

                {faceVerified && documentVerified && (
                    <Card className="border-primary/20 bg-primary/5">
                        <CardHeader>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-6 h-6 text-primary" />
                                <CardTitle>Identity Verified</CardTitle>
                            </div>
                            <CardDescription>Your identity has been successfully verified</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="bg-background rounded-lg p-4 space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-sm text-muted-foreground">Verification Status</span>
                                    <Badge className="bg-primary">Complete</Badge>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-muted-foreground">Verified Date</span>
                                    <span className="text-sm font-semibold text-foreground">Today</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-muted-foreground">Verification Method</span>
                                    <span className="text-sm font-semibold text-foreground">Facial + Document</span>
                                </div>
                            </div>

                            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                                <p className="text-sm text-foreground">
                                    Your verified identity has improved your creditworthiness assessment. Your credit score may increase
                                    based on this verification.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                )}
            </div>
        </DashboardLayout>
    )
}