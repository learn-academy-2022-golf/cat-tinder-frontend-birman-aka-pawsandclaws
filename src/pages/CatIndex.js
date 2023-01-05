import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

import Disneyheader from "../assets/disneyheader.png"

const CatIndex = ({ cats }) => {
  return (
    <main className="indexframe">
      <img className="bigheader" src={Disneyheader}/>
      <div className="indexgrid">
      {cats.sort((a, b) => a.name.localeCompare(b.name))?.map((cat, index) => {
        return (
          <Card className="indexcard"
            key={index}

          >
            <img className="indeximage" alt="Sample" src={cat.image} />

            <CardBody>
              <CardTitle tag="h5">{cat.name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {cat.age}
              </CardSubtitle>

              <NavLink to={`/catshow/${cat.id}`} className="nav-link">
                <Button>See More Details</Button>
              </NavLink>
            </CardBody>
          </Card>
        );
      })}
      </div>
    </main>
  );
};

export default CatIndex;
