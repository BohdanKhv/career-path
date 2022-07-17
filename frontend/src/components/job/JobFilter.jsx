import majorOccupation from '../../assets/data/jobs/majorOccupations.json'
import detailedOccupation from '../../assets/data/jobs/detailedOccupations.json'
import states from '../../assets/data/jobs/states.json'
import { CustomSelect } from '../';

const JobFilter = ({
    setFilterState,
    filterState,
    setFilterOccCode,
    filterOccCode,
    filterArea,
    setFilterArea,
    filterDetailed,
    setFilterDetailed,
}) => {
    return (
        <div className="pb-3 px-3 flex gap-3 flex-wrap">
            <CustomSelect
                options={states}
                onChange={(e) => setFilterState(e)}
                value={filterState}
                className="flex-grow-1"
                placeholder="State"
                isClearable
            />
            <CustomSelect
                options={states}
                onChange={(e) => setFilterArea(e)}
                value={filterArea}
                className="flex-grow-1"
                placeholder="Area"
                isClearable
            />
            <CustomSelect
                options={majorOccupation}
                onChange={(e) => {setFilterOccCode(e); setFilterDetailed(null)}}
                value={filterOccCode}
                className="flex-grow-1"
                placeholder="Occupation"
                isClearable
            />
            {filterOccCode && (
                <CustomSelect
                options={detailedOccupation}
                onChange={(e) => setFilterDetailed(e)}
                value={filterDetailed}
                className="flex-grow-1"
                placeholder="Detailed Occupation"
                isClearable
            />
            )}
        </div>
    )
}

export default JobFilter