import React from 'react'
import Card from 'react-bootstrap/Card';

const CardMovie = ({image, title}) => {
  return (
    <Card style={{ width: '189px', maxHeight: '247px', marginBottom: '22px' }}>
      <Card.Header>
        <Card.Img style={{ width: '100px' }} variant="top" src={image} />
      </Card.Header>
      <Card.Body>
        <Card.Title style={{ fontSize: '14px' }}>{title}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default CardMovie;
