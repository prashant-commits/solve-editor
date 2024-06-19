import { getStriversSdeSheet } from "./apis";
import ProblemSet from "./components/ProblemSet";

export default async function Home() {
  const { data } = await getStriversSdeSheet();
  return (
    <main className="relative flex flex-col gap-2 pb-6">
      <header className="h-10 bg-white dark:bg-zinc-800 px-6 sticky top-0 z-20 shadow dark:shadow-white/10  leading-10 font-medium text-zinc-800 dark:text-zinc-300">
        Striver SDE Sheet
      </header>
      {data.sheetData.map((_) => (
        <div key={_.step_no} className="px-4">
          <ProblemSet sheetData={_} />
        </div>
      ))}
    </main>
  );
}
