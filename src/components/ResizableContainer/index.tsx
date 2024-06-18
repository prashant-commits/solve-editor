"use client";

import { CaretDown, CornersOut } from "@phosphor-icons/react/dist/ssr";
import clsx from "clsx";
import { Resizable, ResizableProps, Size } from "re-resizable";
import { useEffect, useRef, useState } from "react";

export type TResizableContainerPropsType = {
  children: React.ReactNode;
  title: React.ReactNode;
  dir?: "x" | "y";
} & ResizableProps;

const ResizableContainer: React.FC<TResizableContainerPropsType> = ({
  children,
  className,
  title,
  dir = "x",
  ...resizableProps
}) => {
  const resizableRef = useRef<Resizable>(null);
  const [size, setSize] = useState<Size>({
    width: dir === "x" ? "50vw" : undefined,
    height: dir === "y" ? "50vh" : undefined,
  });
  const [resize, setResize] = useState<{
    width: number | undefined;
    height: number | undefined;
  }>({
    width: undefined,
    height: undefined,
  });
  const [isSpaceInXDir, setIsSpaceInXDir] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (resize.width === undefined || resize.height === undefined) return;
    setIsSpaceInXDir(resize.width > 25);
    if (dir === "x") {
      setIsOpen(resize.width !== 25);
    } else {
      setIsOpen(resize.height !== 25);
    }
  }, [resize, dir]);

  useEffect(() => {}, [size, dir]);

  useEffect(() => {
    if (!resizableRef.current?.resizable) return;
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      const { width, height } = entry.contentRect;
      setResize({ width, height });
    });

    observer.observe(resizableRef.current.resizable);

    return () => {
      observer.disconnect();
    };
  }, [dir]);

  const handleResizeStop: ResizableProps["onResizeStop"] = (
    e,
    direction,
    ref,
    d
  ) => {
    setSize({ width: ref.style.width, height: ref.style.height });
  };

  const handleToggleOpen = () => {
    setSize((prev) => ({
      width: dir === "x" ? (isOpen ? "41px" : "50vw") : prev.width,
      height: dir === "y" ? (isOpen ? "41px" : "50vh") : prev.height,
    }));
  };

  return (
    <Resizable
      ref={resizableRef}
      className={clsx("flex flex-col overflow-hidden p-[8px]", className)}
      minWidth="41px"
      maxWidth="calc(100% - 41px)"
      maxHeight="calc(100% - 41px)"
      minHeight="41px"
      bounds="parent"
      {...resizableProps}
      onResizeStop={handleResizeStop}
      size={size}
    >
      <div className="ring-1 ring-inset ring-zinc-100/10 bg-zinc-900 grid grid-rows-[min-content_auto_min-content] place-items-stretch flex-1 overflow-hidden rounded-md">
        <header
          className={clsx(
            "relative h-6 bg-zinc-800 px-2 py-px flex justify-between items-center origin-top-left transition-all ease-out",
            !isSpaceInXDir && "rotate-90 translate-x-[25px]"
          )}
          style={{ width: !isSpaceInXDir ? resize.height + "px" : "100%" }}
        >
          {title}
          <div
            className={clsx(
              "flex items-center gap-2 pe-1 absolute end-0 top-0 bottom-0"
            )}
          >
            <button className="btn-icon">
              <CornersOut size={10} weight="bold" />
            </button>
            <button
              className={clsx("btn-icon", !isSpaceInXDir && "-rotate-90")}
              onClick={handleToggleOpen}
            >
              <CaretDown
                size={10}
                weight="bold"
                className={clsx(
                  "transition-transform",
                  dir === "x" && (isOpen ? "rotate-90" : "-rotate-90"),
                  dir === "y" && (isOpen ? "-rotate-180" : "rotate-0")
                )}
              />
            </button>
          </div>
        </header>
        <div className="px-2">{children}</div>
        <footer className="h-6 "></footer>
      </div>
    </Resizable>
  );
};

export default ResizableContainer;
