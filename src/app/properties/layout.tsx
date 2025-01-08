"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navigation = [
  { name: "Home", href: "/energy" },
  { name: "Products and Services", href: "/energy/products" },
  { name: "Projects", href: "/energy/projects" },
  { name: "Policies", href: "/energy/policies" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function EnergyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Energy Navbar */}
      <Disclosure as="nav" className="bg-primary shadow-lg">
        {({ open }) => (
          <>
            <div className="container mx-auto px-6 sm:px-8 lg:px-10">
              <div className="flex justify-between items-center h-20">
                {/* Logo Section */}
                <div className="flex-shrink-0">
                  <Link href="/energy" className="flex items-center">
                    <h1 className="text-4xl font-display text-light tracking-[0.25em]">
                      BOVUA ENERGY
                    </h1>
                  </Link>
                </div>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex space-x-10">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        pathname === item.href
                          ? "text-light border-b-4 border-light"
                          : "text-gray-200 hover:text-white hover:border-b-4 hover:border-light",
                        "text-lg font-medium transition-all duration-200 pb-2"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}

                  {/* Holdings Home Link */}
                  <Link
                    href="/"
                    className="text-gray-200 hover:text-white hover:border-b-4 hover:border-light text-lg font-medium transition-all duration-200 pb-2"
                  >
                    Main Site
                  </Link>

                  {/* Shared Contact Us */}
                  <Link
                    href="/contact"
                    className="text-gray-200 hover:text-white hover:border-b-4 hover:border-light text-lg font-medium transition-all duration-200 pb-2"
                  >
                    Contact Us
                  </Link>
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
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-lg font-medium text-gray-200 hover:bg-primary hover:text-light"
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Holdings Home Link for Mobile */}
                <Link
                  href="/"
                  className="block px-3 py-2 rounded-md text-lg font-medium text-gray-200 hover:bg-primary hover:text-light"
                >
                  Holdings Home
                </Link>

                {/* Contact Us for Mobile */}
                <Link
                  href="/contact"
                  className="block px-3 py-2 rounded-md text-lg font-medium text-gray-200 hover:bg-primary hover:text-light"
                >
                  Contact Us
                </Link>
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>

      {/* Page Content */}
      <main className="flex-grow">{children}</main>

      
    </div>
  );
}
