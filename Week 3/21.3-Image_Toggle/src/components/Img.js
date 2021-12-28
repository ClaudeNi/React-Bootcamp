import React, { useEffect, useRef, useState } from "react";

const Img = (props) => {
    const [img, setImg] = useState(props.imgBlackUrl);
    const imgRef = useRef();

    useEffect(() => {
        imgRef.current.addEventListener("mouseenter", () => {
            setImg(props.imgNormalUrl);
        });
        imgRef.current.addEventListener("mouseleave", () => {
            setImg(props.imgBlackUrl);
        });
    });

    return (
        <div>
            <img ref={imgRef} src={img} alt="" />
        </div>
    );
};

export default Img;
