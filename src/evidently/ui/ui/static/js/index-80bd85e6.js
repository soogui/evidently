import{a2 as o,b as r,K as d,j as s,G as h}from"./vendor-9e6f55d1.js";import{a as p,C as g,D as c}from"./DashboardContent-1eadc887.js";import"./createSvgIcon-40456b89.js";import"./Edit-0b1234b1.js";const j={crumb:(e,{pathname:t,params:a})=>({to:t,linkText:String(a.snapshotId)}),hide:{snapshotList:!0}},u=({api:e})=>{const{projectId:t,snapshotId:a}=o();r(t,"missing projectId"),r(a,"missing snapshotId");const n=d();return s.jsx(s.Fragment,{children:s.jsx(p.Provider,{value:g({getAdditionGraphData:i=>e.getAdditionalGraphData(t,a,i),getAdditionWidgetData:i=>e.getAdditionalWidgetData(t,a,i)}),children:s.jsx(h,{container:!0,spacing:3,direction:"row",alignItems:"stretch",children:s.jsx(c,{widgets:n.widgets})})})})};export{u as SnapshotTemplate,j as handle};