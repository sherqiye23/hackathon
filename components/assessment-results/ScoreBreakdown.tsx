import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function ScoreBreakdown({ items }: { items: { factor: string; points: number; percentage: number }[] }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Score Breakdown</CardTitle>
                <CardDescription>How your score was calculated</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {items.map((item) => (
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
    )
}
