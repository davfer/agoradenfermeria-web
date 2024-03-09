<template>
  <v-alert v-if="success"
           text="El vostre missatge s'ha enviat correctament. En breu li respondrem."
           title="Missatge enviat correctament"
           type="success"
           class="rounded-0"
  />
  <v-alert v-if="error !== ''" :text="error" title="Error en l'enviament del formulari" type="error" border="false"
           class="rounded-0"/>

  <v-card
    class="mx-auto my-10 pt-4 mx-2"
    max-width="550"
    min-height="500"
  >
    <v-card-title class="px-6 text-h4">Formulario de contacto</v-card-title>
    <v-card-text class="pa-5">
      <v-form @submit.prevent="submit">
        <v-text-field
          required
          clearable
          v-model="name"
          :rules="rules"
          :label="$t('contact.name')"
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
          <div style="margin: 0 auto;display: flex;align-items: center;justify-content: center;" class="g-recaptcha"
               data-sitekey="6LeDCqkUAAAAAE0LI1s3YmuDLAXaLxwWty1_Ucao" data-callback="okToken"></div>
        </div>

        <div class="d-flex justify-end mt-3">
          <v-btn
            type="submit"
            class="px-10 mt-5"
            elevation="4"
            size="x-large"
            variant="tonal"
            rounded="sm"
            :disabled="loading"
          >
            Enviar
          </v-btn>
        </div>
      </v-form>
    </v-card-text>

  </v-card>
</template>

<script setup lang="ts">

import {useFetcher} from "@/lib/fetcher";
import {useHead} from "@unhead/vue";
import {useI18n} from "vue-i18n"
import {ref} from "vue";
const {t} = useI18n()
const fetcher = useFetcher()

const name = ref('')
const mail = ref('')
const subject = ref('')
const message = ref('')

const captchaCode = ref('')

const loading = ref(true)
const success = ref(false)
const error = ref('')

const rules = [
  (value: string) => {
    if (value) return true
    return t('contact.mandatory')
  },
]
const rulesMail = [
  (value: string) => {
    if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

    return 'Es necesario entra un mail valido. Ej.agoradenfermeria@agora.net'
  },
]

async function submit(event) {
  loading.value = true
  const results = await event

  if (results.valid !== true) {
    return false
  }

  await fetcher.post("contact", {
    name: name.value,
    email: mail.value,
    subject: subject.value,
    message: message.value,
    captchaCode: captchaCode.value,
  }).then(() => {
    success.value = true
    error.value = ''

    name.value = ''
    mail.value = ''
    subject.value = ''
    message.value = ''
  }).catch((e) => {
    success.value = false
    error.value = e
  })
  loading.value = false
}

window.okToken = function (ev: string) {
  captchaCode.value = ev
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

