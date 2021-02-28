import styled from 'styled-components';
import {
  MDBCard,
  MDBCardImage,
  MDBCardTitle,
  MDBContainer,
} from 'mdbreact';

const styles = {
  MDBContainerS: styled(MDBContainer)`
    text-align: center;
    margin-top: 5rem;
  `,

  MDBCardTitleS: styled(MDBCardTitle)`
    text-align: center;
  `,

  MDBCardS: styled(MDBCard)`
    width: 18rem;
    border-radius: 1.6rem;
  `,

  DivS: styled.div`
    padding-bottom: 2.6rem;
  `,

  MDBCardImageS: styled(MDBCardImage)`
    border-radius: 1.6rem;
  `,
};

export default styles;
