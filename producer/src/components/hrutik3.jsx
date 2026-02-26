import './hrutik3.css'
import img1 from '../assets/left1.png'
import img2 from '../assets/user1.png'
import img3 from '../assets/door.png'
import img4 from '../assets/more.png'
function Hrutik3() {
    return(
        <>
        <div className="main">
        <div className="top">
            <button className="left">
                <img src={img1} alt=""className="arrow1" />
            </button>
            <div className="right"><h3>Profile</h3></div>
        </div>
        <div className="bottom">
            <div className="card">
                <div className="top1">
                    <div className="top2">
                        <div className="circle">PR
                        </div>
                            <div className="circle1"></div>
                    </div>
                    <div className="middle2"><h3>Producer</h3></div>
                    <div className="bottom2"><p>producer@test.com</p></div>
                </div>
                <div className="middle1">
                    <div className="left3">
                        <div className="left4">
                            <img src={img2} alt=""className="profile" />
                        </div>
                        <div className="right4"><h4>Edit Profile</h4></div>
                    </div>
                    <div className="right3">
                        <div className="arrow">
                            <img src={img4} alt="" />
                        </div>
                    </div>
                    </div>
                <div className="bottom1">
                    <div className="left5">
                        <img src={img3} alt="" className="door"/>
                    </div>
                    <div className="right5"><h4>Logout</h4></div>
                </div>
            </div>
        </div>
        </div>

        </>
    )
}
export default Hrutik3