<template>
  <section
    id="contacts"
  >
    <div class="py-16 container mx-auto grid gap-8 grid-cols-1 md:grid-cols-2">
      <div class="grid gap-8 items-start">
        <h2 class="text-xl uppercase">
          Get in touch!
        </h2>
        <contact-form />
      </div>

      <div class="grid gap-8">
        <h2 class="text-xl uppercase">
          Contacts
        </h2>
        <div class="grid gap-4">
          <span>
            <i class="fas fa-envelope" />
            <span class="font-bold">
              {{ $t('email') }}
            </span>
          </span>
          <a :href="`mailto:${email}`">
            {{ email }}
          </a>
        </div>

        <div class="grid gap-4">
          <span>
            <i class="fas fa-mobile" />
            <span class="font-bold">
              {{ $t('phones') }}
            </span>
          </span>
          <a
            v-for="phone in phones"
            :key="phone"
            :href="`tel:${phone}`"
          >
            {{ phone }}
          </a>
        </div>

        <div class="grid gap-4">
          <span>
            <i class="fas fa-map-marker-alt" />
            <span class="font-bold">
              {{ $t('address') }}
            </span>
          </span>
          <a
            :href="addressUrl"
            target="_blank"
            rel="noreferrer noopener"
          >
            {{ address }}
          </a>
        </div>

        <div class="flex">
          <a
            v-for="sn in socialNetworks"
            :key="sn.href"
            class="text-gray-500 mr-4 text-xl"
            :href="sn.href"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i :class="sn.icon" />
          </a>
        </div>
      </div>
    </div>


    <iframe
      class="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.219734870382!2d-9.23211488425285!3d38.75866387959223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ecd0b829baa31%3A0xdcba8661ec07ef9b!2sLast%20Mill!5e0!3m2!1sen!2spt!4v1608739396766!5m2!1sen!2spt"
      width="100%"
      height="300"
      frameborder="0"
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
    />
  </section>
</template>

<script>
import ContactForm from "./ContactForm.vue";

export default {
  components: {
    ContactForm,
  },
  i18n: {
    messageContactForms: {
      us: {
        title: "Contacts",
        phones: "Phones",
        address: "Address",
        email: "Email",
      },
      pt: {
        title: "Contactos",
        phones: "Telefones",
        address: "Morada",
        email: "Email",
      },
    },
  },
  data() {
    return {
      email: "lastmill@lastmill.com",
      phones: ["+351 933 355 095", "+351 915 443 630"],
      address: "Praceta Quinta Nova 9A Loja, 2700-688 Amadora",
      addressUrl: "https://www.google.pt/maps/place/Last+Mill/@38.758667,-9.2321176,17z/data=!3m1!4b1!4m5!3m4!1s0xd1ecd0b829baa31:0xdcba8661ec07ef9b!8m2!3d38.758667!4d-9.2299289",
      socialNetworks: [
        {
          icon: "fab fa-instagram",
          href: "https://www.instagram.com/lastmillcompany/",
        },
        {
          icon: "fab fa-youtube",
          href: "https://www.youtube.com/lastmillcompany",
        },
        {
          icon: "fab fa-linkedin-in",
          href: "https://www.linkedin.com/company/lastmill",
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
section {
  background: #ffffff;
}

.map {
  filter: grayscale() brightness(0.8) invert();
}
</style>
