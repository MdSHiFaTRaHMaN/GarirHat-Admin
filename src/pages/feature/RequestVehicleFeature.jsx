import React from 'react';
import { useRequestFeature } from '../../api/api';

const RequestVehicleFeature = () => {
    const { requestFeature } = useRequestFeature();
    console.log("requestFeature", requestFeature)
    return (
        <div>
            This Page Coming Soon
        </div>
    );
};

export default RequestVehicleFeature;