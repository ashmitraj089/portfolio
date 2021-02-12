

function Slider(){
    return(
        <>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" style={{backgroundColor:'#3d3e40'}}>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img style={{marginLeft:'35%', width:'25%', height:'50vh',boxShadow:'0px 8px 15px rgb(0,0,0,0.9)'}} src="https://pbs.twimg.com/profile_images/1279452027991371778/-mkuyhjZ.jpg" alt="First slide"/>
                </div>
                <div className="carousel-item">
                <img style={{marginLeft:'35%', width:'25%', height:'50vh',boxShadow:'0px 8px 15px rgb(0,0,0,0.9)'}} src="https://yt3.ggpht.com/a/AGF-l7-_b35EjMh3sffVQFyqHxAPj_O9fVJuoOmwMg=s288-c-k-c0xffffffff-no-rj-mo" alt="Second slide"/>
                </div>
                <div className="carousel-item">
                <img style={{marginLeft:'35%', width:'25%', height:'50vh',boxShadow:'0px 8px 15px rgb(0,0,0,0.9)'}} src="https://media-exp1.licdn.com/dms/image/C5603AQEZbvEphMR8AQ/profile-displayphoto-shrink_200_200/0/1609676083154?e=1615420800&v=beta&t=C5_VCZfokmLfdslDoOKgWfVmOQJi4JrzLaPf9sSNiso" alt="Third slide"/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
        </>
    )
}
export default Slider