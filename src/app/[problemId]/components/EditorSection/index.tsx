"use client";

import LanguageSelect from "@/components/LanguageSelect";
import useDark from "@/hooks/useDark";
import { Editor, EditorProps, loader } from "@monaco-editor/react";
import { TextAlignLeft } from "@phosphor-icons/react/dist/ssr";
import { Position, editor } from "monaco-editor";
import { useRef, useState } from "react";

loader.init().then((monaco) => {
  monaco.editor.defineTheme("dark-theme", {
    base: "vs-dark",
    inherit: true,
    rules: [],
    colors: {
      "editor.background": "#18181b", // Caution with the background color
    },
  });
});

const EditorSection: React.FC = () => {
  const isDark = useDark();
  const containerRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
  const [language, setLanguage] = useState<string>("javascript");
  const [position, setPosition] = useState<Position | null>(null);

  const handleEditorDidMount: EditorProps["onMount"] = (editor, monaco) => {
    editorRef.current = editor;
    setPosition(editor.getPosition());
    monaco.editor.getEditors().forEach((editor) => {
      editor.onDidChangeCursorPosition((e) => {
        setPosition(e.position);
      });
    });
  };

  const handleFormatCode = () => {
    if (!editorRef.current) return;
    editorRef.current.getAction("editor.action.formatDocument")?.run();
  };

  // useLayoutEffect(() => {
  //   if (!containerRef.current) return;
  //   const resizeObserver = new ResizeObserver(() => {
  //     console.log("Resize");

  //     //@ts-ignore
  //     // editorRef.current?.layout({});
  //   });
  //   resizeObserver.observe(containerRef.current);
  //   return () => {
  //     resizeObserver.disconnect();
  //   };
  // }, []);

  return (
    <div
      ref={containerRef}
      className="size-full max-h-full max-w-full grid grid-rows-[min-content_minmax(0px,auto)_min-content] place-items-stretch overflow-hidden"
    >
      <header className="h-6 flex items-center border-b border-zinc-200 dark:border-zinc-700 px-2">
        <LanguageSelect value={language} onChange={setLanguage} />
        <button
          className="btn-icon !bg-transparent ms-auto"
          onClick={handleFormatCode}
        >
          <TextAlignLeft size={16} />
        </button>
      </header>
      <Editor
        className="overflow-auto"
        wrapperProps={{ className: "min-h-0 min-w-0" }}
        theme={isDark ? "dark-theme" : "vs"}
        language={language}
        defaultValue="// Write your code here"
        options={{
          autoIndent: "advanced",
          formatOnPaste: true,
          automaticLayout: true,
        }}
        keepCurrentModel={true}
        onMount={handleEditorDidMount}
      />
      <footer className="h-6 border-t border-zinc-200 dark:border-zinc-700 flex items-center px-2 gap-2">
        <span className="text-xs text-zinc-500 whitespace-nowrap">
          Ln {position?.lineNumber}, Col {position?.column}
        </span>
        <button className="btn ms-auto">Run</button>
        <button className="btn  bg-emerald-400 dark:bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-500">
          Save
        </button>
      </footer>
    </div>
  );
};
export default EditorSection;
