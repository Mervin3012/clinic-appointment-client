import React,{useEffect,useState} from 'react'
import Axios  from 'axios'


function CrudPage()
{

    const [clientName,setclientName]=useState("")
    const [description,setDescription]=useState("")
    const [clientList,setpatientList]=useState([]);
    const [newclientName,setNewclientName]=useState("")

    useEffect(()=>{
        fetchData();
    },[])

    //AddFoodData

    const addclinicData=()=>{
        Axios.post("http://localhost:3001/insert",{clinicName,description})
        .then((response)=>{
            console.log(response);
            alert("Data Added");
            })
            .catch((err)=>{
                console.log(err);
                })
            }
  //get the data
  const fetchData=()=>{
    Axios.get('http://localhost:3001/read').then((response)=>{
        console.log(response.data);
        setclientList(response.data);
    })
  }
  //update
  const updatename=(id)=>{
    Axios.put('http://localhost:3001/update',{id,newFoodName})
    .then(()=>fetchData())
  }

  //delete
  const deleteclient=(id)=>{
    alert("Delete")
    Axios.delete(`http://localhost:3001/delete/${id}`).then(()=>fetchData())
  }
    return(
        <div className='container'>
            <h2>CRUD PAGE</h2>
            <div className='mb-3'>
               <input type='text' className='form-control' placeholder='clientName'required
               onChange={(e)=>setName(e.target.value)}
               />
            </div>
            <div className='mb-3'>
                <input type='text' className='form-control' placeholder='FoodDescription'required
                onChange={(e)=>setDescription(e.target.value)}
                />
            </div>
            <div className='mb-3'>
                <button className='btn btn-primary' onClick={addFoodData}>Addlist</button>
            </div>
            <table className='table table-bordered table-striped'>
               <thead className='table-dark'>
               <tr>
                <th>clinicName</th>
                <th>clinicDescription</th>
                <th>Edit</th>
                <th>Delete</th>
               </tr>
               </thead>
               <tbody>
                {foodList.map((val,key)=>(
                   <tr key={key}>
                     <td>{val.clientName}</td>
                     <td>{val.description}</td>
                     <td>
                        <input type="text" placeholder='updateName' onChange={(e)=>setNewclinicName(e.target.value)}/>
                        <button onClick={()=>updatename(val._id)}>Edit</button>
                     </td>
                     <td><button onClick={()=>delete(val._id)}>Delete</button></td>
                   </tr>
                ))}
              
               </tbody>
            </table>
        </div>
        
    )
}

export default CrudPage;