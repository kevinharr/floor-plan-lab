import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

function FloorPlan(props) {
    return (
        <div className="floorPlan">
            <Bedroom/>
            <Kitchen/>
            <Bath/>
            <Bedroom/>
            <LivingRoom/>
            <Bath/>
            <Bedroom/>
        </div>
    );
}

export default FloorPlan;