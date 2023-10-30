import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import styles from "./BookBidForm.module.css";

const ComponentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  margin-bottom: 1rem;
`;
const BookImageContainer = styled.div`
  flex: 1;
  flex-direction: column;
  margin: 0.4rem;
`;
const BookImage = styled.img`
  max-width: 100%;
  background-color: #fff;
`;
const ImageUploadContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 0.5rem;
`
const ImageUploadButton = styled.div`
  background-color: #679499;
  color: #fff;
  cursor: pointer;
  padding: 0.6rem 0.8rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 0.4rem;

  &:hover {
    background-color: #2980b9;
  }
`
const ImageDeleteButton = styled.div`
  background-color: #679499;
  color: #fff;
  cursor: pointer;
  padding: 0.6rem 0.8rem;
  font-size: 0.9rem;
  border: none;
  border-radius: 0.4rem;

  &:hover {
    background-color: #C33740;
  }
`
const BookInfoContainer = styled.div`
  flex: 4;
  margin: 0.3rem;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;
const BookInfoContainerHeader = styled.div`
  font-size: 1.2rem;
`;
const BookInfoContainerBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const BookMetadataContainer = styled.div`
  flex: 3;
  margin: 0.4rem 0.4rem 0.4rem 0;
  padding-right: 1.3rem;  
`;
const BookQualityContainer = styled.div`
  flex: 2;
  margin: 0.4rem;
  padding-right: 0.7rem;
`;
const BookFormLabel = styled.div`
  margin-top: 0.5rem;
`;
const BookFormInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const BookFormInputText = styled.input`
  background-color: #fff;
  border: none;
  width: 100%;
  margin: 0.2rem 0.3rem 0.2rem 0;
  padding: 0.3rem 0.2rem 0.3rem 0.4rem;
  font-size: 1rem;
  
  &:focus {
  outline: none;
  }
`;
const BookInfoText = styled.div`
  background-color: #fff;
  width: 100%;
  margin: 0.2rem 0;
  padding: 0.2rem;
`;
const BookQualityRow = styled.div`
  display: flex;
`;
const BookPriceContainer = styled.div`
  flex: 2;
  margin: 0.4rem;
`;

function BookBidForm({ book, setFormData }) {
  const [form, setForm] = useState(book);

  const inputFileRef = useRef();

  useEffect(() => {
    setFormData(form);
  }, [form]);

  const toBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

  return (
    <ComponentContainer>
      <BookImageContainer>
        <BookImage
          src={form.imageSrc}
        />
        <ImageUploadContainer>
          <input        
            ref={inputFileRef}
            type='file'
            onChange={(e) => {
              if (e.target.files.length === 1) {
                toBase64(e.target.files[0])
                  .then((result) => {
                    setForm({
                      ...form,
                      imageSrc: result,
                    })
                  });
              }
            }}
            hidden
          />
          <ImageUploadButton
            onClick={() => {
              inputFileRef.current.click();
            }}
          >
            파일 업로드
          </ImageUploadButton>
          <ImageDeleteButton
            onClick={() => {
              inputFileRef.current.value = '';
              setForm({
                ...form,
                imageSrc: '',
              })
            }}
          >
            파일 삭제
          </ImageDeleteButton>
        </ImageUploadContainer>
      </BookImageContainer>
      <BookInfoContainer>
        <BookInfoContainerHeader>
          책 정보
        </BookInfoContainerHeader>
        <BookInfoContainerBody>
          <BookMetadataContainer>
            <BookFormLabel>제목</BookFormLabel>
            <BookFormInputText
              type='text'
              value={form.title}
              onChange={(e) => {
                setForm({
                  ...form,
                  title: e.target.value
                });
              }}
            />
            <BookFormLabel>저자</BookFormLabel>
            <BookFormInputText
              type='text'
              value={form.author}
              onChange={(e) => {
                setForm({
                  ...form,
                  author: e.target.value
                });
              }}
            />
            <BookFormLabel>출판사</BookFormLabel>
            <BookFormInputText
              type='text'
              value={form.publisher}
              onChange={(e) => {
                setForm({
                  ...form,
                  publisher: e.target.value
                });
              }}
            />
          </BookMetadataContainer>
          <BookQualityContainer>
            <BookFormLabel>희망도서상태</BookFormLabel>
            <BookQualityRow>
              <input
                type='checkbox'
                checked={form.quality === 'top'}
                onChange={(e) => {
                  setForm({
                    ...form,
                    quality: 'top'
                  });
                }}
              />
              <BookInfoText>최상</BookInfoText>
            </BookQualityRow>
            <BookQualityRow>
              <input
                type='checkbox'
                checked={form.quality === 'high'}
                onChange={(e) => {
                  setForm({
                    ...form,
                    quality: 'high'
                  });
                }}
              />
              <BookInfoText>상</BookInfoText>
            </BookQualityRow>
            <BookQualityRow>
              <input
                type='checkbox'
                checked={form.quality === 'medium'}
                onChange={(e) => {
                  setForm({
                    ...form,
                    quality: 'medium'
                  });
                }}
              />
              <BookInfoText>중</BookInfoText>
            </BookQualityRow>
            <BookQualityRow>
              <input
                type='checkbox'
                checked={form.quality === 'low'}
                onChange={(e) => {
                  setForm({
                    ...form,
                    quality: 'low'
                  });
                }}
              />
              <BookInfoText>하</BookInfoText>
            </BookQualityRow>
          </BookQualityContainer>
          <BookPriceContainer>
            <BookFormLabel>판매가</BookFormLabel>
            <BookFormInputContainer>
            <BookFormInputText
              className={styles.input}
              type='number'
              value={form.price}
              defaultValue={book.priceStart}
              placeholder='판매가를 입력하세요'
              onChange={(e) => {
                const value = e.target.value;
                if (value < 0 || value > book.priceStart * 1.2) {
                  window.alert('0원 보다 적거나, 시작가 1.2배 이상입니다.');
                  return;
                }
                
                setForm({
                  ...form,
                  price: value
                });
              }}
              onBlur={() => {
                if (form.price % 10 > 0) {
                  window.alert('1원 단위 금액은 입력할 수 없습니다.');
                  setForm({
                    ...form,
                    price: 0,
                  })
                }
              }}
            />
            <div>원</div>
            </BookFormInputContainer>
            <BookFormLabel>거래방법</BookFormLabel>
            <BookFormInputText
              type='text'
              placeholder='택배, 직거래 등'
              value={form.method}
              onChange={(e) => {
                setForm({
                  ...form,
                  method: e.target.value
                });
              }}
            />
          </BookPriceContainer>
        </BookInfoContainerBody>
      </BookInfoContainer>
    </ComponentContainer>
  );
}

export default BookBidForm;
