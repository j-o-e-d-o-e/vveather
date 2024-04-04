const path = require("path");

module.exports = {
    outputDir: path.resolve(__dirname, 'docs/'),
    publicPath: process.env.NODE_ENV === "production" ? "/vveather/" : "/",
    pwa: {
        manifestOptions: {
            id: "/vveather/",
            short_name: 'VVeather',
            name: 'VVeather',
            description: 'Weather app',
            display: 'fullscreen',
            orientation: 'portrait',
            icons: [{
                src: 'img/icons/icon.png',
                type: 'image/png',
                sizes: '192x192'
            }],
            start_url: '/vveather/',
            background_color: '#fff',
            theme_color: '#212529',
        }
    }
}