import image1 from '../../../assets/image1.jpeg'
import './style.css'


const Images = () => {
    return (

        <div className="images-container">
            <div className='left'>
                <img src={image1} alt='img' />
                <img  src={image1} alt='img' />
            </div>
            <div className='right'>
                <img  src={image1} alt='img' />
                <img  src={image1} alt='img' />
            </div>


        </div>



    )
}

export default Images