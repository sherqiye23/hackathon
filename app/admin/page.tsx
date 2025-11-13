"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { AdminLayout } from "@/components/admin/admin-layout"
import { StatsOverview } from "@/components/admin/stats-overview"
import { UserMetrics } from "@/components/admin/user-metrics"
import { ScoreDistribution } from "@/components/admin/score-distribution"
import { SystemHealth } from "@/components/admin/system-health"

export default function AdminDashboard() {
    const router = useRouter()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // In a real app, check for admin credentials
        const user = localStorage.getItem("user")
        if (!user) {
            router.push("/login")
            return
        }
        setLoading(false)
    }, [router])

    if (loading) {
        return <div className="flex items-center justify-center min-h-screen">Loading...</div>
    }

    return (
        <AdminLayout>
            <div className="space-y-6">
                {/* Header */}
                <div>
                    <h1 className="text-3xl font-bold text-foreground">Platform Analytics</h1>
                    <p className="text-muted-foreground mt-1">System overview and performance metrics</p>
                </div>

                {/* Stats Overview */}
                <StatsOverview />

                {/* Main Metrics */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <UserMetrics />
                    </div>
                    <div>
                        <SystemHealth />
                    </div>
                </div>

                {/* Score Distribution */}
                <ScoreDistribution />
            </div>
        </AdminLayout>
    )
}