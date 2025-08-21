
import { useState } from "react";
import close from "../assets/images/icon-close.svg";
import Shoppingcart from "../assets/images/icon-cart.svg";
import logo from "../assets/images/logo.svg";
import avatar from "../assets/images/image-avatar.png";
import "../index.css";
import Menu from "../assets/images/icon-menu.svg";
import icondelete from "../assets/images/icon-delete.svg";
import Thumbnail from "../assets/images/image-product-1-thumbnail.jpg";

interface NavbarProps {
  cartCount: number;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
}


const Navbar = ({cartCount, setCartCount}: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-white z-30 px-6 py-4 md:px-24 relative">
      {/* Left side: Hamburger + Logo */}
      <div className="flex items-center gap-4">
        {/* Hamburger (Mobile only) */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
          <img src={Menu} className="w-6 h-6" alt="menu" />
        </button>

        {/* Logo */}
        <img src={logo} alt="sneakers" className="w-28 md:w-32" />
      </div>

      {/* Center: Desktop Links */}
      <ul className="hidden md:flex gap-8 text-gray-600 flex-1 ml-8 pl-8 font-medium">
        <li className="hover:text-black cursor-pointer ">Collections 
             <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="hover:text-black cursor-pointer">Men</li>
        <li className="hover:text-black cursor-pointer">Women</li>
        <li className="hover:text-black cursor-pointer">About</li>
        <li className="hover:text-black cursor-pointer">Contact</li>
      </ul>

      {/* Right Section: Cart + Avatar */}
      <div className="flex items-center gap-6 relative">
        {/* Cart Icon */}
        <button
          className="relative hover:opacity-75 transition-opacity duration-200 hover:cursor-pointer"
          onClick={() => setIsCartOpen(!isCartOpen)} // toggle dropdown
        >
          <img src={Shoppingcart} className="w-6 h-6" alt="cart" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-2 bg-orange-500 text-white text-xs px-1 rounded-full">
              {cartCount}
            </span>
          )}
        </button>

        {/* Avatar */}
        <img
          src={avatar}
          alt="avatar"
          className="w-10 h-10 rounded-full cursor-pointer border-2 border-transparent hover:border-orange-500"
        />

        {/* Cart Dropdown */}
        {isCartOpen && (
          <div className="absolute right-0 top-14 w-80 pl-12 bg-white rounded-lg shadow-xl p-6 z-50">
            <h3 className="font-bold mb-4">Cart</h3>
            <hr />

            {cartCount ===0 ? (
              <div className="flex ml-10 items-center justify-center h-40 text-gray-500 font-semibold">
                Your cart is empty
              </div>
            ) : (
              <div className="mt-4 space-y-4 ">
                <div className="flex items-center gap-4">
                  <img
                    src={Thumbnail}
                    alt="Product"
                    className="w-12 h-12 rounded-md"
                  />
                  <div className="flex-1 text-sm">
                    <p className="text-gray-600">
                      Fall Limited Edition Sneakers
                    </p>
                    <p>
                      $125.00 x {cartCount}{" "}
                      <span className="font-bold">
                        ${125 * cartCount}.00
                      </span>
                    </p>
                  </div>
                  <button onClick={() => setCartCount(0)}>
                    <img
                      src={icondelete}
                      alt="delete"
                      className="w-5 h-5 hover:cursor-pointer"
                    />
                  </button>
                </div>

                <button className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-3 rounded-lg hover:cursor-pointer" onClick={() => setIsCartOpen(false)}>
                  Checkout
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-20 md:hidden">
          {/* Dark blurred background */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* Sidebar Menu */}
          <div className="relative w-2/3 h-full bg-white shadow-md p-6">
            {/* Close Button */}
            <button
              className="absolute top-4 left-4"
              onClick={() => setIsMenuOpen(false)}
            >
              <img src={close} className="w-6 h-6" alt="close" />
            </button>

            <ul className="flex flex-col gap-4 text-lg my-8 font-bold text-black cursor-pointer">
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
;
