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
  class="kwes-form page w-full flex flex-col gap-y-10 lg:gap-y-0 lg:grid lg:grid-cols-3 gap-x-10 pb-[200px] lg:pb-[340px]"
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
      class="mt-auto text-sm xl:text-base w-full border-2 border-white hover:border-hotMagenta hover:bg-hotMagenta h-16 font-wide uppercase tracking-widening"
      >Sign me up for <span class="text-hotMagenta">FREE</span></button
    >
  </div>

  <div class="field col-span-3 pt-6">
    <div class="field flex items-center gap-x-2">
      <input type="checkbox" name="monthly-css" id="monthly-css" checked />
      <label
        for="monthly-css"
        class="!font-sans !text-xl !normal-case !tracking-normal !mb-0 min-h-[37px]"
      >
        Receive
        <a
          href="https://monthlycss.com"
          class="underline font-bold hover:text-hotMagenta"
          target="_blank"
          rel="noopener noreferrer">Monthly CSS</a
        > Challenges (in addition to Monthly JavaScript challenges).
      </label>
    </div>
  </div>
</form>

<style lang="postcss">
  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"] + label {
    @apply pt-1 pl-12 relative cursor-pointer;
    background: url("/images/checkbox--unchecked.svg") left top no-repeat;
    background-size: 37px 37px;
  }

  input[type="checkbox"]:checked + label {
    background: url("/images/checkbox--checked.svg") left top no-repeat;
    background-size: 37px 37px;
  }

  :global(.kw-alert) {
    grid-column: span 3;
  }

  :global(.kw-field-error-message) {
    @apply absolute;
  }

  .field {
    @apply flex-1;
  }

  label {
    @apply block uppercase font-wide mb-1 md:mb-4 text-sm md:text-base tracking-widening;
  }

  input[type="text"],
  input[type="email"] {
    @apply px-6 bg-transparent border-2 border-white h-16 w-full focus:border-hotMagenta outline-none text-xl;
  }

  button:hover span {
    @apply text-black;
  }
</style>
