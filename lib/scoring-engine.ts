/**
 * Credit Scoring Engine
 * Calculates fair credit scores using multiple factors
 */

interface AssessmentData {
    monthlyIncome: number
    employmentStatus: string
    yearsEmployed: number
    mobileOperator: string
    ecommerceAccount: string
    utilityBills: string
    verified?: boolean
}

interface ScoringResult {
    score: number
    category: string
    factors: ScoringFactor[]
    breakdown: ScoreBreakdown
}

interface ScoringFactor {
    name: string
    weight: number
    points: number
    status: string
}

interface ScoreBreakdown {
    incomeStability: number
    employmentHistory: number
    dataConsistency: number
    alternativeData: number
    identityVerification: number
}

/**
 * Calculate AI-powered credit score (0-1000)
 */
export function calculateCreditScore(data: AssessmentData): ScoringResult {
    const breakdown: ScoreBreakdown = {
        incomeStability: 0,
        employmentHistory: 0,
        dataConsistency: 0,
        alternativeData: 0,
        identityVerification: 0,
    }

    // Income Stability (max 300 points)
    const income = Number.parseFloat(data.monthlyIncome.toString()) || 0
    if (income >= 5000) breakdown.incomeStability = 300
    else if (income >= 3000) breakdown.incomeStability = 245
    else if (income >= 2000) breakdown.incomeStability = 180
    else if (income >= 1000) breakdown.incomeStability = 120
    else if (income > 0) breakdown.incomeStability = 60
    else breakdown.incomeStability = 0

    // Employment History (max 200 points)
    const yearsEmployed = Number.parseFloat(data.yearsEmployed.toString()) || 0
    if (yearsEmployed >= 5) breakdown.employmentHistory = 200
    else if (yearsEmployed >= 3) breakdown.employmentHistory = 160
    else if (yearsEmployed >= 1) breakdown.employmentHistory = 100
    else if (yearsEmployed >= 0.5) breakdown.employmentHistory = 60
    else breakdown.employmentHistory = 0

    // Employment Status Bonus
    const statusBonus =
        data.employmentStatus === "employed"
            ? 40
            : data.employmentStatus === "self-employed"
                ? 30
                : data.employmentStatus === "freelance"
                    ? 20
                    : 0
    breakdown.employmentHistory += statusBonus

    // Alternative Data (max 250 points)
    const dataSources = [
        data.mobileOperator === "yes" ? 85 : 0,
        data.ecommerceAccount === "yes" ? 85 : 0,
        data.utilityBills === "yes" ? 80 : 0,
    ]
    breakdown.alternativeData = dataSources.reduce((a, b) => a + b, 0)

    // Identity Verification Bonus
    breakdown.identityVerification = data.verified ? 150 : 0

    // Data consistency score (based on connected data)
    breakdown.dataConsistency = Math.min(dataSources.filter((d) => d > 0).length * 50, 150)

    // Calculate total
    const totalScore = Math.min(
        breakdown.incomeStability +
        breakdown.employmentHistory +
        breakdown.alternativeData +
        breakdown.dataConsistency +
        breakdown.identityVerification,
        1000,
    )

    // Determine category
    let category = "Poor"
    if (totalScore >= 800) category = "Excellent"
    else if (totalScore >= 700) category = "Good"
    else if (totalScore >= 600) category = "Fair"
    else if (totalScore >= 500) category = "Below Average"

    // Build factors array
    const factors: ScoringFactor[] = [
        {
            name: "Income Stability",
            weight: 35,
            points: breakdown.incomeStability,
            status: breakdown.incomeStability >= 200 ? "excellent" : breakdown.incomeStability >= 100 ? "good" : "fair",
        },
        {
            name: "Employment History",
            weight: 25,
            points: breakdown.employmentHistory,
            status: breakdown.employmentHistory >= 160 ? "excellent" : breakdown.employmentHistory >= 80 ? "good" : "fair",
        },
        {
            name: "Alternative Data",
            weight: 20,
            points: breakdown.alternativeData,
            status: breakdown.alternativeData >= 150 ? "excellent" : breakdown.alternativeData >= 80 ? "good" : "fair",
        },
        {
            name: "Data Consistency",
            weight: 15,
            points: breakdown.dataConsistency,
            status: breakdown.dataConsistency >= 100 ? "good" : breakdown.dataConsistency >= 50 ? "fair" : "needs-work",
        },
        ...(data.verified
            ? [
                {
                    name: "Identity Verification",
                    weight: 5,
                    points: breakdown.identityVerification,
                    status: "excellent" as const,
                },
            ]
            : []),
    ]

    return {
        score: Math.round(totalScore),
        category,
        factors,
        breakdown,
    }
}

/**
 * Validate assessment data
 */
export function validateAssessmentData(data: any): { valid: boolean; errors: string[] } {
    const errors: string[] = []

    if (!data.monthlyIncome || Number.parseFloat(data.monthlyIncome) < 0) {
        errors.push("Invalid monthly income")
    }

    if (!data.employmentStatus) {
        errors.push("Employment status is required")
    }

    if (!data.yearsEmployed || Number.parseFloat(data.yearsEmployed) < 0) {
        errors.push("Invalid years employed")
    }

    return {
        valid: errors.length === 0,
        errors,
    }
}

/**
 * Generate scoring recommendations
 */
export function generateRecommendations(data: AssessmentData): string[] {
    const recommendations: string[] = []

    // Check for low income
    const income = Number.parseFloat(data.monthlyIncome.toString()) || 0
    if (income < 1000) {
        recommendations.push("Focus on increasing and stabilizing income to improve creditworthiness")
    }

    // Check for employment gaps
    const yearsEmployed = Number.parseFloat(data.yearsEmployed.toString()) || 0
    if (yearsEmployed < 1) {
        recommendations.push("Maintain current employment for at least 1 year to build employment history")
    }

    // Check for missing data sources
    const connectedSources = [
        data.mobileOperator === "yes",
        data.ecommerceAccount === "yes",
        data.utilityBills === "yes",
    ].filter(Boolean).length

    if (connectedSources < 2) {
        recommendations.push("Connect more data sources to improve your score")
    }

    // Check for identity verification
    if (!data.verified) {
        recommendations.push("Complete identity verification to unlock higher credit opportunities")
    }

    return recommendations
}