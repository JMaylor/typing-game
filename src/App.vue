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
	<router-view />
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				items: [
					{
						label: "Play",
						icon: "pi pi-fw pi-desktop",
						to: "/"
					},
					{
						label: "About",
						icon: "pi pi-fw pi-info-circle",
						to: "About"
					}
				]
			};
		}
	};
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
</style>
