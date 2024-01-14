import React from "react";

interface currentBook {
  book: BookDoc;
  showGenre?: boolean;
  setCurrentBook?: any;
}

const BookCardMedium = ({
  book,
  showGenre = false,
  setCurrentBook,
}: currentBook) => {
  return (
    <div
      onClick={() => setCurrentBook(book)}
      className=" relative h-[18rem] w-[13rem] rounded-md"
    >
      <div className="rounded-md w-fit h-fit">
        <img
          className="object-cover h-[18rem] w-[13rem] rounded-md "
          src={
            book.cover_i
              ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
              : ""
          }
        />
        {showGenre && (
          <h4
            className="absolute text-white font-semibold z-10"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            }}
          >
            {book.subject_facet[0]}
          </h4>
        )}

        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
    </div>
  );
};

export default BookCardMedium;
