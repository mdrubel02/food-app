import { useEffect, useState } from 'react';

const useItems = () => {
    const [items,setItems] = useState([]);
    const [dinnerItems,setDinnerItems] = useState([]);

    useEffect(()=>{
        fetch('lunch.json')
        .then(res => res.json())
        .then(data => setItems(data))
    },[]);

    useEffect(()=>{
        fetch('dinner.json')
        .then(res => res.json())
        .then(data => setDinnerItems(data))
    },[]);

    return {items,setItems,dinnerItems,setDinnerItems} ;
};

export default useItems;