// "use client";

// import { SidebarIcon, FilePlus } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useSidebar } from "@/components/ui/sidebar";
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

// export function SiteHeader() {
//   const { toggleSidebar } = useSidebar();

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background">
//       <div className="flex h-[--header-height] w-full items-center justify-between gap-2 px-4">
//         {/* Left side: other header buttons */}
//         <div className="flex items-center gap-2">
//           <Button
//             className="h-8 w-8"
//             variant="ghost"
//             size="icon"
//             onClick={toggleSidebar}
//           >
//             <SidebarIcon />
//           </Button>
//           <Button
//             className="h-8 w-8"
//             variant="ghost"
//             size="icon"
//           >
//             <FilePlus />
//           </Button>
//         </div>
//         {/* Right side: Clerk authentication buttons */}
//         <div className="flex items-center gap-2">
//           <SignedOut>
//             <SignInButton />
//           </SignedOut>
//           <SignedIn>
//             <UserButton />
//           </SignedIn>
//         </div>
//       </div>
//     </header>
//   );
// }

"use client"

import { SidebarIcon, FilePlus } from "lucide-react"

// import { SearchForm } from "@/components/search-form"
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
// import { Separator } from "@/components/ui/separator"
import { useSidebar } from "@/components/ui/sidebar"

export function SiteHeader() {
  const { toggleSidebar } = useSidebar()

  return (
    <header className="fle sticky top-0 z-50 w-full items-center border-b bg-background">
      <div className="flex h-[--header-height] w-full items-center gap-2 px-4">
        <Button
          className="h-8 w-8"
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
        >
          <SidebarIcon />
        </Button>
        <Button
          className="h-8 w-8"
          variant="ghost"
          size="icon">
          <FilePlus />
        </Button>
        {/* <Separator orientation="vertical" className="mx-1 h-4" /> */}
        {/* <Breadcrumb className="hidden sm:block">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#" className="text-xl mb-1">
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Data Fetching</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb> */}
        {/* <SearchForm className="w-full sm:ml-auto sm:w-auto" /> */}
      </div>
    </header>
  )
}
