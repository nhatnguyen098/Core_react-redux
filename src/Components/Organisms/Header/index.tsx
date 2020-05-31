import React, { useState } from "react";
import { Row } from "react-bootstrap";
import HeaderNavbar from "../../Molecules/NavbarHeader";
import HeaderIcons from "../../Molecules/IconsHeader";
import Logo from "../../Atoms/Logo";
import SearchForm from "../../Molecules/SearchForm";
import "./style.scss";
import {useSelector,useDispatch} from 'react-redux'
import {userLogOut} from '../../../Redux/Actions/userInfo'
const Index = () => {
  const owlClass = "wrapperHeader";
  const [displayForm, setDisplayForm] = useState<boolean>(false);
  // const [showModal, setShowModal] = useState(false);
  const {token} = useSelector((state:any) => state.user.data)
  const dispatch = useDispatch()
  return (
    <Row className={`${owlClass}`}>
      <Logo />
      <HeaderNavbar />
      <HeaderIcons onLogOut = {() => dispatch(userLogOut())} token = {token} showSearchForm={(val) => setDisplayForm(val)} />
      {displayForm && <SearchForm display={displayForm} />}
    </Row>
  );
};

export default Index;
