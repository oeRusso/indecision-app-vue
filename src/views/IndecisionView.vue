<!-- Fuente: https://tailwindcomponents.com/component/chat-layout -->
<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>

    <!-- messages -->
    <ChatMessage :messages="messages" />

    <!--Message Box  -->
    <MessageBox @send-message="onMessage($event)"/>
  </div>
</template>

<script setup lang="ts">
// Renombramos la importación del componente para evitar conflictos
import ChatMessage from '@/chat/ChatMessage.vue';
import MessageBox from '@/chat/MessageBox.vue';
import { useChat } from '@/composables/useChat';

const { messages, onMessage } = useChat();


</script>