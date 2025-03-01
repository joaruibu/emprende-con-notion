import Link from "next/link";
import React from "react";
import { getUrltTitle } from "../helpers/index";

const ItemTemplate = ({ item }) => {
  const { title, id, imgs, isFree } = item;

  return (
    <Link className="block" href={`/plantillas/${getUrltTitle(title)}-${id}`}>
      <article
        key={id}
        className="break-inside mb-9 relative isolate border-2 border-stone-950 bg-white rounded-md hover:shadow-dark transition-all"
      >
        <img
          src={imgs[0]}
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

        {/* <div className="flex items-center gap-x-4 mt-2">
                    {
                        tags.map((tag, index) => {
                            return <h
                                key={index}
                                href={''}
                                className="px-3 py-1.5 text-terracotta font-sub  text-xs"
                            >
                                {tag}
                            </h>
                        })
                    }
                </div> */}

        {isFree && (
          <div className="h-11 w-11 bg-yellow-300 text-black absolute top-2 rounded-full left-2 grid place-content-center">
            <h5 className="text-xs -rotate-6">Gratis</h5>
          </div>
        )}
      </article>
    </Link>
  );
};

export default ItemTemplate;
