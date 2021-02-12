function Academic(){
    return(
        <div>
            <div className="card" style={{backgroundColor:'#3d3e40'}}>
                <div className="card-header">
                    <h1 style={{color:'white',textAlign:'center',fontFamily:"'Abril Fatface', cursive",textShadow:'8px 8px 10px rgb(255,255,255,0.2)'}}>Academic Details</h1>
                </div>
                <ul className="list-group list-group-flush" style={{fontFamily:"'Dancing Script', cursive"}}>
                    <li className="list-group-item " style={{backgroundColor:'#3d3e40', color:'white'}}>
                        <h3>Bachelor of Engineering</h3> <span style={{textAlign:'center'}}>Dept. of Pharmaceutical Technology, Jadavpur University, Kolkata
                        </span>
                        <span style={{float:'right'}}>S.G.P.A - 8.00</span>
                    </li>
                    <li className="list-group-item " style={{backgroundColor:'#3d3e40', color:'white'}}>
                        <h3>Higher Secondary</h3><span>Bhuvneshwari Dayal College, Patna</span>
                        <span style={{float:'right'}}>73.2%</span>
                    </li>
                    <li className="list-group-item " style={{backgroundColor:'#3d3e40', color:'white'}}>
                        <h3>Senior Secondary</h3><span>Model st. Micheals High School, Patna</span>
                        <span style={{float:'right'}}>86%</span>
                    </li>
                </ul>
            </div>
        </div>

    )
}
export default Academic;