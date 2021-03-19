import styled from "styled-components";
import {
  MDBCard,
  MDBCardImage,
  MDBCardTitle,
  MDBContainer,
  MDBBtn,
} from "mdbreact";

const styles = {
  MDBContainerS: styled(MDBContainer)`
    text-align: center;
    margin-top: 5rem;
  `,

  MDBCardTitleS: styled(MDBCardTitle)`
    text-align: center;
  `,

  MDBCardS: styled(MDBCard)`
    width: 19rem;
    border-radius: 1.6rem;
  `,

  DivS: styled.div`
    padding-bottom: 2.6rem;
  `,

  MDBCardImageS: styled(MDBCardImage)`
    border-radius: 1.6rem;
  `,
  MDBBtnS: styled(MDBBtn)`
    background-color: #009999 !important;
  `,
};

export default styles;
