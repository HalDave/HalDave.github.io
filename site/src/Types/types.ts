export type ItemProps = {
  id: string;
  type: string;
  data: ItemDataProps;
}

export type ItemDataProps = {
  title: string
  rating?: number;
  opinion: string;
  image: string;
}