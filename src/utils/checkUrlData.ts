import axios from "axios";
import { ErrorHandler } from "utils/ErrorHandler";

export const checkUrlData = async (url: string): Promise<boolean> => {
  let result = true;
  await axios.get(url).catch((error) => {
    ErrorHandler(error);
    result = false;
  });
  return result;
};
