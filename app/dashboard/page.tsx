"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { CreditScoreCard } from "@/components/dashboard/credit-score-card"
import { ScoringFactors } from "@/components/dashboard/scoring-factors"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
    const router = useRouter()
    const [user, setUser] = useState<any>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const userData = localStorage.getItem("user")
        if (!userData) {
            router.push("/login")
            return
        }
        setUser(JSON.parse(userData))
        setLoading(false)
    }, [router])

    if (loading) {
        return <div className="flex items-center justify-center min-h-screen">Loading...</div>
    }

    return (
        <DashboardLayout>
            <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-foreground">Welcome back, {user?.firstName}</h1>
                        <p className="text-muted-foreground mt-1">Here's your credit assessment overview</p>
                    </div>
                    <Link href="/assessment">
                        <Button size="lg">
                            New Assessment <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </Link>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Credit Score Card */}
                    <div className="lg:col-span-1">
                        <CreditScoreCard />
                    </div>

                    {/* Scoring Factors */}
                    <div className="lg:col-span-2">
                        <ScoringFactors />
                    </div>
                </div>

                {/* Secondary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Identity Verification</CardTitle>
                            <CardDescription>Secure your account with digital ID</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-muted-foreground mb-2">
                                        Status: <span className="text-primary font-semibold">Verified</span>
                                    </p>
                                    <p className="text-xs text-muted-foreground">Last verified: 2 days ago</p>
                                </div>
                                <Link href="/identity">
                                    <Button variant="outline" size="sm">
                                        Review
                                    </Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Data Sources</CardTitle>
                            <CardDescription>Connected data providers improving your score</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-muted-foreground mb-2">
                                        Connected: <span className="text-primary font-semibold">3 sources</span>
                                    </p>
                                    <p className="text-xs text-muted-foreground">Mobile, e-commerce, utilities</p>
                                </div>
                                <Link href="/data-sources">
                                    <Button variant="outline" size="sm">
                                        Manage
                                    </Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Recent Activity */}
                <RecentActivity />
            </div>
        </DashboardLayout>
    )
}