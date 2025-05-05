import PropTypes from 'prop-types';
function List(props)
{
    // array of strings
    // const fruits=["apple","orange","banana","grape"];

    
//     fruits.sort();
//     const  ListItems = fruits.map(fruit => <li>{fruit}</li>)
//   return(<ol>{ListItems}</ol>);


    // array of objects
    // const fruits=[
    //     {id:1, name:"apple",calories:95},
    //     {id:2, name:"banana",calories:105},
    //     {id:3, name:"grape",calories:62},
    //     {id:4, name:"orange",calories:78},
    // ];

    // const lowCalFruits = fruits.filter(fruit => fruit.calories<100);
    //   const highCalFruits = fruits.filter(fruit => fruit.calories>100);




    // custom sort function
    // fruits.sort((a,b)=>
    // a.name.localeCompare(b.name));

    // for reverse order
    // fruits.sort((a,b)=>
    // b.name.localeCompare(a.name));

    // for sorting by calories (numeric order )

    // fruits.sort((a,b)=>
    //     a.calories-(b.calories)
    // );


    // for reverse numeric order
    // fruits.sort((a,b)=>
    // b.calories-(a.calories));

    
    // const ListItems =fruits.map(fruit=>
    //     <li key={fruit.id}>
    //         {fruit.name}: &nbsp;
    //         <b>       
    //         {fruit.calories}
    //         </b>
    //         </li>

    const category = props.category;
    const itemList = props.items;

    const ListItems = itemList.map(item=>
        <li key={item.id}>
            {item.name}: &nbsp;
            <b>       
            {item.calories}
            </b>
            </li>

);      

    

    return(<>

        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{ListItems}</ol>

    </>);


   
}

List.defaultProps={
    category:"Category",
    items:[]
};
List.propTypes={
    category:PropTypes.string,
    items:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
        name:PropTypes.string.isRequired,
        calories:PropTypes.number.isRequired
    }))
};
List.propTypes.category = PropTypes.string.isRequired;



export default List;