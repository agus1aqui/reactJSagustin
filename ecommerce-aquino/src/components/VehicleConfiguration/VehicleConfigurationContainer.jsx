import React from 'react';
import { wheels } from '../../data/wheels';
import { lights } from '../../data/lights';
import { colors } from '../../data/colors';
import VehicleConfiguration from './VehicleConfiguration';

const VehicleConfigurationContainer = () => {
    const allConfigurations = {
        wheels,
        lights,
        colors
    };

    return (
        <VehicleConfiguration configurations={allConfigurations} />
    );
};

export default VehicleConfigurationContainer;
