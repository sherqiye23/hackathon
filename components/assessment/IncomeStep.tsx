import { CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type IncomeStepProps = {
    monthlyIncome: string;
    employmentStatus: string;
    yearsEmployed: string;
    onChange: (field: string, value: string) => void;
};

export function IncomeStep({ monthlyIncome, employmentStatus, yearsEmployed, onChange }: IncomeStepProps) {
    return (
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
                        value={monthlyIncome}
                        onChange={(e) => onChange("monthlyIncome", e.target.value)}
                    />
                </div>

                <div className="space-y-3">
                    <Label>Employment Status</Label>
                    <RadioGroup value={employmentStatus} onValueChange={(val) => onChange("employmentStatus", val)}>
                        {["employed", "self-employed", "freelance", "unemployed"].map((status) => (
                            <div key={status} className="flex items-center space-x-2">
                                <RadioGroupItem value={status} id={status} />
                                <Label htmlFor={status} className="cursor-pointer font-normal">
                                    {status === "employed"
                                        ? "Employed (Full-time)"
                                        : status === "self-employed"
                                            ? "Self-Employed"
                                            : status === "freelance"
                                                ? "Freelance/Contract"
                                                : "Unemployed"}
                                </Label>
                            </div>
                        ))}
                    </RadioGroup>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="years">Years at Current Job</Label>
                    <Input
                        id="years"
                        type="number"
                        placeholder="e.g., 3"
                        value={yearsEmployed}
                        onChange={(e) => onChange("yearsEmployed", e.target.value)}
                    />
                </div>
            </CardContent>
        </>
    );
}
