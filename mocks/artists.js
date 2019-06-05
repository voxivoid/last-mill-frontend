const artist = {
  name: "voxivoid",
  works: [{
    name: "Filho prodígio",
    artists: [],
    image: "",
    spotify: "",
    youtube: "",
    itunes: "",
    google: "",
    deezer: "",
    tidal: "",
  }],
  photo: "https://scontent.flis5-1.fna.fbcdn.net/v/t31.0-8/22219587_353489528411308_68284143477296765_o.jpg?_nc_cat=111&_nc_ht=scontent.flis5-1.fna&oh=19932bd106a364f26c7fd4f4f4f56161&oe=5D8D037A",
  bio_pt: "",
  bio_en: "",
  instagram: "https://www.instagram.com/voxivoid",
  facebook: "https://www.facebook.com/voxivoidofficial/",
  youtube: "https://www.youtube.com/c/voxivoid",
};

const artists = new Array(6).fill(null).map(() => ({ ...artist }));

artists[0].name = "Eminem";
artists[0].photo = "https://www.rollingstone.com/wp-content/uploads/2018/09/eminem-kamikaze-review1.jpg";

export default artists;
