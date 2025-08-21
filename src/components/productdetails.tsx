

import { useState } from "react";
import { ShoppingCartIcon } from "lucide-react";

interface ProductDetailsProps {
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
}

const ProductDetails = ({ setCartCount }: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState(0);

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const addToCart = () => {
    setCartCount((prev) => prev + quantity);
    setQuantity(0); // reset after adding
  };

  return (
    <div className="max-w-lg">
      <h2 className="text-sm font-bold text-black-500 uppercase tracking-widest">
        Sneaker Company
      </h2>
      <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
        Fall Limited Edition Sneakers
      </h1>
      <p className="text-gray-600 mb-6">
        These low-profile sneakers are your perfect casual wear companion. 
        Featuring a durable rubber outer sole, they’ll withstand everything 
        the weather can offer.
      </p>

      {/* Price */}
      <div className="flex items-center justify-between md:flex-col md:items-start md:gap-2">
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold">$125.00</span>
          <span className="bg-orange-100 text-orange-500 font-bold px-2 py-0.5 rounded">
            50%
          </span>
        </div>
        <span className="line-through text-gray-400">$250.00</span>
      </div>

      {/* Quantity + Add to Cart */}
      <div className="mt-6 flex flex-col md:flex-row gap-4">
        {/* Quantity Selector */}
        <div className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-2 md:w-40">
          <button
            onClick={decrease}
            className="text-orange-500 font-bold text-xl hover:opacity-70 hover:cursor-pointer"
          >
            -
          </button>
          <span className="font-semibold">{quantity}</span>
          <button
            onClick={increase}
            className="text-orange-500 font-bold text-xl hover:opacity-70  hover:cursor-pointer"
          >
            +
          </button>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={addToCart}
          className="flex items-center justify-center gap-2 bg-orange-500 hover:cursor-pointer hover:bg-orange-600 text-black font-bold py-3 px-6 rounded-lg shadow-md w-full md:w-auto"
        >
          <ShoppingCartIcon  className="w-5 h-5" />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
 