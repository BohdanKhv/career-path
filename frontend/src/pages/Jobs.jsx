import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useSearchParams } from 'react-router-dom'
import { Header, Tabs, Map, JobsData, Button } from "../components"
import { jobTabs } from "../assets/data/tabs"


const Jobs = () => {
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams();
    const [activeTab, setActiveTab] = useState(searchParams.get('tab') ? parseInt(searchParams.get('tab')) : 0);

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = `Pathify | Jobs`
    }, [])

    useEffect(() => {
        document.title = `Pathify | Jobs - ${jobTabs[activeTab].label}`
    }, [activeTab])


    return (
        <main className="content">
            <div className="flex-grow-1 mb-3 mx-w-lg mx-auto">
                <Header label="Jobs" />
                <div className="content-body">
                    <Tabs
                        onChange={setActiveTab}
                        active={activeTab}
                        items={jobTabs}
                    />
                    <div className="results-container border-top pt-3">
                        {activeTab === 0 && <JobsData />}
                        {activeTab === 1 && <Map />}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Jobs