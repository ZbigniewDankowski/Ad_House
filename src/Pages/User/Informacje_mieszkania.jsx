import React from "react";

const Informacje_mieszkania = () => {
  const row_class = "w-full h-full border-r-2 border-b-2 border-logo_bg";
  const h1_class =
    "w-full h-8 p-1 bg-logo_bg text-letter_color text-center border-b-2 border-letter_color font-bold text-sm ";
  return (
    <div className="w-3/4 h-full mx-auto">
      <div className="min-h-full min-w-full w-1/4 bg-white mx-auto flex flex-wrap mb-2">
        <h1 className="w-full h-10 font-bold text-xl text-logo_bg text-center py-2">
          4A/12
        </h1>

        <div className="w-1/4 h-1/2 p-2">
          <div className="flex flex-wrap w-full h-full">
            <h1 className={h1_class}>Adres mieszkania</h1>
            <div className="w-full h-8 flex flex-wrap">
              <div className="w-3/5 h-full border-2 border-t-0 border-logo_bg px-2">
                Ulica:
              </div>
              <div className="w-2/5 h-full flex justify-end align-middle text-center">
                <p className={row_class}>Niepodległości</p>
              </div>
              <div className="w-3/5 h-full border-2 border-t-0 border-logo_bg px-2">
                Nr. budynku:
              </div>
              <div className="w-2/5 h-full flex justify-end align-middle text-center">
                <p className={row_class}>4A</p>
              </div>
              <div className="w-3/5 h-full border-2 border-t-0 border-logo_bg px-2">
                Nr. mieszkania:
              </div>
              <div className="w-2/5 h-full flex justify-end align-middle text-center">
                <p className={row_class}>12</p>
              </div>
              <div className="w-3/5 h-full border-2 border-t-0 border-logo_bg px-2">
                Kod-pocztowy:
              </div>
              <div className="w-2/5 h-full flex justify-end align-middle text-center">
                <p className={row_class}>65-300</p>
              </div>
              <div className="w-3/5 h-full border-2 border-t-0 border-logo_bg px-2">
                Miejscowość:
              </div>
              <div className="w-2/5 h-full flex justify-end align-middle text-center">
                <p className={row_class}>Zadupie Śląskie</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-1/2 p-2">
          <div className="flex flex-wrap w-full">
            <h1 className={h1_class}>Dane techniczne</h1>
            <div className="w-full h-8 flex flex-wrap">
              <div className="w-3/5 h-full border-2 border-t-0 border-logo_bg px-2">
                Powierzchnia mieszkania:
              </div>
              <div className="w-2/5 h-full flex justify-end align-middle text-center">
                <p className={row_class}>150m2</p>
              </div>
              <div className="w-3/5 h-full border-2 border-t-0 border-logo_bg px-2">
                Powierzchnia hali garażowej:
              </div>
              <div className="w-2/5 h-full flex justify-end align-middle text-center">
                <p className={row_class}>30m2</p>
              </div>
              <div className="w-3/5 h-full border-2 border-t-0 border-logo_bg px-2">
                Ilość miejsc w hali garażowej:
              </div>
              <div className="w-2/5 h-full flex justify-end align-middle text-center">
                <p className={row_class}>2</p>
              </div>
              <div className="w-3/5 h-full border-2 border-t-0 border-logo_bg px-2">
                Taras:
              </div>
              <div className="w-2/5 h-full flex justify-end align-middle text-center">
                <p className={row_class}>TAK</p>
              </div>
              <h1 className={h1_class}>Dane techniczne</h1>
              <div className="w-3/5 h-full border-2 border-t-0 border-logo_bg px-2">
                Ilość osób w lokalu:
              </div>
              <div className="w-2/5 h-full flex justify-end align-middle text-center">
                <p className={row_class}>7</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/4 h-1/2 p-2 mb-32">
          <div className="flex flex-wrap w-full">
            <h1 className={h1_class}>Media</h1>
            <div className="w-full h-8 flex flex-wrap">
              <div className="w-3/5 h-full border-2 border-t-0 border-logo_bg px-2">
                Nr. licznika prądu:
              </div>
              <div className="w-2/5 h-full flex justify-end align-middle text-center">
                <p className={row_class}>GHM5666</p>
              </div>
              <div className="w-3/5 h-full border-2 border-t-0 border-logo_bg px-2">
                Ważność licznika:
              </div>
              <div className="w-2/5 h-full flex justify-end align-middle text-center">
                <p className={row_class}>15-06-2030</p>
              </div>
              <div className="w-3/5 h-full border-2 border-t-0 border-logo_bg px-2">
                Nr. licznika wody:
              </div>
              <div className="w-2/5 h-full flex justify-end align-middle text-center">
                <p className={row_class}>FFF22256</p>
              </div>
              <div className="w-3/5 h-full border-2 border-t-0 border-logo_bg px-2">
                Ważność licznika:
              </div>
              <div className="w-2/5 h-full flex justify-end align-middle text-center">
                <p className={row_class}>25-02-2033</p>
              </div>
              <div className="w-3/5 h-full border-2 border-t-0 border-logo_bg px-2">
                Nr. licznika ogrzewania:
              </div>
              <div className="w-2/5 h-full flex justify-end align-middle text-center">
                <p className={row_class}>HG-655</p>
              </div>
              <div className="w-3/5 h-full border-2 border-t-0 border-logo_bg px-2">
                Ważność licznika:
              </div>
              <div className="w-2/5 h-full flex justify-end align-middle text-center">
                <p className={row_class}>25-02-2033</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-1/2 p-2 mx-auto">
          <div className="flex flex-wrap w-full">
            <h1 className={h1_class}>Załączniki</h1>
            <div className="w-1/2 h-8 flex flex-wrap">
              <div className="w-full h-full border-2 border-t-0 border-logo_bg px-2">
                Data:
              </div>
            </div>
            <div className="w-1/2 h-8 flex flex-wrap">
              <div className="w-full h-full border-2 border-l-0 border-t-0 border-logo_bg px-2">
                Załacznik:
              </div>
            </div>
            <div className="w-1/2 h-8 flex flex-wrap">
              <div className="w-full h-full border-2  border-t-0 border-logo_bg px-2">
                22.05.2024
              </div>
            </div>
            <div className="w-1/2 h-8 flex flex-wrap">
              <div className="w-full h-full border-2  border-t-0 border-logo_bg px-2 text-blue-500 underline">
                <a
                  href="https://www.netboar.com/INZ/Dokument_w_0004.pdf"
                  target="_blank"
                >
                  {" "}
                  Rzut mieszkania{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Informacje_mieszkania;
