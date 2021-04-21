import { MDBCardBody, MDBIcon, MDBRow, MDBCol } from "mdbreact";
import { Link } from "react-router-dom";
import React, { useState } from "react";

import styles from "./MovieCardnGrid.styles";

/**
 * MovieCard Component.
 * @param props Movie details.
 * @returns MovieCard React Component.
 */
const MovieCard = (props) => {
  const detailsPath = `/movie/${props._id}`;

  // Like function n Bookmark function
  const [liked, setLike] = useState(false);

  const toggleLike = () => {
    setLike((prev) => !prev);
    console.log("Like is clicked.");
  };

  const [bookmark, setBookmark] = useState(false);

  const toggleBookmark = () => {
    setBookmark((prev) => !prev);
    console.log("Bookmark is clicked.");
  };

  return (
    <>
      <styles.DivS>
        <styles.MDBCardS className="mx-auto">
          <Link to={detailsPath}>
            <styles.MDBCardImageS className="img-fluid" src={props.img} waves />
          </Link>
          <MDBCardBody className="py-2 mdb-color">
            <MDBRow>
              <MDBRow>
                <MDBCol className="pt-1">
                  <MDBIcon
                    icon="crown"
                    size="lg"
                    className="pl-3 yellow-text"
                  />
                </MDBCol>
                <MDBCol className="p-0">
                  <h5 className="pt-1 white-text">{props.rank}</h5>
                </MDBCol>
              </MDBRow>
              <MDBCol></MDBCol>
              <MDBCol></MDBCol>
              <MDBCol>
                <styles.MDBIconS
                  onClick={toggleLike}
                  icon="heart"
                  size="2x"
                  className={liked ? "deep-orange-text" : "grey-text"}
                  style={{ color: "#585858" }}
                ></styles.MDBIconS>
              </MDBCol>
              <MDBCol>
                <styles.MDBIconS
                  onClick={toggleBookmark}
                  icon="bookmark"
                  size="2x"
                  className={bookmark ? "cyan-text" : "grey-text"}
                ></styles.MDBIconS>
              </MDBCol>
            </MDBRow>

            <styles.MDBCardTitleS className="pt-3 white-text">
              {props.title}
            </styles.MDBCardTitleS>
          </MDBCardBody>
        </styles.MDBCardS>
      </styles.DivS>
    </>
  );
};

export default MovieCard;
