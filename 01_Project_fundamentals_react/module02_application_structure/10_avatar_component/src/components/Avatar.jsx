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

export function Avatar({ hasBorder = true, src }){
    // const hasBorder = props.hasBorder !== false;

    return (
        <img 
            className={hasBorder ? styleAvatar.avatarWithBorder : styleAvatar.avatar} 
            src={src} 
        />
    );
}