import{r as l,b as p,i as g,j as t,u as i}from"./index-DbwP1iKA.js";import{N as u}from"./styles-CGqx4xgk.js";import"./Frame-BIynGPBW.js";const y=()=>{const[a,d]=l.useState(null),{inApp:s,isDarkMode:c}=p();return l.useEffect(()=>{s&&g.get("/notion/contact").then(e=>{const r=e.data.recordMap;d(r)}).catch(e=>console.error(e))},[s]),l.useEffect(()=>{setTimeout(()=>{const e=document.getElementsByClassName("notion-page"),r=document.getElementsByClassName("notion-page-scroller");if(e&&r){let o,n;for(o=0;o<e.length;o++)c?e[o].style.background=" rgba(23, 23, 32,0.4)":e[o].style.background="none";for(n=0;n<r.length;n++)c?r[n].style.background="rgba(23, 23, 32,0.4)":r[n].style.background="none"}},500)}),t.jsx(t.Fragment,{children:t.jsx(x,{children:t.jsx(b,{children:a?t.jsx(u,{disableHeader:!0,darkMode:!!c,recordMap:a,fullPage:!0}):t.jsx("div",{style:{height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:t.jsx(f,{})})})})})},x=i.div`
  display: flex;
  height: 90%;
  color: white;
`,b=i.div`
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
`,f=i.div`
  width: 80px;
  height: 40px;
  color: ${a=>a.theme.batteryColor};
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
`;export{y as default};
