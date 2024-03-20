"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import clsx from "clsx";
import { Button } from "@/components/atoms/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/atoms/command";
import { FormControl } from "@/components/atoms/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/atoms/popover";

export function CountriesCombobox({ field, form, countries }: any) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <FormControl>
          <Button
            variant="outline"
            role="combobox"
            className={clsx(
              "justify-between",
              !field.value && "text-neutral-400"
            )}
          >
            {field.value
              ? countries.find(
                  (country: any) =>
                    country.translations.spa.common === field.value
                )?.translations.spa.common
              : "Elegir país"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Buscar país..." />
          <CommandList>
            <CommandEmpty>No se encontró el país.</CommandEmpty>
            <CommandGroup>
              {countries.map((country: any) => (
                <CommandItem
                  value={country.translations.spa.common}
                  key={country.cca3}
                  onSelect={() => {
                    form.setValue("country", country.translations.spa.common);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={clsx(
                      "mr-2 h-4 w-4",
                      country.translations.spa.common === field.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {country.translations.spa.common}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
