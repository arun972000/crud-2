


// eslint-disable-next-line react/prop-types
const Colorcard=({children})=>{
    return(<div className="col-lg-6 mb-4">
        {children}
            <div className="row">
                <div className="col-lg-6 mb-4"><div className="card bg-primary text-white shadow"><div className="card-body">Primary<div className="text-white-50 small">#4e73df</div></div></div></div>
                <div className="col-lg-6 mb-4"><div className="card bg-success text-white shadow"><div className="card-body">Success<div className="text-white-50 small">#4e73df</div></div></div></div>
                <div className="col-lg-6 mb-4"><div className="card bg-info text-white shadow"><div className="card-body">Info<div className="text-white-50 small">#4e73df</div></div></div></div>
                <div className="col-lg-6 mb-4"><div className="card bg-warning text-white shadow"><div className="card-body">Warning<div className="text-white-50 small">#4e73df</div></div></div></div>
                <div className="col-lg-6 mb-4"><div className="card bg-danger text-white shadow"><div className="card-body">Danger<div className="text-white-50 small">#4e73df</div></div></div></div>
                <div className="col-lg-6 mb-4"><div className="card bg-secondary text-white shadow"><div className="card-body">Secondary<div className="text-white-50 small">#4e73df</div></div></div></div>
                <div className="col-lg-6 mb-4"><div className="card bg-light text-black shadow"><div className="card-body">Light<div className="text-black-50 small">#4e73df</div></div></div></div>
                <div className="col-lg-6 mb-4"><div className="card bg-dark text-white shadow"><div className="card-body">Dark<div className="text-white-50 small">#4e73df</div></div></div></div>
            </div>
            
    </div>)
}

export default Colorcard