/// <reference types="@sveltejs/vite-plugin-svelte/types" />

declare module '*.svelte' {
  import { SvelteComponentTyped } from 'svelte'
  export default class Component extends SvelteComponentTyped {}
}
