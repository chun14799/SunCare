import React from "react"
import HomeHeader from "./HomeHeader/HomeHeader"
import HomeBanner from "./HomeBanner/HomeBanner"
import Specialty from "./Sections/Specialty"


const HomePage = () => {
    return (
        <div>
            <HomeHeader></HomeHeader>
            <HomeBanner></HomeBanner>
            <Specialty></Specialty>
        </div>
    )
}

export default HomePage