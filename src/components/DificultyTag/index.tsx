import clsx from "clsx";

export type TDifficultyPropsType = {
  className?: string;
  difficulty: number;
};

const DifficultyTag: React.FC<TDifficultyPropsType> = ({
  difficulty,
  className,
}) => {
  if (difficulty === 0) {
    return (
      <span
        className={clsx(
          "bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 text-[10px] font-medium px-1 rounded-full",
          className
        )}
      >
        Easy
      </span>
    );
  } else if (difficulty === 1) {
    return (
      <span
        className={clsx(
          "bg-yellow-100 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-100 text-[10px] font-medium px-1 rounded-full",
          className
        )}
      >
        Medium
      </span>
    );
  } else if (difficulty === 2) {
    return (
      <span
        className={clsx(
          "bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100 text-[10px] font-medium px-1 rounded-full",
          className
        )}
      >
        Hard
      </span>
    );
  }
};

export default DifficultyTag;
