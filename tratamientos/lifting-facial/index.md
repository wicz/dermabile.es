---
layout: default
title: Lifting facial sin cirugía con Ultraformer
description: Lifting facial sin cirugía con Ultraformer en Barcelona
---

<div class="relative bg-white overflow-hidden">
  <div class="max-w-7xl mx-auto">
    <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 xl:max-w-2xl lg:w-full lg:pb-20 xl:pb-32">
      <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <polygon points="50,0 100,0 50,100 0,100"></polygon>
      </svg>

      <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav class="relative flex items-baseline" aria-label="Global">
          <div class="flex-grow">
            <img class="h-8 w-auto sm:h-10" src="/assets/images/dermabile-brand-logo.svg">
          </div>
          <div class="uppercase tracking-wide text-iron">Medicina Estética</div>
        </nav>
      </div>

      <main class="mt-10 mx-auto max-w-2xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div class="text-center xl:text-left">
          <h1 class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl">
            <span class="block xl:inline">Combate la flacidez y reafirma tu piel
            con</span>
            <span class="block text-rose xl:inline">
              lifting facial sin cirugía
            </span>
          </h1>
          <p class="prose md:prose-lg mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Estimula la producción de colágeno y recupera la tersura de tu piel
            con la tecnología más moderna del mercado: el ultrasonido micro y
            macro focalizado de alta intensidad (HIFU) de Ultraformer III.
          </p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center xl:justify-start">
            <div class="rounded-md shadow">
              <button class="w-full flex items-center justify-center
                px-8 py-3 border border-transparent font-medium rounded-md
                text-white bg-rose md:py-4 md:text-lg md:px-10"
                onclick="checkout({ contents: [{ id: 'ultraformer', quantity: 1 }] }, true)">
                Pedir cita
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  <div class="hidden xl:flex lg:absolute lg:inset-y-0 lg:right-0
    bg-red-200 w-1/2">
    <img class="place-self-center object-cover ml-48 2xl:ml-64 w-1/2" src="ultraformer.png" alt="">
  </div>
</div>

<div class="md:py-16 bg-gradient-to-b from-iron to-coal" id="video">
  <video
    class="w-full md:w-4/5 h-auto appearance-none mx-auto relative"
    poster="ultraformer-poster.jpg"
    controls
    preload="auto"
  >
    <source src="https://dermabile.s3.amazonaws.com/assets/ultraformer.webm" type="video/webm" />
    <source src="https://dermabile.s3.amazonaws.com/assets/ultraformer.mp4" type="video/mp4" />
  </video>
</div>

