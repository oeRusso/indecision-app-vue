<template>
  <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <ChatBubble 
        v-for="message in messages"
        :key="message.id"
        v-bind="message"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import ChatBubble from './ChatBubble.vue';
import type { ChatMessage } from '../interfaces/chat-message.interface';

// Definir las props que recibe este componente
interface Props {
  messages: ChatMessage[];
}

const { messages } = defineProps<Props>();

const chatRef = ref<HTMLDivElement | null>(null);

watch(messages, () => {

  setTimeout(() => {
  console.log("messages cambio")
  chatRef.value?.scrollTo({
    top: chatRef.value.scrollHeight,
    behavior: 'smooth',
  });
}, 100);
});


</script>