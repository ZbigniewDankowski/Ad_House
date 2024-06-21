import React from "react";

const row_class = "w-36 h-full border-r-2 border-b-2 border-logo_bg";
const h1_class =
  "w-full h-8 p-1 bg-logo_bg text-letter_color text-center border-b-2 border-letter_color font-bold text-sm ";
const Naliczenia_lokali = () => {
  return (
    <div className="w-full h-screen max-h-[36rem]">
      <div className="w-3/4 h-full bg-white mx-auto flex-col align-middle justify-center overflow-x-auto">
        <div className="flex flex-wrap w-full h-30">
          <h1 className={h1_class}>Mieszkanie 4A/12</h1>
          <div className="w-full h-8 flex flex-nowrap">
            <div className="w-3/5 h-full  border-r-2 border-b-2 border-logo_bg"></div>
            <div className="w-2/5 h-full flex justify-end align-middle text-center">
              <p className={row_class}>Ilość</p>
              <p className={row_class}>JM</p>
              <p className={row_class}>Stawka</p>
              <p className={row_class}>Wartość</p>
            </div>
          </div>

          <div className="w-full h-8 bg-logo_bg text-logo_bg text-center border-b-2 border-letter_color">
            <h1 className={h1_class}>Media</h1>
            <div className="w-full h-8 flex flex-nowrap">
              <div className="w-3/5 h-full border-r-2 border-b-2 border-logo_bg">
                Centralne ogrzewanie - opłata stała
              </div>
              <div className="w-2/5 h-full flex justify-end align-middle text-center border-logo_bg">
                <p className={row_class}>3</p>
                <p className={row_class}>m2</p>
                <p className={row_class}>3,05zł</p>
                <p className={row_class}>9,15 zł</p>
              </div>
            </div>
            <div className="w-full h-8 flex flex-nowrap">
              <div className="w-3/5 h-full border-r-2 border-b-2 border-logo_bg">
                Centralne ogrzewanie - opłata zmienna
              </div>
              <div className="w-2/5 h-full flex justify-end align-middle text-center border-logo_bg">
                <p className={row_class}>1</p>
                <p className={row_class}>GJ</p>
                <p className={row_class}>141,50 zł</p>
                <p className={row_class}>141,50 zł</p>
              </div>
            </div>
            <div className="w-full h-8 flex flex-nowrap">
              <div className="w-3/5 h-full border-r-2 border-b-2 border-logo_bg">
                Podgrzanie wody
              </div>
              <div className="w-2/5 h-full flex justify-end align-middle text-center border-logo_bg">
                <p className={row_class}>2</p>
                <p className={row_class}>m3</p>
                <p className={row_class}>46,70 zł</p>
                <p className={row_class}>93,40 zł</p>
              </div>
            </div>

            <div className="w-full h-8 flex flex-nowrap">
              <div className="w-3/5 h-full border-r-2 border-b-2 border-logo_bg">
                Wymiana licznika
              </div>
              <div className="w-2/5 h-full flex justify-end align-middle text-center border-logo_bg">
                <p className={row_class}>1</p>
                <p className={row_class}>lok.</p>
                <p className={row_class}>12,00 zł</p>
                <p className={row_class}>12,00 zł</p>
              </div>
            </div>
            <div className="w-full h-8 flex flex-nowrap">
              <div className="w-3/5 h-full border-r-2 border-b-2 border-logo_bg">
                Abonament na wodomierz główny
              </div>
              <div className="w-2/5 h-full flex justify-end align-middle text-center border-logo_bg">
                <p className={row_class}>10</p>
                <p className={row_class}>lok.</p>
                <p className={row_class}>0,68 zł</p>
                <p className={row_class}>6,80 zł</p>
              </div>
            </div>
            <div className="w-full h-8 flex flex-nowrap">
              <div className="w-3/5 h-full border-r-2 border-b-2 border-logo_bg">
                Wywóz nieczystości
              </div>
              <div className="w-2/5 h-full flex justify-end align-middle text-center border-logo_bg">
                <p className={row_class}>3</p>
                <p className={row_class}>os.</p>
                <p className={row_class}>32,00 zł</p>
                <p className={row_class}>96,00 zł</p>
              </div>
            </div>
            <div className="w-full h-8 bg-logo_bg text-logo_bg border-b-2 border-letter_color flex justify-evenly">
              <h1 className="grow h-8 p-1 bg-logo_bg text-letter_color text-left px-5 border-b-2 border-letter_color font-bold text-sm ">
                Razem-Media
              </h1>
              <div className="w-36 h-full text-letter_color text-right px-5 py-1 font-bold border-l-2 border-letter_color">
                358,85 zł
              </div>
            </div>
            <div className="flex flex-wrap w-full h-30">
              <h1 className={h1_class}>Eksploatacja</h1>
            </div>
            <div className="w-full h-8 flex flex-nowrap">
              <div className="w-3/5 h-full border-r-2 border-b-2 border-logo_bg">
                Utrzymanie nieruchomości wspólnej
              </div>
              <div className="w-2/5 h-full flex justify-end align-middle text-center border-logo_bg">
                <p className={row_class}>20</p>
                <p className={row_class}>m2</p>
                <p className={row_class}>2,45 zł</p>
                <p className={row_class}>49,00 zł</p>
              </div>
            </div>
            <div className="w-full h-8 flex flex-nowrap">
              <div className="w-3/5 h-full border-r-2 border-b-2 border-logo_bg">
                Wynagrodzenie zarządzcy
              </div>
              <div className="w-2/5 h-full flex justify-end align-middle text-center border-logo_bg">
                <p className={row_class}>100</p>
                <p className={row_class}>m2</p>
                <p className={row_class}>0,70 zł</p>
                <p className={row_class}>70,00 zł</p>
              </div>
            </div>
            <div className="w-full h-8 bg-logo_bg text-logo_bg border-b-2 border-letter_color flex justify-evenly">
              <h1 className="grow h-8 p-1 bg-logo_bg text-letter_color text-left px-5 border-b-2 border-letter_color font-bold text-sm ">
                Razem-Eksploatacja
              </h1>
              <div className="w-36 h-full text-letter_color text-right px-5 py-1 font-bold border-l-2 border-letter_color">
                119,00 zł
              </div>
            </div>
            <div className="flex flex-wrap w-full h-30">
              <h1 className={h1_class}>Fundusze</h1>
            </div>
            <div className="w-full h-8 flex flex-nowrap">
              <div className="w-3/5 h-full border-r-2 border-b-2 border-logo_bg">
                Fundusz remontowy
              </div>
              <div className="w-2/5 h-full flex justify-end align-middle text-center border-logo_bg">
                <p className={row_class}>100</p>
                <p className={row_class}>m2</p>
                <p className={row_class}>0,80 zł</p>
                <p className={row_class}>80,00 zł</p>
              </div>
            </div>
            <div className="w-full h-8 bg-logo_bg text-logo_bg border-b-2 border-letter_color flex justify-evenly">
              <h1 className="grow h-8 p-1 bg-logo_bg text-letter_color text-left px-5 border-b-2 border-letter_color font-bold text-sm ">
                Razem
              </h1>
              <div className="w-36 h-full text-letter_color text-right px-5 py-1 font-bold border-l-2 border-letter_color">
                80,00 zł
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Naliczenia_lokali;
