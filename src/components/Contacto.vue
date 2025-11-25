<template>
  <section id="contacto" class="contacto">
    <div class="contacto-container">

      <h2 data-aos="fade-up">Contacto y Asesoría Penal</h2>
      <p class="contacto-sub" data-aos="fade-up" data-aos-delay="150">
        Respuesta inmediata para casos urgentes.
      </p>

      <form
        class="formulario"
        id="form-caso"
        data-aos="fade-up"
        data-aos-delay="300"
        ref="formRef"
        action="https://formsubmit.co/moisesedwarsantonomunoz@gmail.com"
        method="POST"
        target="hiddenIframe"
      >

        <input type="hidden" name="_subject" value="Nuevo caso penal desde tu página web">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_template" value="table">
        <input type="hidden" name="_iframe" value="1">

        <div class="input-group">
          <label>Nombre completo</label>
          <input v-model="nombre" type="text" name="Nombre" placeholder="Tu nombre" required />
        </div>

        <div class="input-group">
          <label>Número de WhatsApp</label>
          <input v-model="whatsapp" type="tel" name="Whatsapp" placeholder="Ej: 916650268" required />
        </div>

        <div class="input-group">
          <label>Tipo de caso</label>
          <select v-model="tipoCaso" name="Tipo de caso" required>
            <option value="">Selecciona una opción</option>
            <option>Detención / Flagrancia</option>
            <option>Violencia familiar</option>
            <option>Robo / Hurto / Estafa</option>
            <option>Delitos sexuales</option>
            <option>Agresiones</option>
            <option>Investigación preliminar</option>
            <option>Asesoría preventiva</option>
          </select>
        </div>

        <div class="input-group">
          <label>Mensaje breve</label>
          <textarea v-model="mensaje" name="Mensaje" placeholder="Cuéntanos brevemente tu situación" required></textarea>
        </div>

        <button type="button" class="btn-form" ref="btnRef" @click="enviarFormulario">
          <i class="bi bi-send"></i>
          Recibir Asesoría Penal
        </button>

        <p class="confidencial">Tu información es 100% confidencial.</p>
      </form>

      <!-- iframe oculto para evitar recargas -->
      <iframe name="hiddenIframe" style="display:none;"></iframe>

      <p>O tambien</p>

      <a
        href="https://wa.me/51916650268?text=Hola,%20necesito%20asesor%C3%ADa%20penal.%20Este%20es%20mi%20caso:"
        class="btn-ws"
      >
        <i class="bi bi-whatsapp"></i>
        Hablar por WhatsApp Ahora
      </a>

    </div>
  </section>
</template>

<script setup>
import Swal from "sweetalert2";
import { ref } from "vue";

// Campos reactivos
const nombre = ref("");
const whatsapp = ref("");
const tipoCaso = ref("");
const mensaje = ref("");

// Referencias
const formRef = ref(null);
const btnRef = ref(null);

// Método de envío
const enviarFormulario = async () => {
  // VALIDACIONES
  if (nombre.value.trim().length < 3) {
    return Swal.fire({
      icon: "warning",
      title: "Nombre inválido",
      text: "Ingresa tu nombre completo (mínimo 3 caracteres)."
    });
  }

  if (!/^\d{9}$/.test(whatsapp.value.trim())) {
    return Swal.fire({
      icon: "warning",
      title: "Número inválido",
      text: "El número de WhatsApp debe tener 9 dígitos."
    });
  }

  if (tipoCaso.value === "") {
    return Swal.fire({
      icon: "warning",
      title: "Selecciona un tipo de caso",
      text: "Debes elegir una opción."
    });
  }

  if (mensaje.value.trim().length < 10) {
    return Swal.fire({
      icon: "warning",
      title: "Mensaje demasiado corto",
      text: "Describe brevemente tu situación (mínimo 10 caracteres)."
    });
  }

  // Animación
  const originalText = btnRef.value.innerHTML;
  btnRef.value.innerHTML = `<span class='loader'></span> Enviando...`;
  btnRef.value.disabled = true;

  // Enviar el form dentro del iframe (sin recargar)
  formRef.value.submit();

  // Mostrar alerta
  setTimeout(() => {
    Swal.fire({
      icon: "success",
      title: "¡Caso enviado!",
      text: "Tu caso ha sido enviado. En breve me comunicaré contigo.",
      confirmButtonColor: "#007bff"
    });

    // restaurar botón
    btnRef.value.innerHTML = originalText;
    btnRef.value.disabled = false;

    formRef.value.reset();
  }, 1000);
};
</script>
<style>
.contacto {
  padding: 80px 0;
  background: #0d0d0d;
  text-align: center;
}

.contacto-container {
  width: 90%;
  margin: auto;
  max-width: 650px;
}

.contacto h2 {
  font-size: 32px;
  font-weight: bold;
}

.contacto-sub {
  opacity: 0.7;
  margin-bottom: 40px;
}

.formulario {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: rgba(255,255,255,0.05);
  padding: 30px;
  border-radius: 12px;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.1);
}

.input-group {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.input-group label {
  margin-bottom: 6px;
  font-size: 14px;
  opacity: 0.8;
}

.input-group input,
.input-group select,
.input-group textarea {
  background: #1a1a1a;
  border: 1px solid #333;
  padding: 12px;
  border-radius: 8px;
  color: #fff;
}

textarea {
  height: 120px;
  resize: none;
}

.btn-form {
  background: #007bff;
  padding: 14px;
  color: #fff;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;
}

.btn-form:hover {
  background: #0d6efd;
}
.loader {
  width: 16px;
  height: 16px;
  border: 3px solid #fff;
  border-radius: 50%;
  border-top-color: transparent;
  display: inline-block;
  animation: girar 0.7s linear infinite;
  margin-right: 6px;
  vertical-align: middle;
}

@keyframes girar {
  to {
    transform: rotate(360deg);
  }
}

.btn-ws {
  background: #25d366;
  padding: 14px;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  display: block;
  text-decoration: none;
  transition: 0.3s;
}

.btn-ws:hover {
  opacity: 0.9;
}

.btn-form,.btn-ws{
  font-size: 14px
}
.btn-form i,
.btn-ws i{
  font-size: 16px;
}
.confidencial {
  font-size: 13px;
  margin-top: 10px;
  opacity: 0.7;
}
</style>