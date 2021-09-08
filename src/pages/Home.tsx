import React, { FunctionComponent } from "react";
import Vehicles from "../components/Vehicles";

interface HomeProps {
    
}
 
const Home: FunctionComponent<HomeProps> = () => {
    return ( 
        <div>
            <Vehicles />
        </div>
     );
}
 
export default Home;