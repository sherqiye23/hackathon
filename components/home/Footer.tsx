export default function Footer() {
    const footerLinks = [
        {
            title: "Product",
            links: ["Features", "Pricing", "API"],
        },
        {
            title: "Company",
            links: ["About", "Blog", "Careers"],
        },
        {
            title: "Legal",
            links: ["Privacy", "Terms", "Compliance"],
        },
        {
            title: "Support",
            links: ["Help Center", "Contact", "Status"],
        },
    ];

    const socialLinks = ["Twitter", "LinkedIn", "GitHub"];

    return (
        <footer className="border-t border-border py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                    {footerLinks.map(({ title, links }) => (
                        <div key={title}>
                            <h3 className="font-semibold text-foreground mb-4">{title}</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="hover:text-foreground">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-muted-foreground">
                        © 2025 CreditFlow. All rights reserved.
                    </p>

                    <div className="flex gap-6 mt-4 md:mt-0 text-sm text-muted-foreground">
                        {socialLinks.map((item) => (
                            <a key={item} href="#" className="hover:text-foreground">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
