import React, {useState} from 'react'
import '../css/row.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
export default function Row({id, str, num, boo, update, uValue}) {
    const [string, setString] = useState(null);
    const [number, setNumber] = useState(null);
    const [bool, setBool] = useState(null);

  async function updateRow() {
    const newString = string === null ? str : string
    const newNumber = number === null ? num : number
    const newBool = bool === null ? boo : bool
    await axios.put(`http://localhost:8080/update/${id}`,{'str': newString, 'num': newNumber, 'boo': newBool}, {headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }});
  }
  async function deleteRow() {
    await axios.delete(`http://localhost:8080/delete/${id}`, {headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }});
    update(!uValue)
  }
  return (
    <Form onSubmit={(evt) => {}} className={'i d-flex'}>
    <div className="b">
        {id}
      </div>
      <Form.Group className="mb-3 f" controlId="formBasicString" >
        
        <Form.Control type="text" placeholder="String" defaultValue={str} onChange={(evt)=>{setString(evt.target.value)}}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3 f" controlId="formBasicNum" >
        <Form.Control type="number" placeholder="Number" defaultValue={num} onChange={(evt)=>{setNumber(evt.target.value)}}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Select className="mb-3 f" onChange={(evt)=>{setBool(evt.target.value)}}>
        <option value={true} >True</option>
        {!boo ?  <option value={false} selected>False</option> : <option value={false}>False</option>}
    </Form.Select>
      <Button variant="success" onClick={updateRow}>Update</Button>
      <Button variant="danger" onClick={deleteRow}>Delete</Button>
    </Form>
  )
}
