"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { userAtom } from "@/lib/store";
import { LoaderCircle } from "lucide-react";
import clsx from "clsx";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { UserSignup } from "@/actions/signup";
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
import { formSchema } from "./schema";

interface SecondStepFormProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function SecondStepForm({ className }: SecondStepFormProps) {
  const [user, setUser] = useAtom(userAtom);
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { toast } = useToast() as any;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: user,
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

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
          name="reference"
          render={({ field }) => (
            <FormItem>
              <FormLabel>¿Dónde escuchaste de Hōfu?</FormLabel>
              <FormControl>
                <Input placeholder="Juan Perez" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pets_count"
          render={({ field }) => (
            <FormItem>
              <FormLabel>¿Cuántas mascotas tienes?</FormLabel>
              <FormControl>
                <Input placeholder="juan.pernez@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pets_types"
          render={({ field }) => (
            <FormItem>
              <FormLabel>De que especie?</FormLabel>
              <FormControl>
                <Input placeholder="Lane Street 1234" {...field} />
              </FormControl>
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
