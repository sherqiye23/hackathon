"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { CreditScoreCard } from "@/components/dashboard/credit-score-card"
import { ScoringFactors } from "@/components/dashboard/scoring-factors"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import DashboardHeader from "@/components/dashboard/DashboardHeader"

const secondaryCards = [
    {
        title: "Identity Verification",
        description: "Secure your account with digital ID",
        info: {
            label: "Status:",
            value: "Verified",
            extra: "Last verified: 2 days ago",
        },
        button: { text: "Review", href: "/identity" },
    },
    {
        title: "Data Sources",
        description: "Connected data providers improving your score",
        info: {
            label: "Connected:",
            value: "3 sources",
            extra: "Mobile, e-commerce, utilities",
        },
        button: { text: "Manage", href: "/data-sources" },
    },
]


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
                <DashboardHeader name={user?.firstName} />

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
                    {secondaryCards.map((card) => (
                        <Card key={card.title}>
                            <CardHeader>
                                <CardTitle>{card.title}</CardTitle>
                                <CardDescription>{card.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-muted-foreground mb-2">
                                            {card.info.label}{" "}
                                            <span className="text-primary font-semibold">{card.info.value}</span>
                                        </p>
                                        <p className="text-xs text-muted-foreground">{card.info.extra}</p>
                                    </div>
                                    <Link href={card.button.href}>
                                        <Button variant="outline" size="sm">
                                            {card.button.text}
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Recent Activity */}
                <RecentActivity />
            </div>
        </DashboardLayout>
    )
}