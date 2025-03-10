import React from 'react';
import { useVehicleDetails } from '../api/api';

const Test = () => {
    const vehicleID = 76;
    const { vehicleDetails} = useVehicleDetails(vehicleID);
    console.log("vehicleDetails", vehicleDetails)
    return (
        <div>
            
        </div>
    );
};

export default Test;