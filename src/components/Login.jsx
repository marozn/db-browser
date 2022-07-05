import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import '../css/login.css'
import axios from 'axios';
export default function Login({loggedIn}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    async function login(evt) {
        evt.preventDefault()
        const res = await axios.post(`http://localhost:8080/login/${username}/${password}`);
        if (res.data === "error-auth") {
            setError(true)
        }
        else {
            localStorage.setItem('token', res.data.token);
            loggedIn(true)
        }

    }

  return (
    <Form onSubmit={(evt) => {login(evt)}} className={"login"}>
    <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Control type="text" placeholder="Username" onChange={(evt)=>{setUsername(evt.target.value)}}/>
            <Form.Text className="text-muted">
            </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" onChange={(evt)=>{setPassword(evt.target.value)}}/>
            <Form.Text className="text-muted">
            </Form.Text>
    </Form.Group>
    <Button type="submit" variant="primary">Login</Button>
    {error ? <div className='error'>Wrong username and/or password</div> : null}
    </Form>
  )
}
