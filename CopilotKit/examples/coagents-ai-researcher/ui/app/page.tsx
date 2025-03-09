"use client";

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
    <div className="[--header-height:calc(theme(spacing.14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset>
            <ModelSelectorProvider>
              <div className="flex flex-1 flex-col gap-4 p-4">
                {/* Header section with a parent and child div */}
                <header className="bg-muted/50">
                  <div className="p-4">
                    <h1 className="text-xl font-bold">Header Content</h1>
                  </div>
                </header>
                {/* The main content area */}
                <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
                  <Home />
                  <ThemeSelector />
                  <ThemeProvider attribute="class" defaultTheme="light" themes={['light', 'dark', 'neon']}>
                    <ThemeSelector />
                  </ThemeProvider>
                  <ModelSelector />
                </div>
              </div>
            </ModelSelectorProvider>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
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
