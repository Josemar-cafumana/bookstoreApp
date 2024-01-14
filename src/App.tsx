import { useMemo, useState } from "react";
import { Navbar } from "./components";
import Hero from "@components/Hero";

import { AxiosRequestConfig } from "axios";
import fetchData from "@hooks/fetchData";
import { Swiper, SwiperSlide } from "swiper/react";
import BookCardMedium from "@components/BookCardMedium";

import banner from "@assets/banner-3.jpg";
import about from "@assets/oficinas.png";
import Footer from "@components/Footer";
import SearchCombo from "@components/SearchCombo";

function App() {
  const options: AxiosRequestConfig = useMemo(
    () => ({
      headers: {
        Accept: "*/*",
      },
      params: {
        title: "world",
        limit: 2,
      },
    }),
    []
  );

  const { data } = fetchData<Books>(options);

  return (
    <>
      {/* Header */}
      <header className="">
        <div className="bg-primary py-2 flex md:flex-row flex-col items-center justify-center gap-4">
          <span className="font-semibold">
            Receba convites, sugestões de livros e novidades exclusivas!
          </span>
          <div className="flex space-x-2">
            <input type="text" placeholder="Email" className="px-2 py-1 " />
            <button className="px-2 py-1 bg-black text-white">
              Increver-se
            </button>
          </div>
        </div>
        <Navbar />
      </header>
      {/* Header */}

      <Hero />

      {/* Genres section */}
      <div className="my-16 px-14 ">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Generos</h2>
          <a href="#" className="text-primary">
            Ver todos
          </a>
        </div>
        <Swiper
          spaceBetween={10}
          loop={true}
          className="flex gap-4  w-full mt-4"
        >
          {data?.docs.map((book) => (
            <SwiperSlide>
              <BookCardMedium key={`genres${book.key}`} book={book} />
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            quo tenetur adipisci totam quis ipsum voluptatum magnam accusantium
            eligendi labore, magni nesciunt! Aperiam ea vero eligendi soluta,
            tenetur dolorum quo?
          </p>
          <p className="font-regular text-justify mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            quo tenetur adipisci totam quis ipsum voluptatum magnam accusantium
            eligendi labore, magni nesciunt! Aperiam ea vero eligendi soluta,
            tenetur dolorum quo?
          </p>

          <button className="bg-primary mt-4 py-2 px-4  rounded-md text-white font-medium">
            Saber mais
          </button>
        </div>
      </div>
      {/* aboutUs section */}

      {/* Discover section */}
      <div className="my-16 px-14">
        <div className="flex justify-between items-center mb-10">
          <div className="home__text-container">
            <h1 className="text-4xl font-extrabold">Catalog de Livros</h1>
            <p>Explore livros que possa gostar</p>
          </div>

          <div>
            <SearchCombo />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 ">
          {data?.docs.map((book) => (
            <>
              <BookCardMedium key={`discover${book.key}`} book={book} />
            </>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="bg-primary mt-4 py-2 px-4 rounded-md text-white font-medium">
            Ver todos
          </button>
        </div>
      </div>
      {/* Discover section */}

      {/* Discover section */}
      <Footer />
      {/* Discover section */}
    </>
  );
}

export default App;
