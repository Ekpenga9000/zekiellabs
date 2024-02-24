import React from "react";

const PopupButton = () => {
  return (
    <div className="fixed right-3 bottom-4">
      <button className="bg-primary text-white h-14 w-14 py-4 px-4 rounded-full shadow-md border border-solid border-white">
      <i className='bx bx-conversation'></i>
          </button>
          <button className="bg-primary text-white h-14 w-14 py-4 px-4 rounded-full shadow-md border border-solid border-white">
          <i className='bx bx-x text-lg'></i>
      </button>
    </div>
  );
};

export default PopupButton;
