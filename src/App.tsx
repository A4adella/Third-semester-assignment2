/* eslint-disable @typescript-eslint/no-unsafe-call */
import Navbar from "./components/navbar";
import ProductGallery from "./components/productgallery";
import ProductDetails from "./components/productdetails";
import { useState } from "react";

function App() {
  const [cartCount, setCartCount] = useState(0);
  
  return (
    <div className="min-h-screen">
      <Navbar cartCount={cartCount} setCartCount={setCartCount} />
      {/* Later: Product Gallery + Cart + Lightbox */}
   <main className="pl-6 md:pl-16 lg:pl-32 py-8 w-full">
  <div className="flex flex-col  w-full md:flex-row md:items-center md:gap-30">
    {/* Left: Gallery */}
    <div className="md:w-2.5/5">
      {/* ProductGallery */}
      <ProductGallery />
    </div>

    {/* Right: Product Details */}
    <div className="md:w-2.5/5 mt-8 md:mt-0">
      {/* ProductDetails */}
      <ProductDetails setCartCount={setCartCount} />
    </div>
  </div>
</main>
    </div>
  );
}

export default App;
