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
  { value: "instagram", label: "Instagram" },
  { value: "facebook", label: "Facebook" },
  { value: "blog", label: "Blog o publicación" },
  { value: "search_engines", label: "En un buscador (Google, Bing, etc.)" },
  { value: "veterinary", label: "Por mi veterinaria/o" },
  { value: "friend_or_family", label: "Por un amigo o colega" },
];

export function ReferenceCombobox({ field, form }: any) {
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
              : "Elegir referencia"}
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
                    form.setValue("reference", ref.value);
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
