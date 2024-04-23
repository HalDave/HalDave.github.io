import { useQuery } from "react-query";

export const useItems = (type:string) =>{
  const { isLoading, isFetching, data } = useQuery(type, () =>
    fetch(
      `https://haldave-github-pages-webapp.azurewebsites.net/Items/${type}`
    ).then((res) => res.json())
  );
  return {isLoading, isFetching, data}
}