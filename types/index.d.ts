declare interface CreateUserParams {
  name: string;
  email: string;
  phone: string;
}

declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

declare interface User extends CreateUserParams {
  $id: string;
}

declare interface RegisterClientParams extends CreateUserParams {
  userId: string;
  color: string;
  privacyConsent: boolean;
  licensePlate: string;
}

declare interface CreateAppointmentParams {
  numberOfNights: number;
  confirmed: boolean;
  withAccommodation: boolean | string;
  numberOfPeople: number;
  hasReservation: boolean | string;
  checkInDate: string;
  checkOutDate: string;
}
