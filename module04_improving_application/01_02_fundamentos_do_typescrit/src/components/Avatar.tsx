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

interface AvatarProps{
    hasBorder?: boolean;
    src: string;
    alt?: string;
}

export function Avatar({ hasBorder = true, src, alt }: AvatarProps) {
    return (
        <img 
            className={hasBorder ? styleAvatar.avatarWithBorder : styleAvatar.avatar} 
            src={src}
            alt={alt}
        />
    );
}