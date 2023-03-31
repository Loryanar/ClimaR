import React, {useState} from"react"; 
import '../assets/css/form.css'

const Form =()=>{
    const [city, setCity]= useState("");

    const Click=(e) =>{
        e.preventDefault();
        console.log(city);
        if(city=== "" || !city) return;
    }

    return(

        <div className="containerF">
            <form onSubmit={Click}>
                <div className="inputF">
                    <input className="city" placeholder="Ciudad" onChange={(e)=>setCity(e.target.value)}></input>
                    <button className="buttonF">Buscar</button>
                </div>
            </form>
        </div>
    );
}
export default Form;