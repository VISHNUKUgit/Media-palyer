import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { Row, Col } from 'react-bootstrap'
import { getAllvideos } from '../Services/allAPI'
function View({addResponse}) {
  const [allVideos,setAllVideos] = useState([])
  const [udeleteStatus,setDeleteStatus] = useState(false)
  const getAllUploadedVideos = async()=>{
    //make api call
    const {data} = await getAllvideos()
    setAllVideos(data);
  }
useEffect(()=>{
  getAllUploadedVideos()
},[addResponse,udeleteStatus])
// console.log(allVideos);
// console.log("viwe",udeleteStatus);
  return (
    <Row>
      {
        allVideos.length>0?
        allVideos.map((video)=>(
          <Col key={video.id} sm={12} md={6} lg={4} xl={3}>
        <Videocard video={video} setDeleteStatus={setDeleteStatus}  udeleteStatus={udeleteStatus}/>
      </Col>
        ))
        : <p className='fw-bolder mt-3 fs-5 text-danger'>Nothing to display</p>
        
      }
    </Row>
  )
}

export default View