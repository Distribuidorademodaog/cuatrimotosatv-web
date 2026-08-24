import{q as m,v as b,c as g,d as f,l as v,o as h,b as _,t as x,p as n,s as p}from"./carrito.CnIQZ-ry.js";const{config:o,productos:M}=JSON.parse(document.getElementById("carrito-config").textContent),c=t=>document.querySelector(t);new Map(M.map(t=>[t.slug,t]));function u(t){return`https://wa.me/${String(o.telefono).replace(/\D/g,"")}?text=${encodeURIComponent(t)}`}function S(t,e){const s=t.map(r=>`• ${r.nombre} x${r.cantidad} — ${n(r.precio*r.cantidad)}`);return`${o.saludo} este pedido:

${s.join(`
`)}

Total: ${n(e.total)}
Separación: ${n(e.separacion)}
Saldo: ${e.cubierto?"cubierto por la separación":n(e.saldo)}`}function $(t){const e=x(t),s=t.length>0;if(c("[data-vacio]").hidden=s,document.querySelectorAll("[data-lleno]").forEach(a=>a.hidden=!s),!s)return;c("[data-lista]").innerHTML=t.map(a=>`
        <li class="linea">
          <div class="linea__datos">
            <a class="linea__nombre" href="/productos/${a.slug}">${a.nombre}</a>
            <p class="linea__precio">${n(a.precio)} c/u</p>
            <div class="linea__sep">
              <label for="s-${a.slug}">Separación</label>
              <div class="campo-monto">
                <span aria-hidden="true">$</span>
                <input id="s-${a.slug}" type="number" inputmode="numeric"
                       min="${o.sepMin}" max="${o.sepMax}" step="1000"
                       value="${p(a)}" data-separacion-de="${a.slug}"
                       aria-describedby="sr-${a.slug}" />
              </div>
              <p class="linea__rango" id="sr-${a.slug}">
                Entre ${n(o.sepMin)} y ${n(o.sepMax)}.
                Sugerida: ${n(a.separacion)}.
              </p>
            </div>
          </div>
          <div class="linea__control">
            <label class="visualmente-oculto" for="c-${a.slug}">Cantidad de ${a.nombre}</label>
            <input id="c-${a.slug}" type="number" min="1" max="99" value="${a.cantidad}"
                   data-cantidad="${a.slug}" />
            <button type="button" data-quitar="${a.slug}"
                    aria-label="Quitar ${a.nombre}">Quitar</button>
          </div>
          <p class="linea__subtotal">${n(a.precio*a.cantidad)}</p>
        </li>`).join(""),c("[data-total]").textContent=n(e.total),c("[data-separacion]").textContent=n(e.separacion),c("[data-saldo]").textContent=e.cubierto?"Nada — queda cubierto":n(e.saldo);const r=c("[data-acciones]");o.separacionHabilitada?r.innerHTML=t.map(a=>{const i=o.enlaces[a.slug]||o.enlaceGeneral,l=p(a),d=t.length===1?`Separar por ${n(l)}`:`Separar ${a.nombre} — ${n(l)}`;return i?`<a class="boton boton--primario ancho" href="${i}"
                       rel="noopener">${d}</a>
                    <p class="aviso-monto">En la pasarela escribe el valor:
                       <strong>${n(l)}</strong></p>`:`<a class="boton boton--primario ancho"
                     href="${u(`${o.saludo} separar la ${a.nombre} con ${n(l)}.`)}"
                     rel="noopener">${d}</a>`}).join(""):r.innerHTML="",c("[data-wa]").href=u(S(t,e))}document.addEventListener("click",t=>{const e=t.target.closest("[data-quitar]");e&&m(e.dataset.quitar),t.target.closest("[data-vaciar]")&&b()});document.addEventListener("change",t=>{const e=t.target.closest("[data-cantidad]");e&&g(e.dataset.cantidad,e.value);const s=t.target.closest("[data-separacion-de]");s&&f(s.dataset.separacionDe,s.value,o.sepMin,o.sepMax)});document.addEventListener("input",t=>{const e=t.target.closest("[data-separacion-de]");if(!e)return;const s=Number(e.value),r=e.value!==""&&s!==v(s,o.sepMin,o.sepMax);e.classList.toggle("fuera-de-rango",r);const a=document.getElementById(`sr-${e.dataset.separacionDe}`);a&&a.classList.toggle("fuera-de-rango",r)});$(h());_($);
