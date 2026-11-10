<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen flex flex-col font-sans bg-gray-50 text-gray-800">
    <!-- Navbar unificada -->
    <header class="bg-slate-900 text-white shadow-md sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <RouterLink to="/precios" class="flex items-center gap-2 font-bold text-xl tracking-tight text-amber-400">
          <span>Materiales</span><span class="text-white">PE</span>
        </RouterLink>

        <nav class="flex gap-2 sm:gap-4 text-sm font-medium">
          <RouterLink 
            to="/precios" 
            class="px-3 py-1.5 rounded-md hover:bg-slate-800 transition"
            active-class="bg-slate-800 text-amber-400 font-semibold"
          >
            🔍 Precios
          </RouterLink>
          <RouterLink 
            to="/pro" 
            class="px-3 py-1.5 rounded-md hover:bg-slate-800 transition"
            active-class="bg-slate-800 text-amber-400 font-semibold"
          >
            📋 Pro (Maestros)
          </RouterLink>
          <RouterLink 
            to="/ferreterias" 
            class="px-3 py-1.5 rounded-md hover:bg-slate-800 transition"
            active-class="bg-slate-800 text-amber-400 font-semibold"
          >
            🏪 Ferreterías
          </RouterLink>
        </nav>
      </div>
    </header>

    <!-- Contenido dinámico según la ruta activa -->
    <main class="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6">
      <RouterView />
    </main>
  </div>
</template>

<style>
/* Estilos básicos de reseteo si aún no agregamos Tailwind */
body {
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background-color: #f8fafc;
}
header {
  background-color: #0f172a;
  color: white;
  padding: 0 1rem;
}
nav a {
  color: #94a3b8;
  text-decoration: none;
  margin-left: 1rem;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
}
nav a.router-link-active {
  color: #fbbf24;
  background-color: #1e293b;
}
main {
  padding: 1.5rem;
}
</style>