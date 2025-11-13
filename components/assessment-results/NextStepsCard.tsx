import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type Step = {
    id: number;
    title: string;
    description: string;
};

const steps: Step[] = [
    {
        id: 1,
        title: "Complete Identity Verification",
        description: "Secure your account and boost your score",
    },
    {
        id: 2,
        title: "Connect Additional Data Sources",
        description: "Link e-commerce and utility accounts",
    },
    {
        id: 3,
        title: "Access Credit Products",
        description: "Get approved for loans, credit lines, and more",
    },
];

export default function NextStepsCard() {
    return (
        <Card className="bg-secondary/10 border-secondary/20">
            <CardHeader>
                <CardTitle>Next Steps</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {steps.map((step) => (
                    <div key={step.id} className="flex items-start gap-4">
                        <div className="shrink-0 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-semibold text-sm">
                            {step.id}
                        </div>
                        <div>
                            <p className="font-semibold text-foreground">{step.title}</p>
                            <p className="text-sm text-muted-foreground">{step.description}</p>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}
