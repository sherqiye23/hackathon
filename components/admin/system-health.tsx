"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

export function SystemHealth() {
    const services = [
        { name: "API Server", status: "operational", uptime: "99.9%" },
        { name: "Database", status: "operational", uptime: "99.95%" },
        { name: "AI Engine", status: "operational", uptime: "99.8%" },
        { name: "Identity Service", status: "operational", uptime: "99.7%" },
    ]

    return (
        <Card>
            <CardHeader>
                <CardTitle>System Health</CardTitle>
                <CardDescription>Service status and uptime</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {services.map((service) => (
                        <div key={service.name} className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-foreground">{service.name}</p>
                                <p className="text-xs text-muted-foreground">{service.uptime} uptime</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <Badge variant="outline" className="text-xs">
                                    {service.status}
                                </Badge>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}