import React from "react";

const Start = () => {
  return (
    <div className="w-full h-full border-2 border-black flex flex-wrap justify-evenly">
      <div className="w-1/4 p-4 flex flex-col justify-evenly text-center text-black bg-white m-4">
        <h1 className="font-bold p-6 text-2xl">Saldo</h1>
        <div className="flex-grow flex flex-col justify-evenly">
          <div>
            <h2 className="font-bold">Bieżące saldo:</h2>
            <p className="p-2">5000zł</p>
          </div>
          <div>
            <h2 className="font-bold">Bieżące zaległości:</h2>
            <p className="p-2">-1000zł</p>
          </div>
        </div>
      </div>

      <div className="w-1/4 p-4 flex flex-col justify-evenly text-center text-black bg-white m-4">
        <h1 className="font-bold p-6 text-2xl">Zgłoszenia</h1>
        <div className="flex-grow flex flex-col justify-evenly">
          <div>
            <h2>Data: 19.04.2024</h2>
            <h2>Tytuł: Nie działa ogrzewanie</h2>
          </div>
        </div>
      </div>
      <div className="w-1/4 p-4 flex flex-col justify-evenly text-center text-black bg-white m-4">
        <h1 className="font-bold p-6 text-2xl">Informacje</h1>
        <div className="flex-grow flex flex-col justify-evenly">
          <div>
            <h2 className="font-bold">Zarząd</h2>
            <p>xxxxx xxxx </p>
            <p>xxxxx xxxx</p>
            <p>xxxx xxxx</p>
          </div>
        </div>
        <div>
          <h2 className="font-bold">Numer bankowy</h2>
          <p>xxxxx xxxx </p>
        </div>
        <div>
          <h2>Kontrahenci</h2>
          <p>xxxxx xxxx </p>
        </div>
      </div>
    </div>
  );
};

export default Start;
