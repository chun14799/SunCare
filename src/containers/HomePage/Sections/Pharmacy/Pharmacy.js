import { Button } from "antd";
import "./Pharmacy.scss"


const Pharmacy = () => {
    return (
        <div className="Pharmacy">
            <div className="pharmacy_video">
            <iframe
              className="video-player"
              src="https://www.youtube.com/embed/iRf8EJjMFSA?autoplay=1&mute=1&loop=1&playlist=iRf8EJjMFSA&enablejsapi=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            </div>
            <div className="video-cover">
                <img src="https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.1.4/assets/images/online-pharmacy-video-cover.svg" alt="" />
            </div>
            <div className="pharmacy-info">
                <div className="title">
                    <h2>Nhà thuốc trực tuyến</h2>
            </div>
            <div className="line"></div>
            <p>Dễ dàng đặt trực tuyến thuốc và các sản phẩm chăm sóc sức khỏe chính hãng với giá thành hợp lý</p>
            <div className="icon">
                <div className="icon-ship">
                    <img src="https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.1.4/assets/icons/delivery-icon.svg" alt="" />
                    <h3>Giao hàng nhanh chỉ trong 2h</h3>
                </div>
                <div className="icon-discount">
                <img src="https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.1.4/assets/icons/discount-icon.svg" alt="" />
                <h3>Tiết kiệm từ 10%-20% chi phí</h3>
                </div>
            </div>
            <div className="pharmacy-btn">
                <Button className="watch-btn">Xem ngay</Button>
            </div>
            </div>
        </div>
    )

}

export default Pharmacy;