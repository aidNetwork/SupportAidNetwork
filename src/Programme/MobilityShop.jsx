import React from "react";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Manual Wheelchair",
    price: "£250.00",
    img: "https://www.1800wheelchair.com/media//images/strueck24-leichtgewicht-rollstuhl-hero-0009.jpg",
    hasBg: false,
  },
  {
    id: 2,
    name: "Electric Wheelchair",
    price: "£999.00",
    img: "https://mobilitypluswheelchairs.co.uk/cdn/shop/products/MobilityPlus_Heavy-DutyElectricWheelchair.jpg?v=1740612326",
    hasBg: false,
  },
  {
    id: 3,
    name: "Mobility Scooter",
    price: "£299.00",
    img: "https://i.ebayimg.com/images/g/j0QAAOSwAg1mTHDa/s-l1600.jpg",
    hasBg: false,
  },

  {
    id: 4,
    name: "Foldable Cane",
    price: "£25.00",
    img: "https://m.media-amazon.com/images/I/61DcO3b5kkL._UF1000,1000_QL80_.jpg",
    hasBg: false,
  },
  {
    id: 5,
    name: "Crutches (Pair)",
    price: "£39.99",
    img: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/13/0468613/1.jpg?9878",
    hasBg: false,
  },
  {
    id: 6,
    name: "Walker Rollator",
    price: "£120.00",
    img: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/71/2076721/1.jpg?6916",
    hasBg: false,
  },
  {
    id: 7,
    name: "Transfer Board",
    price: "£65.00",
    img: "https://m.media-amazon.com/images/I/51H+f7n5niL._AC_SL1500_.jpg",
    hasBg: false,
  },
  {
    id: 8,
    name: "Reclining Wheelchair",
    price: "£280.00",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg19nEA7AAYxuLsl0XjSkfQW9CFd8Jm0VaWA&s",
    hasBg: false,
  },
];

export default function MobilityShop() {
  const navigate = useNavigate(); // ✅ Moved inside component

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Mobility Aids Shop</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-sm hover:shadow-md transition p-4 text-center bg-white"
          >
            <div
              className={`mx-auto mb-4 w-full h-32 flex items-center justify-center overflow-hidden ${
                !product.hasBg ? "bg-blue-100 rounded-lg" : ""
              }`}
            >
              <img
                src={product.img}
                alt={product.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <h2 className="text-sm font-medium text-gray-700 mb-1">{product.name}</h2>
            <p className="text-blue-600 font-bold mb-2">{product.price}</p>
            <button
              onClick={() => navigate('/mobility')}
              className="text-sm px-4 py-1 bg-gray-200 hover:bg-gray-300 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
