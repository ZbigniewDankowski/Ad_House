import React from "react";

const UserPulpit = () => {
  return (
    <div className="w-full h-full flex justify-evenly align-middle">
      <div className="w-1/4 h-5/6  rounded-xl border-2 border-logo_bg">
        <h1 className=" p-4 h-20 bg-logo_bg rounded-t-xl text-center text-letter_color font-bold text-2xl">
          Saldo
        </h1>
        <div className="w-full h-48 flex flex-col justify-evenly align-middle mt-10">
          <p className="mx-auto text-xl font-bold">Bieżące saldo: </p>
          <p className="mx-auto text-xl font-bold">Bieżące zaległości: </p>
        </div>
      </div>
      <div className="w-1/4 h-5/6  rounded-xl border-2 border-logo_bg flex flex-col justify-start align-middle">
        <div>
          <h1 className=" p-4 h-20 bg-logo_bg rounded-t-xl text-center text-letter_color font-bold text-2xl">
            Ostatnie zgłoszenie
          </h1>
          <div className="p-3 w-full h-20 text-center">
            <p className="mx-auto text-xl font-bold">Data:</p>
            <p className="mx-auto text-xl font-bold">Treść:</p>
          </div>
        </div>
        <div>
          <h1 className="mt-14 p-4 h-20 bg-logo_bg  text-center text-letter_color font-bold text-2xl">
            Bieżące uchwały
          </h1>
          <div className="p-3 w-full h-20 text-center">
            <p className="mx-auto text-xl font-bold">Data:</p>
            <p className="mx-auto text-xl font-bold">Tytuł:</p>
            <p className="mx-auto text-xl font-bold">Procent udziałów:</p>
          </div>
        </div>
      </div>
      <div className="w-1/4 h-5/6  rounded-xl border-2 border-logo_bg">
        <h1 className=" p-2 h-10 bg-logo_bg rounded-t-xl text-center text-letter_color font-bold text-xl">
          Informacje
        </h1>
        <div className="w-full h-10 text-center mt-3">
          <p className="mx-auto text-md font-bold">Indywidualny numer konta:</p>
          <p className="mx-auto text-md font-bold">xxxx</p>
        </div>
        <h1 className=" p-2 h-10 bg-logo_bg text-center text-letter_color font-bold text-xl mt-3">
          Ważne numery
        </h1>
        <div className="w-full h-10 text-center mt-3">
          <p className="mx-auto text-md font-bold">Biuro: 61 641 00 88</p>
          <p className="mx-auto text-md font-bold">Alarmowy: 513 478 206</p>
        </div>
        <h1 className=" p-2 h-10 bg-logo_bg text-center text-letter_color font-bold text-xl mt-3">
          W przypadku awarii
        </h1>
        <div className="w-full h-10 text-center mt-3">
          <p className="mx-auto text-md font-bold">Kominiarz: 725 052 585</p>
          <p className="mx-auto text-md font-bold">
            Pogotowie kanalizacyjne: 603 227 666
          </p>
          <p className="mx-auto text-md font-bold">Elektryk: 502 536 444</p>
          <p className="mx-auto text-md font-bold">
            Hydraulik kanalizacyjne: 602 556 668
          </p>
          <p className="mx-auto text-md font-bold">Konserwator: 512 489 205</p>
        </div>
      </div>
    </div>
  );
};

export default UserPulpit;
