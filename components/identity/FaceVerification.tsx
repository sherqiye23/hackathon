import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Camera, AlertCircle } from "lucide-react"

interface Props {
    onStart: () => void
}

export default function FaceVerification({ onStart }: Props) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Facial Recognition Verification</CardTitle>
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

                <Button className="w-full" size="lg" onClick={onStart}>
                    <Camera className="w-4 h-4 mr-2" />
                    Start Facial Verification
                </Button>
            </CardContent>
        </Card>
    )
}
