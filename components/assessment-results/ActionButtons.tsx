import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

type ActionButton = {
    href: string;
    label: string;
    variant?: "default" | "outline";
    icon?: React.ReactNode;
};

const buttons: ActionButton[] = [
    {
        href: "/identity",
        label: "Verify Identity",
        icon: <ArrowRight className="w-4 h-4 ml-2" />,
    },
    {
        href: "/dashboard",
        label: "Back to Dashboard",
        variant: "outline",
    },
];

export default function ActionButtons() {
    return (
        <div className="flex flex-col sm:flex-row gap-4">
            {buttons.map((btn) => (
                <Link key={btn.href} href={btn.href} className="flex-1">
                    <Button
                        size="lg"
                        variant={btn.variant || "default"}
                        className="w-full"
                    >
                        {btn.label}
                        {btn.icon && btn.icon}
                    </Button>
                </Link>
            ))}
        </div>
    );
}
