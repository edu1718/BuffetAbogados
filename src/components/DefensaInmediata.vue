<template>
  <section class="defensa" id="defensa-inmediata">
    <div class="defensa-container">

      <h2 class="defensa-title" data-aos="fade-up">
        ¿Por qué necesitas defensa inmediata?
      </h2>

      <p class="defensa-sub" data-aos="fade-up" data-aos-delay="150">
        En derecho penal, el tiempo es decisivo. Una mala acción en las primeras horas
        puede perjudicar todo tu proceso. Aquí te explicamos por qué actuar rápido
        puede salvar tu libertad.
      </p>

      <div class="defensa-cards">

        <div class="defensa-card" data-aos="fade-right">
          <h3>⏳ El tiempo es clave</h3>
          <p>
            Las primeras horas definen la dirección del caso. Una intervención rápida
            puede evitar detenciones prolongadas o imputaciones innecesarias.
          </p>
        </div>

        <div class="defensa-card" data-aos="fade-right" data-aos-delay="150">
          <h3>⚠️ Evita errores irreversibles</h3>
          <p>
            Una declaración mal dada puede ser usada en tu contra. Te guiamos desde
            el primer minuto para evitar daños procesales.
          </p>
        </div>

        <div class="defensa-card" data-aos="fade-right" data-aos-delay="300">
          <h3>📞 Te asesoramos desde la primera llamada</h3>
          <p>
            Atendemos de inmediato. No enfrentes a la policía o fiscalía sin respaldo
            legal especializado.
          </p>
        </div>

        <div class="defensa-card" data-aos="fade-right" data-aos-delay="450">
          <h3>🔒 Protege tus derechos</h3>
          <p>
            Cada paso mal dado puede afectar tu libertad. Nuestro trabajo es evitar que
            cometas errores que después no se puedan corregir.
          </p>
        </div>

      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "DefensaInmediata",
};
</script>
<style>
.defensa {
    background: #0d0d0d;
    color: #fff;
    padding: 80px 20px;
}

.defensa-container {
    max-width: 1100px;
    margin: auto;
    text-align: center;
}

.defensa-title {
    font-size: 2.4rem;
    font-weight: bold;
    margin-bottom: 20px;
    color: #ff4444; /* tono de urgencia */
}

.defensa-sub {
    font-size: 1.2rem;
    max-width: 800px;
    margin: auto;
    opacity: 0.9;
}

.defensa-cards {
    margin-top: 60px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
}

.defensa-card {
    background: #161616;
    padding: 25px;
    border-radius: 10px;
    border-left: 4px solid #ff4444;
    transition: transform 0.3s ease;
}

.defensa-card h3 {
    font-size: 1.3rem;
    margin-bottom: 10px;
    color: #ff4444;
}

.defensa-card p {
    font-size: 1rem;
    opacity: 0.85;
}

.defensa-card:hover {
    transform: translateY(-8px);
}
</style>