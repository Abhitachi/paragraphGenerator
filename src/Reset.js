import React from "react";

const Reset = ({ count }) => {
  return (
    <div className="mx-auto w-6/12 border-3 p-4 relative z-40 border-black  h-[250px] bg-slate-100 mt-6 shadow-xl shadow-slate-300 rounded-md flex flex-col justify-center">
      <h2 className="text-lg font-bold text-center">
        {count < 0
          ? "You have Reached Negative Count Please Reset your Paragraph Count 😊 "
          : "You have Reached the Limit Please Reset your Paragraph Count 😊"}
      </h2>
    </div>
  );
};

export default Reset;
