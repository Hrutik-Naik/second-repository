import './hrutik3.css'
import img1 from '../assets/left.png'
import img2 from '../assets/user1.png'
import img3 from '../assets/door.png'
function Hrutik3() {
    return(
        <>
        <div className="main">
         <div className="top">
            <div className="t1">
                <img src={img1} alt="" className='left' />
            </div>
            <div className="t2">Profile</div>
         </div>
         <div className="middle">
            <div className="m1">PR</div>
            <div className="m2">
                <div className="m11">Producer</div>
                <div className="m12">producer@test.com</div>
            </div>
         </div>
         <div className="bottom">
                <button className="b1">
                <img src={img2} alt="" className='user' />Edit Profile</button>
                <button className="b2">
                    <img src={img3} alt="" className='door' />Logout
                </button>
         </div>
         </div>


        </>
    )
}
export default Hrutik3