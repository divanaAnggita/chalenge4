import React from 'react';
import Belanja from '../Image/Belanja.jpg'

class Home extends React.Component {
    render() {
        return(
            <div className="top-wrapper">
                <div className="containe">
                    <div className="top-txt">
                        <img src={Belanja} alt="Belanja"></img>
                        <br></br><br></br><br></br>
                    </div>
                </div>
             </div>
        )
    }
}

export default Home;
