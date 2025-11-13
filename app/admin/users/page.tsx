"use client"
import { AdminLayout } from "@/components/admin/admin-layout"
import { UsersToolbar } from "@/components/admin/UsersToolbar"
import { UsersTable } from "@/components/admin/UsersTable"
import { useState } from "react"

export type User = {
    id: number;
    name: string;
    email: string;
    score: number;
    status: string; 
    joined: string;
};

export default function AdminUsersPage() {
    const [search, setSearch] = useState("");

    const users: User[] = [
        { id: 1, name: "John Doe", email: "john@example.com", score: 742, status: "Verified", joined: "2 weeks ago" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", score: 685, status: "Verified", joined: "1 week ago" },
        { id: 3, name: "Bob Johnson", email: "bob@example.com", score: 612, status: "Pending", joined: "3 days ago" },
        { id: 4, name: "Alice Brown", email: "alice@example.com", score: 758, status: "Verified", joined: "5 days ago" },
        { id: 5, name: "Charlie Wilson", email: "charlie@example.com", score: 695, status: "Verified", joined: "1 day ago" },
    ];


    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <AdminLayout>
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold text-foreground">Users</h1>
                    <p className="text-muted-foreground mt-1">Manage and monitor user accounts</p>
                </div>

                <UsersToolbar searchValue={search} onSearchChange={setSearch} />

                <UsersTable users={filteredUsers} />
            </div>
        </AdminLayout>
    )
}