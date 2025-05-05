import PropTypes from 'prop-types';

function UserGreeting(props)
{

    // Using if else statement
//    if(props.isLoggedIn)
//     {
//         return(
//             <h2> Welcome {props.username}</h2>
//         )
//     }
//     else{
//         return(
//             <h2> Please login to continue</h2>
//         )
//     };


 // two ways to use ternary operator

 const WelcomeMessage = <h2 className="Welcome-heading"> Welcome {props.username}</h2>
    const LoginMessage = <h2 className="Login-heading"> Please login to continue</h2>
return (

props.isLoggedIn ? WelcomeMessage : LoginMessage
   
// normally using ternary operator
    // <h2> {props.isLoggedIn ? 
    // <h2 className="Welcome-heading">Welcome {props.username} </h2> :
    // <h2 className="Login-heading">Please login to continue</h2> }</h2>
)


}
UserGreeting.proptypes=
{
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps=
{
    isLoggedIn: false,
    username: "YOUR NAME",
}

export default UserGreeting;