"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp } from "lucide-react"

export function CreditScoreCard() {
    const creditScore = 742
    const scoreCategory = "Good"
    const scorePercentile = 78
    const trend = "+12 points"

    return (
        <Card className="bg-linear-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardHeader>
                <CardTitle>Your Credit Score</CardTitle>
                <CardDescription>AI-calculated fairness score</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {/* Score Circle */}
                <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="relative w-40 h-40">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                            {/* Background circle */}
                            <circle cx="60" cy="60" r="55" fill="none" stroke="currentColor" strokeWidth="8" className="text-muted" />
                            {/* Progress circle */}
                            <circle
                                cx="60"
                                cy="60"
                                r="55"
                                fill="none"
                                stroke="url(#scoreGradient)"
                                strokeWidth="8"
                                strokeDasharray={`${(creditScore / 1000) * 345.6} 345.6`}
                                strokeLinecap="round"
                                className="transition-all duration-1000"
                            />
                            <defs>
                                <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="var(--color-primary)" />
                                    <stop offset="100%" stopColor="var(--color-secondary)" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <div className="text-3xl font-bold text-primary">{creditScore}</div>
                            <div className="text-xs text-muted-foreground">/1000</div>
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="text-sm font-semibold text-foreground">{scoreCategory}</div>
                        <div className="text-xs text-muted-foreground">Based on 50+ factors</div>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background/50 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-primary">{scorePercentile}%</div>
                        <div className="text-xs text-muted-foreground">Percentile</div>
                    </div>
                    <div className="bg-background/50 rounded-lg p-3 text-center flex items-center justify-center gap-1">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        <div>
                            <div className="text-sm font-bold text-primary">{trend}</div>
                            <div className="text-xs text-muted-foreground">Last 30 days</div>
                        </div>
                    </div>
                </div>

                <Button className="w-full">View Full Report</Button>
            </CardContent>
        </Card>
    )
}