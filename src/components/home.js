import "./home.css"
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';



function Home() {
    const navigate=useNavigate();
    

    return (
        <div>
        <h1>Welcome
        <button className="signout-btn" onClick={()=>{auth.signOut(); navigate('/')}} style={{ padding: "4px", margin: "3px", borderRadius: "10px" }}>Sign Out</button>
        <hr/>
        </h1>
        

        </div>
    )
}

export default Home;