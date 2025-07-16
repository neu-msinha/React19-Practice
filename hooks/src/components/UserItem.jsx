import { useContext, use } from "react";
import { MyContext } from "../context";

const UserItem = () => {

    const context = use(MyContext);

    console.log(context);

    return (
        <div>
            UserItem
        </div>
    );
}       

export default UserItem;