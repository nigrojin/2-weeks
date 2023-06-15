import { useState, createContext, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useLocation, useParams } from 'react-router-dom';

/*
  리액트 튜토리얼

  1 리액트란
  2 JSX
  3 컴포넌트
  4 이벤트와 이벤트 처리
  5 뷰 업데이트
  6 리액트 라우터
  7 서버 요청
*/


/*
  1 리액트란

  1 리액트 개념
  UI를 개발하기 위한 자바스크립트 라이브러리
  페이스북이 개발 
  가장 인기있는 프론트엔드 라이브러리

  2 리액트 특징
  - 컴포넌트 기반
  - 선언적 문법

  3 리액트 구조
  싱글 페이지 애플리케이션
  자바스크립트를 사용하여 뷰를 업데이트 한다
*/


/*
  JSX (JavaScript Extension)

  자바스크립트의 확장 문법
  가상의 엘리먼트를 생성하기 위해 사용한다
  선언적 문법의 구조
  일반 자바스크립트 객체로 변환된다

  1 JSX 문법
  2 JSX Fragment
  3 JSX에 변수 출력하기
  4 JSX에서 조건문 사용
  5 JSX에서 리스트 출력하기
*/

export default function App() {
  return <Snippet />
}

// function Snippet() {
//   return (
//     <form>
//       <h1>Google</h1>
//       <input
//         type="search"
//         className="class1 class2"
//         style={{ padding: "0.5rem", width: '20rem' }}
//         placeholder="Search Google"
//         autoComplete="off"
//       />
//     </form>
//   )
// }


// React Fragment

// function Snippet() {
//   // JSX는 엘리먼트를 리턴할 때 한개의 엘리먼트로 감싸져야 한다
//   return (
//     <>
//       <h1>JSX Fragment</h1>
//       <ul>
//         <li>list item</li>
//         <li>list item</li>
//         <li>list item</li>
//       </ul>
//     </>
//   )
// }


// JSX에서 변수 출력하기

// function Snippet() {

//   let cat = {
//     name: '치즈',
//     age: 2,
//     home: null,
//     sound: function () {
//       return '야옹'
//     }
//   }

//   return (
//     <ul>
//       <li>Name: {cat.name}</li>
//       <li>Age: {cat.age}</li>
//       <li>Home: {cat.home}</li>
//       <li>Sound: {cat.sound()}</li>
//     </ul>
//   )
// }


// 조건부 렌더링

// function Snippet() {

//   return (
//     <>
//       <h2>조건부 렌더링</h2>

//       <h3>&& (그리고)</h3>
//       <p>
//         표현식1 && 표현식2
//         표현식1이 참이면 표현식2를 출력한다
//       </p>
//       <p>{true && "나는 보입니다"}</p>
//       <p>{null && "나는 안보입니다"}</p>

//       <h3>|| (또는)</h3>
//       <p>
//         표현식1 || 표현식2
//         표현식1이 참이면 표현식1을 출력한다
//         표현식1이 거짓이면 표현식 2를 출력한다
//       </p>
//       <p>{"나는 보입니다" || "나는 안보입니다"}</p>
//       <p>{null || "나는 보입니다"}</p>

//       <h3>? (삼항연산자)</h3>
//       <p>
//         조건 ? 표현식1 : 표현식2
//         조건이 참이면 표현식 1을 출력한다
//         조건이 거짓이면 표현식 2를 출력한다
//       </p>
//       <p>{true ? "조건이 참입니다" : "조건이 거짓입니다"}</p>
//       <p>{false ? "조건이 참입니다" : "조건이 거짓입니다"}</p>
//     </>
//   )
// }


// 리스트 출력하기

// function Snippet() {

//   // 배열
//   const beers = [
//     { name: "Heineken", origin: "Netherlands" },
//     { name: "Guinness", origin: "Ireland" },
//     { name: "Asahi", origin: "Japan" }
//   ]
  
//   const beerList = beers.map((beer, index) => (
//     // key: 고유한 값
//     <li key={index}>{beer.name}, {beer.origin}</li>
//   ))

