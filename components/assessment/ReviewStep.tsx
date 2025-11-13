import { CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

type ReviewStepProps = {
    monthlyIncome: string;
    employmentStatus: string;
    yearsEmployed: string;
    mobileOperator: string;
    ecommerceAccount: string;
    utilityBills: string;
};

export function ReviewStep({ monthlyIncome, employmentStatus, yearsEmployed, mobileOperator, ecommerceAccount, utilityBills }: ReviewStepProps) {
    const connectedCount = [mobileOperator, ecommerceAccount, utilityBills].filter((v) => v === "yes").length;

    return (
        <>
            <CardHeader>
                <CardTitle>Review Assessment</CardTitle>
                <CardDescription>Confirm your information is correct</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="bg-muted p-4 rounded-lg space-y-3">
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Monthly Income</span>
                        <span className="font-semibold text-foreground">${monthlyIncome}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Employment Status</span>
                        <span className="font-semibold text-foreground capitalize">{employmentStatus}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Years Employed</span>
                        <span className="font-semibold text-foreground">{yearsEmployed} years</span>
                    </div>
                    <div className="border-t border-border pt-3 mt-3">
                        <div className="flex justify-between">
                            <span className="text-muted-foreground">Data Sources Connected</span>
                            <span className="font-semibold text-foreground">{connectedCount}</span>
                        </div>
                    </div>
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                    <p className="text-sm text-foreground">
                        Your information is encrypted and will only be used to calculate your fair credit score. We never
                        share your data with third parties.
                    </p>
                </div>
            </CardContent>
        </>
    );
}
