import React from 'react';
import './VehicleConfiguration.css';

const VehicleConfiguration = ({ configurations }) => {
    return (
        <div className="vehicle-configuration">
            {Object.entries(configurations).map(([key, items]) => (
                <div key={key} className="configuration-category">
                    <h2>{key.charAt(0).toUpperCase() + key.slice(1)}</h2>
                    <div className="configuration-items">
                        {items.map(item => (
                            <div key={item.id} className="configuration-item">
                                <img src={item.img} alt={item.name} />
                                <h3>{item.name}</h3>
                                <p>Stock: {item.stock}</p>
                                <p>Price: USD {item.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default VehicleConfiguration;
