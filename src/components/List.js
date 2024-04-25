import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';



const List = () => {
 const [users, setUsers] = useState([]);

 useEffect(() => {
  async function getUsers() {
   try {
    const user = await axios.get("http://localhost:8000/appoints")
    // console.log(students.data);
    setUsers(user.data);
   } catch (error) {
    console.log("Something is Wrong");
   }
  }
  getUsers();
 }, [])

 const handleDelete = async id => {
  await axios.delete(`http://localhost:8000/appoints/${id}`);
  var user = users.filter((item) => {
   // console.log(item);
   return item.id !== id;
  })
  setUsers(user);
 }
const handlePrint = () => {

} 

 return (
  <>
   
    <table className='tablelist'>
     <thead>
      <tr style={{ backgroundColor: "#616161" }} >
       <td>S.No</td>
       <td>ID</td>
       <td>NAME</td>
       <td>AGE</td>
       <td>GENDER</td>
       <td>DATE</td>
       <td>TIME</td>
       <td>PHONE</td>
       <td>ADDRESS</td>
       <td>ACTION</td>
      </tr>
     </thead>
     <tbody>
      {
       users.map((user, i) => {
        return (
         <tr key={i} >
          <td>{i + 1}</td>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.age}</td>
          <td>{user.gender}</td>
          <td>{user.date}</td>
          <td>{user.time}</td>
          <td>{user.phone}</td>
          <td>{user.address}</td>
          <td className=' d-flex actionbtn'>
           
            <button className='m-1'><Link to={`/view/${user.id}`} >View</Link></button>
            <button className='m-1' onClick={() => handleDelete(user.id)}>Delete</button>
           
          </td>
         </tr>
        )
       })
      }

     </tbody>
    </table>
  </>
 )
}

export default List






