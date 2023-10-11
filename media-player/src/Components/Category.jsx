import React, { useEffect, useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { getSavedCategory, saveCategory, deleteSavedCategory} from '../Services/allAPI';
function Category() {
  const [categoryName,setCategoryName] = useState("")
  const [show, setShow] = useState(false);
  const [allCategory,setAllCategory] = useState([])
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAddCategory = async ()=>{
    if(categoryName){

      const body = {
        categoryName
      }
      //Make Api call
      const response = await saveCategory(body)
      console.log(response.status)
      handleClose()
      setCategoryName("")

    }else{
toast.warning("Upload error")
    }

  }

  // 

  const handleGetAllCategory = async ()=>{
    const {data} = await getSavedCategory()
    setAllCategory(data)
  }

console.log(allCategory);
  useEffect(()=>{
    handleGetAllCategory()
  },[show])

const hanldeDeleteCategory = async (idToDelete)=>{
  const response = await deleteSavedCategory(idToDelete)
  console.log(response);
  handleGetAllCategory()
}
  return (
    <>
    <div className="d-grid">
    <button onClick={handleShow} className="btn btn-info" variant="primary">
          Add New Category
        </button>
        {
          allCategory.map((item,index)=>(
              <div className='border mt-3 mb-3 p-3 rounded'>
                <div className='d-flex justify-content-between align-items-center'>
                <h3>{item.categoryName}</h3>
                <button className='btn' onClick={()=>hanldeDeleteCategory(item?.id)} ><i className='fa-solid fa-trash text-danger' ></i> </button>
              </div>
             </div> 
            
          ))

          
        }
    </div>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Upload A Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please Fill the following details </p>
          <Form >

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter Category Name" onChange={(e)=>setCategoryName(e.target.value)} />
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter Category ID" />
            </Form.Group> */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>Add</Button>
        </Modal.Footer>
      </Modal>
    
    </>
  )
}

export default Category