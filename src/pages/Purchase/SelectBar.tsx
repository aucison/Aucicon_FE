import React from 'react';
import styled from 'styled-components';
import { throttle } from 'lodash';
import { SelectBarProps } from './AucItem';

interface ColorProps {
  color: string;
}

const SelectBar = ({ percentage, setPercentage }: SelectBarProps) => {
  const barRef = React.useRef<HTMLDivElement>(null);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text/plain', '');
    e.dataTransfer.effectAllowed = 'move';
    document.body.classList.add('dragging');
  };

  const handleDragOver = throttle((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    let boundingRect;
    if (!barRef.current) return;
    boundingRect = barRef.current.getBoundingClientRect();
    console.log(boundingRect);
    let xPositionInBar = e.clientX - boundingRect.x;
    let percentageInBar = (xPositionInBar / boundingRect.width) * 100;
    if (percentageInBar <= 15) setPercentage(3);
    else if (15 <= percentageInBar && percentageInBar <= 40) setPercentage(5);
    else if (45 <= percentageInBar && percentageInBar <= 60) setPercentage(10);
    else if (65 <= percentageInBar && percentageInBar <= 80) setPercentage(15);
    else if (percentageInBar >= 85) setPercentage(25);
    else setPercentage(percentage);
  }, 100);

  // eslint-disable-next-line no-unused-vars
  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    document.body.classList.remove('dragging');
  };
  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    setPercentage(Number(target.id));
  };

  const progressValues = [5, 10, 15, 25];

  return (
    <Container onDragOver={handleDragOver}>
      <StartDot
        draggable="true"
        onDrag={handleDragStart}
        onDragEnd={handleDragEnd}
        onClick={onClick}
        id="3"
      />
      <Progress
        ref={barRef}
        onDrop={handleDragOver}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        {progressValues.map((value) => (
          <ProgressBar
            key={value}
            color={percentage >= value ? 'black' : 'lightGrey'}
          >
            <div id={String(value)} onClick={onClick} />
          </ProgressBar>
        ))}
      </Progress>

      <Percentages>
        <span>3%</span>
        <span>5%</span>
        <span>10%</span>
        <span>15%</span>
        <span>25%</span>
      </Percentages>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 40px;
  padding: 20px 10px;
  flex-direction: column;
  display: flex;
  &.dragging {
    cursor: move !important;
  }
`;

const Progress = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
`;

const ProgressBar = styled.div<ColorProps>`
  width: 25%;
  height: 5px;
  display: flex;
  margin-top: 3px;
  justify-content: flex-end;
  background-color: ${({ theme, color }) => theme.colors[color]};
  div {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-bottom: 12px;
    position: relative;
    bottom: 3px;
    background-color: ${({ theme, color }) => theme.colors[color]};
  }
  div:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

const StartDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-bottom: 12px;
  background-color: black;
  position: absolute;
  z-index: 3;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

const Percentages = styled.div`
  width: 100%;
  height: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  margin-top: 16px;
`;

export default SelectBar;
