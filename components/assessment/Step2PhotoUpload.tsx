import { ChangeEvent } from "react"
import { CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload, FileCheck, XCircle } from "lucide-react"

interface Step2Props {
    uploadedPhoto: File | null;
    photoPreviewUrl: string | null;
    onFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onPhotoRemove: () => void;
}

export function Step2PhotoUpload({ uploadedPhoto, photoPreviewUrl, onFileChange, onPhotoRemove }: Step2Props) {
    return (
        <>
            <CardHeader>
                <CardTitle>Bill Photo Upload</CardTitle>
                <CardDescription>Please upload a proof photo of the selected bill type.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">

                {/* File Upload Area */}
                <div className="space-y-3">
                    <Label htmlFor="photo-upload">Upload Bill Photo (Max 5MB)</Label>
                    <div className="flex items-center space-x-4">
                        <Input
                            id="photo-upload"
                            type="file"
                            accept="image/*"
                            onChange={onFileChange}
                            className="hidden"
                        />
                        <Label
                            htmlFor="photo-upload"
                            className="text-white flex-1 inline-flex items-center justify-center p-3 text-sm font-medium transition-colors border rounded-md shadow-sm cursor-pointer bg-secondary hover:bg-secondary/80 h-10"
                        >
                            {uploadedPhoto ? (
                                <FileCheck className="w-4 h-4 mr-2 text-primary" />
                            ) : (
                                <Upload className="w-4 h-4 mr-2" />
                            )}
                            {uploadedPhoto ? uploadedPhoto.name : "Choose Photo"}
                        </Label>

                        {uploadedPhoto && (
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={onPhotoRemove}
                                className="shrink-0"
                            >
                                <XCircle className="w-4 h-4 text-destructive" />
                            </Button>
                        )}
                    </div>
                    <p className="text-sm text-muted-foreground">Supported formats: JPEG, PNG.</p>
                </div>

                {/* Photo Preview Area */}
                {photoPreviewUrl && (
                    <div className="space-y-2">
                        <Label>Photo Preview</Label>
                        <div className="border border-input rounded-lg p-2 flex justify-center">
                            <img
                                src={photoPreviewUrl}
                                alt="Uploaded Document Preview"
                                className="max-h-60 max-w-full object-contain rounded-md"
                            />
                        </div>
                    </div>
                )}

                {!uploadedPhoto && (
                    <div className="bg-primary/10 border border-dashed border-primary/20 rounded-lg p-4 text-center text-sm text-muted-foreground">
                        No photo selected yet.
                    </div>
                )}

            </CardContent>
        </>
    )
}