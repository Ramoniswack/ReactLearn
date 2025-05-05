import PropTypes from 'prop-types';

function Student(props)
{
    return(

        <div className="student-card">
            <p> Name: {props.name} </p>
            <p> Age: {props.age}</p>
            <p> Student: {props.isStudent ? "Yes" : "No"}</p>

        </div> 
    )

}
Student.protoTypes = 
{
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

// Default props are used when the parent component does not pass any value to the child component.
// it is deprecated in the latest version of React, but still works.
// It is recommended to use default values in the parent component instead of using default props in the child component.


Student.defaultProps =
{
    name: "Guest",
    age: 0,
    isStudent: false,
}
export default Student; 