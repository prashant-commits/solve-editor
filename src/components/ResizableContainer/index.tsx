import clsx from "clsx";
import { Resizable, ResizableProps } from "re-resizable";

export type TResizableContainerPropsType = {
  children?: React.ReactNode;
} & ResizableProps;

const ResizableContainer: React.FC<TResizableContainerPropsType> = ({
  children,
  className,
  ...resizableProps
}) => {
  return (
    <Resizable
      className={clsx(
        "ring-1 ring-inset ring-zinc-100/10 shadow-md shadow-zinc-900 bg-zinc-900 flex flex-col",
        className
      )}
      bounds="parent"
      {...resizableProps}
    >
      <div className="grid grid-rows-[min-content_auto_min-content] place-items-stretch flex-1 overflow-hidden rounded-md">
        <header className="h-6 bg-zinc-800">Header</header>
        <div>{children}</div>
        <footer className="h-6 "></footer>
      </div>
    </Resizable>
  );
};

export default ResizableContainer;
