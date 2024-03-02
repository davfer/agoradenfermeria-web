<template>
  <v-card
    class="mx-auto mt-10 pt-4 pl-2 p"
    max-width="550"
    min-height="500"
    title="Formulario de contacto"
  >
    <v-container>
      <v-sheet width="450" class="center mx-auto">
        <v-form @submit.prevent="submit">
          <v-text-field
            required
            clearable
            v-model="name"
            :rules="rules"
            label="Nombre"
          ></v-text-field>
          <v-text-field
            required
            clearable
            v-model="mail"
            :rules="rulesMail"
            label="Correo"
          ></v-text-field>
          <v-text-field
            required
            clearable
            v-model="subject"
            :rules="rules"
            label="Asunto"
          ></v-text-field>
          <v-textarea
            required
            clearable
            v-model="message"
            :rules="rules"
            label="Mensaje"
          ></v-textarea>

          <div>
            <div style="margin: 0 auto;display: flex;align-items: center;justify-content: center;" class="g-recaptcha" data-sitekey="6LeDCqkUAAAAAE0LI1s3YmuDLAXaLxwWty1_Ucao" data-callback="okToken"></div>
          </div>

          <div class="d-flex justify-end mt-3">
            <v-btn
              type="submit"
              elevation="4"
              size="large"
              variant="tonal"
              rounded="sm"
              :disabled="loading"
            >
              Enviar
            </v-btn>
          </div>
        </v-form>
      </v-sheet>
    </v-container>
  </v-card>
</template>

<script setup lang="ts">

import {useFetcher} from "@/lib/fetcher";
import {useHead} from "@unhead/vue";
const fetcher = useFetcher()
const name = ref('')
const mail = ref('')
const subject = ref('')
const message = ref('')
const loading = ref(true)

const rules = [
    value => {
      if (value) return true
      return 'Campo obligatorio'
    },
  ]
const rulesMail = [
    value => {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

        return 'Es necesario entra un mail valido. Ej.agoradenfermeria@agora.net'
    },
  ]

async function submit (event) {
        loading.value = true
        const results = await event

        if (results.valid !== true) {
          return false
        }

        await fetcher.post("contact", {
          name: name.value,
          email: mail.value,
          subject: subject.value,
          message: message.value
        })
        loading.value = false
      }

window.okToken = function () {
  loading.value = false;
}

useHead({
  script: [
    {
      src: 'https://www.google.com/recaptcha/api.js',
      async: true,
      defer: true
    }
  ]
})

</script>

