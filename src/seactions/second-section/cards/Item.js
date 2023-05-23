

const Item = ({title,img,price}) => {

  return (
   
    <div className="card">
  <img src={img} alt='' />
  <div className="card-body">
    <div>
      <h5 className="title">{title}</h5>
      <span>lorem ipsum dolor sit</span>
    </div>
    <div className="price-container">
      <span className="price">AED {price}</span>
      <span className="plan">On-plan</span>
    </div>
    <div className="sections">
      <div>
        <span>Quarterly</span>
        <span >paied returns</span>
      </div>
      <div>
        <span>20%</span>
        <span >annual yield</span>
      </div>
    </div>
    <button>Enquire Now</button>
  </div>
</div>

  )
}

export default Item