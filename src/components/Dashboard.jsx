import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import '../css/dashboard.css'
import axios from 'axios';
import Row from './Row';
import NewRow from './NewRow';
export default function Dashboard({loggedIn}) {
    const [data, setData] = useState('');
    const [update, setUpdate] = useState(false);
    function logout() {
        localStorage.removeItem("token")
        loggedIn(false)
    }
    useEffect(() => {
        async function getData()
        {
            const res = await axios.get(`http://localhost:8080/read`, {headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }});
            return res.data
        }
        getData().then((d) => { 
            setData(d)
        })
      }, [update]);
      console.log(data)
  return (
    
    <div>
         <Button variant="danger" onClick={logout}>Logout</Button>
         {data === '' ? null : data.map((row)=>{return <Row id={row.id} str={row.str} num={row.num} boo={row.boo} update={setUpdate} uValue={update}></Row>})}
         <NewRow update={setUpdate} uValue={update}></NewRow>
    </div>
  )
}
