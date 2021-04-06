import { MDBCardBody, MDBCardText } from "mdbreact";
import { Link } from "react-router-dom";
import React from "react";

import styles from "./MovieCardnGrid.styles";

const MovieCard = (props) => {
  // const match = useRouteMatch();
  const detailsPath = `/movie/${props._id}`;

  // console.debug(`MovieCard match:`, match);

  return (
    <>
      <styles.DivS>
        <styles.MDBCardS>
          <Link to={detailsPath}>
            <styles.MDBCardImageS className="img-fluid" src={props.img} waves />
          </Link>
          <MDBCardBody className="p-2">
            <MDBCardText className="m-0">{props.released}</MDBCardText>
            <styles.MDBCardTitleS>{props.title}</styles.MDBCardTitleS>
            {/* <styles.MDBBtnS href={detailsPath}>Read More</styles.MDBBtnS> */}
          </MDBCardBody>
        </styles.MDBCardS>
      </styles.DivS>
    </>
  );
};

export default MovieCard;
