"use client";

import * as React from "react";
import { LoaderCircle } from "lucide-react";
import clsx from "clsx";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { UserSignup } from "@/actions/signup";
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
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z
    .string({
      required_error: "Por favor, escribe un nombre válido.",
    })
    .min(2, {
      message: "El nombre debe contener al menos 2 caracteres.",
    })
    .max(50),
  address: z
    .string({
      required_error: "Por favor, escribe una dirección válida.",
    })
    .min(2, {
      message: "La dirección debe contener al menos 2 caracteres.",
    })
    .max(50),
  email: z
    .string({
      required_error: "Por favor, escribe un e-mail válido.",
    })
    .min(2, {
      message: "El e-mail debe contener al menos 2 caracteres.",
    })
    .max(50),
  country: z
    .string({
      required_error: "Por favor, selecciona un país.",
    })
    .min(2, {
      message: "Por favor, selecciona un país.",
    }),
});

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  countries: any[];
  className?: string;
}

export function UserAuthForm({ className, countries }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      address: "",
      country: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);
      await UserSignup(values);
      toast({
        variant: "success",
        title: "Formulario enviado con éxito",
        description: "Gracias por registrarte en nuestra plataforma.",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Ups! Ocurrió un error inesperado",
        description: error.message,
      });
    } finally {
      setIsLoading(false);
    }
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
          disabled={isLoading}
          className="text-slate-900 bg-amber-300 hover:bg-amber-400"
        >
          {isLoading && <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
          Continuar
        </Button>
      </form>
    </Form>
  );
}
