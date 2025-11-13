import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

type mainScoreType = {
    creditScore: number
}

export default function MainScore({ creditScore }: mainScoreType) {
    return (
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
    )
}