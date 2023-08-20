import NavLinks from "./NavLinks";
import NavIcons from "./NavIcons";

export default function Navigation() {

  return (
    <div className="center flex justify-between items-center bg-[--primary-color-200] shadow-2xl transition-all duration-200 hover:shadow-md">
      <NavLinks />
      <div className="w-[40px] h-[40px]">
        <img src="../../assets/annulogo.png" alt="beadsbyAnnu logo" />
      </div>
      <NavIcons />
    </div>
  );
}
