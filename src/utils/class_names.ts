export const classNames = (
  className: string,
  classNames?: string[] | undefined,
): string => `${className}${classNames ? " " + classNames.join(" ") : ""}`;
