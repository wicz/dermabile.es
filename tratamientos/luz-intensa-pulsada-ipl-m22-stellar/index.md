---
layout: default
title: IPL facial Stellar M22 para manchas y rojeces
---

<div class="relative bg-white overflow-hidden">
  <div class="max-w-7xl mx-auto">
    <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 xl:max-w-2xl lg:w-full lg:pb-20 xl:pb-32">
      <svg class="hidden xl:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <polygon points="50,0 100,0 50,100 0,100" />
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
            Luce una piel 
            <span class="text-rose">uniforme</span>,
            <span class="text-rose">sana</span>
            y de apariencia 
            <span class="text-rose">más joven</span>.
          </h1>
          <p class="prose md:prose-lg mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Elimina las huellas de los años y manchas del sol, y consigue un
            rejuvenecimiento global del rostro, cuello, escote y manos con la
            plataforma más moderna del mercado &mdash; Stellar M22 de Lumenis
          </p>
          <div class="mt-5 sm:mt-8 flex justify-center xl:justify-start gap-4">
              <a href="#faq" class="px-6 py-3 text-lg font-medium rounded-md shadow-sm text-white bg-rose">
                Saber más
              </a>
            <button class="px-6 py-3 text-lg font-medium rounded-md shadow-sm text-white bg-green-500"
              onclick="checkout({ contents: [{ id: 'm22', quantity: 1 }] }, true)"
            >
              Pedir cita
            </button>
          </div>
        </div>
      </main>
    </div>
  </div>
  <div class="hidden xl:flex lg:absolute lg:inset-y-0 lg:right-0
    bg-red-200 w-1/2">
    <img class="place-self-center object-cover mx-auto w-1/2" src="m22.png" alt="">
  </div>
</div>

<div class="py-12 bg-gray-50 relative">
  <div class="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 relative">
    <div class="max-w-3xl mb-12">
      <h2 class="font-semibold text-rose uppercase
        tracking-wide">TECNOLOGÍA VERSÁTIL</h2>
      <h2 class="text-3xl font-extrabold text-coal mt-4">
        Actúa en diferentes dianas en la misma sesión
      </h2>
    </div>

    <div class="lg:flex lg:gap-x-2" x-data="{ img: 1 }">
      <div class="lg:w-2/6 lg:flex-shrink-0 flex flex-col justify-evenly
      xl:my-16">
        <article class="group mb-8">
          <img
            src="hand.webp"
            class="lg:hidden h-80 w-full mb-4"
          />

          <div class="lg:pr-12 relative">
            <i class="fal fa-chevron-right absolute right-0 top-1/2 text-gray-400 mr-4 hidden lg:inline"></i>
            <a href="#img-1" x-on:click="img = 1">
              <div class="absolute inset-x-0 -top-px bottom-0"></div>
              <h3 class="text-2xl mb-2 leading-6 font-medium text-rose"
              x-bind:class="{ 'lg:font-extrabold': img == 1 }">
                Manchas
              </h3>
            </a>

            <p class="prose mt-2 text-iron">
              Combate las manchas de acné, y sobretodo del sol, aclarando y
              uniformizando el tono de la piel.
            </p>
          </div>
        </article>

        <article class="group mb-8">
          <img
            src="face.webp"
            class="lg:hidden h-80 w-full mb-4"
          />

          <div class="lg:pr-12 relative">
            <i class="fal fa-chevron-right absolute right-0 top-1/2 text-gray-400 mr-4 hidden lg:inline"></i>
            <a href="#img-2" x-on:click="img = 2">
              <div class="absolute inset-x-0 -top-px bottom-0"></div>
              <h3 class="text-2xl mb-2 leading-6 font-medium text-rose"
              x-bind:class="{ 'lg:font-extrabold': img == 2 }">
                Rosacea
              </h3>
            </a>

            <p class="prose mt-2 text-iron">
              Suaviza rojeces, principalmente la rosacea, venitas faciales y
              también marcas de acné.
            </p>
          </div>
        </article>

        <article class="group">
          <img
            src="neck.webp"
            class="lg:hidden h-80 w-full mb-4"
          />

          <div class="lg:pr-12 relative">
            <i class="fal fa-chevron-right absolute right-0 top-1/2 text-gray-400 mr-4 hidden lg:inline"></i>
            <a href="#img-3" x-on:click="img = 3">
              <div class="absolute inset-x-0 -top-px bottom-0"></div>
              <h3 class="text-2xl mb-2 leading-6 font-medium text-rose"
              x-bind:class="{ 'lg:font-extrabold': img == 3 }">
                Textura
              </h3>
            </a>

            <p class="prose mt-2 text-iron">
              Estimula la producción de colágeno con mejoría global de la calidad
              de la piel y poros, aparentando una piel más joven.
            </p>
          </div>
        </article>
      </div>

      <div class="hidden lg:block">
        <img
          src="hand.webp"
          class="w-full object-fit"
          style="height:435px;"
          x-show="img == 1"
        />
        <img
          src="face.webp"
          class="w-full object-fit"
          style="height:435px;"
          x-show="img == 2"
        />
        <img
          src="neck.webp"
          class="w-full object-fit"
          style="height:435px;"
          x-show="img == 3"
        />
      </div>
    </div>
  </div>
