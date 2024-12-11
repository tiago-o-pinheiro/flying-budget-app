export interface MOVEMENTS_PROPS {
  id: number;
  name: string;
  value: number;
  date: string;
  category: string;
  type: string;
  account: "Openbank" | "Wise" | "PayFlow" | "Revolut";
}
