import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
// import useItems from '../../Hooks/useItems';
import BreakFastItems from '../BreakFastitems/BreakFastItems';

const BreakFast = () => {
    // const [breakFast, setBreakFast] =useItems();
    const [breakFast,setBreakFast] = useState([]);
    console.log(breakFast)
    useEffect(()=>{
        fetch('breakFast.json')
        .then(res => res.json())
        .then(data => setBreakFast(data))
    },[]);
    console.log(breakFast)
    return (
        <Container>
            
            <Row lg={3} md={2} sm={1} className="g-4 mt-4">
                {
                    breakFast.map(breakFastItem => <BreakFastItems
                        key={breakFastItem.id}
                        breakFastItem={breakFastItem}
                    ></BreakFastItems>)
                }
            </Row>
        </Container>
    );
};

export default BreakFast;