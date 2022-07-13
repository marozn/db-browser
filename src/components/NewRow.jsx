import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
export default function NewRow({update, uValue}) {
    const [string, setString] = useState(null);
    const [number, setNumber] = useState(null);
    const [bool, setBool] = useState(true);
    async function addRow() {
        if (string === null || number === null) return;
        await axios.post(`http://localhost:8080/create`,{'str': string, 'num': number, 'boo': bool}, {headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }});
        update(!uValue)
    }
  return (
    <div>Add a new row
        <Form onSubmit={(evt) => {}} className={'d-flex'}>
        <Form.Group className="mb-3" controlId="formBasicString" >
        
        <Form.Control type="text" placeholder="String" onChange={(evt)=>{setString(evt.target.value)}}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3 f" controlId="formBasicNum" >
        <Form.Control type="number" placeholder="Number" onChange={(evt)=>{setNumber(evt.target.value)}}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Select className="mb-3 f" onChange={(evt)=>{setBool(evt.target.value)}}>
        <option value={true} selected>True</option>
        <option value={false}>False</option>
    </Form.Select>
      <Button variant="success" onClick={addRow}>Add</Button>

        </Form>
    </div>
  )
}
