import { useState } from 'react'
import Item from './Item'
import './style.css'
import showMoreIcon from '../../../assets/caret-down.png'

const Cards = () => {
  const [cards,setCards]=useState([
    {title:'Consectetur Adipiscing',price:'6000,000',img:'https://i0.wp.com/dubaiproperties.org.in/wp-content/uploads/2015/12/image035.jpg-e1449897855909.jpg?fit=2048%2C1443&ssl=1'},
    {title:'Lorem ipsum Adipiscing',price:'1,900,000',img:'https://m.eyeofriyadh.com/news_images/3723707f45ca5.jpg'},
    {title:'Eiusmod Tempor',price:'500,000',img:'https://bucket-api.domain.com.au/v1/bucket/image/2014210238_1_1_230202_052341-w4000-h2664'},
  ])
  
  const AddCards= ()=>{
    const newItems =[
      {title:'Consectetur Adipiscing',price:'6000,000',img:'https://i0.wp.com/dubaiproperties.org.in/wp-content/uploads/2015/12/image035.jpg-e1449897855909.jpg?fit=2048%2C1443&ssl=1'},
      {title:'Lorem ipsum Adipiscing',price:'1,900,000',img:'https://m.eyeofriyadh.com/news_images/3723707f45ca5.jpg'},
      {title:'Eiusmod Tempor',price:'500,000',img:'https://bucket-api.domain.com.au/v1/bucket/image/2014210238_1_1_230202_052341-w4000-h2664'},
    
    ]
cards.push(...newItems)
setCards([...cards])

  }
  return (
    <>
    <div className='cards'>
      {cards.length>0?cards.map(e=>{
        return <Item title={e.title} price={e.price} img={e.img}/>
      }):null}

  
    </div>
      
      <div className='load-more'>
        <span onClick={AddCards}>Load More</span>
        <img style={{width:'13px'}} src={showMoreIcon} alt='icon'/>
       
      </div>
    </>
  )
}

export default Cards