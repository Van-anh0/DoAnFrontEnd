import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

function Contents(props) {
  const {films} = props
  const [x, setX] = useState(0);

  const goLeft = () => {
    console.log(x);

    x === 0 ? setX(-100 * (films.length - 4)) : setX(x + 100);
  };
  const goRight = () => {
    console.log(x);
    x === -100 * (films.length - 4) ? setX(0) : setX(x - 100);
  };

  return (
    <MoviesRowContainer>
      <MoviesSlider>
        {films.map((movie) => (
          <Link to={"/detail/" + movie.id} onClick={() => {}} key={movie.id}>
            <div
              key={movie.id}
              className="movieItem"
              style={{ transform: `translateX(${x}%)` }}
            >
              <img src={movie.sku[0]?.image} alt={movie.name} />
              <div className="movieName">{movie.name}</div>
            </div>
          </Link>
        ))}
      </MoviesSlider>

      <div className="btnLeft" onClick={goLeft}>
        <FiChevronLeft />
      </div>
      <div className="btnRight" onClick={goRight}>
        <FiChevronRight />
      </div>
    </MoviesRowContainer>
  );
}

export default Contents;

const MoviesRowContainer = styled.div`
  background-color: var(--color-violet);
  color: var(--color-white);
  padding: 0 100px 0;
  // border: 1px solid red;
  position: relative;
  width: 100%;
  height: 600px;

  .heading {
    font-size: 18px;
    user-select: none;
  }

  .btnLeft {
    position: absolute;
    top: 40%;
    left: 40px;
    z-index: 20;
    transform-origin: center;
    cursor: pointer;
    background-color: rgb(255, 255, 255, 0.2);
    height: 100px;
    width: 50px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    transform: translateY(-20%);
    &:hover {
      background-color: rgba(255, 255, 255, 0.5);
    }

    &: hover svg {
      opacity: 1;
      transform: scale(1.2);
    }

    svg {
      opacity: 0.7;
      font-size: 50px;
      transition: all 0.3s linear;
      color: black;
    }
  }

  .btnRight {
    position: absolute;
    top: 40%;
    right: 40px;
    z-index: 20;
    transform-origin: center;
    cursor: pointer;
    background-color: rgb(255, 255, 255, 0.2);
    height: 100px;
    width: 50px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    transform: translateY(-20%);
    &:hover {
      background-color: rgba(255, 255, 255, 0.5);
    }

    &: hover svg {
      opacity: 1;
      transform: scale(1.2);
    }

    svg {
      opacity: 0.7;
      font-size: 50px;
      color: black;
      transition: all 0.3s linear;
    }
  }
`;

const MoviesSlider = styled.div`
  //border: 1px solid red;

  width: 100%;
  height: 526px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 15px;

  /* không cho tràn thành phần con */
  overflow: hidden;

  &:hover .movieItem {
    opacity: 0.5;
  }
  .movieItem {
    min-width: 300px;
    height: 525px;

    transition: all 0.3s linear;
    user-select: none;
    overflow: hidden;
    border-radius: 6px;
    transform: center left;
    position: relavtive;

    &:hover {
      opacity: 1;
      z-index: 10;
      cursor: pointer;
    }

    img {
      width: 100%;
      height: 100%;
    }

    .movieName {
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      padding: 4px;
      text-align: center;
      font-size: 20px;
      color: white;
      background-color: rgba(0, 0, 0, 0.65);
    }
  }
`;
