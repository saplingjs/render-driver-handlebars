# Handlebars driver for Sapling

<a href="https://github.com/saplingjs/render-driver-handlebars/actions"><img src="https://img.shields.io/github/workflow/status/saplingjs/render-driver-handlebars/CI" alt="GitHub Workflow Status"></a>
<a href="https://app.codecov.io/gh/saplingjs/render-driver-handlebars"><img src="https://img.shields.io/codecov/c/gh/saplingjs/render-driver-handlebars?token=E3NRW4IJW9" alt="Codecov"></a>
<a href="https://www.npmjs.com/package/@sapling/render-driver-handlebars"><img src="https://img.shields.io/npm/v/@sapling/render-driver-handlebars.svg?sanitize=true" alt="Version"></a>
<a href="https://github.com/saplingjs/render-driver-handlebars/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/@sapling/render-driver-handlebars.svg?sanitize=true" alt="License"></a>

This package allows using the [Handlebars](https://handlebarsjs.com/) templating engine with [Sapling](https://github.com/saplingjs/sapling/).


## Installation

### Via the CLI (recommended)

This package can be installed via the [Sapling CLI](https://saplingjs.com/docs/#/cli) via the project creation questionnaire;

    sapling create

Or added to an existing project by re-running the questionnaire;

    sapling edit


### Manually

Alternatively, if you prefer to install it manually, you can install it via npm;

    npm install --save @sapling/render-driver-handlebars

Then, modify your `config.json` to select the Handlebars driver;

    {
        "render": {
            "driver": "Handlebars"
        }
    }


## Usage

Once installed, all views in `views/` will be run through the Handlebars templating engine.  Refer to [their documentation](https://handlebarsjs.com/guide/) for instructions on how to use it.


## Questions & Issues

Bug reports, feature requests and support queries can be filed as [issues on GitHub](https://github.com/saplingjs/render-driver-handlebars/issues).  Please use the templates provided and fill in all the requested details.


## Changelog

Detailed changes for each release are documented in the [release notes](https://github.com/saplingjs/render-driver-handlebars/releases).


## License

[MIT](https://opensource.org/licenses/MIT)
