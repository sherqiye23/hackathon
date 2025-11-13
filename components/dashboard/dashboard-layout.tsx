"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { TrendingUp, BarChart3, Shield, Settings, LogOut, Menu, X } from "lucide-react"
import Link from "next/link"

export function DashboardLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const handleLogout = () => {
        localStorage.removeItem("user")
        router.push("/login")
    }

    const navItems = [
        { icon: TrendingUp, label: "Dashboard", href: "/dashboard" },
        { icon: BarChart3, label: "Assessments", href: "/assessments" },
        { icon: Shield, label: "Identity", href: "/identity" },
        { icon: Settings, label: "Settings", href: "/settings" },
    ]

    return (
        <div className="flex h-screen bg-background">
            {/* Sidebar */}
            <aside
                className={`${sidebarOpen ? "block" : "hidden"
                    } md:block fixed md:static w-64 bg-card border-r border-border h-full transition-all duration-300 z-40`}
            >
                <div className="p-6 border-b border-border flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                            <TrendingUp className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <span className="font-bold text-foreground">CreditFlow</span>
                    </div>
                    <button onClick={() => setSidebarOpen(false)} className="md:hidden">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <nav className="p-6 space-y-2">
                    {navItems.map((item) => {
                        const Icon = item.icon
                        return (
                            <Link key={item.href} href={item.href}>
                                <button className="w-full flex items-center gap-3 px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors">
                                    <Icon className="w-5 h-5" />
                                    <span className="text-sm font-medium">{item.label}</span>
                                </button>
                            </Link>
                        )
                    })}
                </nav>

                <div className="absolute bottom-6 left-6 right-6">
                    <Button
                        variant="outline"
                        size="sm"
                        className="w-full justify-start gap-2 bg-transparent"
                        onClick={handleLogout}
                    >
                        <LogOut className="w-4 h-4" />
                        Sign Out
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto flex flex-col">
                {/* Top Bar */}
                <div className="border-b border-border bg-card p-6 flex items-center justify-between sticky top-0 z-30">
                    <button onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden p-2 hover:bg-muted rounded-lg">
                        <Menu className="w-5 h-5" />
                    </button>
                    <div className="flex-1" />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 md:p-8">{children}</div>
            </main>

            {/* Mobile Overlay */}
            {sidebarOpen && (
                <div className="fixed inset-0 bg-black/50 md:hidden z-30" onClick={() => setSidebarOpen(false)} />
            )}
        </div>
    )
}