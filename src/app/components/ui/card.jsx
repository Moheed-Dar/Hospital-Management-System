import clsx from "clsx";

export function Card({ children, className, ...props }) {
  return (
    <div
      className={clsx(
        "bg-white shadow-sm rounded-lg  border-0 border-gray-200 p-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
