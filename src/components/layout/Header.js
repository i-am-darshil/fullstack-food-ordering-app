import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between">
        <Link className="text-primary font-semibold text-2xl uppercase" href={"/"}>Flourish</Link>
        <nav className="flex items-center gap-4">
          <Link href={""}>Home</Link>
          <Link href={""}>Menu</Link>
          <Link href={""}>About</Link>
          <Link href={""}>Contact</Link>
          <Link className="bg-primary text-white px-8 py-2 rounded-full" href={""}>Login</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
