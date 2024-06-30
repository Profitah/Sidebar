/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer css={style}>
      <div className="left">
        <div>
          <div className="title">After Like</div>
          <div className="description">
          online anonymous community</div>
        </div>
      </div>
      <div className="right">
        <div className="icon-container">
          <a href="#">
            <FaEnvelope className="icon" />
          </a>
          <a href="#">
            <FaGithub className="icon" />
          </a>
        </div>
        <div className="credits">made by. I YoonAh</div>
      </div>
    </footer>
  );
};

export default Footer;

const style = css`
  background-color: #111;
  color: #999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
  position: absolute; 
  bottom: 0;         
  width: 100%;        

  .left,
  .right {
    display: flex;
    align-items: center;
  }

  .right {
    flex-direction: column;
    align-items: flex-end;
    margin-right: 2rem;
  }

  .icon-container {
    display: flex;
    gap: 10px;
  }

  .icon {
    width: 24px;
    height: 24px;
    color: #fff;
  }

  .title {
    font-size: 1.2rem;
    font-weight: bold;
    color: #ccc;
  }

  .description {
    font-size: 0.9rem;
    color: #666;
  }

  .credits {
    font-size: 0.9rem;
    color: #666;
    margin-top: 10px;
  }
`;
