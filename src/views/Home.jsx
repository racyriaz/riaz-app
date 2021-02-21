import React from 'react';
import Loading from '../components/Loading'
import SocialMediaBar from '../components/SocialMediaBar'

function Home() {
  return (
    <div >
      <div className="flex-container-row">
        <div className="my-name">
          MOHAMED<br />RIAZ
          <div>
            <SocialMediaBar />
            <div style={{ zIndex: 1, position: "relative", top: "0.5rem" }}>
              <Loading />
            </div>
          </div>
        </div>
        <div>
          center
      </div>
        <div>
          right
      </div>
      </div>

    </div>
  )
}

export default Home
