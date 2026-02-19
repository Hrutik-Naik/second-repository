
import './producer.css'
import img1 from '../assets/iron.jpg'
import img2 from '../assets/tobi.jpg'
import img3 from '../assets/north.jpg'
import img4 from '../assets/yuva.jpg'
import img5 from '../assets/kabza.jpg'
import img6 from '../assets/user.png'

function Prod() {

  return (
    <>
      <div className='main'>
        <div className='top'>
            <div className="t-l">
                <div className="t1"><h3>Producer Dashboard</h3></div>
                <div className="t2"><p>Welcome,Producer!</p></div>
            </div>
            <div className="t-r">
              <img src={img6} alt="" className='user' />
            </div>
        </div>
        <div className="middle">
            <button className='a1'>Pending (8)</button>
            <button className='a2'>Approved (7)</button>
            <button className='a3'>Rejected (2)</button>
        </div>
        <div className='bottom'>
          <div className="b-t">
          <div className='bh'>PENDING MOVIES</div>
          <div className="bh1"></div>
          </div>
          <div className="b-b">
          <div className="b-l">
          <div className="l1">
          <div className="b1">
            <img src={img1} alt="" className='iron' />
          </div>
          <div className="b11">
            <div className="bb1"><b>Ironman 3</b></div>
            <div className="bb2"></div>
            <div className="bb3"><h5>English</h5></div>
            <div className="bb4"><h5>03/05/2013</h5></div>
          </div>
          </div>
          <div className="l2">
          <div className="b2">
            <img src={img2} alt="" className='tobi' />
          </div>
          <div className="b22">
            <div className="bb5"><b>Tobi</b></div>
            <div className="bb6"></div>
            <div className="bb7"><h5>English</h5></div>
            <div className="bb8"><h5>22/04/2026</h5></div>
          </div>
          </div>
          <div className="l3">
          <div className="b3">
            <img src={img3} alt="" className='north'/>
          </div>
          <div className="b33">
            <div className="bb9"><b>Northmen</b></div>
            <div className="bb10"></div>
            <div className="bb11"><h5>Englidh</h5></div>
            <div className="bb12"><h5>22/04/2024</h5></div>
          </div>
          </div>
          </div>
          <div className="b-r">
            <div className="r1">
            <div className="b4">
              <img src={img3} alt=""className='north' />
            </div>
            <div className="b44">
               <div className="bb9"><b>Northmen</b></div>
            <div className="bb10"></div>
            <div className="bb11"><h5>Englidh</h5></div>
            <div className="bb12"><h5>22/04/2024</h5></div>
            </div>
            </div>
            <div className="r2">
            <div className="b5">
              <img src={img4} alt="" className='yuva'/>
            </div>
             <div className="b55">
              <div className="bb13"><b>Yuva</b></div>
              <div className="bb14"></div>
              <div className="bb15"><h5>English</h5></div>
              <div className="bb16"><h5>22/04/2022</h5></div>
             </div>
            </div>
            <div className="r3">
            <div className="b6">
              <img src={img5} alt="" className='kabza'/>
            </div>
            <div className="b66">
              <div className="bb17"><b>Kabza</b></div>
              <div className="bb18"></div>
              <div className="bb19"><h5>English</h5></div>
              <div className="bb20"><h5>22/04/</h5></div>
            </div>

            </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Prod
