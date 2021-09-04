import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import '../ReactCard/Rcard.css';
import clogo from '../assests/cardlogo.jpg';
const Rcard = (props) => {
  return (
    <div className='sign-crd'>
      <Card className='card-main'>
        <CardImg id='crd-img' top width="100%" src={clogo} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Rcard;