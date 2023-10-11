import React, { useState } from 'react'
import Add from "../Components/Add"
import View from '../Components/View';
import Category from '../Components/Category';
import { Link } from 'react-router-dom';
import { Row,Col } from 'react-bootstrap';

function Home() {
  const [addResponse,setAddResponse] =useState({}) 
  return (

    <>
      <div className='container mt-5 mb-5 d-flex justify-content-between'>

        <div className='add'><Add setAddResponse={setAddResponse} /></div>
        <Link to={'/watch-history'} style={{textDecoration:'none'}}  className="fs-5">
          watch History
        </Link>

      </div>
      <div className='container'>
      <Row className=''>
          <Col className='all-videos col-lg-9 '>
            <h3>All Videos</h3>
            <div className='videos w-100 '>
                <View addResponse={addResponse} />
            </div>
          </Col>
          <Col className='category col-lg-3'>
            <Category />
          </Col>
      </Row>
      </div>


    </>

  )
}

export default Home