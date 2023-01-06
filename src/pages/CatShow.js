import React from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardText,
  Button,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const CatShow = ({ cats, deleteCat }) => {
  const { id } = useParams();
  let currentCat = cats.find((cat) => cat.id === +id);

  return (
    <>
      <div className="profilecontainer">
        <img
          className="profilepic"
          alt="Card image cap"
          src={currentCat.image}
        />
        <span className="bigname"> {currentCat.name}</span>
      </div>
      <div className="bio">
        <p />
        🐾 {currentCat.age} years old
        <p />
        😻 Enjoys {currentCat.enjoys}
      </div>
      <p></p>
      <div className="picgrid">
        <img
          alt="Card image cap"
          src={currentCat.image2}
          style={{
            objectFit: "cover",
            height: 200,
            width: 200,
          }}
        />{" "}
        <img
          alt="Card image cap"
          src={currentCat.image3}
          style={{
            objectFit: "cover",
            height: 200,
            width: 200,
          }}
        />{" "}
        <img
          alt="Card image cap"
          src={currentCat.image4}
          style={{
            objectFit: "cover",
            height: 200,
            width: 200,
          }}
        />
      </div>
      <CardBody>
        <NavLink to={`/catedit/${currentCat.id}`} className="nav-link">
          <Button>Edit this cat</Button>
        </NavLink>
        <span>
          <NavLink to="/catindex">
            <Button onClick={() => deleteCat(currentCat.id)}>
              Delete Cat Profile
            </Button>
          </NavLink>
        </span>
      </CardBody>
    </>
  );
};

export default CatShow;
