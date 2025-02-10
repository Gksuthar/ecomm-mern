import React from "react";
import { IoTimeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const BlogItem = () => {
  return (
    <div className="blofItem group cursor-pointer">
      <div className="imgWrapper w-full overflow-hidden rounded-md relative">
        <img
          src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/psblog/b/9/1105_813/b-blog-7.jpg"
          alt="blogImage"
          className="w-full transition-all duration-300 group-hover:scale-105 "
        />
        <span className="flex items-center justify-center text-white absolute bottom-[15px] right-[15px] z-50 bg-primary p-1 rounded-md gap-1 text-[14px] font-[500]">
          <IoTimeOutline className="text-[14px] font-bold" />
          05 February, 2025
        </span>
      </div>

      <div className="info py-4">
        <h2 className="text-[16px] font-[500] text-black">
            <Link to='/'>Nullam ullamcorper ornare molestie </Link> </h2>
        <p className="text-[12px] font-[500] text-[rgba(0,0,0,0.8)] mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry....... 
            {/* Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum */}
            </p>
            <Link className="link font-[500] text-[14px] underline">
            ReadMore
            </Link>
      </div>
    </div>
  );
};

export default BlogItem;
