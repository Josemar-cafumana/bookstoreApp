import { useEffect, useMemo, useState } from "react";
import Hero from "@components/Hero";

import fetchData from "@hooks/fetchData";
import { Swiper, SwiperSlide } from "swiper/react";
import BookCardMedium from "@components/BookCardMedium";

import banner from "@assets/banner-3.jpg";
import about from "@assets/oficinas.png";
import SearchCombo from "@components/SearchCombo";
import { NavLink, useNavigate } from "react-router-dom";
import BookDetailsModal from "@components/BookDetailsModal";
import SkeletonLoader from "@components/SkeletonLoader";

function Home() {
  const [queries, setqueries] = useState("world");
  const [hasFetched, setHasFetched] = useState(false);

  const { data: booksGenres } = fetchData<Books>(20, "world");
  const { data: books, isLoading } = fetchData<Books>(12, queries);
  let [isOpen, setIsOpen] = useState(false);
  let [currentBook, setCurrentBook] = useState<BookDoc | null>(null);

  const navigator = useNavigate();
  useEffect(() => {
    // Verificar se já foi feito o fetch
    if (!hasFetched) {
      // Fazer algo após o fetch aqui, se necessário
      setHasFetched(true);
    }
  }, [booksGenres, hasFetched]);

  const openModal = (book: BookDoc) => {
    setCurrentBook(book);
    setIsOpen(true);
  };

  return (
    <>
      <Hero />

      {/* Genres section */}
      <div className="my-16 px-14 ">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-semibold ">Gêneros</h2>
          <NavLink to="/search" className="text-primary">
            Ver todos
          </NavLink>
        </div>
        <Swiper
          spaceBetween={10}
          loop={true}
          className="flex gap-4  w-full mt-4"
        >
          {booksGenres?.docs.map((book) => (
            <SwiperSlide>
              <BookCardMedium showGenre key={`genres${book.key}`} book={book} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Genres section */}

      {/* banner section */}
      <div className="my-12 mt-24">
        <img src={banner} className="w-full object-cover" />
      </div>
      {/* banner section */}

      {/* aboutUs section */}
      <div className=" flex flex-col gap-10 md:flex-row my-16 mb-20 px-14 ">
        <div className="max-w-[40rem] h-96">
          <img
            className="object-cover w-full h-full"
            src={about}
            alt="Livraria Kiela"
          />
        </div>
        <div>
          <h1
            className="text-4xl font-semibold my-6 mb-10"
            style={{ whiteSpace: "pre-line" }}
          >
            Sobre nós
          </h1>
          <p className="font-regular text-justify mb-4">
            Em nosso espaço virtual, Nossa Livraria se destaca como um refúgio
            para os apaixonados por livros. Com uma cuidadosa curadoria,
            oferecemos uma ampla gama de títulos que abraçam desde os clássicos
            intemporais até as mais recentes obras contemporâneas.
          </p>
          <p className="font-regular text-justify mb-4">
            Navegar por nossas prateleiras virtuais não é apenas uma busca por
            livros; é uma jornada de descobertas literárias feita sob medida
            para cada leitor, complementada por conselheiros literários prontos
            para orientar e eventos que celebram a comunidade literária.
          </p>

          <button
            onClick={() => navigator("/about")}
            className="bg-primary hover:bg-primary/80 mt-4 py-2 px-4  rounded-md text-white font-medium"
          >
            Saber mais
          </button>
        </div>
      </div>
      {/* aboutUs section */}

      {/* Discover section */}
      {isLoading ? (
        <>
          <div className="my-16 px-14">
            <div className="flex justify-between items-center mb-10">
              <div className="home__text-container">
                <h1 className="text-4xl font-extrabold">Catálogo de Livros</h1>
                <p>Explore livros que possa gostar</p>
              </div>

              <div>
                <SearchCombo query={queries} setQuery={setqueries} />
              </div>
            </div>
          </div>
          <SkeletonLoader count={12} />
        </>
      ) : (
        <div className="my-16 px-14">
          <div className="flex justify-between items-center mb-10">
            <div className="home__text-container">
              <h1 className="text-4xl font-extrabold">Catálogo de Livros</h1>
              <p>Explore livros que possa gostar</p>
            </div>

            <div>
              <SearchCombo query={queries} setQuery={setqueries} />
            </div>
          </div>

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
          <div className="flex justify-center">
            <button
              onClick={() => navigator("/search")}
              className="bg-primary hover:bg-primary/80 mt-4 py-2 px-4 rounded-md text-white font-medium"
            >
              Ver todos
            </button>
          </div>
        </div>
      )}

      {/* Discover section */}

      <BookDetailsModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        book={currentBook}
      />
    </>
  );
}

export default Home;
