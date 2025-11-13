"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { CheckCircle, TrendingUp, Users, DollarSign } from "lucide-react"
import { ScoreBreakdown } from "@/components/assessment-results/ScoreBreakdown"
import { Recommendations } from "@/components/assessment-results/Recommendations"
import MainScore from "@/components/assessment-results/MainScore"
import NextStepsCard from "@/components/assessment-results/NextStepsCard"
import ActionButtons from "@/components/assessment-results/ActionButtons"

const scoreBreakdownArray = [
    { factor: "Employment Stability", points: 245, percentage: 33 },
    { factor: "Income Level", points: 180, percentage: 24 },
    { factor: "Data Consistency", points: 145, percentage: 20 },
    { factor: "Alternative Data", points: 122, percentage: 16 },
    { factor: "Account Age", points: 50, percentage: 7 },
]
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

    return (
        <DashboardLayout>
            <div className="max-w-4xl mx-auto space-y-6">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-foreground mb-2">Assessment Complete</h1>
                    <p className="text-muted-foreground">Your fair credit score is ready</p>
                </div>

                {/* Main Score Card */}
                <MainScore creditScore={creditScore} />

                {/* Score Breakdown */}
                <ScoreBreakdown items={scoreBreakdownArray} />

                {/* Recommendations */}
                <Recommendations recommendations={recommendations} />

                {/* Next Steps */}
                <NextStepsCard />

                {/* Action Buttons */}
                <ActionButtons />
            </div>
        </DashboardLayout>
    )
}