<template>
  <form
    action="https://formspree.io/f/xzbkwkkl"
    method="POST"
    class="grid gap-8"
    @submit.prevent="submit"
  >
    <div class="grid gap-2">
      <label for="email">{{ $t('yourEmail') }}</label>
      <input
        required
        class="p-4 border rounded outline-none"
        type="email"
        name="email"
      >
    </div>

    <div class="grid gap-2">
      <label for="message">{{ $t('message') }}</label>
      <textarea
        required
        class="p-4 border rounded outline-none"
        type="text"
        name="message"
        rows="5"
      />
    </div>

    <el-button
      type="primary"
      native-type="submit"
      :disabled="submitting"
      :loading="submitting"
    >
      {{ $t('send') }}
    </el-button>
  </form>
</template>

<script>
export default {
  i18n: {
    messages: {
      us: {
        yourEmail: "Your email",
        message: "Message",
        send: "Send",
        error: "There was an error while sending your email. Please try again or try another contact.",
        incompleteForm: "Please fill the form before sending the email.",
        success: "You email was successfully sent.",
      },
      pt: {
        yourEmail: "O seu email",
        message: "Mensagem",
        send: "Enviar",
        error: "Houve um erro a enviar o seu email. Por favor tente outra vez ou use outra forma de contacto.",
        incompleteForm: "Por favor complete o formulário antes de enviar o email.",
        success: "O seu email foi enviado com sucesso.",
      },
    },
  },
  data() {
    return {
      error: false,
      submitting: false,
    };
  },
  methods: {
    submit(e) {
      this.submitting = true;
      this.error = false;

      const form = e.target;
      const data = new FormData(form);
      const xhr = new XMLHttpRequest();

      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");

      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          form.reset();
          this.$message.success(this.$t("success"));
        }
        else {
          this.$message.error(this.$t("error"));
        }
        this.submitting = false;
      };
      xhr.send(data);
    },
  },
};
</script>

<style lang="stylus" scoped>
</style>
