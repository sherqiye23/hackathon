import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Download, Filter } from "lucide-react";

type UsersToolbarProps = {
    searchValue: string;
    onSearchChange: (value: string) => void;
};

export function UsersToolbar({ searchValue, onSearchChange }: UsersToolbarProps) {
    return (
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
                <div className="relative">
                    <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                        placeholder="Search users..."
                        className="pl-10"
                        value={searchValue}
                        onChange={(e) => onSearchChange(e.target.value)}
                    />
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
    );
}
