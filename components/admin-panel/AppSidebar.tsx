import { LayoutDashboard, Package, Users, CreditCard, BarChart, Settings } from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

const items = [
    {
        title: "Dashboard",
        url: "#",
        icon: LayoutDashboard, // Updated
    },
    {
        title: "Products",
        url: "#",
        icon: Package, // Updated
    },
    {
        title: "Accounts",
        url: "#",
        icon: Users, // Updated
    },
    {
        title: "Transactions",
        url: "#",
        icon: CreditCard, // Updated
    },
    {
        title: "Analytics",
        url: "#",
        icon: BarChart, // Updated
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings, // Updated
    },
];
export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="text-sm">Admin Panel</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