<div class="py-12 bg-white relative">
  <div class="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 relative">
    <div class="max-w-3xl mb-12">
      <h2 class="font-semibold text-rose uppercase
        tracking-wide mb-2">LOS RESULTADOS — TU PIEL TERSA Y JOVEN</h2>
    </div>
    <div x-data="{ set: 1 }">
      <div x-bind:class="{ 'hidden': set != 1 }">
        <div class="space-y-2 lg:space-y-0 lg:px-16 lg:grid lg:grid-cols-2 lg:gap-2">
          <img src="uf-1-a.jpg" class="h-64 object-cover lg:h-80 w-full
          shadow-inner rounded-md border border-gray-300" />
          <img src="uf-1-d.jpg" class="h-64 object-cover lg:h-80 w-full
          shadow-inner rounded-md border border-gray-300" />
        </div>
      </div>
      <div class="hidden" x-bind:class="{ 'hidden': set != 2 }">
        <div class="space-y-2 lg:space-y-0 lg:px-16 lg:grid lg:grid-cols-2 lg:gap-2">
          <img src="uf-2-a.jpg" class="h-64 lg:object-cover lg:h-80 w-full shadow-inner rounded-md border border-gray-300" />
          <img src="uf-2-d.jpg" class="h-64 lg:object-cover lg:h-80 w-full shadow-inner rounded-md border border-gray-300" />
        </div>
      </div>
      <div class="hidden" x-bind:class="{ 'hidden': set != 3 }">
        <div class="space-y-2 lg:space-y-0 lg:px-16 lg:grid lg:grid-cols-2 lg:gap-2">
          <img src="uf-3-a.jpg" class="h-64 lg:object-cover lg:h-80 w-full shadow-inner rounded-md border border-gray-300" />
          <img src="uf-3-d.jpg" class="h-64 lg:object-cover lg:h-80 w-full shadow-inner rounded-md border border-gray-300" />
        </div>
      </div>
      <div class="my-4 lg:pl-16">
        <button type="button" class="inline-flex items-center px-2.5 py-1.5 border font-medium rounded shadow-sm hover:bg-peach hover:text-white" x-bind:class="set == 1 ? 'border-transparent bg-rose text-white' : 'border-gray-300 bg-transparent text-gray-700'" x-on:click="set = 1">
          <span x-bind:class="{ 'hidden': set != 1 }">Arrugas finas</span>
          <span class="hidden" x-bind:class="{ 'hidden': set == 1 }">1</span>
        </button>
        <button type="button" class="inline-flex items-center px-2.5 py-1.5 border font-medium rounded shadow-sm hover:bg-peach hover:text-white" x-bind:class="set == 2 ? 'border-transparent bg-rose text-white' : 'border-gray-300 bg-transparent text-gray-700'" x-on:click="set = 2">
          <span class="hidden" x-bind:class="{ 'hidden': set != 2 }">Contorno mandibular</span>
          <span x-bind:class="{ 'hidden': set == 2 }">2</span>
        </button>
        <button type="button" class="inline-flex items-center px-2.5 py-1.5 border font-medium rounded shadow-sm hover:bg-peach hover:text-white" x-bind:class="set == 3 ? 'border-transparent bg-rose text-white' : 'border-gray-300 bg-transparent text-gray-700'" x-on:click="set = 3">
          <span class="hidden" x-bind:class="{ 'hidden': set != 3 }">Lineas de
          expresión </span>
          <span x-bind:class="{ 'hidden': set == 3 }">3</span>
        </button>
      </div>
    </div>
  </div>
</div>

<div class="py-12 bg-gray-50">
  <div class="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="max-w-3xl mb-12">
      <h2 class="font-semibold text-rose uppercase
        tracking-wide mb-2">LIFTING FACIAL SIN CIRUGÍA</h2>
    </div>
    <dl class="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8">
      <div>
        <dt>
          <div class="flex items-center justify-center h-12 w-12 rounded-md bg-rose text-white">
            <i class="fa fa-feather-alt"></i>
          </div>
          <p class="mt-5 text-lg leading-6 font-medium
          text-gray-900">Mínimamente invasivo</p>
        </dt>
        <dd class="mt-2 prose md:prose-lg text-gray-500">
          Estimula la producción de tu propio colágeno, sin agujas o uso de
          sustancias externas. 
        </dd>
      </div>

      <div>
        <dt>
          <div class="flex items-center justify-center h-12 w-12 rounded-md bg-rose text-white">
            <i class="fa fa-walking"></i>
          </div>
          <p class="mt-5 text-lg leading-6 font-medium text-gray-900">No
          downtime</p>
        </dt>
        <dd class="mt-2 prose md:prose-lg text-gray-500">
          El Ultraformer trata las capas profundas y mantiene la superficie de
          la piel integra. Se puede hacer en cualquier época del año.
        </dd>
      </div>

      <div>
        <dt>
          <div class="flex items-center justify-center h-12 w-12 rounded-md bg-rose text-white">
            <i class="fa fa-calendar"></i>
          </div>
          <p class="mt-5 text-lg leading-6 font-medium text-gray-900">Cualquier
          época del año</p>
        </dt>
        <dd class="mt-2 prose md:prose-lg text-gray-500">
          Incorporación inmediata a las actividades habituales, con mínimos
          cuidados pos tratamiento.
        </dd>
      </div>

      <div>
        <dt>
          <div class="flex items-center justify-center h-12 w-12 rounded-md bg-rose text-white">
            <i class="fa fa-shapes"></i>
          </div>
          <p class="mt-5 text-lg leading-6 font-medium text-gray-900">
            Cualquier tipo de piel
          </p>
        </dt>
        <dd class="mt-2 prose md:prose-lg text-gray-500">
          La aplicación del HIFU es seguro en pacientes de piel oscura o
          bronceada.
        </dd>
      </div>
    </dl>
  </div>
