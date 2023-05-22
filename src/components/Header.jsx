import React from "react";
import Logo from "../assets/logo.jpg";
import Share from "../assets/share.png";
import Mrugank from "../assets/Mrugankimage.jpg";

import { BiVideo } from "react-icons/bi";
import { MdOutlineMessage } from "react-icons/md";
import { AiFillCaretDown } from "react-icons/ai";


import TextEditor from "./TextEditor";

const Header = () => {
  return (
    <div>
      <header className="flex justify-between items-center p-3 pb-1">
        <img
          src={Logo}
          height={80}
          width={80}
          className="cursor-pointer "
          alt="logo"
        />
        <div className="flex-grow px-2 mt-0 p-[0.5rem]">
          <h2 className="font-[200px] text-xl mt-0">Untitled document</h2>
          <div className="font-sans flex items-center space-x-3 text-sm h-8 -ml-1">
            <p className="option cursor-pointer hover:bg-gray-100 transition duration-200 ease-out rounded-lg p-2">
              File
            </p>
            <p className="option cursor-pointer hover:bg-gray-100 transition duration-200 ease-out rounded-lg p-2">
              Edit
            </p>
            <p className="option cursor-pointer hover:bg-gray-100 transition duration-200 ease-out rounded-lg p-2">
              View
            </p>
            <p className="option cursor-pointer hover:bg-gray-100 transition duration-200 ease-out rounded-lg p-2">
              Insert
            </p>
            <p className="option cursor-pointer hover:bg-gray-100 transition duration-200 ease-out rounded-lg p-2">
              Format
            </p>
            <p className="option cursor-pointer hover:bg-gray-100 transition duration-200 ease-out rounded-lg p-2">
              Tools
            </p>
            <p className="option cursor-pointer hover:bg-gray-100 transition duration-200 ease-out rounded-lg p-2">
              Extensions
            </p>
            <p className="option cursor-pointer hover:bg-gray-100 transition duration-200 ease-out rounded-lg p-2">
              Help
            </p>
          </div>
        </div>
        <div className="flex gap-[1rem] mr-[3rem]">
          <MdOutlineMessage className="h-[2rem] w-[2rem] cursor-pointer mt-1 hidden md:inline-flex" />

          <BiVideo className="h-[2rem] w-[2rem] cursor-pointer hidden md:inline-flex" />
          <AiFillCaretDown className="mt-2 mr-8 hidden md:inline-flex cursor-pointer" />
          <a href="/">
            <img src={Share} className="hidden md:inline-flex h-10 hover:bg-slate-600" alt="" />
          </a>

          <img
            src={Mrugank}
            height={100}
            width={100}
            className="cursor-pointer rounded-full h-10 w-10 ml-2 overflow-hidden"
            alt=""
          />
        </div>
      </header>
      

      <TextEditor/>
    </div>
  );
};

export default Header;
