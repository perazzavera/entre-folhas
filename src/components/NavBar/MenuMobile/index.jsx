import { DisclosureButton } from "@headlessui/react";
import { LuMenu, LuX } from "react-icons/lu";

export default function MenuMobile() {
  return (
    <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-verde-escuro hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset lg:hidden">
      <span className="absolute -inset-0.5" />
      <span className="sr-only">Open main menu</span>
      <LuMenu
        aria-hidden="true"
        className="block size-6 group-data-open:hidden text-verde-claro"
      />
      <LuX
        aria-hidden="true"
        className="hidden size-6 group-data-open:block text-verde-claro"
      />
    </DisclosureButton>
  );
}
