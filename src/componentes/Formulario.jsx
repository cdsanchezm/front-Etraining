import { Button } from "@mui/material"
import axios from "axios"
import { useState, useEffect} from "react"
import { useParams, Link } from "react-router-dom";

export default function Formulario(props){
    let { id } = useParams();
  
    const [course, setCourse] = useState({});

    const postCourse = () => {
        const course = {
            course_name: document.getElementById("course_name").value,
            fecha_inicio: document.getElementById("fecha_inicio").value,
            fecha_fin: document.getElementById("fecha_final").value,
        }
        axios
            .post(process.env.REACT_APP_ENDPOINT + "/courses", course)
            .then(res => {
                
                console.log(res);
            })
            .catch(e => {
                console.log(e.response);
            });
    };
    const putCourse = () => {
        const course = {
            _id: id,
            course_name: document.getElementById("course_name").value,
            fecha_inicio: document.getElementById("fecha_inicio").value,
            fecha_fin: document.getElementById("fecha_final").value,
        }
        axios.put(process.env.REACT_APP_ENDPOINT + "/courses/"+id,course).then(res => {
           
           
        }).catch(e => {
            console.log(e.response)
        })
    }

    const getCourse = () => {
   
       id !== "0" ? axios.get(process.env.REACT_APP_ENDPOINT + "/courses/"+id).then((res) => {
            setCourse(res.data.course);
           
        }).catch((err) => {
            console.log(err);
        })
        :setCourse({});
    }

    useEffect(()=>{
        getCourse()
    })

return(
// creando un formulario para crear un nuevo curso
<form>
<div>
<label>Nombre del curso</label>
<input type="text" name="nombre" id="course_name" />
</div>
<div>
<label>Fecha de inicio</label>
<input type="date" name="fecha_inicio" id="fecha_inicio" />
</div>
<div>
<label>Fecha de finalizacion</label>
<input type="date" name="fecha_final" id="fecha_final" />
</div>
<Button component={Link } to ='/' onClick={()=>{
    id !== "0" ? putCourse() : postCourse();
}}>Actualizar</Button>
</form>
)
}


