import Image from "next/image";
import Link from "next/link";

import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { getClient } from "@/lib/actions/client.actions";

const NewAppointment = async ({ params: { userId } }: SearchParamProps) => {
  const client = await getClient(userId);
  return (
    <div className="flex min-h-screen">
      <section className="remove-scrollbar container my-auto flex-1">
        <div className="sub-container max-w-[600px]">
          <div className="bg-primary-green py-2.5 pl-1 pr-1.5 w-fit rounded-full mb-12">
            <Image
              alt="logo"
              src="/logo.png"
              height={50}
              width={50}
              className="w-fit"
            />
          </div>
          <AppointmentForm clientId={client?.$id} userId={userId} />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 Colonial Autopark
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <div className="hidden md:block w-2/5 relative">
        <Image
          src="/assets/images/register-side.png"
          alt="parking"
          layout="fill"
          objectFit="cover"
          className="side-img"
        />
      </div>
    </div>
  );
};

export default NewAppointment;
