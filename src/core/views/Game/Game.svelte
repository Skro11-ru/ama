
	<button on:click={update}>Обновить</button>
	<button on:click={()=>{
		if(lang==='ru'){
			lang='en'
		}else{
			lang='ru'
		}
	}}>{lang}</button>
	<button on:click={()=>{
		mode=isLearn?'guess':'learn'

	}}>mode: {mode}</button>
	{searched.titleRu}
	<div class="logos" class:learn={mode==='learn'}>
		{#each array as brand}
			<div
				class="logo"
				class:yes={brand.title === searched.title &&
					brand.title === selected?.title}
				class:no={brand.title === selected?.title}
			>
				<button class="btn" on:click={() => onClick(brand)}>
					<img src={brand.logo} alt={brand.title.ru} title={brand.title.ru}  />
				</button>

			</div>
		{/each}
	</div>

<script lang="ts">
	import { onMount } from "svelte";

	import { brands } from "../../models/brands";
	const LANG = {
		ru: "ru-RU",
		en: "en-US",
	} as const;

	const getRandomItem = (arr) => {
		const randomIndex =
				crypto.getRandomValues(new Uint32Array(1))[0] % arr.length;
		return arr[randomIndex];
	};
	let count = 1;

	$: array = isLearn&&count
			? brands
			: Array.from(new Array(4), () => getRandomItem(brands.filter((i) => i.show)));
	
	$:{
		console.log(`########################## Game ##### ${55}\n`, array);
		
	}
	$: searched = count ? getRandomItem(array) : [];
	let selected = undefined;
	let lang: "ru" | "en" = "ru";
	$: currentLang = LANG[lang];

	let mode: "guess" | "learn" = "guess";
	$: isLearn = mode === "learn";

	const say = (text) => {
		if ("speechSynthesis" in window) {
			const utterance = new SpeechSynthesisUtterance(text);

			// Настраиваем голос и параметры
			utterance.lang = currentLang;
			utterance.pitch = 1; // Высота голоса (0 до 2)
			utterance.rate = 1; // Скорость речи (0.1 до 10)
			utterance.volume = 1; // Громкость (0 до 1)

			const voices = window.speechSynthesis.getVoices();
			// utterance.voice = voices.find(voice => voice.name === 'Aaron'); // Пример выбора русского голоса
			const allVoices = voices.filter((voice) => voice.lang === currentLang);
			console.log("allRu", { allVoices });
			window.speechSynthesis.speak(utterance);
		} else {
			alert("Ваш браузер не поддерживает Web Speech API или текст не введен.");
		}
	};

	$: count ? say(`${searched.title.en}`) : undefined;
	const update = () => {
		count += 1;
	};

	const onClick = (logo) => {
		if (isLearn) {
			say(logo.title[lang]);
			return;
		}

		console.log("click", logo);
		selected = { ...logo };

		setTimeout(() => {
			count += 1;
			selected = undefined;
		}, 1000);
	};

	onMount(() => {
		// say("Hello world");
	});
</script>


<style lang="scss">
	.logos {
		display: grid;
		grid-template-columns: repeat(2,1fr);
		gap: 10px;

		.btn {
			background: none;
			padding: 0;
			border: none;
			all: unset;
			cursor: pointer;
			width: 100%;
			height: 100%;
			img{
				width: 100%;
				height: 100%;
			}
		}

		&.learn{
			grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
		}
	}
	.logo {
		aspect-ratio: 1;
		background: white;
		border-radius: 10px;
		&.no {
			background-color: red;
		}

		&.yes {
			background-color: greenyellow;
		}
	}

	.logo:hover {
		filter: drop-shadow(0 0 1em #646cffaa);
	}

	.read-the-docs {
		color: #888;
	}
</style>