//   return (
//     <>
//       <h3>World Beers</h3>
//       <ul>
//         {beerList}
//       </ul>
//     </>
//   )
// }


// JSX 문제
// 다음의 변수를 활용하여 테이블을 만들어보세요

// function Snippet() {
//   const beers = [
//     { name: "Heineken", origin: "Netherlands", available: false },
//     { name: "Guinness", origin: "Ireland", available: true },
//     { name: "Asahi", origin: "Japan", available: true }
//   ]

//   const beerRows = beers.map((beer, index) => (
//     <tr key={index}>
//       <td>{beer.name}</td>
//       <td>{beer.origin}</td>
//       <td>{beer.available ? "예" : "아니오"}</td>
//     </tr>  
//   ))

//   return (
//     <>
//       <h1>Beers</h1>
//       <table border="1">
//         <thead>
//           <tr>
//             <th>이름</th>
//             <th>원산지</th>
//             <th>판매중</th>
//           </tr>
//         </thead>
//         <tbody>
//           {beerRows}
//         </tbody>
//       </table>
//     </>
//   )
// }


/*
  컴포넌트

  1 컴포넌트 합성
  2 props
  3 chidlren props
  4 useContext Hook
*/


// function Content() {
//   return (
//     <>
//       <h2>고양이는 액체일까?</h2>
      
//       {/* video */}
//       <img
//         src="https://mblogthumb-phinf.pstatic.net/MjAxOTA3MDRfMTM2/MDAxNTYyMjE2Mzc1NjQ3.ywQ3_FfZUTmg8oMQSIc3HecxkqJ1vzwq4Pwcu6diyOQg.hkGxwu96hY8E5HZDZnJCL4yXXaITk4-AJhhg8W6u2Ywg.JPEG.with_msip/2-1.jpg?type=w800"
//         alt=""
//         width="100%"
//       />
//     </>
//   )
// }


// function Comments() {
//   return (
//     <ul>
//       <li>유치하게 등수는... 3빠</li>
//       <li>2빠</li>
//       <li>1빠</li>
//     </ul>  
//   )
// }


// function Suggested() {
//   return (
//     <ul>
//       <li>고양이는 정말 폭력적일까?</li>
//       <li>고양이는 정말 자기가 신이라고 생각할까?</li>
//       <li>냥냥펀치는 얼마나 아플까?</li>
//     </ul>  
//   )
// }

// // 메인 컴포넌트
// function Snippet() {
//   return (
//     <>
//       <header>
//         <h1>Youtube</h1>
//       </header>
      
//       <main>
//         <Content />

//         <h2>Comments</h2>
//         <Comments />
//       </main>

//       <aside>
//         <h2>Suggested videos</h2>
//         <Suggested />
//       </aside>
//     </>
//   )
// }


/*
  props
  컴포넌트에 전달되는 데이터
*/

// function Beer({ beer }) {
//   return (
//     <ul>
//       <li>name: {beer.name}</li>
//       <li>origin: {beer.origin}</li>
//       <li>available: {beer.available ? "예" : "아니오"}</li>
//     </ul>  
//   )
// }

// function Snippet() {

//   // 지역변수
//   const irishBeer = { 
//     name: "Guinness", 
//     origin: "Ireland",
//     available: false
//   };

//   return (
//     <>
//       <h2>Beer</h2>
//       <Beer beer={irishBeer} />
//     </>
//   )
// }

// function Content({ video }) {

//   return (
//     <>
//       <h2>{video.title}</h2>
//       <img src={video.source} alt="" width="100%" />
//     </>
//   )
// }

// function Comments({ comments }) {

//   const commentList = comments.map(comment => (
//     <li key={comment.id}>{comment.content}</li>  
//   ))

//   return (
//     <ul>
//       {commentList}
//     </ul>  
//   )
// }

// function Suggested({ suggestedVideos }) {
//   const suggestedVideoList = suggestedVideos.map(video => (
//     <li key={video.id}>{video.title}</li>  
//   ))

