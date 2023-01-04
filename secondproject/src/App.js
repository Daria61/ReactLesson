import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
function App() {
  const data = {
    welcome : "Welcome to component and props corner",
    title : "React",
    subtitle : "JS Library",
    user :{
      firstName  : "Jonh",
      lastName : "Sedrick"
    },
    techskill: ["HTML", "JS", "CSS", "React"],
    date : new Date()
  }
  const greetingPeople = ()=> {
    alert ("welcome to my corner")
    }
  const showDate = ()=>{
    let date = new Date();
    alert(date)
    } 
  return (
    <div className="container">
      <Header 
      welcome={data.welcome} 
      title = {data.title} 
      subtitle = {data.subtitle}/>
      <Main techs = {data.techskill} user={data.user} greetPeople ={greetingPeople}
      showDate = {showDate}/>
      <Footer date = {data.date}/>
    </div>
  );

}

export default App;
