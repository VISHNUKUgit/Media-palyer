import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {  addHistroy, deleteAVideo } from '../Services/allAPI';
function Videocard({ video, setDeleteStatus, udeleteStatus }) {
  // console.log("refresed", udeleteStatus);
  const { id, caption, url, embedlink } = video
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    // get caption and link
    const{caption,embedlink} = video
    // generate timeStamp
    let today = new Date()
    const timeStamp = new Intl.DateTimeFormat("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(today)
    // watch video to add json server
    let reqBody ={
      caption,embedlink,timeStamp
    }
    
    // make api call
    const response = await addHistroy(reqBody)
      //  const response = await addHistroy(reqBody)
       console.log(response);

  }

  const videoDelete = async (idToDelete) => {
    // console.log("before-delete",udeleteStatus);
    const deleteStatus = await deleteAVideo(idToDelete)
    setDeleteStatus(!udeleteStatus);
    // console.log("after delete",udeleteStatus);

  }

  return (
    <>

      <Card className='mb-3' style={{ height: "400px" }}>
        <Card.Img onClick={handleShow} className='w-100 ' variant="top" src={url} style={{ height: "250px" }} />
        <Card.Body className='d-flex justify-content-between align-items-center'>
          <Card.Title>
            {caption}
          </Card.Title>
          <i className="fa-solid fa-trash fa-lg" onClick={() => videoDelete(id)} style={{ cursor: "pointer", margin: 0 }} ></i>
        </Card.Body>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width={'100%'} height="315" src={`${embedlink}?autoplay=1&mute=1`} title="YouTube video player" frameborder="0" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Videocard