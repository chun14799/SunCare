import "./DoctorComeToYou.scss";
import ReactPlayer from "react-player";
const DoctorComeToYou = () => {
  return (
    <div className="container">
      <div className="content_margin_left">
        <div className="section">
          <div className="video">
            <ReactPlayer
              url="https://cdn.jiohealth.com/video/doctor/Our_Doctors_Come_to_You_Short_Ver_LQ.mp4"
              playing={true}
              loop={true}
              controls={false}
              className="video-player"
            />

            <div className="video-cover">
              <img
                src="https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.1.4/assets/images/doctors-come-to-you-video-cover.svg"
                alt=""
              />
            </div>
            {/* dcty = doctor come to you */}
          </div>
            <div className="dcty-info">
                <div className="title">
                    <h2>Bác sĩ đến nhà</h2>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorComeToYou;
