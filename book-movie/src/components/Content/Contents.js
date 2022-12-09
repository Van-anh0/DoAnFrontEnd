import styled from "styled-components";
import { useState } from "react";
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';
import { Link } from "react-router-dom";
const movies = [
    "https://arena.fpt.edu.vn/wp-content/uploads/2021/04/5-yeu-to-tao-nen-mot-poster-phim-an-tuong.jpeg",
    "https://i.imgur.com/plLvz9w.jpg",
    "https://vcdn1-giaitri.vnecdn.net/2013/12/28/02-5642-1388201276.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=SrKIQFv66gbIpTHxa0A5kg",
    "http://d1j8r0kxyu9tj8.cloudfront.net/files/1618301042CTBAF7i4v3cXFfn.jpg",
    "https://gaumedia.vn/wp-content/uploads/2021/06/5-buoc-thiet-ke-poster-phim-5.png",
    "https://congthanh.vn/uploads/images/in-poster-phim-anh-dep-.jpg",
    "https://afamilycdn.com/150157425591193600/2021/10/5/photo-1-1633414522481692334385-16334306847252027286225.jpg",
    "https://photo2.tinhte.vn/data/attachment-files/2021/09/5630141_239789293_342933277171331_3373813433353902825_n.jpg",

];
function Contents(props) {
    

   
    const [x,setX] = useState(0);
    
   const goLeft = () => {
    console.log(x);

    x === 0? setX(-100*(props.films.length-4)) : setX(x+100);
   };
   const goRight = () => {
    console.log(x);
    x === -100 * (props.films.length - 4)? setX(0) : setX(x-100);
   };

    return (
        <MoviesRowContainer>
            <MoviesSlider>

                {
                    props.films.map((movie, index) => (
                        <Link to={"/detail/"+index} onClick={() => {}}>
                        <div key={index} className="movieItem" style={{transform: `translateX(${x}%)`}}> 
                            <img src={movie.Poster} alt={movie.Title} />
                            <div className="movieName">{movie.Title}</div>
                        </div>
                        </Link>
                    ))
                }


            </MoviesSlider>

            <div className="btnLeft" onClick={goLeft}> 
                <FiChevronLeft/>
            </div>
            <div className="btnRight" onClick={goRight}>
                <FiChevronRight/>
            </div>
        </MoviesRowContainer>
        
    )
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

    .btnLeft{
        position: absolute;
        top: 40%;
        left: 40px;
        z-index: 20;
        transform-origin: center;
        cursor: pointer;
        background-color: rgb(255,255,255,0.2);
        height: 100px;
        width: 50px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        transform: translateY(-20%);
        &:hover{
            background-color: rgba(255,255,255,0.5);
        }

        &: hover svg {
            opacity: 1;
            transform: scale(1.2);
        }

        svg {
            opacity: 0.7;
            font-size: 50px;
            transition: all 0.3s linear;
            color:black;
        }
    }

    .btnRight{
        position: absolute;
        top: 40%;
        right: 40px;
        z-index: 20;
        transform-origin: center;
        cursor: pointer;
        background-color: rgb(255,255,255,0.2);
        height: 100px;
        width: 50px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        transform: translateY(-20%);
        &:hover{
            background-color: rgba(255,255,255,0.5);
        }

        &: hover svg {
            opacity: 1;
            transform: scale(1.2);
        }

        svg {
            opacity: 0.7;
            font-size: 50px;
            color:black;
            transition: all 0.3s linear;
        }
    }
`;

const MoviesSlider = styled.div`
 //border: 1px solid red;

    width: 100%;
    height: 526px;
    box-sizing: border-box;
    margin:0;
    padding: 0;
    display: flex;
    align-items:center;
    gap: 15px;


    /* không cho tràn thành phần con */
    overflow: hidden; 

    &:hover .movieItem{
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

        &:hover{
            opacity: 1;
            z-index: 10;
            cursor: pointer;
        }

        img{
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
            color:white;
            background-color: rgba(0,0,0,0.65);
        }
    }
`;