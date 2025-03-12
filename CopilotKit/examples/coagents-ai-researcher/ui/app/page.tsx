"use client";

import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { ModelSelector } from "@/components/ModelSelector";
import { ResearchWrapper } from "@/components/ResearchWrapper";
import { ThemeSelector } from "@/components/ThemeSelector";
import { ThemeProvider } from "./providers";
import { ModelSelectorProvider, useModelSelectorContext } from "@/lib/model-selector-provider";
import { ResearchProvider } from "@/lib/research-provider";
import { CopilotKit } from "@copilotkit/react-core";
import "@copilotkit/react-ui/styles.css";

import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default function ModelSelectorWrapper() {
  return (
    <ClerkProvider>
      <div className="[--header-height:calc(theme(spacing.14))]">
        <SidebarProvider className="flex flex-col">
          <SiteHeader />
          <div className="flex flex-1">
            <AppSidebar />
            <SidebarInset>
              <ModelSelectorProvider>
                <div className="flex flex-1 flex-col gap-4 p-4">
                  {/* 반응형 컨테이너: 기본은 세로(stack), lg 이상에서는 가로(row) */}
                  <div className="flex flex-col lg:flex-row gap-4">
                    {/* 우측 패널: 모바일에서는 위에, lg 이상에서는 오른쪽 */}
                    <div className="order-1 lg:order-2 w-full lg:w-1/4 rounded-xl bg-muted/50 p-4">
                      <p>a progress panel</p>
                    </div>
                    {/* 메인 컨텐츠 영역: 모바일에서는 아래쪽, lg 이상에서는 왼쪽 */}
                    <div className="order-2 lg:order-1 w-full lg:w-3/4 flex flex-col min-h-[100vh] rounded-xl bg-muted/50 md:min-h-min p-4">
                      <Home />
                      <ThemeProvider attribute="class" defaultTheme="light" themes={['light', 'dark', 'system']}>
                        <ThemeSelector />
                      </ThemeProvider>
                      <ModelSelector />
                    </div>
                  </div>
                </div>
              </ModelSelectorProvider>
            </SidebarInset>
          </div>
        </SidebarProvider>
      </div>
    </ClerkProvider>
  );
}

function Home() {
  const { useLgc } = useModelSelectorContext();

  return (
    <CopilotKit runtimeUrl={useLgc ? "/api/copilotkit-lgc" : "/api/copilotkit"} agent="ai_researcher">
      <ResearchProvider>
        <ResearchWrapper />
      </ResearchProvider>
    </CopilotKit>
  );
}


// "use client";

// import { ModelSelector } from "@/components/ModelSelector";
// import { ResearchWrapper } from "@/components/ResearchWrapper";
// import { ThemeSelector } from "@/components/ThemeSelector";
// import { ThemeProvider } from "./providers";
// import { ModelSelectorProvider, useModelSelectorContext } from "@/lib/model-selector-provider";
// import { ResearchProvider } from "@/lib/research-provider";
// import { CopilotKit } from "@copilotkit/react-core";
// import "@copilotkit/react-ui/styles.css";

// import { AppSidebar } from "@/components/app-sidebar";
// import { SiteHeader } from "@/components/site-header";
// import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

// export default function ModelSelectorWrapper() {
//   return (
//     <div className="[--header-height:calc(theme(spacing.14))]">
//       <SidebarProvider className="flex flex-col">
//         <SiteHeader />
//         <div className="flex flex-1">
//           <AppSidebar />
//           <SidebarInset>
//             <ModelSelectorProvider>
//               <div className="flex flex-1 flex-col gap-4 p-4">
//                 {/* 메인 컨텐츠와 우측 패널을 감싸는 flex row */}
//                 <div className="flex flex-row gap-4">
//                   {/* 왼쪽 메인 컨텐츠 영역 (비율 3) */}
//                   <div className="flex-[3] flex flex-col min-h-[100vh] rounded-xl bg-muted/50 md:min-h-min">
//                     <Home />
//                     <ThemeSelector />
//                     <ThemeProvider attribute="class" defaultTheme="light" themes={['light', 'dark', 'system']}>
//                       <ThemeSelector />
//                     </ThemeProvider>
//                     <ModelSelector />
//                   </div>
//                   {/* 오른쪽 우측 패널 (비율 1) */}
//                   <div className="flex-[1] rounded-xl bg-muted/50 p-4">
//                     <p>a progress panel</p>
//                   </div>
//                 </div>
//               </div>
//             </ModelSelectorProvider>
//           </SidebarInset>
//         </div>
//       </SidebarProvider>
//     </div>
//   );
// }

// function Home() {
//   const { useLgc } = useModelSelectorContext();

//   return (
//     <CopilotKit runtimeUrl={useLgc ? "/api/copilotkit-lgc" : "/api/copilotkit"} agent="ai_researcher">
//       <ResearchProvider>
//         <ResearchWrapper />
//       </ResearchProvider>
//     </CopilotKit>
//   );
// }


// "use client";

// import { ModelSelector } from "@/components/ModelSelector";
// import { ResearchWrapper } from "@/components/ResearchWrapper";
// import { ThemeSelector } from "@/components/ThemeSelector";
// import { ThemeProvider } from "./providers";
// import { ModelSelectorProvider, useModelSelectorContext } from "@/lib/model-selector-provider";
// import { ResearchProvider } from "@/lib/research-provider";
// import { CopilotKit } from "@copilotkit/react-core";
// import "@copilotkit/react-ui/styles.css";

// import { AppSidebar } from "@/components/app-sidebar"
// import { SiteHeader } from "@/components/site-header"
// import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

// export default function ModelSelectorWrapper() {
//   return (
//       <main className="flex flex-col items-center justify-between">
//         <ModelSelectorProvider>
//             <Home/>
//           <ThemeSelector/>
//           <ThemeProvider
//             attribute='class'
//             defaultTheme='light'
//             themes={['light', 'dark', 'neon']}
//           >
//             <ThemeSelector/>
//           </ThemeProvider>
//           <ModelSelector />
//         </ModelSelectorProvider>
//       </main>
//   );
// }

// function Home() {
//   const { useLgc } = useModelSelectorContext();

//   return (
//       <CopilotKit runtimeUrl={useLgc ? "/api/copilotkit-lgc" : "/api/copilotkit"} agent="ai_researcher">
//         <ResearchProvider>
//           <ResearchWrapper />
//         </ResearchProvider>
//       </CopilotKit>
//   );
// }
