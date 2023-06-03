import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'

function TableData() {

  const [data, setData] = useState([])

  useEffect(() => {
    getApiData()
  }, [])

  const deleteRecord = (index) => {
    var existingData = [...data]
    existingData.splice(index, 1)
    setData(existingData)
  }

  const getApiData = async () => {
    // axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
    //   setData(res.data)
    // })
    const apiData = await axios('https://jsonplaceholder.typicode.com/users')
    setData(apiData.data)
  }



  return (
    <>
      <Table bordered hover striped>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((row, index) => (
              <tr key={index}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.username}</td>
                <td>{row.email}</td>
                <td>
                  <Button variant='warning' onClick={() => alert("Update Clicked " + row.id)} >Update</Button> &nbsp;
                  <Button variant='danger' onClick={() => {
                    deleteRecord(index)
                  }}>Delete</Button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </>
  )
}

export default TableData
