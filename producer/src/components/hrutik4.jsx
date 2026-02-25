import './hrutik4.css'
import img1 from '../assets/user.png'
import img2 from '../assets/kirik.webp'
import img3 from '../assets/animal.jpg'


function Hrutik4() {

    return(
        <>
          <div className='main'> 
                            <div className="top">
                                <div className="t-l">
                                    <div className="t1"><b>Producer Dashboard</b></div>
                                    <div className="t2">Welcome Producer!</div>
                                </div>
                                <div className="t-r">
                                    <div className="t3">
                                        <img src={img1} alt="" className='user'/>
                                    </div>
                                </div>
                            </div>
                            <div className="middle">
                                <button className="m1"><b>Pending (6)</b></button>
                                <button className="m2"><b>Approved 7</b></button>
                                <button className="m3"><b>Rejected (2)</b></button>
                            </div>
                            <div className="bottom">
                                <div className="b-t">
                                    <div className="bh">PENDING MOVIES</div>
                                    <div className="bh1"></div>
                                </div>
                                <div className="b-b">
                                    <div className="b-l">
                                    <div className="b1">
                                        <div className="ba1">
                                            <img src={img2} alt="" className='ironman'/>
                                        </div>
                                        <div className="ba2">Ironman 3</div>
                                        <div className="ba3"></div>
                                        <div className="ba4">English</div>
                                        <div className="ba5">03/05/2013</div>
                                        <div className="ba6">Reason: content review pending clarification</div>
                                    </div>
                                    
                                    </div>
                                    <div className="b-r">
                                    <div className="b2">
                                        <div className="bd1">
                                            <img src={img3} alt="" className='north' />
                                        </div>
                                        <div className="bd2">Northmen</div>
                                        <div className="bd3"></div>
                                        <div className="bd4">English</div>
                                        <div className="bd5">22/04/2022</div>
                                        <div className="bd6">Reason: content review pending clarification</div>
                                    </div>
                                   
                                    <button className="b7">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
        </>
    )
}
export default Hrutik4