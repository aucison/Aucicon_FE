import React from 'react';
import { styled } from 'styled-components';
import Dummy from '../../Dummy.json';

const Market = () => {
  const onClickCategory = (
    e: React.MouseEvent<HTMLElement>,
    category: string,
  ) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('selected')) {
      return;
    } else {
      const selected = document.querySelectorAll(`.${category}`);
      selected.forEach((item: Element) => {
        item.classList.remove('selected');
      });
      target.classList.add('selected');
    }
  };

  const showInfo = (e: React.MouseEvent<HTMLElement>, img: string) => {
    const target = e.target as HTMLElement;
    const info = target.querySelector<HTMLElement>('span');
    if (info) {
      info.style.display = 'block';
      target.style.background = `linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.7) 100%
      ), url(${img})`;
    }
  };

  const hideInfo = (e: React.MouseEvent<HTMLElement>, img: string) => {
    const target = e.target as HTMLElement;
    const info = target.querySelector<HTMLElement>('span');
    if (info) {
      info.style.display = 'none';
      target.style.background = `url(${img})`;
    }
  };

  return (
    <Section>
      <Category>
        <span>카테고리</span>
        <div />
        <p
          className="category selected"
          onClick={(e) => {
            onClickCategory(e, 'category');
          }}
        >
          일반
        </p>
        <p
          className="category"
          onClick={(e) => {
            onClickCategory(e, 'category');
          }}
        >
          핸드메이드
        </p>
      </Category>
      <Contents>
        <IsAuc>
          <p
            className="auc selected"
            onClick={(e) => {
              onClickCategory(e, 'auc');
            }}
          >
            경매
          </p>
          <div />
          <p
            className="auc"
            onClick={(e) => {
              onClickCategory(e, 'auc');
            }}
          >
            비경매
          </p>
        </IsAuc>
        <ContentsWrapper>
          {Dummy.items.map((item) => (
            <ItemFormat key={item.id}>
              <div
                style={{
                  background: `url(${item.img})`,
                  backgroundSize: 'cover',
                }}
                onMouseOver={(e) => {
                  showInfo(e, item.img);
                }}
                onMouseOut={(e) => {
                  hideInfo(e, item.img);
                }}
              >
                <span>{item.name}</span>
              </div>
              <span>{item.brand}</span>
              <p>{item.name}</p>
              <Info>
                <p>{`${new Intl.NumberFormat().format(item.price)}원`}</p>
                <img src="https://velog.velcdn.com/images/ea_st_ring/post/b33749e0-3bc7-4576-b997-e245fb192477/image.svg" />
              </Info>
            </ItemFormat>
          ))}
        </ContentsWrapper>
      </Contents>
    </Section>
  );
};

const Section = styled.div`
  padding: ${({ theme }) => theme.paddings.desktop};
  display: flex;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 15%;
  span {
    font-size: ${({ theme }) => theme.fontSizes.m};
    font-weight: 800;
  }
  div {
    width: 100%;
    height: 1px;
    background: black;
    margin-top: 20px;
  }
  p {
    margin: 20px 0 0 0;
    cursor: pointer;
    font-weight: 500;
  }
  p.selected {
    font-weight: 800;
  }
  p + p {
    margin-top: 10px;
  }
`;

const Contents = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const IsAuc = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  p {
    margin: 0 0 0 16px;
    font-weight: 500;
    cursor: pointer;
  }
  p.selected {
    font-weight: 800;
  }
  div {
    width: 1px;
    height: 100%;
    margin-left: 16px;
    background: ${({ theme }) => theme.colors.grey};
  }
`;

const ContentsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 60px;
  margin-top: 30px;
`;

const ItemFormat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: start;
  width: 200px;
  div {
    width: 100%;
    height: 220px;
    /* border: 1px solid rgba(0, 0, 0, 0.1); */
    background-size: cover !important;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    span {
      display: none;
      text-align: center;
      width: 100%;
      position: relative;
    }
  }
  span {
    width: 100%;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: 400;
    margin-top: 4px;
    color: white;
  }
  p {
    width: 200px;
    margin: 4px 0 0 0;
    color: #000;
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: 300;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  height: 20px !important;
  p {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSizes.s};
    font-weight: 500;
  }
  img {
    width: 20px;
    height: 20px;
    border: none;
    cursor: pointer;
  }
`;

export default Market;
