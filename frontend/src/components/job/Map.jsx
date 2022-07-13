import { useState, useEffect } from 'react';
import { CustomSelect, DisplayImage } from '../';
import majorOccupation from '../../assets/data/jobs/majorOccupations.json'
import detailedOccupation from '../../assets/data/jobs/detailedOccupations.json'


const Map = () => {
    const [major, setMajor] = useState(null);
    const [detailed, setDetailed] = useState(null);

    return (
        <div className="map-container">
            <div>
                <div className="">
                    <div className="border-bottom py-3 flex gap-3 flex-min-wrap">
                        <CustomSelect
                            options={majorOccupation}
                            onChange={(e) => setMajor(e)}
                            value={major}
                            className="flex-grow-1"
                            placeholder="Select a major occupation"
                        />
                        {major && (
                            <CustomSelect
                                options={detailedOccupation?.filter(item => item.value.startsWith(major.value.slice(0, 3)))}
                                onChange={(e) => setDetailed(e)}
                                value={detailed}
                                className="flex-grow-1"
                                placeholder="Select a detailed occupation"
                            />
                        )}
                    </div>
                    {major && detailed && (
                        <div className="map py-3">
                            <DisplayImage
                                image={`https://www.bls.gov/oes/current/se${detailed.value.replace('-', '')}.png`}
                                alt={detailed.value}
                                className="map-img"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Map