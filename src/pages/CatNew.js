import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const CatNew = ({ createCat }) => {
  const navigate = useNavigate();
  const [newCat, setNewCat] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: "",
    image2: "",
    image3: "",
    image4: "",
  });

  const handleChange = (e) => {
    setNewCat({ ...newCat, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    createCat(newCat);
    navigate("/catindex");
  };

  return (
    <div>
      <Form>
        <h1>Create a new cat</h1>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            onChange={handleChange}
            value={newCat.name}
          />
          <Label for="age">Age</Label>
          <Input
            type="number"
            name="age"
            onChange={handleChange}
            value={newCat.age}
          />
          <Label for="enjoys">Enjoys</Label>
          <Input
            type="text"
            name="enjoys"
            onChange={handleChange}
            value={newCat.enjoys}
          />
          <Label for="image">Image URL</Label>
          <Input
            type="url"
            name="image"
            onChange={handleChange}
            value={newCat.image}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image2">Image URL</Label>
          <Input
            type="text"
            name="image2"
            onChange={handleChange}
            value={newCat.image2}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image3">Image URL</Label>
          <Input
            type="text"
            name="image3"
            onChange={handleChange}
            value={newCat.image3}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image4">Image URL</Label>
          <Input
            type="text"
            name="image4"
            onChange={handleChange}
            value={newCat.image4}
          />
        </FormGroup>
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </div>
  );
};

export default CatNew;
