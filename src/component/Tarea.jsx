import React, {Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import {Card, Button, Col} from 'react-bootstrap';
import './Formulario.css';


const Tarea = ( {tarea, completarTarea} ) => {

    return (
        <Fragment>
            <Col>
                <Card className = "text-center mt-4">
                    <Card.Body>
                        <Card.Title>{tarea.titulo}</Card.Title>
                        <Card.Text>{tarea.descripcion}</Card.Text>
                        <Button 
                            variant="primary"
                            onClick={ () => completarTarea(tarea.id)}>
                            Completa
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
        </Fragment>
    );
}

export default Tarea;
