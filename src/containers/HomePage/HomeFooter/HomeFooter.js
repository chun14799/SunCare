import "./HomeFooter.scss";
import {FacebookOutlined, InstagramOutlined} from '@ant-design/icons';
const HomeFooter = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-logo">
              <a href="#">
                <img
                  src="https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.1.4/assets/images/footer-logo-white.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div className="row footer-top">
          <div className="col-5">
            <ul className="footer-list">
              <li>
                <span className="font-bold">Hotline </span>
                <a href="/">1900113114</a>
              </li>
              <li>
                <span className="font-bold">Hỗ trợ </span>
                <a href="/">support@admin.com</a>
              </li>
              <li>
                <span className="font-bold">Địa chỉ </span>
                Phòng khám Đa khoa Cao cấp Jio Health - Jio Smart Clinic - 39 Lê Duẩn, Phường Bến Nghé, Quận 1, TP.HCM
              </li>
            </ul>
          </div>
          <div className="col-3">
            <ul className="footer-list">
              <li>
                <span className="font-bold">Dịch vụ</span>
              </li>
              <li>
                <a href="/tham-kham-tai-nha">Hẹn bác sĩ, điều dưỡng đến nhà</a>
              </li>
              <li>
                <a href="/kham-truc-tuyen">Hẹn bác sĩ lịch khám trực tuyến</a>
              </li>
              <li>
                <a href="/kham-benh-vien">
                  Hẹn bác sĩ đặt lích khám tại bệnh viện
                </a>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <ul className="footer-list">
              <li>
                <span className="font-bold">Tìm hiểu thêm</span>
              </li>
              <li>
                <a href="/doi-ngu-bac-si">Đội ngũ bác sĩ</a>
              </li>
              <li>
                <a href="/co-so-y-te">Cơ sở y tế</a>
              </li>
              <li>
                <a href="/chuyen-khoa-pho-bien">Chuyên khoa phổ biến</a>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <ul className="footer-list">
              <li>
                <span className="font-bold">Hỗ trợ khách hàng</span>
              </li>
              <li>
                <a href="/cau-hoi-thuong-gap">Câu hỏi thường gặp</a>
              </li>
              <li>
                <a href="/chinh-sach-bao-mat">Chính sách bảo mật</a>
              </li>
              <li>
                <a href="/chinh-sach-hoat-dong">Chính sách hoạt động</a>
              </li>
              <li>
                <a href="/chinh-sach-khieu-nai">Chính sách khiếu nại</a>
              </li>
              <li>
                <a href="/lien-he">Liên hệ</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row footer-bottom">
          <div className="col-15">
            <hr className="separated-line" />
          </div>
          <div className="col-6">
            <ul className="footer-list">
              <li>
                <span className="font-bold">
                  CÔNG TY PHÒNG KHÁM ĐA KHOA JIO HEALTH
                </span>
              </li>
              <li>
                <span className="font-bold">Giấy CNĐKDN </span>
                <p>
                  0309145924 đăng ký lần đầu ngày 06/07/2009, đăng ký thay đổi
                  lần thứ 6 ngày 11/09/2019, cấp bởi Sở KHĐT thành phố Hồ Chí
                  Minh.
                </p>
              </li>
            </ul>
          </div>
          <div className="col-6">
            <ul className="footer-list">
                <li>
                    <span className="font-bold">Hãy theo dõi chúng tôi tại </span>
                </li>
                <li className="footer-icon">
                    <a href=""><FacebookOutlined style={{fontSize: 50, marginRight: 20}} /></a> 
                    <a href="instagram.com"><InstagramOutlined style={{fontSize: 50}}/></a>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
