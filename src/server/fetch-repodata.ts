import { pages } from "next/dist/build/templates/app-page";

export const revalidate = 3600 * 4;

export const produits = [];

export const fetchMeta = async (produits: string) => {
  const link = "" + produits;
  const Response = await fetch(link);

  try {
    if (Response.ok) {
      const data = await Response.json();
      return data;
    } else {
      console.error("error fetching data:", Response.statusText);
    }
  } catch (err) {
    console.error("error:", err);
  }
};

const fetchrepodata = async () => {
  const repoData = [];

  for (const produits of pages) {
    const data = await fetchMeta(produits);
    repoData.push(data);
  }
  return repoData;
};

export default fetchrepodata;
