import {
  faCartPlus,
  faCircleUser,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Nav = () => {

  return (
    <div className="w-full sticky top-0 left-0 bg-secondary grid gap-2 md:grid-cols-3 gap-y-4 md:gap-y-0 grid-cols-1 p-2 z-50 text-on-secondary bg-yellow-500">
      <a
        href="/"
        className="flex flex-row gap-2 items-center justify-start w-[200px]"
      >
        <h1 className="font-bold ">Thế giới di động</h1>
      </a>
      <ul className="flex h-full whitespace-nowrap justify-between px-2 items-center text-sm font-semibold md:row-auto row-start-3">
      </ul> 
      <ul className="flex flex-row gap-4 text-2xl justify-end">
        <input
          type="text"
          className="w-full md:w-[100px] lg:w-[300px] rounded-xl bg-primary-variant text-base px-2 text-on-primary placeholder:text-on-primary"
          placeholder="Search product"
        />
        <button>
          <a href="/">
            <FontAwesomeIcon icon={faSearch} />
          </a>
        </button>
      </ul>
    </div>
  );
};

export default Nav;
