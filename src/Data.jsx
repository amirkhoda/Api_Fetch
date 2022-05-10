import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

function Data(props) {
    const [data, setData] = useState([])
    const [minIndex, setMinIndex] = useState(0)
    const [maxIndex, setMaxIndex] = useState(0)


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
                console.log("Done", res.data)
                setData(res.data)
            }).catch(err => console.log(err))
    }, [])

    // for (let i = 0; i < array.length; i++) {
    //     const element = array[i];

    // }

    const arr = data.map((data, index) => {
        if (minIndex <= (data.id) && (data.id) <= (maxIndex)) {
            // console.log(`${minIndex} : ${data.id} : ${maxIndex}`)
            return (
                <tr>
                    <td>{data.id}</td>
                    <td>{data.title}</td>
                </tr>
            )

        }

    })

    return (
        <body>
            <div className="text-center align-items-center mt-5 m-4  " >
                <form>
                    <div>
                        <label className="me-4">MIN :</label>
                        <input type="text" name="id" placeholder="Enter Your min number:" onChange={(event) => {
                            setMinIndex((event.target.value));
                        }} />
                    </div>
                    <div>
                        <label className="me-4 mt-4 ">Max :</label>
                        <input type="text" name="id" placeholder="Enter Your max number:" onChange={(event) => {
                            setMaxIndex((event.target.value));
                        }} />
                    </div>

                    <div class="form-text ms-3 mt-2">
                        Between 1-200 number
                    </div>
                </form>
                <h1 className="mt-5">use axios with react js</h1>
                <table class="table table-dark w-50 ms-auto me-auto mt-5 ">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Text</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arr}
                    </tbody>
                </table>
            </div>

        </body>
    )
}

export default Data
