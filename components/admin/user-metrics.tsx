"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function UserMetrics() {
    const metrics = [
        {
            date: "Mon",
            users: 120,
            assessments: 45,
            verified: 38,
        },
        {
            date: "Tue",
            users: 135,
            assessments: 52,
            verified: 44,
        },
        {
            date: "Wed",
            users: 142,
            assessments: 58,
            verified: 48,
        },
        {
            date: "Thu",
            users: 155,
            assessments: 62,
            verified: 52,
        },
        {
            date: "Fri",
            users: 168,
            assessments: 68,
            verified: 57,
        },
        {
            date: "Sat",
            users: 145,
            assessments: 55,
            verified: 46,
        },
        {
            date: "Sun",
            users: 130,
            assessments: 48,
            verified: 40,
        },
    ]

    const maxValue = Math.max(...metrics.flatMap((m) => [m.users, m.assessments, m.verified]))

    return (
        <Card>
            <CardHeader>
                <CardTitle>Weekly Activity</CardTitle>
                <CardDescription>User signups and assessment trends</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    {/* Chart-like visualization */}
                    <div className="space-y-4">
                        {metrics.map((metric) => (
                            <div key={metric.date} className="space-y-2">
                                <div className="flex items-center justify-between text-sm">
                                    <span className="font-medium text-foreground">{metric.date}</span>
                                    <span className="text-xs text-muted-foreground">{metric.users} new users</span>
                                </div>
                                <div className="flex gap-1 h-6">
                                    <div
                                        className="bg-primary rounded"
                                        style={{ width: `${(metric.users / maxValue) * 100}%` }}
                                        title={`Users: ${metric.users}`}
                                    />
                                    <div
                                        className="bg-secondary rounded"
                                        style={{ width: `${(metric.assessments / maxValue) * 100}%` }}
                                        title={`Assessments: ${metric.assessments}`}
                                    />
                                    <div
                                        className="bg-accent rounded"
                                        style={{ width: `${(metric.verified / maxValue) * 100}%` }}
                                        title={`Verified: ${metric.verified}`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Legend */}
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-primary rounded" />
                                <span className="text-xs text-muted-foreground">New Users</span>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-secondary rounded" />
                                <span className="text-xs text-muted-foreground">Assessments</span>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-accent rounded" />
                                <span className="text-xs text-muted-foreground">Verified</span>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}