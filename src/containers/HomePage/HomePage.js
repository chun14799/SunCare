import React from "react"
import HomeHeader from "./HomeHeader/HomeHeader"
import HomeBanner from "./HomeBanner/HomeBanner"
import Specialty from "./Sections/Specialty/Specialty"
import DoctorComeToYou from "./Sections/DoctorComeToYou/DoctorComeToYou"
import MedicalFacility from "./Sections/MedicalFacility/MedicalFacility"
import OutStandingDoctor from "./Sections/OutStandingDoctor/OutStandingDoctor"


const HomePage = () => {
    return (
        <div>
            <HomeHeader></HomeHeader>
            <HomeBanner></HomeBanner>
            <Specialty></Specialty>
            <MedicalFacility></MedicalFacility>
            <OutStandingDoctor></OutStandingDoctor>
            {/* <DoctorComeToYou></DoctorComeToYou> */}
        </div>
    )
}

export default HomePage