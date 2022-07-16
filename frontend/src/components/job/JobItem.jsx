import { useState } from 'react'
import { numberFormatter } from '../../assets/utils/helpers'
import { JobDetail } from '../';


const JobItem = ({item, index}) => {
    const [showDetails, setShowDetails] = useState(false)

    return (
        <>
        <tr onClick={() => setShowDetails(!showDetails)} className="pointer bg-hover">
            <td className="border-bottom">
                <div className="flex flex-col">
                    <span className="bold fs-4">
                        {item.occTitle}
                    </span>
                </div>
            </td>
            <td className="text-center border-bottom">
                <div className="flex flex-col">
                    <span className="fs-4 mt-2">
                        {item.totalEmp ? numberFormatter(item.totalEmp) : '#'}
                    </span>
                </div>
            </td>
            <td className="text-center border-bottom">
                <div className="flex flex-col">
                    <span className="fs-4 mt-2">
                        {item.wage.rse ? `${item.wage.rse}%` : '#'}
                    </span>
                </div>
            </td>
            <td className="text-end border-bottom">
                <div className="flex flex-col">
                    <span className="bold fs-4">
                        {numberFormatter(item?.wage?.annually) ? `$${numberFormatter(item?.wage?.annually)}` : '#'}
                    </span>
                    <span className="fs-4 mt-2">
                        {item.wage.hourly ? `$${item.wage.hourly}` : '#'}
                    </span>
                </div>
            </td>
        </tr>
        {showDetails &&
            <JobDetail item={item} />
        }
        </>
    )
}

export default JobItem