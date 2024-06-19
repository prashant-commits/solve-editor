import axios from "axios";

export type TResponse = {
  sheetData: SheetData[];
};


export const getStriversSdeSheet = () =>
  axios.get<TResponse>(
    "https://adminapi.takeuforward.org/api/sheets/single/strivers_sde_sheet"
  );
