import React from 'react'
import Product from '../Product/Product'
import './Home.css'

function Home() {
  return (
    <div className='home'>
      {/* <img className='homeImg' src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/8177jCk3wIL._SX3000_.jpg" alt="" /> */}
      {/* <img className='homeImg' src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71qB9MjiPcL._SX3000_.jpg" alt="" /> */}
      <img className='homeImg' src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81HRl1YLiVL._SX3000_.jpg" alt="" />

      {/* Product */}
      {/* Product Id, Image, Price, Rating, Description */}
      <div className='homeProductSection'>
        <Product
          id="1"
          description="Apple iPhone 14 Pro (128 GB) - Deep Purple"
          image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61HHS0HrjpL._AC_SY200_.jpg"
          rating={4}
          price={122999}
        />
        <Product
          id='2'
          description="Samsung Galaxy S23 Ultra 5G (Green, 12GB, 256GB Storage)"
          image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61VfL-aiToL._AC_SY200_.jpg"
          rating={4}
          price={124999}
        />
      </div>
      <div className='homeProductSection'>

        <Product
          id='3'
          description="boAt Rockerz 255 Pro+ in-Ear Bluetooth Neckband with Upto 40 Hours Playback, ASAP Charge, IPX7, Dual Pairing, BT v5.0, with Mic (Teal Green)"
          image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61aasAbKvvL._AC_SY200_.jpg"
          rating={4}
          price={1199}
        />
        <Product
          id='4'
          description="boAt Immortal IM 300 Over-Ear Wired Gaming Headphones with 50mm Drivers, 3D Spatial Sound, RGB LEDs, Dual Mics & Driver Customizations via Plugin Labz(White Sabre)"
          image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/610bnYBwzmL._AC_SY200_.jpg"
          rating={4}
          price={2099}
        />
        <Product
          id='5'
          description="boAt Rockerz 510 Bluetooth Wireless On Ear Headphones with Mic (Jazzy Blue)"
          image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61MwDtEtrXL._AC_SY200_.jpg"
          rating={4}
          price={1199}
        />
      </div>
      <div className='homeProductSection'>
        <Product
          id='6'
          description="MSI Sword 15 A12UDX, Intel 12th Gen. i5-12450H, 40CM FHD 144Hz Gaming Laptop (16GB/1TB NVMe SSD/Windows 11 Home/Nvidia GeForce RTX3050, 6GB GDDR6/White/2.25Kg), A12UDX-468IN"
          image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/41JBRsjrMnL._MCnd_AC_.jpg"
          rating={4}
          price={96990}
        />
      </div>
    </div>
  )
}

export default Home