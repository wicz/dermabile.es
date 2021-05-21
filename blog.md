---
layout: page
title: Blog
---

<div class="bg-white lg:pb-16">
  <div class="bg-white mx-auto p-4 md:px-24 md:pb-8 lg:py-12 max-w-screen-lg">
    <h2 class="text-2xl text-center md:text-5xl tracking-tight font-quincy">
      Últimos artículos
    </h2>
  </div>

  <div class="relative bg-white px-4 sm:px-6 lg:px-8 z-10">
    <div class="relative bg-white max-w-screen-xl mx-auto">
      <div class="max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none">
        {% for post in site.posts limit: 3 %}
          <div class="flex flex-col rounded-lg shadow overflow-hidden">
            <div class="flex-shrink-0">
              <img class="h-48 w-full object-cover" src="{{ post.image | default: "/assets/images/women-glowing-skin.jpg" }}" alt="">
            </div>
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
              <div class="flex-1">
                <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 capitalize cat-{{ post.category }}">
                  {{ post.category | default: "article" }}
                </span>
                <a href="{{ post.url }}" class="block mt-2">
                  <p class="text-xl font-semibold font-quincy text-gray-900">
                    {{ post.title }}
                  </p>
                  <div class="mt-3 text-base text-gray-500">
                    {{ post.excerpt | strip_html | truncate: 100 }}
                  </div>
                </a>
              </div>
              <div class="mt-6 flex items-center">
                <div class="flex space-x-1 text-sm text-gray-500">
                  <time>
                    {{ post.date | date_to_string }}
                  </time>
                </div>
              </div>
            </div>
          </div>
        {% endfor %}
      </div>
    </div>
  </div>

  <div class="bg-white mx-auto p-4 md:px-24 md:py-12 lg:py-20 max-w-screen-lg relative space-y-12">
    {% for post in site.posts offset: 3 %}
      <div>
        <p class="text-sm text-gray-500">
          <time>{{ post.date | date_to_string }}</time>
        </p>
        <a href="{{ post.url }}" class="mt-2 block">
          <p class="text-2xl font-semibold font-quincy text-gray-900">
            {{ post.title }}
          </p>
          <div class="mt-3 text-lg text-gray-500 antialiased">
            {{ post.excerpt | strip_html | truncate: 150 }}
          </div>
        </a>
        <div class="mt-3">
          <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 capitalize cat-{{ post.category }}">
            {{ post.category | default: "article" }}
          </span>
        </div>
      </div>
    {% endfor %}
  </div>
</div>
