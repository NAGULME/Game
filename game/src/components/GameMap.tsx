import React from 'react';
import styled from 'styled-components';

const MapContainer = styled.div`
  position: relative;
  width: 800px;
  height: 600px;
  border: 2px solid #333;
  overflow: hidden;
`;

const GameMap: React.FC = () => {
  return (
    <MapContainer>
      {/* Map tiles will be rendered here */}
    </MapContainer>
  );
};

export default GameMap;