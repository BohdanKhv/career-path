import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { VideoItem, VideoLoading } from '../components'
import { } from '../features/oews/oewsSlice'


const Home = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = `Pathify - Home`
        let promise;

    }, [])

    return (
        <>
            <div className="body-offset-2">
                <div className="p-3 flex-grow-1 border-bottom mb-3">
                    <div className="pb-3">
                        <div
                            className="fs-2 py-3"
                        >
                            Hi mom
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home