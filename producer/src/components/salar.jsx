import './salar.css'
import img1 from '../assets/salar.webp'
import img2 from '../assets/star.png'
import img3 from '../assets/left.png'

function Salar() {

    return (
        <>
        <div className="main">
            <div className="top">
                <div className="t1">
               <img src={img1} alt="" className='kantara' />
               </div>
               <div className="left">
                <img src={img3} alt="" className='ll1' />
               </div>
               <div className="t2"><h3>SALAR</h3></div>
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
                    <div className="m5"><h3>Synopsis</h3></div>
                    <div className="m6"><p>A violent man becomes the most feared gangster in a dystopian city.</p></div>
                </div>
            </div>
            <div className="bottom">
                <div className="b-t">
                    <div className="bt1"><h3>Movie Info</h3></div>
                </div>
                <div className="b-b">
                    <div className="bl">
                        <div className="bb1">
                           <div className="bb11"><p>Release Date</p></div>
                            <div className="bb12"><p>03 May 2026</p></div>
                        </div>
                        <div className="bb2">
                          <div className="bb21">  <p>Duration</p></div>
                           <div className="bb22"><p>1h 40min</p></div>
                        </div>
                    </div>
                    <div className="br">
                        <div className="bb3">
                           <div className="bb31"> <p>Language</p></div>
                            <div className="bb32"><p>English</p></div>
                        </div>
                        <div className="bb4">
                            <div className="bb41"><p>Status</p></div>
                            <div className="bb42"><p>Released</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="f1"><h3>Production</h3></div>
                <div className="f2"><p>Produced by: <b>ABC Productio</b>n</p></div>
                <div className="f3"><p>Distributed by: <b>Namma Cinema</b></p></div>
            </div>
        </div>
        </>
    )
}
export default Salar