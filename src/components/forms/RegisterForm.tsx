"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form } from "@/components/ui/form";
import { ClientFormValidation } from "@/lib/validation";

import "react-phone-number-input/style.css";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { registerClient } from "@/lib/actions/client.actions";
import { ClientFormDefaultValues } from "@/constants";

export const RegisterForm = ({ user }: { user: User }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof ClientFormValidation>>({
    resolver: zodResolver(ClientFormValidation),
    defaultValues: {
      ...ClientFormDefaultValues,
      name: user.name,
      email: user.email,
      phone: user.phone,
    },
  });

  const onSubmit = async (values: z.infer<typeof ClientFormValidation>) => {
    setIsLoading(true);

    try {
      const clientData = {
        userId: user.$id,
        name: values.name,
        email: values.email,
        phone: values.phone,
        licensePlate: values.licensePlate,
        privacyConsent: values.privacyConsent,
        color: values.color,
      };

      const client = await registerClient(clientData);

      if (client) {
        router.push(`/booking/clients/${user.$id}/new-appointment`);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => setIsLoading(false), 2000);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-6">
        <section className="space-y-4">
          <h1 className="header">Bem-vindo!</h1>
          <p className="text-dark-500">Complete seu registro</p>
        </section>

        <section className="space-y-6">
          <div className="mb-9 space-y-1">
            <h2 className="sub-header">Informações pessoais</h2>
          </div>
        </section>

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="Nome Completo"
          placeholder="John Doe"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />

        <div className="flex flex-col gap-6 xl:flex-row">
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
        </div>

        <div className="flex flex-col gap-6 xl:flex-row">
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="color"
            label="Cor"
            placeholder="Prata"
          />

          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="licensePlate"
            label="Placa do veículo"
            placeholder="AAA123"
          />
        </div>

        <section className="space-y-6">
          <CustomFormField
            fieldType={FormFieldType.CHECKBOX}
            control={form.control}
            name="privacyConsent"
            label="Eu confirmo que revisei e concordo com a política de privacidade"
          />
        </section>

        <SubmitButton isLoading={isLoading}>Reservar</SubmitButton>
      </form>
    </Form>
  );
};
