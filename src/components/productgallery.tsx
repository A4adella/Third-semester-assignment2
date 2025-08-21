import { useState } from "react";
import prev from "../assets/images/icon-previous.svg";
import next from "../assets/images/icon-next.svg";
import close from "../assets/images/icon-close.svg";

// Product images
import product1 from "../assets/images/image-product-1.jpg";
import product2 from "../assets/images/image-product-2.jpg";
import product3 from "../assets/images/image-product-3.jpg";
import product4 from "../assets/images/image-product-4.jpg";

import thumb1 from "../assets/images/image-product-1-thumbnail.jpg";
import thumb2 from "../assets/images/image-product-2-thumbnail.jpg";
import thumb3 from "../assets/images/image-product-3-thumbnail.jpg";
import thumb4 from "../assets/images/image-product-4-thumbnail.jpg";

const images = [product1, product2, product3, product4];
const thumbnails = [thumb1, thumb2, thumb3, thumb4];


const ProductGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const prevImage = () =>
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const nextImage = () =>
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="flex flex-col items-center w-full md:w-full">
      {/* Main Image */}
      <div className="relative w-full md:rounded-2xl overflow-hidden">
       <div className="relative w-full flex justify-center my-6">
  <img
    src={images[activeIndex]}
    alt="Product"
    onClick={() => setIsLightboxOpen(true)}
    className="w-full md:w-[400px] cursor-pointer md:rounded-2xl"
  />
</div>
        {/* Mobile Arrows */}
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white rounded-full p-3 md:hidden"
        >
          <img src={prev} alt="Previous"  className="w-3 h-3 hover:[filter:brightness(0)_saturate(100%)_invert(55%)_sepia(100%)_saturate(450%)_hue-rotate(-5deg)_brightness(99%)_contrast(101%)] cursor-pointer"
   />
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white rounded-full p-3 md:hidden"
        >
          <img src={next} alt="Next"  className="w-3 h-3 hover:[filter:brightness(0)_saturate(100%)_invert(55%)_sepia(100%)_saturate(450%)_hue-rotate(-5deg)_brightness(99%)_contrast(101%)] cursor-pointer"
  />
        </button>
      </div>

      {/* Thumbnails (Desktop only) */}
      <div className="hidden md:flex justify-between gap-4 mt-6">
        {thumbnails.map((thumb, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`rounded-xl overflow-hidden border-2 ${
              activeIndex === i ? "border-orange-500" : "border-transparent"
            }`}
          >
            <img
              src={thumb}
              alt={`Thumbnail ${i + 1}`}
              className={`w-20 rounded-xl hover:opacity-70 cursor-pointer ${
                activeIndex === i ? "opacity-60" : ""
              }`}
            />
          </button>
        ))}
      </div>

      {/* Lightbox (Desktop only) */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-40 hidden md:flex">
          <div className="relative max-w-lg">
             {/* Close Button */}
      <button
 className="absolute -top-10 right-0 hover:[filter:brightness(0)_saturate(100%)_invert(55%)_sepia(100%)_saturate(450%)_hue-rotate(-5deg)_brightness(99%)_contrast(101%)] hover:cursor-pointer"
        onClick={() => setIsLightboxOpen(false)}
      >
        <img src={close} alt="close" className="w-6 h-6 " />
      </button>
            {/* Large Image */}
            <div className="relative">
              <img
                src={images[activeIndex]}
                alt="Lightbox Product"
                className="rounded-2xl max-w-[400px] mx-auto"
              />

              {/* Prev/Next */}
              <button
  onClick={prevImage}
  className="absolute top-1/2 -left-6 -translate-y-1/2 bg-white rounded-full p-3"
>
  <img
    src={prev}
    alt="Previous"
    className="w-3 h-3 hover:[filter:brightness(0)_saturate(100%)_invert(55%)_sepia(100%)_saturate(450%)_hue-rotate(-5deg)_brightness(99%)_contrast(101%)] cursor-pointer"
  />
</button>

<button
  onClick={nextImage}
  className="absolute top-1/2 -right-6 -translate-y-1/2 bg-white rounded-full p-3"
>
  <img
    src={next}
    alt="Next"
    className="w-3 h-3 hover:[filter:brightness(0)_saturate(100%)_invert(55%)_sepia(100%)_saturate(450%)_hue-rotate(-5deg)_brightness(99%)_contrast(101%)] cursor-pointer"
  />
</button>

            </div>

            {/* Thumbnails in Lightbox */}
            <div className="flex justify-between gap-4 mt-6">
              {thumbnails.map((thumb, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`rounded-xl overflow-hidden border-2 ${
                    activeIndex === i ? "border-orange-500" : "border-transparent"
                  }`}
                >
                  <img
                    src={thumb}
                    alt={`Thumbnail ${i + 1}`}
                    className={`w-20 rounded-xl hover:opacity-70 ${
                      activeIndex === i ? "opacity-60" : ""
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductGallery;