import React, {useState} from "react";

function ControlledForm() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState("")

    const submit = (e) => {
        e.preventDefault()
        alert(`Name: ${name}\nEmail: ${email}\nGender:${gender}`)
    }

    return(
        <form onSubmit={submit}>
            <div>
                <label>Name:</label>
                <input type="text" onChange={(e) => {setName(e.target.value)}} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" onChange={(e) => {setEmail(e.target.value)}} />
            </div>
            <div>
                <label><input type="radio" name="gender" onClick={(e) => {setGender("Male")}} required />Male</label>
                <label><input type="radio" name="gender" onClick={(e) => {setGender("Female")}} required />Female</label>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default ControlledForm