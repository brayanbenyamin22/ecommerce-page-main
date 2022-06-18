import React from "react";
import { Header } from "../Header/header";
import { Main } from "../Main/main";
function AppUI () {
    return (
        <React.Fragment>
            <Header />
            <Main />
        </React.Fragment>
    );
}

export {AppUI};