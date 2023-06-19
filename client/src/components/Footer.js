import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted' style={{marginBottom:"0"}}>
    {/* <div className='content-footer'>
      <div className='sub-content'>
        <FontAwesomeIcon icon="fa-light fa-truck" />
        <h1>Free delivery</h1>
        <p>And free returns. See checkout for delivery dates.</p>
      </div>
      <div className='sub-content'>
        <FontAwesomeIcon icon="fa-light fa-circle-dollar" />
        <h1>Pay monthly at 0% APR</h1>
        <p>Choose to check out with Apple Card Monthly Installments.</p>
      </div>
    </div> */}
    <section className=''>
      <MDBContainer className='text-center text-md-start mt-5'>
        <MDBRow className='mt-3'>
          <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>
              <MDBIcon icon="gem" className="me-3" />
              <img
                src="https://cdn.shopify.com/s/files/1/0023/4104/4283/files/logoastor_150x.png?v=1645334114"
                alt=""
                style={{ width: "120px", height: "50px", marginLeft: "-20px" }}
              />
            </h6>
            <p>
            MobileShop gives you a chance to quickly and easily find the device you want and have it delivered to your home in no time, 
            regardless of your location, as long as it is in one of the countries of the EU.
            </p>
          </MDBCol>

          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
            <p>
              <a href='#!' className='text-reset'>
                Iphone
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                MacBook Air
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Smart Watch
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                IPaD
              </a>
            </p>
          </MDBCol>

          <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
            <p>
              <a href='#!' className='text-reset'>
                Pricing
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Settings
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Orders
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Help
              </a>
            </p>
          </MDBCol>

          <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
            <p>
              <MDBIcon icon="home" className="me-2" />
              New York, NY 10012, US
            </p>
            <p>
              <MDBIcon icon="envelope" className="me-3" />
              reliancedigital@ril.com
            </p>
            <p>
              <MDBIcon icon="phone" className="me-3" /> +91 7977912345
            </p>
            <p>
              <MDBIcon icon="print" className="me-3" /> +91 7977912346
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

    <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      © 2023 Copyright:
      <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
        astor.com
      </a>
    </div>
  </MDBFooter>
  )
}

export default Footer