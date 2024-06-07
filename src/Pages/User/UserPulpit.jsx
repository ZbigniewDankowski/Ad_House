import React from "react";

const UserPulpit = () => {
  return (
    <div className="w-full h-full flex justify-evenly align-middle">
      <div className="w-1/4 h-5/6  rounded-xl border-2 border-logo_bg">
        <h1 className=" p-4 h-20 bg-logo_bg rounded-t-xl text-center text-letter_color font-bold text-2xl">
          Saldo
        </h1>
        <div className="w-full h-48 flex flex-col justify-evenly align-middle mt-10">
          <p className="mx-auto text-xl font-bold">
            Bieżące saldo:{" "}
            <p className="mx-auto text-xl font-bold inline text-white">
              {" "}
              132,23 zł
            </p>
          </p>
          <p className="mx-auto text-xl font-bold">
            Bieżące zaległości:{" "}
            <p className="mx-auto text-xl font-bold inline text-white">
              {" "}
              222,98 zł
            </p>
          </p>
        </div>
      </div>
      <div className="w-1/4 h-5/6  rounded-xl border-2 border-logo_bg flex flex-col justify-start align-middle">
        <div>
          <h1 className=" p-4 h-20 bg-logo_bg rounded-t-xl text-center text-letter_color font-bold text-2xl">
            Ostatnie zgłoszenie
          </h1>
          <div className="p-3 w-full h-20 text-center">
            <p className="mx-auto text-xl font-bold inline">
              Data:
              <p className="mx-auto text-xl font-bold inline text-white">
                {" "}
                20.05.2024
              </p>
            </p>
            <p className="mx-auto text-xl font-bold ">
              Tytuł:
              <p className="mx-auto text-xl font-bold inline text-white">
                {" "}
                Nie działa wentylator
              </p>
            </p>
          </div>
        </div>
        <div>
          <h1 className="mt-14 p-4 h-20 bg-logo_bg  text-center text-letter_color font-bold text-2xl">
            Bieżące uchwały
          </h1>
          <div className="p-3 w-full h-20 text-center">
            <p className="mx-auto text-xl font-bold inline">
              Data:
              <p className="mx-auto text-xl font-bold inline text-white">
                23.05.2024
              </p>{" "}
            </p>
            <p className="mx-auto text-xl font-bold ">
              Tytuł:
              <p className="mx-auto text-xl font-bold inline text-white">
                {" "}
                Testowa uchwała
              </p>
            </p>
            <p className="mx-auto text-xl font-bold ">
              Procent udziałów:
              <p className="mx-auto text-xl font-bold inline text-white"> 5%</p>
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/4 h-5/6  rounded-xl border-2 border-logo_bg">
        <h1 className=" p-2 h-10 bg-logo_bg rounded-t-xl text-center text-letter_color font-bold text-xl">
          Informacje
        </h1>
        <div className="w-full h-10 text-center mt-3">
          <p className="mx-auto text-md font-bold">Indywidualny numer konta:</p>
          <p className="mx-auto text-md font-bold text-white">
            81109019005081026675347444
          </p>
        </div>
        <h1 className=" p-2 h-10 bg-logo_bg text-center text-letter_color font-bold text-xl mt-3">
          Ważne numery
        </h1>
        <div className="w-full h-10 text-center mt-3">
          <p className="mx-auto text-md font-bold inline">
            Biuro:{" "}
            <p className="mx-auto text-md font-bold text-white inline">
              61 4356 783
            </p>
          </p>
          <br />
          <p className="mx-auto text-md font-bold inline">
            Alarmowy:{" "}
            <p className="mx-auto text-md font-bold text-white inline">112</p>
          </p>
        </div>
        <h1 className=" p-2 h-10 bg-logo_bg text-center text-letter_color font-bold text-xl mt-3">
          W przypadku awarii
        </h1>
        <div className="w-full h-10 text-center mt-3">
          <p className="mx-auto text-md font-bold inline">
            Kominiarz:{" "}
            <p className="mx-auto text-md font-bold text-white inline">
              723-876-901
            </p>
          </p>
          <br />

          <p className="mx-auto text-md font-bold inline">
            Pogotowie kanalizacyjne:{" "}
            <p className="mx-auto text-md font-bold text-white inline">
              603 227 666
            </p>
          </p>
          <br />
          <p className="mx-auto text-md font-bold inline">
            Elektryk:{" "}
            <p className="mx-auto text-md font-bold text-white inline">
              502 536 444
            </p>
          </p>
          <br />

          <p className="mx-auto text-md font-bold inline">
            Hydraulik kanalizacyjne:{" "}
            <p className="mx-auto text-md font-bold text-white inline">
              602 556 668
            </p>
          </p>
          <br />
          {/* <p className="mx-auto text-md font-bold">Konserwator: 512 489 205</p> */}
          <p className="mx-auto text-md font-bold inline">
            Konserwator:{" "}
            <p className="mx-auto text-md font-bold text-white inline">
              512 489 205
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserPulpit;
