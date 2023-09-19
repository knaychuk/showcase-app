"use client"

import { useState, Fragment } from "react"
import Image from "next/image"
import { Combobox, Transition } from "@headlessui/react"

import { manufacturers } from "@/constants"

import { SearchManufacturerProps } from "@/types"

const SearchManufacturer = ({ manufacturer, setManufacturer } : SearchManufacturerProps) => {
  const [query, setQuery] = useState('');

  const filteredManufacturers = 
    query === "" ? manufacturers : manufacturers.filter((item) => (
      item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))
  )) 

  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relatvie w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image 
              src="/car-logo.svg"
              alt="car logo"
              width={20}
              height={20}
              className="ml-4"
            />
          </Combobox.Button>

          <Combobox.Input 
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Transition 
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opactiy-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')} 
          >
            <Combobox.Options>
              {/* no results match query */}
              {filteredManufacturers.length === 0 && query !== "" ? (
                <Combobox.Option
                  value={query}
                  className="search-manufacturer__option"
                >
                  No results found
                </Combobox.Option>
                // else
              ) : (
                filteredManufacturers.map((item) => (
                  <Combobox.Option
                    key={item}
                    value={item}
                    className={({ active }) => `relative search-manufacturer__option
                      ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}
                    `}
                  >
                    {item}
                  </Combobox.Option>
                ))

              )}
            </Combobox.Options>

          </Transition>
        </div>
      </Combobox>
   
    </div>
  )
}
export default SearchManufacturer