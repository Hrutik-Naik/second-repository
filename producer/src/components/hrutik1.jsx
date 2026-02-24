import './hrutik1.css'
import img1 from '../assets/dot.png'
import img2 from '../assets/x.png'
import img3 from '../assets/calender.png'

function Hrutik1() {

    return(
        <>
        <div className="main">
            <div className="top">
                <div className="t1">Add New Movies</div>
                <div className="t2">
                  <img src={img2} alt="" className='x' />
                </div>
            </div>
            <div className="middle">
              <div className="m1">
                <div className="ml1">
                    <img src={img1} alt="" className='dot'/>
                </div>
                <div className="mr1">TITLE</div>
              </div>
              <div className="m2">
                <input type="text" className='text1'/>
              </div>
              <div className="m3">
                <div className="ml2">
                     <img src={img1} alt="" className='dot' />
                </div>
                <div className="mr2">POSTER IMAGE</div>
              </div>
              <div className="m4">
                <input type="text" className='text2'/>
                <div className='a1'>
                <input type="file" className='txt' />
                </div>
                <div className="a2"></div>
              </div>
              <div className="m5">
                <div className="ml3">
                    <img src={img1} alt="" className='dot' />
                </div>
                <div className="mr3">RELEASE DATE</div>
              </div>
              <div className="m6">
                <input type="text" placeholder='dd-mm-yyyy'className='text3' />
                <img src={img3} alt="" className='cal' />
              </div>
              <div className="m7">
                <div className="ml4">
                   <img src={img1} alt="" className='dot' />
                </div>
                <div className="mr4">LANGUAGE</div>
              </div>
              <div className="m8">
                <input type="text" className='text4'/>
              </div>
              <div className="m9">
                <div className="ml5">
                    <img src={img1} alt="" className='dot' />
                </div>
                <div className="mr5">DESCRIPTION</div>
              </div>
              <div className="m10">
                <input type="text" className='text5' />
              </div>
              <div className="m11">
                <div className="ml6">
                    <img src={img1} alt="" className='dot' />
                </div>
                <div className="mr6">GENRES (COMMA SEPARATED)</div>
              </div>
              <div className="m12">
                <input type="text" className='text6'/>
              </div>

            </div>
            <div className="bottom">
                <button className="b1">SUBMIT FOR APPROVAL</button>
                <button className="b2">CANCEL</button>
            </div>
        </div>
        </>
    )
}
export default Hrutik1