exports.handler = async (event) => {

const tiles = [
    {
        "id": 19,
        "slug": "info",
        "content": {
            "rendered": "",
            "protected": false
        },
        "havesvg": "1",
        "order": "0000",
        "cssclass": "info",
        "svgcode": "<svg preserveAspectRatio=\"xMinYMin meet\" viewBox=\"0 0 24 24\">\r\n    <path d=\"M13.5,4A1.5,1.5 0 0,0 12,5.5A1.5,1.5 0 0,0 13.5,7A1.5,1.5 0 0,0 15,5.5A1.5,1.5 0 0,0 13.5,4M13.14,8.77C11.95,8.87 8.7,11.46 8.7,11.46C8.5,11.61 8.56,11.6 8.72,11.88C8.88,12.15 8.86,12.17 9.05,12.04C9.25,11.91 9.58,11.7 10.13,11.36C12.25,10 10.47,13.14 9.56,18.43C9.2,21.05 11.56,19.7 12.17,19.3C12.77,18.91 14.38,17.8 14.54,17.69C14.76,17.54 14.6,17.42 14.43,17.17C14.31,17 14.19,17.12 14.19,17.12C13.54,17.55 12.35,18.45 12.19,17.88C12,17.31 13.22,13.4 13.89,10.71C14,10.07 14.3,8.67 13.14,8.77Z\" />\r\n</svg>",
        "goexternal": "",
        "externallink": "",
        "itemthumb": "",
        "itemshiftedthumbnail": "",
        "title": {
            "rendered": "INFO"
        }
    },
    {
        "id": 70,
        "slug": "linkedin",
        "content": {
            "rendered": "",
            "protected": false
        },
        "havesvg": "1",
        "order": "0002",
        "cssclass": "linkedin",
        "svgcode": "<svg preserveAspectRatio=\"xMinYMin meet\" viewBox=\"0 0 24 24\">\r\n    <path d=\"M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z\" />\r\n</svg>",
        "goexternal": "1",
        "externallink": "https://www.linkedin.com/in/ahmedislamz",
        "itemthumb": "",
        "itemshiftedthumbnail": "",
        "title": {
            "rendered": "Linkedin"
        }
    },
    {
        "id": 18,
        "slug": "logo",
        "content": {
            "rendered": "",
            "protected": false
        },
        "havesvg": "1",
        "order": "0004",
        "cssclass": "logo",
        "svgcode": "<svg preserveAspectRatio=\"xMinYMin meet\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\"  height=\"324.289px\" viewBox=\"0 0 314.75 324.289\">\r\n<g class=\"slamdesignz\">\r\n\t<path  d=\"M0.88,311.692c1.56,0.96,3.839,1.76,6.239,1.76c3.56,0,5.639-1.88,5.639-4.6c0-2.52-1.439-3.959-5.079-5.359   c-4.399-1.56-7.119-3.839-7.119-7.639c0-4.199,3.479-7.319,8.718-7.319c2.76,0,4.759,0.64,5.959,1.32l-0.959,2.839   c-0.88-0.479-2.68-1.28-5.119-1.28c-3.68,0-5.08,2.2-5.08,4.04c0,2.52,1.64,3.759,5.359,5.2c4.559,1.76,6.879,3.959,6.879,7.918   c0,4.16-3.08,7.759-9.438,7.759c-2.6,0-5.439-0.76-6.879-1.72L0.88,311.692z\"/>\r\n\t<path d=\"M29.439,287.535h3.52v28.396h-3.52V287.535z\"/>\r\n\t<path d=\"M58.077,315.931l-0.28-2.439h-0.12c-1.08,1.52-3.16,2.879-5.919,2.879c-3.919,0-5.919-2.76-5.919-5.559   c0-4.68,4.159-7.239,11.638-7.199v-0.399c0-1.6-0.44-4.479-4.399-4.479c-1.8,0-3.68,0.56-5.039,1.439l-0.8-2.32   c1.6-1.04,3.919-1.72,6.359-1.72c5.919,0,7.358,4.04,7.358,7.919v7.238c0,1.68,0.08,3.319,0.32,4.64H58.077z M57.557,306.052   c-3.839-0.08-8.199,0.601-8.199,4.359c0,2.28,1.52,3.359,3.32,3.359c2.52,0,4.119-1.6,4.679-3.239c0.12-0.359,0.2-0.76,0.2-1.12   V306.052z\"/>\r\n\t<path d=\"M75.118,301.813c0-1.999-0.04-3.639-0.16-5.239h3.079l0.16,3.12h0.12c1.08-1.84,2.879-3.56,6.079-3.56   c2.64,0,4.64,1.6,5.479,3.879h0.08c0.6-1.079,1.36-1.919,2.16-2.52c1.16-0.88,2.44-1.36,4.279-1.36c2.56,0,6.359,1.68,6.359,8.399   v11.398h-3.439v-10.958c0-3.72-1.359-5.959-4.199-5.959c-2,0-3.559,1.479-4.159,3.199c-0.16,0.479-0.28,1.12-0.28,1.76v11.958   h-3.439v-11.599c0-3.079-1.36-5.318-4.04-5.318c-2.2,0-3.799,1.76-4.359,3.519c-0.2,0.521-0.28,1.12-0.28,1.72v11.679h-3.439   V301.813z\"/>\r\n\t<path d=\"M134.037,289.335c2.12-0.32,4.639-0.56,7.399-0.56c4.999,0,8.558,1.16,10.918,3.359c2.399,2.2,3.799,5.319,3.799,9.678   c0,4.399-1.36,7.999-3.879,10.479c-2.52,2.52-6.679,3.879-11.918,3.879c-2.479,0-4.559-0.119-6.319-0.319V289.335z    M137.516,313.171c0.88,0.16,2.16,0.2,3.519,0.2c7.439,0,11.479-4.159,11.479-11.438c0.04-6.359-3.56-10.398-10.918-10.398   c-1.8,0-3.159,0.16-4.079,0.36V313.171z\"/>\r\n\t<path d=\"M170.996,306.892c0.08,4.76,3.119,6.719,6.639,6.719c2.52,0,4.04-0.439,5.359-0.999l0.601,2.52   c-1.24,0.56-3.36,1.199-6.439,1.199c-5.959,0-9.519-3.919-9.519-9.758s3.439-10.439,9.079-10.439c6.319,0,7.999,5.559,7.999,9.119   c0,0.72-0.08,1.28-0.12,1.64H170.996z M181.313,304.372c0.04-2.239-0.919-5.719-4.879-5.719c-3.56,0-5.119,3.279-5.399,5.719   H181.313z\"/>\r\n\t<path d=\"M197.075,312.331c1.04,0.68,2.88,1.399,4.64,1.399c2.56,0,3.759-1.279,3.759-2.879c0-1.68-1-2.6-3.599-3.56   c-3.479-1.24-5.119-3.159-5.119-5.479c0-3.119,2.52-5.679,6.679-5.679c1.959,0,3.679,0.56,4.759,1.2l-0.88,2.56   c-0.76-0.48-2.159-1.12-3.959-1.12c-2.08,0-3.239,1.199-3.239,2.64c0,1.6,1.159,2.319,3.679,3.279   c3.359,1.279,5.079,2.959,5.079,5.839c0,3.399-2.64,5.799-7.238,5.799c-2.12,0-4.079-0.52-5.439-1.319L197.075,312.331z\"/>\r\n\t<path d=\"M225.794,291.135c0.04,1.2-0.84,2.16-2.239,2.16c-1.24,0-2.12-0.96-2.12-2.16c0-1.24,0.92-2.2,2.2-2.2   C224.954,288.935,225.794,289.895,225.794,291.135z M221.875,315.931v-19.357h3.519v19.357H221.875z\"/>\r\n\t<path d=\"M256.392,296.573c-0.08,1.4-0.16,2.96-0.16,5.319v11.238c0,4.439-0.88,7.159-2.76,8.839   c-1.879,1.76-4.599,2.319-7.038,2.319c-2.32,0-4.88-0.56-6.439-1.6l0.88-2.68c1.28,0.8,3.279,1.52,5.68,1.52   c3.599,0,6.238-1.88,6.238-6.759v-2.159h-0.08c-1.079,1.8-3.159,3.239-6.158,3.239c-4.8,0-8.239-4.079-8.239-9.438   c0-6.559,4.279-10.279,8.719-10.279c3.359,0,5.199,1.76,6.039,3.36h0.08l0.16-2.92H256.392z M252.752,304.212   c0-0.6-0.04-1.119-0.199-1.6c-0.641-2.039-2.36-3.719-4.92-3.719c-3.359,0-5.759,2.839-5.759,7.318c0,3.8,1.92,6.959,5.719,6.959   c2.16,0,4.12-1.359,4.88-3.6c0.199-0.6,0.279-1.279,0.279-1.88V304.212z\"/>\r\n\t<path d=\"M270.554,301.813c0-1.999-0.04-3.639-0.16-5.239h3.119l0.2,3.2h0.08c0.96-1.84,3.199-3.64,6.398-3.64   c2.68,0,6.839,1.6,6.839,8.239v11.559h-3.52v-11.158c0-3.12-1.159-5.719-4.479-5.719c-2.32,0-4.12,1.64-4.72,3.599   c-0.16,0.44-0.24,1.04-0.24,1.64v11.639h-3.519V301.813z\"/>\r\n\t<path d=\"M299.032,313.891l8.759-11.397c0.84-1.04,1.64-1.96,2.52-3v-0.08h-10.479v-2.84h14.758l-0.04,2.2l-8.639,11.238   c-0.8,1.079-1.6,2.039-2.479,3.039v0.08h11.318v2.8h-15.718V313.891z\"/>\r\n</g>\r\n<g>\r\n\t<path d=\"M97.907,2.341c0.033,0.41,2.156,0.275-0.96,1.277c-4.91,1.501-9.421,2.991-13.82,5.092     c-4.372,2.101-8.668,4.859-12.431,8.944c-0.026,0.335-0.052,0.684-0.078,1.028c-1.55,1.449-2.912,3.089-4.31,4.733     c-1.286,1.712-2.605,3.446-3.702,5.307l-0.862,1.384c-0.276,0.467-0.514,0.947-0.772,1.423c-0.498,0.956-1.03,1.914-1.494,2.89     c-0.865,1.964-1.783,3.951-2.449,5.983c-2.343,7.572-3.359,15.164-3.607,22.53l-0.061,5.692l0.164,5.038     c0.012,0.8,0.094,1.773,0.157,2.692l0.202,2.78c0.105,1.874,0.376,3.637,0.575,5.448c0.198-0.402,0.396-0.601,0.634,0.818     c0.455,2.98,0.964,6.552,1.775,10.465c0.357,1.956,0.941,3.992,1.433,6.08c0.318,1.039,0.64,2.091,0.964,3.152     c0.166,0.53,0.332,1.062,0.498,1.595l0.599,1.591c0.545,1.235,0.996,2.486,1.617,3.674c0.566,0.89,0.886,1.035,1.084,1.128     c1.674,3.756,3.579,6.973,5.453,9.887c3.392,4.61,7.502,8.771,12.103,12.205c4.598,3.445,9.653,6.159,14.85,8.195     c10.437,4.084,21.276,5.551,31.876,5.912c10.632,0.348,21.153-0.426,31.651-1.519c10.495-1.076,21.005-2.604,31.533-3.429     c4.429-0.456,8.862-0.807,13.073-0.597c2.117,0.076,4.141,0.365,6.019,0.835c1.87,0.479,3.556,1.207,4.8,2.242     c0.932,0.765,1.586,1.766,2.084,2.935c0.106,0.305,0.213,0.613,0.321,0.922c0.064,0.337,0.128,0.677,0.192,1.018     c0.086,0.332,0.112,0.696,0.121,1.07l0.031,0.554l0.017,0.278l0.009,0.139l0.005,0.07l0.001,0.017     c0.006-0.268,0.001-0.068,0.003-0.125l-0.001,0.011l-0.002,0.042l-0.066,1.351l-0.149,0.997     c-0.141,0.705-0.324,1.466-0.586,2.188c-0.512,1.459-1.259,2.888-2.163,4.251c-1.823,2.728-4.264,5.173-6.835,7.312     c-2.579,2.143-5.284,4.016-7.886,5.643c0.702,0.223-0.285,1.495-2.205,3.16c-1.912,1.67-4.76,3.71-7.586,5.577     c-5.642,3.74-11.151,6.861-7.808,6.741c-3.957,1.667-8.975,3.548-13.075,5.054c-4.1,1.504-7.277,2.66-7.492,3.074     c-0.654,1.225-2.377,2.912-6.705,5.17c-4.339,2.232-11.247,5.122-22.497,8.084c-4.432,1.059-10.151,1.968-15.299,2.499     c-2.575,0.27-5.01,0.45-7.085,0.554c-2.205,0.085-3.908,0.151-4.845,0.187c-1.229,0.109-1.133,0.277-0.374,0.476     c0.302,0.099,1.138,0.207,1.904,0.295c0.786,0.085,1.647,0.149,2.48,0.197c3.313,0.18,6.41,0.151,3.769,0.74     c4.53-0.376,8.784-0.995,13.011-1.702c4.214-0.717,8.362-1.543,12.472-2.458c8.219-1.833,16.298-3.996,24.289-6.507     c7.99-2.511,15.888-5.364,23.688-8.733c7.795-3.392,15.507-7.242,23.004-12.308c3.739-2.564,7.434-5.444,10.934-9.029     c1.741-1.815,3.432-3.813,4.978-6.105c1.54-2.29,2.941-4.894,3.942-7.86c0.232-0.758,0.498-1.48,0.664-2.28l0.266-1.181     c0.042-0.206,0.086-0.375,0.124-0.611l0.107-0.73c0.067-0.488,0.126-0.977,0.177-1.466l0.036-0.367l0.017-0.183l0.004-0.097     l0.016-0.378l0.031-0.756l0.008-0.189l0.002-0.047c0.023-0.961,0.005-0.31,0.009-0.544l-0.006-0.151l-0.027-0.605     c-0.029-3.064-0.77-6.851-2.64-10.365c-0.236-0.439-0.464-0.881-0.726-1.304c-0.283-0.415-0.575-0.826-0.874-1.231     s-0.606-0.805-0.918-1.198c-0.324-0.372-0.67-0.714-1.014-1.064c-0.692-0.699-1.405-1.383-2.143-1.905     c-0.731-0.538-1.501-1.151-2.23-1.537c-3.02-1.837-5.877-2.735-8.521-3.388c-5.327-1.272-9.947-1.423-14.443-1.49     c-4.475-0.027-8.754,0.19-12.963,0.465c-8.404,0.568-16.54,1.373-24.619,1.95c-2.734,0.315-7.436,0.778-13.554,1.093     c-6.11,0.297-13.661,0.445-21.913-0.317c-8.221-0.774-17.188-2.578-25.176-6.643c-8.019-3.995-14.682-10.558-19.019-19.229     c-2.17-4.325-3.796-9.102-4.962-14.078c-1.161-4.955-1.811-10.238-2.176-15.297c-0.07-1.278-0.177-2.459-0.223-3.801     c-0.029-1.384-0.057-2.762-0.086-4.132l-0.021-1.026l-0.005-0.256c-0.002-0.179,0.001,0.171,0.002,0.114l0.001-0.059l0.003-0.118     l0.011-0.47c0.014-0.626,0.028-1.25,0.042-1.873c0.02-1.247,0.042-2.485,0.154-3.689c0.104-1.205,0.131-2.427,0.29-3.594     c0.146-1.17,0.291-2.332,0.435-3.484c0.206-1.124,0.41-2.239,0.612-3.344c0.219-1.096,0.519-2.139,0.764-3.196     c1.115-4.159,2.644-7.87,4.496-11.012c1.848-3.147,4.011-5.725,6.299-7.796c4.57-4.161,9.627-6.293,13.497-7.503l1.405-0.472     c0.475-0.145,0.964-0.263,1.445-0.399c8.743-2.307,19.624-2.478,30.188-1.469c10.597,1.005,20.925,3.125,29.414,5.007     c7.827,1.613,15.817,3.514,23.716,5.755c-3.438-1.678-6.648-3.186-9.435-4.508c7.914,2.661,15.687,5.741,18.825,6.558     c8.454,2.881,10.422,3.251,9.605,2.211c-0.821-1.022-4.487-3.312-7.412-5.33c-4.389-2.478,2.303-0.991-4.758-4.492     c5.272,2.07,7.896,3.152,13.117,5.407c0.429-0.176-3.624-1.818-7.311-3.263c-3.684-1.451-6.999-2.723-4.965-2.519     c5.011,2.199,10.829,4.152,16.016,6.473c-0.719-0.806-5.207-2.847-9.415-4.639c-4.205-1.801-8.128-3.363-7.565-3.613     c1.479,0.445,5.107,2.173,8.509,3.769c3.406,1.589,6.589,3.053,7.312,2.771c0.289-0.117-4.94-2.402-7.584-3.477     c8.196,3.159,14.525,5.706,17.091,6.401c2.553,0.722,1.387-0.525-5.74-4.358c5.137,2.303,12.047,6.034,17.495,8.715     c-0.003-0.009-0.023-0.024-0.031-0.036c-2.703-1.465-7.156-3.878-9.641-5.054c3.039,1.451,6.051,2.934,9.091,4.522     c-0.413-0.386-0.887-0.797-1.392-1.22c-2.208-1.264-4.44-2.467-6.812-3.608c2.015,0.969,4.028,1.956,6.047,2.979     c-1.353-1.073-2.944-2.231-4.726-3.433c-6.923-4.079-13.578-8.048-17.592-9.724c-8.058-3.464-16.257-6.666-24.629-9.518     c-8.369-2.86-16.911-5.373-25.669-7.376c-8.753-2.007-17.742-3.473-26.992-4.073C117.178-0.309,107.594,0.015,97.907,2.341z\"/>\r\n\r\n\t<path d=\"M86.588,173.7c0.404,0.072,0.809-2.028,0.994,1.237c0.384,10.276-0.972,18.533-0.587,28.816     c0.212,0.241,0.434,0.492,0.652,0.741c-0.296,7.705-0.604,15.722-0.919,23.927l-0.349,9.08l9.628,1.007     c0.292,0.031,0.61,0.064,0.928,0.097c4.226,0.253,8.226,0.325,12.286,0.329c4.042-0.008,8.066-0.106,12.081-0.295     c8.029-0.377,16.021-1.116,23.967-2.228c-0.444-0.182-0.666-0.374,0.903-0.667c6.577-1.01,15.741-2.3,25.137-4.545     c1.375-0.393,2.752-0.755,4.096-1.175c1.024-0.426,1.235-0.721,1.369-0.904c4.205-1.161,7.942-2.253,11.378-3.406     c11.14-4.247,22.029-9.733,31.961-17.016c9.914-7.248,18.852-16.359,25.48-27.151c6.652-10.773,10.865-23.042,12.681-35.589     c0.936-6.278,1.279-12.636,1.151-18.989l-0.01-1.193l-0.003-0.298l-0.004-0.255l-0.007-0.143l-0.03-0.573l-0.119-2.296     l-0.12-2.302l-0.226-2.444c-0.151-1.63-0.289-3.268-0.542-4.855c-0.238-1.599-0.41-3.204-0.744-4.799     c-2.146-10.793-6.17-21.174-11.39-30.293c-1.875-3.416-4.168-6.898-6.689-10.364c-2.541-3.456-5.45-6.787-8.523-9.93     c-3.069-3.152-6.385-6.032-9.725-8.615c-3.332-2.597-6.705-4.882-9.939-6.814c0.389,1.564-7.349-2.149-14.838-4.432     c-7.468-2.396-14.484-3.705-11.531-1.482c-4.513-1.648-10.279-3.412-15.062-4.559c-4.777-1.169-8.546-1.766-8.973-1.528     c-1.294,0.739-3.853,1.263-9.2,1.336c-5.351,0.114-13.493-0.269-26.073-0.42c-4.916-0.151-11.147-0.463-16.578-0.536     c-2.714-0.04-5.225-0.029-7.257,0.038c-2.011,0.064-3.633,0.192-4.306,0.344c-1.391,0.274-1.26,0.428-0.367,0.522     c0.777,0.098,2.281,0.177,3.863,0.277c3.139,0.204,6.3,0.497,3.615,0.873c9.009-0.156,18.08,0.19,27.026,0.95     c8.952,0.766,17.812,1.978,26.483,3.723c17.305,3.494,34.044,9.089,48.312,18.003c7.137,4.426,13.528,9.761,18.923,15.885     c5.43,6.105,9.644,13.149,12.767,20.741c1.523,3.818,2.727,7.791,3.692,11.858c0.957,4.07,1.535,8.286,1.97,12.516l0.208,3.062     c0.031,0.528,0.086,0.982,0.099,1.572l0.041,1.766l0.068,3.296l-0.067,3.25c-0.002,1.088-0.066,2.165-0.146,3.239     c-0.077,1.075-0.123,2.157-0.222,3.229c-0.249,2.131-0.431,4.281-0.815,6.382c-0.066,0.554-0.141,1.185-0.224,1.888     c-0.094,0.701-0.251,1.459-0.395,2.294c-0.163,0.829-0.285,1.745-0.518,2.694c-0.226,0.951-0.468,1.967-0.723,3.043     c-1.129,4.265-2.852,9.393-5.613,14.871c-2.817,5.437-6.633,11.248-11.808,16.727c-2.582,2.74-5.462,5.421-8.638,7.972     c-3.185,2.542-6.671,4.939-10.393,7.179c-7.446,4.48-15.874,8.262-24.804,11.272c-8.932,3.016-18.356,5.276-27.834,6.889     c-9.481,1.614-19.02,2.586-28.252,3.063c-4.616,0.226-9.157,0.344-13.572,0.326c-2.207-0.006-4.383-0.041-6.515-0.109     c-1.06-0.043-2.112-0.086-3.155-0.128c-1.01-0.049-2.116-0.115-2.949-0.18c2.903,3.156,5.553,6.036,8.202,8.917     c0.011-21.324,0.068-38.96,0.174-49.466c-0.01-1.361-0.02-2.715-0.029-4.068c0.127-24.44-0.049-54.122-0.926-74.807     c-0.543-9.486-1.203-19.132-1.84-28.737c-0.38,4.466-0.76,8.602-1.135,12.187c0.049-9.778,0.1-19.551-0.317-23.306     c-0.986-20.816-2.14-9.024-3.71-1.016c-0.688,5.759-1.741-2.028-2.441,6.99c0.034-6.5,0.05-9.757,0.084-16.287     c-0.654-0.747,0.333,20.063-0.736,15.541c0.25-6.266-0.15-13.286-0.116-19.792c-0.886,2.253-0.335,22.55-1.204,21.549     c-0.202-3.514,1.186-18.293,0.1-19.551c-0.218-0.249-0.25,6.265-0.268,9.522c-0.334-20.048-1.37-31.093-2.557-12.794     c0.033-6.353,0.494-15.335,0.345-22.054c-0.007,0.007-0.011,0.036-0.018,0.051c-0.036,3.353-0.262,9.135-0.276,12.231     c0.02-3.806,0.039-7.627,0.059-11.439c-0.153,0.6-0.304,1.28-0.454,1.998c-0.134,2.847-0.241,5.708-0.258,8.681     c0.013-2.526,0.026-5.058,0.039-7.599c-0.354,1.896-0.696,4.077-1.017,6.471c-0.702,9.024-1.73,17.669-1.756,22.552     C87.025,94.706,86.661,134.305,86.588,173.7z\"/>\r\n</g>\r\n\r\n</svg>",
        "goexternal": "",
        "externallink": "",
        "itemthumb": "",
        "itemshiftedthumbnail": "",
        "title": {
            "rendered": "LOGO"
        }
    },
    {
        "id": 20,
        "slug": "ux-engineer",
        "content": {
            "rendered": "<p><span style=\"color: #095615;\"><span class=\"dataTxtShift\">UX</span></br>Engineer</span></p>\n",
            "protected": false
        },
        "havesvg": "",
        "order": "0005",
        "cssclass": "",
        "svgcode": "",
        "goexternal": "",
        "externallink": "",
        "itemthumb": "http://www.slamdesignz.com/wp-content/uploads/2016/11/ux.jpg",
        "itemshiftedthumbnail": "",
        "wpcf-date-cover": [
            "http://www.slamdesignz.com/wp-content/uploads/2016/11/uxCover.jpg"
        ],
        "title": {
            "rendered": "Ux Engineer"
        }
    },
    {
        "id": 22,
        "slug": "facebook",
        "content": {
            "rendered": "",
            "protected": false
        },
        "havesvg": "1",
        "order": "0007",
        "cssclass": "facebook",
        "svgcode": "<svg preserveAspectRatio=\"xMinYMin meet\" viewBox=\"0 0 24 24\">\r\n    <path d=\"M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z\" />\r\n</svg>",
        "goexternal": "1",
        "externallink": "https://www.facebook.com/SlamDesignz",
        "itemthumb": "",
        "itemshiftedthumbnail": "",
        "title": {
            "rendered": "Facebook"
        }
    },
    {
        "id": 24,
        "slug": "ahmed-islam",
        "content": {
            "rendered": "<p><span style=\"color: #ff7900;\"><span class=\"dataTxtShift\">I&#8217;m</span></br>Ahmed Islam</span></p>\n",
            "protected": false
        },
        "havesvg": "",
        "order": "0008",
        "cssclass": "islam",
        "svgcode": "",
        "goexternal": "",
        "externallink": "",
        "itemthumb": "http://www.slamdesignz.com/wp-content/uploads/2016/11/1.jpg",
        "itemshiftedthumbnail": "",
        "wpcf-date-cover": [
            "http://www.slamdesignz.com/wp-content/uploads/2016/11/is.jpg"
        ],
        "title": {
            "rendered": "Ahmed Islam"
        }
    },
    {
        "id": 26,
        "slug": "aliaa-al-sawy",
        "content": {
            "rendered": "",
            "protected": false
        },
        "havesvg": "",
        "order": "0039",
        "cssclass": "",
        "svgcode": "",
        "goexternal": "",
        "externallink": "",
        "itemthumb": "http://www.slamdesignz.com/wp-content/uploads/2016/11/aliaa.jpg",
        "itemshiftedthumbnail": "",
        "wpcf-date-cover": [
            "http://www.slamdesignz.com/wp-content/uploads/2016/11/aliaaCover.jpg"
        ],
        "title": {
            "rendered": "Aliaa Al Sawy"
        }
    },
    {
        "id": 27,
        "slug": "bus-cafe",
        "content": {
            "rendered": "",
            "protected": false
        },
        "havesvg": "",
        "order": "0006",
        "cssclass": "",
        "svgcode": "",
        "goexternal": "",
        "externallink": "",
        "itemthumb": "http://www.slamdesignz.com/wp-content/uploads/2016/11/bus.jpg",
        "itemshiftedthumbnail": "http://www.slamdesignz.com/wp-content/uploads/2016/11/busTop.jpg",
        "wpcf-date-cover": [
            "http://www.slamdesignz.com/wp-content/uploads/2016/11/busCover.jpg"
        ],
        "title": {
            "rendered": "Bus Cafe"
        }
    },
    {
        "id": 28,
        "slug": "courses",
        "content": {
            "rendered": "",
            "protected": false
        },
        "havesvg": "",
        "order": "0035",
        "cssclass": "",
        "svgcode": "",
        "goexternal": "",
        "externallink": "",
        "itemthumb": "http://www.slamdesignz.com/wp-content/uploads/2016/11/courses.jpg",
        "itemshiftedthumbnail": "",
        "wpcf-date-cover": [
            "http://www.slamdesignz.com/wp-content/uploads/2016/11/coursesCover.jpg"
        ],
        "title": {
            "rendered": "Courses"
        }
    },
    {
        "id": 30,
        "slug": "holy-grail",
        "content": {
            "rendered": "",
            "protected": false
        },
        "havesvg": "",
        "order": "0041",
        "cssclass": "",
        "svgcode": "",
        "goexternal": "",
        "externallink": "",
        "itemthumb": "http://www.slamdesignz.com/wp-content/uploads/2016/11/holyGrail.jpg",
        "itemshiftedthumbnail": "",
        "wpcf-date-cover": [
            "http://www.slamdesignz.com/wp-content/uploads/2016/11/holyGrailCover.jpg"
        ],
        "title": {
            "rendered": "Holy Grail"
        }
    },
    {
        "id": 31,
        "slug": "tapdeal",
        "content": {
            "rendered": "",
            "protected": false
        },
        "havesvg": "",
        "order": "0023",
        "cssclass": "",
        "svgcode": "",
        "goexternal": "",
        "externallink": "",
        "itemthumb": "http://www.slamdesignz.com/wp-content/uploads/2016/11/tapdeal.jpg",
        "itemshiftedthumbnail": "",
        "wpcf-date-cover": [
            "http://www.slamdesignz.com/wp-content/uploads/2016/11/tapdealCover.jpg"
        ],
        "title": {
            "rendered": "TapDeal"
        }
    },
    {
        "id": 32,
        "slug": "onicon",
        "content": {
            "rendered": "",
            "protected": false
        },
        "havesvg": "",
        "order": "0029",
        "cssclass": "",
        "svgcode": "",
        "goexternal": "",
        "externallink": "",
        "itemthumb": "http://www.slamdesignz.com/wp-content/uploads/2016/11/onicon.jpg",
        "itemshiftedthumbnail": "",
        "wpcf-date-cover": [
            "http://www.slamdesignz.com/wp-content/uploads/2016/11/oniconCover.jpg"
        ],
        "title": {
            "rendered": "Onicon"
        }
    },
    {
        "id": 35,
        "slug": "ney-menu",
        "content": {
            "rendered": "",
            "protected": false
        },
        "havesvg": "",
        "order": "0021",
        "cssclass": "",
        "svgcode": "",
        "goexternal": "",
        "externallink": "",
        "itemthumb": "http://www.slamdesignz.com/wp-content/uploads/2016/11/ney.jpg",
        "itemshiftedthumbnail": "",
        "wpcf-date-cover": [
            "http://www.slamdesignz.com/wp-content/uploads/2016/11/neyCover.jpg"
        ],
        "title": {
            "rendered": "Ney Menu"
        }
    },
    {
        "id": 36,
        "slug": "the-barnd-bees",
        "content": {
            "rendered": "",
            "protected": false
        },
        "havesvg": "",
        "order": "0017",
        "cssclass": "",
        "svgcode": "",
        "goexternal": "",
        "externallink": "",
        "itemthumb": "http://www.slamdesignz.com/wp-content/uploads/2016/11/thebrandbees.jpg",
        "itemshiftedthumbnail": "",
        "wpcf-date-cover": [
            "http://www.slamdesignz.com/wp-content/uploads/2016/11/thebrandbeesCover.jpg"
        ],
        "title": {
            "rendered": "The Barnd Bees"
        }
    },
    {
        "id": 37,
        "slug": "dealpak",
        "content": {
            "rendered": "",
            "protected": false
        },
        "havesvg": "",
        "order": "0028",
        "cssclass": "",
        "svgcode": "",
        "goexternal": "",
        "externallink": "",
        "itemthumb": "http://www.slamdesignz.com/wp-content/uploads/2016/11/dealpak.jpg",
        "itemshiftedthumbnail": "",
        "wpcf-date-cover": [
            "http://www.slamdesignz.com/wp-content/uploads/2016/11/dealpakCover.jpg"
        ],
        "title": {
            "rendered": "Dealpak"
        }
    },
    {
        "id": 38,
        "slug": "art-house-gallery",
        "content": {
            "rendered": "",
            "protected": false
        },
        "havesvg": "",
        "order": "0034",
        "cssclass": "",
        "svgcode": "",
        "goexternal": "",
        "externallink": "",
        "itemthumb": "http://www.slamdesignz.com/wp-content/uploads/2016/11/art.jpg",
        "itemshiftedthumbnail": "",
        "wpcf-date-cover": [
            "http://www.slamdesignz.com/wp-content/uploads/2016/11/artCover.jpg"
        ],
        "title": {
            "rendered": "Art House Gallery"
        }
    },
    {
        "id": 40,
        "slug": "art-director",
        "content": {
            "rendered": "<p><span style=\"color: #601b77;\"><span class=\"dataTxtShift\">Art</span></br>Director</span></p>\n",
            "protected": false
        },
        "havesvg": "",
        "order": "0010",
        "cssclass": "",
        "svgcode": "",
        "goexternal": "",
        "externallink": "",
        "itemthumb": "http://www.slamdesignz.com/wp-content/uploads/2016/11/8.jpg",
        "itemshiftedthumbnail": "",
        "wpcf-date-cover": [
            "http://www.slamdesignz.com/wp-content/uploads/2016/11/creativeCover.jpg"
        ],
        "title": {
            "rendered": "Art Director"
        }
    },
    {
        "id": 41,
        "slug": "la-hacienda-ras-sudr",
        "content": {
            "rendered": "",
            "protected": false
        },
        "havesvg": "",
        "order": "0020",
        "cssclass": "",
        "svgcode": "",
        "goexternal": "",
        "externallink": "",
        "itemthumb": "http://www.slamdesignz.com/wp-content/uploads/2016/11/lahacienda.jpg",
        "itemshiftedthumbnail": "",
        "wpcf-date-cover": [
            "http://www.slamdesignz.com/wp-content/uploads/2016/11/lahaciendaCover.jpg"
        ],
        "title": {
            "rendered": "La Hacienda Ras Sudr"
        }
    },
    {
        "id": 42,
        "slug": "gwu",
        "content": {
            "rendered": "",
            "protected": false
        },
        "havesvg": "",
        "order": "0022",
        "cssclass": "",
        "svgcode": "",
        "goexternal": "",
        "externallink": "",
        "itemthumb": "http://www.slamdesignz.com/wp-content/uploads/2016/11/gwu.jpg",
        "itemshiftedthumbnail": "",
        "wpcf-date-cover": [
            "http://www.slamdesignz.com/wp-content/uploads/2016/11/gwuCover.jpg"
        ],
        "title": {
            "rendered": "GWU"
        }
    },
    {
        "id": 45,
        "slug": "pulse",
        "content": {
            "rendered": "",
            "protected": false
        },
        "havesvg": "",
        "order": "0032",
        "cssclass": "",
        "svgcode": "",
        "goexternal": "",
        "externallink": "",
        "itemthumb": "http://www.slamdesignz.com/wp-content/uploads/2016/11/pulse.jpg",
        "itemshiftedthumbnail": "",
        "wpcf-date-cover": [
            "http://www.slamdesignz.com/wp-content/uploads/2016/11/pulseCover.jpg"
        ],
        "title": {
            "rendered": "Pulse"
        }
    },
    {
        "id": 47,
        "slug": "igi-real-estate",
        "content": {
            "rendered": "",
            "protected": false
        },
        "havesvg": "",
        "order": "0012",
        "cssclass": "",
        "svgcode": "",
        "goexternal": "",
        "externallink": "",
        "itemthumb": "http://www.slamdesignz.com/wp-content/uploads/2016/11/igi.jpg",
        "itemshiftedthumbnail": "http://www.slamdesignz.com/wp-content/uploads/2016/11/igiTop.jpg",
        "wpcf-date-cover": [
            "http://www.slamdesignz.com/wp-content/uploads/2016/11/igiCover.jpg"
        ],
        "title": {
            "rendered": "IGI Real Estate"
        }
    },
    {
        "id": 48,
        "slug": "mena-city",
        "content": {
            "rendered": "",
            "protected": false
        },
        "havesvg": "",
        "order": "0040",
        "cssclass": "",
        "svgcode": "",
        "goexternal": "",
        "externallink": "",
        "itemthumb": "http://www.slamdesignz.com/wp-content/uploads/2016/11/mena.jpg",
        "itemshiftedthumbnail": "",
        "wpcf-date-cover": [
            "http://www.slamdesignz.com/wp-content/uploads/2016/11/menaCover.jpg"
        ],
        "title": {
            "rendered": "Mena City"
        }
    },
    {
        "id": 49,
        "slug": "madaeen-al-doha",
        "content": {
            "rendered": "",
            "protected": false
        },
        "havesvg": "",
        "order": "0009",
        "cssclass": "",
        "svgcode": "",
        "goexternal": "",
        "externallink": "",
        "itemthumb": "http://www.slamdesignz.com/wp-content/uploads/2016/11/mes.png",
        "itemshiftedthumbnail": "",
        "wpcf-date-cover": [
            "http://www.slamdesignz.com/wp-content/uploads/2016/11/madaeenCover.jpg"
        ],
        "title": {
            "rendered": "Madaeen Al Doha"
        }
    },
    {
        "id": 50,
        "slug": "fade-hotel",
        "content": {
            "rendered": "",
            "protected": false
        },
        "havesvg": "",
        "order": "0030",
        "cssclass": "",
        "svgcode": "",
        "goexternal": "",
        "externallink": "",
        "itemthumb": "http://www.slamdesignz.com/wp-content/uploads/2016/11/fade.jpg",
        "itemshiftedthumbnail": "http://www.slamdesignz.com/wp-content/uploads/2016/11/fadeTop.jpg",
        "wpcf-date-cover": [
            "http://www.slamdesignz.com/wp-content/uploads/2016/11/fadeCover.jpg"
        ],
        "title": {
            "rendered": "Fade Hotel"
        }
    },
    {
        "id": 51,
        "slug": "activedd",
        "content": {
            "rendered": "",
            "protected": false
        },
        "havesvg": "",
        "order": "0031",
        "cssclass": "",
        "svgcode": "",
        "goexternal": "",
        "externallink": "",
        "itemthumb": "http://www.slamdesignz.com/wp-content/uploads/2016/11/active.jpg",
        "itemshiftedthumbnail": "http://www.slamdesignz.com/wp-content/uploads/2016/11/activeBottom.jpg",
        "wpcf-date-cover": [
            "http://www.slamdesignz.com/wp-content/uploads/2016/11/activeCover.jpg"
        ],
        "title": {
            "rendered": "ActiveDD"
        }
    },
    {
        "id": 52,
        "slug": "aqar-stock",
        "content": {
            "rendered": "",
            "protected": false
        },
        "havesvg": "",
        "order": "0025",
        "cssclass": "",
        "svgcode": "",
        "goexternal": "",
        "externallink": "",
        "itemthumb": "http://www.slamdesignz.com/wp-content/uploads/2016/11/aqar.jpg",
        "itemshiftedthumbnail": "http://www.slamdesignz.com/wp-content/uploads/2016/11/aqarBottom.jpg",
        "wpcf-date-cover": [
            "http://www.slamdesignz.com/wp-content/uploads/2016/11/aqarCover.jpg"
        ],
        "title": {
            "rendered": "Aqar Stock"
        }
    },
    {
        "id": 54,
        "slug": "eturn",
        "content": {
            "rendered": "",
            "protected": false
        },
        "havesvg": "",
        "order": "0013",
        "cssclass": "",
        "svgcode": "",
        "goexternal": "",
        "externallink": "",
        "itemthumb": "http://www.slamdesignz.com/wp-content/uploads/2016/11/eturn.jpg",
        "itemshiftedthumbnail": "http://www.slamdesignz.com/wp-content/uploads/2016/11/eturnBottom.jpg",
        "wpcf-date-cover": [
            "http://www.slamdesignz.com/wp-content/uploads/2016/11/eturnCover.jpg"
        ],
        "title": {
            "rendered": "eTurn"
        }
    },
    {
        "id": 55,
        "slug": "media-grid",
        "content": {
            "rendered": "",
            "protected": false
        },
        "havesvg": "",
        "order": "0042",
        "cssclass": "",
        "svgcode": "",
        "goexternal": "",
        "externallink": "",
        "itemthumb": "http://www.slamdesignz.com/wp-content/uploads/2016/11/mediaLogo.jpg",
        "itemshiftedthumbnail": "",
        "wpcf-date-cover": [
            "http://www.slamdesignz.com/wp-content/uploads/2016/11/mediaCover.jpg"
        ],
        "title": {
            "rendered": "Media Grid"
        }
    },
    {
        "id": 57,
        "slug": "abayology",
        "content": {
            "rendered": "",
            "protected": false
        },
        "havesvg": "",
        "order": "0018",
        "cssclass": "",
        "svgcode": "",
        "goexternal": "",
        "externallink": "",
        "itemthumb": "http://www.slamdesignz.com/wp-content/uploads/2016/11/abayology.jpg",
        "itemshiftedthumbnail": "http://www.slamdesignz.com/wp-content/uploads/2016/11/abayologyTop.jpg",
        "wpcf-date-cover": [
            "http://www.slamdesignz.com/wp-content/uploads/2016/11/abayologyCover.jpg"
        ],
        "title": {
            "rendered": "Abayology"
        }
    },
    {
        "id": 59,
        "slug": "masteryit",
        "content": {
            "rendered": "",
            "protected": false
        },
        "havesvg": "",
        "order": "0027",
        "cssclass": "",
        "svgcode": "",
        "goexternal": "",
        "externallink": "",
        "itemthumb": "http://www.slamdesignz.com/wp-content/uploads/2016/11/mastery.jpg",
        "itemshiftedthumbnail": "",
        "wpcf-date-cover": [
            "http://www.slamdesignz.com/wp-content/uploads/2016/11/masteryCover.jpg"
        ],
        "title": {
            "rendered": "MasteryIT"
        }
    },
    {
        "id": 61,
        "slug": "tabriz",
        "content": {
            "rendered": "",
            "protected": false
        },
        "havesvg": "",
        "order": "0038",
        "cssclass": "",
        "svgcode": "",
        "goexternal": "",
        "externallink": "",
        "itemthumb": "http://www.slamdesignz.com/wp-content/uploads/2016/11/tabriz.jpg",
        "itemshiftedthumbnail": "",
        "wpcf-date-cover": [
            "http://www.slamdesignz.com/wp-content/uploads/2016/11/tabrizCover.jpg"
        ],
        "title": {
            "rendered": "Tabriz"
        }
    },
    {
        "id": 62,
        "slug": "rack23",
        "content": {
            "rendered": "",
            "protected": false
        },
        "havesvg": "",
        "order": "0019",
        "cssclass": "",
        "svgcode": "",
        "goexternal": "",
        "externallink": "",
        "itemthumb": "http://www.slamdesignz.com/wp-content/uploads/2016/11/rack.jpg",
        "itemshiftedthumbnail": "http://www.slamdesignz.com/wp-content/uploads/2016/11/rackBottom.jpg",
        "wpcf-date-cover": [
            "http://www.slamdesignz.com/wp-content/uploads/2016/11/rackCover.jpg"
        ],
        "title": {
            "rendered": "Rack23"
        }
    },
    {
        "id": 63,
        "slug": "abbott-magazine",
        "content": {
            "rendered": "",
            "protected": false
        },
        "havesvg": "",
        "order": "0024",
        "cssclass": "",
        "svgcode": "",
        "goexternal": "",
        "externallink": "",
        "itemthumb": "http://www.slamdesignz.com/wp-content/uploads/2016/11/abbott.jpg",
        "itemshiftedthumbnail": "http://www.slamdesignz.com/wp-content/uploads/2016/11/abbottTop.jpg",
        "wpcf-date-cover": [
            "http://www.slamdesignz.com/wp-content/uploads/2016/11/abbottCover.jpg"
        ],
        "title": {
            "rendered": "Abbott Magazine"
        }
    },
    {
        "id": 66,
        "slug": "cinderella",
        "content": {
            "rendered": "",
            "protected": false
        },
        "havesvg": "",
        "order": "0015",
        "cssclass": "",
        "svgcode": "",
        "goexternal": "",
        "externallink": "",
        "itemthumb": "http://www.slamdesignz.com/wp-content/uploads/2016/11/cinderella.jpg",
        "itemshiftedthumbnail": "",
        "wpcf-date-cover": [
            "http://www.slamdesignz.com/wp-content/uploads/2016/11/cinderellaCover2.jpg"
        ],
        "title": {
            "rendered": "Cinderella"
        }
    },
    {
        "id": 67,
        "slug": "freelancer",
        "content": {
            "rendered": "",
            "protected": false
        },
        "havesvg": "",
        "order": "0036",
        "cssclass": "",
        "svgcode": "",
        "goexternal": "",
        "externallink": "",
        "itemthumb": "http://www.slamdesignz.com/wp-content/uploads/2016/11/freelancer.jpg",
        "itemshiftedthumbnail": "http://www.slamdesignz.com/wp-content/uploads/2016/11/freelancerTop.jpg",
        "wpcf-date-cover": [
            "http://www.slamdesignz.com/wp-content/uploads/2016/11/freelancerCover.jpg"
        ],
        "title": {
            "rendered": "Freelancer"
        }
    },
    {
        "id": 4,
        "slug": "wild-cat",
        "content": {
            "rendered": "",
            "protected": false
        },
        "havesvg": "",
        "order": "0037",
        "cssclass": "",
        "svgcode": "",
        "goexternal": "1",
        "externallink": "http://www.google.com/",
        "itemthumb": "http://www.slamdesignz.com/wp-content/uploads/2016/12/cat.jpg",
        "itemshiftedthumbnail": "http://www.slamdesignz.com/wp-content/uploads/2016/12/catBottom.jpg",
        "wpcf-date-cover": [
            "http://www.slamdesignz.com/wp-content/uploads/2016/12/catCover.jpg"
        ],
        "title": {
            "rendered": "Wild Cat"
        }
    },
    {
        "id": 111,
        "slug": "sport-makers",
        "content": {
            "rendered": "",
            "protected": false
        },
        "havesvg": "",
        "order": "0026",
        "cssclass": "",
        "svgcode": "",
        "goexternal": "",
        "externallink": "",
        "itemthumb": "http://www.slamdesignz.com/wp-content/uploads/2016/12/sportmakerslogo.jpg",
        "itemshiftedthumbnail": "",
        "wpcf-date-cover": [
            "http://www.slamdesignz.com/wp-content/uploads/2016/12/sportmakersCover.jpg"
        ],
        "title": {
            "rendered": "Sport Makers"
        }
    },
    {
        "id": 358,
        "slug": "emaar-misr",
        "content": {
            "rendered": "",
            "protected": false
        },
        "havesvg": "",
        "order": "0033",
        "cssclass": "",
        "svgcode": "",
        "goexternal": "",
        "externallink": "",
        "itemthumb": "http://www.slamdesignz.com/wp-content/uploads/2017/01/emaar.jpg",
        "itemshiftedthumbnail": "",
        "wpcf-date-cover": [
            "http://www.slamdesignz.com/wp-content/uploads/2017/01/emaarCover.jpg"
        ],
        "title": {
            "rendered": "Emaar Misr"
        }
    },
    {
        "id": 371,
        "slug": "cairo-festival-city",
        "content": {
            "rendered": "",
            "protected": false
        },
        "havesvg": "",
        "order": "0003",
        "cssclass": "",
        "svgcode": "",
        "goexternal": "",
        "externallink": "",
        "itemthumb": "http://www.slamdesignz.com/wp-content/uploads/2017/01/cfc.jpg",
        "itemshiftedthumbnail": "http://www.slamdesignz.com/wp-content/uploads/2017/01/cfcRight.jpg",
        "wpcf-date-cover": [
            "http://www.slamdesignz.com/wp-content/uploads/2017/01/cfcCover.jpg"
        ],
        "title": {
            "rendered": "Cairo Festival City"
        }
    },
    {
        "id": 513,
        "slug": "mediterranean-tour",
        "content": {
            "rendered": "",
            "protected": false
        },
        "havesvg": "",
        "order": "0016",
        "cssclass": "",
        "svgcode": "",
        "goexternal": "",
        "externallink": "",
        "itemthumb": "http://www.slamdesignz.com/wp-content/uploads/2018/02/medi.jpg",
        "itemshiftedthumbnail": "",
        "wpcf-date-cover": [
            "http://www.slamdesignz.com/wp-content/uploads/2018/02/medCover.jpg"
        ],
        "title": {
            "rendered": "Mediterranean Tour"
        }
    },
    {
        "id": 528,
        "slug": "innovinity",
        "content": {
            "rendered": "",
            "protected": false
        },
        "havesvg": "",
        "order": "0011",
        "cssclass": "",
        "svgcode": "",
        "goexternal": "",
        "externallink": "",
        "itemthumb": "http://www.slamdesignz.com/wp-content/uploads/2018/09/inno.jpg",
        "itemshiftedthumbnail": "",
        "wpcf-date-cover": [
            "http://www.slamdesignz.com/wp-content/uploads/2018/09/HolyGrailCover2.jpg"
        ],
        "title": {
            "rendered": "Innovinity"
        }
    },
    {
        "id": 546,
        "slug": "pageinbox",
        "content": {
            "rendered": "",
            "protected": false
        },
        "havesvg": "",
        "order": "0014",
        "cssclass": "",
        "svgcode": "",
        "goexternal": "",
        "externallink": "",
        "itemthumb": "http://www.slamdesignz.com/wp-content/uploads/2018/10/pinbox_th.jpg",
        "itemshiftedthumbnail": "",
        "wpcf-date-cover": [
            "http://www.slamdesignz.com/wp-content/uploads/2018/10/pageInboxBanner.jpg"
        ],
        "title": {
            "rendered": "PageInbox"
        }
    }
]


        
    const response = {
        "headers":{
            'Access-Control-Allow-Origin': '*'
        },
        "statusCode": 200,
        "body": JSON.stringify(tiles),
    };
    return response;
};