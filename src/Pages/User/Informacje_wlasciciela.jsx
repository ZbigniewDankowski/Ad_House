import React from "react";

const Informacje_wlasciciela = () => {
  const row_class = "w-full h-full border-r-2 border-b-2 border-logo_bg";
  const h1_class =
    "w-full h-8 p-1 bg-logo_bg text-letter_color text-center border-b-2 border-letter_color font-bold text-sm ";
  return (
    <div className="w-3/4 h-full bg-white mx-auto flex flex-wrap justify-center mb-2">
      <div className="w-1/2 h-1/4 p-2">
        <div className="flex flex-wrap w-full ">
          <h1 className={h1_class}>Dane osobowe</h1>
          <div className="w-full h-8 flex flex-wrap">
            <div className="w-3/5 h-full border-2 border-t-0 border-logo_bg px-2">
              Imię:
            </div>
            <div className="w-2/5 h-full flex justify-end align-middle text-center">
              <p className={row_class}>Andrzej</p>
            </div>
            <div className="w-3/5 h-full border-2 border-t-0 border-logo_bg px-2">
              Nazwisko:
            </div>
            <div className="w-2/5 h-full flex justify-end align-middle text-center">
              <p className={row_class}>Marek</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-1/4 p-2">
        <div className="flex flex-wrap w-full ">
          <h1 className={h1_class}>Preferencje</h1>
          <div className="w-full h-8 flex flex-wrap">
            <div className="w-3/5 h-full border-2 border-t-0 border-logo_bg px-2">
              Kontakt:
            </div>
            <div className="w-2/5 h-full flex justify-end align-middle text-center">
              <p className={row_class}>e-mail, telefon</p>
            </div>
            <div className="w-3/5 h-full border-2 border-t-0 border-logo_bg px-2">
              Wszystkie informacje do wiadomości:
            </div>
            <div className="w-2/5 h-full flex justify-end align-middle text-center">
              <p className={row_class}>właściciela, najemcy</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 min-h-48 my-4 px-4">
        <div className="flex flex-wrap w-full ">
          <h1 className={h1_class}>Dane korespondencyjne:</h1>
          <div className="w-full h-8 flex flex-wrap">
            <div className="w-3/5 h-full border-2 border-t-0 border-logo_bg px-2">
              Ulica:
            </div>
            <div className="w-2/5 h-full flex justify-end align-middle text-center">
              <p className={row_class}>Niepodległości</p>
            </div>
            <div className="w-3/5 h-full border-2 border-t-0 border-logo_bg px-2">
              Numer budynku:
            </div>
            <div className="w-2/5 h-full flex justify-end align-middle text-center">
              <p className={row_class}>4A</p>
            </div>
            <div className="w-3/5 h-full border-2 border-t-0 border-logo_bg px-2">
              Numer mieszkania:
            </div>
            <div className="w-2/5 h-full flex justify-end align-middle text-center">
              <p className={row_class}>12</p>
            </div>
            <div className="w-3/5 h-full border-2 border-t-0 border-logo_bg px-2">
              Kod pocztowy:
            </div>
            <div className="w-2/5 h-full flex justify-end align-middle text-center">
              <p className={row_class}>65-300</p>
            </div>
            <div className="w-3/5 h-full border-2 border-t-0 border-logo_bg px-2">
              Miejscowość:
            </div>
            <div className="w-2/5 h-full flex justify-end align-middle text-center">
              <p className={row_class}>Rudy Śląskie</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 min-h-48 my-4 px-4">
        <div className="flex flex-wrap w-full ">
          <h1 className={h1_class}>Dane korespondencyjne najemcy:</h1>
          <div className="w-full h-8 flex flex-wrap">
            <div className="w-3/5 h-full border-2 border-t-0 border-logo_bg px-2">
              Ulica:
            </div>
            <div className="w-2/5 h-full flex justify-end align-middle text-center">
              <p className={row_class}>Wolności</p>
            </div>
            <div className="w-3/5 h-full border-2 border-t-0 border-logo_bg px-2">
              Numer budynku:
            </div>
            <div className="w-2/5 h-full flex justify-end align-middle text-center">
              <p className={row_class}>24D</p>
            </div>
            <div className="w-3/5 h-full border-2 border-t-0 border-logo_bg px-2">
              Numer mieszkania:
            </div>
            <div className="w-2/5 h-full flex justify-end align-middle text-center">
              <p className={row_class}>11</p>
            </div>
            <div className="w-3/5 h-full border-2 border-t-0 border-logo_bg px-2">
              Kod pocztowy:
            </div>
            <div className="w-2/5 h-full flex justify-end align-middle text-center">
              <p className={row_class}>65-300</p>
            </div>
            <div className="w-3/5 h-full border-2 border-t-0 border-logo_bg px-2">
              Miejscowość:
            </div>
            <div className="w-2/5 h-full flex justify-end align-middle text-center">
              <p className={row_class}>Rudy Śląskie</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-1/4 p-2">
        <div className="flex flex-wrap w-full ">
          <h1 className={h1_class}>Dane kontaktowe właściciela</h1>
          <div className="w-full h-8 flex flex-wrap">
            <div className="w-3/5 h-full border-2 border-t-0 border-logo_bg px-2">
              Telefon:
            </div>
            <div className="w-2/5 h-full flex justify-end align-middle text-center">
              <p className={row_class}>777-112-997</p>
            </div>
            <div className="w-3/5 h-full border-2 border-t-0 border-logo_bg px-2">
              E-mail:
            </div>
            <div className="w-2/5 h-full flex justify-end align-middle text-center">
              <p className={row_class}>programiren@02.pl</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-1/4 p-2">
        <div className="flex flex-wrap w-full ">
          <h1 className={h1_class}>Dane kontaktowe najemcy</h1>
          <div className="w-full h-8 flex flex-wrap">
            <div className="w-3/5 h-full border-2 border-t-0 border-logo_bg px-2">
              Telefon:
            </div>
            <div className="w-2/5 h-full flex justify-end align-middle text-center">
              <p className={row_class}>505-123-765</p>
            </div>
            <div className="w-3/5 h-full border-2 border-t-0 border-logo_bg px-2">
              E-mail:
            </div>
            <div className="w-2/5 h-full flex justify-end align-middle text-center">
              <p className={row_class}>jessica@o2.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Informacje_wlasciciela;
