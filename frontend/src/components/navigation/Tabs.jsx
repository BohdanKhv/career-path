import { useRef, useState, useEffect } from 'react';
import './styles/Tabs.css';

const Tabs = ({items, active, onChange}) => {
    const activeRef = useRef(null);
    const indicatorRef = useRef(null);
    const [indicatorWidth, setIndicatorWidth] = useState(0);
    const [indicatorLeft, setIndicatorLeft] = useState(0);


    useEffect(() => {
        const activeTab = activeRef.current;
        const indicator = indicatorRef.current;
        if (indicator && activeTab) {
            const activeTabWidth = activeTab.offsetWidth;
            const activeTabLeft = activeTab.offsetLeft;
            setIndicatorWidth(activeTabWidth);
            setIndicatorLeft(activeTabLeft);
        }
    }, [active]);

    return (
        <div className="tabs">
            <div className="tabs-container">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`tab${active === index ? ' active': ''}`}
                        onClick={() => onChange(index)}
                        ref={active === index ? activeRef : null}
                    >
                        {item.icon && <span className="tab-icon">{item.icon}</span>}
                        <span className="tab-label">{item.label}</span>
                    </div>
                ))}
            </div>
            <span className="tabs-indicator" ref={indicatorRef}
                style={{
                    width: indicatorWidth,
                    left: indicatorLeft,
                }}
            />
        </div>
    )
}

export default Tabs