import { ImgHTMLAttributes } from "react"
import styleAvatar from "./Avatar.module.css"

// export function Avatar(props){
//     const hasBorder = props.hasBorder !== false;

//     return (
//         <img 
//             className={hasBorder ? styleAvatar.avatarWithBorder : styleAvatar.avatar} 
//             src="props.src" 
//         />
//     );
// }

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
    return (
        <img 
            className={hasBorder ? styleAvatar.avatarWithBorder : styleAvatar.avatar} 
            {...props}
        />
    );
}