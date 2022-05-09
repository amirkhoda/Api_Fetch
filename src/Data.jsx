import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

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
                <div>
                    <table class="table table-bordered table-success ">
                        <tr>
                            <th>{data.id}</th>
                            <th>{data.title}</th>

                        </tr>
                    </table>
                </div>
            )

        }

    })

    return (
        <>
            <div className=" text-center mt-5 m-4" >
                <form>
                    <input type="text" name="id" placeholder="id:" onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }} />
                </form>
                <h1 className="mt-5">use axios with react js</h1>
                <table class="table table-bordered table-success table-hover w-50  ">

                    <tr>
                        <th >Id</th>
                        <th >Title</th>

                    </tr>
                    {arr}


                </table>

            </div>
        </>
    )
}

export default Data
