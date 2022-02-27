import "./DoctorComeToYou.scss";
import React, { useState } from "react";
import { Modal, Button } from "antd";

const DoctorComeToYou = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="container">
      <div className="content_margin_left">
        <div className="section">
          <div className="video">
            <iframe
              className="video-player"
              src="https://www.youtube.com/embed/YNwvUkk1K_o?autoplay=1&mute=1&loop=1&playlist=YNwvUkk1K_o&enablejsapi=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            <div className="video-cover">
              <img
                src="https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.1.4/assets/images/doctors-come-to-you-video-cover.svg"
                alt=""
              />
            </div>
          </div>

          {/* dcty = doctor come to you */}
          <div className="dcty-info">
            <div className="title">
              <h2>Bác sĩ đến nhà</h2>
            </div>

            <div className="line"></div>

            <p className="price">
              Thăm khám tận nơi chỉ từ <span style={{ fontWeight: "bold" }}>
                400.000 <u>đ</u>
              </span>
            </p>
            <div className="dcty_info-btn">
              <div className="booking">
                <Button type="primary" className="booking_btn" onClick={showModal}>
                  Đặt lịch khám
                </Button>
                <Modal
                  title="Basic Modal"
                  visible={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  centered={true}
                >
                  <p>Some contents...</p>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorComeToYou;
