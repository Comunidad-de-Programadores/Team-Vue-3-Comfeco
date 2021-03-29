<template>
     <div id="Terms-and-conditions">
        <navbar/>
      <div id="Condiciones-de-Servicios" class="bg- w-full my-5">
        <h2 class="pl-24 font-bold ">Condiciones de Servicios</h2>   
         <p class="pl-24">¡Te damos la bienvenida a la COMFECO!</p>
            <p class="pl-24">
                No vendemos tus datos personales a los anunciantes ni compartimos ningún tipo de información con ellos que te identifique directamente (como tu nombre, dirección de correo electrónico u otros datos de contacto), 
                a menos que nos des permiso específico. 
                En su lugar, los anunciantes nos proporcionan información, como el tipo de audiencia 
                a la que quieren llegar con sus anuncios, y nosotros los mostramos a las personas que puedan estar interesadas en ellos. 
                Asi mismo nuestra Política de datos se detalla cómo recopilamos y usamos tus datos personales para determinar algunos de los anuncios que ves y 
                poder ofrecer el resto de los servicios que se describen a continuación.
            </p>
            <p class="pl-24 font-medium">Permisos que nos concedes:</p>
            <p class="pl-24">
                Para proporcionar nuestros servicios, necesitamos que nos concedas determinados permisos:
            </p>
            <p class="pl-24">
                1.Permiso para usar el contenido que creas y compartes: <br/> Hay contenido que compartes o subes, como fotos o vídeos, que puede estar protegido por leyes en materia de propiedad intelectual o industrial.
                Eres el propietario de los derechos de propiedad intelectual o industrial (como derechos de autor o marcas) del contenido que creas y compartes en la COMFECO. 
                Ninguna disposición de las presentes Condiciones te priva de los derechos que tienes sobre el contenido de tu propiedad. Puedes compartir libremente tu contenido con quien quieras y donde desees.
                No obstante, para poder ofrecer nuestros servicios, debes concedernos algunos permisos legales (denominados “licencias”) a fin de usar dicho contenido. 
            </p>
            <p class="pl-24">
                2.Permiso para usar tu nombre, tu foto del perfil e información sobre las acciones que realizas en anuncios y contenido patrocinado: Nos concedes permiso para usar tu nombre, tu foto del perfil e información sobre las acciones que realizas en la COMFECO.
        </p>
        <h2 class="pl-24 font-bold">Politica de Datos</h2>
        <p class="pl-24 font-medium">Comunicarnos contigo:</p>
        <p class="pl-24">
            Usamos la información a nuestra disposición para enviarte mensajes del evento, informarte acerca de nuestras políticas y condiciones. 
            También la utilizamos para responderte cuando te pones en contacto con nosotros.
        </p>
      </div>
      <Footer/>
     </div>
</template>

<script>
import navbar from './nav-bar'
import Footer from './Footer'
    export default {
        name: 'Condiciones',
        components:{
            navbar,
            Footer
        }
    }
</script>