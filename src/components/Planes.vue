<template>
  <section class="planes" id="planes">
    <h2>Planes</h2>

    <div class="planes-container">

      <div class="plan-card" data-aos="fade-up" data-aos-delay="0">
        <h3>Consulta Inicial Penal</h3>
        <p>
          Analizamos tu situación, revisamos documentos y te explicamos tu mejor estrategia.
        </p>
        <a
          href="https://wa.me/51916650268?text=Hola,%20deseo%20una%20*Consulta%20Inicial%20Penal*.%20Necesito%20evaluar%20mi%20caso."
          class="btn-plan"
        >
          Solicitar Consulta Ahora
        </a>
      </div>

      <div class="plan-card" data-aos="fade-up" data-aos-delay="150">
        <h3>Defensa Penal Completa</h3>
        <p>
          Acompañamiento total durante todo el proceso: denuncias, audiencias y defensa judicial.
        </p>
        <a
          href="https://wa.me/51916650268?text=Hola,%20necesito%20*Defensa%20Penal%20Completa*.%20Mi%20caso%20requiere%20acompañamiento%20total."
          class="btn-plan"
        >
          Solicitar Consulta Ahora
        </a>
      </div>

      <div class="plan-card" data-aos="fade-up" data-aos-delay="300">
        <h3>Atención Urgente 24/7</h3>
        <p>
          Respuesta inmediata para casos de detención, flagrancia o intervención policial.
        </p>
        <a
          href="https://wa.me/51916650268?text=%C2%A1Urgente!%20Necesito%20*Atenci%C3%B3n%20Penal%2024/7*.%20Hay%20una%20intervenci%C3%B3n%20o%20detenci%C3%B3n."
          class="btn-plan urgente"
        >
          Solicitar Consulta Ahora
        </a>
      </div>

      <div class="plan-card" data-aos="fade-up" data-aos-delay="450">
        <h3>Asesoría Preventiva</h3>
        <p>
          Evita denuncias y problemas legales con una orientación profesional anticipada.
        </p>
        <a
          href="https://wa.me/51916650268?text=Hola,%20deseo%20una%20*Asesor%C3%ADa%20Preventiva*.%20Quiero%20evitar%20problemas%20legales."
          class="btn-plan"
        >
          Solicitar Consulta Ahora
        </a>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "Planes",
};
</script>
<style>
.planes {
  padding: 80px 20px;
  background: #0d0d0d;
  color: #fff;
  text-align: center;
}
.planes h2{
  font-size: 30px;
}

.planes-container {
  max-width: 1100px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 25px;
}

.plan-card {
  background: #111;
  padding: 25px;
  border-radius: 12px;
  border: 1px solid #222;
  transition: .3s;
}

.plan-card:hover {
  transform: translateY(-5px);
  border-color: #25d366;
}

.plan-card h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

.plan-card p {
  font-size: 14px;
  opacity: .8;
  margin-bottom: 20px;
}

.btn-plan {
  display: inline-block;
  background: #25d366;
  color: #000;
  padding: 12px 18px;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  transition: .3s;
}

.btn-plan:hover {
  background: #1ebe5a;
}

.btn-plan.urgente {
  background: #ff3b3b;
  color: #fff;
}

.btn-plan.urgente:hover {
  background: #e62f2f;
}
</style>