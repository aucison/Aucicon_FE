import React, { ChangeEvent, KeyboardEvent, useState, useRef } from 'react';
import { styled, css } from 'styled-components';

interface ToggleBtnProps {
  toggle: boolean;
}

const Sell = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [selectedCategory, setSelectedCategory] = useState('일반');
  const [toggle, setToggle] = useState(false);

  const button1Ref = useRef<HTMLButtonElement>(null);
  const button2Ref = useRef<HTMLButtonElement>(null);

  const handleTitleField = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionField = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };
  // eslint-disable-next-line no-unused-vars
  const handleKeyInputEvent = (e: KeyboardEvent<HTMLDivElement>) => {
    console.log(title);
  };

  const onClickButton = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    [button1Ref.current, button2Ref.current].forEach((btn) => {
      if (btn && btn.classList.contains('selected')) {
        btn.classList.remove('selected');
      }
    });
    setSelectedCategory(target.innerText);
    target.classList.add('selected');
  };

  const clickedToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <Wrapper>
      <h1>내 아이템 판매하기</h1>
      <Caution>
        <h3>주의사항</h3>
        <ul>
          <li>
            신뢰할 수 있는 거래를 위해 상품 설명 및 사진을 상세히 적어주세요.
          </li>
          <li>
            허위 거래 및 사기 등의 행위는 이용 제한 및 법적 제재의 대상이 될 수
            있습니다.
          </li>
          <li>
            주의사항... 더 생각해보면 좋을 것 같아요. 아직 떠오르는 게 없어서
          </li>
        </ul>
      </Caution>
      <Category>
        <Index>
          <h3>카테고리</h3>
        </Index>
        <button
          type="button"
          className="category_btn selected"
          onClick={onClickButton}
          ref={button1Ref}
        >
          일반
        </button>
        <button
          type="button"
          className="category_btn"
          onClick={onClickButton}
          ref={button2Ref}
        >
          핸드메이드
        </button>
      </Category>
      <BoxFormat>
        <Index>
          <h3>제목</h3>
        </Index>
        <input
          placeholder="제목"
          type="text"
          onChange={handleTitleField}
          onKeyDown={handleKeyInputEvent}
          value={title}
        />
      </BoxFormat>
      <BoxFormat>
        <Index>
          <h3>상품 설명</h3>
        </Index>
        <textarea
          placeholder="상품에 대한 상세 설명 등을 작성해주세요."
          onChange={handleDescriptionField}
          value={description}
        />
      </BoxFormat>
      <BoxFormat>
        <Index>
          <h3>사진 첨부</h3>
        </Index>
        <button>사진 첨부하기 {'>'}</button>
      </BoxFormat>
      <SelectArea>
        <Index>
          <h3>경매 비활성화</h3>
        </Index>
        <ToggleBtn onClick={clickedToggle} toggle={toggle}>
          <Circle toggle={toggle} />
        </ToggleBtn>
      </SelectArea>
      {!toggle ? (
        <>
          <BoxFormat>
            <Index>
              <h3>최소 입찰가</h3>
            </Index>
            <input placeholder="최소 입찰가" type="number" />
          </BoxFormat>
          <BoxFormat>
            <Index>
              <h3>경매가</h3>
            </Index>
            <input placeholder="경매가" type="number" />
          </BoxFormat>
        </>
      ) : (
        <BoxFormat>
          <Index>
            <h3>상품 가격</h3>
          </Index>
          <input placeholder="상품 가격을 입력해주세요." type="number" />
        </BoxFormat>
      )}
      <SubmitBox>
        <SubmitButton>등록하기</SubmitButton>
      </SubmitBox>
    </Wrapper>
  );
};

// 버튼 높이 24px
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${({ theme }) => theme.paddings.desktop};
  h1 {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
`;

const Caution = styled.div`
  width: 100%;
  margin-top: 20px;
  background-color: #d9d9d9;
  padding: 0px 20px;
  box-sizing: border-box;
  display: flex;
  text-align: start;
  flex-direction: column;
  border-radius: 5px;
  color: #555;
  line-height: 20px;
  h3 {
    width: 72px;
    font-size: ${({ theme }) => theme.fontSizes.small};
    margin-bottom: 0px;
  }
  ul {
    flex-direction: column;
  }
  li {
    font-size: ${({ theme }) => theme.fontSizes.micro};
    & + & {
      margin-top: 8px;
    }
  }
`;

const Index = styled.div`
  width: 120px;
  display: flex;
  align-items: center;
  h3 {
    width: 100%;
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
  margin-right: 36px;
`;
const Category = styled.div`
  width: 100%;
  margin-top: 40px;
  padding: 0 20px 0 0;
  box-sizing: border-box;
  display: flex;
  text-align: start;
  justify-content: flex-start;
  align-items: center;
  button {
    width: fit-content;
    height: 24px;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid black;
    padding: 20px 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 16px;
    &.selected {
      background-color: #000;
      color: #fff;
    }
  }
`;

const BoxFormat = styled.div`
  width: 100%;
  margin-top: 40px;
  padding: 0 20px 0 0;
  box-sizing: border-box;
  display: flex;
  text-align: start;
  justify-content: flex-start;
  align-items: flex-start;
  input {
    width: 600px;
    height: 40px;
    border: ${({ theme }) => theme.borders.grey};
    border-radius: 5px;
    padding: 0 16px;
  }
  textarea {
    width: 600px;
    height: 200px;
    border: ${({ theme }) => theme.borders.grey};
    border-radius: 5px;
    padding: 16px;
    resize: none;
  }
  div {
    margin-top: 8px;
  }
  button {
    width: fit-content;
    height: 24px;
    background-color: #000;
    color: #fff;
    border-radius: 5px;
    border: 1px solid black;
    padding: 20px 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 16px;
    cursor: pointer;
  }
`;

const ToggleBtn = styled.button<ToggleBtnProps>`
  width: 100px;
  height: 44px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => (!props.toggle ? 'none' : 'rgb(0, 0, 0)')};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;
const Circle = styled.div<ToggleBtnProps>`
  background-color: white;
  width: 38px;
  height: 38px;
  border-radius: 50px;
  position: absolute;
  left: 5%;
  transition: all 0.5s ease-in-out;
  ${(props) =>
    props.toggle &&
    css`
      transform: translate(54px, 0);
      transition: all 0.5s ease-in-out;
    `}
`;

const SelectArea = styled.div`
  width: 100%;
  margin-top: 40px;
  padding: 0 20px 0 0;
  box-sizing: border-box;
  display: flex;
  text-align: start;
  justify-content: flex-start;
  align-items: center;
`;

const SubmitBox = styled.div`
  width: 100%;
  margin-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubmitButton = styled.button`
  width: 200px;
  height: 48px;
  border-radius: 5px;
  background-color: #000;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

export default Sell;
