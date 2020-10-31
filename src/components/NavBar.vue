<template>
	<Menubar :model="items">
		<template #start>
			<img
				alt="logo"
				src="@/assets/images/logo.svg"
				height="40"
				class="p-mr-2"
			/>
		</template>
	</Menubar>
</template>

<script>
	export default {
		data() {
			return {
				items: [
					{
						label: "Play",
						icon: "pi pi-fw pi-pencil",
            to: '/'
					},
					{
						label: "About",
						icon: "pi pi-fw pi-info-circle",
            to: 'About'
					},
				]
			};
		}
	};
</script>

<style scoped>
</style>