import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useSearchParams } from 'react-router-dom'
import { Header, Tabs, Map } from "../components"
import { jobTabs } from "../assets/data/tabs"


const Jobs = () => {
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams();
    const [activeTab, setActiveTab] = useState(searchParams.get('tab') ? parseInt(searchParams.get('tab')) : 0);

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = `Pathify - Jobs`
    }, [])


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
                    <div className="results-container">
                        {activeTab === 2 && <Map />}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Jobs