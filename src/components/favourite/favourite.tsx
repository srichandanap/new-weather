import React, { useState } from 'react'
import './favourite.css';
import { useNavigate } from 'react-router-dom';


const Favourite = () => {
  const [elements, setelements] = useState(false)
  const [mobileModal, setMobileModal] = useState(false)
  const [modal, setModal] = useState(false)


  const navigate = useNavigate();

  return (
    <>
      <div className="searchFavMobile">
        <div className="favMobileLeft">
          <div className="favMobileImage">
            <img src={require("../../assets/icon_back_black.png")} alt="image" className='arrowFavMobile' onClick={() => navigate('/')} />
          </div>
          <div className="favMobileText">Favourite</div>

        </div>
        <div className="favMobileRight">
          <img src={require("../../assets/searchMobile.png")} alt="image" className='searchFavImageMobile' />
        </div>
      </div>


      {elements ?
        (<div className="favImage">
          <img src={require("../../assets/icon_nothing.png")} alt="image" />
          <div className="text">No Favourites added</div>
        </div>)
        :
        (
          <div className="favPlaceList">
            <div className="favText">
              <div className="favTextLeft">6 City added as favourite</div>
              <div className="favTextRight" onClick={() => { setModal(true); setMobileModal(true); }}>Remove All</div>
            </div>
            <div className="favPlaces" >
              <div className="favPlaceItem">

                <div className="place">
                  Udupi, Karnataka
                </div>
                <div className="placeTemp">

                  <div className="placeImage">
                    <img src={require("../../assets/icon_mostly_sunny_small.png")} alt="image" />
                  </div>
                  <div className="celFlex">
                    <div className="temp">31</div>
                    <div className="cel">{"\u00B0"}c</div>
                  </div>
                  <div className="condition">Mostly Sunny</div>

                </div>
                <div className="placeFavImage">
                  <img src={require("../../assets/icon_favourite_Active.png")} alt="image" />
                </div>
              </div>


              <div className="favPlaceMobileItem">

                <div className="favMobileDetails">
                  <div className="placeMobile">
                    Udupi, Karnataka
                  </div>
                  <div className="placeTempMobile">

                    <div>
                      <img src={require("../../assets/icon_mostly_sunny_small.png")} alt="image" className="placeImageMobile" />
                    </div>
                    <div className="celFlexMobile">
                      <div className="tempMobile">31</div>
                      <div className="celMobile">{"\u00B0"}c</div>
                    </div>
                    <div className="conditionMobile">Mostly Sunny</div>

                  </div>
                </div>
                <div className="placeFavImageMobile">
                  <img src={require("../../assets/icon_favourite_Active.png")} alt="image" />
                </div>
              </div>


              {modal ?
                (
                  <div className="modalBlur">
                    <div className="modal">
                      <div className="modalText">Are you sure to remove all your favourites?</div>
                      <div className="buttons">
                        <button className="btnNo" onClick={() => { setModal(false) }}>NO</button>
                        <button className="btnYes">YES</button>
                      </div>
                    </div>
                  </div>
                )
                :
                ""
              }

              {mobileModal ?
                (
                  <div className="modalMobileBlur">
                    <div className="modalMobile">
                      <div className="modalTextMobile">Are you sure to remove all your favourites?</div>
                      <div className="buttonsMobile">
                        <button className="btnMobile" onClick={() => { setMobileModal(false) }}>NO</button>
                        <button className="btnMobile">YES</button>
                      </div>
                    </div>
                  </div>
                )
                :
                ""
              }
            </div>
          </div>
        )}


    </>
  )
}

export default Favourite