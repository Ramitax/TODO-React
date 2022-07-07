import React, {Fragment, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Form, Button, Alert} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import './Formulario.css';


const Formulario = ( {agregarTarea} ) => {

    const [tarea, editarTareas] = useState({
        titulo: "",
        descripcion: ""
    });

    const [error, setError] = useState(false);

    const {titulo, descripcion} = tarea;

    const handleChange = (e) => {
        editarTareas({
            ...tarea,
            [e.target.name] : e.target.value,
        });
    }

    const submitForm = (e) => {
        e.preventDefault();
        if(titulo.trim() === '') {
            setError(true);
            return;
        }
        setError(false);
        tarea.id = uuidv4();
        agregarTarea(tarea);
        editarTareas({
            titulo: "",
            descripcion: ""
        });
    };

    return (
        <Fragment>
            <Form onSubmit = {submitForm}>
                <Form.Group 
                    className = "mb-3">
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control 
                        type = "text" 
                        placeholder = "Titulo"
                        name = "titulo"
                        onChange = {handleChange}
                        value = {titulo}
                    />
                </Form.Group>
                <Form.Group 
                    className="mb-3">
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control
                        as = "textarea" 
                        rows = {2}
                        placeholder = "Descripcion"
                        name = "descripcion"
                        onChange = {handleChange}
                        value = {descripcion}
                    />
                </Form.Group>
                <div className = "d-grid gap-2 mt-3">
                    <Button 
                        variant = "primary" 
                        size = "lg" 
                        type = "submit">
                        Agregar tarea
                    </Button>
                </div>
            </Form>
            {
                error 
                    ?   <Alert  variant="danger"
                                className='mt-3'
                                onClose={() => setError(false)} 
                                dismissible>
                            <Alert.Heading>Ups! Ocurrio un error</Alert.Heading>
                            <p>
                                Recuerda que el titulo es obligatorio
                            </p>
                        </Alert>
                    : null
            }
        </Fragment>
    );
}

export default Formulario;
