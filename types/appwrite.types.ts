import { Models } from "node-appwrite";

export interface Client extends Models.Document {
  name: string;
  email: string;
  licensePlata: string;
  phone: string;
  privacyConsent: boolean;
  userId: string;
}
