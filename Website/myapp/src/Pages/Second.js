
import { NavLink } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './Style.css'
// import './main.js'
import l1 from '../img/total_lunar.png'
import l2 from '../img/penumbral_lunar_eclipse.png'
import l3 from '../img/Partial_lunar.png'
import s1 from '../img/total_solar.png'
import s2 from '../img/Annular_solar.png'
import s3 from '../img/partial_solar.png'




const Second = () => {

   



    return (
        <div>
            <Helmet>
                
    {/* <!-- ICONSCOUT CDN--> */}
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v2.1.6/css/unicons.css" />

    {/* <!-- GOOGLE FONTS (MONTSERRAT)--> */}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>

    
            </Helmet>
               <nav>
        <div className="container nav__container">
                  
            <ul className="nav__menu" style={{justifyContent:'end'}}>
                <li><a href="#section1">Solar Eclipse</a></li>
                <li><a href="#section2">Lunar Eclipse</a></li>
                <li><NavLink to='/first'>Back to Home</NavLink></li>
                
            </ul>
            <button id="open-menu-btn"><i className="uil uil-bars"></i></button>
            <button id="close-menu-btn"><i className="uil uil-multiply"></i></button>
        </div>
    </nav>


    <div id="section1" className="container-fluid text-white"
    style={{padding:'200px'}}>
    <h1>Solar Eclipse</h1><br />
   
    
    <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src={s1} alt="Image 1" style={{height: '200px', width: '300px'}} /></td>
              <td><img src={s2} alt="Image 2" style={{height: '200px', width: '300px'}} /></td>
              <td><img src={s3} alt="Image 3" style={{height: '200px', width: '300px'}}/></td>
            </tr>
          </tbody>
        </table>
      </div>
    
    
    <br /><br />
    <p style={{textAlign: 'justify'}}>
      A solar eclipse occurs when the Moon passes between Earth and the Sun, thereby obscuring the view of the Sun from a small part of the Earth, totally or partially. 
      Such an alignment occurs approximately every six months, during the eclipse season in its new moon phase, when the Moon's orbital plane is closest to the plane of the Earth's orbit.
      In a total eclipse, the disk of the Sun is fully obscured by the Moon. In partial and annular eclipses, only part of the Sun is obscured. Unlike a lunar eclipse, which may be viewed from anywhere 
      on the night side of Earth, a solar eclipse can only be viewed from a relatively small area of the world. As such, although total solar eclipses occur somewhere on Earth every 18 months on average, 
      they recur at any given place only once every 360 to 410 years.An annular eclipse occurs when the Sun and Moon are exactly in line with the Earth, but the apparent size of the Moon is smaller than that 
      of the Sun. Hence the Sun appears as a very bright ring, or annulus, surrounding the dark disk of the Moon.A hybrid eclipse (also called annular/total eclipse) shifts between a total and annular eclipse.
       At certain points on the surface of Earth, it appears as a total eclipse, whereas at other points it appears as annular. Hybrid eclipses are comparatively rare.A partial eclipse occurs when the Sun and Moon 
      are not exactly in line with the Earth and the Moon only partially obscures the Sun. This phenomenon can usually be seen from a large part of the Earth outside of the track of an annular or total eclipse. 
      However, some eclipses can be seen only as a partial eclipse, because the umbra passes above the Earth's polar regions and never intersects the Earth's surface.
    </p>
    </div>
    
    <div id="section2" className="container-fluid text-white"
    style={{padding:'200px', overflowX:'auto'}}>
    <h1>Lunar Eclipse</h1><br />
    <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src={l1} alt="Image 1" style={{height: '200px', width: '300px'}}/></td>
              <td><img src={l2} alt="Image 2" style={{height: '200px', width: '300px'}}/></td>
              <td><img src={l3} alt="Image 3" style={{height: '200px', width: '300px'}}/></td>
            </tr>
          </tbody>
        </table>
      </div><br /><br />
    <p style={{textAlign:'justify'}}>
      A lunar eclipse is an astronomical event that occurs when the Moon moves into the Earth's shadow, causing the Moon to be darkened.Such alignment occurs during an eclipse season, approximately every six months, during the
      full moon phase, when the Moon's orbital plane is closest to the plane of the Earth's orbit.This can occur only when the Sun, Earth, and Moon are exactly or very closely aligned (in syzygy) with Earth between the other 
      two, which can happen only on the night of a full moon when the Moon is near either lunar node. The type and length of a lunar eclipse depend on the Moon's proximity to the lunar node.A penumbral lunar eclipse occurs when
       part or all of the Moon passes into the Earth's penumbra.No part of the moon is in the Earth's umbra during this event. The penumbra causes a subtle dimming of the lunar surface, which is only visible to the naked eye when
       about 70% of the Moon's diameter has immersed into Earth's penumbra.When the Moon penetrates partially into the Earth's umbra, it is known as a partial lunar eclipse, while a total lunar eclipse occurs when the entire 
      Moon enters the Earth's umbra. During this event, one part of the moon is in the Earth's umbra, while the other part is in the Earth's penumbra.If the Moon entirely passes into the Earth's umbra, a total lunar eclipse occurs.
      Just prior to complete entry, the brightness of the lunar limb—the curved edge of the Moon still being hit by direct sunlight—will cause the rest of the Moon to appear comparatively dim. The moment the Moon enters a complete 
      eclipse, the entire surface will become more or less uniformly bright. Later, as the Moon's opposite limb is struck by sunlight, the overall disk will again become obscured.
    </p>
    </div>

    



        </div>

    )
}

export default Second









 
    
    
    
    
    