//   return (
//     <ul>
//       {suggestedVideoList}
//     </ul>  
//   )
// }


// function Snippet() {

//   // Q. 다음의 변수와 컴포넌트 합성, props를 이용하여 왼쪽의 뷰를 완성해보세요
//   const DATA = {
//     video: {
//       id: 'v0', 
//       title: '고양이는 액체일까?',
//       source: "https://mblogthumb-phinf.pstatic.net/MjAxOTA3MDRfMTM2/MDAxNTYyMjE2Mzc1NjQ3.ywQ3_FfZUTmg8oMQSIc3HecxkqJ1vzwq4Pwcu6diyOQg.hkGxwu96hY8E5HZDZnJCL4yXXaITk4-AJhhg8W6u2Ywg.JPEG.with_msip/2-1.jpg?type=w800"
//     },
//     comments: [
//       { id: 'c0', content: '1빠' },
//       { id: 'c1', content: '2빠' },
//       { id: 'c2', content: '유치하게 등수는... 3빠' },
//     ],
//     suggestedVideos: [
//       { id: 's0', title: '고양이는 정말 폭력적일까?' },
//       { id: 's1', title: '고양이는 정말 자기가 신이라고 생각할까?' },
//       { id: 's2', title: '냥냥펀치는 얼마나 아플까?' },
//     ]
//   }
  
//   return (
//     <>
//       <header>
//         <h1>Youtube</h1>
//       </header>
      
//       <main>
//         <Content video={DATA.video} />

//         <h2>Comments</h2>
//         <Comments comments={DATA.comments} />
//       </main>

//       <aside>
//         <h2>Suggested videos</h2>
//         <Suggested suggestedVideos={DATA.suggestedVideos} />
//       </aside>
//     </>
//   )
// }

/*
  children props
  컴포넌트를 트리형태로 작성할 수 있다
*/

// function Layout({ children }) {
  
//   // children: Article 컴포넌트

//   return (
//     <>
//       <h1>Instagram</h1>
//       <nav>
//         <ul>
//           <li>Home</li>
//           <li>Posts</li>
//           <li>Profile</li>
//         </ul>
//       </nav>

//       <main style={{ padding: "1rem 0" }}>
//         {children}
//       </main>

//       <footer>
//         <small>2023 &copy; Instagram</small>
//       </footer>
//     </>  
//   )
// }

// function Article() {

//   return (
//     <>
//       <img
//         src="https://external-preview.redd.it/Lpgb3alLNJ0BOp_YH6hj2UaY-N60pmkUHf-gS6hbifE.jpg?auto=webp&s=44a73214eb47bf11c5d5c2dca4d971113c06baf3"
//         alt=""
//         width="100%"
//       />
//       <p>
//         <b>Snoop Dogg </b> 
//         주인 새&#128021; 나가서 한컷.
//       </p>

//       <small>1일 전</small>
//     </>  
//   )
// }

// function Snippet() {
//   return (
//     <Layout>
//       <Article />
//     </Layout>
//   )
// }


/*
  useContext Hook
  자식 컴포넌트에게 props를 전달할 수 있다
*/


// const AuthContext = createContext();

// function AuthProvider({ children }) {
  
//   // children: Layout 컴포넌트

//   // 지역변수
//   const value = { username: 'bunny' };

//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>  
//   )
// }

// function Layout({ children }) {

//   // children: Article 컴포넌트
  
//   // value 객체에 접근 가능
//   const auth = useContext(AuthContext);

//   return (
//     <>
//       <h1>Instagram</h1>
//       <nav>
//         <ul>
//           <li>Home</li>
//           <li>Posts</li>
//           <li>Profile</li>
//         </ul>
//       </nav>

//       <p>안녕하세요, {auth.username}님</p>
      
//       <main style={{ padding: "1rem 0" }}>
//         {children}
//       </main>

//       <footer>
//         <small>2023 &copy; Instagram</small>
//       </footer>
//     </>  
//   )
// }


