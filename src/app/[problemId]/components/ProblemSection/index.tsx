"use client";

import { useEffect, useRef } from "react";

export type TProblemSectionPropsType = {
  problem: Problem;
};

const ProblemSection: React.FC<TProblemSectionPropsType> = ({ problem }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (!containerRef.current) return;
  //   containerRef.current.innerHTML = problem.content ?? "";
  // }, [problem]);

  return (
    <div className="overflow-auto px-2 py-1">
      <h1 className="text-lg font-semibold mb-3 dark:text-zinc-300 text-zinc-900">{problem.title}</h1>
      {problem.content && (
        <div className="overflow-auto content" dangerouslySetInnerHTML={{ __html: problem.content }}></div>
      )}
    </div>
  );
};

export default ProblemSection;
