import Link from "next/link";
import React from "react";
import { getUrltTitle } from "../helpers/index";

const ItemCourse = ({ item }) => {
  const { title, id, img, isFree } = item;

  return (
    <Link className="block" href={`/formcion/${getUrltTitle(title)}`}>
      <article
        key={id}
        className="break-inside mb-9 relative isolate border-2 border-stone-950 bg-white rounded-md hover:shadow-dark transition-all"
      >
        <img
          src={img}
          alt=""
          className=" w-full object-cover rounded-md object-center"
        />

        <div className="flex items-center justify-between my-4 mr-3">
          <h4 className=" ml-3">
            <a
              className="text-gray-900 text-lg leading-5 hover:text-gray-800 font-montserrat font-bold no-underline"
              href={`/templates/${getUrltTitle(title)}-${id}`}
            >
              {title}
            </a>
          </h4>
        </div>
      </article>
    </Link>
  );
};

export default ItemCourse;
