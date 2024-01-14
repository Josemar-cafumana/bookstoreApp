import { Dialog, Transition } from "@headlessui/react";
import { selectBooksCount } from "@redux/cart/cart.selectors";
import {
  addBookQuantity,
  decreaseBookQuantity,
  removeBook,
} from "@redux/cart/cartReducer";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import { RootState } from "@redux/store";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartDialog = ({ isOpen, setIsOpen }: Props) => {
  const { books } = useSelector((rootReducer: RootState) => rootReducer.cart);
  const booksCount = useSelector(selectBooksCount);
  const dispatch = useDispatch();

  const handleRemoveClick = (book: BookDoc) => {
    dispatch(removeBook(book));
  };

  const handleIncreaseClick = (book: BookDoc) => {
    dispatch(addBookQuantity(book));
  };

  const handleDecreaseClick = (book: BookDoc) => {
    dispatch(decreaseBookQuantity(book));
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
        <div className="fixed inset-0  bg-black/30 flex w-screen items-start justify-end p-4">
          <Dialog.Panel className="">
            <div
              className="w-full overflow-y-scroll 
               mt-28 max-w-sm rounded bg-white   mx-auto "
              style={{ width: "30rem", maxHeight: "30rem" }}
            >
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 bg-gray-200">
                  <h1 className="text-lg font-bold">Carrinho de livros</h1>
                  <span className="text-gray-600">({booksCount} items)</span>
                </div>
                <div className="p-4">
                  {books.map((book) => (
                    <div
                      key={`cart${book.key}`}
                      className="flex items-center mb-4"
                    >
                      <img
                        className="h-16 w-16 object-contain rounded-lg mr-4"
                        src={
                          book.cover_i
                            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
                            : ""
                        }
                        alt="Product"
                      />
                      <div className="flex-1">
                        <h2 className="text-lg font-bold">{book.title}</h2>
                        <span className="text-gray-600">$29.99</span>
                        <span className="text-gray-600 flex items-center space-x-2">
                          <AiOutlineMinus
                            size={15}
                            onClick={() => handleDecreaseClick(book)}
                            aria-label={`Decrease quantity of ${book.title}`}
                          />
                          <p>{book.quantity}</p>
                          <AiOutlinePlus
                            size={15}
                            onClick={() => handleIncreaseClick(book)}
                            aria-label={`Increase quantity of ${book.title}`}
                          />
                        </span>
                      </div>
                      <button
                        onClick={() => handleRemoveClick(book)}
                        className="text-gray-600 hover:text-primary"
                      >
                        <svg
                          className="h-6 w-6 fill-current"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 13H5v-2h14v2z" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
                <div className="px-4 py-3 bg-gray-200">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">Total:</span>
                    <span className="font-bold text-lg">$74.97</span>
                  </div>
                  <button className="block w-full mt-4 bg-primary  text-white font-bold py-2 px-4 rounded">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CartDialog;
