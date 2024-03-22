import axios from 'axios'
import {useI18n} from "vue-i18n";
import {watch} from "vue";

export function useFetcher() {
  const {locale} = useI18n()

  const headers: any = {
    'Content-Type': 'application/json',
  }

  if (locale.value) {
    headers['Accept-Language'] = locale.value

    watch(locale, () => {
      a.defaults.headers['Accept-Language'] = locale.value
    })
  }

  const a = axios.create({
    baseURL: 'https://api.agoradenfermeria.eu/',
    headers: headers,
  })

  return a
}
