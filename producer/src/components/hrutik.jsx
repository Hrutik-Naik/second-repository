import './hrutik.css'
import img1 from '../assets/james.jpg'
import img2 from '../assets/star.png'
import img3 from '../assets/left.png'

function Hrutik() {

    return (
        <>
        <div className="main">
            <div className="top">
                <div className="t1">
               <img src={img1} alt="" className='james' />
               </div>
               <div className="left">
                <img src={img3} alt="" className='ll1' />
               </div>
               <div className="t2">James</div>
               <div className="t3">English * 1h 40min</div>
            </div>
            <div className="middle">
                <div className="m-t">
                <button className='m1'>
                    <img src={img2} alt="" className='star' />
               6.2 </button>
                <button className="m2">1h 40min</button>
                <button className="m3">English</button>
                <button className="m4">6+</button>
                </div>
                <div className="m-b">
                    <div className="m5"><b>Synopsis</b></div>
                    <div className="m6"><p>Tony Stark faces his moas dangerous enemy</p></div>
                </div>
            </div>
            <div className="bottom">
                <div className="b-t">
                    <div className="bt1"><b>Movie Info</b></div>
                </div>
                <div className="b-b">
                    <div className="bl">
                        <div className="bb1">
                            <p>Release Date</p>
                            <p>03 May 2026</p>
                        </div>
                        <div className="bb2">
                            <p>Duration</p>
                            <p>1h 40min</p>
                        </div>
                    </div>
                    <div className="br">
                        <div className="bb3">
                            <p>Language</p>
                            <p>English</p>
                        </div>
                        <div className="bb4">
                            <p>Status</p>
                            <p>Released</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="f1"><b>Production</b></div>
                <div className="f2"><p>Produced by: <b>ABC Productio</b>n</p></div>
                <div className="f3"><p>Distributed by: <b>Namma Cinema</b></p></div>
            </div>
        </div>
        </>
    )
}
export default Hrutik