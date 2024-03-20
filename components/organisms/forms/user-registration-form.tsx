"use client";

import * as React from "react";
import { SplineIcon } from "lucide-react";
import clsx from "clsx";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CountriesCombobox } from "@/components/molecules/countries-combobox";
import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/atoms/form";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  address: z.string().min(2).max(50),
  country: z.string({
    required_error: "Por favor, selecciona un país.",
  }),
});

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  countries: any[];
  className?: string;
}

export function UserAuthForm({ className, countries }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      address: "",
      country: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={clsx("grid gap-6", className)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombres y Apellidos</FormLabel>
              <FormControl>
                <Input placeholder="Juan Perez" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dirección</FormLabel>
              <FormControl>
                <Input placeholder="Lane Street 1234" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>País</FormLabel>
              <CountriesCombobox
                field={field}
                countries={countries}
                form={form}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={isLoading}
          className="text-slate-900 bg-amber-300 hover:bg-amber-400"
        >
          {isLoading && <SplineIcon className="mr-2 h-4 w-4 animate-spin" />}
          Continuar
        </Button>
      </form>
    </Form>
  );
}
