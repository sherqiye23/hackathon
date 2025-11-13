import { CheckCircle, Shield, TrendingUp, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const features = [
    {
        icon: TrendingUp,
        title: "AI-Powered Scoring",
        description: "Machine learning models analyze patterns beyond traditional credit history",
    },
    {
        icon: Users,
        title: "Financial Inclusion",
        description: "Empowering underbanked individuals with fair credit access and opportunities",
    },
    {
        icon: Shield,
        title: "Digital Identity",
        description: "Secure verification using advanced identity technology and biometrics",
    },
    {
        icon: CheckCircle,
        title: "Transparent Process",
        description: "Clear, explainable scoring methodology you can understand and improve",
    },
];

export default function Features() {
    return (
        <section id="features" className="bg-muted py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Why Choose CreditFlow
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Our platform combines cutting-edge AI technology with inclusive practices to revolutionize credit assessment.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map(({ icon: Icon, title, description }) => (
                        <Card key={title}>
                            <CardHeader>
                                <Icon className="w-8 h-8 text-primary mb-2" />
                                <CardTitle>{title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground">{description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
