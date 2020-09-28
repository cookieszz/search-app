import { fakeData, fakeDataType } from "./fakeData";

export const fetchFakeData = async(query: string, text: string ): Promise<fakeDataType[]> => {
  return new Promise((resolve, reject) => setTimeout(() => {
    const filteredData = text ? fakeData.filter((item) => item.title.toLowerCase().includes(text.toLowerCase())): fakeData;
    resolve(filteredData);
  }, 2000));
};