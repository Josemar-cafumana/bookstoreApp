import { RootState } from "@redux/store";

export const selectBooksCount = ({ cart }: RootState) => {
  return cart.books.length;
};
