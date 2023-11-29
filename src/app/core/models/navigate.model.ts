export interface INavigate {
  title: string;
  paths: {
    name: string;
    link: string;
    isSelect: boolean;
  }[];
}