"use client"

import * as React from "react"
import {
  BookOpen,
  FileJson,
  FileEdit,
  LucideFileSignature,
  Bot,
  Braces,
  Command,
  Frame,
  Folder,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react"

// import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { SearchForm } from "./search-form"
import { NavServices } from "./nav-services"
import { NavFolders } from "./nav-folders"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navServices: [
    {
      title: "문서 자동 작성 및 편집",
      url: "#",
      icon: LucideFileSignature,
    },
    {
      title: "메타데이터 추출",
      url: "#",
      icon: FileJson,
    },
  ],
  navFolders: [
    {
      title: "새 폴더1",
      url: "#",
      icon: Folder,
      isActive: true,
      items: [
        {
          title: "새 문서1",
          url: "#",
        },
        {
          title: "새 문서2",
          url: "#",
        },
        {
          title: "새 문서3",
          url: "#",
        },
        {
          title: "새 문서4",
          url: "#",
        },
      ],
    },
    {
      title: "새 폴더2",
      url: "#",
      icon: Folder,
      isActive: true,
      items: [
        {
          title: "새 문서1",
          url: "#",
        },
        {
          title: "새 문서2",
          url: "#",
        },
        {
          title: "새 문서3",
          url: "#",
        },
      ],
    },
  ],
  // navMain: [
  //   {
  //     title: "Playground",
  //     url: "#",
  //     icon: SquareTerminal,
  //     isActive: true,
  //     items: [
  //       {
  //         title: "History",
  //         url: "#",
  //       },
  //       {
  //         title: "Starred",
  //         url: "#",
  //       },
  //       {
  //         title: "Settings",
  //         url: "#",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Models",
  //     url: "#",
  //     icon: Bot,
  //     items: [
  //       {
  //         title: "Genesis",
  //         url: "#",
  //       },
  //       {
  //         title: "Explorer",
  //         url: "#",
  //       },
  //       {
  //         title: "Quantum",
  //         url: "#",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Documentation",
  //     url: "#",
  //     icon: BookOpen,
  //     items: [
  //       {
  //         title: "Introduction",
  //         url: "#",
  //       },
  //       {
  //         title: "Get Started",
  //         url: "#",
  //       },
  //       {
  //         title: "Tutorials",
  //         url: "#",
  //       },
  //       {
  //         title: "Changelog",
  //         url: "#",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Settings",
  //     url: "#",
  //     icon: Settings2,
  //     items: [
  //       {
  //         title: "General",
  //         url: "#",
  //       },
  //       {
  //         title: "Team",
  //         url: "#",
  //       },
  //       {
  //         title: "Billing",
  //         url: "#",
  //       },
  //       {
  //         title: "Limits",
  //         url: "#",
  //       },
  //     ],
  //   },
  // ],
  // projects: [
  //   {
  //     name: "Design Engineering",
  //     url: "#",
  //     icon: Frame,
  //   },
  //   {
  //     name: "Sales & Marketing",
  //     url: "#",
  //     icon: PieChart,
  //   },
  //   {
  //     name: "Travel",
  //     url: "#",
  //     icon: Map,
  //   },
  // ],
  navSecondary: [
    {
      title: "서비스 안내",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "문의하기",
      url: "#",
      icon: Send,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="top-[--header-height] !h-[calc(100svh-var(--header-height))]"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">경인일보</span>
                  <span className="truncate text-xs">서울시스템X바벨브레인 서비스</span>
                </div>
              </a>
            </SidebarMenuButton>
            <SearchForm className="w-full mt-3 p-1" />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavServices items={data.navServices} />
        <NavFolders items={data.navFolders} />
        {/* <NavMain items={data.navMain} /> */}
        {/* <NavProjects projects={data.projects} /> */}
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
