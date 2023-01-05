import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardImg, CardText, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

const CatShow = ({ cats, deleteCat }) => {
  const { id } = useParams();
  let currentCat = cats.find((cat) => cat.id === +id);

  return (
    <>
      <Card className="my-2">
        <CardImg
          alt="Card image cap"
          src={currentCat.image}
          style={{
            objectFit: "contain",
            height: 180,
          }}
        />
        <CardBody>
          <CardTitle tag="h5">
            {currentCat.name}, {currentCat.age}
          </CardTitle>
          <CardText>{currentCat.enjoys}</CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
          <NavLink to={`/catedit/${currentCat.id}`} className="nav-link">
          <Button>Edit this cat</Button>
          </NavLink>
          <NavLink to="/catindex">
            <Button onClick={() => deleteCat(currentCat.id)}>Delete Cat Profile</Button>
          </NavLink>
        </CardBody>
      </Card>
    </>
  );
};

export default CatShow;
