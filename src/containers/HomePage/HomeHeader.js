import "./HomePage.scss";
import { MenuOutlined } from '@ant-design/icons'
const HomeHeader = () => {
  return (
    <div className="HomeHeader">
      <div className="row">
        <div className="col-7">
            <MenuOutlined></MenuOutlined>
            <a>
                <img src="https://png.pngtree.com/template/20190927/ourlarge/pngtree-medical-logo-design-with-people-circular-image_310492.jpg" alt="" /> SunCare
            </a>
            
        </div>

        <div className="col-3"></div>
      </div>
    </div>
  );
};

export default HomeHeader;
