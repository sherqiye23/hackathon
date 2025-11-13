"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertCircle, TrendingUp } from "lucide-react"

export function ScoringFactors() {
    const factors = [
        {
            name: "Payment History",
            weight: 35,
            status: "excellent",
            contribution: "+245 points",
            icon: CheckCircle,
        },
        {
            name: "Data Consistency",
            weight: 25,
            status: "good",
            contribution: "+180 points",
            icon: CheckCircle,
        },
        {
            name: "Alternative Data",
            weight: 20,
            status: "good",
            contribution: "+145 points",
            icon: CheckCircle,
        },
        {
            name: "Credit Inquiries",
            weight: 15,
            status: "fair",
            contribution: "-50 points",
            icon: AlertCircle,
        },
        {
            name: "Income Stability",
            weight: 5,
            status: "good",
            contribution: "+22 points",
            icon: TrendingUp,
        },
    ]

    return (
        <Card>
            <CardHeader>
                <CardTitle>Scoring Factors</CardTitle>
                <CardDescription>What's contributing to your score</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {factors.map((factor) => {
                        const Icon = factor.icon
                        return (
                            <div
                                key={factor.name}
                                className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                            >
                                <div className="flex items-center gap-4 flex-1">
                                    <Icon className="w-5 h-5 text-primary shrink-0" />
                                    <div className="flex-1">
                                        <div className="font-medium text-foreground text-sm">{factor.name}</div>
                                        <div className="text-xs text-muted-foreground">Weight: {factor.weight}%</div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="font-semibold text-primary text-sm">{factor.contribution}</div>
                                    <div className="text-xs text-muted-foreground capitalize">{factor.status}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </CardContent>
        </Card>
    )
}