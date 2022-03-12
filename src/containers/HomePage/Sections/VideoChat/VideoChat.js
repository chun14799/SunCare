import "./VideoChat.scss";

const VideoChat = () => {
  return (
    <div className="video-chat">
      <div className="video-chat_img">
        <img
          src="https://image.freepik.com/free-vector/video-conference-online-doctor-s-consultation-doctor-advises-patient-internet_572614-7.jpg"
          alt=""
        />
      </div>

      <div className="img-cover">
        <img
          src="https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.1.4/assets/images/online-pharmacy-video-cover.svg"
          alt=""
        />
      </div>

      <div className="video-chat-info">
        <div className="title">
          <h2>Tư vấn sức khỏe từ xa 24/7 qua video và chat</h2>
        </div>

        <div className="line"></div>

        <p>
          Bạn cần sự tư vấn chuyên môn khi gặp các vấn đề sức khỏe? Dù bạn ở đâu
          hay vào bất cứ lúc nào, các bác sĩ chuyên khoa của SunCare luôn sẵn
          sàng tư vấn, giải đáp đáp mọi thắc mắc của bạn.
        </p>
        <div className="icon">
          <div className="icon-camera">
            <img
              src="https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.1.4/assets/icons/video-icon.svg"
              alt=""
            />
            <h3>Video call với bác sĩ</h3>
          </div>

          <div className="icon-chat">
            <img
              src="https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.1.4/assets/icons/chat-icon.svg"
              alt=""
            />
            <h3>Chat với bác sĩ</h3>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default VideoChat;
