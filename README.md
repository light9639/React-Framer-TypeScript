# ✒️ React-Framer를 이용하여 만든 예제 페이지입니다.

:octocat: 바로 가기 : https://light9639.github.io/React-Framer-TypeScript/

![light9639 github io_React-Framer-TypeScript_](https://user-images.githubusercontent.com/95972251/218045715-9901ba93-1b87-4dc6-8806-17a0d6f595de.png)

:sparkles: ✒️ React-Framer를 이용하여 만든 예제 페이지입니다. :sparkles:
## :tada: React 프로젝트 생성
- React 생성
```bash
npm create-react-app my-app
# or
yarn create react-app my-app
```

- vite를 이용하여 프로젝트를 생성하려면
```bash
npm create vite@latest
# or
yarn create vite
```
- 터미널에서 실행 후 프로젝트 이름 만든 후 React 선택, Typescirpt-SWC 선택하면 생성 완료.
## ☄️ 'framer-motion', 'sass', 'react-router-dom' 관련 라이브러리 설치
- 리액트를 이용한 애니메이션을 만들 때 쓰는 `React-Spring`을 이용하여 애니메이션 효과를 구현할 것이다. 
- 스타일링은 `SCSS`를 이용하며, `react-router-dom`을 이용하여 라우팅 기능을 구현해보겠다. 그럼, 아래의 명령어로 라이브러리를 설치한다.
```bash
$ npm install framer-motion sass react-router-dom
# or
$ yarn add framer-motion sass react-router-dom
```
## ✒️ App.tsx, main.tsx, App.css 수정 및 작성
### ⚡ App.tsx
- `Header` 컴포넌트를 `import` 하여 `HashRouter`에 넣어준다.
- `src/router` 폴더 안에 있는 컴포넌트들을 `import` 하여 라우팅 기능을 구현한다.
```typescript
import React, { useState } from 'react'
import "./App.css";
import { Route, Routes } from 'react-router-dom';
import Appear from '@router/Appear/Appear';
import List from '@router/List/List';
import Drag from '@router/Drag/Drag';
import Scroll from '@router/Scroll/Scroll';
import SvgPage from '@router/SvgPage/SvgPage';
import Hover from '@router/Hover/Hover';
import DragPage from '@router/DragPage/DragPage';
import Main from '@router/Main/Main';
import Header from '@components/Header';

export default function App(): JSX.Element {
  return (
    <React.Fragment>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Appear" element={<Appear />} />
        <Route path="/List" element={<List />} />
        <Route path="/Drag" element={<Drag />} />
        <Route path="/Scroll" element={<Scroll />} />
        <Route path="/SvgPage" element={<SvgPage />} />
        <Route path="/Hover" element={<Hover />} />
        <Route path="/DragPage" element={<DragPage />} />
      </Routes>
    </React.Fragment>
  )
}
```
### ⚡ main.tsx
- `HashRouter`를 `import` 하여 `<App />` 하위 컴포넌트에서 라우팅 기능 구현.
```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)
```

### ⚡ App.css
- 전체적인 `CSS` 스타일링하기.
```css
* {
    text-decoration: none;
    color: #fff;
}

body {
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, #d0e, #91f);
}

.item {
    background: white;
    border-radius: 100%;
}
```
## 📝 'src/components' 파일 속 Header.tsx, Style.module.scss 수정 및 작성
### ⚡ Header.tsx
- `Header` 컴포넌트 안에 `<Link to="링크"></Link>`를 사용하여 라우팅 기능 구현.
```typescript
import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Header.module.scss";

export default function Header(): JSX.Element {
    return (
        <div className={styles.Header}>
            <Link to="/"><span>Slide</span></Link>
            <Link to="/Appear"><span>Appear</span></Link>
            <Link to="/List"><span>List</span></Link>
            <Link to="/Drag"><span>Drag</span></Link>
            <Link to="/Scroll"><span>Scroll</span></Link>
            <Link to="/SvgPage"><span>SvgPage</span></Link>
            <Link to="/Hover"><span>Hover</span></Link>
            <Link to="/DragPage"><span>DragPage</span></Link>
        </div>
    )
}
```
### ⚡ Header.module.scss
- `Header.tsx`의 반응형 스타일 작성하기.
```scss
@mixin mobile {
    @media (max-width: 767px) {
        @content;
    }
}

.Header {
    display: flex;
    justify-content: space-around;
    gap: 20px;
    position: absolute;
    top: 3%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;

    @include mobile {
        max-width: 98%;
        width: 100%;
        gap: 5px;
        margin: 0 auto;
        flex-wrap: wrap;
    }
}

.Header span {
    font-size: 18px;
    font-weight: 600;
    color: #fff;

    @include mobile {
        font-size: 14px;
    }
}
```

## ⚙️ 'src/router' 파일 속 수많은 컴포넌트 작성법.
- `router` 파일 속 컴포넌트 각각의 컴포넌트에서 확인하여 작성하면 된다.

## 📎 출처
- <a href="https://www.framer.com/motion/">Framer Motion.</a>
- <a href="https://nykim.work/114">Framer-motion 라이브러리 훑어보기</a>
