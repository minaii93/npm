import './Kartya.css';
// jsx nxelven íródott kártya komponens
export default function Kartya (props){
    
    return(
        <div className="kartya">
            <h3>{props.obj.nev}</h3>
            <p>{props.obj.kor}</p>
        </div>
    )
}

