import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
} from "@mui/material";
import FullProductCard from "./FullProductCard";
import { sareeDummyData } from "../../data/sareeDummyData";
import { filters, singleFilter } from "./FilterData";

const sortOptions = [
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function FullProductList() {
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedDiscount, setSelectedDiscount] = useState("");
  const [selectedAvailability, setSelectedAvailability] = useState("");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleFilterChange = (value, sectionId) => {
    const searchParams = new URLSearchParams(location.search);

    let filterValue = searchParams.getAll(sectionId);
    if (filterValue.length > 0 && filterValue[0].split(",").includes(value)) {
      filterValue = filterValue[0].split(",").filter((item) => item !== value);
      if (filterValue.length === 0) {
        searchParams.delete(sectionId);
      }
    } else {
      filterValue.push(value);
    }
    if (filterValue.length > 0) {
      searchParams.set(sectionId, filterValue.join(","));
    }
    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  };

  const handleRadioFilterChange = (e, sectionId) => {
    const searchParams = new URLSearchParams(location.search);

    searchParams.set(sectionId, e.target.value);
    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  };

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Dialog
          open={mobileFiltersOpen}
          onClose={setMobileFiltersOpen}
          className="relative z-40 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                {filters.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    {({ open }) => (
                      <div>
                        <h3 className="-mx-2 -my-3 flow-root">
                          <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  aria-hidden="true"
                                  className="size-5"
                                />
                              ) : (
                                <PlusIcon
                                  aria-hidden="true"
                                  className="size-5"
                                />
                              )}
                            </span>
                          </DisclosureButton>
                        </h3>
                        <DisclosurePanel className="pt-6">
                          <div className="space-y-6">
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex gap-3">
                                <div className="flex h-5 shrink-0 items-center">
                                  <div className="group grid size-4 grid-cols-1">
                                    <input
                                      onChange={() =>
                                        handleFilterChange(
                                          option.value,
                                          section.id
                                        )
                                      }
                                      defaultValue={option.value}
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      type="checkbox"
                                      className="col-start-1 row-start-1 rounded-sm border border-gray-300 bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100"
                                    />
                                  </div>
                                </div>
                                <label
                                  htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                  className="min-w-0 flex-1 text-gray-500"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </DisclosurePanel>
                      </div>
                    )}
                  </Disclosure>
                ))}

                {singleFilter.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    {({ open }) => (
                      <div>
                        <h3 className="-my-3 flow-root">
                          <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  aria-hidden="true"
                                  className="size-5"
                                />
                              ) : (
                                <PlusIcon
                                  aria-hidden="true"
                                  className="size-5"
                                />
                              )}
                            </span>
                          </DisclosureButton>
                        </h3>
                        <DisclosurePanel className="pt-6">
                          <div className="space-y-4">
                            {section.name === "Price" && (
                              <FormControl
                                component="fieldset"
                                className="w-full"
                              >
                                <RadioGroup
                                  aria-label="Price"
                                  name="price-range"
                                  value={selectedPrice}
                                  onChange={(e) =>
                                    setSelectedPrice(e.target.value)
                                  }
                                >
                                  {section.options.map((option) => (
                                    <FormControlLabel
                                      onChange={(e) =>
                                        handleRadioFilterChange(e, section.id)
                                      }
                                      key={option.value}
                                      value={option.value}
                                      control={<Radio />}
                                      label={option.label}
                                    />
                                  ))}
                                </RadioGroup>
                              </FormControl>
                            )}

                            {section.name === "Discount Range" && (
                              <FormControl
                                component="fieldset"
                                className="w-full"
                              >
                                <RadioGroup
                                  aria-label="Discount Range"
                                  name="discount-range"
                                  value={selectedDiscount}
                                  onChange={(e) =>
                                    setSelectedDiscount(e.target.value)
                                  }
                                >
                                  {section.options.map((option) => (
                                    <FormControlLabel
                                      onChange={(e) =>
                                        handleRadioFilterChange(e, section.id)
                                      }
                                      key={option.value}
                                      value={option.value}
                                      control={<Radio />}
                                      label={option.label}
                                    />
                                  ))}
                                </RadioGroup>
                              </FormControl>
                            )}

                            {section.name === "Availability" && (
                              <FormControl
                                component="fieldset"
                                className="w-full"
                              >
                                <RadioGroup
                                  aria-label="Availability"
                                  name="availability"
                                  value={selectedAvailability}
                                  onChange={(e) =>
                                    setSelectedAvailability(e.target.value)
                                  }
                                >
                                  {section.options.map((option) => (
                                    <FormControlLabel
                                      onChange={(e) =>
                                        handleRadioFilterChange(e, section.id)
                                      }
                                      key={option.value}
                                      value={option.value}
                                      control={<Radio />}
                                      label={option.label}
                                    />
                                  ))}
                                </RadioGroup>
                              </FormControl>
                            )}
                          </div>
                        </DisclosurePanel>
                      </div>
                    )}
                  </Disclosure>
                ))}
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <main className="mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-12 pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              New Arrivals
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white ring-1 shadow-2xl ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        <a
                          href={option.href}
                          className={classNames(
                            option.current
                              ? "font-medium text-gray-900"
                              : "text-gray-500",
                            "block px-4 py-2 text-sm data-focus:bg-gray-100 data-focus:outline-hidden"
                          )}
                        >
                          {option.name}
                        </a>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon aria-hidden="true" className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="size-5" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <h2 className="text-lg font-semibold text-gray-400 mb-4 lg:block hidden">
              Filters
            </h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
              {/* Filters */}
              <form className="hidden lg:block px-3 py-3 shadow-[0_-1px_2px_rgba(0,0,0,0.08)]">
                {filters.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-b border-gray-200  py-6"
                  >
                    {({ open }) => (
                      <div>
                        <h3 className="-my-3 flow-root">
                          <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  aria-hidden="true"
                                  className="size-5"
                                />
                              ) : (
                                <PlusIcon
                                  aria-hidden="true"
                                  className="size-5"
                                />
                              )}
                            </span>
                          </DisclosureButton>
                        </h3>
                        <DisclosurePanel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex gap-3">
                                <div className="flex h-5 shrink-0 items-center">
                                  <div className="group grid size-4 grid-cols-1">
                                    <input
                                      onChange={() =>
                                        handleFilterChange(
                                          option.value,
                                          section.id
                                        )
                                      }
                                      defaultValue={option.value}
                                      defaultChecked={option.checked}
                                      id={`filter-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      type="checkbox"
                                      className="col-start-1 row-start-1 rounded-sm border border-gray-300 bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100"
                                    />
                                  </div>
                                </div>
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </DisclosurePanel>
                      </div>
                    )}
                  </Disclosure>
                ))}

                {singleFilter.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-b border-gray-200 py-6"
                  >
                    {({ open }) => (
                      <div>
                        <h3 className="-my-3 flow-root">
                          <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  aria-hidden="true"
                                  className="size-5"
                                />
                              ) : (
                                <PlusIcon
                                  aria-hidden="true"
                                  className="size-5"
                                />
                              )}
                            </span>
                          </DisclosureButton>
                        </h3>
                        <DisclosurePanel className="pt-6">
                          <div className="space-y-4">
                            {section.name === "Price" && (
                              <FormControl
                                component="fieldset"
                                className="w-full"
                              >
                                <RadioGroup
                                  aria-label="Price"
                                  name="price-range"
                                  value={selectedPrice}
                                  onChange={(e) =>
                                    setSelectedPrice(e.target.value)
                                  }
                                >
                                  {section.options.map((option) => (
                                    <FormControlLabel
                                      onChange={(e) =>
                                        handleRadioFilterChange(e, section.id)
                                      }
                                      key={option.value}
                                      value={option.value}
                                      control={<Radio />}
                                      label={option.label}
                                    />
                                  ))}
                                </RadioGroup>
                              </FormControl>
                            )}

                            {section.name === "Discount Range" && (
                              <FormControl
                                component="fieldset"
                                className="w-full"
                              >
                                <RadioGroup
                                  aria-label="Discount Range"
                                  name="discount-range"
                                  value={selectedDiscount}
                                  onChange={(e) =>
                                    setSelectedDiscount(e.target.value)
                                  }
                                >
                                  {section.options.map((option) => (
                                    <FormControlLabel
                                      onChange={(e) =>
                                        handleRadioFilterChange(e, section.id)
                                      }
                                      key={option.value}
                                      value={option.value}
                                      control={<Radio />}
                                      label={option.label}
                                    />
                                  ))}
                                </RadioGroup>
                              </FormControl>
                            )}

                            {section.name === "Availability" && (
                              <FormControl
                                component="fieldset"
                                className="w-full"
                              >
                                <RadioGroup
                                  aria-label="Availability"
                                  name="availability"
                                  value={selectedAvailability}
                                  onChange={(e) =>
                                    setSelectedAvailability(e.target.value)
                                  }
                                >
                                  {section.options.map((option) => (
                                    <FormControlLabel
                                      onChange={(e) =>
                                        handleRadioFilterChange(e, section.id)
                                      }
                                      key={option.value}
                                      value={option.value}
                                      control={<Radio />}
                                      label={option.label}
                                    />
                                  ))}
                                </RadioGroup>
                              </FormControl>
                            )}
                          </div>
                        </DisclosurePanel>
                      </div>
                    )}
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-4 w-full">
                <div className="flex flex-wrap justify-center bg-white py-5 shadow-[0_-1px_5px_rgba(0,0,0,0.08)] ">
                  {sareeDummyData.map((item) => (
                    <FullProductCard product={item} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
