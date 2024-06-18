import ResizableContainer from "@/components/ResizableContainer";
import { CheckSquare, Code, FileText } from "@phosphor-icons/react/dist/ssr";
import EditorSection from "./components/EditorSection";
import ProblemSection from "./components/ProblemSection";

export default function Home() {
  return (
    <main className="flex h-screen overflow-hidden [&>*]:w-1/2">
      <ResizableContainer
        title={
          <span className="inline-flex gap-2 items-center">
            <FileText size={16} weight="bold" className="text-pink-600" />
            Statement
          </span>
        }
        enable={{ right: true }}
        minHeight="100%"
      >
        <ProblemSection />
      </ResizableContainer>

      <div className="flex flex-col flex-1 overflow-hidden">
        <ResizableContainer
          title={
            <span className="inline-flex gap-2 items-center">
              <Code size={16} weight="bold" className="text-blue-600" />
              Code
            </span>
          }
          enable={{ bottom: true }}
          minWidth="41px"
          maxWidth="auto"
          dir="y"
        >
          <EditorSection />
        </ResizableContainer>
        <ResizableContainer
          title={
            <span className="inline-flex gap-2 items-center">
              <CheckSquare size={16} weight="bold" className="text-green-600" />
              Test
            </span>
          }
          className="flex-1"
          minWidth="41px"
          maxWidth="auto"
          dir="y"
          enable={{ top: true }}
        >
          Console
        </ResizableContainer>
      </div>
    </main>
  );
}
