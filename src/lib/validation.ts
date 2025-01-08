import { z } from "zod";

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(2, "O nome deve ter pelo menos 2 caracteres")
    .max(50, "O nome deve ter no máximo 50 caracteres"),
  email: z.string().email("Endereço de e-mail inválido"),
  phone: z
    .string()
    .refine(
      (phone) => /^\+\d{10,15}$/.test(phone),
      "Número de telefone inválido. Deve estar no formato + seguido de 10 a 15 dígitos"
    ),
});

export const ClientFormValidation = z.object({
  name: z
    .string()
    .min(2, "O nome deve ter pelo menos 2 caracteres")
    .max(50, "O nome deve ter no máximo 50 caracteres"),
  email: z.string().email("Endereço de e-mail inválido"),
  phone: z
    .string()
    .refine(
      (phone) => /^\+\d{10,15}$/.test(phone),
      "Número de telefone inválido. Deve estar no formato + seguido de 10 a 15 dígitos"
    ),
  licensePlate: z
    .string()
    .regex(
      /^[A-Z0-9]{1,8}$/,
      "Placa inválida. Deve conter até 8 caracteres alfanuméricos"
    ),
  privacyConsent: z
    .boolean()
    .refine(
      (value) => value === true,
      "É necessário consentir com a política de privacidade"
    ),
  color: z.string().min(3, "O cor deve ter pelo menos 3 caracteres"),
});

export const AppointmentFormValidation = z.object({
  hasReservation: z.union([z.boolean(), z.string()]),
  withAccommodation: z.union([z.boolean(), z.string()]),
  checkInDate: z.date(),
  checkOutDate: z.date(),
  numberOfPeople: z
    .number()
    .min(1, "Deve ter pelo menos 1 pessoa")
    .max(3, "Não pode ser mais do que 3 pessoas"),
});
