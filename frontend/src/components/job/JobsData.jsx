import { useEffect, useState, useRef, useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { getJobs, resetJobs } from "../../features/job/jobSlice"
import { JobItem, JobLoading } from "../"
import { arrowUpIcon } from "../../assets/img/icons"


const JobsData = () => {
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams();
    const [filterState, setFilterState] = useState(searchParams.get('state') ? searchParams.get('state') : '')
    const [filterArea, setFilterArea] = useState(searchParams.get('area') ? searchParams.get('area') : '')
    const [filterOccCode, setFilterOccCode] = useState(searchParams.get('occCode') ? searchParams.get('occCode') : '')
    const [sort, setSort] = useState(searchParams.get('sort') ? searchParams.get('sort') : 0)
    
    const { jobs, isLoading, hasMore } = useSelector(state => state.job)
    const observer = useRef();

    const getData = () => {
        dispatch(getJobs({
            state: filterState,
            area: filterArea,
            occCode: filterOccCode,
            sort: sort,
        }))
    }

    const lastElementRef = useCallback(node => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                const promise = getData();
        
                return () => {
                    promise && promise.abort();
                    dispatch(resetJobs());
                }
            }
        });
        if (node) observer.current.observe(node);
    }, [isLoading, hasMore]);

    useEffect(() => {
        const promise = getData();

        return () => {
            promise && promise.abort();
            dispatch(resetJobs());
        }
    }, [sort])


    return (
        <section>
            <table className="w-100" cellSpacing="0" cellPadding="0">
                <thead>
                    <tr>
                        <th className="text-start d-none-sm">
                            <div className="bold fs-3">
                                #
                            </div>
                        </th>
                        <th className="text-start">
                            <div className="bold fs-3">
                                Title
                            </div>
                        </th>
                        <th className="text-end pointer text-hover"
                            onClick={() => setSort(sort === 0 ? 1 : 0)}
                            title={sort === 0 ? 'Sort by annual salary ascending' : 'Sort by annual salary descending'}
                        >
                            <div className="flex flex-col">
                                <div className="bold fs-4 flex align-center justify-end">
                                    Average Salary <i className={`animation-duration icon-sm ms-2${sort === 1 ? " rotate-180": "" }`}>{arrowUpIcon}</i>
                                </div>
                                <div className="fs-4 weight-normal mt-2 white-space-nowrap">
                                    Hourly | RSE | Employed
                                </div>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map((item, index) => (
                        <JobItem key={`job-${item._id}`} item={item} index={index} />
                    ))
                    }
                    <tr ref={lastElementRef}/>
                    {Array.from(Array(10).keys()).map((i) => (
                        <JobLoading key={`loading-${i}`} index={i} />
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default JobsData