import { CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface Step1Props {
    selectedBillType: string;
    onBillChange: (value: string) => void;
}

const billOptions = [
    { value: "electricity-bill", label: "Electricity Bill" },
    { value: "gas-bill", label: "Gas Bill" },
    { value: "water-bill", label: "Water Bill" },
    { value: "internet-phone-bill", label: "Internet/Phone Bill" },
    { value: "streaming-subscriptions", label: "Streaming Subscriptions (Netflix, Spotify, etc.)" },
    { value: "loan-installment", label: "Personal Loan Installment" },
    { value: "airplane-ticket", label: "Airplane Ticket (Monthly Installment)" },
];

export function Step1BillSelection({ selectedBillType, onBillChange }: Step1Props) {
    return (
        <>
            <CardHeader>
                <CardTitle>Bill Type Selection</CardTitle>
                <CardDescription>Please select a type of bill you pay regularly.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-3">
                    <Label>Which type of bill do you pay monthly?</Label>
                    <RadioGroup
                        value={selectedBillType}
                        onValueChange={onBillChange}
                    >
                        {billOptions.map((option) => (
                            <div key={option.value} className="flex items-center space-x-2">
                                <RadioGroupItem value={option.value} id={`bill-${option.value}`} />
                                <Label htmlFor={`bill-${option.value}`} className="cursor-pointer font-normal">
                                    {option.label}
                                </Label>
                            </div>
                        ))}
                    </RadioGroup>
                </div>
            </CardContent>
        </>
    )
}