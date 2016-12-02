/* eslint-disable max-len */
const ICONS = {
  REFRESH: 'M889.68 166.32c-93.608-102.216-228.154-166.32-377.68-166.32-282.77 0-512 229.23-512 512h96c0-229.75 186.25-416 416-416 123.020 0 233.542 53.418 309.696 138.306l-149.696 149.694h352v-352l-134.32 134.32z M928 512c0 229.75-186.25 416-416 416-123.020 0-233.542-53.418-309.694-138.306l149.694-149.694h-352v352l134.32-134.32c93.608 102.216 228.154 166.32 377.68 166.32 282.77 0 512-229.23 512-512h-96z',
  ARROW_RIGHT: 'M992 512l-480-480v288h-512v384h512v288z',
  CIRCLE_ARROW_RIGHT: 'M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 928c-229.75 0-416-186.25-416-416s186.25-416 416-416 416 186.25 416 416-186.25 416-416 416z M354.744 706.744l90.512 90.512 285.254-285.256-285.256-285.254-90.508 90.508 194.744 194.746z',
  HEART: 'M755.188 64c-107.63 0-200.258 87.554-243.164 179-42.938-91.444-135.578-179-243.216-179-148.382 0-268.808 120.44-268.808 268.832 0 301.846 304.5 380.994 512.022 679.418 196.154-296.576 511.978-387.206 511.978-679.418 0-148.392-120.43-268.832-268.812-268.832z',
  STAR: 'M1024 397.050l-353.78-51.408-158.22-320.582-158.216 320.582-353.784 51.408 256 249.538-60.432 352.352 316.432-166.358 316.432 166.358-60.434-352.352 256.002-249.538z',
  ENVELOPE: 'M928 128h-832c-52.8 0-96 43.2-96 96v640c0 52.8 43.2 96 96 96h832c52.8 0 96-43.2 96-96v-640c0-52.8-43.2-96-96-96zM398.74 550.372l-270.74 210.892v-501.642l270.74 290.75zM176.38 256h671.24l-335.62 252-335.62-252zM409.288 561.698l102.712 110.302 102.71-110.302 210.554 270.302h-626.528l210.552-270.302zM625.26 550.372l270.74-290.75v501.642l-270.74-210.892z',
  SEARCH: 'M992.262 871.396l-242.552-206.294c-25.074-22.566-51.89-32.926-73.552-31.926 57.256-67.068 91.842-154.078 91.842-249.176 0-212.078-171.922-384-384-384-212.076 0-384 171.922-384 384s171.922 384 384 384c95.098 0 182.108-34.586 249.176-91.844-1 21.662 9.36 48.478 31.926 73.552l206.294 242.552c35.322 39.246 93.022 42.554 128.22 7.356s31.892-92.898-7.354-128.22zM384 640c-141.384 0-256-114.616-256-256s114.616-256 256-256 256 114.616 256 256-114.614 256-256 256z',
  CLOUD_DOWN: 'M891.004 360.060c-3.242-128.698-108.458-232.060-237.862-232.060-75.792 0-143.266 35.494-186.854 90.732-24.442-31.598-62.69-51.96-105.708-51.96-73.81 0-133.642 59.876-133.642 133.722 0 6.436 0.48 12.76 1.364 18.954-11.222-2.024-22.766-3.138-34.57-3.138-106.998-0.002-193.732 86.786-193.732 193.842 0 107.062 86.734 193.848 193.73 193.848h91.76l226.51 234.51 226.51-234.51 111.482-0.012c96.138-0.184 174.008-78.21 174.008-174.446 0-82.090-56.678-150.9-132.996-169.482zM512 832l-192-192h128v-192h128v192h128l-192 192z',
  EYE: 'M512 192c-223.318 0-416.882 130.042-512 320 95.118 189.958 288.682 320 512 320 223.312 0 416.876-130.042 512-320-95.116-189.958-288.688-320-512-320zM764.45 361.704c60.162 38.374 111.142 89.774 149.434 150.296-38.292 60.522-89.274 111.922-149.436 150.296-75.594 48.218-162.89 73.704-252.448 73.704-89.56 0-176.858-25.486-252.452-73.704-60.158-38.372-111.138-89.772-149.432-150.296 38.292-60.524 89.274-111.924 149.434-150.296 3.918-2.5 7.876-4.922 11.86-7.3-9.96 27.328-15.41 56.822-15.41 87.596 0 141.382 114.616 256 256 256 141.382 0 256-114.618 256-256 0-30.774-5.452-60.268-15.408-87.598 3.978 2.378 7.938 4.802 11.858 7.302v0zM512 416c0 53.020-42.98 96-96 96s-96-42.98-96-96 42.98-96 96-96 96 42.982 96 96z',
  VIDEO: 'M1013.8 307.2c0 0-10-70.6-40.8-101.6-39-40.8-82.6-41-102.6-43.4-143.2-10.4-358.2-10.4-358.2-10.4h-0.4c0 0-215 0-358.2 10.4-20 2.4-63.6 2.6-102.6 43.4-30.8 31-40.6 101.6-40.6 101.6s-10.2 82.8-10.2 165.8v77.6c0 82.8 10.2 165.8 10.2 165.8s10 70.6 40.6 101.6c39 40.8 90.2 39.4 113 43.8 82 7.8 348.2 10.2 348.2 10.2s215.2-0.4 358.4-10.6c20-2.4 63.6-2.6 102.6-43.4 30.8-31 40.8-101.6 40.8-101.6s10.2-82.8 10.2-165.8v-77.6c-0.2-82.8-10.4-165.8-10.4-165.8zM406.2 644.8v-287.8l276.6 144.4-276.6 143.4z',
  POINT_UP: 'M960 608v-160c0-52.934-43.066-96-96-96-17.104 0-33.176 4.494-47.098 12.368-17.076-26.664-46.958-44.368-80.902-44.368-24.564 0-47.004 9.274-64 24.504-16.996-15.23-39.436-24.504-64-24.504-11.214 0-21.986 1.934-32 5.484v-229.484c0-52.934-43.066-96-96-96s-96 43.066-96 96v394.676l-176.018-93.836c-14.536-8.4-31.126-12.84-47.982-12.84-52.934 0-96 43.066-96 96 0 26.368 10.472 50.954 29.49 69.226 0.248 0.238 0.496 0.47 0.75 0.7l239.17 218.074h-45.41c-17.672 0-32 14.326-32 32v192c0 17.674 14.328 32 32 32h640c17.674 0 32-14.326 32-32v-192c0-17.674-14.326-32-32-32h-44.222l72.844-145.69c2.222-4.442 3.378-9.342 3.378-14.31zM896 864c0 17.674-14.326 32-32 32s-32-14.326-32-32 14.326-32 32-32 32 14.326 32 32zM896 600.446l-83.776 167.554h-383.826l-290.818-265.166c-6.18-6.070-9.58-14.164-9.58-22.834 0-17.644 14.356-32 32-32 5.46 0 10.612 1.31 15.324 3.894 0.53 0.324 1.070 0.632 1.622 0.926l224 119.416c9.92 5.288 21.884 4.986 31.52-0.8 9.638-5.782 15.534-16.196 15.534-27.436v-448c0-17.644 14.356-32 32-32s32 14.356 32 32v320c0 17.672 14.326 32 32 32s32-14.328 32-32c0-17.644 14.356-32 32-32s32 14.356 32 32c0 17.672 14.326 32 32 32s32-14.328 32-32c0-17.644 14.356-32 32-32s32 14.356 32 32v32c0 17.672 14.326 32 32 32s32-14.328 32-32c0-17.644 14.356-32 32-32s32 14.356 32 32v152.446z',
  FORM: 'M384 192h128v64h-128zM576 192h128v64h-128zM896 192v256h-192v-64h128v-128h-64v-64zM320 384h128v64h-128zM512 384h128v64h-128zM192 256v128h64v64h-128v-256h192v64zM384 576h128v64h-128zM576 576h128v64h-128zM896 576v256h-192v-64h128v-128h-64v-64zM320 768h128v64h-128zM512 768h128v64h-128zM192 640v128h64v64h-128v-256h192v64zM960 64h-896v896h896v-896zM1024 0v0 1024h-1024v-1024h1024z',
  NEWS: 'M896 256v-128h-896v704c0 35.346 28.654 64 64 64h864c53.022 0 96-42.978 96-96v-544h-128zM832 832h-768v-640h768v640zM128 320h640v64h-640zM512 448h256v64h-256zM512 576h256v64h-256zM512 704h192v64h-192zM128 448h320v320h-320z',
  BOOK: 'M896 128v832h-672c-53.026 0-96-42.98-96-96s42.974-96 96-96h608v-768h-640c-70.398 0-128 57.6-128 128v768c0 70.4 57.602 128 128 128h768v-896h-64z M224.056 832v0c-0.018 0.002-0.038 0-0.056 0-17.672 0-32 14.326-32 32s14.328 32 32 32c0.018 0 0.038-0.002 0.056-0.002v0.002h607.89v-64h-607.89z',
  GLOBE: 'M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 960.002c-62.958 0-122.872-13.012-177.23-36.452l233.148-262.29c5.206-5.858 8.082-13.422 8.082-21.26v-96c0-17.674-14.326-32-32-32-112.99 0-232.204-117.462-233.374-118.626-6-6.002-14.14-9.374-22.626-9.374h-128c-17.672 0-32 14.328-32 32v192c0 12.122 6.848 23.202 17.69 28.622l110.31 55.156v187.886c-116.052-80.956-192-215.432-192-367.664 0-68.714 15.49-133.806 43.138-192h116.862c8.488 0 16.626-3.372 22.628-9.372l128-128c6-6.002 9.372-14.14 9.372-22.628v-77.412c40.562-12.074 83.518-18.588 128-18.588 70.406 0 137.004 16.26 196.282 45.2-4.144 3.502-8.176 7.164-12.046 11.036-36.266 36.264-56.236 84.478-56.236 135.764s19.97 99.5 56.236 135.764c36.434 36.432 85.218 56.264 135.634 56.26 3.166 0 6.342-0.080 9.518-0.236 13.814 51.802 38.752 186.656-8.404 372.334-0.444 1.744-0.696 3.488-0.842 5.224-81.324 83.080-194.7 134.656-320.142 134.656z',
  CSS: 'M152.388 48.522l-34.36 171.926h699.748l-21.884 111.054h-700.188l-33.892 171.898h699.684l-39.018 196.064-282.012 93.422-244.4-93.422 16.728-85.042h-171.898l-40.896 206.352 404.226 154.704 466.006-154.704 153.768-772.252z',
  BUG: 'M1024 576v-64h-193.29c-5.862-72.686-31.786-139.026-71.67-192.25h161.944l70.060-280.24-62.090-15.522-57.94 231.76h-174.68c-0.892-0.694-1.796-1.374-2.698-2.056 6.71-19.502 10.362-40.422 10.362-62.194 0.002-105.76-85.958-191.498-191.998-191.498s-192 85.738-192 191.5c0 21.772 3.65 42.692 10.362 62.194-0.9 0.684-1.804 1.362-2.698 2.056h-174.68l-57.94-231.76-62.090 15.522 70.060 280.24h161.944c-39.884 53.222-65.806 119.562-71.668 192.248h-193.29v64h193.37c3.802 45.664 15.508 88.812 33.638 127.75h-123.992l-70.060 280.238 62.090 15.524 57.94-231.762h112.354c58.692 78.032 147.396 127.75 246.66 127.75s187.966-49.718 246.662-127.75h112.354l57.94 231.762 62.090-15.524-70.060-280.238h-123.992c18.13-38.938 29.836-82.086 33.636-127.75h193.37z',
  ROAD: 'M704 1024h320l-256-1024h-192l32 256h-192l32-256h-192l-256 1024h320l32-256h320l32 256zM368 640l32-256h224l32 256h-288z',
  LINE_CHART: 'M128 896h896v128h-1024v-1024h128zM288 832c-53.020 0-96-42.98-96-96s42.98-96 96-96c2.828 0 5.622 0.148 8.388 0.386l103.192-171.986c-9.84-15.070-15.58-33.062-15.58-52.402 0-53.020 42.98-96 96-96s96 42.98 96 96c0 19.342-5.74 37.332-15.58 52.402l103.192 171.986c2.766-0.238 5.56-0.386 8.388-0.386 2.136 0 4.248 0.094 6.35 0.23l170.356-298.122c-10.536-15.408-16.706-34.036-16.706-54.11 0-53.020 42.98-96 96-96s96 42.98 96 96c0 53.020-42.98 96-96 96-2.14 0-4.248-0.094-6.35-0.232l-170.356 298.124c10.536 15.406 16.706 34.036 16.706 54.11 0 53.020-42.98 96-96 96s-96-42.98-96-96c0-19.34 5.74-37.332 15.578-52.402l-103.19-171.984c-2.766 0.238-5.56 0.386-8.388 0.386s-5.622-0.146-8.388-0.386l-103.192 171.986c9.84 15.068 15.58 33.060 15.58 52.4 0 53.020-42.98 96-96 96z',
  GITHUB: 'M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z',
  COMPONENTS: 'M710 72l242 242-242 240h186v342h-342v-342h156l-240-240v156h-342v-342h342v186zM128 896v-342h342v342h-342z',
  COMMENTS: 'M480 0v0c265.096 0 480 173.914 480 388.448s-214.904 388.448-480 388.448c-25.458 0-50.446-1.62-74.834-4.71-103.106 102.694-222.172 121.108-341.166 123.814v-25.134c64.252-31.354 116-88.466 116-153.734 0-9.106-0.712-18.048-2.030-26.794-108.558-71.214-177.97-179.988-177.97-301.89 0-214.534 214.904-388.448 480-388.448zM996 870.686c0 55.942 36.314 104.898 92 131.772v21.542c-103.126-2.318-197.786-18.102-287.142-106.126-21.14 2.65-42.794 4.040-64.858 4.040-95.47 0-183.408-25.758-253.614-69.040 144.674-0.506 281.26-46.854 384.834-130.672 52.208-42.252 93.394-91.826 122.414-147.348 30.766-58.866 46.366-121.582 46.366-186.406 0-10.448-0.45-20.836-1.258-31.168 72.57 59.934 117.258 141.622 117.258 231.676 0 104.488-60.158 197.722-154.24 258.764-1.142 7.496-1.76 15.16-1.76 22.966z',
  ROCKET: 'M704 64l-320 320h-192l-192 256c0 0 203.416-56.652 322.066-30.084l-322.066 414.084 421.902-328.144c58.838 134.654-37.902 328.144-37.902 328.144l256-192v-192l320-320 64-320-320 64z',
  CLOUD: 'M1024 657.542c0-82.090-56.678-150.9-132.996-169.48-3.242-128.7-108.458-232.062-237.862-232.062-75.792 0-143.266 35.494-186.854 90.732-24.442-31.598-62.69-51.96-105.708-51.96-73.81 0-133.642 59.874-133.642 133.722 0 6.436 0.48 12.76 1.364 18.954-11.222-2.024-22.766-3.138-34.57-3.138-106.998-0.002-193.732 86.786-193.732 193.842 0 107.062 86.734 193.848 193.73 193.848l656.262-0.012c96.138-0.184 174.008-78.212 174.008-174.446z',
  DATABASE: 'M512 0c-282.77 0-512 71.634-512 160v128c0 88.366 229.23 160 512 160s512-71.634 512-160v-128c0-88.366-229.23-160-512-160z M512 544c-282.77 0-512-71.634-512-160v192c0 88.366 229.23 160 512 160s512-71.634 512-160v-192c0 88.366-229.23 160-512 160z M512 832c-282.77 0-512-71.634-512-160v192c0 88.366 229.23 160 512 160s512-71.634 512-160v-192c0 88.366-229.23 160-512 160z',
  BUBBLE: 'M512 64c282.77 0 512 186.25 512 416 0 229.752-229.23 416-512 416-27.156 0-53.81-1.734-79.824-5.044-109.978 109.978-241.25 129.7-368.176 132.596v-26.916c68.536-33.578 128-94.74 128-164.636 0-9.754-0.758-19.33-2.164-28.696-115.796-76.264-189.836-192.754-189.836-323.304 0-229.75 229.23-416 512-416z',
  ENLARGE2: 'M1024 0v416l-160-160-192 192-96-96 192-192-160-160zM448 672l-192 192 160 160h-416v-416l160 160 192-192z',
  SHRINK2: 'M448 576v416l-160-160-192 192-96-96 192-192-160-160zM1024 96l-192 192 160 160h-416v-416l160 160 192-192z',
  BIN2: 'M192 1024h640l64-704h-768zM640 128v-128h-256v128h-320v192l64-64h768l64 64v-192h-320zM576 128h-128v-64h128v64z',
  CLOUD_CHECK: 'M892.268 514.49c2.442-11.108 3.732-22.646 3.732-34.49 0-88.366-71.634-160-160-160-14.224 0-28.014 1.868-41.134 5.352-24.796-77.352-97.288-133.352-182.866-133.352-87.348 0-161.054 58.336-184.326 138.17-22.742-6.62-46.792-10.17-71.674-10.17-141.384 0-256 114.616-256 256 0 141.382 114.616 256 256 256h608c88.366 0 160-71.632 160-160 0-78.718-56.854-144.16-131.732-157.51zM416 768l-160-160 64-64 96 96 224-224 64 64-288 288z',
  BOLD: 'M707.88 484.652c37.498-44.542 60.12-102.008 60.12-164.652 0-141.16-114.842-256-256-256h-320v896h384c141.158 0 256-114.842 256-256 0-92.956-49.798-174.496-124.12-219.348zM384 192h101.5c55.968 0 101.5 57.42 101.5 128s-45.532 128-101.5 128h-101.5v-256zM543 832h-159v-256h159c58.45 0 106 57.42 106 128s-47.55 128-106 128z',
  UNDERLINE: 'M704 64h128v416c0 159.058-143.268 288-320 288-176.73 0-320-128.942-320-288v-416h128v416c0 40.166 18.238 78.704 51.354 108.506 36.896 33.204 86.846 51.494 140.646 51.494s103.75-18.29 140.646-51.494c33.116-29.802 51.354-68.34 51.354-108.506v-416zM192 832h640v128h-640z',
  ITALIC: 'M896 64v64h-128l-320 768h128v64h-448v-64h128l320-768h-128v-64z',
  PARAGRAPH_LEFT: 'M0 64h1024v128h-1024zM0 256h640v128h-640zM0 640h640v128h-640zM0 448h1024v128h-1024zM0 832h1024v128h-1024z',
  PARAGRAPH_CENTER: 'M0 64h1024v128h-1024zM192 256h640v128h-640zM192 640h640v128h-640zM0 448h1024v128h-1024zM0 832h1024v128h-1024z',
  PARAGRAPH_RIGHT: 'M0 64h1024v128h-1024zM384 256h640v128h-640zM384 640h640v128h-640zM0 448h1024v128h-1024zM0 832h1024v128h-1024z',
  GOOGLE: 'M522.2 438.8v175.6h290.4c-11.8 75.4-87.8 220.8-290.4 220.8-174.8 0-317.4-144.8-317.4-323.2s142.6-323.2 317.4-323.2c99.4 0 166 42.4 204 79l139-133.8c-89.2-83.6-204.8-134-343-134-283 0-512 229-512 512s229 512 512 512c295.4 0 491.6-207.8 491.6-500.2 0-33.6-3.6-59.2-8-84.8l-483.6-0.2z',
  FACEBOOK: 'M608 192h160v-192h-160c-123.514 0-224 100.486-224 224v96h-128v192h128v512h192v-512h160l32-192h-192v-96c0-17.346 14.654-32 32-32z',
  TWITTER: 'M1024 226.4c-37.6 16.8-78.2 28-120.6 33 43.4-26 76.6-67.2 92.4-116.2-40.6 24-85.6 41.6-133.4 51-38.4-40.8-93-66.2-153.4-66.2-116 0-210 94-210 210 0 16.4 1.8 32.4 5.4 47.8-174.6-8.8-329.4-92.4-433-219.6-18 31-28.4 67.2-28.4 105.6 0 72.8 37 137.2 93.4 174.8-34.4-1-66.8-10.6-95.2-26.2 0 0.8 0 1.8 0 2.6 0 101.8 72.4 186.8 168.6 206-17.6 4.8-36.2 7.4-55.4 7.4-13.6 0-26.6-1.4-39.6-3.8 26.8 83.4 104.4 144.2 196.2 146-72 56.4-162.4 90-261 90-17 0-33.6-1-50.2-3 93.2 59.8 203.6 94.4 322.2 94.4 386.4 0 597.8-320.2 597.8-597.8 0-9.2-0.2-18.2-0.6-27.2 41-29.4 76.6-66.4 104.8-108.6z',
  LINKEDIN2: 'M384 384h177.106v90.782h2.532c24.64-44.194 84.958-90.782 174.842-90.782 186.946 0 221.52 116.376 221.52 267.734v308.266h-184.61v-273.278c0-65.184-1.334-149.026-96.028-149.026-96.148 0-110.82 70.986-110.82 144.292v278.012h-184.542v-576z M64 384h192v576h-192v-576z M256 224c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-53.019 42.981-96 96-96s96 42.981 96 96z'
};
/* eslint-enable max-len */

export default ICONS;
