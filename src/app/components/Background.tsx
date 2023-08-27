import Image from "next/image"
import blocks from "../../../public/and-machines-effect-unsplash.jpg"

const Background = () => {
    return (
        <Image
            alt="blocks"
            src={blocks}
            quality={100}
            fill={true}
            sizes="100vw"
            style={{
                objectFit: "cover",
                zIndex: "-1",
                filter: "brightness(70%)",
            }}
        />
    )
}

export default Background
