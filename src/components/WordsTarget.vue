<template>
	<div class="p-grid p-jc-center">
		<div class="p-col-6">
			<div class="box p-shadow-6"><span v-for="(word, i) in words" :key="i">{{ word }}<br></span></div>
		</div>
	</div>
</template>

<script>
  const randomWords = require('random-words')
	export default {
    data() {
      return {
        words: randomWords(5)
      }
    }
  };
</script>

<style scoped>
</style>