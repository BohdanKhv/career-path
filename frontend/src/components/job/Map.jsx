import { useState, useEffect } from 'react';
import { CustomSelect, DisplayImage } from '../';
import majorOccupation from '../../assets/data/jobs/majorOccupations.json'
import detailedOccupation from '../../assets/data/jobs/detailedOccupations.json'
import maps from '../../assets/data/jobs/maps.json'


const Map = () => {
    const [major, setMajor] = useState(null);
    const [detailed, setDetailed] = useState(null);
    const [mapType, setMapType] = useState(null);

    return (
        <section>
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
                {major && detailed && (
                    <CustomSelect
                        options={maps}
                        onChange={(e) => setMapType(e)}
                        value={mapType}
                        className="flex-grow-1"
                        placeholder="Select measurement"
                    />
                )}
            </div>
            {major && detailed && mapType && (
                <div className="map py-3">
                    <DisplayImage
                        image={`https://www.bls.gov/oes/current/${mapType.value}${detailed.value.replace('-', '')}.png`}
                        alt={detailed.value}
                        className="map-img border-radius"
                    />
                </div>
            )}
        </section>
    )
}

export default Map