
const Button=({text}) =>{
    return(
        <button onClick={fetchResult}>
        {text}
        </button>
    )
}

function fetchResult() {
    console.log('Button clicked');    
}

export default Button
