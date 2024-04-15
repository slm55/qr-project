import React from "react";

function Home() {
  return (
    <div className="flex flex-col space-y-2">
      <video
        loop
        muted
        autoPlay
        src="https://qazaqrepublic.com/uploads/mainpage/s24-web-2x1-25cbr-11744e72d0.mp4"
      />
      <div className="flex w-full space-x-1">
        <div  className="w-1/2 relative">
          <img
            className="w-full"
            src="https://qazaqrepublic.com/uploads/thumbs/dscf1879-4f7de34f67-9fe339502994ef96f07e1be86b5ee03d.jpeg"
            alt=""
          />
          <p className="text-white absolute bottom-7 left-7 text-2xl font-semibold ">T-SHIRT</p>
        </div>
        <div  className="w-1/2 relative">
          <img
            className="w-full"
            src="https://qazaqrepublic.com/uploads/thumbs/dscf3336-c296c466a3-9fe339502994ef96f07e1be86b5ee03d.jpeg"
            alt=""
          />
           <p className="text-white absolute bottom-7 left-7 text-2xl font-semibold ">OUTWEAR</p>
        </div>
      </div>
      <div className="flex w-full">
        <video
          className="w-1/2"
          loop
          autoPlay
          muted
          src="https://qazaqrepublic.com/uploads/mainpage/1000-1250-4c12ea93d0.mp4"
        />
        <img
          className="w-1/2"
          src="https://qazaqrepublic.com/uploads/thumbs/dscf6128-1-abbc056ca1-7af2fac8657c7c721001284b2012af94.jpeg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Home;
