import Button from "./Button"
const Tech = ({techs})=>{
    return(
        <ul>
            {techs.map((a)=>(
                <li>{a}</li>
            )
            )}
        </ul>
    )
}

const UserCard = ({img, firstName, lastName}) =>{
    return(
        <div>
            <img src = {img ? img :"https://www.grovenetworks.com/images/easyblog_shared/July_2018/7-4-18/totw_network_profile_400.jpg"} alt = "user" width={150}/>
            <h4>{firstName} {lastName}</h4>
        </div>
    )
}
let imgPa = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
const users = [
    { img: "", firstName : "Bold", lastName :"Pagam"},
    { img: imgPa, firstName : "Bold", lastName :"Pagam"},
    { img: imgPa, firstName : "Bold", lastName :"Pagam"}
]

export default function Main({user, techs, greetPeople, showDate}){
    const userInfo ={ 
        ...user, 
        img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
    }
    return (
        <div>
            <div>
                <h4>Tech Stack</h4>
                <Tech techs = {techs}/>
                <UserCard {...userInfo}/>
                {users.map((userInfo) =>{
                    return <UserCard {...userInfo}/>
                })}
                <Button status = {true} text = "Greet people" func = {greetPeople}/>
                <Button status = {false} text = "Show date" func = {showDate}/>
            </div>
        </div>
    )
}