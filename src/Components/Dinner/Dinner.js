import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useItems from '../../Hooks/useItems';
import DinnerItems from '../DinnerItems/DinnerItems';

const Dinner = () => {
    const { dinnerItems, setDinnerItems } = useItems();
    console.log(dinnerItems)
    return (
       <Container>
              <Row lg={3} md={2} sm={1}className="g-4 mt-3 ">
                {
                    dinnerItems.map(dinner => <DinnerItems
                        key={dinner.id}
                        dinner={dinner}
                    ></DinnerItems>)
                }
            </Row>
       </Container>
    );
};

export default Dinner;