# 120-front

# use node version 12 

# npm install 

# create file as .eslintrc.js and pase below code 

module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
    }
};

# create file .eslinignore and pase below code

src/assets/*
src/fake-db/*
src/layouts/components/vx-tooltip/VxTooltip.vue
tailwind.config.js
tailwind-v0.js

# run npm run serve
