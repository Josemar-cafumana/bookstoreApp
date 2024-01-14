import React from "react";
import about from "@assets/about.jpg";

const About = () => {
  return (
    <>
      <div className="my-16 px-14">
        <div className="section-header my-10">
          <h2 className="text-4xl font-semibold my-6 mb-10 text-center">
            Sobre nós{" "}
          </h2>
        </div>
        <div className="content">
          <p className="mt-4 text-justify">
            Em nosso espaço virtual, Nossa Livraria se destaca como um refúgio
            para os apaixonados por livros. Com uma cuidadosa curadoria,
            oferecemos uma ampla gama de títulos que abraçam desde os clássicos
            intemporais até as mais recentes obras contemporâneas. Navegar por
            nossas prateleiras virtuais não é apenas uma busca por livros; é uma
            jornada de descobertas literárias feita sob medida para cada leitor,
            complementada por conselheiros literários prontos para orientar e
            eventos que celebram a comunidade literária.
          </p>

          <p className="mt-4 text-justify">
            Na Nossa Livraria, o compromisso com a qualidade se reflete na
            diversidade de nossa seleção. Buscamos oferecer uma experiência
            inclusiva, onde diferentes vozes e perspectivas são representadas.
            Além disso, garantimos entregas rápidas e eficientes, permitindo que
            nossos clientes mergulhem rapidamente nas páginas de suas novas
            descobertas literárias. Seja bem-vindo ao nosso espaço onde as
            histórias ganham vida, e a aventura literária está ao alcance de um
            clique.
          </p>
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-2 md:flex-row items-center justify-center md:gap-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.539301065561!2d13.232843874068116!3d-8.829276090363322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f349bb0c4a71%3A0xf27095ccfb9aeac6!2sKiela%20Livraria!5e0!3m2!1sen!2sao!4v1704998083784!5m2!1sen!2sao"
            width="800"
            height="600"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>

          <div>
            <img
              src={about}
              className="object-cover"
              style={{ maxHeight: "38rem" }}
              alt="Livraria Kiela"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
