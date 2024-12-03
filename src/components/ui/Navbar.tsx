import Image from "next/image";

const Navbar = () => {
  return (
    <header className="">
      <nav className="navbar bg-base-100 relative z-10 ">
        <div className="navbar-start">
          <div className="bg-primary-green py-3 px-2 rounded-full">
            <Image alt="logo" src="/logo.png" width={60} height={60} />
          </div>
        </div>
        <div className="navbar-center hidden md:block text-md font-inter text-black">
          <ul className="flex gap-10 menu-horizontal px-1">
            <li className="cursor-pointer relative group">
              <a href="#whoweare">Quem somos</a>
              <span className="absolute -bottom-1 left-0 w-0 h-[0.10rem] bg-primary-green transition-all duration-1000  group-hover:w-full"></span>
            </li>
            <li className="cursor-pointer relative group">
              <a href="#services">Serviços</a>
              <span className="absolute -bottom-1 left-0 w-0 h-[0.10rem] bg-primary-green transition-all duration-1000  group-hover:w-full"></span>
            </li>
            <li className="cursor-pointer relative group">
              <a href="#packs">Pacotes</a>
              <span className="absolute -bottom-1 left-0 w-0 h-[0.10rem] bg-primary-green transition-all duration-1000  group-hover:w-full"></span>
            </li>
            <li className="cursor-pointer relative group">
              <a href="#location">Localização</a>
              <span className="absolute -bottom-1 left-0 w-0 h-[0.10rem] bg-primary-green transition-all duration-1000  group-hover:w-full"></span>
            </li>
          </ul>
        </div>
        <div className="navbar-end" />
      </nav>
    </header>
  );
};

export default Navbar;
