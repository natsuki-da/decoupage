// import { useState } from "react";
// import * as S from "./DropdownMenu.styles"

// const DropdownMenu = () => {
//     const [isClicked, setIsClicked] = useState(false);
    
//     const handleDropdownMenu = () => {
//         setIsClicked((prevstate) => !prevstate)
//     }

//     return (
//         <S.DropdownMenu $isVisible={isClicked}>
//                     <ul>
//                         <li>Home</li>
//                         <li>About</li>
//                         <li>Courses</li>
//                         <li>Gallery</li>
//                         <li>Contact</li>
//                     </ul>
//                     {/* <S.HeaderLinks>
//                         <Link
//                             to={Paths.HOME}
//                             style={{
//                                 textDecoration: "none",
//                                 display: "flex",
//                                 alignItems: "center",
//                             }}
//                         >
//                             <S.HeaderLink>{Nav.HOME}</S.HeaderLink>
//                         </Link>
//                         <Link
//                             to={Paths.ABOUT}
//                             style={{
//                                 textDecoration: "none",
//                                 display: "flex",
//                                 alignItems: "center",
//                             }}
//                         >
//                             <S.HeaderLink>{Nav.ABOUT}</S.HeaderLink>
//                         </Link>

//                         <Link
//                             to={Paths.COURSE}
//                             style={{
//                                 textDecoration: "none",
//                                 display: "flex",
//                                 alignItems: "center",
//                             }}
//                         >
//                             <S.HeaderLink>{Nav.COURSE}</S.HeaderLink>
//                         </Link>

//                         <Link
//                             to={Paths.GALLERY}
//                             style={{
//                                 textDecoration: "none",
//                                 display: "flex",
//                                 alignItems: "center",
//                             }}
//                         >
//                             <S.HeaderLink>{Nav.GALLERY}</S.HeaderLink>
//                         </Link>
//                         <Link
//                             to={Paths.CONTACT}
//                             style={{
//                                 textDecoration: "none",
//                                 display: "flex",
//                                 alignItems: "center",
//                             }}
//                         >
//                             <S.HeaderLink>{Nav.CONTACT}</S.HeaderLink>
//                         </Link>
//                     </S.HeaderLinks> */}
//                 </S.DropdownMenu>
//     )
// }

// export default DropdownMenu;