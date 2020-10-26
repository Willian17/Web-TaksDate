import React from 'react';


import { Container, Panel, Skeleton } from './styles';

const LoadingFeedShare: React.FC = () => {
  return (
    <Container>
      <Panel className="no-shadow">
        <Skeleton className="row-skeleton" />
        <Skeleton className="row-skeleton" />
      </Panel>
    </Container>
  );
};

export default LoadingFeedShare;