import styled from 'styled-components';

export const Container = styled.div`
  > div {
    padding: 40px 40px 40px 12px;
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    .row-skeleton {
      height: 12px;
      &:nth-child(1) {
        width: 100%;
      }
      &:nth-child(2) {
        width: 90%;
        margin-top: 20px;
      }
    }
  }


`;

export const Panel = styled.div`
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 2px 3px rgba(0, 0, 0, 0.2);
    &.no-shadow {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.02), 0 2px 3px rgba(0, 0, 0, 0.05);
    }
    border-radius: 30px;
`;

export const Skeleton = styled.div`
background-image: linear-gradient(
  -90deg,
  #e7edf1 0%,
  #f8f8f8 50%,
  #e7edf1 100%
);
background-size: 400% 400%;
animation: shimmer 1.2s ease-in-out infinite;
@keyframes shimmer {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: -135% 0%;
  }
}
&.white {
  background-image: linear-gradient(-90deg, #fff 0%, #e7edf1 50%, #fff 100%);
}
`;