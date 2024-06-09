import{r as c,b as p,i as u,j as r,u as i}from"./index-aCAAJena.js";import{N as g}from"./styles-D1FvzIrd.js";import{C as x}from"./code-CcvCM44J.js";import"./Frame-Cz-m9U1h.js";const j=()=>{const[e,d]=c.useState(null),{inApp:s,isDarkMode:l}=p();return c.useEffect(()=>{s&&u.get("/notion/credit").then(o=>{const t=o.data.recordMap;d(t)}).catch(o=>console.error(o))},[s]),c.useEffect(()=>{setTimeout(()=>{const o=document.getElementsByClassName("notion-page"),t=document.getElementsByClassName("notion-page-scroller");if(o&&t){let n,a;for(n=0;n<o.length;n++)l?o[n].style.background=" rgba(23, 23, 32,0.4)":o[n].style.background="none";for(a=0;a<t.length;a++)l?t[a].style.background="rgba(23, 23, 32,0.4)":t[a].style.background="none"}},500)}),r.jsx(r.Fragment,{children:r.jsx(b,{children:r.jsx(f,{children:e?r.jsx(g,{components:{Code:x},disableHeader:!0,darkMode:!!l,recordMap:e,fullPage:!0}):r.jsx("div",{style:{height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:r.jsx(h,{})})})})})},b=i.div`
  display: flex;
  height: 90%;
  color: white;
`,f=i.div`
  width: 100%;
  padding: 2px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 4px;
    background-color: ${e=>e.theme.scrollBarColor};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${e=>e.theme.scrollColor};
    border-radius: 5px;
    cursor: pointer;
  }
`,h=i.div`
  width: 80px;
  height: 40px;
  color: ${e=>e.theme.batteryColor};
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