</div>

<div class="py-12 bg-coal text-white relative">
  <div class="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="max-w-3xl mb-12">
      <h2 class="font-semibold text-rose uppercase
        tracking-wide">Nuestro diferencial</h2>
    </div>
    <dl class="lg:grid lg:grid-cols-2 lg:px-8">
      <img class="w-64 h-64 mx-auto object-cover object-top shadow-inner rounded-full mb-8" src="/assets/images/vanessa.jpg" alt="">
      <div class="prose md:prose-lg text-white">
        <p>
          En Dermábile todos los protocolos médicos son diseñados y realizados
          por la Dra. Vanessa Martins, además del seguimiento del tratamiento,
          garantizando atención y soporte a los pacientes antes, durante, y
          después de los procedimientos.
        </p>
        <p>
          Juntamente con el M22, nuestros protocolos multi-tratamientos
          de asociación con peelings proporcionan resultados superiores,
          con más seguridad y aspectos naturales.
        </p>
      </div>
    </dl>
  </div>
</div>

<div class="py-12">
  <div class="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    <div class="max-w-3xl mb-12">
      <h2 class="font-semibold text-rose uppercase
        tracking-wide" id="faq">PREGUNTAS FRECUENTES</h2>
    </div>
    <dl class="max-w-3xl mx-auto px-4 space-y-6 divide-y divide-gray-200">
      <div class="pt-4" x-data="{ open: false }">
        <dt class="prose md:prose-xl">
          <button type="button" class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none" x-on:click="open = !open">
            <span class="font-medium text-gray-900">
              ¿Qué es la luz intensa pulsada?
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
            La luz pulsada es un tratamiento que permite mejorar gradualmente la
            textura y tonalidad, poros dilatados, rojeces, manchas, lesiones
            pigmentadas, capilares rotos y arrugas finas. Desde la primera
            sesión de IPL es posible obtener una mejoría del tono y una piel más
            luminosa.
          </p>
        </dd>
      </div>
      <div class="pt-4" x-data="{ open: false }">
        <dt class="prose md:prose-xl">
          <button type="button" class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none" x-on:click="open = !open">
            <span class="font-medium text-gray-900">
              ¿En qué zonas del cuerpo se puede tratar con IPL?
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
            Se puede aplicar  en la piel facial, cuello, escote y manos y en
            múltiples zonas a la vez.
          </p>
        </dd>
      </div>
      <div class="pt-4" x-data="{ open: false }">
        <dt class="prose md:prose-xl">
          <button type="button" class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none" x-on:click="open = !open">
            <span class="font-medium text-gray-900">
              ¿Necesito alguna preparación de la piel para realizar luz pulsada?
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
            El paciente no debe estar bronceado, ni tomado sol en las 3 semanas
            anteriores al tratamiento o hecho procedimientos recientemente en la
            zona como puede ser peelings, depilación o laser.
          </p>
        </dd>
      </div>
      <div class="pt-4" x-data="{ open: false }">
        <dt class="prose md:prose-xl">
          <button type="button" class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none" x-on:click="open = !open">
            <span class="font-medium text-gray-900">
              ¿Cuántas sesiones son necesarias? Cuánto tardan las sesiones?
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
            El número de sesiones depende de cada persona, del problema y de la
            zona a tratar. Suelen necesitarse unas 2-4 sesiones cada 30-45 días,
            aunque según el tipo de piel o las necesidades del paciente podrían
            incrementarse el número de estas. Sesiones de mantenimiento 1-2
            veces al año normalmente están indicadas. Los tratamientos faciales
            suelen tardar 20-30 minutos. 
          </p>
        </dd>
      </div>
      <div class="pt-4" x-data="{ open: false }">
        <dt class="prose md:prose-xl">
          <button type="button" class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none" x-on:click="open = !open">
            <span class="font-medium text-gray-900">
              ¿Cuáles son los cuidados post tratamiento?
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
            Se debe limpiar la piel con cuidado con jabón suave, no
            frotar,  usar hidratante y protección solar, además de evitar
            fuentes de calor y cualquier otro procedimiento en la zona hasta
            que la piel se recupere del todo.
          </p>
        </dd>
      </div>
      <div class="pt-4" x-data="{ open: false }">
        <dt class="prose md:prose-xl">
          <button type="button" class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none" x-on:click="open = !open">
            <span class="font-medium text-gray-900">
              ¿Cuáles son los precios del tratamiento?
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
            Los precios del tratamiento varían según el área específica del
            cuerpo que se trate y la cantidad de sesiones necesarias. Las
            sesiones pueden oscilar desde unos cientos de euros hasta valores
            más elevados, dependiendo de los factores mencionados.
          </p>
        </dd>
      </div>
      <div class="pt-4" x-data="{ open: false }">
        <dt class="prose md:prose-xl">
          <button type="button" class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none" x-on:click="open = !open">
            <span class="font-medium text-gray-900">
              ¿Cuál es la diferencia entre IPL y láser?
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
            Ambas tecnologías se utilizan para tratamientos similares, pero la
            elección entre luz pulsada y láser dependerá de la condición
            específica a tratar. 
            La IPL es el tratamiento gold standard para
            fotoenvejecimiento ya que la piel presenta manchas, capilares rotos
            y pérdida de colágeno, pero no produce microcanales como puede
            hacerlo un láser. Para cambios de textura o remoción de verrugas un
            láser estaría más bien indicado.
          </p>
        </dd>
      </div>
      <div class="pt-4" x-data="{ open: false }">
        <dt class="prose md:prose-xl">
          <button type="button" class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none" x-on:click="open = !open">
            <span class="font-medium text-gray-900">
              ¿IPL para melasma?
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
            Aunque la IPL pueda ser una opción en algunos casos de melasma,
            generalmente no se considera un tratamiento de primera línea.
            Existen varias razones para la preferencia por otras opciones como
            respuesta variable, riesgo de empeoramiento, necesidad de múltiples
            sesiones, etc. Es fundamental que las personas con melasma busquen
            la orientación de un dermatólogo para determinar el enfoque de
            tratamiento más adecuado según su situación específica.
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

  <div class="flex flex-col md:flex-row md:justify-around max-w-lg mx-auto mt-4 px-4 md:px-0">
    <a href="https://wa.me/34931770530" class="px-6 py-3 border
             border-transparent text-lg font-medium text-center
      rounded-md shadow-sm text-white bg-green-500 
      focus:outline-none my-2 md:my-0"
      onclick="checkout({ contents: [{ id: 'm22', quantity: 1 }] })"
    >
      <i class="fab fa-whatsapp mr-2"></i> 931 770 530
    </a>
    <a href="tel:931770530" class="px-6 py-3 text-center
      border border-transparent text-lg font-medium rounded-md shadow-sm text-black bg-gray-300 focus:outline-none my-2 md:my-0"
      onclick="checkout({ contents: [{ id: 'm22', quantity: 1 }] })"
    >
      <i class="fal fa-phone-office mr-2"></i> 931 770 530
    </a>
    <button class="px-6 py-3
      border border-transparent text-lg font-medium rounded-md shadow-sm
      text-white bg-rose focus:outline-none my-2 md:my-0"
      onclick="checkout({ contents: [{ id: 'm22', quantity: 1 }] }, true)"
    >
      <i class="fas fa-comments mr-2"></i> Chat
    </button>
  </div>
</div>
