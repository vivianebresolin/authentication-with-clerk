import rocketImg from "../../../../../assets/rocket.png"
import lockImg from "../../../../../assets/lock.png"

function Spacer() {
  return ( 
    <div className="flex justify-around py-8 md:py-12 lg:py-20">
      <img src={rocketImg} alt="A rocket" className="w-9 md:w-12"/>
      <img src={lockImg} alt="A lock" className="w-9 md:w-12"/>
      <img src={rocketImg} alt="A rocket" className="w-9 md:w-12"/>
    </div>
  );
}

export default Spacer;