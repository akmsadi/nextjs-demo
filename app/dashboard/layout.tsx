import SideNav from "@/app/ui/dashboard/sidenav";
import Header from "@/app/ui/dashboard/header";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex h-screen flex-col bg-gray-50 md:flex-row md:overflow-hidden'>
            <aside className='w-full flex-none border-b border-gray-200 bg-white md:w-64 md:border-b-0 md:border-r'>
                <SideNav />
            </aside>
            <div className='flex min-h-0 grow flex-col overflow-y-auto'>
                <Header />
                <main className='p-4'>
                    <div className='mx-auto w-full max-w-7xl'>{children}</div>
                </main>
            </div>
        </div>
    );
}
