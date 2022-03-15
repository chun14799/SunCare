import "./HomeHeader.scss";
import { MenuOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { Button } from 'antd';
import { useNavigate } from "react-router-dom";

const HomeHeader = () => {
  const navigate = useNavigate()
  return (
    <div className="HomeHeader">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="logo">
              {/* <MenuOutlined className="menu_btn"></MenuOutlined> */}
              <a href="/">
                <img
                  src="https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.1.4/assets/images/logo.svg"
                  alt="SunCare"
                />
              </a>
            </div>
            <ul className="header_content">
              <li>
                <a href="/chuyenkhoa">
                  Chuyên khoa
                  <span>Tìm bác sĩ theo chuyên khoa</span>
                </a>
              </li>
              <li>
                <a href="/csyt">
                  Cơ sở y tế
                  <span>Chọn bệnh viện phòng khám</span>
                </a>
              </li>              
              <li>
                <a href="/bacsi">
                  Bác sĩ
                  <span>Chọn bác sĩ giỏi</span>
                </a>
              </li>              
              <li>
                <a href="/goikham">
                  Gói khám
                  <span>Khám sửa khỏe tổng quát</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-3">
            <div className="support">
              <a href="">
                <span className="icon_support">
                  <Button type="primary" className="booking_btn" onClick={()=>navigate('/register-signin')}>
                    Đăng nhập
                  </Button>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
