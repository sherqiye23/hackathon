import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function Step2({ formData, setFormData, onNext, loading }: any) {
    return (
        <>
            <div className="space-y-2">
                <Label htmlFor="referral">Referral Code (optional)</Label>
                <Input
                    id="referral"
                    placeholder="Enter a referral code"
                    value={formData.referralCode}
                    onChange={(e) => setFormData({ ...formData, referralCode: e.target.value })}
                />
                <p className="text-xs text-muted-foreground">
                    If someone referred you, enter their code to get bonus credit score points
                </p>
            </div>

            <Button onClick={onNext} className="w-full mt-4" disabled={loading}>
                {loading ? "Setting up..." : "Get Started"}
            </Button>
        </>
    )
}
