import { useState, useRef, useEffect } from "react"
import './styles/Image.css'

const Image = ({
    image,
    alt,
    className,
    onClick,
    onMouseEnter,
    onMouseLeave,
}) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false)
    const imageRef = useRef(null)

    return (
        <div
            className={`image-main bg-secondary${className ? ` ${className}` : ""}`}
        >
            <img
                className={`image-main${className ? ` ${className}` : ""}${isImageLoaded ? '' : ' opacity-0'}`}
                src={image}
                onLoad={() => {
                    setIsImageLoaded(true);
                }}
                alt={alt}
                ref={imageRef}
                onClick={onClick}
                decoding="async"
                title={alt}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            />
        </div>
    )
}

export default Image