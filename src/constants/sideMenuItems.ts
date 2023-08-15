import { IMenuNavItem } from "../components/MenuNav/interfaces";
import { PATHS } from "./paths";

export const SIDE_MENU: IMenuNavItem[] = [
  { id: 1, text: "Персонажи", path: PATHS.HOME },
  { id: 2, text: "Локации", path: PATHS.LOCATIONS },
  { id: 3, text: "Эпизоды", path: PATHS.EPISODES },
];
