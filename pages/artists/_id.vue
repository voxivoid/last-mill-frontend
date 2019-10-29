<template lang="pug">
page-with-image(:title="artist.name" :imgSrc="artist.photo")
  artist-info(:artist="artist")
</template>

<script>

import PageWithImage from "@/components/PageWithImage.vue";
import ArtistInfo from "@/components/ArtistInfo.vue";
import ReleaseThumbnail from "@/components/ReleaseThumbnail.vue";

import artists from "@/mocks/artists";
import releases from "@/mocks/releases";

export default {
  components: {
    PageWithImage,
    ArtistInfo,
    ReleaseThumbnail,
  },
  data() {
    const artist = artists.find(artist => artist.id === this.$route.params.id);

    artist.releases = releases.filter(release => release.artists.includes(artist.id)).sort((a, b) => new Date(b.date) - new Date(a.date));

    return {
      artist,
    };
  },

};
</script>

<style lang="stylus" scoped>
</style>
