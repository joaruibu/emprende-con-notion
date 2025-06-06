import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [
  { name: "plantillas", href: "/plantillas" },
  { name: "cursos", href: "/formacion" },
  { name: "sobre mí", href: "/sobre-mi" },
  { name: "blog", href: "/blog" },
  { name: "consultoria", href: "/consultoria-de-notion", target: "_blank" },
  // { name: 'notion covers', href: '/notion-covers', },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useRouter();

  return (
    <header>
      <nav
        className=" mx-auto  border-b-2 border-black flex max-w-4xl items-center justify-between h-16 pt-6 "
        aria-label="Global"
      >
        <div className=" flex items-center w-full justify-between ">
          <Link href="/" legacyBehavior prefetch={false}>
            <a className=" flex items-center gap-x-2 text-black ">
              <span className="sr-only">Emprende con Notion</span>
              <span className="hidden sm:block font-alternate text-xs sm:text-base">
                Emprende con Notion
              </span>
              <img
                className="  h-16 w-auto"
                src="/img/logo.png"
                alt="Logo de Emprende con Notion"
              />
            </a>
          </Link>
          <div className="hidden sm:flex sm:gap-x-4">
            {navigation.map((item) => (
              <Link
                href={item.href}
                key={item.name}
                legacyBehavior
                prefetch={false}
              >
                <a
                  key={item.name}
                  target={item.target}
                  className={`text-xs font-alternate block h-full text-black  hover:text-terracotta ${
                    item.href === pathname ? "text-terracotta" : ""
                  }`}
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex sm:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="sm:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-4 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex border-b-2 border-black  items-center justify-between">
            <Link href="/" legacyBehavior prefetch={false}>
              <a>
                <span className="sr-only">Emprende con Notion</span>
                <img
                  className="h-16 w-auto"
                  src="/img/logo.png"
                  alt="Logo de Emprende con Notion"
                />
              </a>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    href={item.href}
                    key={item.name}
                    legacyBehavior
                    prefetch={false}
                  >
                    <a
                      key={item.name}
                      className="-mx-3 block rounded-sm px-3 py-2 font-sub leading-7  hover:text-terracotta"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
