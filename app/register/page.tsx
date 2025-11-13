"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function RegisterPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreeToTerms: false,
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (formData.password !== formData.confirmPassword)
            return setError("Passwords do not match");

        if (!formData.agreeToTerms)
            return setError("You must agree to the terms and conditions");

        setLoading(true);
        setTimeout(() => {
            localStorage.setItem(
                "user",
                JSON.stringify({
                    email: formData.email,
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                })
            );
            router.push("/onboarding");
        }, 1000);
    };

    const fields = [
        { id: "firstName", label: "First Name", placeholder: "John" },
        { id: "lastName", label: "Last Name", placeholder: "Doe" },
        { id: "email", label: "Email Address", placeholder: "you@example.com", type: "email" },
        { id: "password", label: "Password", placeholder: "••••••••", type: "password" },
        { id: "confirmPassword", label: "Confirm Password", placeholder: "••••••••", type: "password" },
    ];

    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="flex items-center gap-2 mb-8 justify-center">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="text-xl font-bold text-foreground">CreditFlow</span>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Create Account</CardTitle>
                        <CardDescription>
                            Join CreditFlow and get your fair credit assessment
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <form onSubmit={handleRegister} className="space-y-4">
                            {/* First & Last name */}
                            <div className="grid grid-cols-2 gap-4">
                                {fields.slice(0, 2).map(({ id, label, placeholder }) => (
                                    <div key={id} className="space-y-2">
                                        <Label htmlFor={id}>{label}</Label>
                                        <Input
                                            id={id}
                                            name={id}
                                            placeholder={placeholder}
                                            value={(formData as any)[id]}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Email, Password, Confirm Password */}
                            {fields.slice(2).map(({ id, label, placeholder, type }) => (
                                <div key={id} className="space-y-2">
                                    <Label htmlFor={id}>{label}</Label>
                                    <Input
                                        id={id}
                                        name={id}
                                        type={type}
                                        placeholder={placeholder}
                                        value={(formData as any)[id]}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            ))}

                            {error && (
                                <div className="p-3 bg-destructive/10 text-destructive rounded-md text-sm">
                                    {error}
                                </div>
                            )}

                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="terms"
                                    name="agreeToTerms"
                                    checked={formData.agreeToTerms}
                                    onCheckedChange={(checked) =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            agreeToTerms: checked as boolean,
                                        }))
                                    }
                                />
                                <label
                                    htmlFor="terms"
                                    className="text-sm text-muted-foreground cursor-pointer"
                                >
                                    I agree to the{" "}
                                    <a href="#" className="text-primary hover:underline">
                                        terms and conditions
                                    </a>
                                </label>
                            </div>

                            <Button type="submit" className="w-full" disabled={loading}>
                                {loading ? "Creating account..." : "Create Account"}
                            </Button>
                        </form>

                        <div className="mt-6 text-center text-sm text-muted-foreground">
                            Already have an account?{" "}
                            <Link href="/login" className="text-primary hover:underline font-semibold">
                                Sign in
                            </Link>
                        </div>
                    </CardContent>
                </Card>

                {/* Footer Link */}
                <div className="mt-8 text-center">
                    <Link
                        href="/"
                        className="text-sm text-muted-foreground hover:text-foreground flex items-center justify-center gap-2"
                    >
                        <ArrowRight className="w-4 h-4 rotate-180" />
                        Back to home
                    </Link>
                </div>
            </div>
        </div>
    );
}