// function Article() {

//   const auth = useContext(AuthContext);

//   // value 객체에 접근 가능
//   console.log(auth);

//   return (
//     <>
//       <img
//         src="https://external-preview.redd.it/Lpgb3alLNJ0BOp_YH6hj2UaY-N60pmkUHf-gS6hbifE.jpg?auto=webp&s=44a73214eb47bf11c5d5c2dca4d971113c06baf3"
//         alt=""
//         width="100%"
//       />
//       <p>
//         <b>Snoop Dogg </b> 
//         주인 새&#128021; 나가서 한컷.
//       </p>

//       <small>1일 전</small>
//     </>  
//   )
// }

// function Snippet() {
//   return (
//     <AuthProvider>
//       <Layout>
//         <Article />
//       </Layout>
//     </AuthProvider>
//   )
// }


/*
  이벤트 처리
*/

// function Snippet() {

//   function handleClick() {
//     alert("lol")
//   }

//   // onEventName={eventHandler}

//   return (
//     <>
//       <h3>이벤트</h3>
//       <button onClick={handleClick}>Button</button>
//     </>
//   )
// }


/*
  뷰 업데이트
*/

/*
  useState Hook

  const [state, setState] = useState(intialValue)

  state: 컴포넌트 내의 변수
  setState(newState): state를 업데이트하는 함수
  initialValue: state의 초기값
*/

// function Snippet() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <p>count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Add</button>
//     </>
//   )
// }

// function Snippet() {
//   const [subscribed, setSubscribed] = useState(false);

//   return (
//     <>
//       <h1>Subscribe button</h1>
//       <button onClick={() => setSubscribed(!subscribed)}>
//         {subscribed ? "구독취소" : "구독하기"}
//       </button>
//     </>  
//   )
// }


// function Snippet() {
//   return (
//     <Router>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/posts">Posts</Link>
//           </li>
//         </ul>
//       </nav>

//       {/* 요청 URL과 일치하는 path를 가진 Route 컴포넌트의 element가 렌더링된다 */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="posts" element={<Posts />} />
//         <Route path="post/:postId" element={<Post />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   )
// }

// function Home() {
//   return <h1>Home</h1>
// }

// function Posts() {
//   return (
//     <>
//       <h1>Posts</h1>
//       <ul>
//         <li>
//           <Link to="/post/p0">Post 1</Link>
//         </li>
//         <li>
//           <Link to="/post/p1">Post 2</Link>
//         </li>
//       </ul>
//     </>
//   )
// }

// function Post() {
//   // 요청주소의 매개변수에 접근할 수 있다
//   const { postId } = useParams();

//   return (
//     <>
//       <h1>Title</h1>
//       <p>{postId}</p>
//     </>
//   )
// }

// function About() {
//   return <h1>About</h1>
// }
// function NotFound() {
//   return <h1>404 NotFound</h1>
// }


// 메인 컴포넌트
// function Snippet() {
//   return (
//     <Router>
//       <AuthProvider>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/posts">Posts</Link>
//             </li>
//           </ul>
//         </nav>

//         <AuthStatus />

//         <Routes>
//           <Route index element={<Home />} />
//           <Route path="posts" element={<Posts />} />
//           <Route path="post/:postId" element={
//             <AuthRequired>
//               <Post />
//             </AuthRequired>
//           } />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </AuthProvider>
//     </Router>
//   )
// }

// // 프로바이더 컴포넌트
// const AuthContext = createContext();

// // 유저 관리
// function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);

//   const value = { user, setUser };

//   return (
//     <AuthContext.Provider value={value}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// // 인증 상태 메시지
// function AuthStatus() {
//   // value 객체에 접근
//   const { user, setUser } = useContext(AuthContext);

//   return user ? (
//     <p>
//       안녕하세요 {user}님!
//       <button onClick={() => setUser(null)}>로그아웃</button>
//     </p>
//   ) : (
//     <p>로그인하지 않았습니다</p>
//   )
// };

