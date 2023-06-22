import rocketImg from "../../../../../assets/rocket.png"
import lockImg from "../../../../../assets/lock.png"

function Spacer() {
  return ( 
    <div className="flex justify-around py-8">
      <img src={rocketImg} alt="A rocket" className="w-9"/>
      <img src={lockImg} alt="A lock" className="w-9"/>
      <img src={rocketImg} alt="A rocket" className="w-9"/>
    </div>
  );
}

export default Spacer;