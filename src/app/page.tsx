"use client";

import ResizableContainer from "@/components/ResizableContainer";
import EditorSection from "./components/EditorSection";
import ProblemSection from "./components/ProblemSection";

export default function Home() {
  return (
    <main className="flex gap-4 h-screen overflow-hidden p-2">
      <ResizableContainer
        enable={{ right: true }}
        minWidth="200px"
        maxWidth="calc(100% - 200px - 1rem)"
      >
        <ProblemSection />
      </ResizableContainer>

      <div className="flex flex-col gap-4 flex-1">
        <ResizableContainer
          maxHeight="calc(100% - 50px - 1rem)"
          minHeight="50px"
          enable={{ bottom: true }}
        >
          <EditorSection />
        </ResizableContainer>
        <ResizableContainer className="flex-1" enable={false}>
          Console
        </ResizableContainer>
      </div>
    </main>
  );
}
