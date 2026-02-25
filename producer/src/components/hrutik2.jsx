import './hrutik2.css'
import img1 from '../assets/user.png'
import img2 from '../assets/iron.jpg'
import img3 from '../assets/tobi.jpg'
import img4 from '../assets/kantara.jpg'
import img5 from '../assets/north.jpg'
import img6 from '../assets/yuva.jpg'
import img7 from '../assets/salar.webp'

function Hrutik2() {

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
                                    </div>
                                    <div className="b2">
                                        <div className="bb1">
                                            <img src={img3} alt="" className='tobi' />
                                        </div>
                                        <div className="bb2">Tobi</div>
                                        <div className="bb3"></div>
                                        <div className="bb4">English</div>
                                        <div className="bb5">22/04/2026</div>
                                    </div>
                                    <div className="b3">
                                        <div className="bc1">
                                            <img src={img4} alt="" className='kantara'/>
                                        </div>
                                        <div className="bc2">Kantara</div>
                                        <div className="bc3"></div>
                                        <div className="bc4">Kannada</div>
                                        <div className="bc5">22/04/2026</div>
                                    </div>
                                    </div>
                                    <div className="b-r">
                                    <div className="b4">
                                        <div className="bd1">
                                            <img src={img5} alt="" className='north' />
                                        </div>
                                        <div className="bd2">Northmen</div>
                                        <div className="bd3"></div>
                                        <div className="bd4">English</div>
                                        <div className="bd5">22/04/2022</div>
                                    </div>
                                    <div className="b5">
                                        <div className="be1">
                                            <img src={img6} alt="" className='yuva' />
                                        </div>
                                        <div className="be2">Yuva</div>
                                        <div className="be3"></div>
                                        <div className="be4">English</div>
                                        <div className="be5">22/04/2022</div>
                                    </div>
                                    <div className="b6">
                                        <div className="bf1">
                                            <img src={img7} alt="" className='salar' />
                                        </div>
                                        <div className="bf2">Salar</div>
                                        <div className="bf3"></div>
                                        <div className="bf4">Kannada</div>
                                        <div className="bf5">22/04/2022</div>
                                    </div>
                                    <button className="b7">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
        </>
    )
}
export default Hrutik2