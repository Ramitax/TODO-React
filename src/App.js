import React, {Fragment, useState, useEffect } from 'react';
import logo from './assets/logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col, Navbar} from 'react-bootstrap';
import Formulario from './component/Formulario';
import Tarea from './component/Tarea';


function App() {

  const [tareas, editarTareas] = useState([]);

  const agregarTarea = (tarea) => {
    editarTareas([
      ...tareas,
      tarea
    ]);
  }

  const completarTarea = (id) => {
    const newTareas = tareas.filter( tarea => tarea.id !== id);
    editarTareas(newTareas);
  }

  useEffect(() => {
    if (tareas.length > 0 ) {
      localStorage.setItem('tareas', JSON.stringify(tareas));
    }
  }, [tareas]);

  useEffect(() => {
    const tareas = JSON.parse(localStorage.getItem('tareas'));
    if (tareas) {
      editarTareas(tareas);
    }
  }, []);

  return (
    <Fragment>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} width="30" height="30" className="d-inline-block align-top"/>
            {' '}TODO List
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Row>
        <Col>
          <Container className='mt-2'>
            <Formulario
              agregarTarea = {agregarTarea}
            />
          </Container>
        </Col>
        <Col>
          <Container className='mt-5 w-100 row row-cols-2'>
            {
              tareas.map( (tarea) => {
                return <Tarea
                          tarea = {tarea}
                          completarTarea = {completarTarea}
                          key= {tarea.id}
                        />
              })
            }
          </Container>
        </Col>
      </Row>
    </Fragment>
  );
}

export default App;
