export const isForwardClosure = (): ((value: number) => boolean) => {
  let prevValue = 0;
  return (value: number): boolean => {
    let result = prevValue < value;
    console.log("PREV VALUE:", prevValue);
    console.log("VALUE:", value);

    prevValue = value;
    return result;
  };
};