</div>

<div class="py-12 bg-coal text-white relative">
  <div class="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="max-w-3xl mb-12">
      <h2 class="font-semibold text-rose uppercase
        tracking-wide">Nuestro diferencial</h2>
    </div>
    <dl class="md:grid md:grid-cols-2 md:px-8">
      <img class="w-64 h-64 mx-auto object-cover object-top shadow-inner rounded-full mb-8" src="/assets/images/vanessa.jpg" alt="">
      <div class="prose md:prose-lg text-white">
        <p>
          En Dermábile todos los protocolos médicos son diseñados y realizados
          por la Dra. Vanessa Martins, además del seguimiento del tratamiento,
          garantizando atención y soporte a los pacientes antes, durante, y
          después de los procedimientos.
        </p>
        <p>
          Juntamente con el Ultraformer, nuestros protocolos multi-tratamientos
          de asociación con bioestimuladores proporcionan resultados superiores,
          con más seguridad y aspectos naturales
        </p>
      </div>
    </dl>
  </div>
</div>

<div class="py-12">
  <div class="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="max-w-3xl mb-12">
      <h2 class="font-semibold text-rose uppercase
        tracking-wide">PREGUNTAS FRECUENTES</h2>
    </div>
    <dl class="max-w-3xl mx-auto px-4 space-y-6 divide-y divide-gray-200">
      <div class="pt-4" x-data="{ open: false }">
        <dt class="prose md:prose-xl">
          <button type="button" class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none" x-on:click="open = !open">
            <span class="font-medium text-gray-900">
              ¿Cómo funciona el Ultraformer?
            </span>
            <span class="ml-6 h-7 flex items-center">
              <svg x-bind:class="open ? '-rotate-180' : 'rotate-0'" class="rotate-0 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
        </dt>
        <dd class="mt-2" x-bind:class="{ hidden: !open }">
          <p class="prose md:prose-lg text-gray-500">
            El Ultraformer libera en la piel la energía conocida como
            ultrasonido focalizado de alta intensidad (HIFU). La energía del
            HIFU  es capaz de penetrar la piel y llegar a capas profundas,
            calentando las fibras de colágeno y produciendo puntos de
            microcoagulación. Eso hace con que estas fibras de colágeno estén
            más tersas y gruesas, produciendo un efecto de mayor firmeza de la
            piel. 
          </p>
        </dd>
      </div>
      <div class="pt-4" x-data="{ open: false }">
        <dt class="prose md:prose-xl">
          <button type="button" class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none" x-on:click="open = !open">
            <span class="font-medium text-gray-900">
              ¿Hay contraindicaciones?
            </span>
            <span class="ml-6 h-7 flex items-center">
              <svg x-bind:class="open ? '-rotate-180' : 'rotate-0'" class="rotate-0 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
        </dt>
        <dd class="mt-2" x-bind:class="{ hidden: !open }">
          <p class="prose md:prose-lg text-gray-500">
            Las contraindicaciones incluyen pacientes embarazadas, con heridas
            abiertas, con prótesis metálicas en la zona a tratar y con uso de
            marcapaso.  
          </p>
        </dd>
      </div>
      <div class="pt-4" x-data="{ open: false }">
        <dt class="prose md:prose-xl">
          <button type="button" class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none" x-on:click="open = !open">
            <span class="font-medium text-gray-900">
              ¿El tratamiento es doloroso?
            </span>
            <span class="ml-6 h-7 flex items-center">
              <svg x-bind:class="open ? '-rotate-180' : 'rotate-0'" class="rotate-0 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
        </dt>
        <dd class="mt-2" x-bind:class="{ hidden: !open }">
          <p class="prose md:prose-lg text-gray-500">
            Se puede experimentar un dolor mínimo o una ligera molestia en el
            área tratado, aunque las sensaciones desaparecen rápidamente
            inmediatamente después del tratamiento.
          </p>
        </dd>
      </div>
      <div class="pt-4" x-data="{ open: false }">
        <dt class="prose md:prose-xl">
          <button type="button" class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none" x-on:click="open = !open">
            <span class="font-medium text-gray-900">
              ¿Existen efectos secundarios?
            </span>
            <span class="ml-6 h-7 flex items-center">
              <svg x-bind:class="open ? '-rotate-180' : 'rotate-0'" class="rotate-0 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
        </dt>
        <dd class="mt-2" x-bind:class="{ hidden: !open }">
          <p class="prose md:prose-lg text-gray-500">
            Se puede experimentar un ligero enrojecimiento durante unas horas,
            así como hormigueo o hinchazón en las áreas tratadas durante unas
            pocas semanas. Excepcionalmente también pueden aparecer moretones y
            adormecimiento que suelen desaparecer de 2 a 4 semanas después del
            tratamiento.
          </p>
        </dd>
      </div>
      <div class="pt-4" x-data="{ open: false }">
        <dt class="prose md:prose-xl">
          <button type="button" class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none" x-on:click="open = !open">
            <span class="font-medium text-gray-900">
              ¿Cuánto tiempo dura la sesión?
            </span>
            <span class="ml-6 h-7 flex items-center">
              <svg x-bind:class="open ? '-rotate-180' : 'rotate-0'" class="rotate-0 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
        </dt>
        <dd class="mt-2" x-bind:class="{ hidden: !open }">
          <p class="prose md:prose-lg text-gray-500">
            El tiempo de la sesión depende de las zonas que vamos a tratar,
            normalmente 30 minutos para pequeñas zonas y aproximadamente 1 hora
            para cara completa.  
          </p>
        </dd>
      </div>
      <div class="pt-4" x-data="{ open: false }">
        <dt class="prose md:prose-xl">
          <button type="button" class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none" x-on:click="open = !open">
            <span class="font-medium text-gray-900">
              ¿Cuántas sesiones son necesarias?
            </span>
            <span class="ml-6 h-7 flex items-center">
              <svg x-bind:class="open ? '-rotate-180' : 'rotate-0'" class="rotate-0 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
        </dt>
        <dd class="mt-2" x-bind:class="{ hidden: !open }">
          <p class="prose md:prose-lg text-gray-500">
            De una manera general, para pacientes con flacidez inicial apenas
            una sesión es necesaria, con sesiones de mantenimiento a cada 12
            meses.  Para flacidez moderada, 2-3 tratamientos son recomendados y
            mantenimientos con intervalos de 6 meses. En la visita le
            explicaremos lo que está mejor indicado  en su caso para maximizar
            los resultados. 
          </p>
        </dd>
      </div>
      <div class="pt-4" x-data="{ open: false }">
        <dt class="prose md:prose-xl">
          <button type="button" class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none" x-on:click="open = !open">
            <span class="font-medium text-gray-900">
              ¿Cuándo empiezo a notar resultados?
            </span>
            <span class="ml-6 h-7 flex items-center">
              <svg x-bind:class="open ? '-rotate-180' : 'rotate-0'" class="rotate-0 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
        </dt>
        <dd class="mt-2" x-bind:class="{ hidden: !open }">
          <p class="prose md:prose-lg text-gray-500">
            Hay un resultado inmediato conocido como efecto flash que  a pesar
            de temporario es la señal de que el proceso de remodelación del
            colágeno se inició. El paciente empieza a notar el resultado después
            de 4 semanas, observando cambios más importantes en contorno facial
            y arrugas. La firmeza de la piel progresivamente mejorará dentro de
            los 2 a 3 meses siguientes. 
          </p>
        </dd>
      </div>
      <div class="pt-4" x-data="{ open: false }">
        <dt class="prose md:prose-xl">
          <button type="button" class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none" x-on:click="open = !open">
            <span class="font-medium text-gray-900">
              ¿Cuál es la diferencia del Ultraformer frente a otros aparatos?
            </span>
            <span class="ml-6 h-7 flex items-center">
              <svg x-bind:class="open ? '-rotate-180' : 'rotate-0'" class="rotate-0 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
        </dt>
        <dd class="mt-2" x-bind:class="{ hidden: !open }">
          <p class="prose md:prose-lg text-gray-500">
            El Ultraformer pertenece a las nuevas generaciones de HIFU, con
            estudios evaluando su eficacia y seguridad.  Distinto de otras
            tecnologías como láser o radiofrecuencia, el aparato actúa más
            profundamente, de tal manera que podemos actuar en todas as capas de
            piel, pero también llegar hasta la superficie del músculo conocida
            como SMAS. También  se observa menos molestia (menos dolor, más
            tolerable) comparado a otras marcas. 
          </p>
        </dd>
      </div>
      <div class="pt-4" x-data="{ open: false }">
        <dt class="prose md:prose-xl">
          <button type="button" class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none" x-on:click="open = !open">
            <span class="font-medium text-gray-900">
              ¿Pacientes con melasma pueden realizar el tratamiento?
            </span>
            <span class="ml-6 h-7 flex items-center">
              <svg x-bind:class="open ? '-rotate-180' : 'rotate-0'" class="rotate-0 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
        </dt>
        <dd class="mt-2" x-bind:class="{ hidden: !open }">
          <p class="prose md:prose-lg text-gray-500">
            Pacientes con melasma pueden realizar el Ultraformer. La energía del
            HIFU no daña la epidermis y los estudios demuestran que además de no
            empeorar el melasma, protocolos especiales vienen siendo
            desarrollados y estudiados   para actuar como coadyuvante en el
            tratamiento de este problema.
          </p>
        </dd>
      </div>
    </dl>
  </div>
