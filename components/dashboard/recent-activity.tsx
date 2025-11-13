"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, FileText, CheckCircle } from "lucide-react"

export function RecentActivity() {
    const activities = [
        {
            type: "Assessment Updated",
            description: "Your credit score was recalculated",
            timestamp: "2 hours ago",
            icon: FileText,
        },
        {
            type: "Data Connected",
            description: "Mobile payment history linked",
            timestamp: "1 day ago",
            icon: CheckCircle,
        },
        {
            type: "Score Improvement",
            description: "Your score improved by 12 points",
            timestamp: "3 days ago",
            icon: Clock,
        },
        {
            type: "Identity Verified",
            description: "Your digital identity was verified",
            timestamp: "1 week ago",
            icon: CheckCircle,
        },
    ]

    return (
        <Card>
            <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your account updates and changes</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {activities.map((activity, idx) => {
                        const Icon = activity.icon
                        return (
                            <div key={idx} className="flex items-start gap-4 pb-4 border-b border-border last:pb-0 last:border-b-0">
                                <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                                    <Icon className="w-4 h-4 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <div className="font-medium text-foreground text-sm">{activity.type}</div>
                                    <div className="text-xs text-muted-foreground">{activity.description}</div>
                                </div>
                                <div className="text-xs text-muted-foreground whitespace-nowrap">{activity.timestamp}</div>
                            </div>
                        )
                    })}
                </div>
            </CardContent>
        </Card>
    )
}