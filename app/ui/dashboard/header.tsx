"use client";

import { usePathname } from "next/navigation";

const titles: Record<string, string> = {
    "/dashboard": "Dashboard",
    "/dashboard/invoices": "Invoices",
    "/dashboard/customers": "Customers",
};

export default function Header() {
    const pathname = usePathname();
    const title = titles[pathname] ?? Object.entries(titles).find(([href]) => href !== "/dashboard" && pathname.startsWith(href))?.[1] ?? "Dashboard";

    return (
        <header className='sticky top-0 z-10 flex h-16 items-center border-b border-gray-200 bg-white/80 px-4 backdrop-blur'>
            <h1 className='text-lg font-semibold text-gray-900'>{title}</h1>
        </header>
    );
}
