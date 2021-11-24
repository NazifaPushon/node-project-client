import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import AllUser from "./AllUser";
import "./App.css";

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = data => {
    console.log(data)
    const contuctInString = data.contuct.toString()
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const valid =  regex.test(data.email)
    
    if(data.firstName.length < 2 || data.lastName.length < 2 ){
      alert("give a valid Name")
      return;
    }
    if(!valid){
      alert("please Give a valid email")
      return;
    }
    if(contuctInString.length < 10){
      alert("please give a valid contuct number")
      return;
    }

    fetch('https://shrouded-depths-06602.herokuapp.com/addUser' , {
      method: "POST",
      headers: {
        'content-type':'application/json'
      },
      body:JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      alert('User added Successfully')
      console.log(data)})
  };


  
  return (
    <div className="App">
      
      <Container>
      <h1>Node Project is Creating</h1>
        <Row>
          <Col>
            <div>
            <Form action="" onSubmit={handleSubmit(onSubmit)}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First name" {...register("firstName", { required: true })} />
                {errors.firstName && <span>FirstName is required</span>}
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last name"  {...register("lastName", { required: true })}/>
                {errors.lastName && <span>Last Name is required</span>}
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Birthday</Form.Label>
                <Form.Control type="date" placeholder="Last name" {...register("birthday", { required: true })}/>
                {errors.birthday && <span>birthday is required</span>}
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" {...register("email", { required: true })}/>
                {errors.email && <span>email is required</span>}
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Contuct Number</Form.Label>
                <Form.Control type="number" placeholder="Number" {...register("contuct", { required: true })}/>
                {errors.contuct && <span>email is required</span>}
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Address"
                  style={{ height: '100px' }}
                  {...register("address", { required: true })}
                />
                {errors.address && <span>email is required</span>}
              </Form.Group>
              <Button type="submit" variant="primary">Submit</Button>
            </Form>
            </div>
          </Col>
          <Col>
          <AllUser/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
