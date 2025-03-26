import { Menu, X } from "lucide-react";
import { navItems } from "../constants";
import { useState } from "react";
const Navbar = () => {
  const navList = navItems;
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="max-w-[1640px] m-auto px-4 border-b-neutral-700/80 border-b w-full  fixed top-0 left-0">
      <div
        className={
          showMenu
            ? "flex justify-between items-center flex-wrap  bg-black/50    "
            : "flex justify-between items-center     bg-black/50   "
        }
      >
        {/* log */}
        <div className="flex justify-center items-center py-3">
          <img className="w-[40px]" src="/src/assets/logo.png" alt="" />
          <h1 className="pl-1.5 text-[20px]">VirtualR</h1>
        </div>
        {/* list */}
        <div>
          <ul className="hidden lg:flex gap-10">
            {navList.map((item ,key) => (
              <li  key={key}>
                <a className=" text-[14px]" href={`${item.href}`}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* sign in and create account */}
        <div className="hidden lg:flex gap-10">
          <a
            href="#"
            className=" block text-[14px] border-white border-1 py-2 px-3 rounded-md"
          >
            Sign In
          </a>
          <a
            href="#"
            className="block bg-linear-to-r from-orange-500 to-orange-800  py-2 px-3 rounded-md text-[14px] text-center *:"
          >
            Create an account
          </a>
        </div>
        {/* mobile menu */}
        {!showMenu ? (
          <button className="lg:hidden " onClick={() => setShowMenu(!showMenu)}>
            <Menu />
          </button>
        ) : (
          <button className="lg:hidden" onClick={() => setShowMenu(!showMenu)}>
            <X />
          </button>
        )}
        {showMenu && (
          <div className=" lg:hidden w-full text-center mt-11 flex flex-col items-center gap-10 pb-5 bg-transparent">
            <ul className="flex gap-10 flex-col">
              {navList.map((item,key) => (
                <li key={key}>
                  <a className=" text-[16px]" href={`${item.href}`}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex  gap-10">
              <a
                href="#"
                className=" block text-[14px] border-white border-1 py-2 px-3 rounded-md"
              >
                Sign In
              </a>
              <a
                href="#"
                className="block bg-linear-to-r from-orange-500 to-orange-800  py-2 px-3 rounded-md text-[14px] text-center *:"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
