"use client"

import * as React from "react"
import {
  Command,
  Folder,
  LifeBuoy,
  Send,
} from "lucide-react"

// import { NavMain } from "@/components/nav-main"
// import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
// import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
// import { SearchForm } from "./search-form"
// import { NavServices } from "./nav-services"
import { NavFolders } from "./nav-folders"
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs" //, UserButton
import { UserButton } from "./custom-user-button"


const data = {
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
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
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
            {/* <SearchForm className="w-full mt-3 p-1" /> */}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {/* <NavServices items={data.navServices} /> */}
        {/* <NavMain items={data.navMain} /> */}
        {/* <NavProjects projects={data.projects} /> */}
        <NavFolders items={data.navFolders} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <SignedOut>
          <SignInButton>
            <button className="flex border border-border justify-center m-1 p-1 hover:bg-[hsl(var(--border))]">
              로그인 또는 회원가입
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          {/* <NavUser user={data.user} /> */}
          <UserButton />
        </SignedIn>
      </SidebarFooter>
    </Sidebar>
  )
}
