import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


export default function BasicTable() {

const [courses, setCourses] = useState([]);



const deleteCourse = (id) => {

    axios.delete(process.env.REACT_APP_ENDPOINT + "/courses/"+id).then(res => {
        getCourses()
    }).catch(e => {
        console.log(e.response)
    })
}

const getCourses = () => {
   
    axios.get(process.env.REACT_APP_ENDPOINT + "/courses").then((res) => {
        setCourses(res.data.courses);
        
        
      
    }).catch((err) => {
        console.log(err);
    })
}
    useEffect(()=>{
        getCourses()
    })
  return (
      <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='center'>ID</TableCell>
            <TableCell align="center">Course Name</TableCell>
            <TableCell align="center">Start Date</TableCell>
            <TableCell align="center">Final Date</TableCell>
            <TableCell align='center'>Eiminar</TableCell>
            <TableCell align='center'>Editar</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {courses.map((course) => (
            <TableRow
              key={course.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell align="right">{course._id}</TableCell>
              <TableCell align="right">{course.course_name}</TableCell>
              <TableCell align="right">{course.fecha_inicio}</TableCell>
              <TableCell align="right">{course.fecha_fin}</TableCell>
              <TableCell align='center'><Button onClick={()=>{
                  deleteCourse(course._id);
              }}>Eliminar</Button></TableCell>
              <TableCell align='center'><Button component ={Link } to ={"/form/"+course._id}>Editar</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    <Button component ={Link } to ={"/form/0"}>Crear nuevo curso</Button>

    </div>
  );
}
