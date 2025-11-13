import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function DashboardHeader({ name }: { name: string }) {
    return (
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-3xl font-bold text-foreground">Welcome back, {name}</h1>
                <p className="text-muted-foreground mt-1">Here's your credit assessment overview</p>
            </div>
            <Link href="/assessment">
                <Button size="lg">
                    New Assessment <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
            </Link>
        </div>
    )
}
