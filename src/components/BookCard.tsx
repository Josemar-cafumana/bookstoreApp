import { addBook } from "@redux/cart/cartReducer";
import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

interface currentBook {
  book: BookDoc;
}

const BookCard = ({ book }: currentBook) => {
  const dispatch = useDispatch();

  const onClickCart = () => {
    dispatch(addBook(book));
    toast.success("Livro adicionado ao carrinho!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <div className="flex gap-4 items-center h-[28rem] w-[50rem] ">
      <div className="rounded-md">
        <img
          className="object-cover w-full h-full rounded-md "
          src={
            book.cover_i
              ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
              : ""
          }
        />
      </div>

      <div className="hidden  sm:flex sm:flex-col">
        <h2 className="text-xl font-semibold">{book.title}</h2>

        <span className="text-gray-400 italic my-2">
          By: {book.author_name}
        </span>

        <span className="flex space-x-2 mb-4">
          <IoStarSharp className="text-yellow-500" size={20} />
          <IoStarSharp className="text-yellow-500" size={20} />
          <IoStarSharp className="text-yellow-500" size={20} />
          <IoStarSharp className="text-yellow-500" size={20} />
          <IoStarSharp className="text-yellow-500" size={20} />
        </span>

        <p className="w-[23rem] text-left">
          {book.subject_facet.slice(1, 8).concat("")}
        </p>

        <button
          onClick={onClickCart}
          className="bg-primary hover:bg-primary/80 mt-4 py-2 px-4 w-full rounded-md text-white font-medium"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
};

export default BookCard;
