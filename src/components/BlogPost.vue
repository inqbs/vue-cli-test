<template>
	<article :style="{fontSize: postFontSize + 'rem'}">
		<h3>{{post.title}}</h3>
		<button @click="$emit('bigger-text')">Size+</button>
		<section class="content" v-html="post.content"></section>
	</article>
</template>

<script>
 /* eslint-disable */ 
export default {
	name: 'BlogPost',
	props: ['post'],
}
</script>

