import Image from "next/image";
import Right from "../icons/Right";

const Hero = () => {
  return (
    <section className="grid grid-cols-2">
      <div className="py-12">
        <h1 className="text-5xl font-semibold">
          Life is just better
          <br />
          with a Desert!
        </h1>
        <p className="my-6">
          Deserts are the missing piece that makes every day complete, a simple
          yet delicious joy in life.
        </p>
        <div className="flex gap-4 text-sm">
          <button className="uppercase bg-primary text-white px-4 py-2 rounded-full flex items-center gap-2 font-semibold">
            Order Now
            <Right />
          </button>
          <button className="uppercase font-semibold">Learn More</button>
        </div>
      </div>

      <div className="relative">
        <Image
          src={"/choco-hero.png"}
          alt="Cake"
          fill={true}
          style={{ objectFit: "contain" }}
        />
      </div>
    </section>
  );
};

export default Hero;
