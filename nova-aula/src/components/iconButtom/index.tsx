import { IconType } from "react-icons";
import { Button } from "../Button";

export interface iIconBurronprops {
    icon: IconType;
}



const IconButton: React.FC<iIconBurronprops> = ({ icon: Icon}) =>(
 <Button variant="icon-button">
    <Icon/>
    </Button>
);

 export default IconButton;