import Image from "next/image";
import Link from "next/link";

import { RegisterForm } from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/client.actions";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);
  return (
    <div className="flex min-h-screen">
      <section className="remove-scrollbar container my-auto flex-1">
        <div className="sub-container max-w-[496px]">
          <div className="bg-primary-green py-2.5 pl-1 pr-1.5 w-fit rounded-full mb-12">
            <Image
              alt="logo"
              src="/logo.png"
              height={50}
              width={50}
              className="w-fit"
            />
          </div>
          <RegisterForm user={user} />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 Colonial Autopark
            </p>
          </div>
        </div>
      </section>

      <div className="hidden md:block w-2/5 relative">
        <Image
          src="/assets/images/register-side.png"
          alt="parking"
          layout="fill"
          objectFit="cover"
          className="side-img "
        />
      </div>
    </div>
  );
};

export default Register;
