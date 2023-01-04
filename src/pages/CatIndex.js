import React from 'react'
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap'

const CatIndex = ({ cats }) => {
  return (
    <main>
    {cats.map((cat, index) => {
      return (
        <Card
            body
            style={{
              width: '18rem'
            }}
          >
            <img
              alt="Sample"
              src={cat.image}         
            />
            <CardBody>
              <CardTitle tag="h5">
                {cat.name}
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                {cat.age}
              </CardSubtitle>
              <Button>
                View Profile
              </Button>
            </CardBody>
          </Card>
      )
    })}
  </main>
  )
}

export default CatIndex