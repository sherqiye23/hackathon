import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload } from "lucide-react"

interface Props {
    idData: {
        fullName: string
        dateOfBirth: string
        idNumber: string
        idType: string
    }
    setIdData: React.Dispatch<React.SetStateAction<any>>
    onVerify: () => void
}

export default function DocumentVerification({ idData, setIdData, onVerify }: Props) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Document Verification</CardTitle>
                <CardDescription>Upload a clear photo of your ID document</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                        <Label className="text-base">ID Type</Label>
                        <div className="space-y-2">
                            {["passport", "national-id", "drivers-license"].map((type) => (
                                <label
                                    key={type}
                                    className="flex items-center p-3 border border-border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                                >
                                    <input
                                        type="radio"
                                        name="idType"
                                        value={type}
                                        checked={idData.idType === type}
                                        onChange={(e) => setIdData((prev: any) => ({ ...prev, idType: e.target.value }))}
                                        className="mr-3"
                                    />
                                    <span className="text-sm font-medium text-foreground capitalize">
                                        {type.replace("-", " ")}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-3">
                        <Label className="text-base">Upload Document</Label>
                        <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:bg-muted/50 cursor-pointer transition-colors">
                            <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                            <p className="text-sm font-medium text-foreground">Drop file here or click</p>
                            <p className="text-xs text-muted-foreground mt-1">PNG, JPG up to 10MB</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-4 border-t border-border pt-6">
                    <h3 className="font-semibold text-foreground">ID Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name (as on ID)</Label>
                            <Input
                                id="name"
                                placeholder="John Doe"
                                value={idData.fullName}
                                onChange={(e) => setIdData((prev: any) => ({ ...prev, fullName: e.target.value }))}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="dob">Date of Birth</Label>
                            <Input
                                id="dob"
                                type="date"
                                value={idData.dateOfBirth}
                                onChange={(e) => setIdData((prev: any) => ({ ...prev, dateOfBirth: e.target.value }))}
                            />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                            <Label htmlFor="idnum">ID Number</Label>
                            <Input
                                id="idnum"
                                placeholder="Enter your ID number"
                                value={idData.idNumber}
                                onChange={(e) => setIdData((prev: any) => ({ ...prev, idNumber: e.target.value }))}
                            />
                        </div>
                    </div>
                </div>

                <Button className="w-full" size="lg" onClick={onVerify}>
                    Verify Document
                </Button>
            </CardContent>
        </Card>
    )
}
