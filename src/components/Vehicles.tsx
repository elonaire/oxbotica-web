import React, { FunctionComponent, useEffect, useState } from "react";
import Axios from 'axios';
import './Vehicles.scss';

interface VehiclesProps {
    history: any;
}

interface Vehicle {
    id: string;
    name: string;
    color: string;
    plate_number: string;
}

const Vehicles: FunctionComponent<VehiclesProps> = (props: VehiclesProps) => {
    const [isLoading, setLoading] = useState(false as boolean);
    const [vehicles, setVehicles] = useState([] as Vehicle[] | any);
    const [error, setError] = useState('' as any);

    useEffect(() => {
        getVehicles();
    }, []);

    const viewTelemetry = (id: string): void => {
        props.history.push(`/telemetry/${id}`);
    }

    const getVehicles = async (): Promise<void> => {
        setLoading(true);

        try {
            let res = await Axios({
                method: 'get',
                url: `${process.env.REACT_APP_API_URL + 'vehicles'}`,
            });

            console.log('res.data', res.data);

            setVehicles(res.data as Vehicle[]);
            setLoading(false);
        } catch (error: any) {
            setError(error.response as any);
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Oxbotica Vehicles List</h2>
            <table className="table">
                <thead>
                    <tr>
                    <th>No.</th>
                        <th>Name</th>
                        <th>Color</th>
                        <th>Plate</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {vehicles && vehicles.length > 0 &&
                        vehicles.map((vehicle: Vehicle, index: number) => (<tr>
                            <td>{index + 1}</td>
                            <td>{vehicle.name}</td>
                            <td>{vehicle.color}</td>
                            <td>{vehicle.plate_number}</td>
                            <td>
                                <button onClick={(e) => viewTelemetry(vehicle.id)}>View Telemetry</button>
                            </td>
                        </tr>))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Vehicles;