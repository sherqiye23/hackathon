import { CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type DataSourcesStepProps = {
    mobileOperator: string;
    ecommerceAccount: string;
    utilityBills: string;
    onChange: (field: string, value: string) => void;
};

const sources = [
    { field: "mobileOperator", label: "Mobile Payment History" },
    { field: "ecommerceAccount", label: "E-commerce Purchase History" },
    { field: "utilityBills", label: "Utility Bill Payment History" },
];

export function DataSourcesStep({ mobileOperator, ecommerceAccount, utilityBills, onChange }: DataSourcesStepProps) {
    const values = { mobileOperator, ecommerceAccount, utilityBills };

    return (
        <>
            <CardHeader>
                <CardTitle>Alternative Data Sources</CardTitle>
                <CardDescription>Connect your data to improve your score</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {sources.map((source) => (
                    <div key={source.field} className="space-y-3">
                        <Label>{source.label}</Label>
                        <RadioGroup
                            value={values[source.field as keyof typeof values]}
                            onValueChange={(val) => onChange(source.field, val)}
                        >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="yes" id={`${source.field}-yes`} />
                                <Label htmlFor={`${source.field}-yes`} className="cursor-pointer font-normal">
                                    Yes, connect my account
                                </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="no" id={`${source.field}-no`} />
                                <Label htmlFor={`${source.field}-no`} className="cursor-pointer font-normal">
                                    No, skip for now
                                </Label>
                            </div>
                        </RadioGroup>
                    </div>
                ))}
            </CardContent>
        </>
    );
}
