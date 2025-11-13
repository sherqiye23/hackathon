import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";

type StepNavigationProps = {
    step: number;
    onPrevious: () => void;
    onNext: () => void;
    onSubmit: () => void;
};

export function StepNavigation({ step, onPrevious, onNext, onSubmit }: StepNavigationProps) {
    return (
        <div className="flex gap-4 pt-6 border-t border-border mt-6">
            <Button variant="outline" onClick={onPrevious} disabled={step === 1} className="flex-1 bg-transparent">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
            </Button>
            {step < 3 ? (
                <Button onClick={onNext} className="flex-1">
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
            ) : (
                <Button onClick={onSubmit} className="flex-1">
                    Complete Assessment
                    <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
            )}
        </div>
    );
}
