import majorOccupation from '../../assets/data/jobs/majorOccupations.json'
import states from '../../assets/data/jobs/states.json'
import { CustomSelect } from '../';

const JobFilter = ({setFilterState, filterState, setFilterOccCode, filterOccCode, filterArea, setFilterArea}) => {
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
                onChange={(e) => setFilterOccCode(e)}
                value={filterOccCode}
                className="flex-grow-1"
                placeholder="Occupation"
                isClearable
            />
        </div>
    )
}

export default JobFilter