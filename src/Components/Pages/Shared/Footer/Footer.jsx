import React from "react";

const Footer = () => {
  return (
    <footer className=" p-10 bg-neutral footer-bg text-neutral-content">
      <div className="footer">
        <div>
          <span className="footer-title text-black">Services</span>
          <span className="link link-hover">Branding</span>
          <span className="link link-hover">Design</span>
          <span className="link link-hover">Marketing</span>
          <span className="link link-hover">Advertisement</span>
        </div>
        <div>
          <span className="footer-title text-black">Company</span>
          <span className="link link-hover">About us</span>
          <span className="link link-hover">Contact</span>
          <span className="link link-hover">Jobs</span>
          <span className="link link-hover">Press kit</span>
        </div>
        <div>
          <span className="footer-title text-black">Legal</span>
          <span className="link link-hover">Terms of use</span>
          <span className="link link-hover">Privacy policy</span>
          <span className="link link-hover">Cookie policy</span>
        </div>
      </div>
      <footer className="footer footer-center p-4 text-slate-700 font-semibold mt-5 text-lg">
        <div>
          <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
