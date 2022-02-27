import { Button } from "antd";
import "./DoctorTeam.scss";

const DoctorTeam = () => {
  return (
    <div className="DoctorTeam">
      {/* //https://www.youtube.com/embed/CNFa_9BxQiU */}
      <div className="DoctorTeam-bg1">
        <img
          src="https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.1.4/assets/images/top-doctors-background-1.svg"
          alt=""
        />
      </div>
      {/* Start video */}
      <div className="DoctorTeam-video">
        <iframe
          className="video-player"
          src="https://www.youtube.com/embed/CNFa_9BxQiU?autoplay=1&mute=1&loop=1&playlist=CNFa_9BxQiU&enablejsapi=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <div className="DoctorTeam-video-cover">
            <img src="https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.1.4/assets/images/top-doctors-video-cover.svg" alt="" />
        </div>
        <div className="DoctorTeam-bg2">
            <img src="https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.1.4/assets/images/top-doctors-background-2.svg" alt="" />
        </div>
        {/* End video */}
        
      </div>
        {/* Start info */} 
        <div className="DoctorTeam-info">
            <div className="title">
                <h2>Đội ngũ bác sĩ ưu tú từ các bệnh viện hàng đầu</h2>
            </div>
            <div className="line"></div>
            <p>Đội ngũ bác sĩ ưu tú với thâm niên trung bình 10+ năm kinh nghiệm, hiện công tác tại các bệnh viện hàng đầu Việt Nam, thăm khám chuyên khoa đa dạng, tận tâm chăm sóc bạn và gia đình.</p>
            <div className="icon">
                <div className="icon-exp">
                    <img src="https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.1.4/assets/icons/international-icon.svg" alt="" />
                    <h3>Kinh nghiệm dày dặn</h3>
                </div>
                <div className="icon-title">
                <img src="https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.1.4/assets/icons/stethoscope-icon.svg" alt="" />
                <h3>Bác sĩ CKI & II, Thạc sĩ, Tiến sĩ</h3>
                </div>
            </div>
            <div className="meet-doctor-btn">
                <Button className="watch-btn">Gặp gỡ bác sĩ của chúng tôi ngay</Button>
            </div>
        </div>
        {/* End info */}
    </div>
  );
};

export default DoctorTeam;
