import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Camera, Upload } from "lucide-react"

interface Props {
    faceVerified: boolean
    documentVerified: boolean
}

export default function VerificationStatus({ faceVerified, documentVerified }: Props) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Verification Status</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {/* Face */}
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

                    {/* Document */}
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
    )
}
