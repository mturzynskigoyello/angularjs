require.config({
    baseUrl: "App",
    shim: {
        underscore: {
            exports: "_"
        },
        angular: {
            exports: "angular",
            deps: ["jquery"]
        },
        bootstrap: {
            deps: ["jquery"]
        }
    },
    waitSeconds: 0,
    paths: {
        angular: "https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.3/angular.min",
        jquery: "https://code.jquery.com/jquery-2.1.1.min",
        bootstrap: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min",
        underscore: "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.7.0/underscore-min"
    },
    packages: []
});
//# sourceMappingURL=Config.js.map
