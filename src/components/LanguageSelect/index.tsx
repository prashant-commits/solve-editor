import clsx from "clsx";

export type TLanguageSelectPropsType = {
  className?: string;
  value?: string | undefined;
  onChange?: (value: string) => void;
};

const LanguageSelect: React.FC<TLanguageSelectPropsType> = ({
  className,
  value,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };
  return (
    <select
      className={clsx("select language-select", className)}
      value={value}
      onChange={handleChange}
    >
      <option value="javascript">JavaScript</option>
      <option value="html">html</option>
      <option value="typescript">TypeScript</option>
      <option value="python">Python</option>
      <option value="java">Java</option>
      <option value="c">C</option>
      <option value="cpp">C++</option>
      <option value="csharp">C#</option>
      <option value="go">Go</option>
      <option value="php">PHP</option>
    </select>
  );
};

export default LanguageSelect;
