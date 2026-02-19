
import './producer.css'
import img1 from '../assets/anathan.jpg'
import img2 from '../assets/1920.jpg'
import img3 from '../assets/james.jpg'
import img4 from '../assets/ong.jpg'
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
          <div className='bh'>APPROVED MOVIES</div>
          <div className="bh1"></div>
          </div>
          <div className="b-b">
          <div className="b-l">
          <div className="l1">
          <div className="b1">
            <img src={img1} alt="" className='anathan' />
          </div>
          <div className="b11">
            <div className="bb1"><b>Anathan kaadu</b></div>
            <div className="bb2"></div>
            <div className="bb3"><p>English</p></div>
            <div className="bb4"><p>22/04/2022</p></div>
          </div>
          </div>
          <div className="l2">
          <div className="b2">
            <img src={img2} alt="" className='a1920' />
          </div>
          <div className="b22">
            <div className="bb5"><b>1920</b></div>
            <div className="bb6"></div>
            <div className="bb7"><p>English</p></div>
            <div className="bb8"><p>22/04/2026</p></div>
          </div>
          </div>
          </div>
          <div className="b-r">
            <div className="r1">
            <div className="b4">
              <img src={img3} alt=""className='james' />
            </div>
            <div className="b44">
               <div className="bb9"><b>James</b></div>
            <div className="bb10"></div>
            <div className="bb11"><p>Englidh</p></div>
            <div className="bb12"><p>03/05/2026</p></div>
            </div>
            </div>
            <div className="r2">
            <div className="b5">
              <img src={img4} alt="" className='ong'/>
            </div>
             <div className="b55">
              <div className="cl">
              <div className="bb13"><b>Ong bac</b></div>
              <div className="bb14"></div>
              <div className="bb15"><p>English</p></div>
              <div className="bb16"><p>22/04/2022</p></div>
              </div>
              <div className="cr">
                <button className='btn'>+</button>
              </div>
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
