import psSmall from "../assets/images/langrid_sm.png";
import psBig from "../assets/images/langrid_big.png";
import psSq1 from "../assets/images/langrid_sq1.png";
import psSq2 from "../assets/images/langrid_sq2.png";

function LandingGrid() {
  return (
    <div className="grid grid-cols-2 grid-rows-10 gap-2 md:gap-6 w-[80%] xl:w-[80%] h-[30%] xl:h-[90%] xl:mt-0 mt-6">
      <div className="col-span-1 row-span-3 h-full w-full rounded-2xl overflow-hidden border-pk border-2">
        <img src={psSmall} alt="ps1" className="w-full h-full object-cover" />
      </div>
      <div className="col-span-1 row-span-5 rounded-2xl overflow-hidden border-pk border-2">
        <img src={psSq1} alt="ps2" className="w-full h-full object-cover " />
      </div>
      <div className="col-span-1 row-span-7 rounded-2xl overflow-hidden border-pk border-2">
        <img src={psBig} alt="ps3" className="w-full h-full object-cover" />
      </div>
      <div className="col-span-1 row-span-5 rounded-2xl overflow-hidden border-bl border-2">
        <img src={psSq2} alt="ps4" className="w-full h-full object-cover" />
      </div>
    </div>
  );
}

export default LandingGrid;
