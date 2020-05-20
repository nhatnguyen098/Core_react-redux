import React, { useState } from "react";
import { Row } from "react-bootstrap";
import HeaderNavbar from "../../Molecules/NavbarHeader";
import HeaderIcons from "../../Molecules/IconsHeader";
import Logo from "../../Atoms/Logo";
import SearchForm from "../../Molecules/SearchForm";
import "./style.scss";
// const SearchForm = lazy(() => import("../../Molecules/SearchForm"));

const Index = () => {
  const owlClass = "wrapperHeader";
  const [displayForm, setDisplayForm] = useState<boolean>(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <Row className={`${owlClass}`}>
      <Logo />
      <HeaderNavbar />
      <HeaderIcons
        showSearchForm={(val) => setDisplayForm(val)}
        showSignUp={showModal}
        changeDisplayModal={(val) => setShowModal(val)}
      />
      {/* <Suspense fallback = {<input readOnly>...</input>}> */}
      {displayForm && <SearchForm display={displayForm} />}

      {/* </Suspense> */}
    </Row>
  );
};

export default Index;
