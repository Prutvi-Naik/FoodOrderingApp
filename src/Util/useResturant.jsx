import { useEffect, useState } from "react";
import { MENU_API } from "./constant";

const useRestaurant = (resId) => {
    const [resData, setResData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);  // Added resId as dependency

    const fetchData = async () => {
        try {
            const response = await fetch(MENU_API + resId);
            const json = await response.json();
            setResData(json.data);  // Assuming the actual data is in json.data
        } catch (error) {
            console.error("Error fetching restaurant data:", error);
        }
    };

    return resData;
};

export default useRestaurant;