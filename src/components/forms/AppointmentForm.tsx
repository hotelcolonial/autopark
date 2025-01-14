"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import * as z from "zod";
import { AppointmentFormValidation } from "@/lib/validation";
import { createAppointment } from "@/lib/actions/appointment.actions";
import { Form } from "@/components/ui/form";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { SelectItem } from "@/components/ui/select";
import { getClient } from "@/lib/actions/client.actions";

interface Props {
  clientId: string;
  userId: string;
}

const AppointmentForm = ({ clientId, userId }: Props) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [numberOfNights, setNumberOfNights] = useState(0);

  const form = useForm<z.infer<typeof AppointmentFormValidation>>({
    resolver: zodResolver(AppointmentFormValidation),
    defaultValues: {
      hasReservation: "false",
      withAccommodation: "false",
      checkInDate: new Date(),
      checkOutDate: new Date(),
      numberOfPeople: 1,
      numberOfNights: 0,
      confirmed: false,
      total: 0,
    },
  });

  const hasReservation = form.watch("hasReservation");
  const withAccommodation = form.watch("withAccommodation");
  const checkInDate = form.watch("checkInDate");
  const checkOutDate = form.watch("checkOutDate");
  const numberOfPeople = form.watch("numberOfPeople");

  useEffect(() => {
    const checkIn =
      typeof checkInDate === "string" ? new Date(checkInDate) : checkInDate;
    const checkOut =
      typeof checkOutDate === "string" ? new Date(checkOutDate) : checkOutDate;
    const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    setNumberOfNights(diffDays);

    let calculatedTotal = 0;
    if (hasReservation === "true") {
      calculatedTotal = 0; // Parking is included for hotel guests
    } else if (hasReservation === "false") {
      if (withAccommodation === "false") {
        // Parking only
        calculatedTotal = diffDays <= 6 ? diffDays * 23 : diffDays * 20;
      } else {
        // With accommodation
        if (numberOfPeople <= 2) {
          if (diffDays <= 4) calculatedTotal = 500;
          else if (diffDays <= 7) calculatedTotal = 546;
          else if (diffDays <= 14) calculatedTotal = 630;
        } else if (numberOfPeople === 3) {
          if (diffDays <= 4) calculatedTotal = 635;
          else if (diffDays <= 7) calculatedTotal = 681;
          else if (diffDays <= 14) calculatedTotal = 765;
        }
      }
    }

    setTotal(calculatedTotal);
    form.setValue("numberOfNights", diffDays);
    form.setValue("total", calculatedTotal);
  }, [
    checkInDate,
    checkOutDate,
    hasReservation,
    withAccommodation,
    numberOfPeople,
    form,
  ]);

  const onSubmit = async (
    values: z.infer<typeof AppointmentFormValidation>
  ) => {
    setIsLoading(true);
    console.log("Formulario enviado con valores:", values);
    try {
      const appointmentData = {
        ...values,
        hasReservation: values.hasReservation === "true",
        withAccommodation: values.withAccommodation === "true",
      };

      const appointment = await createAppointment(appointmentData, clientId);

      if (appointment) {
        form.reset();
        router.push(
          `/booking/clients/${userId}/new-appointment/success?appointmentId=${appointment.$id}`
        );
      }
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-6">
        <CustomFormField
          fieldType={FormFieldType.SELECT}
          control={form.control}
          name="hasReservation"
          label="Você já tem uma reserva no Hotel Colonial Iguaçu?"
          placeholder="Selecione uma opção"
        >
          <SelectItem value="true">Sim</SelectItem>
          <SelectItem value="false">Não</SelectItem>
        </CustomFormField>

        {hasReservation === "false" && (
          <CustomFormField
            fieldType={FormFieldType.SELECT}
            control={form.control}
            name="withAccommodation"
            label="Deseja hospedagem?"
            placeholder="Selecione uma opção"
          >
            <SelectItem value="true">Sim</SelectItem>
            <SelectItem value="false">Não</SelectItem>
          </CustomFormField>
        )}

        <div className="flex flex-col gap-6 xl:flex-row">
          <CustomFormField
            fieldType={FormFieldType.DATE_PICKER}
            control={form.control}
            name="checkInDate"
            label="Data de Entrada"
            dateFormat="dd/MM/yyyy"
          />

          <CustomFormField
            fieldType={FormFieldType.DATE_PICKER}
            control={form.control}
            name="checkOutDate"
            label="Data de Saída"
            dateFormat="dd/MM/yyyy"
          />
        </div>

        {withAccommodation === "true" && (
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="numberOfPeople"
            label="Quantidade de Pessoas"
            placeholder="1"
          />
        )}

        <div className="mt-8">
          {hasReservation === "false" && (
            <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Resumo da Reserva
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Número de noites</p>
                  <p className="text-lg font-medium text-gray-800">
                    {numberOfNights}
                  </p>
                </div>
                {withAccommodation === "true" && (
                  <div>
                    <p className="text-sm text-gray-600">
                      Quantidade de pessoas
                    </p>
                    <p className="text-lg font-medium text-gray-800">
                      {numberOfPeople}
                    </p>
                  </div>
                )}
              </div>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600">Total</p>
                <p className="text-2xl font-bold text-primary">
                  R$ {total.toFixed(2)}
                </p>
              </div>
            </div>
          )}

          {withAccommodation === "true" && hasReservation === "false" && (
            <div className="mt-4 bg-blue-50 border-l-4 border-secondary-green p-4 rounded-r-lg">
              <p className="text-sm font-medium text-primary-green">
                Você tem a opção de uma diária na sua entrada ou na sua saída.
              </p>
            </div>
          )}

          {hasReservation === "true" && (
            <div className="mt-4 bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
              <p className="text-sm font-medium text-green-700">
                A reserva do seu estacionamento está inclusa nos dias em que
                está hospedado no hotel!
              </p>
            </div>
          )}
        </div>

        <SubmitButton isLoading={isLoading}>Reservar</SubmitButton>
      </form>
    </Form>
  );
};

export default AppointmentForm;