// // 인증 검사
// function AuthRequired({ children }) {
//   // value 객체에 접근
//   const { user, setUser } = useContext(AuthContext);

//   // 로그인 처리
//   function handleSubmit(e) {
//     e.preventDefault();

//     const formData = new FormData(e.target);

//     // AJAX 요청

//     // user 업데이트
//     setUser(formData.get("username"))
//   }

//   if (!user) {
//     // 로그인 페이지
//     return (
//       <form onSubmit={handleSubmit}>
//         <h1>로그인</h1>
//         <input type="text" name="username" required />
//         <button type="submit">로그인</button>
//       </form>
//     )
//   }

//   // Post 렌더링
//   return children;
// }

// // 홈
// function Home() {
//   return <h1>Home</h1>
// }

// // 게시물 목록
// function Posts() {
//   return (
//     <>
//       <h1>Posts</h1>
//       <ul>
//         <li>
//           <Link to="/post/p0">Post 1</Link>
//         </li>
//         <li>
//           <Link to="/post/p1">Post 2</Link>
//         </li>
//       </ul>
//     </>
//   )
// }

// // 게시물 상세보기
// function Post() {
//   // 요청 주소의 매개변수(parameter)에 접근할 수 있다
//   const { postId } = useParams();
  
//   return (
//     <>
//       <h1>Post</h1>
//       <p>{postId}</p>
//     </>
//   )
// }

// // 404 페이지
// function NotFound() {
//   return <h1>페이지를 찾을 수 없습니다</h1>
// }


// 데이터 요청하기

/*
  useEffect
  리액트에서 여러가지 효과를 적용할 때 사용하는 Hook

  사용방법
  1 useEffect(effect): 컴포넌트가 렌더링될때마다 effect를 실행한다
  2 useEffect(effect, []): 최초 렌더링시에만 effect를 실행한다
  3 useEffect(effect, [dep1, dep2, ...]): 최초 렌더링 시, dependency가
  업데이트 될때 effect를 실행한다
*/

// function Snippet() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log(count + "번 렌더링되었습니다")
//   })

//   return (
//     <>
//       <h1>useEffect Hook</h1>
//       <p>{count}</p>
//       <button onClick={() => setCount(count + 1)}>
//         +
//       </button>
//     </>
//   )
// }


// 데이터 요청 예시

// 서버에 데이터를 요청하는 함수
// 데이터를 전송받는데 2초가 걸린다고 가정
function fetchData() {
  const DATA = {
    username: 'snoop_dogg',
    image: 'https://hips.hearstapps.com/hmg-prod/images/most-interesting-dog-meme-1546529364.png',
    bio: '반갑네 인간'
  }
  
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      res(DATA)
    }, 2000)
  })

  return promise;
}

function Snippet() {
  // state가 업데이트되면 컴포넌트는 다시 호출된다

  // 요청 실패 처리
  const [error, setError] = useState(null);
  // 대기 상태 관리
  const [isLoaded, setIsLoaded] = useState(false);
  // 응답 객체 관리
  const [profile, setProfile] = useState(null);

  // 비동기적으로 작동한다
  useEffect(() => {
    fetchData()
      .then(data => { // 데이터 처리 (성공했을 경우)
        // profile을 응답객체로 갱신한다
        setProfile(data)
      })
      .catch(error => { // 에러 처리 (실패했을 경우)
        setError(error)
      })
      .finally(() => setIsLoaded(true)) // 성공, 실패와 상관없이 항상 실행되는 코드
  }, [])

  if (error) {
    return <p>failed to fetch profile</p>
  }

  if (!isLoaded) {
    return <p>fetching profile...</p>
  }

  return (
    <>
      <h1>Profile</h1>
      <img
        src={profile.image}
        alt={profile.username}
        style={{
          width: '150px',
          height: '150px',
          objectFit: 'cover',
          borderRadius: '50%',
        }}
      />
      <h3>{profile.username}</h3>
      <p>{profile.bio}</p>
    </>  
  )
}