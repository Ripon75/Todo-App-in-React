import React from 'react';
import './ListItem.css'
import FlipMove from 'react-flip-move'

function ListItem(props){

    const items = props.items
    const listItems = items.map((item) =>{
        return <div className='list' key={item.key}> 
         <p>
         {item.text}
         <span>
             <button className='delete-btn'
             onClick={()=>props.deleteItem(item.key)}
             >Delete</button>
         </span>
         </p>        
        </div>
    })

    return (
        <div>
            <FlipMove duration={400} easing="ease-in-out">
            {listItems}
            </FlipMove>
           
        </div>
    );
};

export default ListItem;