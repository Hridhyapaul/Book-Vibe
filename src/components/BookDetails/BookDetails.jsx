import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {
  addToStoredReadList,
  addToStoredWishList,
} from "../../assets/utility/addToDB";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();

  const book = data.find((book) => book.bookId === id);

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  const handleMarkAsRead = (id) => {
    addToStoredReadList(id);
  };

  const handleMarkAsWish = (id) => {
    addToStoredWishList(id);
  };

  return (
    <div className="w-full mx-auto rounded-lg flex justify-between items-stretch gap-6">
      {/* Product Image */}
      <div className="w-1/2 bg-[#f5fcf4] rounded-md px-[20px] py-[20px] flex justify-center items-center">
        <img
          className="w-[300px] h-[400px] object-contain"
          src={image}
          alt=""
        />
      </div>
      {/* Product Details */}
      <div className="w-1/2">
        <h1 className="text-2xl font-semibold">{bookName}</h1>
        <p className="mt-[10px]">By: {author}</p>
        <hr className="mt-3 border-t-1 border-gray-300" />
        <p className="mt-2">{category}</p>
        <hr className="mt-2 border-t-1 border-gray-300" />
        <p className="mt-3">
          <span className="font-semibold">Review:</span>{" "}
          <span className="text-[#5a5a5a]">{review}</span>
        </p>
        <div className="space-x-3 my-5">
          <span className="font-semibold">Tag</span>
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-4 py-1 bg-[#f5fcf4] text-[#23be0a] rounded-full "
            >
              #{tag}
            </span>
          ))}
        </div>
        <hr className="mt-3 border-t-1 border-gray-300" />
        <div className="mt-4">
          <table className="text-left">
            <tbody>
              <tr>
                <th scope="row" className="font-normal text-[#5a5a5a] py-1">
                  Number of Pages:
                </th>
                <td class="px-6 font-semibold">{totalPages}</td>
              </tr>
              <tr>
                <th scope="row" className="font-normal text-[#5a5a5a] py-1">
                  Publisher:
                </th>
                <td class="px-6 font-semibold">{publisher}</td>
              </tr>
              <tr>
                <th scope="row" className="font-normal text-[#5a5a5a] py-1">
                  Year of Publishing:
                </th>
                <td class="px-6 font-semibold">{yearOfPublishing}</td>
              </tr>
              <tr>
                <th scope="row" className="font-normal text-[#5a5a5a] py-1">
                  Rating:
                </th>
                <td class="px-6 font-semibold">{rating}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-5">
          <button
            onClick={() => handleMarkAsRead(bookId)}
            class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group border-1 border-[#5a5a5a] hover:bg-[#51b1c9] hover:border-[#51b1c9] hover:text-white"
          >
            <span class="relative px-5 py-2.5 transition-all ease-in-out duration-75 bg-white rounded-md group-hover:bg-transparent">
              Read
            </span>
          </button>
          <button
            onClick={() => handleMarkAsWish(bookId)}
            class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group border-1 border-[#5a5a5a] hover:bg-[#51b1c9] hover:border-[#51b1c9] hover:text-white"
          >
            <span class="relative px-5 py-2.5 transition-all ease-in-out duration-75 bg-white rounded-md group-hover:bg-transparent">
              Wishlist
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
