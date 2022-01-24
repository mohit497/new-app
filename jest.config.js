module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    transform: {
        "^.+\\.vue$": "vue-jest",
      },
      "moduleFileExtensions": [
        "js",
        "json",
        // tell Jest to handle `*.vue` files
        "vue"
      ],
  }