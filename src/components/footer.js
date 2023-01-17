import React from 'react';
import '../App.css';
function Footer() {
  return (
    <footer>
      <div className="containerfoot">
      <p>Copyright © {new Date().getFullYear()} wayindia.com</p>
      </div>
    <style jsx>
      {`
        footer {
          background-color: rgb(2,7,51);
          padding: 20px 0;
        }
        .containerfoot {
          text-align: center;
          color: #fff;
          font-size: 14px;
        }
        footer a:hover {
          text-decoration: underline;
        }
      `}
    </style>
    </footer>
  );
}
export default Footer;
