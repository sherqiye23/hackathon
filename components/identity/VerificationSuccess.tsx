import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

export default function VerificationSuccess() {
    return (
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
    )
}
