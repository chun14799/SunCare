import "./HomeBanner.scss";
import {SearchOutlined} from '@ant-design/icons'
const HomeBanner = () => {
  return (
    <div className="HomeBanner">
      <div>
        <div className="banner_content">
          <div className="container">
            <h1>NỀN TẢNG Y TẾ</h1>
            <b>CHĂM SÓC SỨC KHỎE TOÀN DIỆN</b>
            <div className="search_form">
                <div className="search_bar">
                    <span><SearchOutlined /></span>
                    <input type="search" placeholder="" />
                </div>
            </div>
          </div>
        </div>
        <div className="banner_option">
            <ul>
                <li>
                    <a href="/chuyenkhoa">
                        <div className="icon" style={{
                            backgroundImage : `url("https://cdn.bookingcare.vn/fo/2021/12/08/133537-khamchuyenkhoa.png")`
                        }}>
                        </div>
                        Khám
                            <br />
                        Chuyên khoa
                    </a>
                </li>
                <li>
                    <a href="/chuyenkhoa">
                        <div className="icon" style={{
                            backgroundImage : `url("https://cdn.bookingcare.vn/fo/2021/12/08/133657-khamtuxa.png")`
                        }}>
                        </div>
                        Khám
                            <br />
                        Từ xa
                    </a>
                </li>
                <li>
                    <a href="/chuyenkhoa">
                        <div className="icon" style={{
                            backgroundImage : `url("https://cdn.bookingcare.vn/fo/2021/12/08/133744-khamtongquat.png")`
                        }}>
                        </div>
                        Khám
                            <br />
                        Tổng quát
                    </a>
                </li>
                <li>
                    <a href="/chuyenkhoa">
                        <div className="icon" style={{
                            backgroundImage : `url("https://cdn.bookingcare.vn/fo/2021/12/08/133744-dichvuxetnghiem.png")`
                        }}>
                        </div>
                        Xét nghiệm
                            <br />
                        Y học
                    </a>
                </li>
                <li>
                    <a href="/chuyenkhoa">
                        <div className="icon" style={{
                            backgroundImage : `url("https://cdn.bookingcare.vn/fo/2021/12/08/133744-suckhoetinhthan.png")`
                        }}>
                        </div>
                        Sức khỏe
                            <br />
                        Tinh thần
                    </a>
                </li>
                <li>
                    <a href="/chuyenkhoa">
                        <div className="icon" style={{
                            backgroundImage : `url("https://cdn.bookingcare.vn/fo/2021/12/08/133537-khamchuyenkhoa.png")`
                        }}>
                        </div>
                        Khám
                            <br />
                        Nha khoa
                    </a>
                </li>
                <li>
                    <a href="/chuyenkhoa">
                        <div className="icon" style={{
                            backgroundImage : `url("https://cdn.bookingcare.vn/fo/2021/12/08/134356-goi-phau-thuat.png")`
                        }}>
                        </div>
                        Gói
                            <br />
                        Phẫu thuật
                    </a>
                </li>
                <li>
                    <a href="/chuyenkhoa">
                        <div className="icon" style={{
                            backgroundImage : `url("https://cdn.bookingcare.vn/fo/2021/12/08/133744-khamtainha.png")`
                        }}>
                        </div>
                        Sản phẩm y tế
                    </a>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
