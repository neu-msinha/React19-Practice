import { useContext } from "react";
import { MyContext } from "../context";

const UserItem = () => {

    const context = useContext(MyContext);

    console.log(context);

    return (
        <div>
            UserItem
        </div>
    );
}       

export default UserItem;