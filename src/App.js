import { useState } from 'react';
import './App.css';

function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.글제목[props.title]} </h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  );
}

function App() {
  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState([
    '남자 코트 추천',
    '홍대 맛집 추천',
    '야식 추천',
  ]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  let [logo, setLogo] = useState('ReactBlog');

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: 'red', fontSize: '16px' }}>{logo}</h4>
      </div>

      <button
        onClick={() => {
          let new글제목 = [...글제목];
          new글제목 = new글제목.sort();
          글제목변경(new글제목);
        }}
      >
        가나다순정렬
      </button>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = '여자코트 추천';
          글제목변경(copy);
        }}
      >
        글수정
      </button>

      {/* <div className='list'>
        <h4>{글제목[0]} <span onClick={ () => { 따봉변경(따봉+1) }}>🐶</span> {따봉} </h4>
        <p>2월 16일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={()=>{ setModal(!modal) }}>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(true);
                setTitle(i);
              }}
            >
              {글제목[i]}
              <span
                onClick={() => {
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy);
                }}
              >
                🐶
              </span>{' '}
              {따봉[i]}{' '}
            </h4>
            <p>2월 17일 발행</p>
            <button
              onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      <input
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
      />
      <button
        onClick={() => {
          let copy = [...글제목];
          copy.unshift(입력값);
          글제목변경(copy);
        }}
      >
        등록
      </button>

      {modal == true ? <Modal title={title} 글제목={글제목} /> : null}
    </div>
  );
}

export default App;
