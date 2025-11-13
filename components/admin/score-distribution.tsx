"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ScoreDistribution() {
    const distribution = [
        { range: "0-200", count: 45, percentage: 2 },
        { range: "200-300", count: 98, percentage: 4 },
        { range: "300-400", count: 156, percentage: 7 },
        { range: "400-500", count: 234, percentage: 10 },
        { range: "500-600", count: 412, percentage: 18 },
        { range: "600-700", count: 623, percentage: 27 },
        { range: "700-800", count: 562, percentage: 24 },
        { range: "800-900", count: 187, percentage: 8 },
        { range: "900-1000", count: 28, percentage: 1 },
    ]

    return (
        <Card>
            <CardHeader>
                <CardTitle>Credit Score Distribution</CardTitle>
                <CardDescription>How user scores are distributed across ranges</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-3">
                    {distribution.map((item) => (
                        <div key={item.range}>
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-sm font-medium text-foreground">{item.range}</span>
                                <span className="text-sm text-muted-foreground">
                                    {item.count} users ({item.percentage}%)
                                </span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2">
                                <div className="bg-primary h-2 rounded-full" style={{ width: `${item.percentage * 4}%` }} />
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}