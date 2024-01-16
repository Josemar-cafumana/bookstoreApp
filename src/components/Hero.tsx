import React, { useEffect, useMemo, useState } from "react";
import BookCard from "./BookCard";
import fetchData from "@hooks/fetchData";
import { AxiosRequestConfig } from "axios";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Hero = () => {
  const [hasFetched, setHasFetched] = useState(false);
  const { data } = fetchData<Books>(10, "world");

  useEffect(() => {
    // Verificar se já foi feito o fetch
    if (!hasFetched) {
      // Fazer algo após o fetch aqui, se necessário
      setHasFetched(true);
    }
  }, [data, hasFetched]);

  return (
    <div>
      <h1
        className="text-4xl font-semibold my-6 mb-10  text-center"
        style={{ whiteSpace: "pre-line" }}
      >
        Queremos que os livros transcendam fronteiras {"\n"} e cheguem a cada
        alma curiosa.
      </h1>
      <Swiper
        spaceBetween={2}
        breakpoints={{
          md: {
            slidesPerView: 1,
            spaceBetween: 2,
          },
          lg: {
            slidesPerView: 4,
          },
        }}
        slidesPerView={3}
        className="flex gap-6 justify-center  mt-12"
      >
        {data?.docs.map((book) => (
          <SwiperSlide className="mt-12" key={book.key}>
            <BookCard book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
