/* eslint-disable react/prop-types */



const Chart = ({ width, children }) => {
    return (<div className={`${width} mb-4`}>
        <div className="card">
            <div className="card-header py-3">
                Featured
            </div>
            <div className="card-body p-3">
                {children}
            </div>
        </div>
    </div>)
}

export default Chart;