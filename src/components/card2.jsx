


// eslint-disable-next-line react/prop-types
const Card2=({children})=>{
    return(
    <div className="card mb-4">
    <div className="card-header py-3">
      Featured
    </div>
    <div className="card-body">
    {children}
    </div>
    
  </div>
)
}

export default Card2;