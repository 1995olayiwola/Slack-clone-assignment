import React from 'react';
import {Form,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Home =()=> {
    const[formValues,setFormValues] = React.useState({});
    const handleChange = (e) =>{
        setFormValues({...formValues,[e.target.name]:e.target.value})
        console.log('input field', e.target.value);
e.preventDefault();
    }
    const handleSubmit =(e) =>{
        e.preventDefault();
        
        
        console.log('formValues is', formValues)

    }
    return (
        <div>
            <div className="container">
         <Form onSubmit={handleSubmit}>
             
  <Form.Group controlId="formBasicText" onChange={handleChange} name="name" >
    <Form.Label>Write your content here</Form.Label>
    <Form.Control type="text" placeholder="Enter your message" />
    
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>

</Form>
      </div>

       </div> 
    )
}

export default Home;
