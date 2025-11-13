"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, TrendingUp, Users, DollarSign, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function AssessmentResultsPage() {
    const router = useRouter()
    const [loading, setLoading] = useState(true)
    const [assessmentData, setAssessmentData] = useState<any>(null)

    useEffect(() => {
        const data = localStorage.getItem("assessmentData")
        if (data) {
            setAssessmentData(JSON.parse(data))
        }
        setLoading(false)
    }, [])

    if (loading) {
        return (
            <DashboardLayout>
                <div>Loading...</div>
            </DashboardLayout>
        )
    }

    const creditScore = 742
    const recommendations = [
        {
            title: "Connect More Data Sources",
            description: "Link your e-commerce accounts to demonstrate purchasing reliability",
            impact: "+50-100 points possible",
            icon: Users,
        },
        {
            title: "Maintain Consistent Payments",
            description: "Keep up regular payments across all connected data sources",
            impact: "+20-50 points per month",
            icon: CheckCircle,
        },
        {
            title: "Verify Your Identity",
            description: "Complete digital identity verification to unlock higher credit limits",
            impact: "+75-150 points",
            icon: TrendingUp,
        },
        {
            title: "Build Financial History",
            description: "Use our credit line to build positive transaction history",
            impact: "+100+ points",
            icon: DollarSign,
        },
    ]

    return (
        <DashboardLayout>
            <div className="max-w-4xl mx-auto space-y-6">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-foreground mb-2">Assessment Complete</h1>
                    <p className="text-muted-foreground">Your fair credit score is ready</p>
                </div>

                {/* Main Score Card */}
                <Card className="bg-linear-to-br from-primary/10 to-secondary/10 border-primary/20">
                    <CardContent className="pt-8 pb-8">
                        <div className="text-center">
                            <div className="inline-block mb-6">
                                <Badge className="bg-primary text-lg px-4 py-1">Your Score</Badge>
                            </div>
                            <div className="text-6xl font-bold text-primary mb-2">{creditScore}</div>
                            <div className="text-lg text-muted-foreground mb-4">Out of 1000</div>
                            <div className="inline-block bg-background rounded-full px-6 py-2 text-sm font-semibold text-foreground">
                                Good Rating
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Score Breakdown */}
                <Card>
                    <CardHeader>
                        <CardTitle>Score Breakdown</CardTitle>
                        <CardDescription>How your score was calculated</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {[
                            { factor: "Employment Stability", points: 245, percentage: 33 },
                            { factor: "Income Level", points: 180, percentage: 24 },
                            { factor: "Data Consistency", points: 145, percentage: 20 },
                            { factor: "Alternative Data", points: 122, percentage: 16 },
                            { factor: "Account Age", points: 50, percentage: 7 },
                        ].map((item) => (
                            <div key={item.factor}>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium text-foreground">{item.factor}</span>
                                    <span className="text-sm font-semibold text-primary">{item.points} pts</span>
                                </div>
                                <div className="w-full bg-muted rounded-full h-2">
                                    <div
                                        className="bg-primary h-2 rounded-full transition-all duration-500"
                                        style={{ width: `${item.percentage}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                {/* Recommendations */}
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

                {/* Next Steps */}
                <Card className="bg-secondary/10 border-secondary/20">
                    <CardHeader>
                        <CardTitle>Next Steps</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="shrink-0 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-semibold text-sm">
                                1
                            </div>
                            <div>
                                <p className="font-semibold text-foreground">Complete Identity Verification</p>
                                <p className="text-sm text-muted-foreground">Secure your account and boost your score</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="shrink-0 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-semibold text-sm">
                                2
                            </div>
                            <div>
                                <p className="font-semibold text-foreground">Connect Additional Data Sources</p>
                                <p className="text-sm text-muted-foreground">Link e-commerce and utility accounts</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="shrink-0 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-semibold text-sm">
                                3
                            </div>
                            <div>
                                <p className="font-semibold text-foreground">Access Credit Products</p>
                                <p className="text-sm text-muted-foreground">Get approved for loans, credit lines, and more</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/identity" className="flex-1">
                        <Button size="lg" className="w-full">
                            Verify Identity
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </Link>
                    <Link href="/dashboard" className="flex-1">
                        <Button variant="outline" size="lg" className="w-full bg-transparent">
                            Back to Dashboard
                        </Button>
                    </Link>
                </div>
            </div>
        </DashboardLayout>
    )
}