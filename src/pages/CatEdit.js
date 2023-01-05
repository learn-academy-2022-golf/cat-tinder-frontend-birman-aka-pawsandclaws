import React, {useState} from 'react'
import { useParams } from "react-router-dom"
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from 'reactstrap'
import { useNavigate } from "react-router-dom"

const CatEdit = ({cats, updateCat}) => {
  const navigate = useNavigate()
  const { id } = useParams()
  let currentCat = cats?.find((cat) => cat.id === +id)

  const [editCat, setEditCat] = useState({
    name: currentCat.name,
    age: currentCat.age,
    enjoys: currentCat.enjoys,
    image: currentCat.image
  });

   const handleChange = (e) => {
    setEditCat({...editCat, [e.target.name]: e.target.value })
   };

   const handleSubmit = () => {
    updateCat(editCat, currentCat.id)
    navigate(`/catshow/${currentCat.id}`)
   }


  return (
    <Form>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input 
          type="text" 
          name="name"    
          onChange={handleChange}
          value={editCat.name} />
      </FormGroup>
      <FormGroup>
        <Label for="age">Age</Label>
        <Input 
          type="number" 
          name="age"
          onChange={handleChange}
          value={editCat.age}/>
      </FormGroup>
      <FormGroup>
        <Label for="enjoys">Enjoys</Label>
        <Input 
          type="text"
          name="enjoys"
          onChange={handleChange}
          value={editCat.enjoys} />
      </FormGroup>
      <FormGroup>
        <Label for="image">Image URL</Label>
        <Input 
          type="text" 
          name="image"
          onChange={handleChange}
          value={editCat.image} />
      </FormGroup>
      <Button onClick={handleSubmit} name="submit">
          Submit
      </Button>
    </Form>
  );
};

export default CatEdit;