import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Data(props) {
    const [data, setData] = useState([])
    const [searchTerm, setSearchTerm] = useState("");


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
                console.log("Done", res.data)
                setData(res.data)
            }).catch(err => console.log(err))
    }, [])

    const arr = data.map((data, index) => {
         if (searchTerm == data.id) {
            return (
                <tr>
                    <th>{data.id}</th>
                    <th>{data.title}</th>
    
                </tr>
            )
        }
       
    })

    return (
        <>
            <div className="App">
                <form>
                    <input type="text" name="id" placeholder="id:" onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }} />
                    <button>Click me</button>

                </form>
                <h1>use axios with react js</h1>
                <table>
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>

                        </tr>
                        {arr}
                    </tbody>
                </table>

            </div>
        </>
    )
}

export default Data
