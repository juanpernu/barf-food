"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import clsx from "clsx";
import { Button } from "@/components/atoms/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/atoms/command";
import { FormControl } from "@/components/atoms/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/atoms/popover";

const references = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "+3", label: "Más de tres" },
];

export function PetQuantityCombobox({ field, form }: any) {
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
              ? references.find((ref: any) => ref.value === field.value)?.label
              : "Elegir cantidad"}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandList>
            <CommandEmpty>No se encontró el referente.</CommandEmpty>
            <CommandGroup>
              {references.map((ref: any) => (
                <CommandItem
                  value={ref.value}
                  key={ref.label}
                  onSelect={() => {
                    form.setValue("pets_count", ref.value);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={clsx(
                      "mr-2 h-4 w-4",
                      ref.value === field.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {ref.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
