import { useEffect, useState } from "react";

export const Message = () => {

    const [coords, setCoords] = useState({x:0, y:0});

    useEffect(() => {
        const onMouseMove = ({x,y}) => {
            setCoords({x,y})
        };
        window.addEventListener('mousemove', onMouseMove)

        return () => {
            window.removeEventListener('mousemove', onMouseMove)
        };
    }, []);


    return (
        <>
            <p className="text-danger">Usuario ya existe</p>
        </>
    );
}