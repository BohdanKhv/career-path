import { useState, useEffect } from 'react';
import { CustomSelect, Image } from '../';
import majorOccupation from '../../assets/data/jobs/majorOccupations.json'
import detailedOccupation from '../../assets/data/jobs/detailedOccupations.json'
import maps from '../../assets/data/jobs/maps.json'


const Map = () => {
    const [major, setMajor] = useState(null);
    const [detailed, setDetailed] = useState(null);
    const [mapType, setMapType] = useState(null);

    return (
        <section className="p-3">
            <div className="flex gap-3 flex-min-wrap">
                <CustomSelect
                    options={majorOccupation}
                    onChange={(e) => setMajor(e)}
                    value={major}
                    className="flex-grow-1"
                    placeholder="Major occupation"
                />
                {major && (
                    <CustomSelect
                        options={detailedOccupation?.filter(item => item.value.startsWith(major.value.slice(0, 3)))}
                        onChange={(e) => setDetailed(e)}
                        value={detailed}
                        className="flex-grow-1"
                        placeholder="Detailed occupation"
                    />
                )}
                {major && detailed && (
                    <CustomSelect
                        options={maps}
                        onChange={(e) => setMapType(e)}
                        value={mapType}
                        className="flex-grow-1"
                        placeholder="Measurement"
                    />
                )}
            </div>
            {major && detailed && mapType && (
                <div className="map py-3">
                    <Image
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