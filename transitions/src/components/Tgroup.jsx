import { createRef, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


const Tgroup = () => {
    let [items,setItems] = useState([
        // {number: 67, nodeRef: createRef(null)}
    ]);
    
    const addElements = () => {
        return items.map((item,i)=>(
            <CSSTransition
                key={i}
                nodeRef={item.nodeRef}
                timeout={500}
                classNames="item"
            >
            <div ref={item.nodeRef} className="item" key={i}>{item.number}</div>
            </CSSTransition>
        ))
    }

    const generateNumber = () => {
        // let newArray = [
        //     ...items,
        //     Math.floor(Math.random()*100)+1
        // ];

        let newItem = {
            number: Math.floor(Math.random()*100)+1,
            nodeRef: createRef(null)
        }
        setItems(prev => [...prev, newItem])
    }

    const removeNumber= () => {
        let newArray = items.slice(0,-1);
        setItems(newArray)
    }


    return(
            <div className="tgroup">
                <TransitionGroup className="list" component="div">
                    {addElements()}
                </TransitionGroup>
             
                <div className="btns">
                    <button onClick={()=> generateNumber()}>Add Elements</button>
                    <button onClick={()=> removeNumber()}>Remove Elements</button>
                </div>
            </div>
    )
    
}


export default Tgroup;