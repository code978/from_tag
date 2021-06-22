import React from 'react'
import { useState } from 'react';


const UserData = () => {

    const [choreDesc, setChoreDesc] = useState();
    const [name, setName] = useState();
    const [date, setDate] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(choreDesc,name,date)
    }

    return (
        <div>
            <form onSubmit={e => { handleSubmit(e) }}>
            <h1> please enter user data</h1>
            <h1>{choreDesc}  {name} {date}</h1>
                <label>Chore description:</label>
                <br />
                <input
                    name='choreDesc'
                    type='text'
                    value={choreDesc}
                    onChange={e => setChoreDesc(e.target.value)}
                />
                <br />
                <label>Name:</label>
                <br />
                <input
                    name='name'
                    type='text'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <br />
                <label>Date:</label>
                <br />
                <input
                    name='date'
                    type='date'
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
                <br />
                <input
                    type='submit'
                    value='Add Log'
                />
            </form>
            )

        </div>
    )
}

export default UserData;
