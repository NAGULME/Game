import React from 'react';
import styled from 'styled-components';

interface PlayerProps {
  x: number;
  y: number;
  username: string;
}

const PlayerSprite = styled.div<{ x: number; y: number }>`
  position: absolute;
  width: 32px;
  height: 32px;
  background-color: red;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  transition: all 0.1s ease;
`;

const Player: React.FC<PlayerProps> = ({ x, y, username }) => {
  return (
    <PlayerSprite x={x} y={y}>
      <div>{username}</div>
    </PlayerSprite>
  );
};

export default Player;