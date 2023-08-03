<template>
  <div class="root">
    <h2>Create an Account</h2>
    <p>
      <input type="text" placeholder="email" v-model="email" />
    </p>
    <p>
      <input
        type="password"
        placeholder="Password"
        v-model="password.password"
      />
    </p>
    <p>
      <input
        type="password"
        placeholder="Confirm Password"
        v-model="password.confirm"
      />
    </p>
    <button @click="SubmitForm()">Submit</button>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      email: "",
      password: {
        password: "",
        confirm: "",
      },
    };
  },
  validations() {
    return {
      email: { required },
      password: {
        password: { required },
        confirm: { required },
      },
    };
  },
  methods: {
    SubmitForm() {
      console.log(this.v$);
      this.v$.$validate();
      if (!this.v$.error) {
        alert("Form submitted Successfully!");
      } else {
        alert("Form failed Validation");
      }
    },
  },
};
</script>

<style scoped lang="css">
.root {
  width: 400px;
  margin: 0 auto;
  background-color: #fff;
  padding: 30px;
  margin-top: 100px;
  border-radius: 20px;
}

input {
  border: none;
  outline: none;
  border-bottom: 1px solid #ddd;
  font-size: 1em;
  padding: 5px 0;
  margin: 10px 0 5px 0;
  width: 100%;
}

button {
  background-color: #3498db;
  padding: 10px 20px;
  margin-top: 10px;
  border: none;
  color: white;
}
</style>
