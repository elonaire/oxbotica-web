import React, { FunctionComponent, useEffect, useState } from "react";
import './VehicleDetails.scss';
import Axios from 'axios';
import { useParams } from "react-router-dom";
import Telemetry from "./Telemetry";

interface VehicleDetailsProps {
    
}

interface IVehicleDetails {
    id: string;
    name: string;
    color: string;
    plate_number: string;
}

export interface VehicleTelemetry {
    vehicle_id: string;
    timestamp: number;
    lat: number;
    lng: number;
    speed: number;
    cpu_usage: number;
    battery_level: number;
}
 
const VehicleDetails: FunctionComponent<VehicleDetailsProps> = (props: VehicleDetailsProps) => {
    const [isLoading, setLoading] = useState(false as boolean);
    const [vehicleDetails, setVehicleDetails] = useState(null as IVehicleDetails | null);
    const [vehicleTelemetry, setVehicleTelemetry] = useState(null as VehicleTelemetry | null);
    const [error, setError] = useState('' as any);
    let {id} = useParams() as any;

    useEffect(() => {
        getVehiclesDetails();
        setTimeout(() => {getVehiclesTelemetry()}, 3000);
    }, [vehicleTelemetry]);
    
    const getVehiclesDetails = async (): Promise<void> => {
        setLoading(true);

        try {
            let res = await Axios({
                method: 'get',
                url: `${process.env.REACT_APP_API_URL + 'vehicles'}/${id}`,
            });

            console.log('res.data', res.data);

            setVehicleDetails(res.data as IVehicleDetails);
            setLoading(false);
        } catch (error: any) {
            setError(error.response as any);
            setLoading(false);
        }
    };

    const getVehiclesTelemetry = async (): Promise<void> => {
        setLoading(true);

        try {
            let res = await Axios({
                method: 'get',
                url: `${process.env.REACT_APP_API_URL + 'vehicles'}/${id}/telemetry`,
            });

            console.log('res.data', res.data);

            setVehicleTelemetry(res.data as VehicleTelemetry);
            setLoading(false);
        } catch (error: any) {
            setError(error.response as any);
            setLoading(false);
        }
    };

    return ( 
        <div className="wrapper">
            {vehicleDetails && <div className="details">
                <h2>{vehicleDetails?.name} Details</h2>
                <p><strong>Color: </strong>{vehicleDetails?.color}</p>
                <p><strong>Plate Number: </strong>{vehicleDetails?.plate_number}</p>
            </div>}
            <div className="telemetry">
                <h3>Telemetry</h3>
                {vehicleTelemetry && <Telemetry {...vehicleTelemetry} />}
            </div>
        </div>
     );
}
 
export default VehicleDetails;