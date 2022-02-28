import React from "react"
import HomeHeader from "./HomeHeader/HomeHeader"
import HomeBanner from "./HomeBanner/HomeBanner"
import Specialty from "./Sections/Specialty/Specialty"
import DoctorComeToYou from "./Sections/DoctorComeToYou/DoctorComeToYou"
import MedicalFacility from "./Sections/MedicalFacility/MedicalFacility"
import OutStandingDoctor from "./Sections/OutStandingDoctor/OutStandingDoctor"
import Pharmacy from "./Sections/Pharmacy/Pharmacy"
import DoctorTeam from "./Sections/DoctorTeam/DoctorTeam"
import VideoChat from "./Sections/VideoChat/VideoChat"


const HomePage = () => {
    return (
        <div>
            <HomeHeader></HomeHeader>
            <HomeBanner></HomeBanner>
            <DoctorComeToYou></DoctorComeToYou>
            <Pharmacy></Pharmacy>
            <DoctorTeam></DoctorTeam>
            <VideoChat></VideoChat>
            <Specialty></Specialty>
            <MedicalFacility></MedicalFacility>
            <OutStandingDoctor></OutStandingDoctor>
        </div>
    )
}

export default HomePage