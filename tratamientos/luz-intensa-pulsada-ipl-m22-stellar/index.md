---
layout: default
title: Limpieza facial profunda
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
            Tratamiento de 
            <span class="block text-rose xl:inline">manchas y rojeces</span>
            con luz intensa pulsada 
          </h1>
          <p class="prose md:prose-lg mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Luce una piel uniforme, sana y de apariencia más joven con la
            plataforma más moderna del mercado &mdash; Stellar M22 de Lumenis
          </p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center xl:justify-start">
            <div class="rounded-md shadow">
              <a href="#faq" class="w-full flex items-center justify-center
                px-8 py-3 border border-transparent font-medium rounded-md
                text-white bg-rose md:py-4 md:text-lg md:px-10">
                Saber más
              </a>
            </div>
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
      <h2 class="text-3xl font-extrabold text-coal">
        Actúa en diferentes dianas en la misma sesión
      </h2>
    </div>
    <dl class="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-16">
      <div>
        <div class="mt-2">
          <dt class="text-2xl mb-4 leading-6 font-medium text-rose">
            Manchas
          </dt>
          <dd class="prose md:prose-lg mt-2 text-iron">
            La energía es dirigida contra la melanina de las
            hiperpigmentaciones, aclarando y uniformizando el tono de la
            piel.
          </dd>
        </div>
      </div>

      <div>
        <div class="mt-2">
          <dt class="text-2xl mb-4 leading-6 font-medium text-rose">
            Rojeces
          </dt>
          <dd class="prose md:prose-lg mt-2 text-iron">
            La plataforma tiene filtros específicos para el color rojo, tratando
            las venitas faciales y también rosacea y marcas de acné.
          </dd>
        </div>
      </div>

      <div>
        <div class="mt-2">
          <dt class="text-2xl mb-4 leading-6 font-medium text-rose">
            Textura
          </dt>
          <dd class="prose md:prose-lg mt-2 text-iron">
            Mediante generación de calor es capaz de estimular producción de
            colágeno con mejoría global de la calidad de la piel y poros.
          </dd>
        </div>
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
          Juntamente con el M22, nuestros protocolos multi-tratamientos
          de asociación con peelings proporcionan resultados superiores,
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
        tracking-wide" id="faq">PREGUNTAS FRECUENTES</h2>
    </div>
    <dl class="max-w-3xl mx-auto px-4 space-y-6 divide-y divide-gray-200">
      <div class="pt-4" x-data="{ open: false }">
        <dt class="prose md:prose-xl">
          <button type="button" class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none" x-on:click="open = !open">
            <span class="font-medium text-gray-900">
              Qué es la luz intensa pulsada?
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
              En qué zonas del cuerpo se puede tratar con IPL?
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
              Necesito alguna preparación de la piel para realizar luz pulsada?
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
              Cuántas sesiones son necesarias? Cuánto tardan las sesiones?
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
              Cuáles son los cuidados post tratamiento?
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
      onclick="checkout({ contents: [{ id: 'm22', quantity: 1 }] })"
    >
      <i class="fab fa-whatsapp mr-2"></i> 931 071 835
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
