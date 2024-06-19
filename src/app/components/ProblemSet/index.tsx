import DifficultyTag from "@/components/DificultyTag";
import { CaretDown, Code, YoutubeLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export type TProblemSetPropsType = {
  sheetData: SheetData;
};

const ProblemSet: React.FC<TProblemSetPropsType> = ({ sheetData }) => {
  return (
    <div
      key={sheetData.step_no}
      className="bg-white dark:bg-zinc-900 rounded-md ring-1 ring-zinc-100/10 dark:ring-zinc-900/10 shadow dark:shadow-white/10 overflow-hidden grid hover:grid-rows-[min-content_1fr] grid-rows-[min-content_0fr] transition-[grid-template-rows] ease-out set"
    >
      <h3 className="px-2 py-px text-xs font-medium text-zinc-900 dark:text-white h-6 flex items-center bg-white dark:bg-zinc-800 overflow-hidden relative border-b border-zinc-200 dark:border-zinc-700 cursor-pointer">
        {sheetData.step_no}.&nbsp;{sheetData.head_step_no}
        <span className="text-zinc-500 ms-auto [.set:hover_&]:-translate-y-10 transition-transform absolute end-2">
          {sheetData.topics.length} Tps
        </span>
        <CaretDown
          size={16}
          weight="fill"
          className="[.set:hover_&]:translate-y-0 -translate-y-10 transition-transform absolute end-2"
        />
      </h3>
      <div className="overflow-hidden">
        {sheetData.topics.map((topic) => (
          <div
            key={topic.id}
            className="px-2 py-px flex items-center gap-1 [&:not(:last-child)]:border-b border-zinc-100 dark:border-zinc-800 text-zinc-900 dark:text-zinc-400"
          >
            <Link
              href={`/${topic.post_link?.split("/").at(-2)}`}
              className="hover:underline text-xs"
            >
              {topic.sl_no_in_step}.&nbsp;{topic.title}
            </Link>
            {typeof topic.difficulty === "number" && (
              <DifficultyTag difficulty={topic.difficulty} />
            )}
            <span className="me-auto"></span>
            {topic.lc_link && (
              <Link href={topic.lc_link} className="" target="_blank">
                <button className="btn-icon">
                  <Code size={12} className="text-amber-600" />
                </button>
              </Link>
            )}
            {topic.yt_link && (
              <Link href={topic.yt_link} className="" target="_blank">
                <button className="btn-icon">
                  <YoutubeLogo size={12} className="text-rose-600" />
                </button>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProblemSet;
