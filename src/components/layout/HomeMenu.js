import Image from "next/image";

const HomeMenu = () => {
  return (
    <section className="my-6">
      <div className="absolute left-0 right-0 w-full">
        <div className="absolute -top-[10px] -left-[70px] text-left -z-10">
          <Image
            src={"/choco-beans.png"}
            width={200}
            height={200}
            alt={"choco-beans"}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="absolute -top-[10px] -right-[70px] -z-10">
          <Image
            src={"/choco-beans.png"}
            width={200}
            height={200}
            alt={"choco-beans"}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="text-center py-6">
          <h3 className="font-semibold text-xl">Checkount</h3>
          <h3 className="uppercase font-bold text-2xl text-primary">Our Sizzling Menu</h3>
        </div>
      </div>
    </section>
  );
};

export default HomeMenu;
