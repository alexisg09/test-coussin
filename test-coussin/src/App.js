import './App.css';
import {useState} from "react";
import coussin1 from './images/coussins/1.png'
import coussin2 from './images/coussins/2.png'
import coussin3 from './images/coussins/3.png'
import coussin4 from './images/coussins/4.png'
import coussin5 from './images/coussins/5.png'
import coussin6 from './images/coussins/6.png'
import coussin7 from './images/coussins/7.png'
import coussin8 from './images/coussins/8.png'
import coussin9 from './images/coussins/9.png'
import coussin10 from './images/coussins/10.png'

function App() {
    const [nbCoussins, setNbCoussins] = useState(1)


    const addCoussin = () => {
        setNbCoussins(nbCoussins + 1)
        renderCoussin()
        return nbCoussins
    }

    const removeCoussin = () => {
        if (nbCoussins !== 0) {
            setNbCoussins(nbCoussins - 1)
        }
        renderCoussin()
        return nbCoussins
    }
  //  {`#demo${this.state.id}`}

    const renderCoussin= () => {
        switch (nbCoussins){
            case 1 :
                return coussin1
                break;
            case 2 :
                return coussin2
                break;
            case 3 :
                return coussin3
                break;
            case 4 :
                return coussin4
                break;
            case 5 :
                return coussin5
                break;
            case 6 :
                return coussin6
                break;
            case 7 :
                return coussin7
                break;
            case 8 :
                return coussin8
                break;
            case 9 :
                return coussin9
                break;
            case 10 :
                return coussin10
                break;
        }
    }


    return (
        <div className="App">
            <div className={nbCoussins % 2 ? "App-header-pair" : "App-header-impair"}>
                <img src={renderCoussin()} />
                <div className="toggler">
                    {(nbCoussins > 1) && (<button onClick={removeCoussin}>
                        -
                     </button>)}
                    <div>{nbCoussins}</div>
                    {(nbCoussins < 10) && (<button onClick={addCoussin}>
                        +
                    </button>)}
                </div>
            </div>
        </div>

    );
}

export default App;
