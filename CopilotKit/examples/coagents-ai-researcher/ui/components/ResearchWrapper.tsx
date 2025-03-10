import { HomeView } from "./HomeView";
import { ResultsView } from "./ResultsView";
import { AnimatePresence } from "framer-motion";
import { useResearchContext } from "@/lib/research-provider";

export function ResearchWrapper() {
  const { researchQuery, setResearchInput } = useResearchContext();

  return (
    <>
      <div className="flex flex-col items-center justify-center relative z-10">
        <div className="flex-1">
          {researchQuery ? (
            <AnimatePresence
              key="results"
              onExitComplete={() => {
                setResearchInput("");
              }}
              mode="wait"
            >
              <ResultsView key="results" />
            </AnimatePresence>
          ) : (
            <AnimatePresence key="home" mode="wait">
              <HomeView key="home" />
            </AnimatePresence>
          )}
        </div>
        <footer className="flex flex-wrap justify-center gap-5 pb-5 text-xs text-slate-600 font-medium">
          <a
            href="https://babelbrain.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            © 2025 BabelBrain. All rights reserved.
          </a>
          <a
            href="https://babelbrain.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            개인정보처리방침
          </a>
          <a
            href="https://babelbrain.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            이용약관
          </a>
        </footer>
      </div>
    </>
  );
}
