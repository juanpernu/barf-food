"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { userAtom } from "@/lib/store";
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
import { formSchema } from "./schema";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  countries: any[];
  className?: string;
}

export function FirstStepForm({ className, countries }: UserAuthFormProps) {
  const [user, setUser] = useAtom(userAtom);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: user,
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setUser({ ...user, ...values });
    router.push("/signup/second-step");
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input placeholder="juan.pernez@gmail.com" {...field} />
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
          className="text-slate-900 bg-amber-300 hover:bg-amber-400"
        >
          Continuar
        </Button>
      </form>
    </Form>
  );
}
