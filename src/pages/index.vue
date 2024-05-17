<template>
  <v-container fluid>
    <v-row class="">
      <v-sheet border max-width="1600"
               class=" align-center  flex-wrap mx-auto pa-4 my-3" color="secondary" rounded>
        <p class="mb-4 text-center">{{ $t('description') }}</p>

        <p class="text-left"><strong>Secciones y contenidos de la revista</strong></p>
        <p class="mb-2">Desde su primer número, edición impresa diciembre 1996 publicado en lengua catalana, en
          el sumario constaba ya <strong>Editorial, Infermeria Ensenyament, Escrits, Entrevista, Recerca,
            Novetats Informatiques, Comunicació Interna, Biblioteca,Vida a l&#39;Aulari, Que vols
            saber?, Agenda</strong></p>
        <p>En las siguientes publicaciones se han mantenido, adaptado y añadido las demás secciones
          que han configurado la esencia de la revista, ser un espacio de encuentro, un “Agora de
          Enfermería”, ya sea a través de la docencia de donde surge, de la investigación, de sus
          profesionales además de sus Colegios y Asociaciones y los estudiantes Nuestro Futuro.</p>

        <p><em>Editorial, Enfermeria docente, Enfermeria clínica, Entrevista, Originales, Investigación,
          Escritos de Enfermeria, Mirada Enfermera, Publicaciones científicas, Revisiones
          bibliográficas, Formación Continuada, Nos comunicamos, Novedades Informáticas,
          Navegando por las páginas web, Vida en el Aula, Experiencias reflexivas, Información de
          Col.legis Oficials d&#39;Infermeres i Infermers i Associacions d&#39;Infermeria, Acupuntura virtual,
          Másters, Posgrados, Cursos de Especialización , Información cursos de verano, Espacio de
          Lectura, Biblioteca.</em></p>
        <p class="mt-4"><strong>Eventos Especiales:</strong> <br>
          <ul class="ml-10">
            <li>Ágora informa desde el CIE 2019 Singapur,</li>
            <li>Jornada 20 Años de Agora de Enfermeria</li>
          </ul>
        </p>
      </v-sheet>
    </v-row>
    <v-row>
      <v-col lg="7" sm="12" class="ms-md-auto">
        <Timeline :magazines="magazineStore.magazines"/>
      </v-col>
      <v-col lg="2" sm="12" class="ms-md-auto">
        <collaborators :collaborators="collaboratorStore.collaborators"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import Timeline from "@/components/Timeline.vue";
import {useMagazineStore} from "@/store/magazine";
import {onMounted} from "vue";
import Collaborators from "@/components/Collaborators.vue";
import {useCollaboratorStore} from "@/store/collaborator";

const magazineStore = useMagazineStore();
const collaboratorStore = useCollaboratorStore();
onMounted(async () => {
  await magazineStore.loadMagazines();
  await collaboratorStore.loadCollaborators();
});
</script>
