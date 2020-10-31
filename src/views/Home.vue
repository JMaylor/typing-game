<template>
	<div>
		<Button label="New Game" icon="pi pi-external-link" class="p-my-2" />
		<div class="p-grid p-jc-center p-my-2">
			<div class="p-col-6">
				<div class="box p-shadow-2">
					{{ score }}
				</div>
			</div>
		</div>
		<div class="p-grid p-jc-center">
			<div class="p-col-6">
				<div class="box p-shadow-2">
					<div class="p-grid p-jc-center">
						<div
							class="p-col"
							v-for="(word, i) in words.slice(-3)"
							:key="i"
							:class="i == 2 ? 'p-text-bold' : ''"
						>
							{{ word }}
						</div>
						<div
							class="p-col"
							v-for="(word, i) in completedWordsToShow"
							:key="i"
						>
							<span
								:style="
									`color: ${word.entered == word.target ? 'limegreen' : 'red'}`
								"
								>{{ word.entered }}</span
							>
						</div>
					</div>
				</div>
			</div>
		</div>
		<InputText
			type="text"
			v-model="entry"
			@keydown.space="checkWord"
			:disabled="disabled"
		/>
	</div>
</template>

<script>
	const randomWords = require("random-words");
	export default {
		data() {
			return {
				entry: "",
				words: randomWords(1000),
				disabled: false,
				completedWords: []
			};
		},
		computed: {
			completedWordsToShow() {
				if (this.completedWords.length == 0) {
					return [
						{
							target: "",
							entered: ""
						},
						{
							target: "",
							entered: ""
						}
					];
				} else if (this.completedWords.length == 1) {
					return [this.completedWords[0], { target: "", entered: "" }];
				} else {
					return this.completedWords.slice(0, 2);
				}
			},
			score() {
				return this.completedWords.filter(word => word.target == word.entered)
					.length;
			}
		},

		methods: {
			checkWord(e) {
				e.preventDefault();
				if (this.entry == "") {
					return;
				}
				const enteredWord = this.entry;
				this.entry = "";
				const targetWord = this.words.pop();
				this.completedWords.unshift({
					target: targetWord,
					entered: enteredWord
				});
			}
		}
	};
</script>
