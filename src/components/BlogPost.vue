<template>
	<article>
		<h3 :style="{fontSize: textSize + 'rem'}">{{post.title}}</h3>
		<b-button-group size="sm">
			<b-button variant="outline-primary" @click="changeTextSize(0.1)">Size+</b-button>
			<b-button variant="outline-primary" @click="changeTextSize(-0.1)">Size-</b-button>
		</b-button-group>
		<section class="content" v-html="post.content"></section>
	</article>
</template>

<script>
 /* eslint-disable */ 
export default {
	name: 'BlogPost',
	data(){
		return {
			textSize: 1
		}
	},
	props: ['post'],
	methods:{
		changeTextSize(num){
			if((num < 0 && this.textSize > 0.5) || (num > 0 && this.textSize < 3)){
				this.textSize += num
			}
			console.log(this.textSize)
		}
	}
}
</script>

