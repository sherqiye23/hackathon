"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, TrendingUp, Activity, CheckCircle } from "lucide-react"

export function StatsOverview() {
    const stats = [
        {
            label: "Total Users",
            value: "2,345",
            change: "+12% from last month",
            icon: Users,
            color: "text-blue-500",
        },
        {
            label: "Assessments Today",
            value: "342",
            change: "+8% vs yesterday",
            icon: Activity,
            color: "text-purple-500",
        },
        {
            label: "Verified Users",
            value: "1,892",
            change: "81% of total users",
            icon: CheckCircle,
            color: "text-green-500",
        },
        {
            label: "Avg Credit Score",
            value: "678",
            change: "+15 points this month",
            icon: TrendingUp,
            color: "text-orange-500",
        },
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => {
                const Icon = stat.icon
                return (
                    <Card key={stat.label}>
                        <CardContent className="pt-6">
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                                    <div className="flex items-baseline gap-2">
                                        <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-2">{stat.change}</p>
                                </div>
                                <div className={`p-3 rounded-lg bg-muted ${stat.color}`}>
                                    <Icon className="w-5 h-5" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                )
            })}
        </div>
    )
}