</div>

<div class="py-12 bg-gray-50">
  <div class="text-center text-xl mb-8">
    Para saber más, contacta con nosotros
  </div>

  <div class="flex flex-col md:flex-row md:justify-around max-w-lg mx-auto mt-4">
    <a href="https://wa.me/34931071834" class="px-6 py-3 border
             border-transparent text-lg font-medium text-center
      rounded-md shadow-sm text-white bg-green-500 
      focus:outline-none my-2 md:my-0"
      onclick="checkout({ contents: [{ id: 'ultraformer', quantity: 1 }] })"
    >
      <i class="fab fa-whatsapp mr-2"></i> 931 071 835
    </a>
    <a href="tel:931770530" class="px-6 py-3 text-center
      border border-transparent text-lg font-medium rounded-md shadow-sm text-black bg-gray-300 focus:outline-none my-2 md:my-0"
      onclick="checkout({ contents: [{ id: 'ultraformer', quantity: 1 }] })"
    >
      <i class="fal fa-phone-office mr-2"></i> 931 770 530
    </a>
    <button class="px-6 py-3
      border border-transparent text-lg font-medium rounded-md shadow-sm
      text-white bg-rose focus:outline-none my-2 md:my-0"
      onclick="checkout({ contents: [{ id: 'ultraformer', quantity: 1 }] }, true)"
    >
      <i class="fas fa-comments mr-2"></i> Chat
    </button>
  </div>
</div>
