import React from "react";

const Sidebar = () => {
  return (
    <div className="fixed inset-y-0 right-0 w-16 flex flex-col items-center justify-center mt-[4rem]">
      <img className="w-6 h-6 mb-6 rounded-full" src={require("../assets/gc.png")} alt="Img 1" />
      <img className="w-6 h-6 mb-6 rounded-full" src={require("../assets/gk.jpg")} alt="Img 2" />
      <img className="w-6 h-6 mb-6 rounded-full" src={require("../assets/gt.jpg")} alt="Img 3" />
      <img className="w-6 h-6 mb-6 rounded-full" src={require("../assets/gp.png")} alt="Img 4" />
      <img className="w-6 h-6 mb-6 rounded-full" src={require("../assets/gmap.png")} alt="Img 5" />
      <hr className="text-black text-2xl" />
      <img className="w-10 h-10 mt-[1rem] " src={require("../assets/plus.png")} alt="Img 5" />

    </div>
  );
};

export default Sidebar;
