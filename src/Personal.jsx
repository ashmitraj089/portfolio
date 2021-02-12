import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';

function Personal(){
    return(
        <>
            <div className="card" >
                <div className="card-header">
                    <h1 style={{textAlign:'center',fontFamily:"'Abril Fatface', cursive",textShadow:'8px 8px 10px rgb(0,0,0,0.9)'}}>Personal Projects</h1>
                </div>
                <ul className="list-group list-group-flush" style={{fontFamily:"'Dancing Script', cursive"}}>
                    <li className="list-group-item" >
                        <h3 >Covid-19 Prediction Model</h3>
                        <span>Predicting Confirmed cases and Deaths in future due to Covid.</span>
                        <a href="https://github.com/ashmitraj089/Corona-Virus-COVID-19-Prediction" style={{float:'right'}}>
                            <Button className="project_button" variant="outlined" style={{border:'2px solid black'}}><GitHubIcon/></Button>
                        </a>
                    </li>
                    <li className="list-group-item" >
                        <h3 >Block Shooting Game</h3>
                            <span>Multilevel block shooting game developed in python</span>
                            <a href="https://github.com/ashmitraj089/shooting-game-python" style={{float:'right'}}>
                                <Button className="project_button" variant="outlined" style={{border:'2px solid black'}}><GitHubIcon/></Button>
                            </a>
                    </li>
                    <li className="list-group-item" >
                        <h3 >Machhine Learning Driven ChatBot</h3>
                            <span>Retrieval Based chatbot developed in python</span>
                            <a href="https://github.com/ashmitraj089/Retrieval-based-chatbot-in-python" style={{float:'right'}}>
                                <Button className="project_button" variant="outlined" style={{border:'2px solid black'}}><GitHubIcon/></Button>
                            </a>
                    </li>
                </ul>
            </div>
        </>
    )
}
export default Personal;