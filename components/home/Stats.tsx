export default function Stats() {
    const stats = [
        { value: "50M+", label: "Assessments Completed" },
        { value: "95%", label: "User Satisfaction" },
        { value: "45+", label: "Countries Supported" },
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map(({ value, label }) => (
                    <div key={label} className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">{value}</div>
                        <p className="text-muted-foreground">{label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}