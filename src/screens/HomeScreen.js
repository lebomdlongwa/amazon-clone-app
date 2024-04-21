import React from "react";
import "./HomeScreen.css";
import Product from "../Product";

function HomeScreen() {
  return (
    <div className="homescreen">
      <img
        className="homescreen__image"
        src="https://vertexbazaar.com/wp-content/uploads/2022/04/amazon-prime-video-banner.jpg"
        alt=""
      />

      <div className="homescreen__products">
        <Product
          title=" The Lean Startup: How Constant Innovation Creates Radical Successful
          Businesses Paperback"
          price={11.59}
          rating={3}
          image="https://m.media-amazon.com/images/I/6107aYfAoHL.jpg"
          id="75446546"
        />
        <Product
          title="2022 Newest HP Pavilion 15.6 FHD 1080P IPS Laptop, 8-Core AMD Ryzen 7-5700U(Up to 4.3GHz, Beat i7-1180G7), 16GB RAM, 512GB NVMe SSD, Numpad, HDMI, WiFi, USB-A&C, Fast Charge, Audio by B&O, Win11 "
          price={749}
          rating={5}
          image="https://raines.africa/wp-content/uploads/2023/09/image-301.jpeg"
          id="0876764"
        />
      </div>
      <div className="homescreen__products">
        <Product
          title=" The Lean Startup: How Constant Innovation Creates Radical Successful
          Businesses Paperback"
          price={11.59}
          rating={3}
          image="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/u-series/u2723qe/media-gallery/monitor-u2723qe-gallery-3.psd?fmt=pjpg&pscan=auto&scl=1&wid=3471&hei=3200&qlt=100,1&resMode=sharp2&size=3471,3200&chrss=full&imwidth=5000"
          id="837457678"
        />
        <Product
          title=" The Lean Startup: How Constant Innovation Creates Radical Successful
          Businesses Paperback"
          price={749}
          rating={5}
          image="https://raines.africa/wp-content/uploads/2023/07/image-7807-1.jpeg"
          id="87255624"
        />
        <Product
          title=" The Lean Startup: How Constant Innovation Creates Radical Successful
          Businesses Paperback"
          price={749}
          rating={5}
          image="https://images.thdstatic.com/productImages/548542de-fc99-4c55-b1be-6d9e9433ddd2/svn/black-task-chairs-oln-ergomax-blk-64_1000.jpg"
          id="87276457"
        />
      </div>
      <div className="homescreen__products">
        <Product
          title=" The Lean Startup: How Constant Innovation Creates Radical Successful
          Businesses Paperback"
          price={11.59}
          rating={3}
          image="https://m.media-amazon.com/images/I/71IbtYa4G1S._AC_UY1000_.jpg"
          id="7625265236"
        />
        <Product
          title=" The Lean Startup: How Constant Innovation Creates Radical Successful
          Businesses Paperback"
          price={749}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk2OrKb4i737AlhYRo1ooCJxEj5ATKYydy_g&usqp=CAU"
          id="87252654"
        />
      </div>
      <div className="homescreen__products">
        <Product
          title=" The Lean Startup: How Constant Innovation Creates Radical Successful
          Businesses Paperback"
          price={11.59}
          rating={3}
          image="https://i.pcmag.com/imagery/roundups/02Qp8NssQCHrqFVFEOXnkxr-28..v1623684908.jpg"
          id="782676245"
        />
        <Product
          title=" The Lean Startup: How Constant Innovation Creates Radical Successful
          Businesses Paperback"
          price={749}
          rating={5}
          image="https://cdn-images.farfetch-contents.com/16/59/37/69/16593769_32499834_1000.jpg"
          id="907867435"
        />
        <Product
          title=" The Lean Startup: How Constant Innovation Creates Radical Successful
          Businesses Paperback"
          price={749}
          rating={5}
          image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702708"
          id="987854356"
        />
      </div>
      <div className="homescreen__products">
        <Product
          title=" The Lean Startup: How Constant Innovation Creates Radical Successful
          Businesses Paperback"
          price={11.59}
          rating={3}
          image="https://m.media-amazon.com/images/I/71IbtYa4G1S._AC_UY1000_.jpg"
          id="89766544"
        />
        <Product
          title=" The Lean Startup: How Constant Innovation Creates Radical Successful
          Businesses Paperback"
          price={749}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqza33RNZnQHiTGFhDrB9Ximei8akFgoj1Hg&usqp=CAU"
          id="98776543"
        />
      </div>
    </div>
  );
}

export default HomeScreen;
