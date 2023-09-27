import React, { useEffect, useState } from 'react';
import "./todo.css";
import axios from "axios";

const Todo = () => {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  function handledata(e) {
    setItem(e.target.value);
  }
  

  /////////send data to db///////////////////////
  function senddata() {
    axios.post("http://localhost:4000/api/list", { data: item })
      .then((res) => {
        setItem("");
        
      })
      .catch((error) => console.log(error));
  }


  ////////////////get data from db/////////////////////

  function getdata() {
    axios.get("http://localhost:4000/api/list/getdata")
      .then((res) => {
        setList(res.data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getdata();
  }, [item]);


//////////////////delete item////////////////

    async function deleteitem(id){
    try {
     await  axios.delete(`http://localhost:4000/api/list/delete/${id}`)
      getdata()
    } catch (error) {
      console.log(error)
    }
 
}



////////////////////delete all //////////////////////



async function deleteall(){
  try {
    await axios.delete(`http://localhost:4000/api/list/delete/`)
    getdata()
  } catch (error) {
    console.log(error)
  }

}






  return (
    <div className='todo-main'>
      <h1>Add Your Task</h1>
      <input type='text' value={item} onChange={handledata}></input>
      <button onClick={senddata}>ADD</button>

      {list.map((e, index) => {
        return (
          <div className='list' key={index}>
            <h1>{`${index +1} ${e.name}`}</h1> {/* Assuming the server returns an object with 'name' property */}
            <button onClick={()=>deleteitem(e._id)}>X</button>
          </div>
        );
      })}
      {list.length !== 0 && <button onClick={deleteall}>Clear ALL</button>}
    </div>
  );
}

export default Todo;
