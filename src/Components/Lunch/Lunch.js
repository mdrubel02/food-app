import React from 'react';
import { Container } from 'react-bootstrap';
import useItems from '../../Hooks/useItems';
import LunchItems from '../LunchItems/LunchItems';


const Lunch = () => {
    const {items, setItems} = useItems();
    console.log(items)
    return (
      
            <div>
               <div>
               {
                    items.map(item => <LunchItems
                        key={item.id}
                        item={item}
                    ></LunchItems>) 
                }
               </div>
               <p>{Lunch.id}</p>
            </div>
       
    );
};

export default Lunch;