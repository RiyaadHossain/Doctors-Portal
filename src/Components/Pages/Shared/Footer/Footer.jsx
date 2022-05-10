import React from "react";

const Footer = () => {
  return (
    <footer class=" p-10 bg-neutral footer-bg text-neutral-content">
      <div className="footer">
        <div>
          <span class="footer-title text-black">Services</span>
          <span class="link link-hover">Branding</span>
          <span class="link link-hover">Design</span>
          <span class="link link-hover">Marketing</span>
          <span class="link link-hover">Advertisement</span>
        </div>
        <div>
          <span class="footer-title text-black">Company</span>
          <span class="link link-hover">About us</span>
          <span class="link link-hover">Contact</span>
          <span class="link link-hover">Jobs</span>
          <span class="link link-hover">Press kit</span>
        </div>
        <div>
          <span class="footer-title text-black">Legal</span>
          <span class="link link-hover">Terms of use</span>
          <span class="link link-hover">Privacy policy</span>
          <span class="link link-hover">Cookie policy</span>
        </div>
      </div>
      <footer class="footer footer-center p-4 text-slate-700 font-semibold mt-5 text-lg">
        <div>
          <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
