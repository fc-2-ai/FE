# React + TypeScript + Vite

### 🚀 Start

```bash
$ npm run dev
```

---

### 🔗 Routing

"@tanstack/react-router": "^1.112.0" 라이브러리를 활용하여 폴더 구조 기반으로 라우팅을 작성했습니다.

**-장점-** \
_tanstack router의 가장 큰 장점으로는 자동 라우팅 코드 생성과, 강력한 타입 안전성을 들 수 있습니다._ \
_잘못된 경로와 오타로 인한 라우팅 오류를 런타임 및 컴파일 시점에 잡아낼 수 있습니다._ \
_그리고 Link 컴포넌트에서 to 속성을 통한 경로 자동 완성(Intellisense) 기능을 제공합니다._\
_라우팅 파일에 별도의 코드를 작성하지 않아도 생성한 파일의 이름을 기준으로 자동으로 라우팅 코드가 생성됩니다._

#### - 폴더구조

```bash
ai-vatar-user
├──📂husky
│   ├──📜 pre-commit
├──📂node_modules
├──📂public
├──📂src
│   ├──📂assets
│   └──📂routes
│     └──📂_sideBarLayout
│       └──📂dashboard // http://localhost:5173/dashboard
│         └──📜 index.tsx
│       └──📂 my-project // http://localhost:5173/my-project
│         └── 📜 index.tsx
│       └──📂 vedio-archive // http://localhost:5173/vedio-archive
│         └── 📜 index.tsx
│     ├──📜_sideBarLayout.tsx
│     └──📂auth
│       └──📂login   // http://localhost:5173/auth/login
│        └──📂index
│     └──📜__root.tsx
│   ├──📜routeTree.gen.ts // 자동생성 파일
│   └──📜main.tsx
└──📜README.md
```

- sidebar 레이아웃이 필요한 페이지는 \_sideBarLayout 폴더 안에 작성하면 됩니다.
- sidebar 레이아웃이 필요없는 페이지는 routes 폴더 루트에 바로 작성하면 됩니다.
- 페이지에 해당하는 폴더 안에 index.tsx를 생성 하면 라우팅이 자동으로 설정됩니다.
- next.js 처럼 동적 라우팅도 가능합니다.

---

### 💅🏻 Media Query

별도의 파일을 생성해서 Breakpoint를 정의했습니다.\
breakpoint 기준:\
 **small: '@media (max-width: 639px)'\
 **medium: '@media (max-width: 1047px)'\
 \_\_large: '@media (min-width: 1048px)'

```typescript
import media from '@/styles/media';

const ModalContent = styled.div`
  padding: 10px 30px 20px;

  ${media.small`
    padding: 10px 15px; `}
`;
```

---

### 💡 husky

pre-commit을 작성하여 lint 테스트를 자동으로 수행한 후 commit이 수행됩니다.
