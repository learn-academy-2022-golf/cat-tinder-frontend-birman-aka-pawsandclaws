import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { NavLink } from "react-router-dom";

const CatIndex = ({ cats }) => {
  return (
    <main>
      <NavLink to={`/catnew`} className="nav-link">
        Create a cat
      </NavLink>
      {cats?.map((cat, index) => {
        return (
          <Card
            key={index}
            body
            style={{
              width: "18rem",
            }}
          >
            <img alt="Sample" src={cat.image} />
            <CardBody>
              <CardTitle tag="h5">{cat.name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {cat.age}
              </CardSubtitle>

              <NavLink to={`/catshow/${cat.id}`} className="nav-link">
                See More Details
              </NavLink>
            </CardBody>
          </Card>
        );
      })}
    </main>
  );
};

export default CatIndex;
