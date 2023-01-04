export default function Button ({text,status, func}){
    const Style = {
        backgroundColor : status ? "green": "red",
        color : "white",
        padding : "15px",
        borderRadius : "10px",
    }
    return <button style= {Style} onClick={func}  >
        {text}
    </button>
}