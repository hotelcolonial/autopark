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
  numberOfNights: z.number().int().min(1),
  confirmed: z.boolean(),
  withAccommodation: z.union([z.boolean(), z.string()]),
  numberOfPeople: z
    .number()
    .int()
    .min(1)
    .max(3, "Não pode ser mais do que 3 pessoas"),
  hasReservation: z.union([z.boolean(), z.string()]),
  checkInDate: z.string().or(z.date()),
  checkOutDate: z.string().or(z.date()),
  total: z.number(),
  $id: z.string().optional(),
  $createdAt: z.string().optional(),
  $updatedAt: z.string().optional(),
  $permissions: z.array(z.unknown()).optional(),
  client: z.array(z.unknown()).optional(),
  $databaseId: z.string().optional(),
  $collectionId: z.string().optional(),
});
