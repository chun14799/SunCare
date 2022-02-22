import "./HomeHeader.scss";
import { MenuOutlined, QuestionCircleOutlined } from "@ant-design/icons";

const HomeHeader = () => {
  return (
    <div className="HomeHeader">
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="logo">
              <MenuOutlined className="menu_btn"></MenuOutlined>
              <a href="/homepage">
                <img
                  src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t1.6435-9/81724555_127902035351803_6962352895480037376_n.png?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=dUcQ-PHXqwAAX8NTwKG&tn=rQ9H3rP2_jPDfj5e&_nc_ht=scontent.fsgn5-8.fna&oh=00_AT9QQ8IRshIO7jka-MRS072lxBxmC33Pl1F-5TGu7-tRdA&oe=6237B0B1"
                  alt="SunCare"
                />
              </a>
              <p>SunCare</p>
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
              <a href="/support">
                <span className="icon_support">
                <QuestionCircleOutlined></QuestionCircleOutlined>
                </span>
                <span className="support"> Hỗ trợ</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
