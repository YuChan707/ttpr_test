import React from "react";

import { Header } from "../../components/header/header-form-";
import { BaseMP } from "./page-form";

export const ForAppMP = () => {
    const name = "Boba Lover";

    return (
        <>
            <header>
                <Header />
            </header>
            <div>
                {/* Use the renamed component */}
                <BaseMP />
            </div>
        </>
    );
};
