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
    margin-top: 5rem;
  `,

  MDBCardTitleS: styled(MDBCardTitle)`
    text-align: center;
    font-size: 1.2rem;
  `,

  MDBCardS: styled(MDBCard)`
    width: 19rem;
    border-radius: 1.8rem 1.8rem 0 0;
  `,

  DivS: styled.div`
    padding-bottom: 2.6rem;
  `,

  MDBCardImageS: styled(MDBCardImage)`
    border-radius: 1.8rem 1.8rem 0 0;
  `,
  MDBBtnS: styled(MDBBtn)`
    background-color: #009999 !important;
  `,
};

export default styles;
