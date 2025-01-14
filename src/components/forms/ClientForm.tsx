"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/ui/form";
import { UserFormValidation } from "@/lib/validation";

import "react-phone-number-input/style.css";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { createUser } from "@/lib/actions/client.actions";

export const ClientForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof UserFormValidation>) => {
    setIsLoading(true);
    setErrorMessage(""); // Resetea el mensaje de error antes de intentar

    try {
      const userData = {
        name: values.name,
        email: values.email,
        phone: values.phone,
      };

      const { user, error } = await createUser(userData);

      if (error) {
        setErrorMessage(error); // Muestra el mensaje de error si ocurre un conflicto
        return;
      }

      if (user) {
        router.push(`/booking/clients/${user.$id}/register`);
      }
    } catch (error) {
      console.error("Unhandled error:", error);
      setErrorMessage(
        "Ocorreu um erro inesperado. Tente novamente mais tarde."
      );
    } finally {
      setTimeout(() => setIsLoading(false), 2000);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-6">
        <section className="mb-12 space-y-4">
          <h1 className="header">Olá! 👋</h1>
          <p className="text-dark-500">Comece a agendar sua reserva</p>
        </section>
        {errorMessage && (
          <div className="text-red-500 text-sm">{errorMessage}</div>
        )}
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="Nome Completo"
          placeholder="John Doe"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder="johndoe@gmail.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />

        <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Telefone"
          placeholder="(555) 123-4567"
        />

        <SubmitButton isLoading={isLoading}>Reservar</SubmitButton>
      </form>
    </Form>
  );
};
