import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import CardsData from './CardsData';
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/actions';

const Cards = () => {
  const [data, setData] = useState(CardsData);
  const dispatch = useDispatch();

  const addToCart = function(item:any){
    // console.log(item);
      dispatch(ADD(item));
  }
  return (
    <>
    <h1 className='text-center mt-3'> Cards Data</h1>
     <div className='container mt-3'>
      <div className='row d-flex justify-content-center align-items-center'>
      {
      data.map((item:any,index:any)=>(
        <Card   key={index} style={{ width: '20rem', }} className='mx-2 mt-4 card_style'>
        <Card.Img variant="top" src={item.imgdata} style={{ height: '16rem', }} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.somedata}
          </Card.Text>
          Price :₹  {item.price}
          <div className='d-flex justify-content-center align-items-center'>
          <Button variant="primary" className='col-lg-12' onClick={()=>addToCart(item)}>Add to cart</Button>
          </div>
        </Card.Body>
         </Card>
        
        ))
      }
        </div>
        </div> 

    </>

  )
}

export default Cards