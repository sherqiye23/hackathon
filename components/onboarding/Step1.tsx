import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export function Step1({ formData, setFormData, onNext }: any) {
    return (
        <>
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
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                    >
                        {["US", "MX", "NG", "IN", "BR", "KE"].map((c) => (
                            <option key={c} value={c}>
                                {c}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <Button onClick={onNext} className="w-full mt-4">
                Continue
            </Button>
        </>
    )
}
