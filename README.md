# HassanAliZiaratiLearningAngularF26

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.1.8.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


## Motorcycle API

This project uses DummyJSON to get sample motorcycle data.

Documentation: https://dummyjson.com/docs/products

Example request: https://dummyjson.com/products/category/motorcycle

The motorcycle list is inside the products array.
Each motorcycle has a numeric id.

Changes are only saved in the app, not on the API.
When you refresh, the changes are lost and the API data loads again.

### Loading data
I used HttpClient to load motorcycles from API.
I chose this because I can store the response in my existing signals and still I keep using my
add, edit, and delete methods.
I used the RxJS map to get the products array from the response.

## Lazy loading
### Before
Initial chunk files  | Names           | Raw size  | Estimated transfer size
main-WWMD4DD6.js     | main            | 394.13 kB | 106.84 kB
chunk-IFGU66OU.js    | -               |   1.10 kB | 489 bytes
styles-5INURTSO.css  | styles          |   0 bytes | 0 bytes

                     | Initial total   | 395.23 kB | 107.33 kB

Lazy chunk files     | Names           |  Raw size | Estimated transfer size
chunk-MBERAJNC.js    | magic-string-es |  21.84 kB | 5.94 kB
chunk-GQVVEUGQ.js    | index           |   9.01 kB | 2.93 kB

### After
Initial chunk files | Names             |  Raw size | Estimated transfer size
chunk-BNxMEct8.js   | -                 | 143.70 kB |                42.80 kB
main-OYAFHSPF.js    | main              | 139.38 kB |                36.57 kB
styles-5INURTSO.css | styles            |   0 bytes |                 0 bytes

                    | Initial total     | 283.08 kB |                79.37 kB

Lazy chunk files    | Names             |  Raw size | Estimated transfer size
chunk-D6650PI2.js   | motorcycle-form   |  48.51 kB |                10.74 kB
chunk-BrXrjyvv.js   | motorcycle-detail |   1.18 kB |               606 bytes
chunk-VpIQBSSz.js   | not-found         | 374 bytes |               374 bytes

The form, detail, and not-found pages now load when needed. I also removed an accidental Vitest import.
The list page stays eager because it is the landing page.
