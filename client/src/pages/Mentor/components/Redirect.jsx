import React, {useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom";

const Redirect = () => {
    const [count, setCount] = useState(3);
    const redirect = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((currentCount) => currentCount - 1);
        }, 1000)
        count === 0 && redirect("/auth");
        return () => clearInterval(interval)
    },[count,redirect]);

    return (
        <div >
            <div>
                <p>Redirecting you in {count} sec</p>
            </div>
        </div>
    )
}
export default Redirect