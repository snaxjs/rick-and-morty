export function Error_handler(e: Error) {
  console.groupCollapsed("ERROR");
  console.error("ERROR NAME", e.name);
  console.error("ERROR MESSAGE: ", e.message);
  console.error("ERROR STACK: ", e.stack);
  return e;
}
