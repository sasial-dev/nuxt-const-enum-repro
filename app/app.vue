<template>
	<div></div>
</template>

<script setup lang="ts">
// import { Foo } from '#imports';

function test(a: string, b: Foo.Bar): void;
function test(a: number, b: Foo.Baz): void;
function test(a: string | number, b: Foo): void {
	console.log(Foo.Bar);
}
</script>
