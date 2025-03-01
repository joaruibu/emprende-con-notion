import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

export default function Desplegable({ title, children, type }) {
  return (
    <>
      <Disclosure as="div" className="pt-6 pb-4 border-b">
        <dt>
          <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
            <span
              className={`text-xl font-semibold font-alternate ${type === "secondary" && "ml-6 text-[16px] text-gray-500"}`}
            >
              {title}
            </span>
            <span className="ml-6 flex h-7 items-center">
              <PlusSmallIcon
                aria-hidden="true"
                className="size-6 group-data-[open]:hidden"
              />
              <MinusSmallIcon
                aria-hidden="true"
                className="size-6 group-[&:not([data-open])]:hidden"
              />
            </span>
          </DisclosureButton>
        </dt>
        <DisclosurePanel
          as="dd"
          className={`mt-2 pr-12 ${type === "secondary" && "ml-6 "}`}
        >
          {children}
        </DisclosurePanel>
      </Disclosure>
    </>
  );
}
