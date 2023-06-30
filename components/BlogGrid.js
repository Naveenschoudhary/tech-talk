import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogGrid = (props) => {
  return (
    <div className="blog_item">
      <Link href="#">
        <div className="bi_img">
          <img
            src="https://source.unsplash.com/random/300"
            width={400}
            height={200}
            alt="some alt text"
          />
        </div>
        <div className="bi_title">
          Mobile Wallets Demystified : Eligibility, Permissions Etc.
        </div>
        <div className="bi_content">
          Mobile wallets are making headlines these days. Domestic e-commerce
          companies, such as Flipkart, plan to launch a wallet soon, while a few
          payment gateways, such as Paytm and Mobikwik, offer semi-closed
          wallets already. Telecom operators also offer this facility.
        </div>
        <div className="reading_time">5 MIN READ</div>
      </Link>
    </div>
  );
};

export default BlogGrid;
