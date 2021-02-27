import styled from 'styled-components';
import {
  MDBCard,
  MDBCardTitle,
  MDBContainer,
} from 'mdbreact';

export default {
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
};