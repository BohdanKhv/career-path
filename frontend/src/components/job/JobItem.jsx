import { useState } from 'react'
import { numberFormatter } from '../../assets/utils/helpers'
import { JobDetail } from '../';


const JobItem = ({item, index}) => {
    const [showDetails, setShowDetails] = useState(false)

    return (
        <>
        <tr onClick={() => setShowDetails(!showDetails)} className="pointer bg-hover">
            <td className="border-bottom d-none-sm bg-secondary">
                <div className="flex flex-col">
                    <span className="bold fs-4">
                        {index+1}
                    </span>
                </div>
            </td>
            <td className="border-bottom">
                <div className="flex flex-col">
                    <span className="bold fs-4">
                        {item.occTitle}
                    </span>
                </div>
            </td>
            <td className="text-end border-bottom">
                <div className="flex flex-col">
                    <span className="bold fs-4">
                        ${numberFormatter(item?.wage?.annually)}
                    </span>
                    <span className="fs-4 mt-2">
                        {item.wage.hourly ? `$${item.wage.hourly} | ` : ''}{item.wage.rse ? `${item.wage.rse}%` : ''}{item.totalEmp ? " | "+numberFormatter(item.totalEmp) : ''}
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