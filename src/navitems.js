import {
  ImHome,
  ImUsers,
  ImUser,
  ImLibrary,
  ImCoinDollar,
  ImFolderUpload,
  ImMail2,
  ImAppleinc,
  ImCogs,
} from "react-icons/im";
export const navitems = [
  { title: "Dashboard", link: "/", icon: <ImHome size={25} /> },
  { title: "Employee", link: "/employee", icon: <ImUser size={25} /> },
  { title: "Student", link: "/student", icon: <ImUsers size={25} /> },
  { title: "Course", link: "/course", icon: <ImLibrary size={25} /> },
  { title: "Free", link: "/free", icon: <ImCoinDollar size={25} /> },
  { title: "Results", link: "/result", icon: <ImFolderUpload size={25} /> },
  { title: "Contact Us", link: "/contact", icon: <ImMail2 size={25} /> },
  { title: "About Us", link: "/about", icon: <ImAppleinc size={25} /> },
  { title: "Settings", link: "/settings", icon: <ImCogs size={25} /> },
];
