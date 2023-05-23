import image1 from '../../../assets/image1.jpeg'
import image2 from '../../../assets/image2.jpg'
import image3 from '../../../assets/image3.jpg'
import image4 from '../../../assets/image4.jpeg'
import './style.css'


const Images = () => {
    return (

        <div className="images-container">
            <div className='left'>
                <img src={image1} alt='img' />
                <img  src={image4} alt='img' />
            </div>
            <div className='right'>
                <img  src={image2} alt='img' />
                <img  src={image3} alt='img' />
            </div>


        </div>



    )
}

export default Images