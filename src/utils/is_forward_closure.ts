export const is_forward_closure = (): ((value: number) => boolean) => {
  let prevValue = 0;
  return (value: number): boolean => {
    let result = prevValue < value;
    prevValue = value;
    return result;
  };
};
