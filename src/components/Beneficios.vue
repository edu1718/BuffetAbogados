<template>
  <section id="beneficios" class="beneficios-section">
    <div class="beneficios-container">

      <h2 class="titulo" data-aos="fade-up">
        ¿Por qué elegir nuestra defensa penal?
      </h2>

      <p class="subtitulo" data-aos="fade-up" data-aos-delay="100">
        Beneficios reales que marcan la diferencia cuando está en juego tu libertad.
      </p>

      <div class="beneficios-grid">
        <div
          v-for="(beneficio, index) in beneficios"
          :key="index"
          class="beneficio-card"
          data-aos="fade-up"
          :data-aos-delay="100 * (index + 1)"
        >
          <div class="icono">{{ beneficio.icono }}</div>
          <h3>{{ beneficio.titulo }}</h3>
          <p>{{ beneficio.texto }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: "BeneficiosSection",
  data() {
    return {
      beneficios: [
        {
          icono: "⚖️",
          titulo: "Defensa Penal Especializada",
          texto:
            "Amplia experiencia en delitos graves, procesos complejos y situaciones de alta presión jurídica.",
        },
        {
          icono: "⏱️",
          titulo: "Atención Urgente 24/7",
          texto:
            "Respuesta inmediata ante detenciones, intervenciones policiales o emergencias legales.",
        },
        {
          icono: "🔒",
          titulo: "Confidencialidad Garantizada",
          texto:
            "Toda tu información será tratada con absoluta reserva y protección.",
        },
        {
          icono: "🎯",
          titulo: "Estrategias Personalizadas",
          texto:
            "Cada caso es único. Diseñamos una defensa ajustada a tu situación real.",
        },
        {
          icono: "🤝",
          titulo: "Acompañamiento Permanente",
          texto:
            "Te guiamos en todo el proceso: denuncias, audiencias, medidas y juicio oral.",
        },
        {
          icono: "📁",
          titulo: "Experiencia Comprobada",
          texto:
            "Más de 500 casos atendidos con resultados favorables en procesos penales complejos.",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* ===== BENEFICIOS SECTION ===== */

.beneficios-section {
    padding: 80px 0;
    background: #0d0d0d;
    color: #fff;
}

.beneficios-container {
    width: 85%;
    margin: auto;
    text-align: center;
}

.beneficios-section .titulo {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 10px;
}

.beneficios-section .subtitulo {
    font-size: 18px;
    opacity: 0.7;
    margin-bottom: 50px;
}

/* GRID */
.beneficios-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
}

/* CARD */
.beneficio-card {
    background: rgba(255, 255, 255, 0.05);
    padding: 25px;
    border-radius: 14px;
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    transition: 0.25s;
}

.beneficio-card:hover {
    transform: translateY(-6px);
    background: rgba(255, 255, 255, 0.10);
    border-color: rgba(255, 255, 255, 0.2);
}

.icono {
    font-size: 40px;
    margin-bottom: 10px;
}

.beneficio-card h3 {
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: 600;
}

.beneficio-card p {
    font-size: 15px;
    opacity: 0.85;
    line-height: 1.5;
}

/* RESPONSIVE */
@media (max-width: 900px) {
    .beneficios-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 600px) {
    .beneficios-grid {
        grid-template-columns: 1fr;
    }

    .beneficio-card {
        padding: 20px;
    }
}
</style>
