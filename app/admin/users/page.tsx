"use client"

import { AdminLayout } from "@/components/admin/admin-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Download, Filter } from "lucide-react"

export default function AdminUsersPage() {
    const users = [
        { id: 1, name: "John Doe", email: "john@example.com", score: 742, status: "Verified", joined: "2 weeks ago" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", score: 685, status: "Verified", joined: "1 week ago" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com", score: 612, status: "Pending", joined: "3 days ago" },
        { id: 4, name: "Alice Brown", email: "alice@example.com", score: 758, status: "Verified", joined: "5 days ago" },
        {
            id: 5,
            name: "Charlie Wilson",
            email: "charlie@example.com",
            score: 695,
            status: "Verified",
            joined: "1 day ago",
        },
    ]

    return (
        <AdminLayout>
            <div className="space-y-6">
                {/* Header */}
                <div>
                    <h1 className="text-3xl font-bold text-foreground">Users</h1>
                    <p className="text-muted-foreground mt-1">Manage and monitor user accounts</p>
                </div>

                {/* Toolbar */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <div className="flex-1 max-w-md">
                        <div className="relative">
                            <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                            <Input placeholder="Search users..." className="pl-10" />
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                            <Filter className="w-4 h-4 mr-2" />
                            Filter
                        </Button>
                        <Button variant="outline" size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            Export
                        </Button>
                    </div>
                </div>

                {/* Users Table */}
                <Card>
                    <CardHeader>
                        <CardTitle>All Users</CardTitle>
                        <CardDescription>Total: {users.length} users</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="border-b border-border">
                                        <th className="text-left py-3 px-4 font-medium text-muted-foreground">Name</th>
                                        <th className="text-left py-3 px-4 font-medium text-muted-foreground">Email</th>
                                        <th className="text-left py-3 px-4 font-medium text-muted-foreground">Score</th>
                                        <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                                        <th className="text-left py-3 px-4 font-medium text-muted-foreground">Joined</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user) => (
                                        <tr key={user.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                                            <td className="py-3 px-4 font-medium text-foreground">{user.name}</td>
                                            <td className="py-3 px-4 text-muted-foreground">{user.email}</td>
                                            <td className="py-3 px-4">
                                                <span className="font-semibold text-primary">{user.score}</span>
                                            </td>
                                            <td className="py-3 px-4">
                                                <span
                                                    className={`px-2 py-1 rounded text-xs font-semibold ${user.status === "Verified"
                                                            ? "bg-green-500/20 text-green-700 dark:text-green-300"
                                                            : "bg-yellow-500/20 text-yellow-700 dark:text-yellow-300"
                                                        }`}
                                                >
                                                    {user.status}
                                                </span>
                                            </td>
                                            <td className="py-3 px-4 text-muted-foreground">{user.joined}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    )
}