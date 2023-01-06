<script lang="ts">
  import { onMount } from "svelte";
  import kwesforms from "kwesforms";

  onMount(() => {
    kwesforms.init();
  });
</script>

<form
  name="register"
  method="POST"
  class="kwes-form page w-full grid grid-cols-3 gap-x-10 pb-[340px]"
  action="https://kwesforms.com/api/foreign/forms/eVMJuWO6ocifIXGctq4x"
>
  <input type="hidden" name="form-name" value="Register" />

  <div class="field">
    <label for="firstName">First Name</label>
    <input
      type="text"
      name="firstName"
      id="firstName"
      required
      rules="required"
    />
  </div>

  <div class="field">
    <label for="email">Email Address</label>
    <input
      type="text"
      name="email"
      id="email"
      required
      rules="required|email"
    />
  </div>

  <p class="hidden">
    <label>
      Don’t fill this out if you’re human: <input name="bot-field" />
    </label>
  </p>

  <div class="field flex items-end">
    <button
      type="submit"
      class="mt-auto w-full border-2 border-white hover:border-hotMagenta hover:bg-hotMagenta h-16 font-wide uppercase tracking-widening"
      >Sign me up for <span class="text-hotMagenta">FREE</span></button
    >
  </div>
</form>

<style lang="postcss">
  :global(.kw-alert) {
    grid-column: span 3;
  }

  .field {
    @apply flex-1;
  }

  label {
    @apply block uppercase font-wide mb-4 text-base tracking-widening;
  }

  input[type="text"],
  input[type="email"] {
    @apply px-6 bg-transparent border-2 border-white h-16 w-full focus:border-hotMagenta outline-none text-xl;
  }

  button:hover span {
    @apply text-black;
  }
</style>
