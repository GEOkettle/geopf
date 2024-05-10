import{r as i,b as p,i as g,j as r,u as l}from"./index-CzNA9Oey.js";import{N as u}from"./styles-Be6f5uwY.js";import{C as x}from"./code-BYaDEeV1.js";import"./Frame-BQ8HWS9q.js";const j=()=>{const[a,d]=i.useState(null),{inApp:s,isDarkMode:c}=p();return i.useEffect(()=>{s&&g.get("/notion/credit").then(e=>{const o=e.data.recordMap;d(o)}).catch(e=>console.error(e))},[s]),i.useEffect(()=>{setTimeout(()=>{const e=document.getElementsByClassName("notion-page"),o=document.getElementsByClassName("notion-page-scroller");if(e&&o){let t,n;for(t=0;t<e.length;t++)c?e[t].style.background=" rgba(23, 23, 32,0.4)":e[t].style.background="none";for(n=0;n<o.length;n++)c?o[n].style.background="rgba(23, 23, 32,0.4)":o[n].style.background="none"}},500)}),r.jsx(r.Fragment,{children:r.jsx(b,{children:r.jsx(f,{children:a?r.jsx(u,{components:{Code:x},disableHeader:!0,darkMode:!!c,recordMap:a,fullPage:!0}):r.jsx("div",{style:{height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:r.jsx(h,{})})})})})},b=l.div`
  display: flex;
  height: 90%;
  color: white;
`,f=l.div`
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
`,h=l.div`
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
`;export{j as default};
