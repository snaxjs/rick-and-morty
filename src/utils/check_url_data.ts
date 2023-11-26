import axios from "axios";
import { Error_handler } from "utils/error_handler";

export const check_url_data = async (url: string): Promise<boolean> => {
  let result = true;
  await axios.get(url).catch((error) => {
    Error_handler(error);
    result = false;
  });
  return result;
};
