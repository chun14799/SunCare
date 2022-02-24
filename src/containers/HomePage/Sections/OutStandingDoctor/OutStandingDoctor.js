import "./OutStandingDoctor.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const OutStandingDoctor = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: true
  };

  return (
    <div className="Specialty">
      <div className="container">
        <div className="Specialty_content">
          <div className="Specialty_title">
            <h2>Bác sĩ nổi bật</h2>
          </div>
          <div className="Specialty_slider">
            <Slider {...settings} className="slider">
              <div className="slider_item">
                <a href="/co_xuong_khop">
                  <div className="slider_img">
                    <img src="https://nld.mediacdn.vn/2017/xuong-1492599646779.jpg" alt="" />
                  </div>
                  <h3>Cơ xương khớp</h3>
                </a>
              </div>
              <div className="slider_item">
                <a href="/than_kinh">
                  <div className="slider_img">
                    <img src="https://cih.com.vn/images/03.2020/PGS.TS.BS-Nguyen-Thi-Hung-1.jpg" alt="" />
                  </div>
                  <h3>Thần kinh</h3>
                </a>
              </div>
              <div className="slider_item">
                <a href="/tieu_hoa">
                  <div className="slider_img">
                    <img src="https://vimed.org/wp-content/uploads/2021/07/bac-si-tieu-hoa-gioi-o-ha-noi-5.jpg" alt="" />
                  </div>
                  <h3>Tiêu hóa</h3>
                </a>
              </div>
              <div className="slider_item">
                <a href="/tim_mach">
                  <div className="slider_img">
                    <img src="https://cdn.bookingcare.vn/fr/w300/2020/08/28/152142-bac-si-kham-tim-istockphoto-1150871787-170667a.jpg" alt="" />
                  </div>
                  <h3>Tim mạch</h3>
                </a>
              </div>
              <div className="slider_item">
                <a href="/tai_mui_hong">
                  <div className="slider_img">
                    <img src="https://thuocdantoc.vn/wp-content/uploads/2019/03/TMH-PLinh.jpg" alt="" />
                  </div>
                  <h3>Tai mũi họng</h3>
                </a>
              </div>
              <div className="slider_item">
                <a href="/da_lieu">
                  <div className="slider_img">
                    <img src="https://cdn.bookingcare.vn/fr/w800/2020/11/12/112405-bac-si-da-lieu.jpg" alt="" />
                  </div>
                  <h3>Da liễu</h3>
                </a>
              </div>
              <div className="slider_item">
                <a href="/tam_ly">
                  <div className="slider_img">
                    <img src="https://admin.tamlyvietphap.vn/uploaded/Images/Original/2019/09/16/benh-tam-than-co-chua-khoi-duoc-khong_1609132017.jpg" alt="" />
                  </div>
                  <h3>Tâm lý</h3>
                </a>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutStandingDoctor;
