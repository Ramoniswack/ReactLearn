import Card from './Card.jsx';
import Button from './Button.jsx';
import Student from './Student.jsx';
import UserGreeting from './UserGreeting.jsx';
import List from './List.jsx';
function App() {


  const fruits=[
    {id:1, name:"apple",calories:95},
    {id:2, name:"banana",calories:105},
    {id:3, name:"grape",calories:62},
    {id:4, name:"orange",calories:78},
];

const vegetables=[
  {id:6, name:"potatoes",calories:110},
  {id:7, name:"celery",calories:15},
  {id:8, name:"carrots",calories:25},
  {id:9, name:"corn",calories:63},
];



  return(
 
    <>
    {/* <Card/>
    <Button/>
      <Student name="RAMON" age={30} isStudent={true}/>
      <Student name="Namrata" age={18} isStudent={true}/>
      <Student name="Subash" age={42} isStudent={false}/>
      <Student name="Ram" age={27} isStudent={false}/>
      <Student/>
      <Student/> */}
{/* 
      <UserGreeting isLoggedIn={true} username="R.a.mon"/>
       */}

    {/* <List/> */}
    
   {fruits.length > 0 ?  <List items={fruits} category="Fruits" /> : null}
  <List items={vegetables} category="Vegetables" />

    </>


  );


}

export default App
