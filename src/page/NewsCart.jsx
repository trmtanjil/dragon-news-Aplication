import React from "react";
import { FaRegEye, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { IoBookmarkOutline } from "react-icons/io5";
import { CiShare2 } from "react-icons/ci";

function NewsCard({ news }) {
  const {
    title,
    image_url,
    details,
    author,
    total_view,
    rating,
    others,
    published_date,
  } = news;

  const shortDetails =
    details.length > 200 ? details.slice(0, 200) + "..." : details;

  // ⭐ রেটিং হিসাব
  const fullStars = Math.floor(rating.number);
  const hasHalfStar = rating.number - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="card bg-base-100 shadow-sm rounded-lg mx-4 my-2">
      {/* Top section: Author and Share */}
      <div className="flex justify-between items-center p-4 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt="author"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="text-sm font-semibold">{author.name}</h2>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-ghost btn-xs">
            <IoBookmarkOutline size={20} />
          </button>
          <button className="btn btn-ghost btn-xs">
            <CiShare2 size={20} />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="px-4 py-2">
        <h2 className="font-bold text-lg mb-2">{title}</h2>
        <img
          src={image_url}
          alt="news"
          className="w-full h-[200px] object-cover rounded-md mb-3"
        />
        <p className="text-sm text-gray-700">
          {shortDetails} <span className="text-gray-400">({details.length} chars)</span>
        </p>
        <button className="btn btn-link btn-sm text-orange-500 pl-0">
          Read More
        </button>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-3 border-t">
        <div className="flex items-center text-orange-400 gap-1">
          {[...Array(fullStars)].map((_, i) => (
            <FaStar key={`full-${i}`} />
          ))}
          {hasHalfStar && <FaStarHalfAlt />}
          {[...Array(emptyStars)].map((_, i) => (
            <FaRegStar key={`empty-${i}`} />
          ))}
          <span className="font-semibold text-gray-600 ml-2">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <FaRegEye />
          <span className="text-sm">{total_view}</span>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
