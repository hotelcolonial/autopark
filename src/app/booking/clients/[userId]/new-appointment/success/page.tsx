import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getAppointment } from "@/lib/actions/appointment.actions";
import { formatDateTime } from "@/lib/utils";
import { CalendarIcon, BedIcon, UsersIcon, CreditCardIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const RequestSuccess = async ({
  searchParams,
  params: { userId },
}: SearchParamProps) => {
  const appointmentId = (searchParams?.appointmentId as string) || "";
  const appointment = await getAppointment(appointmentId);

  console.log(appointment);

  return (
    <div className=" flex h-screen max-h-screen px-[5%]">
      <div className="success-img">
        <div className="bg-green-500 py-2.5 pl-1 pr-1.5 w-fit rounded-full">
          <Image
            alt="logo"
            src="/logo.png"
            height={50}
            width={50}
            className="w-fit"
          />
        </div>

        <section className="flex flex-col items-center">
          <Image
            src="/assets/gifs/success.gif"
            height={300}
            width={280}
            alt="success"
          />
          <h2 className="header mb-3 max-w-[600px] text-center">
            Sua{" "}
            <span className="text-green-500">reserva de estacionamento</span>{" "}
            foi enviada com sucesso!
          </h2>
          <p>
            Verifique seu e-mail para uma cópia dos detalhes da sua reserva.
          </p>
        </section>

        <Card className="w-full max-w-md overflow-hidden">
          <CardHeader className="bg-green-500 text-white">
            <CardTitle className="text-2xl font-bold">
              Detalhes da Reserva
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-500">Check-in</p>
                <p className="text-lg font-semibold">
                  {formatDateTime(appointment.checkInDate).dateTime}
                </p>
              </div>
              <CalendarIcon className="text-green-500 w-8 h-8" />
            </div>
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-500">Check-out</p>
                <p className="text-lg font-semibold">
                  {formatDateTime(appointment.checkOutDate).dateTime}
                </p>
              </div>
              <CalendarIcon className="text-green-500 w-8 h-8" />
            </div>
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-500">Acomodação</p>
                <Badge
                  variant={
                    appointment.withAccommodation ? "default" : "secondary"
                  }
                >
                  {appointment.withAccommodation
                    ? "Com acomodação"
                    : "Sem acomodação"}
                </Badge>
              </div>
              <BedIcon className="text-green-500 w-8 h-8" />
            </div>
            <div className="flex justify-between items-center">
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-500">Hóspedes</p>
                <p className="text-lg font-semibold">
                  {appointment.numberOfPeople} pessoa(s)
                </p>
              </div>
              <UsersIcon className="text-green-500 w-8 h-8" />
            </div>
            <div className="flex justify-between items-center pt-4 border-t">
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-500">Total</p>
                <p className="text-2xl font-bold text-green-600">
                  R$ {appointment.total.toFixed(2)}
                </p>
              </div>
              <CreditCardIcon className="text-green-500 w-8 h-8" />
            </div>
          </CardContent>
        </Card>

        <Button variant="outline" className="shad-primary-btn" asChild>
          <Link href={`/booking/clients/${userId}/new-appointment`}>
            Nova Reserva
          </Link>
        </Button>

        <p className="copyright">© 2025 ColonialAutopark</p>
      </div>
    </div>
  );
};

export default RequestSuccess;
