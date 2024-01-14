import { RootState } from "@redux/store";
import { createSlice } from "@reduxjs/toolkit";

interface initialStateProps {
  books: BookDoc[];
}
const initialState: initialStateProps = {
  books: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addBook: (state, action) => {
      const productIsAlreadyInCart = state.books.some(
        (book) => book.key === action.payload.key
      );

      if (productIsAlreadyInCart) {
        state.books = state.books.map((book) =>
          book.key === action.payload.key
            ? { ...book, quantity: book.quantity! + 1 }
            : book
        );

        return;
      }

      state.books = [...state.books, { ...action.payload, quantity: 1 }];
    },
    removeBook: (state, action) => {
      state.books = state.books.filter(
        (book) => book.key !== action.payload.key
      );
    },
    addBookQuantity: (state, action) => {
      state.books = state.books.map((book) =>
        book.key === action.payload.key
          ? { ...book, quantity: book.quantity! + 1 }
          : book
      );
    },
    decreaseBookQuantity: (state, action) => {
      state.books = state.books
        .map((book) =>
          book.key === action.payload.key
            ? { ...book, quantity: book.quantity! - 1 }
            : book
        )
        .filter((book) => book.quantity! > 0);
    },
  },
});

export const { addBook, removeBook, addBookQuantity, decreaseBookQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
