import React from "react";

import Main from "../layout/Main";
import SectionBanner from "../components/SectionBanner"
import SectionAnchor from "../components/SectionAnchor"
import SectionCoffee from "../components/SectionCoffee"
import SectionQuote from "../components/SectionQuote"
import SectionFooter from "../components/SectionFooter"

function Home() {
    return (
        <>
            <Main>
                <div>
                    <SectionBanner />
                    <SectionAnchor />
                    <SectionCoffee />
                    <SectionQuote />
                    <SectionFooter />
                </div>
            </Main>
        </>
    )
}

export default Home;