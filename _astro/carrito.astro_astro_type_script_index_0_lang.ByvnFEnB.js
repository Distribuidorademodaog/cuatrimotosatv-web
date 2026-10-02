import{q as b,v as g,c as f,d as v,l as h,o as _,b as x,t as M,p as n,s as $}from"./carrito.CnIQZ-ry.js";const{config:o,productos:y}=JSON.parse(document.getElementById("carrito-config").textContent),c=t=>document.querySelector(t);new Map(y.map(t=>[t.slug,t]));function p(t){return`https://wa.me/${String(o.telefono).replace(/\D/g,"")}?text=${encodeURIComponent(t)}`}function S(t,e){const s=t.map(r=>`• ${r.nombre} x${r.cantidad} — ${n(r.precio*r.cantidad)}`);return`${o.saludo} este pedido:

${s.join(`
`)}

Total: ${n(e.total)}
Separación: ${n(e.separacion)}
Saldo: ${e.cubierto?"cubierto por la separación":n(e.saldo)}`}function m(t){const e=M(t),s=t.length>0;if(c("[data-vacio]").hidden=s,document.querySelectorAll("[data-lleno]").forEach(a=>a.hidden=!s),!s)return;c("[data-lista]").innerHTML=t.map(a=>`
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
                       value="${$(a)}" data-separacion-de="${a.slug}"
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
        </li>`).join(""),c("[data-total]").textContent=n(e.total),c("[data-separacion]").textContent=n(e.separacion),c("[data-saldo]").textContent=e.cubierto?"Nada — queda cubierto":n(e.saldo);const r=c("[data-acciones]");o.separacionHabilitada?r.innerHTML=t.map(a=>{const d=o.enlaces[a.slug]||o.enlaceGeneral,l=a.precio*a.cantidad,i=$(a),u=t.length===1?"":` ${a.nombre}`;return d?`<a class="boton boton--primario ancho" href="${d}" rel="noopener"
                       data-pago="total">Pagar el total${u} — ${n(l)}</a>
                    <p class="aviso-monto">En la pasarela escribe el valor:
                       <strong>${n(l)}</strong></p>
                    <a class="boton boton--fantasma ancho" href="${d}" rel="noopener"
                       data-pago="separacion">O separarlo con ${n(i)}</a>`:`<a class="boton boton--primario ancho"
                     href="${p(`${o.saludo} comprar la ${a.nombre} por ${n(l)}.`)}"
                     rel="noopener">Pagar el total${u} — ${n(l)}</a>
                  <a class="boton boton--fantasma ancho"
                     href="${p(`${o.saludo} separar la ${a.nombre} con ${n(i)}.`)}"
                     rel="noopener">O separarlo con ${n(i)}</a>`}).join(""):r.innerHTML="",c("[data-wa]").href=p(S(t,e))}document.addEventListener("click",t=>{const e=t.target.closest("[data-quitar]");e&&b(e.dataset.quitar),t.target.closest("[data-vaciar]")&&g()});document.addEventListener("change",t=>{const e=t.target.closest("[data-cantidad]");e&&f(e.dataset.cantidad,e.value);const s=t.target.closest("[data-separacion-de]");s&&v(s.dataset.separacionDe,s.value,o.sepMin,o.sepMax)});document.addEventListener("input",t=>{const e=t.target.closest("[data-separacion-de]");if(!e)return;const s=Number(e.value),r=e.value!==""&&s!==h(s,o.sepMin,o.sepMax);e.classList.toggle("fuera-de-rango",r);const a=document.getElementById(`sr-${e.dataset.separacionDe}`);a&&a.classList.toggle("fuera-de-rango",r)});m(_());x(m);
