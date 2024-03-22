"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { LoaderCircle } from "lucide-react";
import clsx from "clsx";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { UserSignup } from "@/actions/signup";
import { Button } from "@/components/atoms/button";
import { Checkbox } from "@/components/atoms/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/atoms/form";
import { ReferenceCombobox } from "@/components/molecules/reference-combobox";
import { PetQuantityCombobox } from "@/components/molecules/pet-quantity-combobox";
import { useToast } from "@/hooks/use-toast";
import { formAtom } from "@/lib/state";
import { formSchema } from "./schema";

const pets_types = [
  {
    id: "dog",
    label: "Perro",
  },
  {
    id: "cat",
    label: "Gato",
  },
  {
    id: "others",
    label: "Otro",
  },
] as const;

interface SecondStepFormProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function SecondStepForm({ className }: SecondStepFormProps) {
  const [f, setForm] = useAtom(formAtom);
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { toast } = useToast() as any;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: f.user,
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true);
      await UserSignup(values);
      setForm({
        ...f,
        steps: {
          steps_arr: f.steps.steps_arr.map((step, index) => {
            if (index === f.steps.current) {
              return { ...step, status: "complete" };
            } else if (index === f.steps.current + 1) {
              return { ...step, status: "current" };
            } else {
              return step;
            }
          }),
          current: f.steps.current + 1,
        },
      });
      router.push("/signup/congrats");
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
            <FormItem className="flex flex-col">
              <FormLabel>¿Dónde escuchaste de Hōfu?</FormLabel>
              <FormControl>
                <ReferenceCombobox field={field} form={form} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pets_count"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>¿Cuántas mascotas tienes?</FormLabel>
              <FormControl>
                <PetQuantityCombobox field={field} form={form} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pets_types"
          render={() => (
            <FormItem>
              <FormLabel>¿De qué especies?</FormLabel>
              {pets_types.map((type) => (
                <FormField
                  key={type.id}
                  control={form.control}
                  name="pets_types"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={type.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(type.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, type.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value: any) => value !== type.id
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {type.label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
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
          Enviar
        </Button>
      </form>
    </Form>
  );
}
