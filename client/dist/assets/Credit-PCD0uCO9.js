import{r as a,b as l,i as s,j as r,u as o}from"./index-CdcQ8Wz3.js";import{N as d}from"./styles-CcShdLyf.js";import{C as p}from"./code-D_fcBk3e.js";import"./Frame-DXiApbQH.js";const C=()=>{const[t,c]=a.useState(null),{inApp:n}=l();return a.useEffect(()=>{n&&s.get("/notion/credit").then(e=>{const i=e.data.recordMap;c(i)}).catch(e=>console.error(e))},[n]),r.jsx(r.Fragment,{children:r.jsx(x,{children:r.jsx(u,{children:t?r.jsx(d,{components:{Code:p},disableHeader:!0,darkMode:!0,recordMap:t,fullPage:!0}):r.jsx("div",{style:{height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:r.jsx(b,{})})})})})},x=o.div`
  display: flex;
  height: 90%;
  color: white;
`,u=o.div`
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
`,b=o.div`
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
`;export{C as default};
