import BookCardMedium from "@components/BookCardMedium";
import BookDetailsModal from "@components/BookDetailsModal";
import SkeletonLoader from "@components/SkeletonLoader";
import fetchData from "@hooks/fetchData";
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const BookDetails = () => {
  const [queries, setqueries] = useState("world");
  const { data: books, isLoading } = fetchData<Books>(
    102,
    queries.trim() == "" ? "world" : queries
  );

  let [isOpen, setIsOpen] = useState(false);
  let [currentBook, setCurrentBook] = useState<BookDoc | null>(null);

  const navigator = useNavigate();

  const openModal = (book: BookDoc) => {
    setCurrentBook(book);
    setIsOpen(true);
  };

  return (
    <>
      <form className="px-24 my-10">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  "
            placeholder="Procure Livros..."
            required
            onChange={(q) => {
              setTimeout(() => {
                setqueries(q.target.value);
              }, 2000);
            }}
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-primary hover:bg-primary/80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
          >
            Search
          </button>
        </div>
      </form>

      {isLoading ? (
        <SkeletonLoader count={12} />
      ) : (
        <div className="my-16 px-14">
          <div className="flex justify-center flex-wrap gap-4 ">
            {books?.docs.map((book) => (
              <>
                <BookCardMedium
                  setCurrentBook={openModal}
                  key={`discover${book.key}`}
                  book={book}
                />
              </>
            ))}
          </div>
        </div>
      )}

      <BookDetailsModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        book={currentBook}
      />
    </>
  );
};

export default BookDetails;
