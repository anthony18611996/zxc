module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/assets/styles/_reset";
          @import "@/assets/styles/style.scss";
        `,
      },
    },
  },
};
