import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const AllUser = () => {
    const [isloaded , setISLoaded] = useState(false);
    const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://shrouded-depths-06602.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => {
        setISLoaded(false)
        setUsers(data)});
  }, [isloaded]);

  const handleButton = ()=> {
      setISLoaded(true)
  }
    return (
        <div>
            <h1>ALL user information from database</h1>
            <Button onClick={handleButton}>Load Again</Button>
            {
                users.map(user => <div key={user._id} className="m-3 shadow p-3">
                    <p>First Name : {user.firstName}</p>
                    <p>Last Name : {user.lastName}</p>
                    <p>Birthay : {user.birthday}</p>
                    <p>Contuct no : {user.contuct}</p>
                    <p>Addres : {user.address}</p>


                </div>)
            }
        </div>
    );
};

export default AllUser;