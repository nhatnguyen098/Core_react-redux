import React from "react";
import "./style.scss";
import Logo from "../../Atoms/Logo";
import NavHeader from "../../Molecules/NavbarHeader";
import ButtonIcon from "../../Atoms/ButtonIcons";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
const iconsData = [
  {
    id: 1,
    icons: <FaFacebookF />,
  },
  {
    id: 2,
    icons: <AiFillInstagram />,
  },
  {
    id: 3,
    icons: <MdEmail />,
  },
  {
    id: 4,
    icons: <FaLinkedinIn />,
  },
];
const Index = () => {
  const owlClass = "m-footerInner";
  return (
    <div className={`${owlClass} d-flex`}>
      <Logo />
      <NavHeader />
      {iconsData.map((item: any, index: number) => {
        return <ButtonIcon className = "mr-2" key = {index}>{item.icons}</ButtonIcon>;
      })}
    </div>
  );
};

export default Index;
