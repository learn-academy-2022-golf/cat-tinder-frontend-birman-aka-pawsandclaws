import React from 'react'
import { useParams } from "react-router-dom"
import {
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardText,
} from 'reactstrap'

const CatShow = ({ cats }) => {
  const { id } = useParams()
  let currentCat = cats.find((cat) => cat.id === +id)

  return (
    <>
      <Card className="my-2">
        <CardImg
          alt="Card image cap"
          src={currentCat.image}
          style={{
            objectFit:"contain",
            height: 180
          }}
        />
        <CardBody>
          <CardTitle tag="h5">
          {currentCat.name}, {currentCat.age}
          </CardTitle>
          <CardText>
            {currentCat.enjoys}
          </CardText>
          <CardText>
            <small className="text-muted">
              Last updated 3 mins ago
            </small>
          </CardText>
        </CardBody>
      </Card>
 
    </>
  )
}

export default CatShow