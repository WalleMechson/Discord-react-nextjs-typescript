import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";

const MainLayout = async ({
    children
}: {children: React.ReactNode}) => {
    return (
        <div className="h-full">
            <div className="hidden md:flex md:flex-col h-full w-[72px] z-30 fixed inset-y-0 left-0">
                <NavigationSidebar />
            </div>
            <main className="md:pl-[72px] h-full">
                {children}
            </main>
        </div>
    )
}

export default MainLayout;