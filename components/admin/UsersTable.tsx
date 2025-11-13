import { User } from "@/app/admin/users/page";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

type UsersTableProps = {
    users: User[];
};

export function UsersTable({ users }: UsersTableProps) {
    return (
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
                                {["Name", "Email", "Score", "Status", "Joined"].map((col) => (
                                    <th
                                        key={col}
                                        className="text-left py-3 px-4 font-medium text-muted-foreground"
                                    >
                                        {col}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr
                                    key={user.id}
                                    className="border-b border-border hover:bg-muted/50 transition-colors"
                                >
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
    );
}
