import React, { FunctionComponent } from "react";
import { VehicleTelemetry } from "./VehicleDetails";

interface TelemetryProps extends VehicleTelemetry {
    
}
 
const Telemetry: FunctionComponent<TelemetryProps> = (props: TelemetryProps) => {
    return ( 
        <div>
            <p><strong>Timestamp: </strong>{props?.timestamp}</p>
            <p><strong>Speed: </strong>{props?.speed}</p>
            <p><strong>Latitude: </strong>{props?.lat}</p>
            <p><strong>Longitude: </strong>{props?.lng}</p>
            <p><strong>CPU Usage: </strong>{props?.cpu_usage}</p>
            <p><strong>Battery level: </strong>{props?.battery_level}</p>
        </div>
     );
}
 
export default Telemetry;