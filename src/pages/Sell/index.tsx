import React, { ChangeEvent, KeyboardEvent, useState, useRef } from 'react';
import { styled, css } from 'styled-components';
import Preview from './Preview';

interface ToggleBtnProps {
  toggle: boolean;
}

interface TimeBtnProps {
  selected: boolean;
}

interface ImageProps {
  image_file: string[] | null;
  preview_URL: string[] | null;
}

const Sell = () => {
  const [title, setTitle] = useState('');
  const [brand, setBrand] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [description, setDescription] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [selectedCategory, setSelectedCategory] = useState('일반');
  const [toggle, setToggle] = useState(false);
  const [images, setImages] = useState<ImageProps | null>({
    image_file: [],
    preview_URL: [],
  });
  // eslint-disable-next-line no-unused-vars
  const [time, setTime] = useState(24);
  const [price, setPrice] = useState('');
  const [minPrice, setMinPrice] = useState('');

  const formatWithComma = (inputValue: string) => {
    const numericValue = inputValue.replace(/,/g, ''); // Remove old commas
    return numericValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === 'price') {
      setPrice(formatWithComma(e.target.value));
    } else if (e.target.id === 'minPrice') {
      setMinPrice(formatWithComma(e.target.value));
    }
  };

  const button1Ref = useRef<HTMLButtonElement>(null);
  const button2Ref = useRef<HTMLButtonElement>(null);

  const handleTitleField = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleBrandField = (e: ChangeEvent<HTMLInputElement>) => {
    setBrand(e.target.value);
  };

  const handleShortDescriptionField = (e: ChangeEvent<HTMLInputElement>) => {
    setShortDescription(e.target.value);
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

  const onUpload = (e: any) => {
    if (e.target.files[0]) {
      if (images !== null && images?.preview_URL !== null) {
        let preview_URL_ARR = [];
        for (let i = 0; i < e.target.files.length; i++) {
          URL.revokeObjectURL(images.preview_URL[i] as string); // 새로운 이미지를 올릴 경우 기존 url 폐기
          preview_URL_ARR.push(URL.createObjectURL(e.target.files[i]));
        }
        setImages({
          image_file: e.target.files,
          preview_URL: preview_URL_ARR,
        });
        console.log(images);
      }
    }
  };

  React.useEffect(() => {
    // 컴포넌트가 언마운트 시 revokeObjectURL()을 통해 URL 폐기하여 메모리 누수 방지
    return () => {
      if (images !== null && images?.preview_URL !== null) {
        for (let i = 0; i < images?.preview_URL.length; i++) {
          URL.revokeObjectURL(images.preview_URL[i] as string);
        }
      }
    };
  }, []);

  const onClickTime = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    setTime(Number(target.id));
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

      <SelectArea>
        <Index>
          <h3>경매 비활성화</h3>
        </Index>
        <ToggleBtn onClick={clickedToggle} toggle={toggle}>
          <Circle toggle={toggle} />
        </ToggleBtn>
      </SelectArea>

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
      {selectedCategory === '일반' ? (
        <BoxFormat>
          <Index>
            <h3>브랜드</h3>
          </Index>
          <input
            placeholder="브랜드명을 입력해주세요"
            type="text"
            onChange={handleBrandField}
            onKeyDown={handleKeyInputEvent}
            value={brand}
          />
        </BoxFormat>
      ) : null}
      <BoxFormat>
        <Index>
          <h3>한줄 소개</h3>
        </Index>
        <input
          placeholder="상품에 대한 한줄 소개를 작성해주세요. ex) NIKE, ADIDAS"
          type="text"
          onChange={handleShortDescriptionField}
          onKeyDown={handleKeyInputEvent}
          value={shortDescription}
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
        <ImageContainer>
          <div>
            <label htmlFor="fileInput">사진 첨부하기 {'>'}</label>
            <span>사진 파일 용량은 4mb 이하만 가능합니다.</span>
          </div>
          <input
            id="fileInput"
            type="file"
            multiple
            onChange={onUpload}
            style={{ display: 'none' }}
          />
          <Preview
            imageSrc={
              images?.preview_URL ? (images.preview_URL as string[]) : null
            }
          />
        </ImageContainer>
      </BoxFormat>
      <Divider />

      {toggle ? (
        <BoxFormat>
          <Index>
            <h3>상품 가격</h3>
          </Index>
          <input
            id="price"
            placeholder="상품 가격을 입력해주세요."
            type="text"
            value={price}
            onChange={handleChange}
          />
        </BoxFormat>
      ) : (
        <>
          <BoxFormat>
            <Index>
              <h3>최소 가격</h3>
            </Index>
            <input
              id="minPrice"
              placeholder="경매 최소 가격을 입력해주세요."
              type="text"
              value={minPrice}
              onChange={handleChange}
            />
          </BoxFormat>
          <BoxFormat>
            <Index>
              <h3>경매 마감</h3>
            </Index>
            <SelectTimeArea>
              <div>
                <TimeBtn
                  id="24"
                  onClick={onClickTime}
                  selected={24 === time ? true : false}
                />
                <h3>24시간</h3>
              </div>
              <div>
                <TimeBtn
                  id="48"
                  onClick={onClickTime}
                  selected={48 === time ? true : false}
                />
                <h3>48시간</h3>
              </div>
              <div>
                <TimeBtn
                  id="72"
                  onClick={onClickTime}
                  selected={72 === time ? true : false}
                />
                <h3>72시간</h3>
              </div>
            </SelectTimeArea>
          </BoxFormat>
        </>
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
    font-size: ${({ theme }) => theme.fontSizes.s};
    margin-bottom: 0px;
  }
  ul {
    flex-direction: column;
  }
  li {
    font-size: ${({ theme }) => theme.fontSizes.xs};
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
    font-size: ${({ theme }) => theme.fontSizes.s};
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
    font-family: Apple SD Gothic Neo;
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

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  #fileInput {
    opacity: 0;
    position: absolute;
    z-index: -1;
  }
  div {
    display: flex;
    margin-top: -8px;
    span {
      margin: auto;
      margin-left: 16px;
      font-size: ${({ theme }) => theme.fontSizes.xs};
      color: ${({ theme }) => theme.colors.grey};
    }
  }
  label {
    width: fit-content;
    height: 24px;
    background-color: #fff;
    color: #000;
    font-weight: 600;
    border-radius: 5px;
    border: 1px solid black;
    padding: 20px 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 16px;
    cursor: pointer;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.grey};
  margin-top: 56px;
  margin-bottom: 16px;
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

const SelectTimeArea = styled.div`
  width: 120px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  h3 {
    margin: -2px 0 0 20px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 0 0 24px 0;
  }
`;

const TimeBtn = styled.span<TimeBtnProps>`
  width: 28px;
  height: 28px;
  border: 1px solid black;
  border-radius: 50%;
  ${(props) =>
    props.selected &&
    css`
      background-color: black;
      color: white;
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
  font-size: ${({ theme }) => theme.fontSizes.m};
  cursor: pointer;
`;

export default Sell;
