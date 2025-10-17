import clsx from "clsx";

export function Badge({ children, className, ...props }) {
  return (
    <span
      className={clsx(
        "inline-block text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
