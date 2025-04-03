import React from "react";

const Card = ({ book }) => {
  const { bookName, author, image, rating, category, tags } = book;
  return (
    <div className="px-4 py-4 border-1 border-[#eaeaea] rounded-md">
      {/* Card Image */}
      <div className="bg-[#f3f3f3] py-6">
        <img
          className="w-[200px] h-[250px] object-contain mx-auto"
          src={image}
          alt=""
        />
      </div>
      {/* Card Content */}
      <div className="mt-6">
        <div className="space-x-3">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-[#f5fcf4] text-[#23be0a] rounded-full "
            >
              {tag}
            </span>
          ))}
        </div>
        <div>
          <h1 className="text-2xl mt-4 font-semibold">{bookName}</h1>
          <p className="mt-2">By : {author}</p>
          {/* Horizontal Dotted Line */}
          <div className="border-t-2 border-dotted border-gray-300 mt-4"></div>
          <div className="flex justify-between items-center mt-3">
            <h1>{category}</h1>
            <div>
              <div class="flex items-center">
                <svg
                  class="w-4 h-4 text-yellow-300 me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                  {rating}
                </p>
                <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                  out of
                </p>
                <p class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                  5
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
