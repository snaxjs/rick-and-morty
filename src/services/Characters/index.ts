import { ICharactersService, IGetAllCharactersResponse } from "./interfaces";
import { axiosInstance } from "../../utils/Axios";

export class CharactersService implements ICharactersService {
  getAllCharacters = async (
    page: number = 1,
  ): Promise<IGetAllCharactersResponse> => {
    const res = await axiosInstance.post("", {
      query: `query getCharacters {
                  characters(page: ${page}) {
                    info {
                      counts
                      pages
                    }
                    results {
                      id
                      name
                      status
                      image
                      species
                      origin {
                        name
                      }
                    }
                  }
                }`,
    });

    if (res.status === 200) {
      return res.data.data.characters;
    }

    return null;
  };
}
