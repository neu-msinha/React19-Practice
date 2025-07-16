import { useContext, use } from "react";
import { MyContext } from "../context";

const UserItem = () => {

    const context = use(MyContext);

    console.log(context);

    return (
        <div>
            {
                context.activeState ? 
                    context.users.map((user) => (
                        <div>
                            <h3 key={user.id}>{user.name}</h3>
                            <p>Age: {user.age}</p>
                            <hr/>
                        </div>
                    ))
                :null
            }
            <button onClick={context.setActive}>
                {context.activeState ? "Deactivate" : "Activate"}
            </button>
        </div>
    );
}       

export default UserItem;