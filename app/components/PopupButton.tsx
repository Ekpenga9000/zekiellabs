import React from "react";
import Image from "next/image";
import chatBot from "@public/images/chatbot.png";

interface PopupButtonProps {
  func: Function;
  isPopupOpen: boolean;
}
const PopupButton = (props: PopupButtonProps) => {
  const { func, isPopupOpen } = props;
  return (
    <div className="fixed right-3 bottom-4 z-10">
      {!isPopupOpen ? (
        <button
          onClick={() => func()}
          className="bg-primary text-white h-14 w-14 rounded-full shadow-md border border-solid border-white"
        >
          <Image
            src={chatBot}
            alt="chatbot"
            width={56}
            height={56}
            className="rounded-full"
          />
        </button>
      ) : (
        <button
          onClick={() => func()}
          className="bg-primary text-white h-14 w-14 py-4 px-4 rounded-full shadow-md border border-solid border-white"
        >
          <i className="bx bx-x text-lg"></i>
        </button>
      )}
    </div>
  );
};

export default PopupButton;
