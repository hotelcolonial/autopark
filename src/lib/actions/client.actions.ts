"use server";

import { ID, Query } from "node-appwrite";
import {
  CLIENT_COLLECTION_ID,
  DATABASE_ID,
  databases,
  users,
} from "../appwrite.config";
import { parseStringify } from "../utils";

export const createUser = async (user: CreateUserParams) => {
  try {
    // Buscar usuario por email
    const existingUserByEmail = await users.list([
      Query.equal("email", [user.email]),
    ]);

    if (existingUserByEmail.total > 0) {
      const existingUser = existingUserByEmail.users[0];

      // Verificar si el número de teléfono coincide
      if (existingUser.phone === user.phone) {
        // Devolver el usuario si email y teléfono coinciden
        return { user: existingUser, error: null };
      } else {
        // Retornar error si el email ya está en uso pero el teléfono no coincide
        return {
          user: null,
          error: "Email ou telefone não coincidem, por favor, verifique.",
        };
      }
    }

    // Buscar usuario por teléfono (si no coincide por email)
    const existingUserByPhone = await users.list([
      Query.equal("phone", [user.phone]),
    ]);

    if (existingUserByPhone.total > 0) {
      // Retornar error si el teléfono ya está en uso pero el email no coincide
      return {
        user: null,
        error: "Email ou telefone não coincidem, por favor, verifique.",
      };
    }

    // Crear un nuevo usuario si no existe
    const newUser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name
    );

    return { user: newUser, error: null };
  } catch (error) {
    console.error("Error during user creation or retrieval:", error);
    throw error; // Manejar otros errores
  }
};

// GET USER
export const getUser = async (userId: string) => {
  try {
    const user = await users.get(userId);

    return parseStringify(user);
  } catch (error) {
    console.error(
      "An error occurred while retrieving the user details:",
      error
    );
  }
};

export const getClient = async (userId: string) => {
  console.log(userId);
  try {
    const patients = await databases.listDocuments(
      DATABASE_ID!,
      CLIENT_COLLECTION_ID!,
      [Query.equal("userId", [userId])]
    );

    return parseStringify(patients.documents[0]);
  } catch (error) {
    console.error(
      "An error occurred while retrieving the patient details:",
      error
    );
  }
};

export const registerClient = async ({
  userId,
  color,
  privacyConsent,
  licensePlate,
  ...client
}: RegisterClientParams) => {
  try {
    // Buscar cliente existente por un identificador único, como correo electrónico
    const existingClients = await databases.listDocuments(
      DATABASE_ID!,
      CLIENT_COLLECTION_ID!,
      [Query.equal("email", client.email)] // Cambia "email" si usas otro campo único
    );

    if (existingClients.total > 0) {
      // Cliente ya existe, actualizar documento
      const existingClient = existingClients.documents[0];

      // Excluir metadatos de Appwrite usando destructuración
      const {
        $databaseId,
        $collectionId,
        $id,
        $createdAt,
        $updatedAt,
        $permissions,
        ...clientData
      } = existingClient;

      const updatedClient = await databases.updateDocument(
        DATABASE_ID!,
        CLIENT_COLLECTION_ID!,
        $id, // ID del cliente existente
        {
          ...clientData, // Campos existentes (sin metadatos)
          name: client.name || existingClient.name,
          licensePlate: licensePlate || existingClient.licensePlate,
          email: client.email || existingClient.email,
          phone: client.phone || existingClient.phone,
          privacyConsent: privacyConsent ?? existingClient.privacyConsent,
          userId: userId || existingClient.userId,
          color: color || existingClient.color,
          appointment: existingClient.appointment, // Mantener las citas existentes
        }
      );

      return parseStringify(updatedClient);
    } else {
      // Cliente no existe, crear un nuevo documento
      const newClient = await databases.createDocument(
        DATABASE_ID!,
        CLIENT_COLLECTION_ID!,
        ID.unique(), // Generar un nuevo ID único
        {
          name: client.name,
          licensePlate,
          email: client.email,
          phone: client.phone,
          privacyConsent,
          userId,
          color,
          appointment: [], // Inicializar citas vacías
        }
      );

      return parseStringify(newClient);
    }
  } catch (error) {
    console.error("An error occurred while registering the client:", error);
    throw error; // Lanzar el error para manejarlo en niveles superiores
  }
};
