import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'; // Note the import path
import { uploadVideos } from '../Services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setAddResponse}) {
  const [show, setShow] = useState(false);
  const[video,setVideo] = useState({
    id:"",caption:"",url:"",embedlink:""
  })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const extractUrl = (e)=>{
    const {value} = e.target
    if(value){
      const embedData =`https://www.youtube.com/embed/${value.slice(-11)}`
      setVideo({...video,embedlink:embedData})
    }else{
      setVideo({...video,embedlink:""})
    }
    
  }
  const handleUpload = async ()=>{
// get details of video
const {id,caption,url,embedlink} = video

// if video is empty or not 
if (!id || !caption || !url || !embedlink){
  toast.warning("please fill all")
}else{
  //make api call
  const response = await uploadVideos(video)
  // console.log(response);

  if(response.status >=200 && response.status <300){
    toast.success(`${response.data.caption} has been uploaded successfully!!!!!`)
    handleClose()
    setAddResponse(response.data)

  }else{
    // console.log(response);
    toast.error(`Uploading Error... Perform the operation after sometime`)
  }
}

  }
  // console.log(video);
  return (
    <>
      <div className="d-flex  align-items-center">
        <h5 style={{margin:0}}>Upload a video</h5>
        <button onClick={handleShow} className="btn">
          <i className="fa-solid fa-circle-plus  fa-2xl"></i>
        </button>
      </div>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Upload A Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill the following details </p>
          <Form >

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter Video ID" onChange={(e)=>setVideo({...video,id:e.target.value})} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter Video Caption" onChange={(e)=>setVideo({...video,caption:e.target.value})} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter Video Image URL" onChange={(e)=>setVideo({...video,url:e.target.value})} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter Youtube Video link" onChange={(e)=>extractUrl(e)} />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
      position='top-center'
      />
    </>
  );
}

export default Add;
