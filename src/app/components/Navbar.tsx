"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Energy",
    href: "/energy",
    subLinks: [
      { name: "Home", href: "/energy" },
      { name: "Projects", href: "/energy/projects" },
      { name: "Policies", href: "/energy/policies" },
    ],
  },
  {
    name: "Logistics",
    href: "/logistics",
    subLinks: [
      { name: "Home", href: "/logistics" },
      { name: "Tracking", href: "/logistics/tracking" },
      { name: "Services", href: "/logistics/services" },
    ],
  },
  {
    name: "Properties",
    href: "/properties",
    subLinks: [
      { name: "Home", href: "/properties" },
      { name: "Listings", href: "/properties/listings" },
      { name: "Tenant Info", href: "/properties/tenants" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <Disclosure as="nav" className="bg-primary shadow-lg">
      {({ open }) => (
        <>
          <div className="container mx-auto px-6 sm:px-8 lg:px-10">
            <div className="flex justify-between items-center h-20">
              {/* Logo Section */}
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center">
                  <h1 className="text-4xl font-display text-light tracking-[0.25em]">
                    BOVUA
                  </h1>
                </Link>
              </div>

              {/* Desktop Nav Links */}
              <div className="hidden md:flex space-x-10">
                {navigation.map((item) =>
                  item.subLinks ? (
                    <Popover className="relative" key={item.name}>
                      {({ open, close }) => (
                        <>
                          <PopoverButton
                            className={classNames(
                              open
                                ? "text-light border-b-4 border-light"
                                : "text-gray-200 hover:text-white",
                              "text-lg font-medium focus:outline-none"
                            )}
                          >
                            {item.name}
                            <ChevronDownIcon className="w-5 h-5 inline ml-1" />
                          </PopoverButton>

                          <PopoverPanel
                            
                            className="absolute z-50 mt-3 w-48 bg-white shadow-lg rounded-lg"
                          >
                            <div className="py-2">
                              {item.subLinks.map((link) => (
                                <Link
                                  key={link.name}
                                  href={link.href}
                                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                  onClick={() => close()}
                                >
                                  {link.name}
                                </Link>
                              ))}
                            </div>
                          </PopoverPanel>
                        </>
                      )}
                    </Popover>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        pathname === item.href
                          ? "text-light border-b-4 border-light"
                          : "text-gray-200 hover:text-white",
                        "text-lg font-medium transition-all duration-200 pb-2"
                      )}
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>

              {/* Mobile Menu Button */}
              <div className="-mr-2 flex md:hidden">
                <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-light hover:bg-secondary hover:text-white focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="h-8 w-8" />
                  ) : (
                    <Bars3Icon className="h-8 w-8" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          {/* Mobile Nav Panel */}
          <DisclosurePanel className="md:hidden bg-secondary">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navigation.map((item) =>
                item.subLinks ? (
                  <Popover key={item.name} className="relative">
                    {({  close }) => (
                      <>
                        <PopoverButton className="block w-full px-3 py-2 text-lg font-medium text-gray-200 hover:bg-primary hover:text-light">
                          {item.name}
                          <ChevronDownIcon className="w-5 h-5 inline ml-1" />
                        </PopoverButton>
                        <PopoverPanel className="absolute z-50 w-full bg-white shadow-lg rounded-lg">
                          {item.subLinks.map((link) => (
                            <Link
                              key={link.name}
                              href={link.href}
                              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                              onClick={() => close()}
                            >
                              {link.name}
                            </Link>
                          ))}
                        </PopoverPanel>
                      </>
                    )}
                  </Popover>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-lg font-medium text-gray-200 hover:bg-primary hover:text-light"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};
