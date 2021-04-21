import styled from "styled-components";
import {
  MDBCard,
  MDBCardImage,
  MDBCardTitle,
  MDBContainer,
  MDBBtn,
  MDBIcon,
} from "mdbreact";

const styles = {
  MDBContainerS: styled(MDBContainer)`
    margin-top: 5rem;
  `,

  MDBCardTitleS: styled(MDBCardTitle)`
    font-size: 1.2rem;
    font-weight: bolder;
    text-align: left;
  `,

  MDBCardS: styled(MDBCard)`
    width: 17rem;
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

  MDBIconS: styled(MDBIcon)`
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
      transition-duration: 0.2s;
    }
  `,
};

export default styles;
