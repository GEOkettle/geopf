import{r as a,b as l,i as s,j as r,u as t}from"./index-Dr9Wsn9J.js";import{N as d}from"./styles-FVYsH4Xi.js";import"./Frame-px_GXcGK.js";const f=()=>{const[o,c]=a.useState(null),{inApp:n}=l();return a.useEffect(()=>{n&&s.get("/notion/contact").then(e=>{const i=e.data.recordMap;c(i)}).catch(e=>console.error(e))},[n]),r.jsx(r.Fragment,{children:r.jsx(p,{children:r.jsx(x,{children:o?r.jsx(d,{disableHeader:!0,darkMode:!0,recordMap:o,fullPage:!0}):r.jsx("div",{style:{height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:r.jsx(u,{})})})})})},p=t.div`
  display: flex;
  height: 90%;
  color: white;
`,x=t.div`
  width: 100%;
  padding: 2px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 4px;
    background-color: #171720;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(10, 201, 74, 0.7);
    border-radius: 5px;
    cursor: pointer;
  }
`,u=t.div`
  width: 80px;
  height: 40px;
  color: rgba(10, 201, 74, 0.7);
  border: 2px solid currentColor;
  border-right-color: transparent;
  padding: 3px;
  background: repeating-linear-gradient(90deg, currentColor 0 10px, #0000 0 15px) 0/0% no-repeat content-box content-box;
  position: relative;
  box-sizing: border-box;
  animation: l5 2s infinite steps(6);
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    bottom: -2px;
    left: 100%;
    width: 10px;
    background: linear-gradient(#0000 calc(50% - 7px), currentColor 0 calc(50% - 5px), #0000 0 calc(50% + 5px), currentColor 0 calc(50% + 7px), #0000 0) left / 100% 100%, linear-gradient(currentColor calc(50% - 5px), #0000 0 calc(50% + 5px), currentColor 0) left / 2px 100%, linear-gradient(#0000 calc(50% - 5px), currentColor 0 calc(50% + 5px), #0000 0) right/2px 100%;
    background-repeat: no-repeat;
  }
  @keyframes l5 {
    100% {
      background-size: 120%;
    }
  }
`;export{f as default};
