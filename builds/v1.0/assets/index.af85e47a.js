import{S as f,P as y,W as b,M as P,a as p,b as S,D as M,F as x,c as v,B as L}from"./vendor.61fc2e5c.js";const z=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))e(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&e(l)}).observe(document,{childList:!0,subtree:!0});function a(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(n){if(n.ep)return;n.ep=!0;const o=a(n);fetch(n.href,o)}};z();const i={plane:{width:400,height:400,widthSegments:50,heightSegments:50},light:{x:0,y:0,z:10,color:5635993,intensity:2}},u=new f,c=new y(75,window.innerWidth/window.innerHeight,.1,1e3);c.position.z=70;const d=new b({antialias:!0});d.setSize(window.innerWidth,window.innerHeight);d.setPixelRatio(devicePixelRatio);document.body.appendChild(d.domElement);const r=new P(new p(i.plane.width,i.plane.height,i.plane.widthSegments,i.plane.heightSegments),new S({side:M,flatShading:x,vertexColors:!0}));u.add(r);W();const g=new v(i.light.color,i.light.intensity,100);g.position.set(i.light.x,i.light.y,i.light.z);u.add(g);const h={x:0,y:0};function W(){r.geometry.dispose(),r.geometry=new p(i.plane.width,i.plane.height,i.plane.widthSegments,i.plane.heightSegments);const s=[],{array:t}=r.geometry.attributes.position;for(let e=0;e<t.length;e++){if(e%3==0){const n=t[e],o=t[e+1],l=t[e+2];t[e]=n+(Math.random()-.5)*3,t[e+1]=o+(Math.random()-.5)*3,t[e+2]=l+(Math.random()-.5)*5}s.push(Math.random()*Math.PI*2)}r.geometry.attributes.position.originalPosition=r.geometry.attributes.position.array,r.geometry.attributes.position.randomValues=s;const a=[];for(let e=0;e<r.geometry.attributes.position.count;e++)a.push(0,.19,.4);r.geometry.setAttribute("color",new L(new Float32Array(a),3))}let m=0;function w(){requestAnimationFrame(w),m+=.01;const{array:s,originalPosition:t,randomValues:a}=r.geometry.attributes.position;for(let e=0;e<s.length;e+=3)s[e]=t[e]+Math.cos(m+a[e])*.01,s[e+1]=t[e+1]+Math.sin(m+a[e])*.01;r.geometry.attributes.position.needsUpdate=!0,g.position.set(h.x,h.y,i.light.z),d.render(u,c)}window.addEventListener("resize",()=>{c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),d.setSize(window.innerWidth,window.innerHeight)},!1);window.addEventListener("mousemove",s=>{var t=.105;h.x=(s.clientX-window.innerWidth/2)*t,h.y=(window.innerHeight/2-s.clientY)*t},!1);w();