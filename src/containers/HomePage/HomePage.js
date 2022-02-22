import React from "react"
import HomeHeader from "./HomeHeader"
import HomeBanner from "./HomeBanner"
import HandBook from "./Sections/HandBook"

const HomePage = () => {
    return (
        <div>
            <HomeHeader></HomeHeader>
            <HomeBanner></HomeBanner>
            <HandBook></HandBook>
        </div>
    )
}

export default HomePage