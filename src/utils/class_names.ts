export const class_names = (
  className: string,
  classNames?: string[] | undefined,
): string => `${className}${classNames ? " " + classNames.join(" ") : ""}`;
