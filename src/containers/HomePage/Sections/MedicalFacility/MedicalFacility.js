import "./MedicalFacility.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const MedicalFacility = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: true
  };

  return (
    <div className="MedicalFacility">
      <div className="container">
        <div className="MedicalFacility_content">
          <div className="MedicalFacility_title">
            <h2>Cơ sở y tế nổi bật</h2>
          </div>
          <div className="MedicalFacility_slider">
            <Slider {...settings} className="slider">
              <div className="slider_item">
                <a href="/bv_cho_ray">
                  <div className="slider_img">
                    <img src="https://media-cdn.laodong.vn/storage/newsportal/2021/6/7/917811/Cho-Ray.jpg" alt="" />
                  </div>
                  <h3>Bệnh viên Chợ Rẫy</h3>
                </a>
              </div>
              <div className="slider_item">
                <a href="/bv_nd_gia_dinh">
                  <div className="slider_img">
                    <img src="https://photo-cms-sggp.zadn.vn/Uploaded/2022/bpivpawv/2021_06_13/bvgiadinh1_jdhk.jpg" alt="" />
                  </div>
                  <h3>Bệnh viện Nhân Dân Gia Định</h3>
                </a>
              </div>
              <div className="slider_item">
                <a href="/bv_tu_du">
                  <div className="slider_img">
                    <img src="https://tudu.com.vn/data/image/227.jpg" alt="" />
                  </div>
                  <h3>Bệnh viện Từ Dũ</h3>
                </a>
              </div>
              <div className="slider_item">
                <a href="/bv_ung_buou">
                  <div className="slider_img">
                    <img src="https://thuonghieuvaphapluat.vn/Images/hoangduc/2020/09/08/bvub.jpg" alt="" />
                  </div>
                  <h3>Bệnh viện ung bướu</h3>
                </a>
              </div>
              <div className="slider_item">
                <a href="/bv_nhi_dong">
                  <div className="slider_img">
                    <img src="https://cdn.tgdd.vn/med/1/benh-vien-nhi-dong-2-3.jpg" alt="" />
                  </div>
                  <h3>Bệnh viện nhi đồng 2</h3>
                </a>
              </div>
              <div className="slider_item">
                <a href="/bv_da_lieu">
                  <div className="slider_img">
                    <img src="https://media.alobacsi.com/upload/phuongnguyen/2020/06/13/081911-benh_vien_da_lieu_tphcm.jpg" alt="" />
                  </div>
                  <h3>Bệnh viện Da liễu</h3>
                </a>
              </div>
              <div className="slider_item">
                <a href="/bv_tai_mui_hong">
                  <div className="slider_img">
                    <img src="https://hoidapungthu.vn/wp-content/uploads/2020/02/2-8.jpg" alt="" />
                  </div>
                  <h3>Bệnh viện tai mũi họng</h3>
                </a>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalFacility;
