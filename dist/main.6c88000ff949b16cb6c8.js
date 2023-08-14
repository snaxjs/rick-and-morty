/*! For license information please see main.6c88000ff949b16cb6c8.js.LICENSE.txt */
(() => {
  "use strict";
  var e,
    a,
    r,
    t = {
      "./src/scss/index.scss": (e, a, r) => {
        r.r(a);
      },
      "./src/app.tsx": (e, a, r) => {
        r.r(a), r.d(a, { default: () => n });
        var t = r("./node_modules/react/index.js"),
          s = r.n(t),
          i = r("./node_modules/react-router/dist/index.js");
        const n = () => s().createElement(i.Outlet, null);
      },
      "./src/components/CharCard/index.tsx": (e, a, r) => {
        r.r(a), r.d(a, { default: () => n });
        var t = r("./node_modules/react/index.js"),
          s = r.n(t),
          i = r("./src/utils/ClassNames.ts");
        const n = (e) => {
          const a = e.status
            ? ` char-card__char-status_${e.status.toLowerCase()}`
            : "";
          return s().createElement(
            "div",
            { className: (0, i.classNames)("char-card", e.classNames) },
            s().createElement(
              "section",
              { className: "char-card__image-wrapper" },
              s().createElement("img", {
                className: "char-card__image",
                src: e.image,
                alt: e.name,
              }),
            ),
            s().createElement(
              "section",
              { className: "char-card__char-info" },
              s().createElement(
                "div",
                { className: "char-card__name-wrapper" },
                s().createElement(
                  "h3",
                  {
                    className: "char-card__char-name",
                    title: e.name,
                  },
                  e.name,
                ),
                s().createElement(
                  "span",
                  {
                    className: "char-card__char-species",
                    title: e.species,
                  },
                  e.species,
                ),
                s().createElement(
                  "span",
                  {
                    className: "char-card__char-gender",
                    title: e.gender,
                  },
                  e.gender,
                ),
                s().createElement(
                  "span",
                  {
                    className: "char-card__char-from",
                    title: e.from,
                  },
                  e.from,
                ),
              ),
              s().createElement(
                "span",
                { className: `char-card__char-status${a}` },
                e.status.toLowerCase(),
              ),
            ),
          );
        };
      },
      "./src/components/FullScreenLoader/index.tsx": (e, a, r) => {
        r.r(a), r.d(a, { default: () => o });
        var t = r("./node_modules/react/index.js"),
          s = r.n(t),
          i = r("./node_modules/lottie-react/build/index.umd.js");
        const n = r("./src/assets/lottie/rocket.json"),
          o = (e) => {
            const a = {
                animationData: n,
                loop: !0,
                style: { width: 400, height: 400 },
                className: "full-screen-loader__container",
                rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
              },
              { View: r } = (0, i.useLottie)(a);
            return s().createElement(
              "div",
              { className: "full-screen-loader" },
              r,
            );
          };
      },
      "./src/components/Pagination/index.tsx": (e, a, r) => {
        r.r(a), r.d(a, { default: () => i });
        var t = r("./node_modules/react/index.js"),
          s = r.n(t);
        const i = (e) => {
          const [a, r] = (0, t.useState)([]);
          return (
            (0, t.useEffect)(() => {
              (() => {
                let a = [];
                const t = e.pages < 5 ? e.pages : 5,
                  s = e.currentPage > 1 ? e.currentPage - 1 : 1;
                for (let r = s; r < t + s; r++)
                  r <= e.pages && r >= 1 && a.push(r);
                (a[a.length - 1] = e.pages),
                  a[a.length - 1] - a[a.length - 2] != 1 &&
                    (a[a.length - 2] = 0),
                  (a.includes(0) ||
                    (a[a.length - 1] - a[a.length - 2] == 1 &&
                      a.length === t)) &&
                    r(a);
              })();
            }, [e.pages, e.currentPage]),
            s().createElement(
              "div",
              { className: "pagination" },
              a.map((a) => {
                const r = `pagination__button${
                  a === e.currentPage ? " pagination__button_current" : ""
                }${a ? "" : " pagination__button_dots"}`;
                return ((e, a, r) =>
                  s().createElement(
                    "button",
                    {
                      className: r,
                      key: e,
                      "data-page": e,
                      onClick: a,
                      disabled: !e,
                    },
                    e || "...",
                  ))(a, e.onClick, r);
              }),
            )
          );
        };
      },
      "./src/config/google.ts": (e, a, r) => {
        r.r(a), r.d(a, { GOOGLE_SEARCH_API_KEY: () => t });
        const t = "AIzaSyCaktw7mbfSbsD-6VdRzVE3PBQzM_q3ej8";
      },
      "./src/constants/API.ts": (e, a, r) => {
        r.r(a), r.d(a, { API_BASE_URL: () => t, GOOGLE_SEARCH_API: () => s });
        const t = "https://rickandmortyapi.com/api",
          s = "https://www.googleapis.com/customsearch/v1";
      },
      "./src/constants/paths.ts": (e, a, r) => {
        r.r(a), r.d(a, { PATHS: () => t });
        const t = { HOME: "/", CHAR: "/char/:id", NOT_FOUND: "*" };
      },
      "./src/hooks/redux.ts": (e, a, r) => {
        r.r(a), r.d(a, { useAppDispatch: () => s, useAppSelector: () => i });
        var t = r("./node_modules/react-redux/es/index.js");
        const s = t.useDispatch,
          i = t.useSelector;
      },
      "./src/index.tsx": (e, a, r) => {
        r.r(a);
        var t = r("./node_modules/react/index.js"),
          s = r.n(t),
          i =
            (r("./src/scss/index.scss"),
            r("./node_modules/react-redux/es/index.js")),
          n = r("./src/store.ts"),
          o = r("./node_modules/react-dom/client.js"),
          c = r("./node_modules/react-router/dist/index.js"),
          l = r("./src/routes/index.tsx");
        const m = document.getElementById("app");
        (0, o.createRoot)(m).render(
          s().createElement(
            i.Provider,
            { store: n.store },
            s().createElement(c.RouterProvider, { router: l.router }),
          ),
        );
      },
      "./src/modules/CharactersCards/characters.slice.ts": (e, a, r) => {
        r.r(a),
          r.d(a, {
            charactersSlice: () => t,
            reducer: () => o,
            setCharacters: () => i,
            setPage: () => s,
            setTotalPages: () => n,
          });
        const t = (0,
          r("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js")
            .createSlice)({
            name: "characters",
            initialState: { list: [], page: 1, totalPages: 0 },
            reducers: {
              setPage: (e, a) => {
                e.page = a.payload;
              },
              setCharacters: (e, a) => {
                e.list = a.payload;
              },
              setTotalPages: (e, a) => {
                e.totalPages = a.payload;
              },
            },
          }),
          { setPage: s, setCharacters: i, setTotalPages: n } = t.actions,
          { reducer: o } = t;
      },
      "./src/modules/CharactersCards/components/CharactersCards/index.tsx": (
        e,
        a,
        r,
      ) => {
        r.r(a), r.d(a, { CharactersCards: () => d });
        var t = r("./node_modules/react/index.js"),
          s = r.n(t),
          i = r("./src/hooks/redux.ts"),
          n = r("./src/modules/CharactersCards/characters.slice.ts"),
          o = r("./src/components/CharCard/index.tsx"),
          c = r("./src/utils/ErrorHandler.ts"),
          l = r("./src/utils/ClassNames.ts"),
          m = r("./src/components/Pagination/index.tsx"),
          x = r("./src/services/Characters/characters.api.ts");
        const d = (e) => {
          const a = (0, i.useAppSelector)((e) => e.characters),
            r = (0, i.useAppDispatch)(),
            {
              data: d,
              isLoading: k,
              isSuccess: p,
              error: u,
              isError: h,
            } = (0, x.useGetAllCharactersQuery)(a.page);
          return (
            (0, t.useEffect)(() => {
              p &&
                d?.results.length &&
                (r((0, n.setCharacters)(d.results)),
                r((0, n.setTotalPages)(d.info.pages))),
                h && (0, c.ErrorHandler)(u);
            }, [d, u]),
            s().createElement(
              "div",
              {
                className: (0, l.classNames)("characters-cards", e.classNames),
              },
              k
                ? s().createElement("span", null, "Loading...")
                : s().createElement(
                    "div",
                    { className: "characters-cards__cards" },
                    a.list.map((a) =>
                      s().createElement(
                        "div",
                        {
                          className: "characters-cards__card-wrapper",
                          key: a.id,
                          onClick: () => e.onCardClick(a.id),
                        },
                        s().createElement(o.default, {
                          classNames: ["characters-cards__card"],
                          name: a.name,
                          from: a.origin.name,
                          species: a.species,
                          image: a.image,
                          gender: a.gender,
                          status: a.status,
                        }),
                      ),
                    ),
                  ),
              s().createElement(m.default, {
                pages: a.totalPages,
                currentPage: a.page,
                onClick: (e) => {
                  const a = Number(e.currentTarget.getAttribute("data-page"));
                  r((0, n.setPage)(a));
                },
              }),
            )
          );
        };
      },
      "./src/modules/CharactersCards/index.ts": (e, a, r) => {
        r.r(a),
          r.d(a, {
            CharactersCards: () => s.CharactersCards,
            charactersReducer: () => t.reducer,
          });
        var t = r("./src/modules/CharactersCards/characters.slice.ts"),
          s = r(
            "./src/modules/CharactersCards/components/CharactersCards/index.tsx",
          );
      },
      "./src/routes/index.tsx": (e, a, r) => {
        r.r(a), r.d(a, { router: () => x });
        var t = r("./node_modules/react/index.js"),
          s = r.n(t),
          i = r("./node_modules/react-router-dom/dist/index.js"),
          n = r("./src/components/FullScreenLoader/index.tsx"),
          o = r("./src/constants/paths.ts"),
          c = r("./src/app.tsx");
        const l = (0, t.lazy)(() =>
            r.e("home").then(r.bind(r, "./src/pages/Home/index.tsx")),
          ),
          m = (0, t.lazy)(() =>
            r.e("char").then(r.bind(r, "./src/pages/Char/index.tsx")),
          ),
          x = (0, i.createBrowserRouter)([
            {
              path: o.PATHS.HOME,
              element: s().createElement(
                t.Suspense,
                { fallback: s().createElement(n.default, null) },
                s().createElement(c.default, null),
              ),
              children: [
                {
                  index: !0,
                  element: s().createElement(
                    t.Suspense,
                    { fallback: s().createElement(n.default, null) },
                    s().createElement(l, null),
                  ),
                },
                {
                  path: "/char/:id",
                  element: s().createElement(
                    t.Suspense,
                    { fallback: s().createElement(n.default, null) },
                    s().createElement(m, null),
                  ),
                },
                {
                  path: o.PATHS.NOT_FOUND,
                  element: s().createElement(
                    t.Suspense,
                    { fallback: s().createElement(n.default, null) },
                    "404",
                  ),
                },
              ],
            },
          ]);
      },
      "./src/services/Characters/characters.api.ts": (e, a, r) => {
        r.r(a),
          r.d(a, {
            characterApi: () => n,
            useGetAllCharactersQuery: () => o,
            useGetCharacterQuery: () => c,
          });
        var t = r(
            "./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js",
          ),
          s = r("./node_modules/@reduxjs/toolkit/dist/query/rtk-query.esm.js"),
          i = r("./src/constants/API.ts");
        const n = (0, t.createApi)({
            reducerPath: "characterApi",
            baseQuery: (0, s.fetchBaseQuery)({ baseUrl: i.API_BASE_URL }),
            endpoints: (e) => ({
              getAllCharacters: e.query({
                query: (e = 1) => `/character/?page=${e}`,
              }),
              getCharacter: e.query({ query: (e) => `/character/${e}` }),
            }),
          }),
          { useGetAllCharactersQuery: o, useGetCharacterQuery: c } = n;
      },
      "./src/services/GoogleSearchApi/googleSearch.api.ts": (e, a, r) => {
        r.r(a),
          r.d(a, { googleSearchApi: () => o, useSearchImageQuery: () => c });
        var t = r(
            "./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js",
          ),
          s = r("./node_modules/@reduxjs/toolkit/dist/query/rtk-query.esm.js"),
          i = r("./src/constants/API.ts"),
          n = r("./src/config/google.ts");
        const o = (0, t.createApi)({
            reducerPath: "googleSearchApi",
            baseQuery: (0, s.fetchBaseQuery)({ baseUrl: i.GOOGLE_SEARCH_API }),
            endpoints: (e) => ({
              searchImage: e.query({
                query: (e) =>
                  `?key=${n.GOOGLE_SEARCH_API_KEY}&searchType=image&cx=a0e008694376242be&q=${e}`,
              }),
            }),
          }),
          { useSearchImageQuery: c } = o;
      },
      "./src/store.ts": (e, a, r) => {
        r.r(a), r.d(a, { store: () => o });
        var t = r("./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js"),
          s = r("./src/services/Characters/characters.api.ts"),
          i = r("./src/modules/CharactersCards/index.ts"),
          n = r("./src/services/GoogleSearchApi/googleSearch.api.ts");
        const o = (0, t.configureStore)({
          reducer: {
            [s.characterApi.reducerPath]: s.characterApi.reducer,
            [n.googleSearchApi.reducerPath]: n.googleSearchApi.reducer,
            characters: i.charactersReducer,
          },
          middleware: (e) =>
            e().concat([
              s.characterApi.middleware,
              n.googleSearchApi.middleware,
            ]),
        });
      },
      "./src/utils/ClassNames.ts": (e, a, r) => {
        r.r(a), r.d(a, { classNames: () => t });
        const t = (e, a) => `${e}${a ? " " + a.join(" ") : ""}`;
      },
      "./src/utils/ErrorHandler.ts": (e, a, r) => {
        function t(e) {
          return (
            console.groupCollapsed("ERROR"),
            console.error("ERROR NAME", e.name),
            console.error("ERROR MESSAGE: ", e.message),
            console.error("ERROR STACK: ", e.stack),
            null
          );
        }

        r.r(a), r.d(a, { ErrorHandler: () => t });
      },
      "./src/assets/lottie/rocket.json": (e) => {
        e.exports = JSON.parse(
          '{"v":"5.7.4","fr":29.9700012207031,"ip":0,"op":80.0000032584668,"w":1080,"h":1080,"nm":"Rocket","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Layer 2 Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[539.086,490.913,0],"to":[0,-5,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":21,"s":[539.086,460.913,0],"to":[0,0,0],"ti":[0,-5,0]},{"t":39.0000015885026,"s":[539.086,490.913,0]}],"ix":2,"x":"var $bm_rt;\\n$bm_rt = loopOut(\'pingpong\');","l":2},"a":{"a":0,"k":[126.431,256.861,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.005,-0.007],[0.338,-0.47],[-22.705,-2.408],[-5.77,34.451],[0,0]],"o":[[-0.341,0.47],[9.118,11.95],[2.207,-37.822],[0,0],[-0.006,0.007]],"v":[[-30.31,29.889],[-31.313,31.309],[19.347,54.524],[31.313,-54.524],[-30.294,29.867]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.7843137254901961,0.8156862745098039,0.996078431372549,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[94.66,55.403],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0.348,0.477],[0,0],[0,0],[0.342,-0.478],[-28.149,0],[-10.739,14.073]],"o":[[0,0],[0,0],[-0.348,0.477],[10.737,14.073],[28.149,0],[-0.344,-0.478]],"v":[[62.064,29.843],[-0.001,-55.177],[-62.066,29.843],[-63.084,31.285],[-0.001,55.177],[63.084,31.285]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.5058823529411764,0.2980392156862745,0.8823529411764706,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[126.432,55.427],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":4,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[1.961,5.994],[0,0],[12.545,7.242],[0,0],[-4.85,-14.824],[0,0],[0,-5.358],[0,0],[0,0],[0,0]],"o":[[0,0],[-5.267,-16.106],[0,0],[11.349,7.757],[0,0],[1.96,5.995],[0,0],[0,0],[0,0],[0,-5.358]],"v":[[25.358,28.837],[0.879,-45.994],[-28.335,-84.287],[-28.335,-83.804],[-2.087,-47.399],[22.391,27.431],[25.368,44.664],[25.368,79.856],[28.335,84.287],[28.335,46.069]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.5568627450980392,0.33725490196078434,0.9254901960784314,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[212.787,429.186],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":4,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[1.961,5.994],[0,0],[12.544,7.242]],"o":[[0,0],[0,0],[0,-5.358],[0,0],[-5.269,-16.106],[0,0]],"v":[[-28.335,-0.348],[28.335,84.286],[28.335,46.07],[25.358,28.838],[0.88,-45.994],[-28.335,-84.286]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.5058823529411764,0.2980392156862745,0.8823529411764706,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[211.538,429.185],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":4,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[1.961,5.995],[0,0],[12.544,7.242],[0,0]],"o":[[0,0],[0,0],[0,0],[0,-5.357],[0,0],[-5.269,-16.106],[0,0],[0,0]],"v":[[-23.755,-3.161],[23.381,87.1],[32.915,81.474],[32.915,43.256],[29.938,26.024],[5.46,-48.807],[-23.755,-87.1],[-32.915,-81.562]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4117647058823529,0.21568627450980393,0.7725490196078432,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[216.493,426.372],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":4,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-1.961,5.996],[0,0],[-11.879,7.563],[0,0],[5.269,-16.106],[0,0],[0,-5.358],[0,0],[0,0]],"o":[[0,-5.358],[0,0],[5.034,-15.389],[0,0],[-12.544,7.242],[0,0],[-1.96,5.996],[0,0],[0,0],[0,0]],"v":[[-26.669,47.318],[-23.692,30.085],[0.786,-44.745],[28.335,-82.008],[28.335,-84.287],[-0.88,-45.995],[-25.359,28.836],[-28.335,46.069],[-28.335,84.287],[-26.669,81.798]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.5568627450980392,0.33725490196078434,0.9254901960784314,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[40.492,428.978],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":4,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[-1.96,5.994],[0,0],[-12.545,7.243]],"o":[[0,0],[0,0],[0,-5.358],[0,0],[5.268,-16.106],[0,0]],"v":[[28.335,-0.348],[-28.335,84.288],[-28.335,46.07],[-25.359,28.838],[-0.88,-45.993],[28.335,-84.288]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4117647058823529,0.21568627450980393,0.7725490196078432,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[41.325,429.185],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 7","np":4,"cix":2,"bm":0,"ix":7,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[-1.961,5.995],[0,0],[-12.545,7.243],[0,0]],"o":[[0,0],[0,0],[0,0],[0,-5.357],[0,0],[5.269,-16.106],[0,0],[0,0]],"v":[[23.756,-3.161],[-23.381,87.101],[-32.915,81.474],[-32.915,43.256],[-29.938,26.024],[-5.46,-48.807],[23.756,-87.101],[32.915,-81.563]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.5058823529411764,0.2980392156862745,0.8823529411764706,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[36.37,426.372],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 8","np":4,"cix":2,"bm":0,"ix":8,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[22.059,12.736],[5.067,-2.396],[-8.952,-5.169],[0,-25.313],[7.76,-3.881],[0,15.04]],"o":[[-10.574,-6.104],[6.66,-1.863],[22.059,12.736],[0,13.179],[8.142,-3.011],[0,-25.312]],"v":[[-6.679,-45.741],[-33.262,-49.041],[-8.235,-44.609],[31.706,24.283],[17.941,50.675],[33.262,23.151]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.5568627450980392,0.33725490196078434,0.9254901960784314,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[72.91,269.366],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 9","np":4,"cix":2,"bm":0,"ix":9,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[6.61,3.816],[0,20.554],[-5.082,3.637],[0,-12.969],[-17.913,-10.342],[-5.941,4.252]],"o":[[-17.913,-10.342],[0,-9.475],[-8.767,1.6],[0,20.555],[9.655,5.575],[-5.127,0.936]],"v":[[10.466,33.754],[-21.969,-22.189],[-13.796,-42.159],[-28.348,-19.514],[4.086,36.429],[28.348,37.907]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4117647058823529,0.21568627450980393,0.7725490196078432,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[60.972,271.258],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 10","np":4,"cix":2,"bm":0,"ix":10,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-20.554],[17.913,10.341],[0,20.555],[-17.912,-10.342]],"o":[[0,20.555],[-17.912,-10.342],[0,-20.555],[17.913,10.342]],"v":[[32.434,18.726],[0,37.218],[-32.434,-18.725],[0,-37.217]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.3411764705882353,0.984313725490196,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[65.058,270.469],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 11","np":4,"cix":2,"bm":0,"ix":11,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-25.312],[22.058,12.736],[0,25.312],[-22.06,-12.736]],"o":[[0,25.312],[-22.06,-12.735],[0,-25.313],[22.058,12.736]],"v":[[39.941,23.06],[0.001,45.832],[-39.941,-23.06],[0.001,-45.832]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.5058823529411764,0.2980392156862745,0.8823529411764706,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[65.058,270.47],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 12","np":4,"cix":2,"bm":0,"ix":12,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-25.312],[6.936,-4.239],[0.213,-0.12],[10.96,6.328],[0,25.312],[-7.087,4.179],[-0.201,0.11],[-10.847,-6.263]],"o":[[0,12.364],[-0.209,0.128],[-7.217,4.035],[-22.059,-12.736],[0,-12.517],[0.198,-0.117],[7.198,-3.898],[22.059,12.736]],"v":[[41.577,21.066],[30.374,46.427],[23.496,50.771],[9.934,39.321],[-30.007,-29.57],[-34.491,-46.367],[-26.245,-50.908],[1.636,-47.825]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4117647058823529,0.21568627450980393,0.7725490196078432,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[71.304,267.8],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 13","np":4,"cix":2,"bm":0,"ix":13,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-11.77,70.276],[0,0],[1.37,-1.986],[-6.824,-57.084],[0,0],[0,0],[0,-0.24],[-47.027,-1.54]],"o":[[-3.159,-78.822],[0,0],[-1.425,1.952],[-32.648,47.319],[0,0],[0,0],[-0.006,0.24],[0,27.771],[0,0]],"v":[[42.816,9.995],[55.833,-219.026],[-5.773,-134.635],[-9.966,-128.727],[-49.009,33.745],[-33.159,166.308],[-33.127,166.308],[-33.159,167.027],[51.189,219.027]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.9333333333333333,0.9254901960784314,0.984313725490196,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[70.139,219.905],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 14","np":4,"cix":2,"bm":0,"ix":14,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[32.648,47.319],[1.425,1.952],[0,0],[0,0],[1.371,-1.987],[-6.825,-57.083],[0,0],[0,0],[0,-0.24],[-49.403,0],[0,28.77],[0.007,0.241],[0,0]],"o":[[6.824,-57.083],[-1.37,-1.987],[0,0],[0,0],[-1.426,1.952],[-32.648,47.319],[0,0],[0,0],[-0.006,0.241],[0,28.77],[49.403,0],[0,-0.24],[0,0],[0,0]],"v":[[105.302,34.013],[66.258,-128.458],[62.065,-134.366],[0.001,-219.386],[-62.064,-134.366],[-66.258,-128.458],[-105.301,34.013],[-89.451,166.576],[-89.419,166.576],[-89.451,167.295],[0.001,219.386],[89.451,167.295],[89.419,166.576],[89.451,166.576]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.8666666666666667,0.8274509803921568,0.9450980392156862,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[126.431,219.636],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 15","np":4,"cix":2,"bm":0,"ix":15,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,-0.181],[-37.195,0],[0,21.66],[0.003,0.181],[0,0]],"o":[[0,0],[0,0],[0,0],[-0.004,0.181],[0,21.66],[37.196,0],[0,-0.181],[0,0],[0,0]],"v":[[67.349,-39.891],[-67.349,-39.891],[-67.349,0.131],[-67.325,0.131],[-67.349,0.672],[0,39.891],[67.349,0.672],[67.326,0.131],[67.349,0.131]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4117647058823529,0.21568627450980393,0.7725490196078432,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[126.431,418.824],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 16","np":4,"cix":2,"bm":0,"ix":16,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0],[0,-0.077],[-15.573,0],[0,9.068],[0.001,0.075],[0,0]],"o":[[0,0],[0,0],[0,0],[-0.002,0.075],[0,9.068],[15.574,0],[0,-0.077],[0,0],[0,0]],"v":[[28.198,-12.302],[-28.198,-12.302],[-28.198,-4.346],[-28.188,-4.346],[-28.198,-4.119],[-0.001,12.302],[28.198,-4.119],[28.188,-4.346],[28.198,-4.346]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4117647058823529,0.21568627450980393,0.7725490196078432,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[126.431,461.768],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 17","np":4,"cix":2,"bm":0,"ix":17,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[-2.049,3.898],[0,0],[-13.109,-7.568]],"o":[[0,0],[0,0],[0,-5.598],[0,0],[5.505,-10.473],[0,0]],"v":[[29.61,26.123],[-29.61,57.672],[-29.61,17.736],[-26.499,3.32],[-0.92,-45.341],[29.61,-50.104]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4117647058823529,0.21568627450980393,0.7725490196078432,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[29.859,342.339],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 18","np":4,"cix":2,"bm":0,"ix":18,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[2.049,3.898],[0,0],[13.109,-7.568]],"o":[[0,0],[0,0],[0,-5.598],[0,0],[-5.506,-10.473],[0,0]],"v":[[-29.61,26.123],[29.61,57.672],[29.61,17.736],[26.499,3.32],[0.92,-45.341],[-29.61,-50.104]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.4117647058823529,0.21568627450980393,0.7725490196078432,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[223.002,342.339],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 19","np":4,"cix":2,"bm":0,"ix":19,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":900.000036657751,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Layer 3 Outlines","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[127.071,467.425,0],"ix":2,"l":2},"a":{"a":0,"k":[33.238,6.415,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":0,"s":[81,81,100]},{"i":{"x":[0.667,0.667,0.667],"y":[1,1,1]},"o":{"x":[0.333,0.333,0.333],"y":[0,0,0]},"t":21,"s":[100,100,100]},{"t":39.0000015885026,"s":[81,81,100]}],"ix":6,"x":"var $bm_rt;\\n$bm_rt = loopOut(\'pingpong\');","l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-22.978],[0,0],[0,49.712],[-18.22,0]],"o":[[0,49.712],[0,0],[0,-22.978],[18.218,0]],"v":[[32.989,-23.56],[0,65.165],[-32.989,-23.56],[0,-65.165]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.9803921568627451,0.6274509803921569,0.8588235294117647,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[33.239,65.415],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":4,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":900.000036657751,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Shape Layer 4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[542,543,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ef":[{"ty":29,"nm":"Gaussian Blur","np":5,"mn":"ADBE Gaussian Blur 2","ix":1,"en":1,"ef":[{"ty":0,"nm":"Blurriness","mn":"ADBE Gaussian Blur 2-0001","ix":1,"v":{"a":0,"k":30,"ix":1}},{"ty":7,"nm":"Blur Dimensions","mn":"ADBE Gaussian Blur 2-0002","ix":2,"v":{"a":0,"k":1,"ix":2}},{"ty":7,"nm":"Repeat Edge Pixels","mn":"ADBE Gaussian Blur 2-0003","ix":3,"v":{"a":0,"k":0,"ix":3}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[261,142],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.3411764705882353,0.984313725490196,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5,"ix":5},"lc":2,"lj":2,"bm":0,"d":[{"n":"d","nm":"dash","v":{"a":0,"k":17,"ix":1}},{"n":"o","nm":"offset","v":{"a":0,"k":0,"ix":7}}],"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0.5,227],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[110.787,110.787],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":78,"ix":1},"e":{"a":0,"k":30,"ix":2},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":132.00000537647,"s":[1800]}],"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":900.000036657751,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Shape Layer 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[542,543,0],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[261,142],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.3411764705882353,0.984313725490196,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5,"ix":5},"lc":2,"lj":2,"bm":0,"d":[{"n":"d","nm":"dash","v":{"a":0,"k":17,"ix":1}},{"n":"o","nm":"offset","v":{"a":0,"k":0,"ix":7}}],"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0.5,227],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[110.787,110.787],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":78,"ix":1},"e":{"a":0,"k":30,"ix":2},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":132.00000537647,"s":[1800]}],"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":900.000036657751,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Shape Layer 3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[542,776,0],"ix":2,"l":2},"a":{"a":0,"k":[0,233,0],"ix":1,"l":2},"s":{"a":0,"k":[142.736,142.736,100],"ix":6,"l":2}},"ao":0,"ef":[{"ty":29,"nm":"Gaussian Blur","np":5,"mn":"ADBE Gaussian Blur 2","ix":1,"en":1,"ef":[{"ty":0,"nm":"Blurriness","mn":"ADBE Gaussian Blur 2-0001","ix":1,"v":{"a":0,"k":30,"ix":1}},{"ty":7,"nm":"Blur Dimensions","mn":"ADBE Gaussian Blur 2-0002","ix":2,"v":{"a":0,"k":1,"ix":2}},{"ty":7,"nm":"Repeat Edge Pixels","mn":"ADBE Gaussian Blur 2-0003","ix":3,"v":{"a":0,"k":0,"ix":3}}]}],"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[261,142],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.3411764705882353,0.984313725490196,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5,"ix":5},"lc":2,"lj":2,"bm":0,"d":[{"n":"d","nm":"dash","v":{"a":0,"k":17,"ix":1}},{"n":"o","nm":"offset","v":{"a":0,"k":0,"ix":7}}],"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0.5,227],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[110.787,110.787],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":78,"ix":1},"e":{"a":0,"k":30,"ix":2},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":80.0000032584668,"s":[697.5]}],"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":900.000036657751,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[542,776,0],"ix":2,"l":2},"a":{"a":0,"k":[0,233,0],"ix":1,"l":2},"s":{"a":0,"k":[142.736,142.736,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[261,142],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.3411764705882353,0.984313725490196,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":5,"ix":5},"lc":2,"lj":2,"bm":0,"d":[{"n":"d","nm":"dash","v":{"a":0,"k":17,"ix":1}},{"n":"o","nm":"offset","v":{"a":0,"k":0,"ix":7}}],"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0.5,227],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[110.787,110.787],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":0,"k":78,"ix":1},"e":{"a":0,"k":30,"ix":2},"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":80.0000032584668,"s":[697.5]}],"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":900.000036657751,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":1,"nm":"Dark Gray Solid 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[540,540,0],"ix":2,"l":2},"a":{"a":0,"k":[540,540,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"sw":1080,"sh":1080,"sc":"#2d2d2d","ip":900.000036657751,"op":900.000036657751,"st":0,"bm":0,"hidden":0}],"markers":[]}',
        );
      },
    },
    s = {};

  function i(e) {
    var a = s[e];
    if (void 0 !== a) return a.exports;
    var r = (s[e] = { id: e, loaded: !1, exports: {} });
    return t[e].call(r.exports, r, r.exports, i), (r.loaded = !0), r.exports;
  }

  (i.m = t),
    (i.amdO = {}),
    (e = []),
    (i.O = (a, r, t, s) => {
      if (!r) {
        var n = 1 / 0;
        for (m = 0; m < e.length; m++) {
          for (var [r, t, s] = e[m], o = !0, c = 0; c < r.length; c++)
            (!1 & s || n >= s) && Object.keys(i.O).every((e) => i.O[e](r[c]))
              ? r.splice(c--, 1)
              : ((o = !1), s < n && (n = s));
          if (o) {
            e.splice(m--, 1);
            var l = t();
            void 0 !== l && (a = l);
          }
        }
        return a;
      }
      s = s || 0;
      for (var m = e.length; m > 0 && e[m - 1][2] > s; m--) e[m] = e[m - 1];
      e[m] = [r, t, s];
    }),
    (i.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return i.d(a, { a }), a;
    }),
    (i.d = (e, a) => {
      for (var r in a)
        i.o(a, r) &&
          !i.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: a[r] });
    }),
    (i.f = {}),
    (i.e = (e) =>
      Promise.all(Object.keys(i.f).reduce((a, r) => (i.f[r](e, a), a), []))),
    (i.u = (e) =>
      e +
      "." +
      {
        home: "82ee8996647f07d52eda",
        char: "e7b7c0a4ef9d936a4a43",
      }[e] +
      ".js"),
    (i.miniCssF = (e) => {}),
    (i.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (i.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
    (a = {}),
    (r = "rickandmorty:"),
    (i.l = (e, t, s, n) => {
      if (a[e]) a[e].push(t);
      else {
        var o, c;
        if (void 0 !== s)
          for (
            var l = document.getElementsByTagName("script"), m = 0;
            m < l.length;
            m++
          ) {
            var x = l[m];
            if (
              x.getAttribute("src") == e ||
              x.getAttribute("data-webpack") == r + s
            ) {
              o = x;
              break;
            }
          }
        o ||
          ((c = !0),
          ((o = document.createElement("script")).charset = "utf-8"),
          (o.timeout = 120),
          i.nc && o.setAttribute("nonce", i.nc),
          o.setAttribute("data-webpack", r + s),
          (o.src = e)),
          (a[e] = [t]);
        var d = (r, t) => {
            (o.onerror = o.onload = null), clearTimeout(k);
            var s = a[e];
            if (
              (delete a[e],
              o.parentNode && o.parentNode.removeChild(o),
              s && s.forEach((e) => e(t)),
              r)
            )
              return r(t);
          },
          k = setTimeout(
            d.bind(null, void 0, { type: "timeout", target: o }),
            12e4,
          );
        (o.onerror = d.bind(null, o.onerror)),
          (o.onload = d.bind(null, o.onload)),
          c && document.head.appendChild(o);
      }
    }),
    (i.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      var e;
      i.g.importScripts && (e = i.g.location + "");
      var a = i.g.document;
      if (!e && a && (a.currentScript && (e = a.currentScript.src), !e)) {
        var r = a.getElementsByTagName("script");
        if (r.length) for (var t = r.length - 1; t > -1 && !e; ) e = r[t--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (i.p = e);
    })(),
    (() => {
      var e = { main: 0 };
      (i.f.j = (a, r) => {
        var t = i.o(e, a) ? e[a] : void 0;
        if (0 !== t)
          if (t) r.push(t[2]);
          else {
            var s = new Promise((r, s) => (t = e[a] = [r, s]));
            r.push((t[2] = s));
            var n = i.p + i.u(a),
              o = new Error();
            i.l(
              n,
              (r) => {
                if (i.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var s = r && ("load" === r.type ? "missing" : r.type),
                    n = r && r.target && r.target.src;
                  (o.message =
                    "Loading chunk " + a + " failed.\n(" + s + ": " + n + ")"),
                    (o.name = "ChunkLoadError"),
                    (o.type = s),
                    (o.request = n),
                    t[1](o);
                }
              },
              "chunk-" + a,
              a,
            );
          }
      }),
        (i.O.j = (a) => 0 === e[a]);
      var a = (a, r) => {
          var t,
            s,
            [n, o, c] = r,
            l = 0;
          if (n.some((a) => 0 !== e[a])) {
            for (t in o) i.o(o, t) && (i.m[t] = o[t]);
            if (c) var m = c(i);
          }
          for (a && a(r); l < n.length; l++)
            (s = n[l]), i.o(e, s) && e[s] && e[s][0](), (e[s] = 0);
          return i.O(m);
        },
        r = (self.webpackChunkrickandmorty =
          self.webpackChunkrickandmorty || []);
      r.forEach(a.bind(null, 0)), (r.push = a.bind(null, r.push.bind(r)));
    })();
  var n = i.O(void 0, ["vendors"], () => i("./src/index.tsx"));
  n = i.O(n);
})();
//# sourceMappingURL=main.6c88000ff949b16cb6c8.js.map
