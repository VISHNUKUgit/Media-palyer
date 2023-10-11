import React from 'react'
import '../App.css'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
function LandingPage() {
  const navigateByUrl = useNavigate()
  const navigate = ()=>{
    navigateByUrl("/home")
  }
  return (
    <div>
    <div className='conatiner'>
      <div className='wrapper '>
        <div className='left'>
          <h1>Welcome to <span>Media Player</span></h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quod id perspiciatis vitae porro velit aliquam ratione officiis optio, incidunt repellendus magni magnam ex sapiente tenetur dicta? Ipsa, quae velit.
          </p>
          <button onClick={navigate}>
            Get strated
          </button>

        </div>
        <div className='right'>
           <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/http://gifsoutloud.com/wp-content/uploads/2020/12/source.gif" alt="" />
        </div>
      </div>
      
    </div>
    <div className="conatiner">
    <div className="wrapper " style={{display: "flex",justifyContent: "space-between",alignItems:"center"}}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className='ci' style={{ backgroundColor: "black" }} src="https://media2.giphy.com/media/tVhJw24Gv8FGGlnjDN/giphy.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className='ci' src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/http://gifsoutloud.com/wp-content/uploads/2020/04/iu.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" className='ci' src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/http://gifsoutloud.com/wp-content/uploads/2020/03/giphy-9.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
      </div>
    </div>
    <div className="conatiner">
    <div className="wrapper " style={{display: "flex",justifyContent: "space-between",alignItems:"center"}}>
      <div className="vil">
        <h1>somthing to write</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sequi aliquam dolore assumenda odio quas? Aliquid eius et voluptate beatae praesentium sapiente est facere doloribus enim numquam! Architecto, consequuntur incidunt.</p>
      </div>
      <div className="vir">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/RgKAFK5djSk?si=i4lRV9sWi8V2Y3UW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      </div>
    </div>
    </div>
  )
}

export default LandingPage