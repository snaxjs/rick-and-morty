export function ErrorHandler(e: Error): null {
  console.groupCollapsed("ERROR");
  console.error("ERROR NAME", e.name);
  console.error("ERROR MESSAGE: ", e.message);
  console.error("ERROR STACK: ", e.stack);
  return null;
}
