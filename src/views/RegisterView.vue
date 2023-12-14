<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()
const name = ref('')
const email = ref('')
const password = ref('')
const res: any = ref(null)

const onSubmit = async () => {
  if (name.value.length > 0 && email.value.length > 0 && password.value.length > 0) {
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "name": name.value,
      "email": email.value,
      "password": password.value
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    const response = await fetch("http://127.0.0.1:8000/api/auth/register", requestOptions)

    res.value = await response.json()

    name.value = ''
    email.value = ''
    password.value = ''

    if (res.value.status == true) {
      router.push('/')
    }
  }
}

</script>

<template>
  <h1 class="text-center">Register</h1>
  <form>
    <div class="mb-3">
      <label for="name" class="form-label">Full name</label>
      <input name="name" type="text" class="form-control" placeholder="Name Lastname" v-model="name" required>
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email address</label>
      <input name="email" type="email" class="form-control" placeholder="name@example.com" v-model="email">
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input name="password" type="password" class="form-control" placeholder="Insert password..." v-model="password">
    </div>
    <button @click.prevent="onSubmit" class="btn btn-primary mt-2 btbt">Register</button>
    <pre>{{ res }}</pre>
  </form>
</template>

