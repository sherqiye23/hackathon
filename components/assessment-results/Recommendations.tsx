import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { ComponentType, SVGProps } from "react";

export function Recommendations({ recommendations }: { recommendations: { title: string; description: string; impact: string; icon: ComponentType<SVGProps<SVGSVGElement>>; }[] }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>How to Improve Your Score</CardTitle>
                <CardDescription>Follow these recommendations to increase your creditworthiness</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {recommendations.map((rec) => {
                        const Icon = rec.icon
                        return (
                            <div
                                key={rec.title}
                                className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors"
                            >
                                <div className="flex gap-3 mb-3">
                                    <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                                        <Icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground text-sm">{rec.title}</h3>
                                        <p className="text-xs text-muted-foreground mt-1">{rec.description}</p>
                                    </div>
                                </div>
                                <div className="text-xs font-semibold text-primary bg-primary/10 w-fit px-2 py-1 rounded">
                                    {rec.impact}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </CardContent>
        </Card>
    )
}
