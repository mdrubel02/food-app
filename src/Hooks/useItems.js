import { useEffect, useState } from 'react';

const useItems = () => {
    const [items,setItems] = useState([]);
    const [dinnerItems,setDinnerItems] = useState([]);
    const [breakFast,setBreakFast] = useState([]);

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
    useEffect(()=>{
        fetch('breakFast.json')
        .then(res => res.json())
        .then(data => setBreakFast(data))
    },[]);

    return {items,setItems,dinnerItems,setDinnerItems,breakFast,setBreakFast} ;
};

export default useItems;