import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { Header, Tabs } from "../components"
import { jabTabs } from "../assets/data/tabs"


const Jobs = () => {
    const dispatch = useDispatch()
    const [activeTab, setActiveTab] = useState(0)

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = `Pathify - Home`
    }, [])


    return (
        <div className="content">
            <div className="flex-grow-1 mb-3">
                <Header label="Jobs" />
                <div className="content-body">
                    <Tabs
                        onChange={setActiveTab}
                        active={activeTab}
                        items={jabTabs}
                    />
                </div>
            </div>
        </div>
    )
}

export default Jobs