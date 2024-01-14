import { Dialog, Transition } from "@headlessui/react";
import { addBook } from "@redux/cart/cartReducer";
import { RootState } from "@redux/store";
import React, { Fragment } from "react";
import { IoStarSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  book: BookDoc | null;
}

const BookDetailsModal = ({ isOpen, setIsOpen, book }: Props) => {
  const dispatch = useDispatch();

  const onClickCart = () => {
    dispatch(addBook(book));
    toast.success("Livro adicionado ao carrinho!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <Transition
      show={isOpen}
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Dialog
        className="relative z-50"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0  bg-black/30 flex w-screen items-center justify-center p-4">
          <Dialog.Panel className="bg-white">
            {book && (
              <div className="flex gap-4 items-center h-[28rem] w-[50rem] ">
                <div className="rounded-md bg-white">
                  <img
                    className="object-cover w-full h-full rounded-md "
                    src={
                      book?.cover_i
                        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
                        : ""
                    }
                  />
                </div>

                <div className="hidden bg-white  sm:flex sm:flex-col">
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
                    className="bg-primary hover:bg-primary/80 mt-4 py-2 px-4 w-3/4 rounded-md text-white font-medium"
                  >
                    Adicionar ao carrinho
                  </button>
                </div>
              </div>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
};

export default BookDetailsModal;
