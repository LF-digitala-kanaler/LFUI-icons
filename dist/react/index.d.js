import * as React from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function BankidMc20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fillRule: "nonzero", fill: "none" },
            React.createElement("path", { d: "M7.21 10.557L8 5.694h-.844c-.396 0-.905-.216-1.054-.613-.048-.135-.162-.596.49-1.046.234-.158.384-.334.414-.468a.357.357 0 00-.108-.357C6.754 3.076 6.473 3 6.114 3c-.605 0-1.03.339-1.072.584-.03.182.114.328.24.421.377.275.467.672.233 1.047-.24.385-.76.637-1.317.642h-.863C3.263 6.168 2.09 13.427 2 14h4.677c.042-.257.257-1.63.55-3.443H7.21z", fill: "#479CBE" }),
            React.createElement("path", { d: "M12.36 1H7.63L7 5.07h.803c.44 0 .857-.206 1.035-.503a.491.491 0 00.084-.26c0-.169-.113-.296-.227-.38-.309-.236-.374-.484-.374-.66 0-.036 0-.066.006-.096.065-.43.636-.895 1.392-.895.452 0 .797.109 1.005.308a.718.718 0 01.202.683c-.065.309-.368.563-.541.69-.458.326-.399.61-.369.695.095.254.458.417.738.417h1.22v.006c1.665.012 2.558.792 2.278 2.606-.262 1.687-1.535 2.413-3.052 2.425L10.6 14h.886c3.742 0 6.8-2.443 7.4-6.3C19.63 2.91 16.643 1 12.36 1z", fill: "#00A5C3" }),
            React.createElement("path", { d: "M12.36 1H7.63L7 5.07h.803c.44 0 .857-.206 1.035-.503a.491.491 0 00.084-.26c0-.169-.113-.296-.227-.38-.309-.236-.374-.484-.374-.66 0-.036 0-.066.006-.096.065-.43.636-.895 1.392-.895.452 0 .797.109 1.005.308a.718.718 0 01.202.683c-.065.309-.368.563-.541.69-.458.326-.399.61-.369.695.095.254.458.417.738.417h1.22v.006c1.665.012 2.558.792 2.278 2.606-.262 1.687-1.535 2.413-3.052 2.425L10.6 14h.886c3.742 0 6.8-2.443 7.4-6.3C19.63 2.91 16.643 1 12.36 1z", fill: "#235971" }),
            React.createElement("g", { fill: "#235971" },
                React.createElement("path", { d: "M1.501 15.012H3.34c.784 0 .974.42.917.805-.047.31-.248.542-.594.695.438.177.61.45.547.884-.08.542-.524.945-1.106.945H1.012l.49-3.329zm1.216 1.378c.357 0 .524-.201.559-.439.035-.256-.075-.433-.432-.433h-.317l-.127.872h.317zm-.196 1.439c.369 0 .582-.159.634-.482.04-.28-.11-.445-.467-.445h-.363l-.138.933h.334v-.006zM6.785 18.365c-.478.037-.709-.018-.824-.238-.253.165-.536.25-.835.25-.542 0-.732-.298-.68-.628a.754.754 0 01.248-.439c.3-.274 1.037-.31 1.325-.518.023-.231-.064-.317-.334-.317-.317 0-.582.11-1.038.44l.11-.757c.392-.298.772-.439 1.21-.439.559 0 1.054.244.962.89l-.11.732c-.04.256-.028.335.243.341l-.277.683zm-.83-1.146c-.253.17-.726.14-.777.494-.024.164.074.286.23.286.15 0 .334-.067.484-.177a.706.706 0 01.012-.237l.051-.366zM7.678 15.762h.957l-.052.335c.305-.274.536-.378.835-.378.536 0 .784.348.698.915l-.248 1.7H8.91l.208-1.408c.04-.256-.035-.378-.22-.378-.149 0-.287.086-.42.275l-.219 1.505h-.956l.374-2.566zM10.859 15.012h.956l-.242 1.634.917-.884h1.18l-1.175 1.097.945 1.476h-1.204l-.726-1.19H11.5l-.173 1.19h-.957z" })),
            React.createElement("g", { fill: "#479CBE" },
                React.createElement("path", { d: "M14.465 15.012h.999l-.44 3.383h-.998zM15.95 15.012h1.427c1.103 0 1.422.95 1.317 1.738-.1.77-.612 1.645-1.579 1.645h-1.61l.445-3.383zm.925 2.576c.486 0 .753-.285.831-.887.058-.447-.057-.888-.596-.888h-.266l-.23 1.775h.26z" })))));
}

function CarDamaged20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { transform: "translate(0 1)", fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M3 9.066l.992-3.094 1.524-2.997a.697.697 0 01.063-.063c.111-.1.28-.209.525-.32C6.908 2.23 8.18 2.002 10 2c1.819-.001 3.09.228 3.894.591.246.111.415.22.527.321.033.03.053.05.063.063l1.519 2.988L17 9.07V15h2V8.758l-1.142-3.559-1.631-3.21C15.882 1.39 14.623-.003 9.999 0 5.375.003 4.12 1.387 3.774 1.988l-1.638 3.22L1 8.754V15h2V9.066z", fill: "#005AA0", fillRule: "nonzero" }),
            React.createElement("path", { fill: "#E30613", fillRule: "nonzero", d: "M11.919 5.456l-1.495 1.547H6v-2h3.576l2.255-2.334 2.843 2.595-1.348 1.477z" }),
            React.createElement("path", { fill: "#005AA0", fillRule: "nonzero", d: "M2 16.003v-2h16v2zM2 13.003v-2h10v2z" }),
            React.createElement("path", { fill: "#E30613", fillRule: "nonzero", d: "M13 13.003v-2h3v2z" }),
            React.createElement("path", { d: "M1 7a1 1 0 110-2h1.5a1 1 0 110 2H1zM17.5 7a1 1 0 010-2H19a1 1 0 010 2h-1.5z", fill: "#005AA0", fillRule: "nonzero" }),
            React.createElement("circle", { fill: "#005AA0", cx: 5.5, cy: 8.75, r: 1.25 }),
            React.createElement("circle", { fill: "#005AA0", cx: 14.5, cy: 8.75, r: 1.25 }),
            React.createElement("path", { d: "M17 17.5a1 1 0 01-1-1v-2h3v2a1 1 0 01-1 1h-1zM2 17.5a1 1 0 01-1-1v-2h3v2a1 1 0 01-1 1H2z", fill: "#005AA0", fillRule: "nonzero" }))));
}

function CarMulticolor20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { transform: "translate(0 1)", fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M3 9.066l.992-3.094 1.524-2.997a.697.697 0 01.063-.063c.111-.1.28-.209.525-.32C6.908 2.23 8.18 2.002 10 2c1.819-.001 3.09.228 3.894.591.246.111.415.22.527.321.033.03.053.05.063.063l1.519 2.988L17 9.07V15h2V8.758l-1.142-3.559-1.631-3.21C15.882 1.39 14.623-.003 9.999 0 5.375.003 4.12 1.387 3.774 1.988l-1.638 3.22L1 8.754V15h2V9.066z", fill: "#005AA0", fillRule: "nonzero" }),
            React.createElement("path", { fill: "#005AA0", fillRule: "nonzero", d: "M11.978 5.003l-.396-.916 1.836-.794 1.604 3.71H6v-2zM2 16.003v-2h16v2zM2 13.003v-2h5v2zM13 13.003v-2h5v2z" }),
            React.createElement("path", { fill: "#E30613", fillRule: "nonzero", d: "M8 13.003v-2h4v2z" }),
            React.createElement("path", { d: "M1 7a1 1 0 110-2h1.5a1 1 0 110 2H1zM17.5 7a1 1 0 010-2H19a1 1 0 010 2h-1.5z", fill: "#005AA0", fillRule: "nonzero" }),
            React.createElement("circle", { fill: "#005AA0", cx: 5.5, cy: 8.75, r: 1.25 }),
            React.createElement("circle", { fill: "#005AA0", cx: 14.5, cy: 8.75, r: 1.25 }),
            React.createElement("path", { d: "M17 17.5a1 1 0 01-1-1v-2h3v2a1 1 0 01-1 1h-1zM2 17.5a1 1 0 01-1-1v-2h3v2a1 1 0 01-1 1H2z", fill: "#005AA0", fillRule: "nonzero" }))));
}

function SpecialGlobe20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 19, height: 19, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("linearGradient", { x1: "50%", y1: "0%", x2: "50%", y2: "80.758%", id: "special_globe-20_svg__a" },
                React.createElement("stop", { stopColor: "#0578B5", offset: "0%" }),
                React.createElement("stop", { stopColor: "#FFF", offset: "100%" }))),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h20v20H0z" }),
            React.createElement("g", { transform: "translate(.75 .717)" },
                React.createElement("circle", { fill: "url(#special_globe-20_svg__a)", cx: 9, cy: 9.033, r: 9 }),
                React.createElement("circle", { stroke: "#035F8C", cx: 9, cy: 9.033, r: 7 }),
                React.createElement("path", { d: "M2 9.033h14M9 2.033v14M9 16.033c-2.31-1.36-3.464-3.694-3.464-7 0-3.307 1.155-5.64 3.464-7M9 16.033c2.31-1.36 3.464-3.694 3.464-7 0-3.307-1.155-5.64-3.464-7", stroke: "#035F8C" }),
                React.createElement("path", { d: "M3.487 13.28c1.36-1.132 3.198-1.697 5.513-1.697 2.357 0 4.22.586 5.588 1.76M3.438 4.758C4.803 5.918 6.658 6.497 9 6.497c2.383 0 4.26-.6 5.632-1.8", stroke: "#035F8C" })))));
}

function SpecialStar20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 14, height: 13, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M7 10.362l-4.114 2.151.785-4.556L.343 4.73l4.6-.665L7-.08l2.057 4.145 4.6.665-3.328 3.227.785 4.556z", fill: "currentColor", fillRule: "nonzero" })));
}

function BankidMc24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("g", { fillRule: "nonzero" },
                React.createElement("path", { d: "M8.21 12.557L9 7.694h-.844c-.396 0-.905-.216-1.054-.613-.048-.135-.162-.596.49-1.046.234-.158.384-.334.414-.468a.357.357 0 00-.108-.357C7.754 5.076 7.473 5 7.114 5c-.605 0-1.03.339-1.072.584-.03.182.114.328.24.421.377.275.467.672.233 1.047-.24.385-.76.637-1.317.642h-.863C4.263 8.168 3.09 15.427 3 16h4.677c.042-.257.257-1.63.55-3.443H8.21z", fill: "#479CBE" }),
                React.createElement("path", { d: "M14.807 3H9.683L9 7.07h.87c.477 0 .928-.206 1.121-.503a.465.465 0 00.09-.26c0-.169-.122-.296-.244-.38-.335-.236-.406-.484-.406-.66 0-.036 0-.066.006-.096.071-.43.69-.895 1.508-.895.49 0 .864.109 1.09.308.2.176.277.423.219.683-.071.309-.4.563-.587.69-.496.326-.432.61-.4.695.104.254.497.417.8.417h1.32v.006c1.805.012 2.772.792 2.47 2.606-.284 1.687-1.664 2.413-3.307 2.425L12.9 16h.96c4.053 0 7.366-2.443 8.017-6.3.805-4.79-2.43-6.7-7.07-6.7z", fill: "#00A5C3" }),
                React.createElement("path", { d: "M14.807 3H9.683L9 7.07h.87c.477 0 .928-.206 1.121-.503a.465.465 0 00.09-.26c0-.169-.122-.296-.244-.38-.335-.236-.406-.484-.406-.66 0-.036 0-.066.006-.096.071-.43.69-.895 1.508-.895.49 0 .864.109 1.09.308.2.176.277.423.219.683-.071.309-.4.563-.587.69-.496.326-.432.61-.4.695.104.254.497.417.8.417h1.32v.006c1.805.012 2.772.792 2.47 2.606-.284 1.687-1.664 2.413-3.307 2.425L12.9 16h.96c4.053 0 7.366-2.443 8.017-6.3.805-4.79-2.43-6.7-7.07-6.7z", fill: "#235971" }),
                React.createElement("g", { fill: "#235971" },
                    React.createElement("path", { d: "M2.54 18.012h1.98c.843 0 1.048.42.986.805-.05.31-.267.542-.64.695.472.177.659.45.59.884-.087.542-.564.945-1.191.945H2.012l.528-3.329zm1.31 1.378c.384 0 .564-.201.601-.439.037-.256-.08-.433-.465-.433h-.342l-.136.872h.341zm-.212 1.439c.397 0 .627-.159.683-.482.043-.28-.118-.445-.503-.445h-.39l-.15.933h.36v-.006zM8.23 21.365c-.515.037-.763-.018-.887-.238-.273.165-.577.25-.9.25-.583 0-.788-.298-.732-.628a.742.742 0 01.267-.439c.322-.274 1.117-.31 1.427-.518.025-.231-.068-.317-.36-.317-.341 0-.627.11-1.117.44l.118-.757c.422-.298.831-.439 1.303-.439.602 0 1.136.244 1.036.89l-.118.732c-.043.256-.03.335.261.341l-.298.683zm-.893-1.146c-.273.17-.782.14-.838.494-.025.164.08.286.248.286a.99.99 0 00.521-.177.656.656 0 01.013-.237l.056-.366zM9.192 18.762h1.03l-.056.335c.33-.274.577-.378.9-.378.577 0 .844.348.75.915l-.266 1.7h-1.03l.223-1.408c.044-.256-.037-.378-.235-.378-.162 0-.31.086-.453.275l-.236 1.505h-1.03l.403-2.566zM12.617 18.012h1.03l-.26 1.634.986-.884h1.273l-1.266 1.097 1.017 1.476H14.1l-.781-1.19h-.013l-.186 1.19h-1.03z" })),
                React.createElement("g", { fill: "#479CBE" },
                    React.createElement("path", { d: "M16.558 18.012h1.198l-.527 3.383h-1.198zM18.34 18.012h1.712c1.324 0 1.706.95 1.58 1.738-.118.77-.733 1.645-1.894 1.645h-1.932l.534-3.383zm1.11 2.576c.583 0 .903-.285.997-.887.07-.447-.069-.888-.715-.888h-.32l-.276 1.775h.314z" }))))));
}

function CarDamaged24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { transform: "translate(0 2)", fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M20 7l-2.5-4s-.438-1.003-5.5-1c-5.063.003-5.5 1-5.5 1L4 7l-1 4v5.5c0 .75.5 1 1 1s1-.406 1-1V15h14v1.5c0 .531.5 1 1 1s1-.438 1-1l.044-5.5L20 7zm3 9.5c0 1.666-1.392 3-3 3-1.439 0-2.707-1.095-2.956-2.499l-10.086.004A3.009 3.009 0 014 19.5c-1.632 0-3-1.14-3-3v-5.746l1.136-4.546 2.638-4.22c.346-.6 1-1.067 1.944-1.384C7.881.214 9.588 0 11.998 0c2.418-.001 4.13.212 5.294.605.939.318 1.59.785 1.935 1.384l2.631 4.21 1.19 4.559-.004.271L23 16.5z", fill: "#005AA0", fillRule: "nonzero" }),
            React.createElement("path", { fill: "#005AA0", fillRule: "nonzero", d: "M2 14v-2h13v2z" }),
            React.createElement("path", { fill: "#E30613", fillRule: "nonzero", d: "M16 14v-2h4v2z" }),
            React.createElement("path", { d: "M1 8a1 1 0 110-2h1.5a1 1 0 110 2H1zM21.5 8a1 1 0 010-2H23a1 1 0 010 2h-1.5z", fill: "#005AA0", fillRule: "nonzero" }),
            React.createElement("path", { fill: "#E30613", fillRule: "nonzero", d: "M11.586 5.014H6v2h6.414L14 5.428l1.586 1.586H18v-2h-1.586L14 2.6z" }),
            React.createElement("circle", { fill: "#005AA0", cx: 6.5, cy: 9.5, r: 1.5 }),
            React.createElement("circle", { fill: "#005AA0", cx: 17.5, cy: 9.5, r: 1.5 }))));
}

function CarMulticolor24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { transform: "translate(0 2)", fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M20 7l-2.5-4s-.438-1.003-5.5-1c-5.063.003-5.5 1-5.5 1L4 7l-1 4v5.5c0 .75.5 1 1 1s1-.406 1-1V15h14v1.5c0 .531.5 1 1 1s1-.438 1-1l.044-5.5L20 7zm3 9.5c0 1.666-1.392 3-3 3-1.439 0-2.707-1.095-2.956-2.499l-10.086.004A3.009 3.009 0 014 19.5c-1.632 0-3-1.14-3-3v-5.746l1.136-4.546 2.638-4.22c.346-.6 1-1.067 1.944-1.384C7.881.214 9.588 0 11.998 0c2.418-.001 4.13.212 5.294.605.939.318 1.59.785 1.935 1.384l2.631 4.21 1.19 4.559-.004.271L23 16.5z", fill: "#005AA0", fillRule: "nonzero" }),
            React.createElement("path", { fill: "#005AA0", fillRule: "nonzero", d: "M14.491 3.951l1.782-.908L18.29 7H7V5h8.026zM2 14v-2h7v2zM15 14v-2h7v2z" }),
            React.createElement("path", { fill: "#E30613", fillRule: "nonzero", d: "M10 14v-2h4v2z" }),
            React.createElement("path", { d: "M1 8a1 1 0 110-2h1.5a1 1 0 110 2H1zM21.5 8a1 1 0 010-2H23a1 1 0 010 2h-1.5z", fill: "#005AA0", fillRule: "nonzero" }),
            React.createElement("circle", { fill: "#005AA0", cx: 6.5, cy: 9.5, r: 1.5 }),
            React.createElement("circle", { fill: "#005AA0", cx: 17.5, cy: 9.5, r: 1.5 }))));
}

function CardMulticolor24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fillRule: "nonzero", fill: "none" },
            React.createElement("path", { d: "M19.697 17H4.317C4.156 17 4 16.846 4 16.727V11h15.997v5.76a.205.205 0 01-.062.15.32.32 0 01-.238.09zm0-10c.083 0 .17.038.233.103a.22.22 0 01.067.17V9H4V7.272C4 7.153 4.155 7 4.318 7h15.379zm2.299.305a2.175 2.175 0 00-.628-1.592A2.342 2.342 0 0019.697 5H4.317C3.063 5 2 6.04 2 7.272v9.455C2 17.96 3.062 19 4.318 19h15.379a2.31 2.31 0 001.675-.7 2.171 2.171 0 00.625-1.573l-.001-9.422z", fill: "#005AA0" }),
            React.createElement("path", { fill: "#E30613", d: "M5.996 14h4v-2h-4z" }))));
}

function Accident20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M7 2v5H2v6h5v5h5.999v-5H18V7h-5.001V2H7zM3.999 9H9V4h2v5h5v2h-5v5H9v-5H3.999V9z", fill: "currentColor", fillRule: "evenodd" })));
}

function ArrowsApart20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M8.071.83L.48 7.461 8.071 14.3V11h5.933v-.799l2.487 2.301-2.487 2.32v-.796H9.003v2h3.001v3.247l7.512-6.784-7.512-6.69V9H6.07v.855L3.527 7.488 6.07 5.17V6h4.934V4H8.071z", fill: "currentColor", fillRule: "evenodd" })));
}

function ArrowEnclosed20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M10 17c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7m0-16c-4.962 0-9 4.038-9 9s4.038 9 9 9 9-4.038 9-9-4.038-9-9-9" }),
            React.createElement("path", { d: "M9.783 7.697L11.049 9H5v2h6.049l-1.266 1.304 1.434 1.393L14.81 10l-3.593-3.696z" }))));
}

function Attach20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 16, height: 18, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M6.846 13.19c1.18 2.204 2.534 2.745 4.434 1.858 1.901-.886 2.357-2.27 1.45-4.54L9.65 3.904l1.812-.845 3.102 6.654c1.307 3.261.475 5.79-2.438 7.148-2.913 1.358-5.385.37-7.067-2.776L1.182 5.772l-.04-.102C.457 3.654 1.207 2.01 3.2 1.082 5.188.155 6.932.628 8.058 2.432l.058.106 3.876 8.313.045.112c.468 1.432.087 2.636-1.16 3.218-1.248.582-2.416.1-3.213-1.177l-.058-.107-3.08-6.604 1.813-.845 3.053 6.546c.28.439.406.483.639.375.233-.109.279-.233.122-.73L6.331 3.443c-.572-.886-1.216-1.047-2.286-.548-1.068.499-1.35 1.085-1.026 2.085l3.827 8.211z", id: "attach-20_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M-2-1h20v20H-2z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#attach-20_svg__a" }))));
}

function Bankid20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M15.627 15.852h1.533c1.183 0 1.533.876 1.417 1.6-.1.706-.667 1.514-1.7 1.514H15.16l.467-3.114zm1 2.374c.517 0 .817-.253.9-.808.067-.404-.067-.808-.633-.808h-.3l-.25 1.633.283-.017zM14.027 15.852h1.083l-.483 3.098h-1.083zM10.727 15.852h.934l-.234 1.532.9-.825h1.15l-1.15 1.027.917 1.38H12.06l-.717-1.11h-.017l-.166 1.11h-.933zM7.611 16.56h.933l-.05.32c.3-.253.517-.354.817-.354.517 0 .767.32.683.858l-.25 1.582h-.933l.2-1.313c.033-.235-.033-.353-.217-.353-.15 0-.283.084-.416.252L8.16 18.95h-.933l.383-2.39zM6.728 18.983c-.467.034-.7-.017-.8-.219A1.54 1.54 0 015.11 19c-.533 0-.716-.27-.666-.59.016-.15.1-.285.25-.403.283-.253 1.016-.286 1.3-.488.016-.219-.067-.303-.334-.303-.316 0-.566.1-1.016.404l.1-.707c.383-.286.75-.404 1.183-.404.55 0 1.033.219.933.825l-.1.69c-.033.235-.033.32.233.32l-.266.64zm-.8-1.06c-.25.151-.717.134-.767.454-.016.152.067.27.217.27s.333-.068.467-.169c-.017-.05 0-.118.016-.219l.067-.336zM1.578 15.852h1.8c.767 0 .95.388.9.758-.05.286-.233.505-.583.64.433.168.6.42.533.824-.083.505-.517.876-1.083.876h-2.05l.483-3.098zm1.183 1.297c.35 0 .517-.186.55-.404.034-.236-.066-.404-.416-.404h-.317l-.133.808h.316zm-.2 1.346c.367 0 .567-.151.617-.454.033-.253-.1-.421-.45-.421h-.35l-.133.875h.317zM12.594 2H8.128l-.6 3.82h.766c.417 0 .817-.184.984-.47a.505.505 0 00.083-.236c0-.152-.1-.286-.217-.354-.3-.218-.35-.454-.35-.622v-.085c.067-.403.6-.841 1.317-.841.433 0 .75.1.95.286.166.168.25.404.2.64-.067.286-.35.521-.517.64-.433.302-.383.572-.35.656.083.235.433.387.7.387h1.167c1.583.017 2.433.74 2.15 2.457-.25 1.582-1.45 2.272-2.884 2.29l-.6 3.652h.834c3.55 0 6.432-2.306 7.016-5.925C19.493 3.801 16.66 2 12.594 2zM7.444 6.14h-.8c-.366 0-.85-.201-1-.589-.05-.134-.15-.589.467-1.026.217-.152.367-.32.383-.455a.353.353 0 00-.1-.353c-.116-.118-.383-.202-.716-.202-.567 0-.967.336-1 .572-.033.185.117.32.233.404.35.27.434.657.217 1.027-.233.37-.717.623-1.233.623h-.817c-.067.454-1.166 7.523-1.25 8.079h4.4c.017-.236.217-1.582.483-3.35l.733-4.73z" }))));
}

function BillsCoins20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M14.518 11.197l-3.911-.849c-.174-1.769-1.652-3.16-3.466-3.16a3.488 3.488 0 00-3.026 1.774l-.734-.15 1.176-5.437 11.102 2.382-1.141 5.44zm-7.377.99c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zM3.024 1L1 10.364l2.664.547c.117 1.824 1.624 3.276 3.477 3.276 1.34 0 2.494-.766 3.082-1.876l5.84 1.267 1.96-9.359L3.024 1z" }),
            React.createElement("path", { d: "M10.79 17.088c-.283 0-.49-.095-.725-.363a.448.448 0 01-.057-.087l-.053-.13c-.015-.028-.015-.186-.015-.27 0-.461.389-.85.85-.85.461 0 .851.389.851.85 0 .46-.39.85-.851.85m0-3.7a2.853 2.853 0 00-2.85 2.85c0 .287 0 .674.195 1.1.108.29.291.574.464.744a2.802 2.802 0 002.191 1.006 2.853 2.853 0 002.851-2.85 2.853 2.853 0 00-2.851-2.85" }))));
}

function Boat20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M6.237 5.48c-.353.903-1.1 3.195-1.155 3.336L3.218 8.09c.028-.07.775-2.363 1.168-3.368.023-.054.023-.054.053-.118a2.22 2.22 0 01.818-.916c.71-.455 1.804-.647 3.594-.687h2.327c1.775.035 2.873.228 3.585.69a2.249 2.249 0 01.82.939l-.013-.028.02.044.026.058.055.133c.562 1.655.944 2.745 1.142 3.254l-1.864.724c-.208-.534-.585-1.606-1.136-3.23a263.09 263.09 0 01-.02-.06l-.025-.054c0-.003 0-.003-.013-.029l.01.022a.17.17 0 00-.015-.026.26.26 0 00-.077-.07c-.304-.197-1.113-.34-2.515-.368H8.873c-1.42.032-2.229.175-2.535.371a.254.254 0 00-.078.069c-.01.015-.015.024-.012.017-.015.034-.015.034-.011.023zM1.106 17.257l1.088-1.678c.396.257.867.26 1.243.022a5.337 5.337 0 015.874-.02c.394.256.866.26 1.241.023a5.333 5.333 0 015.873-.023c.397.258.867.26 1.267.008l1.068 1.69a3.143 3.143 0 01-3.422-.02c-1.14-.736-2.554-.73-3.702.025a3.14 3.14 0 01-3.413-.025c-1.14-.737-2.553-.732-3.701.023a3.138 3.138 0 01-3.416-.025zm2.801-7.262l-.126.01c-.068 0-.138.04-.186.12-.048.079-.055.187-.032.243l1.624 3.413-1.804.863c-.685-1.433-.547-1.162-1.64-3.447a2.31 2.31 0 01.141-2.108A2.224 2.224 0 013.69 8.006L10 7.145l6.365.87a2.192 2.192 0 011.756 1.077c.385.638.432 1.423.116 2.16l-1.612 3.392-1.804-.864c.688-1.436.531-1.137 1.595-3.355a.329.329 0 00-.014-.31.199.199 0 00-.16-.104l-.104-.01L10 9.164l-6.093.832z" }),
            React.createElement("path", { d: "M9 2a1 1 0 112 0v2a1 1 0 11-2 0V2zM9 9h2v5H9z" }))));
}

function BreifcaseFirstAid20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M11 8H9v2H7v2h2v2h2v-2h2v-2h-2z" }),
            React.createElement("path", { d: "M17 15.5c0 .271-.229.5-.5.5H16V6h.5c.271 0 .5.229.5.5v9zm-3 .5H6V6h8v10zM4 16h-.5a.507.507 0 01-.5-.5v-9c0-.271.229-.5.5-.5H4v10zM8 4h4V3H8v1zm8.5 0H14V1H6v3H3.5A2.503 2.503 0 001 6.5v9C1 16.878 2.121 18 3.5 18h13c1.379 0 2.5-1.122 2.5-2.5v-9C19 5.122 17.879 4 16.5 4z" }))));
}

function Briefcase20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h20v20H0z" }),
            React.createElement("path", { d: "M14 2v3h2.5A2.5 2.5 0 0119 7.5v8a2.5 2.5 0 01-2.5 2.5h-13A2.5 2.5 0 011 15.5v-8A2.5 2.5 0 013.5 5H6V2h8zm3 7.999L14.333 12H5.667L3 10.001V15.5a.5.5 0 00.5.5h13a.5.5 0 00.5-.5V9.999zM16.5 7h-13a.5.5 0 00-.5.5v.001L6.333 10h7.334L17 7.5a.5.5 0 00-.5-.5zM12 4H8v1h4V4z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Calendar20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M16 6H4V4.33c0-.181.161-.326.345-.33H6v1h2V4h4v1h2V4h1.634c.205.004.366.149.366.33V6zm0 9.662a.331.331 0 01-.346.338H4.345A.33.33 0 014 15.662V8h12v7.662zM15.654 2H14V1h-2v1H8V1H6v1H4.325C3.021 2.026 2 3.05 2 4.33v11.332A2.317 2.317 0 004.345 18h11.309A2.317 2.317 0 0018 15.662V4.33c0-1.28-1.021-2.304-2.346-2.33z", fill: "currentColor", fillRule: "evenodd" })));
}

function CalendarCheck20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M16 6H4V4.33c0-.181.161-.326.346-.33H6v1h2V4h4v1h2V4h1.634c.205.004.366.149.366.33V6zm0 9.662a.331.331 0 01-.346.338H4.346A.331.331 0 014 15.662V8h12v7.662zM15.654 2H14V1h-2v1H8V1H6v1H4.325C3.021 2.026 2 3.05 2 4.33v11.332A2.317 2.317 0 004.346 18h11.308A2.317 2.317 0 0018 15.662V4.33c0-1.28-1.021-2.304-2.346-2.33z" }),
            React.createElement("path", { d: "M14.484 9.709l-1.41-1.418-3.914 3.892-1.448-1.48-1.424 1.405 2.858 2.908z" }))));
}

function CalendarCross20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M16 6H4V4.33c0-.181.161-.326.346-.33H6v1h2V4h4v1h2V4h1.634c.205.004.366.149.366.33V6zm0 9.662a.331.331 0 01-.346.338H4.346A.331.331 0 014 15.662V8h12v7.662zM15.654 2H14V1h-2v1H8V1H6v1H4.325C3.021 2.026 2 3.05 2 4.33v11.332A2.317 2.317 0 004.346 18h11.308A2.317 2.317 0 0018 15.662V4.33c0-1.28-1.021-2.304-2.346-2.33z" }),
            React.createElement("path", { d: "M7.965 15.45L10 13.415l2.035 2.035 1.414-1.414L11.414 12l2-2.001L12 8.586l-2 2-2-2L6.586 10l2 2-2.035 2.036z" }))));
}

function Car20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { transform: "translate(0 1)", fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M3 9.066l.992-3.094 1.524-2.997a.697.697 0 01.063-.063c.111-.1.28-.209.525-.32C6.908 2.23 8.18 2.002 10 2c1.819-.001 3.09.228 3.894.591.246.111.415.22.527.321.033.03.053.05.063.063l1.519 2.988L17 9.07V15h2V8.758l-1.142-3.559-1.631-3.21C15.882 1.39 14.623-.003 9.999 0 5.375.003 4.12 1.387 3.774 1.988l-1.638 3.22L1 8.754V15h2V9.066z", fillRule: "nonzero" }),
            React.createElement("path", { fillRule: "nonzero", d: "M11.978 5.003l-.396-.916 1.836-.794 1.604 3.71H6v-2zM2 16.003v-2h16v2zM2 13.003v-2h10v2zM13 13.003v-2h5v2zM1 7a1 1 0 110-2h1.5a1 1 0 110 2H1zM17.5 7a1 1 0 010-2H19a1 1 0 010 2h-1.5z" }),
            React.createElement("circle", { cx: 5.5, cy: 8.75, r: 1.25 }),
            React.createElement("circle", { cx: 14.5, cy: 8.75, r: 1.25 }),
            React.createElement("path", { d: "M17 17.5a1 1 0 01-1-1v-2h3v2a1 1 0 01-1 1h-1zM2 17.5a1 1 0 01-1-1v-2h3v2a1 1 0 01-1 1H2z", fillRule: "nonzero" }))));
}

function Card20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M16.697 14H3.317C3.156 14 3 13.846 3 13.727V8h13.997v5.76a.205.205 0 01-.062.15.32.32 0 01-.238.09zm0-9c.083 0 .17.038.233.103a.22.22 0 01.067.17V6H3v-.728C3 5.153 3.155 5 3.318 5h13.379zm2.299.305a2.175 2.175 0 00-.628-1.592A2.342 2.342 0 0016.697 3H3.317C2.063 3 1 4.04 1 5.272v8.455C1 14.96 2.062 16 3.318 16h13.379a2.31 2.31 0 001.675-.7 2.171 2.171 0 00.625-1.573l-.001-8.422z" }),
            React.createElement("path", { d: "M3.996 11h4V9h-4z" }))));
}

function CardBlock20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M10.008 12H2.992C3.004 12 3 4.009 3 4.009 3 4.002 15.006 4 15.006 4 14.999 4 15 9.063 15 9.063h2V4.005A2 2 0 0015.006 2H2.994A2.003 2.003 0 001 4.009v7.982C1 13.101 1.9 14 2.992 14h7.016v-2zm0 0H2.992C3.004 12 3 4.009 3 4.009 3 4.002 15.006 4 15.006 4 14.999 4 15 9.063 15 9.063h2V4.005A2 2 0 0015.006 2H2.994A2.003 2.003 0 001 4.009v7.982C1 13.101 1.9 14 2.992 14h7.016v-2z", fillRule: "nonzero" }),
            React.createElement("path", { d: "M3.996 10h3V8h-3z" }),
            React.createElement("path", { d: "M14.5 17a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0 2a5.5 5.5 0 110-11 5.5 5.5 0 010 11z", fillRule: "nonzero" }),
            React.createElement("path", { fillRule: "nonzero", d: "M10.086 10.5l7.414 7.414 1.414-1.414L11.5 9.086zM1.5 7h15V5h-15z" }))));
}

function Chat20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M12.998 2h-6A6.505 6.505 0 00.5 8.498a6.505 6.505 0 006.498 6.498h.804l4.196 4.154V13h-2v1.356l-1.374-1.36H6.998A4.503 4.503 0 012.5 8.498 4.503 4.503 0 016.998 4h6a4.503 4.503 0 014.498 4.498 4.503 4.503 0 01-4.498 4.498v2a6.505 6.505 0 006.498-6.498A6.505 6.505 0 0012.998 2", fill: "currentColor", fillRule: "evenodd" })));
}

function Check20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M14.907 5.1l-6.64 6.614-2.943-2.98L3.9 10.137l4.353 4.41 8.063-8.03z", fill: "currentColor", fillRule: "evenodd" })));
}

function CheckEnclosed20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M10 3c-3.859 0-7 3.14-7 7s3.141 7 7 7 7-3.14 7-7-3.141-7-7-7m0 16c-4.963 0-9-4.038-9-9s4.037-9 9-9 9 4.038 9 9-4.037 9-9 9" }),
            React.createElement("path", { d: "M8.854 14.247l-3.56-3.604L6.72 9.238l2.149 2.176L13.507 6.8l1.41 1.418z" }))));
}

function Chevron20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M8.014 4.6L6.6 6.014l4 4-4 4 1.414 1.414 4.001-4 1.413-1.415L12.015 8.6z", fill: "currentColor", fillRule: "evenodd" })));
}

function ChevronDown20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M15.6 8.014L14.186 6.6l-4 4-4-4-1.414 1.414 4 4.001 1.415 1.413 1.413-1.413z", fill: "currentColor", fillRule: "evenodd" })));
}

function ChevronLeft20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M12.186 15.6l1.414-1.414-4-4 4-4-1.414-1.414-4.001 4-1.413 1.415L8.185 11.6z", fill: "currentColor", fillRule: "evenodd" })));
}

function ChevronRight20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M8.014 4.6L6.6 6.014l4 4-4 4 1.414 1.414 4.001-4 1.413-1.415L12.015 8.6z", fill: "currentColor", fillRule: "evenodd" })));
}

function ChevronUp20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M4.6 12.186L6.014 13.6l4-4 4 4 1.414-1.414-4-4.001-1.415-1.413L8.6 8.185z", fill: "currentColor", fillRule: "evenodd" })));
}

function Clipboard20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M16 16.662a.331.331 0 01-.346.338H4.346A.331.331 0 014 16.662V4.33c0-.181.161-.326.346-.33H9v1H7v2h6V5h-2V4h4.634c.205.004.366.149.366.33v12.332zM11 2V1H9v1H4.325C3.021 2.027 2 3.05 2 4.33v12.332A2.317 2.317 0 004.346 19h11.308A2.317 2.317 0 0018 16.662V4.33c0-1.28-1.021-2.303-2.346-2.33H11z" }),
            React.createElement("path", { d: "M6 11h8V9H6zM6 15h8v-2H6z" }))));
}

function Clock20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M10 1c-4.961 0-9 4.039-9 9s4.039 9 9 9 9-4.039 9-9-4.039-9-9-9zm0 2c3.873 0 7 3.127 7 7s-3.127 7-7 7a6.99 6.99 0 01-7-7c0-3.873 3.127-7 7-7z" }),
            React.createElement("path", { d: "M11 9.465l3.305 2.203-1.11 1.664L9 10.535V5h2z" }))));
}

function Cross20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M14.014 4.6l-4 4-4-4L4.6 6.014l3.999 4-3.999 4 1.414 1.414 4-4 4 4 1.414-1.414-4-4 4-4z", fill: "currentColor", fillRule: "evenodd" })));
}

function CrossEnclosed20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M10 3c-3.859 0-7 3.14-7 7s3.141 7 7 7 7-3.14 7-7-3.141-7-7-7m0 16c-4.963 0-9-4.038-9-9s4.037-9 9-9 9 4.038 9 9-4.037 9-9 9" }),
            React.createElement("path", { d: "M14.425 13.01L11.414 10l3-3L13 5.586l-3 3-3-3L5.586 7l3 3-3.011 3.01 1.414 1.415 3.01-3.011 3.012 3.01z" }))));
}

function Document20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M3 1v18h14l-.005-14.414L13.415 1H3zm2 2h7.585l2.41 2.415L15 17H5V3z" }),
            React.createElement("path", { d: "M7 8h6V6H7zM7 11h6V9H7zM7 14h6v-2H7z" }))));
}

function Contentcard20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h20v20H0z" }),
            React.createElement("path", { d: "M19 3v14H1V3h18zm-2 2H3v10h14V5zm-7 2a3 3 0 013 3h-2a1 1 0 10-1 1v2a3 3 0 110-6z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Coins20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h20v20H0z" }),
            React.createElement("path", { d: "M9 17v2H1v-2h8zm10 0v2h-8v-2h8zM9 14v2H1v-2h8zm10 0v2h-8v-2h8zm-4-8a4 4 0 110 8 4 4 0 010-8zm-6 5v2H1v-2h8zm6-3a2 2 0 100 4 2 2 0 000-4zM9 8v2H1V8h8zm2-3v2H3V5h8zM9 2v2H1V2h8z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Dog20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M10.538 14.629l-.459 1.946a3.092 3.092 0 01-2.396-3.005 3.088 3.088 0 013.087-3.087 3.2 3.2 0 011.814.584l-1.137 1.646a1.212 1.212 0 00-.677-.23c-.598 0-1.087.485-1.087 1.087 0 .507.355.94.855 1.059zM7.541 17v2H3v-3.24a1.74 1.74 0 011.753-1.752H7v2H5V17h2.541zM3.883 4.409l-.023.113c-.038.29.028.615.208.914.407.72 1.33.962 2.075.54l.986 1.74c-1.695.962-3.843.397-4.788-1.27a3.432 3.432 0 01-.454-2.247l.35-1.79h2.621A4.64 4.64 0 018.197.999c2.427 0 4.59 1.879 4.803 4.342v.556c0 1.293-1.04 2.415-2.5 2.415S8 7.19 8 5.897V5h2v.897c0 .221.18.415.5.415s.5-.194.5-.415l.004-.468c-.117-1.32-1.394-2.43-2.807-2.43-.834 0-1.603.385-2.09 1.02l-.3.39H3.882z" }),
            React.createElement("path", { d: "M5 9h2v5.44H5zM17.014 12h2a3.922 3.922 0 01-3.914 3.915v-2A1.922 1.922 0 0017.014 12z" }),
            React.createElement("path", { d: "M9.85 8.183l.863-1.804.624.3.112.062c2.787 1.809 4.526 4.915 4.526 8.284 0 1.167-.184 2.29-.548 3.31L15.19 19H7.476v-2h6.266c.154-.62.233-1.285.233-1.975 0-2.66-1.367-5.122-3.562-6.572l-.564-.27z" }))));
}

function EllipsisEnclosed20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M12.75 16.436v.004h-.009c-.842.36-1.769.56-2.741.56-.972 0-1.899-.2-2.741-.56H7.16v-.047a7.042 7.042 0 01-3.6-3.652A6.954 6.954 0 013 10c0-.972.2-1.898.56-2.74a7.034 7.034 0 013.6-3.652V3.56h.099a6.98 6.98 0 015.482 0h.009v.005a7.038 7.038 0 013.69 3.695c.36.842.56 1.768.56 2.74 0 .973-.2 1.899-.56 2.74a7.038 7.038 0 01-3.69 3.696m3.69-12.71a8.967 8.967 0 00-12.88 0 8.963 8.963 0 000 12.548c.055.056.11.112.166.166A8.962 8.962 0 0010 19a8.962 8.962 0 006.274-2.56c.056-.054.111-.11.166-.166a8.965 8.965 0 000-12.547" }),
            React.createElement("path", { d: "M7.16 8.801a1.497 1.497 0 00-.85-.24c-.9 0-1.53.63-1.53 1.44 0 .81.72 1.44 1.53 1.44.322 0 .613-.104.85-.275.359-.259.59-.679.59-1.166 0-.507-.211-.943-.59-1.199M10 8.56c-.81 0-1.44.63-1.44 1.44 0 .81.63 1.44 1.44 1.44.81 0 1.44-.63 1.44-1.44 0-.81-.63-1.44-1.44-1.44M13.69 8.56c-.368 0-.687.109-.94.289a1.39 1.39 0 00-.59 1.15c0 .463.238.86.59 1.123.265.197.592.318.94.318.81 0 1.53-.63 1.53-1.44 0-.81-.72-1.44-1.53-1.44" }))));
}

function ExternalLink20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M12 2v2h2.586l-4.293 4.294 1.414 1.414L16 5.415V8h2V2z" }),
            React.createElement("path", { d: "M3 3v14h14.001l-.007-7.001-2 .002.005 5H5V5h5V3z" }))));
}

function ExternalLinkInline20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M10.005 4L10 5.75h2.84L8.1 10.5l1.4 1.4 4.75-4.74v2.835H16V4z" }),
            React.createElement("path", { d: "M4 5v11h11v-4h-2v2H6V7h2V5z" }))));
}

function Family20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M3 19H1v-5.469c0-2.316 1.454-4.145 3.846-4.519l.308 1.976C3.768 11.205 3 12.171 3 13.531V19z" }),
            React.createElement("path", { d: "M8.538 6C6.892 6 5.78 5.18 5.18 3.974l1.791-.89c.286.575.75.918 1.566.918h4.147l.177.778a5.5 5.5 0 11-1.191-2.356l-1.516 1.305A3.5 3.5 0 1011 6.009c0-.001-.82-.004-2.462-.008zM19.018 19h-2v-1.375c0-.817-.813-1.613-2.104-1.936l.485-1.94c2.098.524 3.619 2.015 3.619 3.876V19zM8 19h2v-1.375c0-.817.813-1.613 2.104-1.936l-.485-1.94C9.521 14.273 8 15.764 8 17.625V19z" }),
            React.createElement("path", { d: "M13.5 16a3.5 3.5 0 110-7 3.5 3.5 0 010 7zm0-2a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" }))));
}

function Flag20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M15 11.588c-1.655.159-2.846-.291-4.195-.804C9.273 10.202 7.547 9.56 5 9.74v-5.9c2.12-.338 3.55.233 5.052.847 1.376.563 2.914 1.187 4.948 1.039v5.86zm.795-7.991c-2.067.43-3.42-.12-4.986-.76C9.253 2.2 7.501 1.499 5 1.82V1H3v18.033h2v-7.287c2.184-.186 3.605.343 5.094.908 1.26.478 2.55.969 4.223.969.577 0 1.199-.058 1.88-.195l.803-.162V3.344l-1.205.253z", fill: "currentColor", fillRule: "evenodd" })));
}

function Gear20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M10.001 11.31a1.088 1.088 0 111.087-1.087c0 .599-.487 1.087-1.087 1.087m0-4.174a3.09 3.09 0 00-3.087 3.087 3.09 3.09 0 003.087 3.087 3.09 3.09 0 003.087-3.087 3.09 3.09 0 00-3.087-3.087" }),
            React.createElement("path", { d: "M15.123 10.861l-.244.649a6.495 6.495 0 01-1.119 1.892l-.455.538.947 1.636-1.503.879-.958-1.654-.715.159c-.808.179-1.515.158-2.124.006l-.731-.183-.968 1.672-1.503-.879.964-1.665-.501-.542c-.541-.586-.881-1.155-1.067-1.79l-.211-.718H3V9.134h1.879l.244-.649a6.508 6.508 0 011.119-1.892l.455-.537-.948-1.636 1.504-.88.958 1.654.715-.159a4.688 4.688 0 012.124-.006l.731.183.968-1.672 1.504.88-.964 1.664.5.542c.542.587.881 1.155 1.067 1.79l.212.718h1.934v1.727h-1.879zm3.879 2V7.134h-2.49a6.358 6.358 0 00-.772-1.293l1.241-2.143L12.024.8l-1.246 2.153a6.77 6.77 0 00-1.552.002L7.978.8 3.021 3.698l1.255 2.168a8.648 8.648 0 00-.749 1.268H1v5.727h2.49c.198.447.454.876.772 1.293L3.02 16.297l4.958 2.898 1.247-2.153c.507.058 1.037.06 1.552-.002l1.247 2.155 4.958-2.898-1.256-2.168c.287-.403.539-.83.749-1.268h2.527z" }))));
}

function Globe20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { fillRule: "nonzero", d: "M2.293 1.707L3.707.293l4.036 4.035-1.415 1.415zM11.793 11.207l1.414-1.414 4.038 4.037-1.415 1.415zM9 15h2v3H9z" }),
            React.createElement("path", { fillRule: "nonzero", d: "M7 19v-2h6v2zM13.5 7.561a3.5 3.5 0 10-7-.122 3.5 3.5 0 007 .122zm2 .035a5.5 5.5 0 11-11-.192 5.5 5.5 0 0111 .192z" }),
            React.createElement("path", { d: "M14.516 12.19c-2.534 2.446-6.62 2.412-9.11-.077l-.081-.083a6.509 6.509 0 01.16-9.192L4.095 1.4a8.5 8.5 0 1011.81 12.228l-1.39-1.438z" }))));
}

function Gravestones20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M5 12.437c0-2.082 1.028-3.68 2.685-4.813.958-.655 1.906-1.028 2.574-1.194l.241-.06.241.06c.668.166 1.616.539 2.574 1.194C14.972 8.757 16 10.355 16 12.437V19H5v-6.563zm5.163-3.87a6.834 6.834 0 00-1.348.708C7.659 10.065 7 11.09 7 12.437V17h7v-4.563c0-1.347-.66-2.372-1.815-3.162a6.834 6.834 0 00-1.685-.832 7.026 7.026 0 00-.337.123z" }),
            React.createElement("path", { d: "M3 13.004h2.5v2H1V9.088C1 6.994 2.017 5.383 3.66 4.24c.95-.663 1.892-1.04 2.556-1.208l.247-.063.246.063c.664.17 1.603.55 2.552 1.214.298.208.578.435.837.681a5.79 5.79 0 011.454 2.147l-1.87.71a3.804 3.804 0 00-.961-1.407 5.249 5.249 0 00-.607-.493 6.714 6.714 0 00-1.654-.837 6.715 6.715 0 00-1.658.835C3.656 6.678 3 7.717 3 9.087v3.916zM13.652 3.14a6.199 6.199 0 00-1.201.603c-.366.24-.68.51-.928.81l-1.54-1.277a6.118 6.118 0 011.372-1.206c.874-.572 1.736-.897 2.346-1.043l.23-.055.232.055c.611.144 1.474.468 2.35 1.038C18.042 3.062 19 4.481 19 6.34v6.044h-4.315v-2H17V6.339c0-1.097-.568-1.94-1.58-2.598a6.202 6.202 0 00-1.486-.7c-.08.025-.175.058-.282.099z" }))));
}

function GrowthArrow20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M12.007 5v2.001h2.586l-4.587 4.585-2.999-2.999L1.3 14.293l1.414 1.414 4.293-4.293 2.999 3 6.001-5.999V11h1.999V5z", fill: "currentColor", fillRule: "evenodd" })));
}

function Heart20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M6.127 4.015c-.809 0-1.618.3-2.22.902A3.115 3.115 0 003 7.137c0 .848.322 1.636.907 2.22L10 15.452l6.093-6.093A3.112 3.112 0 0017 7.138c0-.847-.322-1.636-.907-2.221-1.204-1.204-3.238-1.203-4.441 0L10 6.572 8.348 4.917a3.135 3.135 0 00-2.221-.902zM10 18.279l-7.507-7.507A5.097 5.097 0 011 7.138a5.1 5.1 0 011.493-3.635 5.147 5.147 0 017.269 0l.238.239.238-.24a5.146 5.146 0 017.269 0A5.1 5.1 0 0119 7.139c0 1.38-.53 2.672-1.493 3.634L10 18.279z", fill: "currentColor", fillRule: "evenodd" })));
}

function Heartbeat20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M3.395 3.392A1.29 1.29 0 014.325 3c.354 0 .684.14.93.392l1.248 1.284 1.249-1.284c.491-.504 1.369-.504 1.859 0 .526.54.526 1.453.001 1.993L6.503 8.58 3.395 5.385a1.458 1.458 0 010-1.993zm3.108 8.059l4.543-4.672c1.281-1.318 1.281-3.463-.001-4.782C9.855.773 7.769.7 6.503 1.82A3.266 3.266 0 004.326 1h-.001c-.899 0-1.738.354-2.364.998C.68 3.316.68 5.46 1.961 6.778l4.542 4.673zM18.57 13l-3.55-5.915-4.92 7.874-1.988-3.97L5.514 15h-4.51v2H6.6l1.288-1.989 2.018 4.03 5.079-8.126L17.436 15h1.568v-2z" }))));
}

function House20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M10.002 1.75L2 7.867v9.142h2V8.855l6.002-4.588L16 8.855v8.154h2V7.867z" }),
            React.createElement("path", { d: "M7 10.009v7h2v-5h2v5h2v-7z" }))));
}

function IdCard20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M17 14.2c0 .394-.344.8-.8.8-7.717.02-11.85.02-12.4 0-.347 0-.8-.39-.8-.8V5.8c0-.441.359-.8.8-.8h12.4c.441 0 .8.359.8.8v8.4zM3.8 3a2.794 2.794 0 00-2.672 2.008A2.77 2.77 0 001 5.8v8.4C1 15.813 2.313 17 3.8 17h12.4c1.613 0 2.8-1.25 2.8-2.8V5.8C19 4.256 17.744 3 16.2 3H3.8z" }),
            React.createElement("path", { d: "M7.5 7v1c-.55 0-1 .45-1 1 0 .551.45 1 1 1s1-.449 1-1c0-.55-.45-1-1-1V7zm0 0V6c1.655 0 3 1.345 3 3 0 1.656-1.345 3-3 3s-3-1.344-3-3c0-1.655 1.345-3 3-3v1z" }),
            React.createElement("path", { d: "M12.5 15h-2a3 3 0 00-6 0h-2a5 5 0 1110 0zM12 9h4V7h-4zM12 12h4v-2h-4z" }))));
}

function HouseSun20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M16 1h-2c0 2.757 2.243 5 5 5V4c-1.682 0-3-1.318-3-3zM11.673 6.913l1.414 1.414 2.12-2.12-1.414-1.414zM10 3h3V1h-3zM17 10h2V7h-2zM8.002 5.741L1 11.094V19h2v-6.918L8.002 8.26l5 3.823V19h2v-7.906z" }),
            React.createElement("path", { d: "M5 19h2v-4h2v4h2v-6H5z" }))));
}

function InfoEnclosed20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M10 17c-3.859 0-7-3.14-7-7 0-1.128.274-2.19.75-3.135C4.903 4.577 7.268 3 10 3s5.097 1.577 6.25 3.865c.476.945.75 2.007.75 3.135 0 3.86-3.141 7-7 7m6.25-13.462a8.96 8.96 0 00-12.5 0A8.97 8.97 0 001 10c0 4.962 4.037 9 9 9s9-4.038 9-9a8.97 8.97 0 00-2.75-6.462" }),
            React.createElement("path", { d: "M9 8.8V15h2V8.8zM10 4.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5" }))));
}

function Institution20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M3 16h2V8H3zM1 19h18v-2H1zM10 .848L2.721 5H1v2h2.252L10 3.151 16.789 7H19V5.022h-1.693zM7 16h2V8H7zM11 16h2V8h-2zM15 16h2V8h-2z" }))));
}

function Logout20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M14.782 7.697L16.047 9h-6.05v2h6.05l-1.265 1.303 1.434 1.394L19.808 10l-3.592-3.696-1.434 1.393zm2.217 2.282l.02.02-.02.023v-.043z" }),
            React.createElement("path", { d: "M8.907 16a5.83 5.83 0 01-4.176-1.75c-2.313-2.344-2.313-6.157 0-8.5A5.83 5.83 0 018.907 4a5.83 5.83 0 014.176 1.75l1.424-1.405A7.818 7.818 0 008.907 2a7.818 7.818 0 00-5.6 2.345c-3.077 3.118-3.077 8.191 0 11.31A7.818 7.818 0 008.907 18a7.818 7.818 0 005.6-2.345l-1.423-1.405A5.83 5.83 0 018.908 16" }))));
}

function Menu20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M3 6h14V4H3zM3 11h14V9H3zM3 16h14v-2H3z" }))));
}

function Minpension20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M18.935 8.836l-6.054 6.132-.792-.17 2.376-6.814-5.657 6.984-.793-.227 2.15-7.154-6.336 7.381-.566-.454L5.98 7.19l-4.922 4.713C1.962 15.934 5.583 19 9.882 19c4.98 0 9.053-4.032 9.053-8.972.113-.397.056-.795 0-1.192zm-13.409 2.84l5.77-6.928.736.284-2.093 6.984 5.77-7.212.736.284-2.489 7.382 4.752-4.997C17.633 3.726 14.126 1 10.052 1 5.073 1 1 5.032 1 9.972c0 .17 0 .397.057.567l6.166-5.791.736.227-2.433 6.7z", fill: "currentColor", fillRule: "evenodd" })));
}

function Letter20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M3 15h14V5H3v10zM19 3v14H1V3h18z" }),
            React.createElement("path", { d: "M10.038 9.375L3.678 4 2.322 5.472l7.72 6.625 7.636-6.627-1.358-1.468zM17.733 14.5l-3.5-4-1.466 1.36 3.5 4zM3.733 15.86l3.5-4-1.466-1.36-3.5 4z" }))));
}

function LoginDevice20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h20v20H0z" }),
            React.createElement("g", { transform: "translate(4 2)", fill: "currentColor" },
                React.createElement("path", { d: "M2-1h8a3 3 0 013 3v12a3 3 0 01-3 3H2a3 3 0 01-3-3V2a3 3 0 013-3zm0 2a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V2a1 1 0 00-1-1H2z", fillRule: "nonzero" }),
                React.createElement("circle", { cx: 3.5, cy: 8.5, r: 1.5 }),
                React.createElement("circle", { cx: 3.5, cy: 12.5, r: 1.5 }),
                React.createElement("circle", { cx: 8.5, cy: 8.5, r: 1.5 }),
                React.createElement("circle", { cx: 8.5, cy: 12.5, r: 1.5 }),
                React.createElement("path", { fillRule: "nonzero", d: "M2 5h8V3H2z" })))));
}

function NotificationEnvelope20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M3 15h14V5H3v10zM19 3v14H1V3h18z" }),
            React.createElement("path", { d: "M10.038 9.375L3.678 4 2.322 5.472l7.72 6.625 7.636-6.627-1.358-1.468zM17.733 14.5l-3.5-4-1.466 1.36 3.5 4zM3.733 15.86l3.5-4-1.466-1.36-3.5 4z" }))));
}

function NotificationFlag20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M15 11.588c-1.655.159-2.846-.291-4.195-.804C9.273 10.202 7.547 9.56 5 9.74v-5.9c2.12-.338 3.55.233 5.052.847 1.376.563 2.914 1.187 4.948 1.039v5.86zm.795-7.991c-2.067.43-3.42-.12-4.986-.76C9.253 2.2 7.501 1.499 5 1.82V1H3v18.033h2v-7.287c2.184-.186 3.605.343 5.094.908 1.26.478 2.55.969 4.223.969.577 0 1.199-.058 1.88-.195l.803-.162V3.344l-1.205.253z", fill: "currentColor", fillRule: "evenodd" })));
}

function NotificationSwish20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M7.041 17.452l.341-.42c2.318.652 4.869-.193 6.425-2.095 2.082-2.558 1.725-6.424-.892-8.566l-.476-.357 2.164-2.535.438.329C16.904 5.288 18 7.534 18 10c0 4.438-3.562 8-8 8a8.063 8.063 0 01-2.959-.548zm-2.027-1.205A8.002 8.002 0 012 10c0-4.438 3.562-8 8-8 1.151 0 2.246.219 3.233.712l-.361.398c-2.488-.774-5.122-.068-6.739 1.952-2.082 2.618-1.665 6.366.952 8.567l.476.357-2.164 2.589-.383-.328z", fill: "currentColor", fillRule: "evenodd" })));
}

function Paper20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M3 1v18h14l-.005-12.414L11.414 1H3zm2 2h4v6h5.996L15 17H5V3zm6 .415L14.581 7H11V3.415z", fill: "currentColor", fillRule: "evenodd" })));
}

function PdfDoc20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { fillRule: "nonzero", d: "M4 17V3h7.586L14 5.414V7h2V4.586L12.414 1H2v18h14.002l-.009-4.002-2 .004.005 1.998z" }),
            React.createElement("path", { d: "M6 8.05v5.942h1.207v-1.683h.875c1.14 0 1.93-.842 1.93-2.1 0-1.292-.808-2.159-1.98-2.159H6zm1.181 3.17V9.156h.901c.451 0 .774.408.774 1.02 0 .629-.323 1.046-.774 1.046h-.9zm3.562-3.17V14h1.904c1.505 0 2.508-1.198 2.508-2.992 0-1.776-1.003-2.958-2.508-2.958h-1.904zm1.198 4.802V9.197h.689c.799 0 1.326.732 1.326 1.82 0 1.104-.527 1.835-1.326 1.835h-.689zm5.27-.969h1.718V10.77h-1.717V9.164h1.929V8.05h-3.128V14h1.198v-2.117z" }))));
}

function Pencil20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M2 1v18h14.001l-.007-6.001-2 .002.005 4H4v-14h9V1z" }),
            React.createElement("path", { d: "M16.432 6.317l-.739-.739L10 11.272v.739h.739l5.693-5.694zm-4.865 7.694H8v-3.568l7.693-7.693 3.568 3.567-7.694 7.694z" }))));
}

function Pension20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M10 5.275L4.321 16h11.356L9.999 5.275zM10 1l9 17H1l9-17z" }),
            React.createElement("path", { d: "M7 10V8h6v2zM4.5 14v-2h11v2z" }))));
}

function PensionCapital20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M14.619 14l1.058 2H4.32l1.059-2H3.118L1 18h18l-2.118-4zM16.352 13l-2.117-4h-8.47l-2.118 4zM10 1L6.293 8h7.412z" }))));
}

function PensionOccupational20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M16.353 13l-2.118-4h-8.47l-2.118 4zM14.619 14l1.059 2H4.322l1.058-2H3.118L1 18h18l-2.118-4zM10 1L6.294 8h2.262L10 5.274 11.442 8h2.263z" }))));
}

function PensionPrivate20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M5.297 13h9.406v-2H5.297zM6.294 8h7.412L9.999 1.001z" }),
            React.createElement("path", { d: "M5.91 13l2.117-4H5.764l-2.118 4zM16.353 13l-2.118-4H11.97l2.118 4zM14.619 14l1.059 2H4.322l1.059-2H3.118L1 18h18l-2.118-4z" }))));
}

function Percent20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M14.5 18a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0-2a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM5.5 9a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0-2a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM14.714 2.382l-11 14 1.572 1.236 11-14z" }))));
}

function PensionState20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M5.764 9l-2.117 4H5.91l1.06-2h6.06l1.06 2h2.262l-2.118-4zM6.294 8h2.263l1.442-2.724L11.442 8h2.264L9.999 1zM3.117 14L1 18H19l-2.118-4z" }))));
}

function Phone20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M5.122 4.791c-.258.844-.638 3.224 1.395 7.102 1.417 2.704 2.9 4.001 3.894 4.613 1.253.772 2.095.7 2.365.555l1.686-.909c.037-.02.091-.175.066-.22l-1.523-2.905a.138.138 0 00-.188-.055l-1.846.996h-.24c-.582-.002-1.745-.361-3-2.756-1.265-2.414-.899-3.576-.568-4.054l.13-.185 1.835-.992c.046-.026.086-.183.068-.216L7.672 2.857a.128.128 0 00-.08-.07.125.125 0 00-.101.011l-1.689.91c-.202.11-.487.45-.68 1.083m10.234 13.026l-1.682.906c-1.092.59-2.682.361-4.255-.609-1.194-.735-2.959-2.26-4.576-5.344C2.485 8.27 2.99 5.305 3.315 4.239c.316-1.033.88-1.81 1.591-2.193l1.684-.908A2.004 2.004 0 018.144.982c.522.16.949.515 1.202 1l1.522 2.903c.489.928.084 2.258-.843 2.758l-1.304.704c.009.237.087.85.684 1.988.569 1.088 1.016 1.506 1.242 1.662l1.275-.689a2.017 2.017 0 011.554-.154c.52.16.947.512 1.201.995l1.524 2.907c.245.468.293 1.033.135 1.55-.159.52-.516.96-.98 1.21z", fill: "currentColor", fillRule: "evenodd" })));
}

function PhoneBroken20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M3 4.319C3 3.628 3.625 3 4.308 3h6.384C11.375 3 12 3.628 12 4.319V15.68c0 .691-.624 1.319-1.308 1.319H4.308A1.31 1.31 0 013 15.681V4.32zM4.308 19h6.384C12.482 19 14 17.474 14 15.681V4.32C14 2.525 12.482 1 10.692 1H4.308C2.518 1 1 2.525 1 4.319V15.68A3.31 3.31 0 004.308 19z" }),
            React.createElement("path", { d: "M11.02 6.002H6.621L5.587 4.019 3.85 5l1.558 3.002H9.02V9.8l4.061 3.049-.014-2.512-2.047-1.536zM9 14.499a1.5 1.5 0 11-3 .001 1.5 1.5 0 013-.001zM16 11V9h3v2zM15.58 8.046l-.97-1.75 2.624-1.454.97 1.75zM14.606 13.529l1.03-1.715 2.571 1.545-1.03 1.715z" }))));
}

function Pin20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M5.5 7.538C5.5 5.036 7.519 3 10 3s4.5 2.036 4.5 4.538c0 1.177-.473 2.325-1.315 3.216L10 13.96l-3.167-3.189C5.973 9.863 5.5 8.715 5.5 7.538zm9.121 4.607c1.212-1.28 1.879-2.917 1.879-4.607C16.5 3.933 13.584 1 10 1S3.5 3.933 3.5 7.538c0 1.69.667 3.326 1.896 4.625L9.207 16H4v2h12v-2h-5.207l3.828-3.855z" }),
            React.createElement("path", { d: "M10 8.501c-.57 0-1-.43-1-1A.978.978 0 0110 6.5c.57 0 1 .43 1 1.001h2A2.969 2.969 0 0010 4.5c-1.682 0-3 1.318-3 3.001 0 1.682 1.318 3 3 3v-2z" }))));
}

function Plus20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M9 4v5H4v2h5v5h2.001v-5H16V9h-4.999V4z", fill: "currentColor", fillRule: "evenodd" })));
}

function Print20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h20v20H0z" }),
            React.createElement("path", { d: "M5 15H1V9.5A3.5 3.5 0 014.5 6H5V1h10v5h.5A3.5 3.5 0 0119 9.5V15h-4v4H5v-4zm0-2v-2h10v2h2V9.5A1.5 1.5 0 0015.5 8h-11A1.5 1.5 0 003 9.5V13h2zm2-7h6V3H7v3zm0 7v4h6v-4H7z", fill: "currentColor", fillRule: "nonzero" }))));
}

function RadioEnclosed20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M10 3c-3.859 0-7 3.14-7 7s3.141 7 7 7 7-3.14 7-7-3.141-7-7-7m0 16c-4.963 0-9-4.038-9-9s4.037-9 9-9 9 4.038 9 9-4.037 9-9 9" }),
            React.createElement("path", { d: "M10 11.44c-.81 0-1.44-.63-1.44-1.44 0-.81.63-1.44 1.44-1.44.81 0 1.44.63 1.44 1.44 0 .81-.63 1.44-1.44 1.44" }))));
}

function RadioRound20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M10 17c-3.859 0-7-3.14-7-7s3.141-7 7-7 7 3.14 7 7-3.141 7-7 7m0-16c-4.963 0-9 4.038-9 9s4.037 9 9 9 9-4.038 9-9-4.037-9-9-9" }),
            React.createElement("path", { d: "M10 11.56A1.58 1.58 0 018.44 10c0-.846.714-1.56 1.56-1.56.846 0 1.56.714 1.56 1.56A1.58 1.58 0 0110 11.56m0-6A4.445 4.445 0 005.56 10 4.445 4.445 0 0010 14.44 4.445 4.445 0 0014.44 10 4.445 4.445 0 0010 5.56" }))));
}

function Screen20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M17 12.5c0 .271-.229.5-.5.5h-13a.507.507 0 01-.5-.5v-8c0-.271.229-.5.5-.5h13c.271 0 .5.229.5.5v8zM3.5 2A2.503 2.503 0 001 4.5v8C1 13.878 2.122 15 3.5 15H9v1H5v2h10v-2h-4v-1h5.5c1.378 0 2.5-1.122 2.5-2.5v-8C19 3.122 17.878 2 16.5 2h-13z", fill: "currentColor", fillRule: "evenodd" })));
}

function Search20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M17.638 18.954l-3.804-3.803 1.317-1.316 3.803 3.803zM8.354 2.862a5.499 5.499 0 00-5.492 5.493 5.499 5.499 0 005.492 5.492 5.499 5.499 0 005.493-5.492 5.499 5.499 0 00-5.493-5.493m0 12.847C4.3 15.71 1 12.41 1 8.355 1 4.299 4.3 1 8.354 1c4.056 0 7.355 3.3 7.355 7.355 0 4.055-3.3 7.354-7.355 7.354" }))));
}

function Share20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h20v20H0z" }),
            React.createElement("path", { d: "M15 1a3 3 0 11-1.911 5.313L7.94 9.402a3.014 3.014 0 010 1.196l5.149 3.09a3 3 0 11-1.03 1.716l-5.149-3.09a3 3 0 110-4.627l5.15-3.089A3 3 0 0115 1zm0 14a1 1 0 100 2 1 1 0 000-2zM5 9a1 1 0 100 2 1 1 0 000-2zm10-6a1 1 0 100 2 1 1 0 000-2z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Shield20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M15 1H5c0 1.53-1.438 3-3 3v6.794c0 4.644 8 8.306 8 8.306s8-3.537 8-8.306V4c-1.47 0-3-1.5-3-3m-1.517 2A5.605 5.605 0 0016 5.517v5.277c0 2.314-3.624 4.85-5.99 6.079C7.638 15.614 4 13.051 4 10.794V5.55A5.299 5.299 0 006.55 3h6.933" }),
            React.createElement("path", { fillRule: "nonzero", d: "M6.5 7.414L7.914 6l5.657 5.657-1.414 1.414z" }),
            React.createElement("path", { fillRule: "nonzero", d: "M12.157 6l1.414 1.414-5.657 5.657L6.5 11.657z" }))));
}

function Star20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { id: "star-20_svg__a", d: "M18 17.493V0H0v17.493z" })),
        React.createElement("g", { transform: "translate(1 1.1)", fill: "none", fillRule: "evenodd" },
            React.createElement("mask", { id: "star-20_svg__b", fill: "#fff" },
                React.createElement("use", { xlinkHref: "#star-20_svg__a" })),
            React.createElement("path", { d: "M9 11.82c.21 0 .42.065.597.196l2.441 1.815-.95-2.955a.999.999 0 01.36-1.11l2.498-1.842-3.065.007h-.002a1 1 0 01-.953-.698L9 4.311l-.926 2.922a1.01 1.01 0 01-.955.698l-3.065-.007 2.5 1.841a.999.999 0 01.358 1.111l-.95 2.955 2.441-1.815c.178-.13.387-.197.597-.197m4.944 5.674a.998.998 0 01-.596-.197L9 14.066l-4.348 3.23a1 1 0 01-1.548-1.109l1.684-5.238-4.38-3.226A1.001 1.001 0 011 5.918h.002l5.388.012L8.047.698a1 1 0 011.906 0L11.61 5.93l5.388-.012H17a1 1 0 01.593 1.805l-4.38 3.226 1.683 5.238a.999.999 0 01-.952 1.306", fill: "currentColor", mask: "url(#star-20_svg__b)" }))));
}

function Suitcase20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { transform: "translate(1 1)", fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M2.5 5c-.274 0-.5.226-.5.5v9c0 .274.226.5.5.5h13c.274 0 .5-.226.5-.5v-9c0-.274-.226-.5-.5-.5h-13zm0-2h13C16.879 3 18 4.122 18 5.5v9c0 1.378-1.121 2.5-2.5 2.5h-13A2.503 2.503 0 010 14.5v-9C0 4.122 1.121 3 2.5 3z", fillRule: "nonzero" }),
            React.createElement("path", { fillRule: "nonzero", d: "M3.443 9.3L2.7 7.443 7.057 5.7 7.8 7.557z" }),
            React.createElement("circle", { cx: 7.5, cy: 10.5, r: 1.5 }),
            React.createElement("circle", { cx: 13, cy: 8, r: 2 }),
            React.createElement("path", { fillRule: "nonzero", d: "M.086 11.5L1.5 10.086 6.914 15.5 5.5 16.914zM12.5 16.914L11.086 15.5l5.414-5.414 1.414 1.414zM14 4.5h-2C12 3.151 10.684 2 9 2S6 3.151 6 4.5H4C4 1.983 6.266 0 9 0s5 1.983 5 4.5z" }))));
}

function Sustainability20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h20v20H0z" }),
            React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
                React.createElement("path", { d: "M8.66 19.644l7.2-12.134-1.72-1.02-7.2 12.133z" }),
                React.createElement("path", { d: "M17 10c0 1.934-1.866 4-3.042 4-.734 0-1.31-.249-1.793-.77l-1.467 1.359c.864.932 1.972 1.411 3.26 1.411C16.287 16 19 12.996 19 10c0-1.856-.168-4.55-.504-8.094L18.39.79l-1.095.23c-3.306.694-5.935 1.746-7.885 3.172-2.937 2.147-2.541 6.263-.228 8.76l1.467-1.36c-1.594-1.72-1.859-4.47-.059-5.786 1.487-1.087 3.493-1.95 6.019-2.578C16.869 6.16 17 8.42 17 10z" }),
                React.createElement("path", { d: "M11.923 6.615l-1.846.77L12 12h4v-2h-2.667zM9.777 16.514L6.31 12.228l-1.555 1.258 3.469 4.286z" }),
                React.createElement("path", { d: "M5.45 11.095c.889.814.926 1.61.512 2.119l1.553 1.26c1.066-1.314.973-3.309-.716-4.854-1.153-1.055-2.663-1.79-4.516-2.216l-.924-.212-.26.911c-1.094 3.814-1.094 6.332.275 7.622 1.015.958 2.43.958 4.08.177l-.857-1.808c-.983.466-1.544.466-1.852.176-.557-.525-.616-2.095.02-4.662 1.098.355 1.99.852 2.684 1.487z" })))));
}

function Tag20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M3.414 11.004L9 16.59l8.004-8.003L17 5.419l-2.415-2.415L11.418 3l-8.004 8.003zm5.586 8a.997.997 0 01-.707-.293l-7-7a.999.999 0 010-1.414l9.004-9.004A1 1 0 0111.004 1h.001l3.996.004c.265 0 .518.105.706.293l3 3a1 1 0 01.293.706l.004 3.996c0 .266-.106.52-.293.708L9.707 18.71a.997.997 0 01-.707.293z" }),
            React.createElement("path", { d: "M13 8.5c-.484 0-.87-.194-1.161-.532a1.046 1.046 0 01-.242-.388C11.5 7.388 11.5 7.194 11.5 7c0-.823.677-1.5 1.5-1.5s1.5.677 1.5 1.5-.677 1.5-1.5 1.5" }))));
}

function Text1Round20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M10 17c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7m0-16c-4.962 0-9 4.038-9 9s4.038 9 9 9 9-4.038 9-9-4.038-9-9-9" }),
            React.createElement("path", { d: "M10.926 5.705H8.288v1.403h1.007v5.614h-1.15V14.1h3.968v-1.38h-1.187z" }))));
}

function Text2Round20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M10 3c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7m0 16c-4.962 0-9-4.038-9-9s4.038-9 9-9 9 4.038 9 9-4.038 9-9 9" }),
            React.createElement("path", { d: "M9.307 8.175H7.88c-.012-1.643.85-2.59 2.267-2.59 1.967 0 2.89 2.386 1.523 4.617l-1.427 2.338h2.183v1.56h-4.63v-.384l2.483-4.186c.239-.408.515-.887.515-1.379 0-.684-.252-1.032-.72-1.032-.503 0-.767.361-.767 1.056" }))));
}

function Text3Round20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M10 3c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7m0 16c-4.962 0-9-4.038-9-9s4.038-9 9-9 9 4.038 9 9-4.038 9-9 9" }),
            React.createElement("path", { d: "M9.083 11.641c.024.624.42 1.032.996 1.032.563 0 .947-.504.947-1.27-.024-1.345-1.115-1.536-1.991-1.345v-.252l1.188-2.674H7.872V5.704h4.545v.252l-1.427 2.94c1.128.226 1.643 1.33 1.643 2.493 0 1.703-1.007 2.831-2.53 2.831-1.476 0-2.471-1.03-2.507-2.579h1.487z" }))));
}

function ThumbsUp20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h20v20H0z" }),
            React.createElement("path", { d: "M9.826 1.333a1 1 0 011.293-.17c.515.338.925.926 1.296 1.767a1 1 0 01.047.677l-1.03 3.615H18a1 1 0 011 1v2.667a1 1 0 01-.09.416l-3.25 7.11a1 1 0 01-.91.585H5a1 1 0 01-1-1V8.222a1 1 0 01.255-.667zM1.011 18.99l.005-5.492.006-5.5 2 .008-.011 10.992H3l-1.989-.008zm9.328-15.231L6 8.605V17h8.108L17 10.671V9.222h-6.893a1 1 0 01-.962-1.274l1.194-4.19zm.2-.7l-.104.362c.024.047.049.096.073.148l.37-.413-.34-.097z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Thumbup20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h20v20H0z" }),
            React.createElement("path", { d: "M9.826 1.333a1 1 0 011.293-.17c.515.338.925.926 1.296 1.767a1 1 0 01.047.677l-1.03 3.615H18a1 1 0 011 1v2.667a1 1 0 01-.09.416l-3.25 7.11a1 1 0 01-.91.585H5a1 1 0 01-1-1V8.222a1 1 0 01.255-.667zM1.011 18.99l.005-5.492.006-5.5 2 .008-.011 10.992H3l-1.989-.008zm9.328-15.231L6 8.605V17h8.108L17 10.671V9.222h-6.893a1 1 0 01-.962-1.274l1.194-4.19zm.2-.7l-.104.362c.024.047.049.096.073.148l.37-.413-.34-.097z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Trash20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M4 6l1 12h10l1-12H4zm2.174 2h7.652l-.666 8H6.84l-.666-8zM11.846 3H4v2h12V3zM8 3h4V1H8z" }))));
}

function Umbrella20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M10 8.814a5.007 5.007 0 00-3.5-1.443c-.657 0-1.297.132-1.889.376.972-2.019 3.002-3.412 5.343-3.412 2.32 0 4.386 1.402 5.395 3.396a4.946 4.946 0 00-1.849-.36A5.007 5.007 0 0010 8.814zM11 1H9v1.4c-3.937.482-7 3.902-7 8.042v.967h1.689s.001-.156.182-.475c.536-.95 1.568-1.563 2.629-1.563 1.022 0 1.932.525 2.5 1.39V16c0 .292-.224.53-.5.53s-.5-.238-.5-.53H6c0 1.394 1.122 2.53 2.5 2.53 1.325 0 2.402-1.053 2.484-2.374l.016-5.42c.562-.834 1.516-1.366 2.5-1.366 1.094 0 2.077.584 2.629 1.562.1.176.171.476.171.476H18v-.967c0-4.112-3.057-7.51-7-8.03V1z", fill: "currentColor", fillRule: "evenodd" })));
}

function Triangle20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M6 5.75v8.509l7.025-4.255L6 5.75zM4 2.2l12.886 7.804L4 17.808V2.2z", fill: "currentColor", fillRule: "nonzero" })));
}

function User20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M10.014 15.85c-3.61 0-5.294-.482-5.947-.745.168-1.383.859-4.848 3.517-6.139.73.577 1.633.934 2.623.934a4.22 4.22 0 002.462-.797c2.457 1.374 3.127 4.647 3.29 5.994-.682.28-2.368.753-5.945.753zM10.207 3c1.286 0 2.33 1.1 2.33 2.45 0 1.351-1.044 2.45-2.33 2.45-1.285 0-2.331-1.099-2.331-2.45C7.876 4.1 8.922 3 10.206 3zm7.806 12.617c-.008-.246-.235-5.674-4.006-8.077a4.485 4.485 0 00.53-2.09c0-2.454-1.942-4.45-4.33-4.45C7.82 1 5.876 2.996 5.876 5.45c0 .692.168 1.34.444 1.925-4.05 2.303-4.297 7.99-4.305 8.242L2 16.052l.309.307c.35.35 1.947 1.491 7.705 1.491s7.354-1.14 7.705-1.49l.309-.308-.015-.435z", fill: "currentColor", fillRule: "evenodd" })));
}

function Wallet20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M18 9h-1V6H4v2h11v1h-1v2h2v1h-2v2h1v1H3.89a.89.89 0 01-.89-.89V5.89A.89.89 0 013.89 5H16V3H3.89A2.893 2.893 0 001 5.89v8.22A2.893 2.893 0 003.89 17H17v-3h1V9z", fill: "currentColor", fillRule: "evenodd" })));
}

function WalletMinus20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M6 17c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zM19 7h-1V4H6v2h10v1h-1v2h2v1h-2v2h1v1h-4c0-3.309-2.691-6-6-6-.341 0-.674.035-1 .09v-3.2A.89.89 0 015.89 3H17V1H5.89A2.893 2.893 0 003 3.89v3.922A5.999 5.999 0 000 13c0 3.309 2.691 6 6 6 2.607 0 4.824-1.673 5.65-4H18v-3h1V7z" }),
            React.createElement("path", { d: "M3 14h6v-2H3z" }))));
}

function WalletPlus20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M6 17c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zM19 7h-1V4H6v2h10v1h-1v2h2v1h-2v2h1v1h-4c0-3.309-2.691-6-6-6-.341 0-.674.035-1 .09v-3.2A.89.89 0 015.89 3H17V1H5.89A2.893 2.893 0 003 3.89v3.922A5.999 5.999 0 000 13c0 3.309 2.691 6 6 6 2.607 0 4.824-1.673 5.65-4H18v-3h1V7z" }),
            React.createElement("path", { d: "M7 10H5v2H3v2h2v2h2v-2h2v-2H7z" }))));
}

function World20(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 20, height: 20, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M10 1a9 9 0 100 18 9 9 0 000-18m0 2c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.14-7-7 3.14-7 7-7" }),
            React.createElement("path", { d: "M10.254 16.645c-.09 0-.18-.007-.27-.021-.566-.094-1.537-.56-1.662-2.639-.092-1.528-.643-1.768-1.407-2.101-.671-.292-1.796-.782-1.763-2.336.016-.685.242-1.238.67-1.643.808-.762 2.013-.717 3.18-.676 1.701.062 2.012-.065 2.082-.476.032-.178.008-.246.008-.247-.239-.243-1.62-.153-2.075-.124-.913.059-1.515.099-1.954-.366a1.209 1.209 0 01-.292-.897c.093-.755.73-1.237 1.405-1.746.43-.326.92-.696 1.104-1.027a1 1 0 111.744.979c-.219.391-.526.721-.857 1.015.905.017 1.83.186 2.418.84.307.341.637.949.47 1.914-.391 2.269-2.735 2.19-4.125 2.133-.576-.019-1.536-.055-1.734.132-.007.008-.04.07-.043.232-.003.131.018.174.018.175.05.07.358.204.543.285.912.397 2.436 1.062 2.604 3.813.018.288.053.49.088.627.194-.189.466-.545.696-1.11l.143-.337c.278-.641.658-1.52.658-2.599 0-.848.729-1.624 1.856-1.98 1.334-.42 3.372-.222 4.73 1.719a1 1 0 11-1.637 1.147c-.605-.864-1.335-1.05-1.842-1.054h-.017c-.54 0-.943.201-1.092.326-.034 1.42-.524 2.551-.821 3.236l-.125.295c-.634 1.559-1.671 2.511-2.701 2.511" }))));
}

function BankidMc32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h32v32H0z" }),
            React.createElement("g", { fillRule: "nonzero" },
                React.createElement("path", { d: "M10.861 16.841l1.128-7.408h-1.205c-.564 0-1.29-.33-1.504-.935-.068-.205-.23-.909.701-1.594.333-.24.547-.508.59-.713a.568.568 0 00-.154-.543c-.205-.205-.607-.32-1.12-.32-.863 0-1.47.516-1.53.89-.042.276.163.499.343.641.538.419.666 1.024.333 1.594-.342.588-1.085.97-1.88.98h-1.23c-.103.72-1.778 11.78-1.906 12.653h6.674c.06-.392.367-2.484.786-5.245h-.026z", fill: "#479CBE" }),
                React.createElement("path", { d: "M20.063 3h-7.124l-.95 5.974h1.21c.663 0 1.29-.301 1.559-.736a.708.708 0 00.125-.382c0-.249-.17-.435-.34-.56-.466-.346-.565-.71-.565-.967 0-.053 0-.098.01-.142.098-.63.958-1.314 2.096-1.314.681 0 1.201.16 1.515.453.277.257.385.621.304 1.003-.098.453-.555.826-.815 1.012-.69.48-.6.897-.556 1.02.144.374.69.613 1.111.613h1.837v.01c2.51.017 3.854 1.162 3.433 3.825-.395 2.477-2.312 3.542-4.597 3.56l-.906 5.717h1.336c5.636 0 10.242-3.586 11.147-9.25C31.013 5.806 26.515 3 20.063 3z", fill: "#00A5C3" }),
                React.createElement("path", { d: "M20.063 3h-7.124l-.95 5.974h1.21c.663 0 1.29-.301 1.559-.736a.708.708 0 00.125-.382c0-.249-.17-.435-.34-.56-.466-.346-.565-.71-.565-.967 0-.053 0-.098.01-.142.098-.63.958-1.314 2.096-1.314.681 0 1.201.16 1.515.453.277.257.385.621.304 1.003-.098.453-.555.826-.815 1.012-.69.48-.6.897-.556 1.02.144.374.69.613 1.111.613h1.837v.01c2.51.017 3.854 1.162 3.433 3.825-.395 2.477-2.312 3.542-4.597 3.56l-.906 5.717h1.336c5.636 0 10.242-3.586 11.147-9.25C31.013 5.806 26.515 3 20.063 3z", fill: "#235971" }),
                React.createElement("g", { fill: "#235971" },
                    React.createElement("path", { d: "M2.771 23.967H5.6c1.206 0 1.498.63 1.41 1.207-.071.466-.382.813-.913 1.042.673.265.94.677.842 1.326-.124.814-.807 1.417-1.702 1.417H2.018l.753-4.992zm1.87 2.066c.55 0 .807-.302.86-.658.054-.384-.115-.65-.664-.65h-.488l-.195 1.308h.488zm-.3 2.158c.567 0 .895-.238.974-.722.062-.42-.168-.668-.718-.668H4.04l-.213 1.4h.514v-.01zM10.9 28.996c-.736.055-1.09-.028-1.267-.357-.39.247-.825.375-1.286.375-.833 0-1.126-.448-1.046-.942.036-.237.169-.466.381-.658.461-.412 1.596-.466 2.04-.777.035-.348-.098-.476-.515-.476-.488 0-.895.165-1.596.659l.169-1.134c.603-.448 1.188-.659 1.861-.659.86 0 1.623.366 1.48 1.335l-.168 1.098c-.062.384-.044.503.373.512l-.426 1.024zm-1.276-1.72c-.39.257-1.117.211-1.197.741-.036.247.115.43.355.43.23 0 .514-.1.744-.265-.018-.091-.009-.183.018-.357l.08-.548zM12.274 25.091h1.472l-.08.503c.47-.411.824-.567 1.285-.567.825 0 1.206.521 1.073 1.372l-.381 2.551H14.17l.32-2.112c.061-.384-.054-.567-.337-.567-.23 0-.444.128-.648.411l-.336 2.259h-1.472l.576-3.85zM17.168 23.967h1.471l-.372 2.45 1.41-1.326h1.817l-1.809 1.646 1.454 2.213h-1.853l-1.117-1.783h-.017l-.266 1.783h-1.472z" })),
                React.createElement("g", { fill: "#479CBE" },
                    React.createElement("path", { d: "M22.722 23.967h1.598l-.703 5.074H22.02zM25.098 23.967h2.283c1.765 0 2.275 1.424 2.107 2.607-.158 1.154-.978 2.467-2.525 2.467h-2.576l.71-5.074zm1.48 3.864c.778 0 1.204-.429 1.33-1.332.092-.67-.092-1.331-.954-1.331h-.426l-.368 2.663h.418z" }))))));
}

function CarDamagedMulticolor32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fillRule: "nonzero", fill: "none" },
            React.createElement("path", { d: "M6 16.5c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5S8.327 18 7.5 18 6 17.327 6 16.5zM23 16.5c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5z", fill: "#005AA0" }),
            React.createElement("path", { d: "M30 14c0 .025-.333.033-.778.033C28.333 14.033 27 14 27 14l1.044 4L28 23h-1v3h-2v-3H7v3H5v-3H4v-2h14v-2H4v-1l1-4s-1.333.033-2.222.033C2.333 14.033 2 14.025 2 14v-1c0-.968 4-1 4-1l2-4s1.687-1.996 8-2c6.406 0 8 2 8 2l2 4s4 .032 4 1v1zm-4.336-7c-.57-.813-3.039-3-9.664-3-6.625.004-9.38 2.344-9.768 3l-1.315 3.019C2.75 10.089 0 10.661 0 13v1c0 .672.45 1.961 2.147 2.025.08.003.176.005.284.006l-.37 1.484-.06.239V23c0 .746.407 1.396 1.012 1.74L3 26a2 2 0 002 2h2a2 2 0 002-2v-1h14v1a2 2 0 002 2h2a2 2 0 002-2l.016-1.276c.589-.348.984-.99.984-1.724v-2c0-.04-.01-.078-.012-.118L30 19.013v-1.264l-.05-.254-.38-1.464c.107-.001.203-.003.283-.006C31.551 15.961 32 14.672 32 14v-1c0-2.339-2.684-2.91-4.917-2.981L25.664 7z", fill: "#005AA0" }),
            React.createElement("path", { fill: "#E30613", d: "M22.025 7.664L24.59 13H9v-2h12.41l-.56-1.164-3.312.437-1.622-2.249 1.623-1.17.923 1.28zM20 21v-2h4.414l2.266 2.258-1.414 1.414L23.586 21z" }))));
}

function CarMulticolor32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fillRule: "nonzero", fill: "none" },
            React.createElement("path", { d: "M6 16.5c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5S8.327 18 7.5 18 6 17.327 6 16.5zM23 16.5c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5zM9 11.027v2h15.658l-2.655-5.246-1.784.903 1.185 2.343z", fill: "#005AA0" }),
            React.createElement("path", { d: "M30 14c0 .025-.333.033-.778.033C28.333 14.033 27 14 27 14l1.044 4L28 19h-6v2h6v2h-1v3h-2v-3H7v3H5v-3H4v-2h6v-2H4v-1l1-4s-1.333.033-2.222.033C2.333 14.033 2 14.025 2 14v-1c0-.968 4-1 4-1l2-4s1.687-1.996 8-2c6.406 0 8 2 8 2l2 4s4 .032 4 1v1zm-4.336-7c-.57-.813-3.039-3-9.664-3-6.625.004-9.38 2.344-9.768 3l-1.315 3.019C2.75 10.089 0 10.661 0 13v1c0 .672.45 1.961 2.147 2.025.08.003.176.005.284.006l-.37 1.484-.06.239V23c0 .746.407 1.396 1.012 1.74L3 26a2 2 0 002 2h2a2 2 0 002-2v-1h14v1a2 2 0 002 2h2a2 2 0 002-2l.016-1.276c.589-.348.984-.99.984-1.724v-2c0-.04-.01-.078-.012-.118L30 19.013v-1.264l-.05-.254-.38-1.464c.107-.001.203-.003.283-.006C31.551 15.961 32 14.672 32 14v-1c0-2.339-2.684-2.91-4.917-2.981L25.664 7z", fill: "#005AA0" }),
            React.createElement("path", { fill: "#E30613", d: "M12.5 21h7v-2h-7z" }))));
}

function CardMulticolor32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fillRule: "nonzero", fill: "none" },
            React.createElement("path", { d: "M26.004 23c.619 0 1.024-.397.99-.91l.002-12.252c.03-.412-.416-.838-.992-.838H6.015C5.476 9 5 9.451 5 9.91v12.18c0 .459.476.91 1.015.91h19.989zM3 22.09V9.91C3 8.321 4.395 7 6.015 7h19.989c1.687 0 3.104 1.354 2.99 2.91l-.003 12.11c.118 1.642-1.248 2.98-2.987 2.98H6.015C4.395 25 3 23.678 3 22.09z", fill: "#005AA0" }),
            React.createElement("path", { fill: "#005AA0", d: "M28.039 12H4.216v2h23.823z" }),
            React.createElement("path", { fill: "#E30613", d: "M8 18h6v-2H8z" }))));
}

function DamageMulticolor32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fillRule: "nonzero", fill: "none" },
            React.createElement("path", { fill: "#005AA0", d: "M25 6H7v20h3.01v2H5V4h22v24h-8.97v-2H25z" }),
            React.createElement("path", { fill: "#005AA0", d: "M16.087 18.947L14.66 22.6 19 24.127V27h2v-4.29l-3.725-1.31 1.362-3.484-4.38-2.009L11.67 17H6.826v2h5.25l2.148-.907zM22 10h-4.4l-1.033-1.983-2-.523-.089-2.546-1.998.07.14 4.034 2.583.676L16.388 12H20v2.8l5.33 4.002 1.202-1.6L22 13.8z" }),
            React.createElement("path", { fill: "#E30613", d: "M12 28h4v-2h-4z" }))));
}

function LoanMulticolor32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fillRule: "nonzero", fill: "none" },
            React.createElement("path", { fill: "#005AA0", d: "M24.964 9.653l1.955-.423-1.387-6.411-13.324 2.776.408 1.958L23.997 5.18z" }),
            React.createElement("path", { fill: "#005AA0", d: "M8.62 6.731l17.241 3.7-1.869 8.922-8.5-1.845-.425 1.955 10.47 2.272 2.69-12.842-21.14-4.536-2.778 12.846 3.858.791.402-1.959-1.878-.385z" }),
            React.createElement("path", { d: "M19.103 25.838c0-.859-.715-1.573-1.574-1.573-.859 0-1.573.714-1.573 1.573 0 .35.013.455.06.55l.055.13a.97.97 0 00.225.33c.325.379.72.564 1.233.564.86 0 1.574-.715 1.574-1.574zm-5.147 0a3.586 3.586 0 013.573-3.573 3.586 3.586 0 013.574 3.573 3.586 3.586 0 01-3.574 3.574c-1.102 0-2.05-.444-2.7-1.206a2.818 2.818 0 01-.631-.985c-.204-.429-.242-.764-.242-1.383z", fill: "#E30613" }),
            React.createElement("path", { d: "M12.412 21.985a4.309 4.309 0 110-8.617 4.309 4.309 0 010 8.617zm0-2a2.309 2.309 0 100-4.617 2.309 2.309 0 000 4.617z", fill: "#005AA0" }))));
}

function MooseMulticolor32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M28.807 14.207l-.023-.02a2.612 2.612 0 00-1.736-.635c-.11 0-.22.005-.335.018.189-.191.412-.415.682-.68l.11-.11c1.075-1.066 1.694-1.733 2.09-2.428l.043-.073c.15-.259.609-1.047.198-2.006-.271-.634-.79-1.046-1.54-1.225l-.052-.013-.24-.059-.295-.006c-.65 0-1.54.226-3.196 1.9-.123.124-.25.255-.385.398l.052-.197c.684-2.595.84-3.34.682-4.106C24.622 3.809 23.614 3 22.407 3c-.517 0-1.04.154-1.514.446-.62.38-.86.978-1 1.456-.113.391-.187.826-.267 1.4l-.055.403-.024.174c-.031.226-.057.408-.086.588-.071.455-.144.826-.228 1.168-.351 1.412-.883 2.13-1.401 2.545a4.945 4.945 0 00-1.812-.35c-.484 0-.96.094-1.428.24l.503 1.923c.315-.107.624-.164.925-.164.39 0 .769.083 1.13.231.202.083.34.161.4.203l.31.22.337-.174c1.59-.816 2.49-2.228 2.976-4.194.104-.414.187-.846.264-1.34.03-.19.058-.382.09-.622l.08-.573c.077-.55.135-.87.207-1.118.06-.21.117-.308.126-.314A.904.904 0 0122.407 5c.268 0 .455.168.496.368.064.314-.098 1.07-.658 3.196l-.067.255c-.65 2.488-.826 3.53-.471 4.221.158.304.413.437.688.437.157 0 .32-.044.477-.124.213-.109.44-.292.719-.563.21-.206.446-.454.776-.816.048-.054.672-.745.863-.953.263-.287.489-.526.704-.744.855-.864 1.499-1.306 1.775-1.306.019 0 .035.002.049.006.312.078.3.037.102.382-.26.456-.745.994-1.762 2l-.11.11c-1.216 1.203-1.626 1.639-1.988 2.188-.637.97-.52 1.886.612 2.196.174.048.33.072.496.072.292 0 .615-.072 1.123-.213l.217-.059c.255-.066.447-.1.6-.1.19 0 .322.052.442.16l.049.042a.512.512 0 01.073.085c.156.217.156.464-.19.896-.65.692-1.5 1.022-2.408 1.022-1.403 0-2.945-.791-4.094-2.266l-.028.022-.008-.01-1.004.746c.29.392.449.889.488 1.478.042.655-.067 1.378-.277 2.098a7.627 7.627 0 01-.28.8l-.055.122v4.51l.004.066c.003.058-.051.212-.268.407-.521.468-1.627.779-3.49.779-1.863 0-2.97-.311-3.49-.779-.218-.195-.271-.35-.268-.407l.002-.066v-4.51l-.053-.122a7.611 7.611 0 01-.281-.8c-.21-.72-.318-1.443-.276-2.098.038-.59.196-1.086.487-1.478l-1.003-.746c-.003.002-.005.006-.008.01l-.03-.022c-1.147 1.475-2.69 2.266-4.093 2.266-.908 0-1.758-.33-2.408-1.022-.345-.431-.345-.678-.19-.896a.572.572 0 01.073-.085l.05-.041a.602.602 0 01.44-.161c.155 0 .347.034.6.1.062.016.115.03.219.06.507.14.83.212 1.123.212.166 0 .322-.023.496-.071 1.13-.31 1.249-1.227.61-2.196-.36-.55-.77-.986-1.987-2.19l-.11-.108c-1.016-1.006-1.501-1.544-1.762-2-.197-.345-.21-.304.102-.382a.188.188 0 01.049-.006c.277 0 .92.443 1.776 1.306.215.218.44.457.704.744.19.208.814.899.863.953.329.362.565.61.775.816.28.27.506.454.719.563.156.08.32.124.479.124.274 0 .529-.133.686-.437.355-.69.18-1.728-.466-4.2l-1.955.429c-.134-.143-.26-.274-.384-.398-1.657-1.674-2.545-1.9-3.197-1.9h-.246l-.287.065-.055.013c-.75.179-1.267.59-1.54 1.225-.41.959.049 1.747.2 2.006l.042.072c.397.695 1.015 1.363 2.09 2.428l.11.11c.27.266.494.489.682.68a3.204 3.204 0 00-.335-.018c-.655 0-1.253.219-1.736.636l-.023.019a2.535 2.535 0 00-.432.469c-.264.368-1.031 1.704.257 3.31l.05.061.053.057c1 1.067 2.374 1.653 3.865 1.653.918 0 1.845-.223 2.722-.637a9.878 9.878 0 00.528 2.005c.003.008.006.015.007.022v4.072c-.032.73.299 1.434.93 2 .967.868 2.546 1.29 4.826 1.29s3.858-.422 4.826-1.29c.63-.567.96-1.271.93-1.983l-.002-.03v-4.06a10.048 10.048 0 00.535-2.027c.878.415 1.806.638 2.723.638 1.49 0 2.864-.586 3.865-1.652l.054-.057.05-.062c1.288-1.606.52-2.941.255-3.312a2.429 2.429 0 00-.431-.467", fill: "#005AA0" }),
            React.createElement("path", { d: "M13 17a1.001 1.001 0 012 0 1.001 1.001 0 01-2 0zM17 17a1.001 1.001 0 012 0 1.001 1.001 0 01-2 0z", fill: "#005AA0", fillRule: "nonzero" }),
            React.createElement("path", { d: "M9.496 7.553c-.345-1.36-.448-1.928-.396-2.186.042-.199.228-.367.497-.367.136 0 .295.044.465.15.01.005.067.102.127.313.073.247.13.568.207 1.117l.08.573c.033.24.06.432.09.623.077.494.16.925.264 1.34.392 1.583 1.06 2.802 2.135 3.645l1.1-1.675c-.484-.426-.967-1.135-1.294-2.45a13.356 13.356 0 01-.229-1.17c-.028-.18-.055-.36-.086-.587l-.022-.16-.057-.416c-.08-.574-.152-1.008-.267-1.399-.14-.48-.38-1.08-1.005-1.462A2.893 2.893 0 009.597 3C8.39 3 7.38 3.807 7.142 4.964c-.133.647-.04 1.29.402 3.027l1.952-.438z", fill: "#E30613" }))));
}

function OfferMulticolor32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fillRule: "nonzero", fill: "none" },
            React.createElement("path", { fill: "#E30613", d: "M14 19v6h2v-6z" }),
            React.createElement("path", { fill: "#005AA0", d: "M8 19v6h2v-6z" }),
            React.createElement("path", { fill: "#005AA0", d: "M4 26.009V13h13v-2H2v17.009h20V16.055h-2v9.954z" }),
            React.createElement("path", { d: "M8 13V8h8v5H8zm6-2v-1h-4v1h4zM7.63 16.001l-1.323-2.078-1.687 1.074L6.532 18H17v-2zM24.913 8.92l-1.085-2.438-1.064 2.44-2.647-.285 1.582 2.147-1.567 2.155 2.652-.29 1.086 2.436 1.063-2.44 2.647.285L26 10.784l1.566-2.156-2.652.292zm6.393-2.463l-3.139 4.32 3.183 4.32-5.326-.574-2.137 4.902-2.182-4.898-5.313.584 3.138-4.32-3.183-4.32 5.326.574 2.137-4.902 2.182 4.898 5.314-.584z", fill: "#005AA0" }))));
}

function HouseMulticolor32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fillRule: "nonzero", fill: "none" },
            React.createElement("path", { fill: "#005AA0", d: "M30.392 16.265l1.216-1.588L16.004 2.74.393 14.676l1.214 1.59L16.004 5.258z" }),
            React.createElement("path", { fill: "#E30613", d: "M18.392 12.088l1.216-1.588L16 7.74 12.393 10.5l1.214 1.589 2.394-1.83z" }),
            React.createElement("path", { fill: "#005AA0", d: "M14 19h4v8h2V17h-8v10h2zM4 12v15h2V12zM26 12v15h2V12z" }))));
}

function SaveMulticolor32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fillRule: "nonzero", fill: "none" },
            React.createElement("path", { d: "M13.11 5.005c.14-.426.378-.819.703-1.147a2.872 2.872 0 014.094 0c.326.329.564.723.705 1.151l2.063.012a4.934 4.934 0 00-1.347-2.57 4.872 4.872 0 00-6.936 0 4.934 4.934 0 00-1.342 2.544l2.06.01z", fill: "#E30613" }),
            React.createElement("path", { d: "M26.125 16.079c0 2.548-.92 4.953-2.549 6.825l.83 6.096h-5.54l-1.035-2.762a10.148 10.148 0 01-3.928 0L12.87 29h-5.54l.829-6.096a10.365 10.365 0 01-2.549-6.825c0-1.77.442-3.478 1.27-4.993L5.652 5.445l5.982 1.205a10.138 10.138 0 014.234-.923c1.479 0 2.915.318 4.234.923l5.982-1.205-1.229 5.64a10.38 10.38 0 011.27 4.994zm-4.658 6.153l.333-.348a8.366 8.366 0 002.325-5.805 8.376 8.376 0 00-1.188-4.317l-.203-.34.743-3.412-3.646.735-.307-.155a8.14 8.14 0 00-3.657-.863 8.14 8.14 0 00-3.657.863l-.307.155-3.646-.735L9 11.422l-.203.34a8.378 8.378 0 00-1.188 4.317c0 2.196.843 4.256 2.325 5.805l.333.348L9.62 27h1.863l1.186-3.165.892.262a8.173 8.173 0 004.614 0l.892-.262L20.252 27h1.863l-.648-4.768z", fill: "#005AA0" }),
            React.createElement("path", { d: "M17.98 18.546c0-1.19-.952-2.152-2.12-2.152-1.168 0-2.12.961-2.12 2.152 0 1.19.951 2.151 2.12 2.151s2.12-.961 2.12-2.151zm2 0c0 2.29-1.842 4.151-4.12 4.151s-4.12-1.86-4.12-4.151c0-2.29 1.842-4.152 4.12-4.152s4.12 1.861 4.12 4.152zM12.96 13.424c0-.102.078-.182.17-.182.092 0 .17.08.17.182h2c0-1.202-.97-2.182-2.17-2.182s-2.17.98-2.17 2.182h2zM18.42 13.424c0-.102.078-.182.17-.182.092 0 .17.08.17.182h2c0-1.202-.97-2.182-2.17-2.182s-2.17.98-2.17 2.182h2z", fill: "#005AA0" }))));
}

function TravelMulticolor32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fillRule: "nonzero", fill: "none" },
            React.createElement("path", { d: "M13.463 27.146l-.617.17-8.192-.931-4.452-4.182 5.815-1.637 2.82 1.518 2.054-.6 14.976-4.376 5.131 1.103.167.572a3.094 3.094 0 01-2.102 3.837l-6.49 1.898-4.498 4.793-5.575 1.63.963-3.795zm.715-2.817l1.938.492-.816 3.217 1.69-.494 4.499-4.793.262-.077 6.752-1.974c.397-.116.679-.438.762-.816l-3.323-.714-14.49 4.233-2.84.83-2.83-1.523-1.63.459 1.387 1.304 7.148.812 1.342-.37.149-.586z", fill: "#005AA0" }),
            React.createElement("path", { fill: "#005AA0", d: "M13.457 19.735l5.108 1.237.47-1.944-5.627-1.363-5.63 1.646 3.685 3.251 1.324-1.5-.964-.85zM20 15.494a.5.5 0 10-1 .012.5.5 0 001-.012zm2-.023a2.5 2.5 0 11-5 .058 2.5 2.5 0 015-.058zM10 1C7.592 1 5.558 2.595 5.097 4.743 2.78 5.138 1 7.027 1 9.333 1 11.931 3.257 14 6 14h2v-2H6c-1.676 0-3-1.214-3-2.667 0-1.452 1.324-2.666 3-2.666h1v-1C7 4.214 8.325 3 10 3c1.676 0 3 1.214 3 2.667v1h1c1.675 0 3 1.214 3 2.666 0 .438-.119.86-.345 1.24l1.72 1.022A4.41 4.41 0 0019 9.333c0-2.306-1.779-4.195-4.097-4.59C14.443 2.595 12.409 1 10 1z" }),
            React.createElement("path", { d: "M14 12.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm2 0a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z", fill: "#E30613" }))));
}

function BankidMc40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("g", { fillRule: "nonzero" },
                React.createElement("path", { d: "M13.367 21.094l1.447-9.685h-1.546c-.723 0-1.655-.43-1.93-1.222-.087-.268-.295-1.187.9-2.084.427-.314.701-.663.756-.931.055-.28-.01-.524-.197-.71-.263-.268-.779-.42-1.436-.42-1.107 0-1.886.676-1.962 1.165-.055.36.208.652.438.838.69.547.855 1.339.428 2.084-.439.768-1.392 1.269-2.412 1.28H6.275c-.132.943-2.28 15.4-2.444 16.542h8.56c.077-.513.471-3.248 1.009-6.857h-.033z", fill: "#479CBE" }),
                React.createElement("path", { d: "M25.17 3h-9.138l-1.218 7.81h1.551c.851 0 1.656-.394 2-.963a.938.938 0 00.161-.5c0-.324-.218-.568-.436-.73-.598-.453-.725-.929-.725-1.265 0-.07 0-.128.012-.186.126-.824 1.23-1.717 2.69-1.717.873 0 1.54.209 1.942.591.357.337.495.813.391 1.312-.126.592-.713 1.08-1.046 1.323-.885.626-.77 1.172-.713 1.334.184.488.886.801 1.426.801h2.356v.012c3.219.023 4.943 1.52 4.403 5.001-.506 3.238-2.966 4.63-5.897 4.654l-1.161 7.474h1.713c7.23 0 13.138-4.689 14.3-12.093C39.216 6.668 33.446 3 25.17 3z", fill: "#00A5C3" }),
                React.createElement("path", { d: "M25.17 3h-9.138l-1.218 7.81h1.551c.851 0 1.656-.394 2-.963a.938.938 0 00.161-.5c0-.324-.218-.568-.436-.73-.598-.453-.725-.929-.725-1.265 0-.07 0-.128.012-.186.126-.824 1.23-1.717 2.69-1.717.873 0 1.54.209 1.942.591.357.337.495.813.391 1.312-.126.592-.713 1.08-1.046 1.323-.885.626-.77 1.172-.713 1.334.184.488.886.801 1.426.801h2.356v.012c3.219.023 4.943 1.52 4.403 5.001-.506 3.238-2.966 4.63-5.897 4.654l-1.161 7.474h1.713c7.23 0 13.138-4.689 14.3-12.093C39.216 6.668 33.446 3 25.17 3z", fill: "#235971" }),
                React.createElement("g", { fill: "#235971" },
                    React.createElement("path", { d: "M2.99 30.409h3.627c1.546 0 1.922.825 1.808 1.578-.091.61-.49 1.064-1.171 1.362.864.347 1.205.885 1.08 1.734-.16 1.064-1.035 1.853-2.183 1.853H2.023l.966-6.527zm2.399 2.701c.705 0 1.034-.394 1.103-.86.068-.502-.148-.85-.853-.85h-.626l-.25 1.71h.626zm-.387 2.821c.728 0 1.149-.31 1.25-.944.08-.55-.215-.873-.92-.873h-.717l-.273 1.83h.66v-.013zM13.417 36.983c-.944.072-1.399-.036-1.626-.466-.5.323-1.058.49-1.65.49-1.068 0-1.443-.586-1.34-1.231.045-.31.215-.61.488-.86.591-.539 2.047-.61 2.615-1.017.046-.454-.125-.621-.66-.621-.625 0-1.148.215-2.046.86l.216-1.482c.773-.586 1.524-.86 2.388-.86 1.103 0 2.081.478 1.9 1.745l-.217 1.434c-.08.502-.057.658.478.67l-.546 1.338zm-1.638-2.247c-.5.335-1.432.275-1.535.968-.045.323.148.562.455.562.296 0 .66-.131.955-.347-.022-.12-.011-.239.023-.466l.102-.717zM15.18 31.88h1.887l-.102.657c.602-.538 1.057-.742 1.649-.742 1.057 0 1.546.682 1.375 1.793l-.489 3.336h-1.887l.41-2.762c.079-.502-.069-.74-.433-.74-.296 0-.568.166-.83.537l-.432 2.953H14.44l.74-5.033zM21.456 30.409h1.888l-.478 3.203 1.808-1.733h2.332l-2.32 2.152 1.865 2.893h-2.377l-1.433-2.331h-.022l-.342 2.33H20.49z" })),
                React.createElement("g", { fill: "#479CBE" },
                    React.createElement("path", { d: "M28.582 30.41h2.049l-.901 6.632h-2.05zM31.629 30.41h2.929c2.263 0 2.918 1.861 2.703 3.407-.204 1.51-1.255 3.225-3.24 3.225h-3.304l.912-6.633zm1.899 5.05c.997 0 1.545-.56 1.705-1.74.118-.877-.118-1.74-1.223-1.74h-.547l-.472 3.48h.537z" }))))));
}

function DamageMulticolor40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 28, height: 32, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M22 30h4V19.503l-6.538-4.857v-4.36h-4.829L13.237 7.69 9 6.381V2H2v15.3h7.916l3.01-1.442 5.207 3.324-1.323 3.802L22 25.47V30zm-2 0v-3.27l-5.667-2.714 1.391-3.998-2.936-1.876L10.37 19.3H2V30h3v2H0V0h28v32H17v-2h3zm6-12.989V2H11v2.906l3.61 1.117 1.218 2.263h5.634v5.354L26 17.011z", id: "damage-multicolor-40_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { fill: "#E30613", fillRule: "nonzero", d: "M15 30v2H7v-2z" }),
            React.createElement("path", { d: "M-6-4h40v40H-6z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#damage-multicolor-40_svg__a" }))));
}

function Apartment24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M22 2v20H2V2h20zm-2 2H4v16h5v-6h6v6h5V4zm-7 12h-2v4h2v-4zm0-6v2h-2v-2h2zm5 0v2h-2v-2h2zM8 10v2H6v-2h2zm5-4v2h-2V6h2zm5 0v2h-2V6h2zM8 6v2H6V6h2z", fill: "currentColor", fillRule: "nonzero" }))));
}

function ArrowEnclosed24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M12 19c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7m0-16c-4.962 0-9 4.038-9 9s4.038 9 9 9 9-4.038 9-9-4.038-9-9-9" }),
            React.createElement("path", { d: "M14 12.022v-.043l.021.02-.021.023zm-2.217-2.325L13.049 11H7v2h6.049l-1.266 1.304 1.434 1.393L16.81 12l-3.593-3.696-1.434 1.393z" }))));
}

function ArrowsApart24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M9.071 1.83L.48 9.461 9.071 17.3V13h7.933v-1.799l3.487 3.301-3.487 3.32v-1.796h-6.001v2h4.001v4.247l8.512-7.784-8.512-7.69V11H7.07v1.855L3.527 9.488 7.07 6.17V8h5.934V6H9.071z", fill: "currentColor", fillRule: "nonzero" })));
}

function Atv24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M13.3 2.732L16.5 7h2.118l1.233 2.466c.64.067 1.263.225 1.852.468l.3.132-.853 1.81a4.692 4.692 0 00-2.007-.447c-.733 0-1.476.244-2.16.657l1.115 1.206a3.5 3.5 0 11-1.529 1.293l-1.106-1.196c-.833.976-1.4 2.202-1.458 3.408L14 17h-2a6.4 6.4 0 01.08-1h-1.494l-2.282-2.282-.859.89a3.48 3.48 0 01.55 1.7L8 16.5a3.5 3.5 0 11-2.074-3.197l.964-.999-.597-.597 1.414-1.414L11.415 14h1.29c.98-2.084 2.874-3.813 4.988-4.377L17.381 9H15.5l-.54-.72-4.054 3.04L8.585 9H3v1h2v2H1V7h8.414l1.68 1.679 2.666-2-1.06-1.412-1.253.627-.894-1.788 2.746-1.374zM19.5 15a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-15 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Baby24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M14.744 1.209l.181.042.143.045a2.722 2.722 0 011.74 3.15l-.042.167a2.722 2.722 0 01-3.087 1.928l-.004.014a6.81 6.81 0 102.411 1.205l-.217-.162 1.167-1.624A8.81 8.81 0 113.09 13.132a8.81 8.81 0 0110.733-8.6l.125.03.003-.009a.722.722 0 00.577-1.31l-.033-.018-.237.19a2.91 2.91 0 01-.27.192l-.136.078-.921-1.775.046-.032.157-.125c.246-.2.397-.307.622-.409.311-.141.645-.193.99-.135zM8.717 15.302c.362.402.86.635 1.392.663.473.024.936-.115 1.316-.4l.139-.114 1.337 1.487c-.8.72-1.84 1.08-2.896 1.024a4.004 4.004 0 01-2.616-1.155l-.158-.167 1.486-1.338zm1.458-3.278l.013.149-1.998.093a.095.095 0 00-.184-.028L8 12.275l-1.998.093a2.095 2.095 0 014.173-.344zm4.695-.176l.012.15-1.998.092a.095.095 0 00-.184-.028l-.005.037-1.998.094a2.094 2.094 0 014.173-.345z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Attach24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M10.67 16.812c1.311 2.45 2.842 3.061 4.965 2.07 2.124-.99 2.64-2.555 1.628-5.083l-2.981-6.392 1.813-.845 3.002 6.443c1.411 3.519.519 6.228-2.616 7.69-3.136 1.462-5.785.404-7.599-2.988L4.647 8.625l-.04-.102c-.731-2.157.066-3.904 2.2-4.899 2.13-.993 3.985-.49 5.19 1.44l.058.107 4.235 9.082.044.112c.498 1.522.098 2.789-1.219 3.403-1.315.613-2.543.107-3.392-1.252l-.058-.107-2.98-6.392 1.812-.845 2.954 6.334c.334.522.518.59.82.45.3-.141.366-.325.18-.915L10.27 6.074c-.652-1.012-1.405-1.203-2.618-.637C6.442 6 6.113 6.69 6.485 7.832l4.185 8.98z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Bank24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M5 18h2v-8H5zM3 21h18v-2H3zM12 2.848L5.721 7H3v2h3.252L12 5.2 17.789 9H21V7.022h-2.693zM9 18h2v-8H9zM13 18h2v-8h-2zM17 18h2v-8h-2z" }))));
}

function Bankid24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M17.627 17.352h1.533c1.183 0 1.533.876 1.417 1.6-.1.706-.667 1.514-1.7 1.514H17.16l.467-3.114zm1 2.374c.517 0 .817-.253.9-.808.067-.404-.067-.808-.633-.808h-.3l-.25 1.633.283-.017zM16.027 17.352h1.083l-.483 3.098h-1.083zM12.727 17.352h.934l-.234 1.532.9-.825h1.15l-1.15 1.027.917 1.38H14.06l-.717-1.11h-.017l-.166 1.11h-.933zM9.611 18.06h.933l-.05.32c.3-.253.517-.354.817-.354.517 0 .767.32.683.858l-.25 1.582h-.933l.2-1.313c.033-.235-.033-.353-.217-.353-.15 0-.283.084-.416.252l-.217 1.398h-.933l.383-2.39zM8.728 20.483c-.467.034-.7-.017-.8-.219a1.54 1.54 0 01-.817.236c-.533 0-.716-.27-.666-.59.016-.15.1-.285.25-.403.283-.253 1.016-.286 1.3-.488.016-.219-.067-.303-.334-.303-.316 0-.566.1-1.016.404l.1-.707c.383-.286.75-.404 1.183-.404.55 0 1.033.219.933.825l-.1.69c-.033.235-.033.32.233.32l-.266.64zm-.8-1.06c-.25.151-.717.134-.767.454-.016.152.067.27.217.27s.333-.068.467-.169c-.017-.05 0-.118.016-.219l.067-.336zM3.578 17.352h1.8c.767 0 .95.388.9.758-.05.286-.233.505-.583.64.433.168.6.42.533.824-.083.505-.517.876-1.083.876h-2.05l.483-3.098zm1.183 1.297c.35 0 .517-.186.55-.404.034-.236-.066-.404-.416-.404h-.317l-.133.808h.316zm-.2 1.346c.367 0 .567-.151.617-.454.033-.253-.1-.421-.45-.421h-.35l-.133.875h.317zM14.594 3.5h-4.466l-.6 3.82h.766c.417 0 .817-.184.984-.47a.505.505 0 00.083-.236c0-.152-.1-.286-.217-.354-.3-.218-.35-.454-.35-.622v-.085c.067-.403.6-.841 1.317-.841.433 0 .75.1.95.286.166.168.25.404.2.64-.067.286-.35.521-.517.64-.433.302-.383.572-.35.656.083.235.433.387.7.387h1.167c1.583.017 2.433.74 2.15 2.457-.25 1.582-1.45 2.272-2.884 2.29l-.6 3.652h.834c3.55 0 6.432-2.306 7.016-5.925.716-4.494-2.117-6.295-6.183-6.295zM9.444 7.64h-.8c-.366 0-.85-.201-1-.589-.05-.134-.15-.589.467-1.026.217-.152.367-.32.383-.455a.353.353 0 00-.1-.353c-.116-.118-.383-.202-.716-.202-.567 0-.967.336-1 .572-.033.185.117.32.233.404.35.27.434.657.217 1.027-.233.37-.717.623-1.233.623h-.817c-.067.454-1.166 7.523-1.25 8.079h4.4c.017-.236.217-1.582.483-3.35l.733-4.73z" }))));
}

function Bell24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M12 2a2 2 0 012 2v.178c3.261.627 5 2.902 5 6.635v3.982l2.017 4.705h-6.058a3 3 0 01-5.918 0H2.983L5 14.795v-3.982c0-3.733 1.739-6.008 5-6.635V4a2 2 0 012-2zm.866 17.5h-1.732a1 1 0 001.732 0zM12 6c-3.455 0-5 1.497-5 4.813v4.392L6.017 17.5h11.966L17 15.205v-4.392C17 7.497 15.455 6 12 6z", fill: "currentColor", fillRule: "nonzero" }))));
}

function BillsCoins24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
                React.createElement("path", { d: "M18.296 3.474l.808 3.648 1.952-.432-1.22-5.511-11.195 1.93.34 1.97zM12 14.5a3.5 3.5 0 10-7 0 3.5 3.5 0 007 0zm-5 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM11.842 23.008a2.75 2.75 0 100-5.5 2.75 2.75 0 000 5.5zm0-2a.75.75 0 110-1.5.75.75 0 010 1.5z" }),
                React.createElement("path", { d: "M4.424 11.566l1.517-6.85 13.32 2.718-1.517 6.85-6.468-1.32-.4 1.96 8.395 1.714L21.652 5.88 4.413 2.362 2.033 13.12l4.133.844.4-1.96z" })))));
}

function Boat24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M17.477 16.52a3.807 3.807 0 002.866.09l.31-.114.694 1.876-.31.114a5.807 5.807 0 01-4.371-.138 3.807 3.807 0 00-2.866-.091l-.718.265a6 6 0 01-4.164 0l-.718-.265a3.807 3.807 0 00-2.866.09 5.807 5.807 0 01-4.37.14l-.311-.115.694-1.876.31.115c.93.344 1.959.311 2.866-.091a5.807 5.807 0 014.37-.14l.72.267a4 4 0 002.775 0l.718-.266a5.807 5.807 0 014.371.139zM11 5.974l6.52 1.484a2 2 0 011.393 2.742l-2.24 5.196-1.837-.792 2.24-5.196L11 8.026 4.924 9.408l2.24 5.196-1.836.792-2.24-5.196A2 2 0 014.48 7.458L11 5.974zM12 10v4h-2v-4h2zm-2-9a1 1 0 012 0v1h1.417a3 3 0 012.769 1.846l.737 1.77-1.846.769-.737-1.77A1 1 0 0013.417 4H8.583a1 1 0 00-.923.615l-.737 1.77-1.846-.77.737-1.769A3 3 0 018.584 2H10V1z", id: "boat-24_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#boat-24_svg__a", transform: "translate(1 2)" }))));
}

function BreifcaseFirstAid24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M13 10h-2v2H9v2h2v2h2v-2h2v-2h-2z" }),
            React.createElement("path", { d: "M20 17.5c0 .271-.229.5-.5.5H19V8h.5c.271 0 .5.229.5.5v9zm-3 .5H7V8h10v10zM5 18h-.5a.507.507 0 01-.5-.5v-9c0-.271.229-.5.5-.5H5v10zm5-12V5h4v1h-4zm6 0V3H8v3H4.5A2.503 2.503 0 002 8.5v9C2 18.878 3.121 20 4.5 20h15c1.379 0 2.5-1.122 2.5-2.5v-9C22 7.122 20.879 6 19.5 6H16z" }))));
}

function Briefcase24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M16 3v3h3.5A2.5 2.5 0 0122 8.5v9a2.5 2.5 0 01-2.5 2.5h-15A2.5 2.5 0 012 17.5v-9A2.5 2.5 0 014.5 6H8V3h8zm4 7.999L17.333 13H17v5h2.5a.5.5 0 00.5-.5v-6.501zm-16 .002V17.5a.5.5 0 00.5.5H7v-5h-.333L4 11.001zM9 18h6v-5H9v5zM19.5 8h-15a.5.5 0 00-.5.5v.001L7.333 11h9.334L20 8.5a.5.5 0 00-.5-.5zM14 5h-4v1h4V5z", fill: "currentColor", fillRule: "nonzero" }))));
}

function CalendarCheck24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M19 7H5V5.33c0-.181.161-.326.346-.33H8v1h2V5h4v1h2V5h2.634c.205.004.366.149.366.33V7zm0 11.662a.331.331 0 01-.346.338H5.346A.331.331 0 015 18.662V9h14v9.662zM16 3V2h-2v1h-4V2H8v1H5.325C4.021 3.026 3 4.05 3 5.33v13.332A2.317 2.317 0 005.346 21h13.308A2.317 2.317 0 0021 18.662V5.33c0-1.28-1.021-2.304-2.346-2.33H16z" }),
            React.createElement("path", { d: "M16.484 11.709l-1.41-1.418-3.914 3.892-1.448-1.48-1.424 1.405 2.858 2.908z" }))));
}

function Calendar24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M19 7H5V5.33c0-.181.161-.326.345-.33H8v1h2V5h4v1h2V5h2.634c.205.004.366.149.366.33V7zm0 11.662a.331.331 0 01-.346.338H5.345A.33.33 0 015 18.662V9h14v9.662zM16 3V2h-2v1h-4V2H8v1H5.325C4.021 3.026 3 4.05 3 5.33v13.332A2.317 2.317 0 005.345 21h13.309A2.317 2.317 0 0021 18.662V5.33c0-1.28-1.021-2.304-2.346-2.33H16z", fill: "currentColor", fillRule: "nonzero" })));
}

function CalendarCross24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M19 7H5V5.33c0-.181.161-.326.346-.33H8v1h2V5h4v1h2V5h2.634c.205.004.366.149.366.33V7zm0 11.662a.331.331 0 01-.346.338H5.346A.331.331 0 015 18.662V9h14v9.662zM16 3V2h-2v1h-4V2H8v1H5.325C4.021 3.026 3 4.05 3 5.33v13.332A2.317 2.317 0 005.346 21h13.308A2.317 2.317 0 0021 18.662V5.33c0-1.28-1.021-2.304-2.346-2.33H16z" }),
            React.createElement("path", { d: "M9.965 17.45L12 15.415l2.035 2.035 1.414-1.414L13.414 14l2-2.001L14 10.586l-2 2-2-2L8.586 12l2 2-2.035 2.036z" }))));
}

function Car24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M11.998 2c2.418-.001 4.13.212 5.294.605.939.318 1.59.785 1.935 1.384L21.733 8H23a1 1 0 010 2h-.673l.721 2.758-.004.271L23 18.5c0 1.666-1.392 3-3 3-1.439 0-2.707-1.095-2.956-2.499l-10.086.004A3.009 3.009 0 014 21.5c-1.632 0-3-1.14-3-3v-5.746L1.688 10H1a1 1 0 010-2h1.265l2.509-4.012c.346-.6 1-1.067 1.944-1.384C7.881 2.214 9.588 2 11.998 2zM12 4c-5.063.003-5.5 1-5.5 1L4 9l-1 4v1h12v2H3v2.5c0 .75.5 1 1 1s1-.406 1-1V17h14v1.5c0 .531.5 1 1 1s1-.438 1-1l.02-2.5H16v-2h5.036l.008-1L20 9l-2.5-4s-.438-1.003-5.5-1zm-5.5 6a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm11 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-1.227-4.957L18.29 9H7V7h8.026l-.535-1.049 1.782-.908z", fill: "currentColor", fillRule: "nonzero" }))));
}

function CarDamage24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M11.998 2c2.418-.001 4.13.212 5.294.605.939.318 1.59.785 1.935 1.384L21.733 8H23a1 1 0 010 2h-.673l.721 2.758-.004.271L23 18.5c0 1.666-1.392 3-3 3-1.439 0-2.707-1.095-2.956-2.499l-10.086.004A3.009 3.009 0 014 21.5c-1.632 0-3-1.14-3-3v-5.746L1.687 10H1a1 1 0 110-2h1.265l2.509-4.012c.346-.6 1-1.067 1.944-1.384C7.881 2.214 9.588 2 11.998 2zM12 4c-5.063.003-5.5 1-5.5 1L4 9l-1 4-.001 1H15v2H2.999L3 18.5c0 .75.5 1 1 1s1-.406 1-1V17h14v1.5c0 .531.5 1 1 1s1-.438 1-1l.044-5.5L20 9l-2.5-4s-.438-1.003-5.5-1zm8 10v2h-4v-2h4zM6.5 10a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm11 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM14 4.6l2.414 2.414H18v2h-2.414L14 7.428l-1.586 1.586H6v-2h5.586L14 4.6z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Caravan24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M19.693 5l3.396 9.057L21.617 17H23v2l-9.171.001a3 3 0 01-5.658 0L3.382 19 .94 14.116 3.22 5h16.473zM11 17a1 1 0 100 2 1 1 0 000-2zm7.306-10H4.781L3.06 13.883 4.618 17h3.553a3.001 3.001 0 015.658 0h5.552l1.529-3.058L18.306 7zM10 8v6H8v-4H7v5H5V8h5zm6 0v3h-2v-1h-2V8h4z", fill: "currentColor", fillRule: "nonzero" }))));
}

function CardBlock24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M13.008 15H3.992C4.004 15 4 6.009 4 6.009 4 6.002 17.006 6 17.006 6 16.999 6 17 12.063 17 12.063h2V6.005A2 2 0 0017.006 4H3.994A2.003 2.003 0 002 6.009v8.982C2 16.101 2.9 17 3.992 17h9.016v-2zm0 0H3.992C4.004 15 4 6.009 4 6.009 4 6.002 17.006 6 17.006 6 16.999 6 17 12.063 17 12.063h2V6.005A2 2 0 0017.006 4H3.994A2.003 2.003 0 002 6.009v8.982C2 16.101 2.9 17 3.992 17h9.016v-2z" }),
            React.createElement("path", { d: "M17.5 20a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0 2a5.5 5.5 0 110-11 5.5 5.5 0 010 11z" }),
            React.createElement("path", { d: "M13.586 14L20 20.414 21.414 19 15 12.586zM3 10h15V8H3z" }))));
}

function Chat24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M8.498 4A6.505 6.505 0 002 10.498a6.505 6.505 0 006.498 6.498h.804L14 21.15V15h-2v1.7l-1.876-1.704H8.498A4.503 4.503 0 014 10.498 4.503 4.503 0 018.498 6h7a4.503 4.503 0 014.498 4.498 4.503 4.503 0 01-4.498 4.498v2a6.505 6.505 0 006.498-6.498A6.505 6.505 0 0015.498 4h-7z", fill: "currentColor", fillRule: "nonzero" })));
}

function Card24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M19.697 17H4.317C4.156 17 4 16.846 4 16.727V11h15.997v5.76a.205.205 0 01-.062.15.32.32 0 01-.238.09zm0-10c.083 0 .17.038.233.103a.22.22 0 01.067.17V9H4V7.272C4 7.153 4.155 7 4.318 7h15.379zm2.299.305a2.175 2.175 0 00-.628-1.592A2.342 2.342 0 0019.697 5H4.317C3.063 5 2 6.04 2 7.272v9.455C2 17.96 3.062 19 4.318 19h15.379a2.31 2.31 0 001.675-.7 2.171 2.171 0 00.625-1.573l-.001-9.422z" }),
            React.createElement("path", { d: "M5.996 14h4v-2h-4z" }))));
}

function Check24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M16.907 6.6l-6.64 6.614-2.943-2.98L5.9 11.637l4.353 4.41 8.063-8.03z", fill: "currentColor", fillRule: "nonzero" })));
}

function CheckEnclosed24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M12 5c-3.859 0-7 3.14-7 7s3.141 7 7 7 7-3.14 7-7-3.141-7-7-7m0 16c-4.963 0-9-4.038-9-9s4.037-9 9-9 9 4.038 9 9-4.037 9-9 9" }),
            React.createElement("path", { d: "M10.76 16.147L7.2 12.542l1.424-1.405 2.15 2.177L15.411 8.7l1.41 1.418z" }))));
}

function Chevron24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M10.014 6.6L8.6 8.014l4 4-4 4 1.414 1.414 4.001-4 1.413-1.415-1.413-1.413z", fill: "currentColor", fillRule: "nonzero" })));
}

function ChevronLeft24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M14.186 17.6l1.414-1.414-4-4 4-4-1.414-1.414-4.001 4-1.413 1.415 1.413 1.413z", fill: "currentColor", fillRule: "nonzero" })));
}

function ChevronDown24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M17.6 10.014L16.186 8.6l-4 4-4-4-1.414 1.414 4 4.001 1.415 1.413 1.413-1.413z", fill: "currentColor", fillRule: "nonzero" })));
}

function ChevronUp24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M6.6 14.186L8.014 15.6l4-4 4 4 1.414-1.414-4-4.001-1.415-1.413-1.413 1.413z", fill: "currentColor", fillRule: "nonzero" })));
}

function ChevronRight24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M10.014 6.6L8.6 8.014l4 4-4 4 1.414 1.414 4.001-4 1.413-1.415-1.413-1.413z", fill: "currentColor", fillRule: "nonzero" })));
}

function Circle24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2a8 8 0 110 16 8 8 0 010-16z", fill: "currentColor", fillRule: "nonzero" })));
}

function Circlediagram24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M13 4a9 9 0 11-9 9v-1h8V4h1zm1 2.07V14H6.07A7.002 7.002 0 0020 13a7.002 7.002 0 00-6-6.93zM11 2v9H2v-1a8 8 0 018-8h1zM9 4.083A6.005 6.005 0 004.083 9H9V4.083z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Clipboard24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M19 18.662a.331.331 0 01-.346.338H5.346A.331.331 0 015 18.662V5.33c0-.181.161-.326.346-.33H7v4h10V5h1.634c.205.004.366.149.366.33v13.332zM9 5h2V3h2v2h2v2H9V5zm6-2V1H9v2H5.325C4.021 3.027 3 4.05 3 5.33v13.332A2.317 2.317 0 005.346 21h13.308A2.317 2.317 0 0021 18.662V5.33c0-1.28-1.021-2.303-2.346-2.33H15z" }),
            React.createElement("path", { d: "M8 13h8v-2H8zM8 17h8v-2H8z" }))));
}

function Clock24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M12 3c-4.961 0-9 4.039-9 9s4.039 9 9 9 9-4.039 9-9-4.039-9-9-9zm0 2c3.873 0 7 3.127 7 7s-3.127 7-7 7a6.99 6.99 0 01-7-7c0-3.873 3.127-7 7-7z" }),
            React.createElement("path", { d: "M13 11.465l3.305 2.203-1.11 1.664L11 12.535V7h2z" }))));
}

function Coins24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M11 20v2H2v-2h9zm11 0v2h-9v-2h9zm-11-3v2H2v-2h9zm11 0v2h-9v-2h9zm-4.5-9a4.5 4.5 0 110 9 4.5 4.5 0 010-9zM11 14v2H2v-2h9zm6.5-4a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM11 11v2H2v-2h9zm0-3v2H2V8h9zm2-3v2H4V5h9zm-2-3v2H2V2h9z", fill: "currentColor", fillRule: "nonzero" }))));
}

function CommonCamera24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M9.704 6L8.378 8H4.744A.76.76 0 004 8.75v8.513c0 .4.338.737.744.737h14.512a.749.749 0 00.744-.737V8.75a.76.76 0 00-.744-.75h-3.634l-1.326-2H9.704zM8.399 4.35A.635.635 0 018.901 4a.644.644 0 01.066 0h6.066c.24 0 .46.136.568.35L16.696 6h2.56A2.76 2.76 0 0122 8.75v8.513A2.748 2.748 0 0119.256 20H4.744A2.748 2.748 0 012 17.263V8.75A2.76 2.76 0 014.744 6h2.56L8.4 4.35z" }),
            React.createElement("path", { d: "M12 15a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm0 2a4.5 4.5 0 110-9 4.5 4.5 0 010 9z" }))));
}

function Computer24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M20 19h-2v1a1 1 0 002 0v-1zm-1-2a1 1 0 00-1 1h2a1 1 0 00-1-1zm-7-3v2H6v-2h6zm3.954.424h1.303c.614 0 1.06.222 1.354.602A3 3 0 0122 18v2a3 3 0 01-6 0v-2c0-1.085.576-2.036 1.44-2.562a1.11 1.11 0 00-.183-.014h-1.303c-1.66 0-2.454-.713-2.454-2.424H9.999L10 14H8l-.001-1H2V2h14v11h-1.5c0 1.134.323 1.424 1.454 1.424zM14 4H4v7h10V4zm-4.3.868l.707.707-4.832 4.832-.707-.707L9.7 4.868zm-2.216.19l.696.717L5.69 8.19l-.696-.718 2.49-2.416z", fill: "currentColor", fillRule: "nonzero" }))));
}

function ContactHeader24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M12 22.283c-1.535 0-2.775-1.258-2.775-2.804 0-1.547 1.24-2.805 2.776-2.805 1.535 0 2.775 1.258 2.775 2.805 0 1.546-1.24 2.804-2.775 2.804zm0-1.5c.702 0 1.276-.581 1.276-1.304 0-.723-.574-1.305-1.275-1.305-.702 0-1.276.582-1.276 1.305s.574 1.304 1.276 1.304zM12 1.418c2.735 0 5.295 1.224 7.053 3.295l-1.143.971c-1.478-1.74-3.622-2.766-5.91-2.766-3.218 0-6.071 2.005-7.227 4.95l-.115.402a7.939 7.939 0 00-.414 2.58c0 1.106.223 2.19.65 3.2l.44 1.042H4.051c-2.24 0-4.041-1.828-4.041-4.089 0-2.086 1.534-3.803 3.53-4.056C5.04 3.613 8.318 1.418 12 1.418zM1.51 11.003c0 1.088.65 2.012 1.575 2.397a9.82 9.82 0 01-.096-4.751 2.585 2.585 0 00-1.479 2.354z" }),
            React.createElement("path", { d: "M19.228 7.868l1.444-.407.087.316c.329.944.498 2.001.498 3.072 0 3.504-1.922 6.718-4.897 8.312a8.56 8.56 0 01-2.276.845l-.319-1.466a7.072 7.072 0 001.881-.698c2.493-1.336 4.11-4.042 4.11-6.993 0-.907-.142-1.798-.427-2.622l-.101-.36z" }),
            React.createElement("path", { d: "M8.137 5.034l1.449-.39c.062.232.278.642.72 1.067.775.746 1.955 1.203 3.67 1.203h5.974v1.5h-5.975c-2.095 0-3.65-.602-4.71-1.622-.66-.634-1-1.283-1.128-1.758zM14.352 12.994l1.069 1.053a4.86 4.86 0 01-3.471 1.456 4.86 4.86 0 01-3.471-1.456l1.068-1.053a3.36 3.36 0 002.403 1.009 3.36 3.36 0 002.402-1.01z" }),
            React.createElement("path", { d: "M19.95 8.414v-1.5c2.24 0 4.041 1.828 4.041 4.09 0 2.26-1.802 4.088-4.041 4.088v-1.5c1.406 0 2.541-1.151 2.541-2.589 0-1.437-1.135-2.589-2.541-2.589z" }))));
}

function Contract24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M16.016 0v4.011h-2V2H2v15.982h12.016V15.98h2v4.002H0V0h16.016zm.962 3.895l3.71 3.816-7.463 7.464h-3.85l-.027-3.727 7.63-7.553zm-1.732 4.527l-3.892 3.854.007.9h1.035l3.801-3.803-.951-.951zm1.705-1.686l-.638.631.945.945.622-.62-.93-.956zM5.67 12.78c.93.546.966 1.4.547 2.555.687-.914 1.042-1.222 1.734-1.222.509 0 .892.278 1.095.711.109.233.149.42.207.826.017.116.03.193.04.252h2.333v1.5h-2.58c-.505 0-.88-.282-1.077-.714-.103-.227-.14-.402-.198-.808a14.157 14.157 0 00-.01-.071c-.11.128-.269.323-.475.602a30.7 30.7 0 01-.174.236c-.726.967-1.226 1.37-2.045 1.115-.655-.204-.9-.767-.796-1.404.05-.31.103-.455.388-1.155.057-.14.095-.237.13-.332.214-.572.21-.746.12-.798-.413-.244-.74.18-1.009 2.223L2.414 16.1c.387-2.941 1.482-4.364 3.258-3.32zM11 6v2H3V6h8zm0-3v2H3V3h8z", id: "contract-24_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#contract-24_svg__a", transform: "translate(2 2)" }))));
}

function Cross24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M16.014 6.6l-4 4-4-4L6.6 8.014l3.999 4-3.999 4 1.414 1.414 4-4 4 4 1.414-1.414-4-4 4-4z", fill: "currentColor", fillRule: "nonzero" })));
}

function CrossEnclosed24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M12 5c-3.859 0-7 3.14-7 7s3.141 7 7 7 7-3.14 7-7-3.141-7-7-7m0 16c-4.963 0-9-4.038-9-9s4.037-9 9-9 9 4.038 9 9-4.037 9-9 9" }),
            React.createElement("path", { d: "M16.425 15.01L13.414 12l3-3L15 7.586l-3 3-3-3L7.586 9l3 3-3.011 3.01 1.414 1.415 3.01-3.011 3.012 3.01z" }))));
}

function Cup24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M17 22H7v-2h1.2c.432 0 .8-.383.8-.875v-2.928a6.019 6.019 0 01-2.664-3.212A4 4 0 116 5V2h12v3a4 4 0 11-.337 7.986A6.013 6.013 0 0115 16.196L15 19.126c0 .492.368.875.8.875H17v2zm-5-5a6.04 6.04 0 01-1-.083v2.208c0 .305-.046.6-.133.876h2.266a2.943 2.943 0 01-.133-.876v-2.208A6.04 6.04 0 0112 17zm4-13H8v1h4v2H8v4a4 4 0 108 0V4zm2 3v4a2 2 0 100-4zM6 7a2 2 0 100 4V7z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Damage24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M2 18h2v2H0V0h18v20h-7v-2h5V2H2v16zm7 0v2H6v-2h3zM7.925 9.865l3.717 2.312-.823 2.302L14 15.963V18h-2v-.763L8.323 15.52l.893-2.498-1.427-.888-1.424.665H2v-2h3.921l2.004-.935zM7 2v.854l2.252.76.754 1.529h3.763v3.952l2.224 1.79.004 2.542-4.228-3.379V7.143H8.763l-.988-1.914L5 4.289V2h2z", id: "damage-24_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#damage-24_svg__a", transform: "translate(3 2)" }))));
}

function DigitalServices24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M15.222 2c1.682 0 2.7.993 2.774 2.652l.004.194V11h1.222c1.663 0 2.7.928 2.774 2.507l.004.185v5.616C22 21 20.949 22 19.222 22h-2.444C15.05 22 14 21 14 19.308V15h-3v2h2v2H7v-2h2v-2H4.778c-1.682 0-2.7-.993-2.774-2.652L2 12.154V4.846c0-1.709.957-2.766 2.587-2.842L4.777 2h10.445zm4 11l-2.566.002c-.54.017-.656.163-.656.69l.002 5.723c.018.474.175.585.776.585h2.444c.644 0 .778-.128.778-.692v-5.616c0-.564-.134-.692-.778-.692zM18 17a1 1 0 110 2 1 1 0 010-2zM15.34 4.002L15.223 4H4.778c-.583 0-.755.139-.776.716L4 4.846v7.308c0 .64.134.822.66.844l.118.002h9.287c.206-1.03.893-1.706 1.934-1.924L16 4.846c0-.64-.134-.822-.66-.844z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Document24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M18 20V6.742L15.552 4H6v16h12zM16.448 2L20 5.979V22H4V2h12.448zM16 13H8v2h8v-2zm0-3H8v2h8v-2zm-2-3H8v2h6V7z", id: "document-24_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#document-24_svg__a" }))));
}

function Download24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M4 17v3h16v-3h2v5H2v-5h2zm9-15v12.238l4.3-4.299 1.414 1.415-6.707 6.707L5.3 11.354l1.414-1.415L11 14.224V2h2z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Dog24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M8.228.822c2.83.708 3.942 2.999 3.942 5.263 0 .716-.236 1.346-.68 1.788 2.025 2.12 3.205 4.291 3.508 6.508.64-.243.983-.804.983-1.758h2c0 2.165-1.202 3.481-2.96 3.819-.102.886-.344 1.897-.723 3.035l-.228.683H1.453v-1.905c0-1.372.921-2.53 2.179-2.887V8.991h2v6.263h.453v2H4.453a1 1 0 00-.996.906h9.158c.309-1.052.46-1.932.46-2.632 0-2.287-1.235-4.624-3.779-7.017-1.42-.181-2.032-1.318-2.032-3.152h2c0 1.042.086 1.179.453 1.179.371 0 .453-.098.453-.453 0-.483-.123-1.133-.402-1.71-.392-.806-1.03-1.364-2.025-1.612-1.556-.39-2.606-.06-3.365.999l-.299.417H2v.718c0 1.209 1.532 2.02 2.898 1.365l.864 1.804C3.136 9.324 0 7.663 0 4.896V2.18h3.083C4.333.747 6.104.291 8.228.822zm1.489 10.074c.636 0 1.247.189 1.766.535l-1.112 1.663a1.18 1.18 0 10-1.036 2.098l-.647 1.892a3.18 3.18 0 011.029-6.188z", id: "dog-24_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#dog-24_svg__a", transform: "translate(3 1.813)" }))));
}

function EInvoice24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M22 2v19.553l-5.838-2.655L12 21.135l-4.163-2.237L2 21.553V2h20zm-2 2H4v14.446l3.912-1.779 4.087 2.197 4.089-2.197L20 18.446V4zm-8.076 2c2.74 0 3.87 2.114 3.278 5.232h-4.82c.126 1.254.825 1.791 1.954 1.791.842 0 1.791-.25 2.544-.573l.25 1.774c-.877.483-1.88.77-2.884.77C9.792 14.994 8 13.274 8 10.39 8 7.38 10.007 6 11.924 6zm.018 1.81c-.896 0-1.541.734-1.577 1.88h2.92c.072-1.164-.376-1.88-1.343-1.88z", fill: "currentColor", fillRule: "nonzero" }))));
}

function EllipsisEnclosed24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M14.75 18.436v.004h-.009c-.842.36-1.769.56-2.741.56-.972 0-1.899-.2-2.741-.56H9.16v-.047a7.042 7.042 0 01-3.6-3.652A6.954 6.954 0 015 12c0-.972.2-1.898.56-2.74a7.034 7.034 0 013.6-3.652V5.56h.099a6.98 6.98 0 015.482 0h.009v.005a7.038 7.038 0 013.69 3.695c.36.842.56 1.768.56 2.74 0 .973-.2 1.899-.56 2.74a7.038 7.038 0 01-3.69 3.696m3.69-12.71a8.967 8.967 0 00-12.88 0 8.963 8.963 0 000 12.548c.055.056.11.112.166.166A8.962 8.962 0 0012 21a8.962 8.962 0 006.274-2.56c.056-.054.111-.11.166-.166a8.965 8.965 0 000-12.547" }),
            React.createElement("path", { d: "M9.16 10.801a1.497 1.497 0 00-.85-.24c-.9 0-1.53.63-1.53 1.44 0 .81.72 1.44 1.53 1.44.322 0 .613-.104.85-.275.359-.259.59-.679.59-1.166 0-.507-.211-.943-.59-1.199M12 10.56c-.81 0-1.44.63-1.44 1.44 0 .81.63 1.44 1.44 1.44.81 0 1.44-.63 1.44-1.44 0-.81-.63-1.44-1.44-1.44M15.69 10.56c-.368 0-.687.109-.94.289a1.39 1.39 0 00-.59 1.15c0 .463.238.86.59 1.123.265.197.592.318.94.318.81 0 1.53-.63 1.53-1.44 0-.81-.72-1.44-1.53-1.44" }))));
}

function Envelope24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M3.75 18h16.5V6H3.75v12zM22 4v16H2V4h20z" }),
            React.createElement("path", { d: "M12.038 11.675L4.37 5.058 3.015 6.53l9.028 7.867 8.94-7.867-1.358-1.468zM21.066 17.444l-4.3-4.57-1.442 1.386 4.3 4.57zM4.465 18.779l4.328-4.519-1.442-1.386-4.327 4.519z" }))));
}

function Farm24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M2 22v-2h.999v-7.555l-.33.298-1.338-1.486L12 1.655l10.669 9.602-1.338 1.486-.332-.3V20H22v2H2zM12 4.345l-7.001 6.3L5 20h2.999L8 12.11h8L15.999 20H19l-.001-9.356L12 4.345zM13.999 16l-3 4h3v-4zm-1.083-1.89L10 14.112 9.999 18l2.917-3.89zM12 7a2 2 0 012 2v1h-4V9a2 2 0 012-2z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Family24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
                React.createElement("path", { d: "M9 12a4 4 0 113.036-6.604l1.518-1.303a6 6 0 101.338 2.767l-.156-.81h-4.723c-.553 0-1.241-.503-1.587-1.226l-1.804.863C7.28 7.062 8.63 8.05 10.013 8.05H13A4 4 0 019 12z" }),
                React.createElement("path", { d: "M16 19a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 110-4 2 2 0 010 4zM4 22v-6.55c0-.994.724-1.826 2.389-2.529L5.61 11.08C3.276 12.064 2 13.532 2 15.449V22h2z" }),
                React.createElement("path", { d: "M12 22v-1.138c0-1.712.704-2.577 2.2-2.882l-.4-1.96c-2.43.496-3.8 2.18-3.8 4.842V22h2zM19.248 22v-1.138c0-1.546-.888-2.546-2.248-2.893l.495-1.938c2.198.562 3.753 2.312 3.753 4.831V22h-2z" })))));
}

function ExternalLink24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M15 3v2h2.586l-5.293 5.294 1.414 1.414L19 6.415V9h2V3z" }),
            React.createElement("path", { d: "M3 4v17h17.001l-.007-9.001-2 .002.005 7H5V6h7V4z" }))));
}

function Flag24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M17 13.088c-1.655.159-2.846-.291-4.195-.804C11.273 11.702 9.547 11.06 7 11.24v-5.9c2.12-.338 3.55.233 5.052.847 1.376.563 2.914 1.187 4.948 1.039v5.86zm.795-7.991c-2.067.43-3.42-.12-4.986-.76C11.253 3.7 9.501 2.999 7 3.32V2.5H5v18.033h2v-7.287c2.184-.186 3.605.343 5.094.908 1.26.478 2.55.969 4.223.969.577 0 1.199-.058 1.88-.195l.803-.162V4.844l-1.205.253z", fill: "currentColor", fillRule: "nonzero" })));
}

function FundAssortment24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M4 2v18h18v2H2V2h2zm12.044 10.86l5.47 3.283-1.028 1.714-4.53-2.717-5.91 2.955-5.417-2.167.742-1.856 4.583 1.832 6.09-3.044zm4.249-9.567l1.414 1.414-5.437 5.437L10.2 8.12l-4.574 3.66-1.25-1.56L9.8 5.88l5.929 1.975 4.564-4.562z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Gear24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M11.501 13.31a1.088 1.088 0 111.087-1.087c0 .599-.487 1.087-1.087 1.087m0-4.174a3.09 3.09 0 00-3.087 3.087 3.09 3.09 0 003.087 3.087 3.09 3.09 0 003.087-3.087 3.09 3.09 0 00-3.087-3.087" }),
            React.createElement("path", { d: "M16.623 12.861l-.244.649a6.495 6.495 0 01-1.119 1.892l-.455.538.947 1.636-1.503.879-.958-1.654-.715.159c-.808.179-1.515.158-2.124.006l-.731-.183-.968 1.672-1.503-.879.964-1.665-.501-.542c-.541-.586-.881-1.155-1.067-1.79l-.211-.718H4.5v-1.727h1.879l.244-.649a6.508 6.508 0 011.119-1.892l.455-.537-.948-1.636 1.504-.88.958 1.654.715-.159a4.688 4.688 0 012.124-.006l.731.183.968-1.672 1.504.88-.964 1.664.5.542c.542.587.881 1.155 1.067 1.79l.212.718h1.934v1.727h-1.879zm3.879 2V9.134h-2.49a6.358 6.358 0 00-.772-1.293l1.241-2.143L13.524 2.8l-1.246 2.153a6.77 6.77 0 00-1.552.002L9.478 2.8 4.521 5.698l1.255 2.168a8.648 8.648 0 00-.749 1.268H2.5v5.727h2.49c.198.447.454.876.772 1.293L4.52 18.297l4.958 2.898 1.247-2.153c.507.058 1.037.06 1.552-.002l1.247 2.155 4.958-2.898-1.256-2.168c.287-.403.539-.83.749-1.268h2.527z" }))));
}

function Gravestones24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
                React.createElement("path", { d: "M12.6 8.083l.4-.174.4.174c3.659 1.597 5.6 3.715 5.6 6.372V22H7v-7.545c0-2.657 1.941-4.775 5.6-6.372zM9 14.455V20h8v-5.545c0-1.63-1.269-3.088-4-4.358-2.731 1.27-4 2.728-4 4.358z" }),
                React.createElement("path", { d: "M4 16v-5.545c0-1.63 1.269-3.088 4.002-4.359 2.71 1.242 4.01 2.47 4.01 3.452h2c0-2.084-1.964-3.873-5.612-5.465L8 3.91l-.4.174C3.941 5.68 2 7.798 2 10.455V18h6.002v-2H4zM16.154 4.074C18.741 4.992 20 6.608 20 8.5V13h-2.27v2H22v-1-5.5c0-2.898-1.981-5.312-5.605-6.454l-.357-.112-.344.15c-1.33.58-2.564 1.456-3.414 2.339l1.44 1.387c.602-.624 1.48-1.268 2.434-1.736z" })))));
}

function GrowthArrow24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M22 5v6h-2l-.001-2.605-6.82 6.743-3.4-3.269-6.086 5.852-1.386-1.442 7.472-7.184 3.38 3.25L18.565 7H16V5h6z", id: "growth-arrow-24_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#growth-arrow-24_svg__a" }))));
}

function Guide24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M11 22.001h2V2h-2z" }),
            React.createElement("path", { d: "M12 4v2.001h6.172l1 1-1 1H14V10h5l3-2.999L19 4zM5 7l-3 3 3 3h5v-1.999H5.829L4.828 10l1.001-1H12V7zM8 20h8v2H8z" }))));
}

function Heart24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M8.127 6.515c-.809 0-1.618.3-2.22.902A3.115 3.115 0 005 9.637c0 .848.322 1.636.907 2.22L12 17.952l6.093-6.093A3.112 3.112 0 0019 9.638c0-.847-.322-1.636-.907-2.221-1.204-1.204-3.238-1.203-4.441 0L12 9.072l-1.652-1.654a3.135 3.135 0 00-2.221-.902zM12 20.779l-7.507-7.507A5.097 5.097 0 013 9.638a5.1 5.1 0 011.493-3.635 5.147 5.147 0 017.269 0l.238.239.238-.24a5.146 5.146 0 017.269 0A5.1 5.1 0 0121 9.639c0 1.38-.53 2.672-1.493 3.634L12 20.779z", fill: "currentColor", fillRule: "nonzero" })));
}

function Heartbeat24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M4.394 4.892c.245-.252.575-.392.93-.392.353 0 .683.14.929.392L7.5 6.176l1.248-1.284c.49-.504 1.368-.504 1.858 0 .526.54.526 1.453.001 1.993L7.5 10.08 4.394 6.885a1.458 1.458 0 010-1.993zM7.5 12.95l4.54-4.672c1.28-1.318 1.28-3.463 0-4.782C10.85 2.273 8.764 2.2 7.5 3.32A3.263 3.263 0 005.324 2.5c-.9 0-1.738.354-2.364.998-1.28 1.318-1.28 3.463 0 4.78l4.54 4.673zM20.57 15.015L17.02 9.1l-4.92 7.874-1.988-3.97-2.598 4.011h-5.51v2H8.6l1.288-1.989 2.018 4.03 5.079-8.126 2.45 4.085h2.568v-2z" }))));
}

function House24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M12.002 4.25L4 10.367V20h2v-8.645l6.002-4.588L18 11.355V20h2v-9.633z" }),
            React.createElement("path", { d: "M9 13v7h2v-5h2v5h2v-7z" }))));
}

function HouseSun24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M19 2h-2c0 2.757 2.243 5 5 5V5c-1.682 0-3-1.318-3-3zM14.673 7.913l1.414 1.414 2.12-2.12-1.414-1.414zM13 4h3V2h-3zM20 11h2V8h-2zM10.002 6.741L3 12.094V21h2v-7.918l5.002-3.823L15 13.082V21h2v-8.906z" }),
            React.createElement("path", { d: "M7 21h2v-5h2v5h2v-7H7z" }))));
}

function IdCard24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M20 16.2c0 .394-.344.8-.8.8-9.05.02-13.85.02-14.4 0-.347 0-.8-.39-.8-.8V7.8c0-.441.359-.8.8-.8h14.4c.441 0 .8.359.8.8v8.4zM4.8 5a2.794 2.794 0 00-2.672 2.008A2.77 2.77 0 002 7.8v8.4C2 17.813 3.313 19 4.8 19h14.4c1.613 0 2.8-1.25 2.8-2.8V7.8C22 6.256 20.744 5 19.2 5H4.8z" }),
            React.createElement("path", { d: "M9.5 9v1c-.55 0-1 .45-1 1 0 .551.45 1 1 1s1-.449 1-1c0-.55-.45-1-1-1V9zm0 0V8c1.655 0 3 1.345 3 3 0 1.656-1.345 3-3 3s-3-1.344-3-3c0-1.655 1.345-3 3-3v1z" }),
            React.createElement("path", { d: "M14.5 17h-2a3 3 0 00-6 0h-2a5 5 0 1110 0zM14 11h4V9h-4zM14 14h4v-2h-4z" }))));
}

function IdSign24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M21.305 13.28l1.39 1.44-7.943 7.668-4.445-4.267 1.386-1.442 3.055 2.932 6.557-6.33zM8.5 2a3.75 3.75 0 013.392 5.352 8.501 8.501 0 011.813 2.027c.6.951 1.006 2.266 1.24 3.954l.048.368.078.651-.566.331c-1.548.906-3.302 1.234-6.001 1.234-2.57 0-4.282-.295-5.775-1.102l-.234-.132-.566-.331.078-.651c.225-1.866.645-3.303 1.288-4.322A8.535 8.535 0 015.108 7.35 3.75 3.75 0 018.5 2zm2.086 6.866l-.087.057A3.732 3.732 0 018.5 9.5a3.733 3.733 0 01-2.085-.632 6.526 6.526 0 00-1.429 1.578c-.36.573-.649 1.417-.85 2.527l-.047.281.203.085c.972.384 2.16.554 3.843.575l.369.003c1.876 0 3.163-.167 4.204-.578l.202-.085-.047-.281c-.182-1.01-.436-1.799-.753-2.364l-.096-.163a6.57 6.57 0 00-1.428-1.58zM8.5 4a1.75 1.75 0 100 3.5 1.75 1.75 0 000-3.5z", fill: "currentColor", fillRule: "nonzero" }))));
}

function ImageDoc24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M22 2v20H2V2h20zM7.957 13.457L4 17.414V20h9.773l-5.816-6.543zM15 15.415l-1.391 1.39L16.449 20h3.136L15 15.415zM20 4H4v10.584l4.043-4.041 4.234 4.764L15 12.586l5 4.999V4zm-8 1a3 3 0 110 6 3 3 0 010-6zm0 2a1 1 0 100 2 1 1 0 000-2z", fill: "currentColor", fillRule: "nonzero" }))));
}

function InfoEnclosed24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M12 19c-3.859 0-7-3.14-7-7 0-1.128.274-2.19.75-3.135C6.903 6.577 9.268 5 12 5s5.097 1.577 6.25 3.865c.476.945.75 2.007.75 3.135 0 3.86-3.141 7-7 7m6.25-13.462a8.96 8.96 0 00-12.5 0A8.97 8.97 0 003 12c0 4.962 4.037 9 9 9s9-4.038 9-9a8.97 8.97 0 00-2.75-6.462" }),
            React.createElement("path", { d: "M11 10.8V17h2v-6.2zM12 6.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5" }))));
}

function Lightbulb24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M14 20v2h-4v-2h4zm1-3v2H9v-2h6zM12 6c3.596 0 5 1.423 5 5 0 1.095-.325 2.02-.976 3.144l-.858 1.432c-.145.252-.163.313-.166.386V16h-2c0-.469.151-.907.433-1.428l.12-.216c.044-.074.091-.154.145-.241l.447-.723c.59-.972.855-1.656.855-2.392l-.005-.406c-.058-2.066-.616-2.564-2.787-2.593L12 8c-2.486 0-3 .522-3 3 0 .681.223 1.314.714 2.16l.588.957c.107.175.189.316.265.456.246.455.393.847.426 1.252L11 16H9l-.003-.073c-.016-.12-.126-.3-.851-1.49C7.382 13.181 7 12.192 7 11c0-3.577 1.404-5 5-5zm-6.5 4v2H3v-2h2.5zM21 10v2h-2.5v-2H21zM5.707 4.293L7.475 6.06 6.06 7.475 4.293 5.707l1.414-1.414zm12.653-.075l1.413 1.415-1.77 1.766-1.413-1.415 1.77-1.766zM13 2v2.5h-2V2h2z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Logout24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M16.282 9.697L17.547 11h-6.05v2h6.05l-1.265 1.303 1.434 1.394L21.308 12l-3.592-3.696z" }),
            React.createElement("path", { d: "M10.407 18a5.83 5.83 0 01-4.176-1.75c-2.313-2.344-2.313-6.157 0-8.5A5.83 5.83 0 0110.407 6a5.83 5.83 0 014.176 1.75l1.424-1.405A7.818 7.818 0 0010.408 4a7.818 7.818 0 00-5.6 2.345c-3.077 3.118-3.077 8.191 0 11.31a7.818 7.818 0 005.6 2.345 7.818 7.818 0 005.6-2.345l-1.424-1.405A5.83 5.83 0 0110.408 18" }))));
}

function List24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { transform: "translate(3 4)", fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { fillRule: "nonzero", d: "M6 3h12V1H6zM6 9h12V7H6zM6 15h12v-2H6z" }),
            React.createElement("circle", { cx: 2, cy: 2, r: 1.5 }),
            React.createElement("circle", { cx: 2, cy: 8, r: 1.5 }),
            React.createElement("circle", { cx: 2, cy: 14, r: 1.5 }))));
}

function Mc24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M15.814 3.42l5.05 7.08h-1.94c-.621 0-1.525.267-2.333.676l.707.708a3.938 3.938 0 11-1.507 1.322l-.793-.795c-.56.708-.933 1.622-.99 2.388L14 15v.414L12.414 17H9.278L7 14.721l-1.216 1.217-1.414-1.414 1.215-1.217-1.692-1.692H2v-2h2.722L10.106 15h1.479l.437-.437.003-.042c.15-1.463.955-3.094 2.153-4.138l.204-.168c.717-.564 1.635-1.036 2.542-1.34l.263-.085-3.001-4.208 1.628-1.162zM3.34 11.731l.811 1.828a1.938 1.938 0 102.502 2.675l.081-.174 1.854.752a3.938 3.938 0 11-5.464-4.976l.216-.105zm15.716 1.739c-.055 0-.109.002-.162.006l.814.816-1.414 1.414-1.032-1.032a1.938 1.938 0 101.794-1.205zM6.303 7l3 2h2.627l.083-.013c.458-.098.911-.491.979-.888L13 8h2c0 1.552-1.331 2.753-2.736 2.974l-.162.02L12 11H8.697l-3-2H2V7h4.303z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Menu24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M5 8h14V6H5zM5 13h14v-2H5zM5 18h14v-2H5z" }))));
}

function NotificationSwish24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M5.041 15.452l.341-.42c2.318.652 4.869-.193 6.425-2.095 2.082-2.558 1.725-6.424-.892-8.566l-.476-.357 2.164-2.535.438.329C14.904 3.288 16 5.534 16 8c0 4.438-3.562 8-8 8a8.063 8.063 0 01-2.959-.548zm-2.027-1.205A8.002 8.002 0 010 8c0-4.438 3.562-8 8-8 1.151 0 2.246.219 3.233.712l-.361.398C8.384.336 5.75 1.042 4.133 3.062c-2.082 2.618-1.665 6.366.952 8.567l.476.357-2.164 2.589-.383-.328z", id: "notification-swish-24_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#notification-swish-24_svg__a", transform: "translate(4 4)" }))));
}

function Padlock24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M12.456 6.948a4 4 0 10-8 0v2h-2v-2a6 6 0 1112 0v2h2v11.974h-16V8.948h12v-2zm2 4h-12v7.974h12v-7.974zm-6 1a1.5 1.5 0 011.157 2.456L11 18H6l1.307-3.588a1.5 1.5 0 011.15-2.464z", id: "padlock-24_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#padlock-24_svg__a", transform: "translate(3.544 1.052)" }))));
}

function MobilePhone24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M14 17a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3h8a3 3 0 013 3v14zm-2-3.5H2V17a1 1 0 001 1h8a1 1 0 001-1v-3.5zM7 14a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm5-9.5H2v8h10v-8zM11 2H3a1 1 0 00-1 1v.5h10V3a1 1 0 00-1-1z", id: "mobile-phone-24_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#mobile-phone-24_svg__a", transform: "translate(5 2)" }))));
}

function Moped24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M3.388 14.234l1.077 1.685-.121.078-.04.04a1.24 1.24 0 00-.297.694L4 16.863c0 .678.518 1.214 1.14 1.214.306 0 .593-.129.806-.355l.042-.05.12-.236 1.784.904-.168.332-.092.148a3.111 3.111 0 01-2.492 1.257C3.398 20.077 2 18.63 2 16.863c0-.847.324-1.645.888-2.24l.146-.144.14-.108.214-.137zM20 14a3 3 0 110 6 3 3 0 010-6zm0 2a1 1 0 100 2 1 1 0 000-2zM16.66 4l3.003 7.008.099-.004L20 11h2v2h-2c-2.235 0-3.887 1.352-3.994 2.845L16 16v2H8.648L2 12.66V8h10v1c0 1.749-1.032 2.981-2.588 3.583.257.532.762.879 1.318.879.753 0 1.214-.454 1.265-1.299L12 12h2c0 2.017-1.325 3.462-3.27 3.462-1.525 0-2.832-1.026-3.308-2.474l-.183.008L7 13v-2c1.249 0 2.186-.357 2.659-.971L9.678 10H4v1.701L9.352 16H14c0-2.05 1.49-3.84 3.652-4.605L15.34 6H14V4h2.66z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Mortgage24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M6.5 12.733l5.5 4.278V21h-2v-3.01l-3.5-2.723L3 17.989V21H1v-3.99l5.5-4.277zM7.5 18v3h-2v-3h2zm7-5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm0 1.886a.614.614 0 100 1.228.614.614 0 000-1.228zM14.9.539l1.872 8.803-2.773.589L14 10a3 3 0 01-5.768 1.158L2.099 12.46.23 3.658 14.9.539zM11 9a1 1 0 100 2 1 1 0 000-2zm2.36-6.089L2.6 5.198l1.04 4.89 4.487-.954a3.001 3.001 0 015.145-1.093L14.4 7.8l-1.04-4.89z", id: "mortgage-24_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#mortgage-24_svg__a", transform: "translate(3 1)" }))));
}

function Paper24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M5 3v18h14l-.005-12.414L13.414 3H5zm2 2h4v6h5.996L17 19H7V5zm6 .415L16.581 9H13V5.415z", fill: "currentColor", fillRule: "nonzero" })));
}

function Parasol24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M22.059 18v2c-1.538 0-2.811.253-3.829.748l-.25.129c-1.282.703-2.834 1.072-4.647 1.118l-.392.005H2v-2h10.941c1.538 0 2.811-.253 3.829-.748l.25-.129c1.282-.703 2.834-1.072 4.647-1.118l.392-.005zM9.48 7.145a1 1 0 011.038 0l6.176 3.75a1 1 0 01.42.511l.824 2.25A1 1 0 0117 15h-5.727a1 1 0 01-.274-.038L11 19H9v-4.038a1 1 0 01-.14.03L8.728 15H3a1 1 0 01-.94-1.344l.824-2.25a1 1 0 01.42-.51zM10 9.17l-5.358 3.253L4.43 13h3.95l1.002-.786a1 1 0 011.123-.077l.113.077 1.001.786h3.95l-.212-.578L10 9.169zM22 7v3h-2V7h2zm-4.54-1.817l1.414 1.414-2.122 2.121-1.414-1.414 2.121-2.121zM20 2a2 2 0 001.85 1.995L22 4v2a4 4 0 01-3.995-3.8L18 2h2zm-3 0v2h-3V2h3z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Payment24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M8.828 16.014a2.982 2.982 0 110 5.964 2.982 2.982 0 010-5.964zm12.827-2.88l1.406 1.422-7.129 7.046-3.44-3.525 1.432-1.396 2.034 2.083 5.697-5.63zm-12.827 4.88a.982.982 0 100 1.964.982.982 0 000-1.964zM17.469.503l1.25 4.332 1.064.227-2.23 10.485-7.903-1.68a3.38 3.38 0 01-6.133-1.303L.866 12 3.094 1.514 8.04 2.565 17.47.503zM6.846 10.605a1.378 1.378 0 100 2.756 1.378 1.378 0 000-2.756zM4.634 3.886L3.237 10.46l.537.115a3.379 3.379 0 016.45 1.37l5.79 1.23 1.396-6.573L4.634 3.886zm11.433-1.029l-3.28.717 3.715.79-.435-1.507z", id: "payment-24_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#payment-24_svg__a", transform: "translate(0 1)" }))));
}

function Pencil24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M4 3v18h14.001l-.007-5.001-2 .002.005 3H6v-14h10V3z" }),
            React.createElement("path", { d: "M19.778 7.967l-.739-.739-6.032 6.033V14h.739l6.032-6.033zM14.574 16h-3.567v-3.567L19.039 4.4l3.568 3.567L14.574 16z" }))));
}

function PdfDoc24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M16.414 2L20 5.586V8h-2V6.414L15.586 4H6v16h11.998l-.005-3.998 2-.004.01 6.002H4V2h12.414zm-1.767 7.05c1.504 0 2.507 1.181 2.507 2.958 0 1.794-1.003 2.992-2.507 2.992h-1.904V9.05zm6.494 0v1.114h-1.93v1.606h1.718v1.114h-1.717V15h-1.199V9.05h3.128zm-11.11 0c1.173 0 1.981.867 1.981 2.159 0 1.258-.79 2.1-1.93 2.1h-.875v1.683H8V9.05zm4.599 1.147h-.689v3.655h.689c.799 0 1.326-.73 1.326-1.835 0-1.088-.527-1.82-1.326-1.82zm-4.548-.042h-.9v2.066h.9c.451 0 .774-.417.774-1.046 0-.612-.323-1.02-.774-1.02z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Pension24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M17.686 16.4H4.314L3.416 18h15.168l-.898-1.6zm1.171-2L22 20H0l3.143-5.6h15.714zM15.374 8l3.143 5.6H3.496L6.639 8h8.735zm-1.171 2H7.809l-.897 1.6H15.1l-.898-1.6zM11.016.002L15.058 7.2H6.954L11.016.002zm-.006 3.027L9.596 5.61h2.82l-1.406-2.58z", id: "pension-24_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#pension-24_svg__a", transform: "translate(1 2)" }))));
}

function PensionOccupational24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M17.686 16.4H4.314L3.416 18h15.168l-.898-1.6zm1.171-2L22 20H0l3.143-5.6h15.714zM15.374 8l3.143 5.6H3.496L6.639 8h8.735zM10.999.002L14.957 7.2H7.022L11 .002zm.004 3.532L9.91 5.51h2.176l-1.082-1.975z", id: "pension-occupational-24_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#pension-occupational-24_svg__a", transform: "translate(1 2)" }))));
}

function PensionPrivate24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M17.686 16.4H4.314L3.416 18h15.168l-.898-1.6zm1.171-2L22 20H0l3.143-5.6h15.714zM15.374 8l3.143 5.6H3.496L6.639 8h8.735zm-1.171 2H7.809l-.897 1.6H15.1l-.898-1.6zM10.999.002L14.957 7.2H7.022L11 .002z", id: "pension-private-24_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#pension-private-24_svg__a", transform: "translate(1 2)" }))));
}

function Percent24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M16.5 20a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0-2a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM7.5 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0-2a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM16.714 4.382l-11 14 1.572 1.236 11-14z" }))));
}

function PensionState24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M18.857 14.4L22 20H0l3.143-5.6h15.714zM15.374 8l3.143 5.6H3.496L6.639 8h8.735zm-1.171 2H7.809l-.897 1.6H15.1l-.898-1.6zM10.999.002L14.957 7.2H7.022L11 .002zm-.02 3.017L9.341 5.857h3.273l-1.637-2.838z", id: "pension-state-24_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#pension-state-24_svg__a", transform: "translate(1 2)" }))));
}

function Phone24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M16.909 18.571a.388.388 0 00.17-.223.39.39 0 00-.016-.28l-1.613-3.076a.33.33 0 00-.205-.169.334.334 0 00-.264.026l-2.32 1.253-.908-.627c-.633-.437-1.262-1.21-1.886-2.404-.628-1.198-.9-2.125-.929-2.872l-.043-1.122.988-.532 1.38-.745c.113-.06.213-.388.154-.5L9.804 4.223a.33.33 0 00-.204-.171.327.327 0 00-.265.028l-1.783.962c-.298.16-.612.594-.817 1.264-.523 1.709-.295 4.264 1.49 7.67 1.315 2.508 2.771 4.085 4.196 4.963 1.169.72 2.196.867 2.707.591l1.78-.959zm.853 1.585l-1.781.96c-1.156.623-2.839.382-4.505-.645-1.264-.779-3.133-2.394-4.845-5.659C4.135 10.05 4.668 6.91 5.013 5.78c.335-1.093.932-1.916 1.685-2.321l1.783-.962a2.122 2.122 0 011.645-.165A2.129 2.129 0 0111.4 3.39l1.612 3.074c.517.983.089 2.391-.893 2.92l-1.381.745c.01.252.092.901.724 2.106.603 1.151 1.076 1.594 1.315 1.759l1.35-.73a2.136 2.136 0 011.646-.162 2.13 2.13 0 011.271 1.053l1.614 3.078c.26.495.31 1.094.143 1.642a2.184 2.184 0 01-1.038 1.281z", fill: "currentColor", fillRule: "nonzero" })));
}

function Pin24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M17.5 9.544C17.5 6.486 15.028 4 12 4S6.5 6.486 6.5 9.544c0 1.435.572 2.833 1.607 3.927l3.81 3.837h.165l3.813-3.84c1.04-1.107 1.605-2.498 1.605-3.924zm-.168 5.316l-4.417 4.448h-1.83L6.688 14.88C5.27 13.382 4.5 11.494 4.5 9.544 4.5 5.384 7.865 2 12 2s7.5 3.384 7.5 7.544c0 1.95-.77 3.838-2.168 5.316z" }),
            React.createElement("path", { d: "M5 19v2h14v-2zM12 10.501c-.57 0-1-.43-1-1A.978.978 0 0112 8.5c.57 0 1 .43 1 1.001h2A2.969 2.969 0 0012 6.5c-1.682 0-3 1.318-3 3.001 0 1.682 1.318 3 3 3v-2z" }))));
}

function Plus24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M11 6v5H6v2h5v5h2.001v-5H18v-2h-4.999V6z", fill: "currentColor", fillRule: "nonzero" })));
}

function Pregnant24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M16 19.5v2.503h-2V19.5h2zM12 2a4 4 0 013.285 6.283c.99.492 1.644 1.37 1.71 2.523L17 11v4.5c0 1.859-1.191 2.922-2.818 2.996L14 18.5h-4a1 1 0 01-.117-1.993L10 16.5h4c.64 0 .956-.23.996-.859L15 15.5V11c0-.6-.44-1.003-1.28-1.133a.998.998 0 01-.335-.114c-.431.16-.898.247-1.385.247-.618 0-1.203-.14-1.725-.39l.142-.067c-1.085.498-1.383.817-1.414 1.338l-.003.1v1.061c.235-.02.478-.034.728-.04L10 12v2c-2.824 0-4 .94-4 3 0 1.995 1.104 2.94 3.74 2.997L10 20v2c-3.843 0-6-1.726-6-5 0-2.288 1.054-3.82 3-4.535V10.98c0-1.184.513-2.044 1.667-2.768A4 4 0 0112 2zm0 2a2 2 0 100 4 2 2 0 000-4z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Print24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M6 17H2v-5.5A3.5 3.5 0 015.5 8H6V2h12v6h.5a3.5 3.5 0 013.5 3.5V17h-4v5H6v-5zm0-2v-2h12v2h2v-3.5a1.5 1.5 0 00-1.5-1.5h-13A1.5 1.5 0 004 11.5V15h2zm2-7h8V4H8v4zm0 7v5h8v-5H8z", fill: "currentColor", fillRule: "nonzero" }))));
}

function RadioEnclosed24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M12 5c-3.859 0-7 3.14-7 7s3.141 7 7 7 7-3.14 7-7-3.141-7-7-7m0 16c-4.963 0-9-4.038-9-9s4.037-9 9-9 9 4.038 9 9-4.037 9-9 9" }),
            React.createElement("path", { d: "M12 13.44c-.81 0-1.44-.63-1.44-1.44 0-.81.63-1.44 1.44-1.44.81 0 1.44.63 1.44 1.44 0 .81-.63 1.44-1.44 1.44" }))));
}

function RadioRound24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M12 5c-3.859 0-7 3.14-7 7s3.141 7 7 7 7-3.14 7-7-3.141-7-7-7m0 16c-4.963 0-9-4.038-9-9s4.037-9 9-9 9 4.038 9 9-4.037 9-9 9" }),
            React.createElement("path", { d: "M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0 2.5a4 4 0 110-8 4 4 0 010 8z" }))));
}

function Rv24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M20.765 4l2.264 8.358L21.807 18l-.979.001A2.998 2.998 0 0118 20a3.001 3.001 0 01-2.829-2l-5.342.001a3 3 0 01-5.658 0L2.193 18 .971 12.358 3.235 4h17.53zM7 16a1 1 0 100 2 1 1 0 000-2zm11 0a1 1 0 100 2 1 1 0 000-2zm1.234-10H4.765L3.41 11H7v2H3.156l.65 3h.365a3.001 3.001 0 015.658 0h5.342a3.001 3.001 0 015.203-.834l.596-2.755L20.316 10H17V8h2.775l-.541-2zM15 8v7h-2v-5h-1v5h-2V8h5z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Save24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M17.77 3l-.06 4.213A7.18 7.18 0 0119.702 10H22v6h-2.292c-.394 1.006-.997 1.662-1.943 2.093L17.753 22h-4.869v-2.217H10.54V22H5.722v-3.391c-1.922-1.307-3.257-3.686-3.257-6.055 0-.64.072-1.265.208-1.863A2.997 2.997 0 011 8c0-1.665 1.35-3 2.998-3v2c-.584 0-1.045.455-1.045 1 0 .32.16.61.41.794 1.095-2.12 3.098-3.577 5.484-3.577h3.715C13.475 3.631 14.616 3 16.78 3h.992zm-1.983 2.065c-.88.149-1.275.58-1.767 1.597l-.27.555H8.848c-2.469 0-4.428 2.412-4.428 5.337 0 1.823 1.17 3.743 2.742 4.609l.514.283V20h.912v-2.217h6.25V20h.969l.01-3.356.698-.21c.943-.285 1.272-.647 1.544-1.692l.193-.742h1.796v-2h-1.793l-.195-.739c-.284-1.075-.983-2.076-1.903-2.753l-.414-.305.045-3.138zM14.186 9v2H9.302V9h4.884z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Screen24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M20 15.5c0 .271-.229.5-.5.5h-15a.507.507 0 01-.5-.5v-9c0-.271.229-.5.5-.5h15c.271 0 .5.229.5.5v9zM4.5 4A2.503 2.503 0 002 6.5v9C2 16.878 3.122 18 4.5 18H11v1H7v2h10v-2h-4v-1h6.5c1.378 0 2.5-1.122 2.5-2.5v-9C22 5.122 20.878 4 19.5 4h-15z", fill: "currentColor", fillRule: "nonzero" })));
}

function Search24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M19.638 20.954l-3.804-3.803 1.317-1.316 3.803 3.803zM10.354 4.862a5.499 5.499 0 00-5.492 5.493 5.499 5.499 0 005.492 5.492 5.499 5.499 0 005.493-5.492 5.499 5.499 0 00-5.493-5.493m0 12.847C6.3 17.71 3 14.41 3 10.355 3 6.299 6.3 3 10.354 3c4.056 0 7.355 3.3 7.355 7.355 0 4.055-3.3 7.354-7.355 7.354" }))));
}

function Shield24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
                React.createElement("path", { d: "M6.273 2h11.454c0 1.636 1.637 3.273 3.273 3.273v7.363c0 3.819-3 7.091-9 9.819-6-2.728-9-6-9-9.819V5.273c1.636 0 3.273-1.637 3.273-3.273zM5 6.825v5.811c0 2.72 2.21 5.275 7 7.608 4.79-2.333 7-4.888 7-7.608v-5.81A5.788 5.788 0 0116.175 4h-8.35A5.788 5.788 0 015 6.825z" }),
                React.createElement("path", { d: "M8.43 9.352l5.727 5.728 1.414-1.415-5.728-5.727z" }),
                React.createElement("path", { d: "M9.843 15.08l5.728-5.728-1.414-1.414-5.728 5.727z" })))));
}

function Share24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M15 0a4 4 0 11-2.921 6.732l-4.2 2.291a4.008 4.008 0 010 1.954l4.2 2.29a4 4 0 11-.96 1.756l-4.198-2.29a4 4 0 110-5.465l4.2-2.291A4 4 0 0115 0zm0 14a2 2 0 100 4 2 2 0 000-4zM4 8a2 2 0 100 4 2 2 0 000-4zm11-6a2 2 0 100 4 2 2 0 000-4z", id: "share-24_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#share-24_svg__a", transform: "translate(2 2)" }))));
}

function Smalltruck24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M17 3v11H4.219l.281 1.401a2.982 2.982 0 011.324-.396L6 15c1.306 0 2.417.835 2.83 2h6.34A3.001 3.001 0 0120 15.765v-3.569L18.71 9H18V7h2.06L22 11.806V19h-1.171a3 3 0 01-5.658 0H8.829A3 3 0 013 18l.003.115L2.18 14H2V3h15zm1 14a1 1 0 100 2 1 1 0 000-2zM6 17a1 1 0 100 2 1 1 0 000-2zm9-12H4v7h11V5z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Snailmail24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M17 2v2h-2v6.82h-2L12.999 8H9.263c.277.647.392 1.437.336 2.351L9.598 18h10.401L20 10.535C20 8.698 19.407 8 18 8h-1V6h1c2.59 0 3.999 1.659 4 4.535V20l-9.001-.001L13 22h-2l-.001-2.001L2 20v-2l5.598-.001.003-7.709C7.703 8.627 7.212 8.016 5.859 8h-.106l-.104.003C4.373 8.048 3.905 8.675 4 10.35V16H2l.002-5.591C1.85 7.774 3.062 6.177 5.4 6.014V6H13L13 2h4z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Snowmobile24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M12.707 3.293l8.44 8.44-1.865 1.957-.092.085 1.746 1.75c.302-.226.676-.56 1.175-1.052l.182-.18 1.414 1.414c-1.27 1.27-2.001 1.829-2.827 2.096-.448.144-.775.185-1.47.195l-.42.002h-3.932v-2l3.526-.002-1.073-1.072a1.87 1.87 0 01-.363.067l-.15.007h-2l.004-2h1.973l.033-.006c.073-.024.224-.127.62-.492l.24-.225.484-.51-2.853-2.852L13.414 11H5.75c-.134 0-.436.19-.538.36l-.029.062-1.923-.549c.297-1.038 1.37-1.79 2.331-1.867L5.75 9h5.835l-1.292-1.293 1.414-1.414L13.5 8.085l.585-.585-2.792-2.793 1.414-1.414zM11.37 12C12.872 12 14 13.383 14 15s-1.127 3-2.63 3H4.63C3.129 18 2 16.617 2 15s1.128-3 2.63-3zm0 2H4.631C4.333 14 4 14.408 4 15c0 .592.333 1 .63 1h6.74c.298 0 .63-.408.63-1 0-.592-.332-1-.63-1z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Star24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { id: "star-24_svg__a", d: "M18 17.593V.1H0v17.493z" })),
        React.createElement("g", { transform: "translate(3 2.5)", fill: "none", fillRule: "evenodd" },
            React.createElement("mask", { id: "star-24_svg__b", fill: "#fff" },
                React.createElement("use", { xlinkHref: "#star-24_svg__a" })),
            React.createElement("path", { d: "M9 11.92c.21 0 .42.065.597.196l2.441 1.815-.95-2.955a.999.999 0 01.36-1.11l2.498-1.842-3.065.007h-.002a1 1 0 01-.953-.698L9 4.411l-.926 2.922a1.01 1.01 0 01-.955.698l-3.065-.007 2.5 1.841a.999.999 0 01.358 1.111l-.95 2.955 2.441-1.815c.178-.13.387-.197.597-.197m4.944 5.674a.998.998 0 01-.596-.197L9 14.166l-4.348 3.23a1 1 0 01-1.548-1.109l1.684-5.238-4.38-3.226A1.001 1.001 0 011 6.018h.002l5.388.012L8.047.798a1 1 0 011.906 0L11.61 6.03l5.388-.012H17a1 1 0 01.593 1.805l-4.38 3.226 1.683 5.238a.999.999 0 01-.952 1.306", fill: "currentColor", fillRule: "nonzero", mask: "url(#star-24_svg__b)" }))));
}

function Sustainability24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M21.227 1.5l.15 1.393c.415 3.85.623 6.853.623 9.016C22 15.284 18.885 18 16.06 18c-1.07 0-2.03-.269-2.862-.8l-3.351 5.332-1.694-1.064 1.196-1.906-.105.093-4.335-5 1.511-1.31.334.384c-.08-.35-.258-.731-.557-1.132-.613-.826-1.449-1.54-2.515-2.143-.527 2.49-.45 4.157.13 4.961.338.47.8.61 1.602.409l.485 1.94c-1.554.388-2.862-.003-3.71-1.18-1.12-1.553-1.12-4.145-.157-7.836l.296-1.133 1.073.469c1.9.83 3.373 1.936 4.402 3.32 1.113 1.497 1.236 3.083.655 4.29l1.926 2.222 3.417-5.438-1.674-2.99 1.746-.977 1.14 2.038 1.552-2.466 1.693 1.064-1.525 2.424H19v2h-3.524l-1.214 1.934c.513.332 1.104.495 1.797.495C17.837 16 20 14.114 20 11.91c0-1.816-.155-4.286-.466-7.404-3.75 1.78-6.173 3.046-7.232 3.773-1.466 1.007-1.786 3.482-.466 4.843l-1.435 1.393c-2.203-2.27-1.696-6.191.769-7.885 1.297-.89 4.208-2.39 8.788-4.536l1.269-.594z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Tag24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M5.414 13.004L11 18.59l8.004-8.003L19 7.419l-2.415-2.415-3.167-.003-8.004 8.003zm5.586 8a.997.997 0 01-.707-.293l-7-7a.999.999 0 010-1.414l9.004-9.004A1 1 0 0113.004 3h.001l3.996.004c.265 0 .518.105.706.293l3 3a1 1 0 01.293.706l.004 3.996c0 .266-.106.521-.293.708l-9.004 9.004a.997.997 0 01-.707.293z" }),
            React.createElement("path", { d: "M15 11a1.961 1.961 0 01-1.548-.71 1.395 1.395 0 01-.323-.516C13 9.516 13 9.258 13 9c0-1.097.903-2 2-2s2 .903 2 2-.903 2-2 2" }))));
}

function Text1Round24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M12 19c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7m0-16c-4.962 0-9 4.038-9 9s4.038 9 9 9 9-4.038 9-9-4.038-9-9-9" }),
            React.createElement("path", { d: "M12.926 7.705h-2.638v1.403h1.007v5.614h-1.15V16.1h3.968v-1.38h-1.187z" }))));
}

function Text2Round24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M12 5c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7m0 16c-4.962 0-9-4.038-9-9s4.038-9 9-9 9 4.038 9 9-4.038 9-9 9" }),
            React.createElement("path", { d: "M11.307 10.175H9.88c-.012-1.643.85-2.59 2.267-2.59 1.967 0 2.89 2.386 1.523 4.617l-1.427 2.338h2.183v1.56h-4.63v-.384l2.483-4.186c.239-.408.515-.887.515-1.379 0-.684-.252-1.032-.72-1.032-.503 0-.767.361-.767 1.056" }))));
}

function Tractor24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M7.309 13.735a4.074 4.074 0 110 8.147 4.074 4.074 0 010-8.147zM15.8 2a3.235 3.235 0 013.226 2.988l.01.247L19.034 9h1.968v7.311a3.235 3.235 0 11-2-.89L19.003 11h-4.501l-3.05-5.883h-6.51v5.76a7.252 7.252 0 019.432 5.516l.04.237-1.975.307a5.251 5.251 0 00-9.678-1.91l-.119.207-1.754-.96a7.264 7.264 0 012.053-2.355l.001-8.801h9.726L15.717 9h1.318V5.235a1.236 1.236 0 00-1.094-1.227L15.8 4V2zM7.309 15.735a2.074 2.074 0 100 4.147 2.074 2.074 0 000-4.147zm11.456 1.677a1.235 1.235 0 100 2.47 1.235 1.235 0 000-2.47z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Trash24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M6 8l1 13h10l1-13H6zm2.174 2h7.652l-.666 9H8.84l-.666-9zM6 5v2h12V5zM10 5h4V3h-4z" }))));
}

function Travel24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M17.664 11.26l3.599.752.102.563c.192 1.048-.227 1.95-1.158 2.568l-.11.072-4.377 1.248-2.819 3.044-4.168 1.326.628-2.51h-5.05L.313 14.656l4.433-1.291 1.991 1.114.872-.257-1.369-1.21 3.397-.996 3.295.638 4.732-1.393zm.07 1.752l-11.202 3.3-1.994-1.116-.85.248 1.285 1.18h4.014l.912-.448.04-.02.016.03 1.594.399-.426 1.703.835-.265 2.838-3.065 4.57-1.302c.11-.083.191-.165.247-.252l-1.878-.392zm-8.039.237l-1.032.303.304.27 1.462-.431-.734-.142zm3.75-4.087a1.428 1.428 0 110 2.856 1.428 1.428 0 010-2.856zm0 1a.428.428 0 100 .856.428.428 0 000-.856zm-4.33-4.344a2.297 2.297 0 110 4.594 2.297 2.297 0 010-4.594zM7.475 0c1.72 0 3.167 1.17 3.59 2.757a3.376 3.376 0 012.317 5.137l-1.69-1.07a1.375 1.375 0 00-1.163-2.11h-1.34v-1a1.714 1.714 0 00-3.429 0v1.003l-1.002-.003a1.37 1.37 0 00-1.373 1.372c0 .76.616 1.376 1.375 1.376h1.304v2H4.76a3.375 3.375 0 01-.894-6.629A3.716 3.716 0 017.475 0zm1.64 7.318a.797.797 0 100 1.594.797.797 0 000-1.594z", id: "travel-24_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#travel-24_svg__a", transform: "translate(.59 1.403)" }))));
}

function Triangle24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M8 6.837v10.335l8.15-5.168L8 6.837zM6 3.2l13.886 8.804L6 20.808V3.2z", fill: "currentColor", fillRule: "nonzero" })));
}

function Trailer24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("path", { d: "M17 15h-6.171a3.001 3.001 0 01-5.658.001L2 15V8h20v3h-2l-.001-1H17v5zm-9-2a1 1 0 100 2 1 1 0 000-2zm-4-3v3h1.17a3.001 3.001 0 015.66 0H15v-3H4z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Umbrella24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M12 9.814a5.007 5.007 0 00-3.5-1.443c-1.438 0-2.438.473-3.11.957.053-.208.126-.402.221-.58.972-2.02 4.002-3.413 6.343-3.413 2.32 0 5.386 1.402 6.395 3.396.111.2.21.4.3.597-.727-.58-2-.957-3.149-.957A5.007 5.007 0 0012 9.814zM13 2h-2v1.4c-3.937.482-8 3.902-8 8.042a1 1 0 001.871.492c.536-.95 2.568-1.563 3.629-1.563 1.022 0 1.932.525 2.5 1.39V19c0 .292-.224.53-.5.53s-.5-.238-.5-.53H8c0 1.394 1.122 2.53 2.5 2.53 1.325 0 2.402-1.053 2.484-2.374l.016-7.42c.562-.834 1.516-1.366 2.5-1.366 1.094 0 3.077.584 3.629 1.562A1.001 1.001 0 0021 11.442c0-4.112-4.057-7.51-8-8.03V2z", fill: "currentColor", fillRule: "nonzero" })));
}

function Text3Round24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M12 5c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7m0 16c-4.962 0-9-4.038-9-9s4.038-9 9-9 9 4.038 9 9-4.038 9-9 9" }),
            React.createElement("path", { d: "M11.083 13.641c.024.624.42 1.032.996 1.032.563 0 .947-.504.947-1.27-.024-1.345-1.115-1.536-1.991-1.345v-.252l1.188-2.674H9.872V7.704h4.545v.252l-1.427 2.94c1.128.226 1.643 1.33 1.643 2.493 0 1.703-1.007 2.831-2.53 2.831-1.476 0-2.471-1.03-2.507-2.579h1.487z" }))));
}

function User24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M8.723 3.51a8.7 8.7 0 016.418 2.816L13.67 7.68a6.723 6.723 0 101.512 2.681H10.01c-2.159 0-4.47-1.245-5.125-3.032l1.878-.688c.33.899 1.854 1.72 3.247 1.72h6.56l.253.628a8.723 8.723 0 11-8.1-5.48zm1.808 11.474l1.299 1.52c-.886.757-1.972 1.177-3.118 1.177-1.134 0-2.21-.412-3.09-1.154l1.288-1.53c.528.446 1.151.684 1.802.684.658 0 1.287-.243 1.819-.697zm1-4.203c1.19 0 2.154.965 2.154 2.154h-1.5a.654.654 0 10-1.308 0h-1.5c0-1.19.965-2.154 2.154-2.154zm-5.616 0c1.19 0 2.154.965 2.154 2.154h-1.5a.654.654 0 10-1.309 0h-1.5c0-1.19.965-2.154 2.155-2.154zm13.552-5.743l.81 1.828-2.695 1.195-.811-1.828 2.696-1.195zm-2.298-2.664l1.362 1.464-2.078 1.935-1.362-1.464 2.078-1.935zM14.143.56l1.774.925L14.552 4.1l-1.773-.925L14.143.56z", id: "user-24_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#user-24_svg__a", transform: "translate(2 1)" }))));
}

function Wallet24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M22 10h-1V7H6v2h13v1h-2v2h3v2h-3v2h2v2H5.89a.89.89 0 01-.89-.89V6.89A.89.89 0 015.89 6H19V4H5.89A2.893 2.893 0 003 6.89v10.22A2.893 2.893 0 005.89 20H21v-4h1v-6z", fill: "currentColor", fillRule: "nonzero" })));
}

function UserHappy24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M9.994 0a9.968 9.968 0 017.353 3.226L15.876 4.58a7.994 7.994 0 101.763 3.07l-6.146-.001c-2.451 0-5.078-1.415-5.814-3.423l1.878-.688c.41 1.12 2.25 2.11 3.936 2.11h7.529l.252.629a9.969 9.969 0 01.714 3.716c0 5.52-4.475 9.994-9.994 9.994C4.474 19.988 0 15.513 0 9.994 0 4.474 4.474 0 9.994 0zm3.01 12.989l1.418 1.41a6.229 6.229 0 01-4.428 1.841 6.229 6.229 0 01-4.422-1.834l1.416-1.413a4.23 4.23 0 003.006 1.247 4.23 4.23 0 003.01-1.251zm-.012-4.739a2.249 2.249 0 012.249 2.249h-1.5a.749.749 0 10-1.498 0h-1.5a2.249 2.249 0 012.249-2.249zm-5.996 0a2.249 2.249 0 012.249 2.249h-1.5a.749.749 0 10-1.498 0h-1.5A2.249 2.249 0 016.996 8.25z", id: "user-happy-24_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h24v24H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#user-happy-24_svg__a", transform: "translate(2 2)" }))));
}

function WalletMinus24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M3 16c0-2.206 1.794-4 4-4s4 1.794 4 4-1.794 4-4 4-4-1.794-4-4zm19-7h-1V6H7v2h12v1h-1v2h2v2h-2v2h1v1h-6c0-3.309-2.691-6-6-6-.341 0-.674.035-1 .09v-4.2A.89.89 0 016.89 5H19V3H6.89A2.893 2.893 0 004 5.89v4.922A5.999 5.999 0 001 16c0 3.309 2.691 6 6 6 2.607 0 4.824-1.673 5.65-4H21v-3h1V9z" }),
            React.createElement("path", { d: "M4 15v2h6v-2z" }))));
}

function WalletPlus24(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 24, height: 24, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M3 16c0-2.206 1.794-4 4-4s4 1.794 4 4-1.794 4-4 4-4-1.794-4-4zm19-7h-1V6H7v2h12v1h-1v2h2v2h-2v2h1v1h-6c0-3.309-2.691-6-6-6-.341 0-.674.035-1 .09v-4.2A.89.89 0 016.89 5H19V3H6.89A2.893 2.893 0 004 5.89v4.922A5.999 5.999 0 001 16c0 3.309 2.691 6 6 6 2.607 0 4.824-1.673 5.65-4H21v-3h1V9z" }),
            React.createElement("path", { d: "M8 13H6v2H4v2h2v2h2v-2h2v-2H8z" }))));
}

function ArrowEnclosed32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M16 27C9.935 27 5 22.065 5 16S9.935 5 16 5s11 4.935 11 11-4.935 11-11 11m0-24C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3" }),
            React.createElement("path", { d: "M16.033 12.197L18.757 15H10v2h8.757l-2.724 2.802 1.435 1.395L22.518 16l-5.05-5.198z" }))));
}

function ArrowsApart232(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M11.8 8.857v-5.19L1.493 13.483 11.8 21.977V17h10.4v-2.737l5.293 4.362-5.293 5.042v-2.524h-7.5v2h5.5v5.19l10.307-9.816L20.2 10.023V15H9.8v2.737l-5.293-4.362L9.8 8.333v2.524h7.5v-2z", fill: "currentColor", fillRule: "nonzero" })));
}

function Apartment32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h32v32H0z" }),
            React.createElement("path", { d: "M29 2v26h1v2H2v-2h1V2h26zm-2 2H5v24h8v-8h6v8h8V4zM17 22h-2v6h2v-6zm-6-2v5H6v-5h5zm15 0v5h-5v-5h5zM9 22H8v1h1v-1zm15 0h-1v1h1v-1zm-13-9v5H6v-5h5zm15 0v5h-5v-5h5zm-7 0v5h-6v-5h6zM9 15H8v1h1v-1zm15 0h-1v1h1v-1zm-7 0h-2v1h2v-1zm-6-9v5H6V6h5zm15 0v5h-5V6h5zm-7 0v5h-6V6h6zM9 8H8v1h1V8zm15 0h-1v1h1V8zm-7 0h-2v1h2V8z", fill: "currentColor", fillRule: "nonzero" }))));
}

function ArrowsApart32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "currentColor", d: "M12 3.8L1.47 13 12 22.484v-5.5h10v-2.868L27.451 19 22 23.81v-2.825h-8v2h6v5.174L30.517 19 20 9.74v5.245H10v3.024L4.498 13 10 8.17v2.815h8v-2h-6z", fillRule: "evenodd" })));
}

function Attach32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h32v32H0z" }),
            React.createElement("path", { d: "M18.75 19.797c.302.877.226 1.233-.1 1.385-.322.15-.64-.013-1.15-.86l-4.145-8.886-1.812.845 4.166 8.934.047.089c.991 1.664 2.306 2.358 3.739 1.69 1.432-.668 1.745-2.122 1.105-3.95L15.016 7.056l-.047-.089c-1.427-2.395-3.464-3.163-5.774-2.086-2.312 1.078-3.023 3.134-2.077 5.758l5.581 11.98c2.236 4.278 5.187 5.794 8.584 4.21 3.396-1.584 4.132-4.819 2.31-9.24L19.41 8.613l-1.813.845 4.166 8.934c1.436 3.489.966 5.556-1.325 6.624-2.29 1.068-4.176.1-5.945-3.284L8.965 9.878c-.577-1.614-.248-2.567 1.076-3.185 1.315-.613 2.266-.265 3.184 1.255l5.525 11.849z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Atv32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h32v32H0z" }),
            React.createElement("path", { d: "M17.331 4.835L22.47 11h3.066l2.101 3.149c.643.118 1.27.306 1.87.56l.326.146-.852 1.809A6.969 6.969 0 0026 16a6.967 6.967 0 00-3.772 1.102l1.265 1.37a4.5 4.5 0 11-1.549 1.27l-1.23-1.331a6.971 6.971 0 00-1.71 4.348L19 23h-2c0-.338.019-.672.055-1h-2.47l-3.371-3.372-1.12 1.163c.529.7.858 1.562.901 2.497L11 22.5a4.5 4.5 0 11-2.44-4.002l1.239-1.285-1.506-1.506 1.414-1.414L15.415 20h2.097a9.008 9.008 0 017.645-5.961L24.464 13h-2.932l-1.538-1.846-7.308 4.177L10.464 12H4v2h3v2H2v-6h9.535l1.779 2.668 5.379-3.074-2.025-2.43-2.352.785-.632-1.898 3.647-1.216zM25.5 20a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm-19 0a2.5 2.5 0 100 5 2.5 2.5 0 000-5z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Baby32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h32v32H0z" }),
            React.createElement("path", { d: "M19.75 2.288l.135.033.035.008-.001.002.152.047a3.368 3.368 0 012.17 3.926l-.049.185a3.368 3.368 0 01-3.785 2.39l-.006.022a9.752 9.752 0 00-2.54-.334c-5.378 0-9.739 4.36-9.739 9.739 0 5.378 4.361 9.739 9.74 9.739 5.378 0 9.738-4.36 9.738-9.74 0-3.07-1.43-5.898-3.811-7.727l-.25-.186 1.167-1.624a11.723 11.723 0 014.894 9.538c0 6.483-5.255 11.739-11.739 11.739-6.483 0-11.739-5.256-11.739-11.74 0-6.482 5.256-11.738 11.74-11.738.893 0 1.775.1 2.633.297l.078.02.005-.013a1.367 1.367 0 00.882-2.587l-.092-.032-.076-.014c-.18-.018-.347.05-.402.108l-.017.027c-.055.19-.028.265.297.216l.207-.04.424 1.955c-2.112.457-3.306-1.1-2.85-2.685.329-1.138 1.606-1.775 2.799-1.531zM16.618 23.17l1.414 1.415a5.134 5.134 0 01-3.639 1.505 5.131 5.131 0 01-3.452-1.328l-.187-.177 1.414-1.415c.598.598 1.394.92 2.225.92.762 0 1.494-.271 2.072-.776l.153-.144zm-3.057-5.144l.013.164-1.998.093a.505.505 0 00-1.006-.044l-.004.092-1.997.093a2.505 2.505 0 014.992-.398zm6.455-.242l.013.165-1.998.093a.505.505 0 00-1.006-.045l-.004.092-1.997.094a2.505 2.505 0 014.992-.399z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Bell32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h32v32H0z" }),
            React.createElement("path", { d: "M14 26a2 2 0 104 0h2a4 4 0 11-8 0zm2-24a2 2 0 012 2v.13c4.584.636 7 3.582 7 8.62v7.378L27.517 26H4.483L7 20.128V12.75c0-5.037 2.416-7.983 6.999-8.62L14 4a2 2 0 012-2zm0 4c-4.788 0-7 2.143-7 6.75v6.75h12.004v2H8.587L7.517 24h16.966L23 20.539V12.75C23 8.143 20.788 6 16 6z", fill: "currentColor", fillRule: "nonzero" }))));
}

function BillsCoins32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M23.684 19.035l-7.281-1.58c0-.034.01-.064.01-.097a4.314 4.314 0 00-4.31-4.309 4.314 4.314 0 00-3.971 2.641l-1.75-.359 1.93-8.918 17.24 3.698-1.868 8.924zm-11.58.632a2.31 2.31 0 01-2.31-2.309 2.311 2.311 0 012.31-2.309 2.312 2.312 0 012.309 2.31 2.311 2.311 0 01-2.31 2.308zM23.689 4.863l.636 2.94-7.266-1.559 6.63-1.38zm2.78 3.4L25.225 2.5 12.229 5.208l-5.45-1.17-2.78 12.846 3.828.785c.162 2.23 2.007 3.998 4.277 3.998 1.638 0 3.049-.93 3.777-2.279l9.348 2.028 2.689-12.842-1.448-.31zM16.22 27.093c-.511 0-.902-.18-1.284-.62a.831.831 0 01-.174-.274l-.054-.13c-.057-.116-.06-.276-.06-.55 0-.852.72-1.572 1.573-1.572.854 0 1.574.72 1.574 1.573 0 .852-.72 1.573-1.574 1.573m0-5.146a3.576 3.576 0 00-3.573 3.573c0 .365 0 .859.24 1.38.132.357.357.71.582.93a3.523 3.523 0 002.75 1.263 3.577 3.577 0 003.575-3.573 3.577 3.577 0 00-3.574-3.573" }))));
}

function Boat32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M22.79 6.652c.246.16.438.346.583.56.057.085.103.168.146.256a4.396 4.396 0 01.087.197l1.826 4.698-1.864.724c-.71-1.827-.71-1.827-1.795-4.628l-.015-.03c-.06-.133-.024-.078-.056-.1-.475-.307-1.96-.54-4.84-.54h-1.716c-2.874.004-4.36.238-4.839.546-.035.023 0-.028-.056.093l-1.819 4.677-1.864-.725c.712-1.83.712-1.83 1.864-4.783.015-.034.037-.084.058-.127a1.95 1.95 0 01.148-.257c.146-.214.34-.4.587-.56.804-.517 2.305-.795 4.92-.853V4.425c0-1.047.815-1.925 1.858-1.925 1.044 0 1.86.878 1.86 1.925v1.373c2.621.054 4.125.333 4.927.854zM1.456 27.483l1.088-1.678a3.446 3.446 0 003.763.03 6.983 6.983 0 017.7-.028l-1.086 1.68c-1.705-1.104-3.816-1.096-5.529.03a5.452 5.452 0 01-5.936-.034zm11.443 0l1.088-1.678a3.446 3.446 0 003.764.03 6.983 6.983 0 017.7-.028l-1.087 1.68c-1.705-1.104-3.816-1.096-5.529.03a5.452 5.452 0 01-5.936-.034zm11.437 0l1.089-1.678a3.452 3.452 0 003.777.022l1.07 1.69a5.452 5.452 0 01-5.936-.034zM27.7 14.836c.347.573.396 1.292.114 1.949L24.27 24.18l-1.804-.864 3.526-7.356a.115.115 0 00-.006-.093l-.092-.006-9.898-1.352-9.837 1.344-.181.008c.02.026.018.068.015.063l3.524 7.364-1.805.863-3.539-7.398A2.112 2.112 0 014.3 14.83c.36-.593.983-.962 1.662-.969l10.034-1.37 10.108 1.38a1.932 1.932 0 011.596.965z" }),
            React.createElement("path", { d: "M15 16h2v6.608h-2z" }))));
}

function Briefcase32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h32v32H0z" }),
            React.createElement("path", { d: "M22 4v4h5.5a2.5 2.5 0 012.5 2.5v15a2.5 2.5 0 01-2.5 2.5h-23A2.5 2.5 0 012 25.5v-15A2.5 2.5 0 014.5 8H10V4h12zm6 9.079L24.35 16H7.65L4 13.08V25.5a.5.5 0 00.5.5H8V16h2v10h12V16h2v10h3.5a.5.5 0 00.5-.5V13.079zM18 16v2h-4v-2h4zm9.5-6h-23a.5.5 0 00-.5.5v.02L8.35 14h15.3L28 10.519V10.5a.5.5 0 00-.5-.5zM20 6h-8v2h8V6z", fill: "currentColor", fillRule: "nonzero" }))));
}

function BriefcaseFirstAid32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M4.5 10a.5.5 0 00-.5.5v15a.5.5 0 00.5.5h23a.5.5 0 00.5-.5v-15a.5.5 0 00-.5-.5h-23zM22 4v4h5.5a2.5 2.5 0 012.5 2.5v15a2.5 2.5 0 01-2.5 2.5h-23A2.5 2.5 0 012 25.5v-15A2.5 2.5 0 014.5 8H10V4h12zM8 10H6v16h2V10zm18 0h-2v16h2V10zm-9 4h-2v3h-3v2h3v3h2v-3h3v-2h-3v-3zm3-8h-8v2h8V6z", id: "briefcase-first-aid-32_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h32v32H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#briefcase-first-aid-32_svg__a" }))));
}

function Calendar32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M24.693 27H7.306C6.561 27 6 26.459 6 25.742V13h20v12.742c0 .717-.562 1.258-1.307 1.258M7.306 6H10v2h2V6h8v2h2V6h2.658c.753.025 1.342.57 1.342 1.24V11H6V7.24c0-.67.59-1.215 1.306-1.24m17.387-2H22V2h-2v2h-8V2h-2v2H7.271c-1.834.064-3.27 1.487-3.27 3.24v18.502C4 27.569 5.451 29 7.305 29h17.387C26.547 29 28 27.569 28 25.742V7.24c0-1.753-1.438-3.176-3.307-3.24", fill: "currentColor", fillRule: "evenodd" })));
}

function CalendarCheck32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M24.693 27H7.306C6.561 27 6 26.459 6 25.742V13h20v12.742c0 .717-.562 1.258-1.307 1.258M7.306 6H10v2h2V6h8v2h2V6h2.658c.753.025 1.342.57 1.342 1.24V11H6V7.24c0-.67.59-1.215 1.306-1.24m17.387-2H22V2h-2v2h-8V2h-2v2H7.271c-1.834.064-3.27 1.487-3.27 3.24v18.502C4 27.569 5.451 29 7.305 29h17.387C26.547 29 28 27.569 28 25.742V7.24c0-1.753-1.438-3.176-3.307-3.24" }),
            React.createElement("path", { d: "M14.531 21.183l-2.819-2.869-1.424 1.406 4.23 4.296 7.35-7.307-1.41-1.418z" }))));
}

function CalendarCross32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M24.693 27H7.306C6.561 27 6 26.459 6 25.741V13h20v12.741c0 .718-.562 1.259-1.307 1.259M7.306 6H10v2h2V6l8-.001V8h2V5.999h2.658C25.411 6.025 26 6.57 26 7.24V11H6V7.24c0-.67.59-1.215 1.306-1.24m17.387-2H22V2h-2v2l-8 .001V2h-2v2.001H7.271c-1.834.063-3.27 1.486-3.27 3.239v18.501C4 27.568 5.451 29 7.305 29h17.387C26.547 29 28 27.568 28 25.741V7.24c0-1.753-1.438-3.176-3.307-3.24" }),
            React.createElement("path", { d: "M19.996 14.585l-3.996 4-3.995-4-1.415 1.413L14.587 20l-4.008 4.012 1.415 1.413L16 21.415l3.996 4 1.415-1.413L17.413 20l3.998-4.002z" }))));
}

function Car32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M6 16.5c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5S8.327 18 7.5 18 6 17.327 6 16.5zM23 16.5c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5zM9 11.027v2h15.658l-2.655-5.246-1.784.903 1.185 2.343z" }),
            React.createElement("path", { d: "M30 14c0 .025-.333.033-.778.033C28.333 14.033 27 14 27 14l1.044 4L28 19h-6v2h6v2h-1v3h-2v-3H7v3H5v-3H4v-2h16v-2H4v-1l1-4s-1.333.033-2.222.033C2.333 14.033 2 14.025 2 14v-1c0-.968 4-1 4-1l2-4s1.687-1.996 8-2c6.406 0 8 2 8 2l2 4s4 .032 4 1v1zm-4.336-7c-.57-.813-3.039-3-9.664-3-6.625.004-9.38 2.344-9.768 3l-1.315 3.019C2.75 10.089 0 10.661 0 13v1c0 .672.45 1.961 2.147 2.025.08.003.176.005.284.006l-.37 1.484-.06.239V23c0 .746.407 1.396 1.012 1.74L3 26a2 2 0 002 2h2a2 2 0 002-2v-1h14v1a2 2 0 002 2h2a2 2 0 002-2l.016-1.276c.589-.348.984-.99.984-1.724v-2c0-.04-.01-.078-.012-.118L30 19.013v-1.264l-.05-.254-.38-1.464c.107-.001.203-.003.283-.006C31.551 15.961 32 14.672 32 14v-1c0-2.339-2.684-2.91-4.917-2.981L25.664 7z" }))));
}

function CarDamage32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h32v32H0z" }),
            React.createElement("path", { d: "M16 4c6.625 0 9.094 2.187 9.664 3l1.419 3.019C29.316 10.09 32 10.661 32 13v1c0 .672-.449 1.961-2.147 2.025-.08.003-.176.005-.283.006l.38 1.464.05.254v1.264l-.012 1.869L30 21v2a2 2 0 01-.984 1.724L29 26a2 2 0 01-2 2h-2a2 2 0 01-2-2v-1H9v1a2 2 0 01-2 2H5a2 2 0 01-2-2l.013-1.26A1.998 1.998 0 012.001 23v-5.246l.06-.239.37-1.484a10.325 10.325 0 01-.284-.006C.45 15.961 0 14.672 0 14v-1c0-2.339 2.75-2.911 4.917-2.981L6.232 7C6.62 6.344 9.375 4.004 16 4zm0 2c-5.717.004-7.64 1.641-7.952 1.95l-.031.032L8 8l-2 4h-.054C5.467 12.01 2 12.1 2 13v1c0 .025.333.033.778.033C3.667 14.033 5 14 5 14l-1 4v1h14v2H4v2h1v3h2v-3h18v3h2v-3h1l.044-5L27 14s1.333.033 2.222.033c.445 0 .778-.008.778-.033v-1c0-.901-3.467-.991-3.946-1H26l-2-4s-.014-.017-.044-.048l-.043-.044C23.506 7.515 21.576 6 16 6zm8.414 13l2.266 2.258-1.414 1.414L23.586 21H20v-2h4.414zM7.5 15c.827 0 1.5.673 1.5 1.5S8.327 18 7.5 18 6 17.327 6 16.5 6.673 15 7.5 15zm17 0c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5.673-1.5 1.5-1.5zm-6.961-8.146l.923 1.28 3.563-.47L24.59 13H9v-2h12.41l-.56-1.164-3.312.437-1.622-2.249 1.623-1.17z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Caravan32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h32v32H0z" }),
            React.createElement("path", { d: "M15 19a3 3 0 110 6 3 3 0 010-6zM26.744 6l3.314 11.047L28.477 21 30 21v2l-2.323-.001V23H19v-2h7.322l1.619-4.048L25.256 8H5.496l-1.465 8.887L5.677 21H11v2H4.323l-2.355-5.887L3.798 6h22.946zM15 21a1 1 0 100 2 1 1 0 000-2zm-4-11v10H9v-8.001H8V20H6V10h5zm7 6v2h-4v-2h4zm4-6v5h-8v-5h8zm-2 2h-4v1h4v-1z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Card32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M26.803 22.688c-.187.2-.471.312-.8.312H6.016C5.493 23 5 22.557 5 22.09V14h21.995v8.162a.685.685 0 01-.192.525zM6.015 9h19.989c.302 0 .599.124.793.333.082.087.216.27.197.575V12H5V9.909c0-.468.493-.91 1.015-.91zm22.976.98a2.648 2.648 0 00-.73-2.01A3.086 3.086 0 0026.004 7H6.014C4.382 7 3 8.332 3 9.907v12.183C3 23.666 4.38 25 6.015 25h19.989c.876 0 1.7-.348 2.263-.952.52-.559.778-1.28.727-1.959L28.99 9.98z" }),
            React.createElement("path", { d: "M6.994 18h6v-2h-6z" }))));
}

function CardBlock32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M3 9v2h22V9zM12 15v-2H6v2z" }),
            React.createElement("path", { d: "M16 21H5c-.552 0-1-.447-1-.994V7.994c0-.55.443-.994.991-.994H23.01c.55 0 .991.442.991 1.006V16h2V8.006A2.991 2.991 0 0023.009 5H4.99A2.991 2.991 0 002 7.994v12.012A2.998 2.998 0 005 23h11v-2z" }),
            React.createElement("path", { d: "M16.586 17l9.765 9.765 1.414-1.414L18 15.586z" }),
            React.createElement("path", { d: "M22.5 27a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm0 2a7.5 7.5 0 110-15 7.5 7.5 0 010 15z" }))));
}

function Chat32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M27.544 7.813C25.787 6.025 23.258 5 20.604 5h-9.162C6.172 5 2.024 8.951 2 14.004 2.024 19.132 5.947 23 11.125 23h1.44L19 29.407v-8.323h-2v3.508L13.393 21h-2.268C7.015 21 4.02 18.054 4 14.004 4.02 10.011 7.219 7 11.442 7h9.163c2.12 0 4.129.807 5.512 2.215 1.265 1.286 1.915 2.935 1.883 4.802.033 1.846-.65 3.576-1.922 4.871A7.154 7.154 0 0121 21v2a9.172 9.172 0 006.505-2.71A8.687 8.687 0 0030 14.017c.04-2.347-.831-4.55-2.456-6.204", fill: "currentColor", fillRule: "evenodd" })));
}

function Check32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M24.49 9.8L13.481 20.768l-5.557-5.615L6.5 16.557l6.967 7.045 12.432-12.384z", fill: "currentColor", fillRule: "evenodd" })));
}

function CheckBold32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M24.072 9.534L13.77 19.794l-4.85-4.907-2.131 2.11 6.967 7.046 12.432-12.384z", fill: "currentColor", fillRule: "evenodd" })));
}

function CheckEnclosed32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M16 27C9.935 27 5 22.065 5 16S9.935 5 16 5s11 4.935 11 11-4.935 11-11 11m0-24C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3" }),
            React.createElement("path", { d: "M14.545 18.593l-3.287-3.342-1.424 1.404 4.697 4.772 8.037-7.99-1.41-1.418z" }))));
}

function ChevronDown32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M24.492 13.374l-1.414-1.414-7.072 7.071-7.072-7.07-1.414 1.414 7.071 7.071 1.415 1.413 1.413-1.413z", fill: "currentColor", fillRule: "evenodd" })));
}

function Chevron32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M13.414 7.51L12 8.924l7.071 7.071-7.07 7.073 1.414 1.414 7.071-7.072 1.413-1.415-1.413-1.413z", fill: "currentColor", fillRule: "evenodd" })));
}

function ChevronLeft32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M18.485 7.51L19.9 8.924l-7.071 7.071 7.07 7.073-1.414 1.414-7.071-7.072L10 15.995l1.413-1.413z", fill: "currentColor", fillRule: "evenodd" })));
}

function ChevronRight32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M13.414 7.51L12 8.924l7.071 7.071-7.07 7.073 1.414 1.414 7.071-7.072 1.413-1.415-1.413-1.413z", fill: "currentColor", fillRule: "evenodd" })));
}

function ChevronUp32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M24.492 18.621l-1.414 1.414-7.072-7.07-7.072 7.07L7.52 18.62l7.071-7.07 1.415-1.414 1.413 1.413z", fill: "currentColor", fillRule: "evenodd" })));
}

function Circle32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M14 0c7.732 0 14 6.268 14 14s-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0zm0 2C7.373 2 2 7.373 2 14s5.373 12 12 12 12-5.373 12-12S20.627 2 14 2z", id: "circle-32_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h32v32H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#circle-32_svg__a", transform: "translate(2 2)" }))));
}

function Circlediagram32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h32v32H0z" }),
            React.createElement("path", { d: "M17 4c7.18 0 13 5.82 13 13s-5.82 13-13 13S4 24.18 4 17v-1h12V4h1zm1 2.045V18H6.045C6.55 23.607 11.262 28 17 28c6.075 0 11-4.925 11-11 0-5.738-4.393-10.45-10-10.955zM15 2v13H2v-1C2 7.373 7.373 2 14 2h1zm-2 2.05A10.003 10.003 0 004.05 13H13V4.05z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Clipboard32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M25 26.19c0 .461-.355.81-.826.81H7.826C7.355 27 7 26.651 7 26.19V7.805c0-.439.372-.79.826-.8H11v3.995h10V7.007h3.153c.475.01.847.36.847.8V26.19zM15 4h2v3h2v2h-6V7h2V4zm4 1.006V2h-6v3.006H7.806C6.232 5.04 5 6.27 5 7.806V26.19C5 27.765 6.241 29 7.826 29h16.348C25.759 29 27 27.765 27 26.19V7.805c0-1.537-1.232-2.767-2.826-2.8H19z" }),
            React.createElement("path", { d: "M11 16h10v-2H11zM11 20h10v-2H11zM11 24h10v-2H11z" }))));
}

function Clock32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M16 3C8.834 3 3 8.834 3 16s5.834 13 13 13 13-5.834 13-13S23.166 3 16 3zm0 2c6.087 0 11 4.913 11 11s-4.913 11-11 11S5 22.087 5 16 9.913 5 16 5z" }),
            React.createElement("path", { d: "M22.08 19.796l-1.285 1.533L15 16.466V8h2v7.534z" }))));
}

function Coins32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h32v32H0z" }),
            React.createElement("path", { d: "M15 28v2H4v-2h11zm6.5-15a8.5 8.5 0 110 17 8.5 8.5 0 010-17zm0 2a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM13 25v2H4v-2h9zm14-3.5a5.5 5.5 0 01-5.5 5.5v-2a3.5 3.5 0 003.5-3.5h2zM12 22v2H4v-2h8zm0-3v2H4v-2h8zm1-3v2H4v-2h9zm2-3v2H4v-2h11zm4-3v2H4v-2h15zm2-3v2H6V7h15zm-4-3v2H2V4h15z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Computer32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h32v32H0z" }),
            React.createElement("path", { d: "M26 23a2 2 0 00-2 2v2a2 2 0 104 0v-2a2 2 0 00-2-2zm1 1v2h-2v-2h2zm-3.857-5h1.428c1.34 0 2.122.802 2.35 1.966l.026.147A4.002 4.002 0 0130 25v2a4 4 0 11-8 0v-2a4.002 4.002 0 012.904-3.848c-.05-.127-.132-.152-.333-.152h-1.428C21.093 21 20 20.07 20 18h-4v2h3v2H8v-2h3v-2H2V2h23v16h-3c0 .888.132 1 1.143 1zM14 18h-1v2h1v-2zm9-14H4v12h19V4zM10.347 5.514L11.76 6.93 6.929 11.76l-1.415-1.414 4.833-4.833zm-3.211-.816l1.393 1.436-2.49 2.416-1.393-1.435 2.49-2.417z", fill: "currentColor", fillRule: "nonzero" }))));
}

function ContactMenu32Copy(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M15.994 28.78c-1.917 0-3.466-1.571-3.466-3.502 0-1.93 1.549-3.501 3.466-3.501 1.917 0 3.466 1.57 3.466 3.501 0 1.93-1.549 3.502-3.466 3.502zm0-2c.806 0 1.466-.67 1.466-1.502s-.66-1.501-1.466-1.501c-.806 0-1.466.669-1.466 1.501 0 .833.66 1.502 1.466 1.502zM15.994 3.205c3.356 0 6.495 1.5 8.652 4.042l-1.524 1.294c-1.783-2.1-4.369-3.336-7.128-3.336-3.881 0-7.324 2.419-8.715 5.962l-.141.495c-.328.941-.5 2.016-.5 3.11 0 1.337.27 2.645.785 3.864l.587 1.389H6.317c-2.775 0-5.007-2.264-5.007-5.065 0-2.566 1.875-4.683 4.324-5.018 1.85-4.064 5.858-6.737 10.36-6.737zM3.31 14.96a3.06 3.06 0 001.7 2.764 12.123 12.123 0 01-.11-5.47 3.064 3.064 0 00-1.59 2.706z" }),
            React.createElement("path", { d: "M24.709 11.167l1.925-.542.105.38c.403 1.158.61 2.455.61 3.768 0 4.298-2.357 8.24-6.006 10.195-.87.475-1.82.826-2.794 1.037l-.425-1.954a8.524 8.524 0 002.267-.842c3.006-1.611 4.959-4.875 4.959-8.436 0-1.095-.172-2.17-.518-3.168l-.123-.438z" }),
            React.createElement("path", { d: "M11.207 7.716l1.931-.52c.072.268.328.754.853 1.26.927.892 2.342 1.44 4.407 1.44h7.352v2h-7.352c-2.573 0-4.487-.742-5.794-2-.816-.784-1.238-1.588-1.397-2.18zM18.795 17.322l1.425 1.405a6.003 6.003 0 01-4.288 1.798 6.003 6.003 0 01-4.287-1.798l1.425-1.405a4.003 4.003 0 002.862 1.203 4.003 4.003 0 002.863-1.203z" }),
            React.createElement("path", { d: "M25.672 11.896v-2c2.774 0 5.006 2.264 5.006 5.064 0 2.8-2.232 5.065-5.006 5.065v-2c1.663 0 3.006-1.363 3.006-3.065s-1.343-3.064-3.006-3.064z" }))));
}

function ContactMenu32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M15.994 28.78c-1.917 0-3.466-1.571-3.466-3.502 0-1.93 1.549-3.501 3.466-3.501 1.917 0 3.466 1.57 3.466 3.501 0 1.93-1.549 3.502-3.466 3.502zm0-2c.806 0 1.466-.67 1.466-1.502s-.66-1.501-1.466-1.501c-.806 0-1.466.669-1.466 1.501 0 .833.66 1.502 1.466 1.502zM15.994 3.205c3.356 0 6.495 1.5 8.652 4.042l-1.524 1.294c-1.783-2.1-4.369-3.336-7.128-3.336-3.881 0-7.324 2.419-8.715 5.962l-.141.495c-.328.941-.5 2.016-.5 3.11 0 1.337.27 2.645.785 3.864l.587 1.389H6.317c-2.775 0-5.007-2.264-5.007-5.065 0-2.566 1.875-4.683 4.324-5.018 1.85-4.064 5.858-6.737 10.36-6.737zM3.31 14.96a3.06 3.06 0 001.7 2.764 12.123 12.123 0 01-.11-5.47 3.064 3.064 0 00-1.59 2.706z" }),
            React.createElement("path", { d: "M24.709 11.167l1.925-.542.105.38c.403 1.158.61 2.455.61 3.768 0 4.298-2.357 8.24-6.006 10.195-.87.475-1.82.826-2.794 1.037l-.425-1.954a8.524 8.524 0 002.267-.842c3.006-1.611 4.959-4.875 4.959-8.436 0-1.095-.172-2.17-.518-3.168l-.123-.438z" }),
            React.createElement("path", { d: "M11.207 7.716l1.931-.52c.072.268.328.754.853 1.26.927.892 2.342 1.44 4.407 1.44h7.352v2h-7.352c-2.573 0-4.487-.742-5.794-2-.816-.784-1.238-1.588-1.397-2.18zM18.795 17.322l1.425 1.405a6.003 6.003 0 01-4.288 1.798 6.003 6.003 0 01-4.287-1.798l1.425-1.405a4.003 4.003 0 002.862 1.203 4.003 4.003 0 002.863-1.203z" }),
            React.createElement("path", { d: "M25.672 11.896v-2c2.774 0 5.006 2.264 5.006 5.064 0 2.8-2.232 5.065-5.006 5.065v-2c1.663 0 3.006-1.363 3.006-3.065s-1.343-3.064-3.006-3.064z" }))));
}

function Contract32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { fillRule: "nonzero", d: "M7 27V5h16v5h2V3H5v26h20v-5h-2v3z" }),
            React.createElement("path", { fillRule: "nonzero", d: "M10 11h10V9H10zM10 15h10v-2H10zM10 19h7v-2h-7zM13 25h7v-2h-7z" }),
            React.createElement("path", { d: "M26.378 13.214l-8.364 8.364v1.414h1.414l8.364-8.364-1.414-1.414zm-6.121 11.778h-4.243V20.75l10.364-10.364 4.243 4.242-10.364 10.364z", fillRule: "nonzero" }),
            React.createElement("path", { d: "M24.914 13.5l2.829 2.828-1.415 1.414-2.828-2.828z" }))));
}

function Cross32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M22.286 8.3l-6.28 6.281-6.281-6.28-1.414 1.413 6.281 6.282L8.3 22.29l1.414 1.414 6.292-6.293 6.28 6.282 1.414-1.414-6.281-6.282L23.7 9.714z", fill: "currentColor", fillRule: "evenodd" })));
}

function CrossEnclosed32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M16 27C9.935 27 5 22.065 5 16S9.935 5 16 5s11 4.935 11 11-4.935 11-11 11m0-24C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3" }),
            React.createElement("path", { d: "M20.364 10.222L16 14.586l-4.364-4.364-1.414 1.414L14.586 16l-4.375 4.375 1.414 1.414L16 17.414l4.364 4.364 1.414-1.414L17.414 16l4.364-4.364z" }))));
}

function Cup32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h32v32H0z" }),
            React.createElement("path", { d: "M23 30H9v-2h2c1.132 0 2-.76 2-1.625v-3.887A9.004 9.004 0 017 14c-2.68 0-5-2.003-5-4.5C2 6.992 4.195 5 6.857 5H7V2h18v3c2.734 0 5 1.983 5 4.5S27.734 14 25 14a9.004 9.004 0 01-6 8.488v3.887c0 .866.868 1.625 2 1.625h2v2zm-7-7c-.338 0-.671-.019-1-.055v3.43c0 .588-.152 1.14-.421 1.626h2.842A3.341 3.341 0 0117 26.375v-3.43A9.099 9.099 0 0116 23zm7-19H9v1h6v2H9v7a7 7 0 0014 0V4zm2 3v5c1.684 0 3-1.151 3-2.5S26.684 7 25 7zM7 7h-.143C5.26 7 4 8.142 4 9.5 4 10.822 5.365 12 7 12V7z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Damage32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M11 26v2H7v-2h4zm6-2.671l-4.808-2.314 1.177-3.398-2.296-1.474-1.988.957H2V26h3v2H0V0h24v28H13v-2h4v-2.671zM22 2H10v2.492l2.938.975.986 1.962h4.691v4.803L22 14.926V2zm0 24v-8.518l-5.385-4.286V9.43h-3.924l-1.168-2.324L8 5.936V2H2v13.1h6.629l2.584-1.243 4.561 2.926-1.109 3.202L19 22.071V26h3z", id: "damage-32_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h32v32H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#damage-32_svg__a", transform: "translate(4 2)" }))));
}

function Document32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M6 3v26h20l-.007-20.914L20.915 3H6zm2 2h12.085l3.908 3.915L24 27H8V5z" }),
            React.createElement("path", { d: "M11 13h10v-2H11zM11 17h10v-2H11zM11 21h10v-2H11z" }))));
}

function Dog32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M16.308 23.281l-.458 1.947c-1.88-.442-3.24-2.102-3.24-4.06A4.17 4.17 0 0116.779 17c.876 0 1.731.29 2.46.795l-1.137 1.645a2.353 2.353 0 00-1.323-.44 2.17 2.17 0 00-2.169 2.169c0 1.015.708 1.88 1.698 2.112zM11.97 27v2H6v-3.7c0-1.302.937-2.3 2.192-2.3H12v2H8.192c-.121 0-.192.076-.192.3V27h3.97zM6.156 7.016l-.134.685c-.079.59.053 1.236.396 1.808.806 1.42 2.622 1.898 4.074 1.074l.987 1.74c-2.404 1.363-5.444.563-6.788-1.805a4.83 4.83 0 01-.642-3.14l.459-2.362H7.98a6.752 6.752 0 015.025-2.227c3.541 0 6.687 2.744 6.995 6.281v1.092c0 1.588-1.485 2.864-3.084 2.864-1.59 0-2.916-1.277-2.916-2.864V9h2v1.162c0 .465.414.864.916.864.556 0 1.084-.453 1.084-.864v-.363l.004-.64c-.211-2.397-2.474-4.37-4.999-4.37-1.5 0-2.884.692-3.765 1.836l-.3.39H6.156z" }),
            React.createElement("path", { d: "M9 14h2v10.91H9zM26.332 18.719h2a5.619 5.619 0 01-5.608 5.609v-2a3.619 3.619 0 003.608-3.61z" }),
            React.createElement("path", { d: "M21.723 23.327c0-4.088-1.945-7.9-5.164-10.357l1.213-1.59c3.708 2.829 5.951 7.226 5.951 11.947 0 1.774-.278 3.453-.834 5.01l-.237.663H11.866v-2h9.355c.334-1.149.502-2.376.502-3.673z" }))));
}

function EInvoice32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h32v32H0z" }),
            React.createElement("path", { d: "M29 3v25.563l-7.463-3.445L16 28.139l-5.538-3.021L3 28.563V3h26zm-2.001 2h-22v20.437l5.538-2.556L16 25.861l5.463-2.98 5.536 2.556V5zM15.924 9c2.74 0 3.87 2.114 3.278 5.232h-4.82c.126 1.254.825 1.791 1.954 1.791.842 0 1.791-.25 2.544-.573l.25 1.774c-.877.483-1.88.77-2.884.77-2.454 0-4.246-1.72-4.246-4.604C12 10.38 14.007 9 15.924 9zm.018 1.81c-.896 0-1.541.734-1.577 1.88h2.92c.072-1.164-.376-1.88-1.343-1.88z", fill: "currentColor", fillRule: "nonzero" }))));
}

function EllipsisEnclosed32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M16 27C9.935 27 5 22.065 5 16S9.935 5 16 5s11 4.935 11 11-4.935 11-11 11m0-24C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3" }),
            React.createElement("path", { d: "M10.149 14c-1.157 0-1.967.835-1.967 1.909s.926 1.909 1.967 1.909S12 16.983 12 15.908C12 14.836 11.306 14 10.149 14M21.967 14C20.81 14 20 14.835 20 15.909s.926 1.909 1.967 1.909 1.851-.835 1.851-1.91c0-1.073-.694-1.908-1.85-1.908M16.058 14.09c-1.157 0-1.967.836-1.967 1.91 0 1.074.926 1.909 1.967 1.909s1.851-.835 1.851-1.91c0-1.073-.694-1.908-1.851-1.908" }))));
}

function ExternalLink32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M19 5v2h4.598l-8.235 8.296 1.42 1.408L25 8.427V13H27V5z" }),
            React.createElement("path", { d: "M4 7v21h21V16h-2v10H6V9h10V7z" }))));
}

function Facebook32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M4 4v24h24V4H4zM2 2h28v28H2V2z" }),
            React.createElement("path", { d: "M14.012 24.984V16.97H12v-2.91h2.012v-2.146c0-2.49 1.521-3.846 3.743-3.846 1.063 0 1.978.079 2.245.114v2.603h-1.54c-1.21 0-1.443.575-1.443 1.417v1.858h2.881l-.375 2.91h-2.506v8.015h-3.005z" }))));
}

function Family32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h32v32H0z" }),
            React.createElement("path", { d: "M12.5 2a7.983 7.983 0 016.072 2.791l-1.517 1.303a6 6 0 101.437 3.575h-4.574c-1.769 0-3.528-1.285-4.387-3.08l1.804-.863c.547 1.142 1.643 1.943 2.583 1.943H20.2l.156.811c.095.498.144 1.006.144 1.52a7.968 7.968 0 01-1.907 5.184 5.5 5.5 0 018.404 6.616A6.002 6.002 0 0130 27v3h-2v-3c0-1.523-.86-2.882-2.166-3.556A5.483 5.483 0 0122 25a5.482 5.482 0 01-3.834-1.556A4.002 4.002 0 0016 27v3h-2v-3a6.002 6.002 0 013.003-5.2 5.481 5.481 0 01-.503-2.3c0-1.287.442-2.47 1.182-3.407A7.958 7.958 0 0112.5 18a7.97 7.97 0 01-5.283-1.993l.212-.104C5.084 17.017 4 18.42 4 20.175V30H2v-9.825c0-2.396 1.332-4.317 3.858-5.713A8 8 0 0112.5 2zM22 16a3.5 3.5 0 100 7 3.5 3.5 0 000-7z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Flag32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M23 17.613c-2.189.27-3.725-.325-5.468-1.005-1.958-.763-4.175-1.612-7.532-1.263V7.397c2.91-.596 4.78.184 6.758 1.014 1.808.76 3.678 1.543 6.242 1.276v7.926zm.789-10.074c-2.606.56-4.298-.15-6.257-.972-1.99-.836-4.247-1.758-7.532-1.193V4H8v24h2V17.351c2.986-.355 4.848.356 6.806 1.12 1.53.597 3.099 1.21 5.13 1.21.695 0 1.445-.073 2.266-.242l.798-.165V7.278l-1.211.261z", fill: "currentColor", fillRule: "evenodd" })));
}

function Farm32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h32v32H0z" }),
            React.createElement("path", { d: "M19 1.643l12.676 11.62-1.352 1.474L29 13.522V28L30 28v2H2v-2h2.889v-1.666a4.508 4.508 0 01-1.947-.952l-.182-.161a4.483 4.483 0 01-1.43-3.285c0-2.486 2.023-4.5 4.516-4.5 1.198 0 2.322.469 3.155 1.28L9 13.522l-1.324 1.215-1.352-1.474L19 1.643zM9 25.157a4.51 4.51 0 01-2.11 1.158L6.888 28h2.11zM19 4.356l-8 7.333V28h3V19.11h10V28L27 28V17H13v-2h14v-3.31l-8-7.334zm0 21.647L17.226 28h3.548L19 26.003zm3-3.375L20.337 24.5 22 26.37v-3.742zm-6 0v3.742l1.663-1.87L16 22.627zM5.846 19.436a2.508 2.508 0 00-2.515 2.5c0 .7.29 1.352.793 1.823a2.512 2.512 0 001.722.677c.76 0 1.463-.336 1.96-.93l.193-.219v-2.481l-.304-.563-.058-.063a2.51 2.51 0 00-1.605-.737zm14.829 1.674h-3.35L19 22.995l1.675-1.885zM19 8a4 4 0 014 4v1h-8v-1a4 4 0 014-4zm0 2c-.703 0-1.321.363-1.678.91l-.054.09h3.463l-.053-.089a2 2 0 00-1.529-.906z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Globe32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M9.303 20.654c-3.937-3.936-3.937-10.403 0-14.34L7.888 4.9c-4.717 4.718-4.717 12.45 0 17.169 4.718 4.718 12.451 4.718 17.17 0l-1.415-1.415c-3.937 3.937-10.403 3.937-14.34 0z" }),
            React.createElement("path", { d: "M25.78 24.295l1.403-1.426-4.154-4.085-1.402 1.426zM10.115 8.63l1.414-1.414L7.444 3.13 6.03 4.545z" }),
            React.createElement("path", { d: "M24.999 13.648A8.5 8.5 0 108 13.352 8.5 8.5 0 0025 13.648zM10 13.387a6.5 6.5 0 1112.998.226 6.5 6.5 0 01-12.998-.226zM15 30h2v-5h-2z" }),
            React.createElement("path", { d: "M20 30v-2h-8v2z" }))));
}

function Gear32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M16.002 18.18a2.133 2.133 0 01-2.131-2.132c0-1.175.956-2.13 2.131-2.13 1.175 0 2.131.955 2.131 2.13a2.133 2.133 0 01-2.131 2.131m0-6.262a4.135 4.135 0 00-4.131 4.131 4.135 4.135 0 004.131 4.131 4.135 4.135 0 004.131-4.13 4.135 4.135 0 00-4.131-4.132" }),
            React.createElement("path", { d: "M23.787 18.456a10.262 10.262 0 01-1.765 2.985l-.455.537 1.494 2.58-3.119 1.824-1.503-2.597-.715.159a7.575 7.575 0 01-1.722.199 7.116 7.116 0 01-1.696-.193l-.73-.183-1.515 2.615-3.118-1.823 1.51-2.61-.5-.54c-.867-.94-1.41-1.856-1.713-2.884l-.21-.718H5v-3.591h2.973l.244-.65a10.262 10.262 0 011.765-2.984l.454-.538-1.493-2.58 3.118-1.823 1.505 2.598.715-.16a7.477 7.477 0 011.721-.2c.603 0 1.19.068 1.696.195l.731.183 1.513-2.616 3.12 1.823-1.51 2.609.5.54c.865.94 1.41 1.857 1.712 2.885l.211.718h3.03v3.59H24.03l-.244.65zm5.217 1.35v-7.59h-3.567a8.935 8.935 0 00-1.428-2.397l1.781-3.076L19.218 2.9l-1.785 3.085a9.548 9.548 0 00-2.859.004l-1.788-3.09-6.572 3.844 1.797 3.104a12.37 12.37 0 00-1.4 2.369H3v7.59h3.566a8.946 8.946 0 001.428 2.398l-1.78 3.077 6.571 3.842 1.786-3.084a9.477 9.477 0 002.858-.005l1.788 3.089 6.572-3.842-1.797-3.105c.556-.74 1.03-1.542 1.4-2.37h3.611z" }))));
}

function Gravestone32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 28, height: 29, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M15.836 10.28c3.899 1.803 6.253 4.04 6.947 6.72H26V9.727c0-2.54-1.94-4.758-6.02-6.639-2.235.95-3.944 2.295-4.888 3.54l-1.594-1.207c1.216-1.605 3.364-3.261 6.136-4.352l.388-.152.382.168C25.394 3.29 28 6.165 28 9.727V19h-5v10H7v-6H0V12.727C0 9.165 2.602 6.29 7.587 4.085l.404-.178.405.178c4.249 1.879 6.794 3.933 7.44 6.195zm-2.062.185c-.622-1.38-2.534-2.882-5.781-4.368C3.93 7.976 2 10.19 2 12.727V21h5v-2.273c0-3.361 2.32-6.111 6.774-8.262zM9 18.727V27h12v-8.273c0-2.537-1.933-4.75-6-6.63-4.067 1.88-6 4.093-6 6.63z", fill: "currentColor", fillRule: "nonzero" })));
}

function GrowthArrow32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "currentColor", d: "M19.017 8v2h5.586l-7.586 7.586-5-5.001-8.707 8.708 1.414 1.414 7.293-7.293 5 5 9-9V17h2V8z", fillRule: "evenodd" })));
}

function Guide32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M15 27h2V3h-2z" }),
            React.createElement("path", { d: "M16 5v2.001h6.172L23.67 8.5 22.172 10H18V12h5l3.5-3.5L23 5zM16 13v2.001h8.172L25.67 16.5 24.172 18H18V20h7l3.5-3.5L25 13zM14 15v-2H7.828L6.33 11.5 7.828 10H16V8H7l-3.5 3.5L7 15zM11 27h10v2H11z" }))));
}

function Heart32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M25.508 15.89l-9.493 9.492-9.493-9.492c-1.996-1.997-1.996-5.37 0-7.368 1-.998 2.341-1.498 3.684-1.498 1.342 0 2.685.5 3.684 1.498l2.125 2.125 2.125-2.125c2-1.996 5.371-1.995 7.368 0 1.997 1.997 1.997 5.371 0 7.368m1.414-8.782c-2.81-2.81-7.385-2.812-10.196 0l-.71.711-.712-.71c-2.812-2.813-7.387-2.81-10.196 0-2.81 2.81-2.81 7.384 0 10.195L16.015 28.21l10.907-10.906a7.154 7.154 0 002.094-5.099 7.151 7.151 0 00-2.094-5.097", fill: "currentColor", fillRule: "evenodd" })));
}

function Heartbeat32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M5.762 5.767A2.575 2.575 0 017.612 5c.704 0 1.361.272 1.85.767L11 7.327l1.54-1.56c.974-.99 2.722-.99 3.698 0 1.013 1.027 1.013 2.762 0 3.789L11 14.868 5.762 9.556c-1.013-1.027-1.013-2.762 0-3.79zM11 17.715l6.662-6.755c1.794-1.82 1.794-4.778 0-6.597A4.559 4.559 0 0014.39 3a4.557 4.557 0 00-3.273 1.363L11 4.48l-.115-.117A4.561 4.561 0 007.611 3a4.559 4.559 0 00-3.273 1.363c-1.794 1.819-1.794 4.778 0 6.597L11 17.715zM28.614 20l-4.557-7.895-7.934 11.907-2.952-5.899L9.47 23H2v2h8.466l2.357-3.113 3.054 6.101 8.058-12.093L27.46 22h2.59v-2z" }))));
}

function House32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M16.004 3.74L3 13.681v14.318h2v-13.33l11.004-8.412L27 14.669v13.33h2V13.681z" }),
            React.createElement("path", { d: "M12 18.009v10h2v-8h4v8h2v-10z" }))));
}

function HouseSun32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M24 3h-2c0 3.859 3.14 7 7 7V8c-2.804 0-5-2.196-5-5zM18.687 11.86l1.41 1.418 3.086-3.069-1.41-1.418zM15.957 6H20V4h-4.043zM26 16h2v-4h-2zM3 17.95V29h2V18.95l7.684-5.772L20 18.934V29h2V17.964l-9.288-7.307z" }),
            React.createElement("path", { d: "M9 29h2v-6h3v6h2v-8H9z" }))));
}

function IdCard32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M27 21.6c0 .744-.657 1.4-1.4 1.4H6.203C5.531 23 5 22.313 5 21.6V10.4C5 9.628 5.628 9 6.4 9h19.2c.772 0 1.4.628 1.4 1.4v11.2zM6.4 7A3.404 3.404 0 003 10.4v11.2c0 1.533 1.531 3.38 3.203 3.38L25.6 25c1.806 0 3.4-1.672 3.4-3.4V10.4C29 8.526 27.475 7 25.6 7H6.4z" }),
            React.createElement("path", { d: "M18 15h7v-2h-7zM18 19h7v-2h-7zM12 16.493a1.498 1.498 0 010-2.993 1.498 1.498 0 010 2.993m0-4.993a3.5 3.5 0 00-3.496 3.497A3.5 3.5 0 0012 18.493a3.5 3.5 0 003.496-3.496A3.5 3.5 0 0012 11.5" }),
            React.createElement("path", { d: "M18 23h-2a4 4 0 10-8 0H6a6 6 0 1112 0z" }))));
}

function InfoEnclosed32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M15 23h2v-9h-2zM16.017 9.062a1.5 1.5 0 100 3 1.5 1.5 0 000-3" }),
            React.createElement("path", { d: "M16 27C9.935 27 5 22.065 5 16S9.935 5 16 5s11 4.935 11 11-4.935 11-11 11m0-24C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3" }))));
}

function Instagram32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M4 4v24h24V4H4zM2 2h28v28H2V2z", fillRule: "nonzero" }),
            React.createElement("path", { d: "M13.332 15.997a2.666 2.666 0 105.331.001 2.666 2.666 0 00-5.331 0z" }),
            React.createElement("path", { d: "M19.286 11.715a1 1 0 112-.001 1 1 0 01-2 0zM11.892 16a4.108 4.108 0 118.216 0 4.108 4.108 0 01-8.216 0zm11.688-5.24a3.91 3.91 0 00-.923-1.417 3.92 3.92 0 00-1.417-.923c-.509-.198-1.09-.333-1.942-.372C18.445 8.009 18.173 8 16 8s-2.445.01-3.298.048c-.852.039-1.433.174-1.942.372a3.92 3.92 0 00-1.417.923c-.445.444-.718.89-.923 1.417-.198.508-.333 1.09-.372 1.942C8.009 13.555 8 13.827 8 16s.01 2.445.048 3.298c.039.852.174 1.433.372 1.942.205.526.478.972.923 1.417.445.445.89.718 1.417.923.509.198 1.09.333 1.942.371.853.04 1.125.048 3.298.048s2.445-.009 3.298-.048c.852-.038 1.433-.173 1.942-.371a3.925 3.925 0 001.417-.923c.445-.445.718-.89.923-1.417.198-.509.333-1.09.372-1.942.039-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.039-.852-.174-1.434-.372-1.942z" }))));
}

function Institution32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M7 21h2V11H7zM3 27h26v-2H3zM5 24h22v-2H5zM15.99 3.9L7.798 8.014H4v2h4.273l7.738-3.887 8.107 3.887H28v-2h-3.428zM11 21h2V11h-2zM15 21h2V11h-2zM19 21h2V11h-2zM23 21h2V11h-2z" }))));
}

function Letter32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M5 24h22V8H5v16zM29 6v20H3V6h26z" }),
            React.createElement("path", { d: "M16.038 16.962L4.678 6.587 3.322 8.06l12.72 11.625L28.679 8.057 27.321 6.59zM27.733 23.32l-5.5-6-1.466 1.36 5.5 6zM5.733 24.68l5.5-6-1.466-1.36-5.5 6z" }))));
}

function Linkedin32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M4 4v24h24V4H4zM2 2h28v28H2V2z", fillRule: "nonzero" }),
            React.createElement("path", { d: "M10.493 8.25a1.733 1.733 0 100 3.466 1.733 1.733 0 000-3.466zM14 13v9.621h2.99v-4.76c0-1.254.237-2.47 1.793-2.47 1.532 0 1.554 1.435 1.554 2.551v4.679h2.987v-5.277c0-2.591-.56-4.584-3.585-4.584-1.454 0-2.43.798-2.83 1.555h-.04V13H14zM9 22.621h3V13H9z" }))));
}

function LoginBankid32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M30.19 11.016c-.015.569-.099 1.13-.197 1.687a12.161 12.161 0 01-.662 2.344 11.224 11.224 0 01-1.58 2.79 10.604 10.604 0 01-3.207 2.76c-.852.477-1.746.828-2.684 1.065a9.62 9.62 0 01-1.359.252c-.243.023-.488.055-.733.068-.316.016-.634.021-.951.025-.36.003-.72 0-1.08 0H17.6l.904-5.994.38-.022a5.524 5.524 0 001.54-.313 3.964 3.964 0 001.644-1.101c.364-.411.626-.888.801-1.416a6.187 6.187 0 00.279-1.528c.03-.453 0-.898-.117-1.335-.184-.687-.577-1.205-1.185-1.543a3.591 3.591 0 00-1.102-.382 6.398 6.398 0 00-1.172-.098h-1.66c-.233 0-.458-.042-.672-.14a1.177 1.177 0 01-.404-.298c-.202-.23-.192-.547-.024-.821a1.72 1.72 0 01.457-.47c.192-.143.37-.3.523-.489.184-.225.313-.48.318-.779a1.087 1.087 0 00-.287-.774c-.226-.246-.513-.37-.823-.443a2.857 2.857 0 00-.947-.068c-.577.055-1.095.26-1.51.7-.195.206-.332.448-.354.747-.012.174.027.337.096.493a1.5 1.5 0 00.468.568c.115.092.22.195.283.335.114.258.047.492-.095.713-.128.197-.3.344-.5.457a1.89 1.89 0 01-.796.251c-.124.01-.248.016-.373.018-.31.002-.621 0-.931 0h-.138c.011-.098.018-.183.03-.267.105-.688.212-1.377.316-2.064l.433-2.871c.05-.323.102-.646.15-.967.005-.036.005-.072.008-.106h7.82c.03.004.06.013.09.013.388.008.776.039 1.163.08.435.045.869.107 1.3.193.9.178 1.775.442 2.61.846.89.432 1.688.996 2.353 1.756.45.514.808 1.09 1.084 1.722.207.472.361.962.465 1.468.086.42.158.842.167 1.273.001.079.013.157.022.235v1.185c-.009.082-.021.163-.023.245zM5.127 8.78h.107c.372 0 .744.003 1.115 0 .388-.002.768-.07 1.124-.237.386-.178.708-.436.923-.823.283-.507.213-1.033-.17-1.441-.072-.075-.155-.14-.23-.21-.06-.055-.121-.108-.173-.17-.213-.262-.212-.54.003-.802.211-.256.482-.415.788-.51.46-.145.926-.132 1.389-.013.15.038.292.106.416.209a.625.625 0 01.132.78c-.131.238-.328.41-.54.567a2.344 2.344 0 00-.542.534 1.306 1.306 0 00-.257.85c.015.245.108.458.261.64.273.325.627.5 1.027.582.092.018.187.027.281.028.394.003.788.001 1.182.001h.135c-.018.142-.034.27-.053.397l-.197 1.284c-.084.54-.166 1.08-.248 1.622l-.257 1.704-.239 1.563c-.056.366-.124.73-.162 1.098-.077.748-.215 1.487-.322 2.23-.103.721-.212 1.44-.32 2.16-.055.366-.108.733-.164 1.098-.004.026-.013.052-.02.08H3.137l1.99-13.22M4.175 26.76c.173.023.6.018.731-.011.346-.077.562-.293.613-.666.044-.311-.102-.536-.4-.591-.136-.025-.279-.024-.418-.029-.109-.004-.218 0-.332 0l-.194 1.298m-.323 2.188c.024.005.039.01.053.01.208 0 .417.005.625-.004a.99.99 0 00.277-.057.718.718 0 00.396-.315c.074-.124.107-.26.125-.402.027-.217-.072-.423-.235-.509a.801.801 0 00-.37-.099h-.569c-.033 0-.065.007-.1.011-.07.46-.136.91-.202 1.365M2 29.64c.014-.04.034-.078.04-.119.08-.532.158-1.066.237-1.599l.178-1.178.199-1.33.105-.735c.035-.002.067-.008.1-.008.972-.001 1.947-.006 2.92.002.323.004.64.07.912.272.216.16.34.376.362.653.041.498-.151.879-.54 1.157-.075.053-.158.094-.236.14l-.11.065.22.115c.217.117.399.272.51.504.09.188.112.389.095.598a1.73 1.73 0 01-.2.696c-.248.45-.625.721-1.105.834-.146.034-.299.05-.449.05-1.079.004-2.158.002-3.238.002v-.119M9.532 28.983c-.215.137-.452.246-.729.241-.185-.003-.357-.155-.328-.402a.482.482 0 01.272-.395c.115-.059.237-.103.357-.148.089-.033.181-.056.271-.087.088-.032.174-.07.275-.11l-.118.901m1.626-.265c-.105-.026-.156-.09-.156-.201-.001-.08 0-.159.012-.237.06-.428.135-.854.184-1.284a.999.999 0 00-.208-.775 1.16 1.16 0 00-.505-.346c-.341-.131-.697-.139-1.053-.116-.587.038-1.105.275-1.582.622-.038.027-.05.062-.056.108-.04.284-.085.568-.128.851l-.03.246.082-.048c.086-.058.17-.117.257-.173.295-.188.6-.354.944-.418.186-.035.374-.05.562-.01.182.037.273.14.288.326.007.078-.01.14-.09.17-.17.065-.337.139-.51.193-.317.1-.64.184-.958.283-.337.107-.614.302-.787.634a.952.952 0 00-.092.654c.077.348.325.503.633.584.058.015.116.033.174.05h.477c.259-.051.518-.1.759-.216.099-.047.195-.1.298-.153.082.13.19.231.333.28.095.033.196.051.294.076l.044.013h.546c.055-.011.088-.042.11-.1.1-.256.206-.51.308-.764.028-.067.054-.136.084-.21-.087-.014-.161-.021-.234-.04M27.822 27.921c-.174.329-.455.509-.803.58-.266.056-.534.033-.82.034.126-.883.26-1.755.39-2.644.297-.004.587-.03.866.057.352.11.549.371.598.742.057.435-.03.85-.231 1.231m1.83-1.885a1.86 1.86 0 00-1.042-1.153 2.471 2.471 0 00-1.016-.209c-.81-.002-1.622 0-2.432 0h-.113l-.755 5.085h2.714a3 3 0 00.697-.074c.47-.112.877-.34 1.221-.69.295-.299.512-.653.66-1.05.23-.628.284-1.266.066-1.909M15.75 29.755c.008-.029.016-.054.02-.08l.119-.794c.081-.553.162-1.106.245-1.659.034-.226.051-.453.006-.68-.058-.301-.213-.527-.479-.666-.28-.145-.579-.144-.877-.107-.29.035-.548.168-.782.35l-.23.176.06-.48h-1.496l-.584 3.939h1.497c.007-.036.015-.066.02-.097l.17-1.144c.046-.316.091-.63.14-.946.007-.046.012-.098.037-.134.14-.199.313-.356.556-.393.213-.032.428.064.416.362a3.23 3.23 0 01-.037.351c-.065.449-.132.896-.198 1.343-.031.217-.063.435-.097.659h1.494M17.271 24.677c-.008.037-.015.067-.02.097l-.213 1.447-.308 2.066c-.058.388-.12.777-.174 1.167-.013.097-.05.196-.027.301h1.484l.27-1.797c.024.031.037.045.046.06.344.553.688 1.105 1.03 1.658.036.06.074.086.145.086.563-.004 1.128-.003 1.693-.003.025 0 .05-.002.099-.004L19.833 27.5c.61-.562 1.21-1.113 1.833-1.683-.065-.004-.101-.007-.137-.007-.496 0-.992.01-1.489-.005a.526.526 0 00-.418.174c-.32.319-.648.627-.975.938-.07.068-.144.134-.217.2.093-.818.224-1.622.335-2.438H17.27M22.515 24.68c-.253 1.699-.502 3.385-.752 5.073h1.72c.251-1.691.5-3.377.753-5.073h-1.721z" }))));
}

function List32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { transform: "translate(4 7)", fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { fillRule: "nonzero", d: "M7 3h16V1H7zM7 10h16V8H7zM7 17h16v-2H7z" }),
            React.createElement("circle", { cx: 2, cy: 2, r: 1.5 }),
            React.createElement("circle", { cx: 2, cy: 9, r: 1.5 }),
            React.createElement("circle", { cx: 2, cy: 16, r: 1.5 }))));
}

function LoginDevice32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M21.869 4.924l.082-.92.082.006.08.008.081.01.08.012.08.015.079.016.078.02.078.02.077.023.076.025.075.026.074.03.074.03.073.032.071.035.071.036.07.038.07.04.067.042.067.043.065.045.065.047.064.048.062.05.061.051.06.053.059.055.058.056.056.057.055.06.054.06.052.061.051.064.05.064.048.066.047.067.046.069.044.07.042.07.041.072.04.073.038.075.036.075.035.077.033.077.031.08.03.079.028.08.026.082.024.083.023.083.02.085.02.085.017.085.015.087.013.088.011.087.01.089.007.089.005.09.003.09.001.082v16.966l-.001.083-.003.09-.005.09-.007.088-.01.089-.01.087-.014.088-.015.086-.017.086-.02.085-.02.085-.023.083-.024.083-.026.081-.028.08-.03.08-.031.08-.033.077-.035.077-.036.075-.038.075-.04.073-.04.072-.043.071-.044.07-.046.068-.047.067-.048.066-.05.064-.051.064-.052.061-.054.06-.055.06-.057.057-.057.056-.059.055-.06.053-.061.051-.062.05-.064.048-.065.047-.065.045-.067.043-.068.042-.069.04-.07.038-.07.036-.072.035-.073.032-.074.03-.074.03-.075.026-.076.025-.077.023-.078.02-.078.02-.08.016-.078.015-.08.012-.081.01-.081.008-.082.006-.082.003-.075.001H10.206l-.075-.001-.082-.003-.081-.006-.082-.008-.08-.01-.08-.012-.08-.015-.079-.016-.078-.02-.078-.02-.077-.023-.076-.025-.075-.026-.074-.03-.074-.03-.073-.032-.072-.035-.07-.036-.07-.038-.069-.04-.068-.042-.067-.043-.065-.045-.065-.047-.064-.048-.062-.05-.061-.051-.06-.053-.059-.055-.057-.056-.057-.057-.055-.06-.054-.06-.052-.062-.051-.063-.05-.064-.048-.066-.047-.067-.046-.068-.044-.07-.042-.071-.041-.072-.04-.073-.038-.075-.036-.075-.035-.077-.033-.078-.031-.078-.03-.08-.028-.08-.026-.082-.024-.083-.023-.084-.02-.084-.02-.085-.017-.086-.015-.086-.013-.087-.011-.088-.01-.089-.007-.089-.005-.09-.003-.09L7 24.484V7.517l.001-.083.003-.09.005-.09.007-.088.01-.089.01-.088.014-.087.015-.086.017-.086.02-.085.02-.085.023-.083.024-.083.026-.081.028-.08.03-.08.031-.08.033-.077.035-.077.036-.075.038-.075.04-.073.041-.072.042-.07.044-.07.046-.069.047-.067.048-.066.05-.064.051-.064.052-.061.054-.06.055-.06.056-.057.058-.056.06-.055.06-.053.06-.051.062-.05.064-.048.065-.047.065-.045.067-.043.068-.042.069-.04.07-.038.07-.036.072-.035.073-.032.074-.03.074-.03.075-.026.076-.025.077-.023.078-.02.078-.02.079-.016.08-.015.08-.012.08-.01.082-.008.081-.006.082-.003.075-.001h11.588l.075.001v.923zM9.949 6.002l-.05.004-.05.007-.05.01-.048.012-.047.015-.046.017-.045.02-.044.022-.043.024-.042.027-.041.03-.04.03-.038.034-.036.035-.035.037-.034.039-.031.04-.044.064-.04.068-.036.07-.03.073-.026.076-.021.077-.016.081-.01.083L9 7.083V24.88l.001.067.007.085.012.082.018.08.023.077.027.075.033.072.036.07.042.065.045.063.033.04.034.038.036.036.037.034.04.032.039.03.042.028.042.026.044.023.044.021.046.019.046.016.048.013.049.011.05.009.05.006.052.002L21.99 26l.06-.002.051-.004.05-.007.05-.01.048-.012.047-.015.046-.017.045-.02.044-.022.043-.025.042-.026.041-.03.04-.03.038-.034.036-.035.035-.037.034-.039.032-.04.044-.064.04-.068.035-.07.03-.073.026-.075.021-.079.016-.08.01-.083.006-.086V7.12l-.001-.067-.007-.085-.012-.082-.018-.08-.023-.077-.027-.075-.032-.072-.037-.07-.042-.065-.03-.043-.031-.04-.034-.04-.035-.036-.036-.035-.038-.034-.04-.03-.04-.03-.043-.027-.043-.024-.044-.022-.045-.02-.046-.017-.047-.015-.048-.012-.05-.01-.05-.007-.05-.004L21.99 6H10.01l-.06.002z" }),
            React.createElement("path", { d: "M15 16a2 2 0 11-3.999.001A2 2 0 0115 16M19.121 18.05a2 2 0 11-.14-3.996 2 2 0 01.14 3.996zM15 21a2 2 0 11-3.999.001A2 2 0 0115 21M21 21a2 2 0 11-3.999.001A2 2 0 0121 21M11 11h10V9H11z" }))));
}

function LoginPincode32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M25 20V9H2v11h23zm-2-2v-7H4v7h19z" }),
            React.createElement("path", { d: "M31.482 18.814l-8.826 8.826-4.403-4.404 1.515-1.515 2.888 2.888 7.31-7.31zM9 14.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0M11.5 16a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM17 14.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0M21 14.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0" }))));
}

function Logout32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M23.655 12l2.961 3.013H16v2h10.617l-2.96 3.012 1.425 1.403 5.32-5.415-5.319-5.415z" }),
            React.createElement("path", { d: "M14.887 25.425a9.32 9.32 0 01-6.641-2.752c-3.663-3.673-3.663-9.648 0-13.32A9.316 9.316 0 0114.887 6.6c2.512 0 4.87.977 6.641 2.752l1.416-1.412a11.303 11.303 0 00-8.057-3.34A11.303 11.303 0 006.83 7.94c-4.44 4.451-4.44 11.694 0 16.145a11.303 11.303 0 008.057 3.34c3.047 0 5.908-1.186 8.057-3.34l-1.416-1.412a9.32 9.32 0 01-6.641 2.752" }))));
}

function Mc32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h32v32H0z" }),
            React.createElement("path", { d: "M20.768 5.36L27.135 13H25c-.987 0-2.167.596-3.22 1.467l.744.737a4.819 4.819 0 11-1.408 1.423l-.74-.735c-.774.964-1.311 2.026-1.37 2.941L19 19v.414L17.414 21h-4.828l-3.087-3.085-1.792 1.792-1.414-1.414L8.085 16.5l-2.501-2.501L3 14v-2h3.414l7 6.999h3.171l.437-.437.02-.168c.368-2.716 3.09-5.797 5.863-6.938l.256-.1-3.93-4.716 1.537-1.28zM4.862 14.726l.812 1.828a2.82 2.82 0 103.665 3.842l.092-.203 1.854.75a4.819 4.819 0 11-6.687-6.09l.264-.127zm20.31 1.686c-.42 0-.817.091-1.174.255l1.465 1.453-1.408 1.42-1.462-1.45a2.819 2.819 0 102.578-1.678zM8.289 9l4.928 3.109L17 12c1.206 0 1.932-.75 1.995-1.842L19 10h2c0 2.167-1.485 3.893-3.756 3.995l-4.579.131L7.71 11 3 11V9h5.29zM19 8v2h-2V8h2z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Menu32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M7 11h18V8.999H7zM7 17h18v-2H7zM7 23h18v-2H7z" }))));
}

function MenuEnvelope32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M5 24h22V8H5v16zM29 6v20H3V6h26z" }),
            React.createElement("path", { d: "M16.038 16.962L4.678 6.587 3.322 8.06l12.72 11.625L28.679 8.057 27.321 6.59zM27.733 23.32l-5.5-6-1.466 1.36 5.5 6zM5.733 24.68l5.5-6-1.466-1.36-5.5 6z" }))));
}

function MobilePhone32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M15 0a3 3 0 013 3v22a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3h12zm1 21H2v4a1 1 0 001 1h12a1 1 0 001-1v-4zm-7 1a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM2 6v13h14V6H2zm0-2h14V3a1 1 0 00-1-1H3a1 1 0 00-1 1v1z", id: "mobile-phone-32_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h32v32H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#mobile-phone-32_svg__a", transform: "translate(7 2)" }))));
}

function Moped32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h32v32H0z" }),
            React.createElement("path", { d: "M26 17a4 4 0 110 8 4 4 0 010-8zm-22.326.955l1.07 1.69-.187.118-.072.073c-.27.299-.439.681-.477 1.096l-.008.18c0 1.035.808 1.864 1.793 1.864.5 0 .967-.213 1.303-.583l.062-.077.171-.333 1.78.91-.219.43-.093.148a3.762 3.762 0 01-3.004 1.505c-2.1 0-3.793-1.735-3.793-3.864 0-1.034.402-2.005 1.1-2.722l.155-.15.14-.108.279-.177zM26 19a2 2 0 100 4 2 2 0 000-4zM20.618 6l3.864 7.727c.22-.037.44-.06.662-.07l.219-.004c.51 0 1.148.047 1.917.141l.338.043-.264 1.983c-.842-.112-1.509-.167-1.991-.167-2.238 0-4.62 2.42-4.75 4.426l-.006.171v.355L19.477 22H9.632L2 15.497V10h13v1c0 2.148-1.523 3.998-3.568 4.953.631.626 1.664 1.047 2.84 1.047 2.093 0 3.492-.806 3.59-1.88l.005-.12h2c0 2.501-2.463 4-5.595 4-2.09 0-3.972-.952-4.897-2.43a6.78 6.78 0 01-.797.073l-.225.004v-2c1.872 0 3.675-1.078 4.358-2.465l.082-.182H4v2.573L10.369 20h8.153l.101-.124.002-.026c.188-2.13 1.84-4.347 3.95-5.462L19.381 8H17V6h3.618zm4.25 2.503l1.397 2.438-1.735.995-1.398-2.439 1.736-.994z", fill: "currentColor", fillRule: "nonzero" }))));
}

function NavigationAccounts32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M10 24V13.989L27 14l-.148-.011c.59.089 1.148.614 1.148 1.011v9c0 .448-.552 1-1 1H5c-.448 0-1-.552-1-1V7c0-.448.552-1 1-1h5c.448 0 1 .552 1 1v3h14c.578 0 .95.339 1.003 1.071L26 12l2 .281V11c-.13-1.86-1.382-3-3-3H13V7c0-1.552-1.448-3-3-3H5C3.448 4 2 5.448 2 7v17c0 1.552 1.448 3 3 3h22c1.552 0 3-1.448 3-3v-9c0-1.486-1.406-2.719-2.852-2.989L26.036 12H8v12c0 .499-.516 1-1 1h3v-1z", fill: "currentColor", fillRule: "nonzero" })));
}

function NavigationCard32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M4 22V9c0-.448.552-1 1-1h22c.448 0 1 .552 1 1v13c0 .448-.552 1-1 1H5c-.448 0-1-.552-1-1zm23 3c1.552 0 3-1.448 3-3V9c0-1.552-1.448-3-3-3H5C3.448 6 2 7.448 2 9v13c0 1.552 1.448 3 3 3h22z" }),
            React.createElement("path", { d: "M4 10v2h24v-2zM12 17v-2H6v2z" }))));
}

function NavigationFiletransfer32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M17.974 10l3.197 3.198-6.125 6.579 1.154 1.154H12v-4.2l1.188 1.187 4.187-4.387-1.44-1.389-2.772 2.923L10 11.903v11.028h11.026l-3.196-3.197 6.125-6.579L22.801 12h4.2v4.201l-1.207-1.207-4.294 4.6 1.474 1.35 2.882-3.059L29 21.03V10z" }),
            React.createElement("path", { d: "M19.414 3L5 3.001V29h19v-5h-2v3H7V5.002L18.584 5l2.852 2.812 1.415-1.414z" }))));
}

function NavigationBank32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M7 21h2V11H7zM3 27h26v-2H3zM5 24h22v-2H5zM15.99 3.9L7.798 8.014H4v2h4.273l7.738-3.887 8.107 3.887H28v-2h-3.428zM11 21h2V11h-2zM15 21h2V11h-2zM19 21h2V11h-2zM23 21h2V11h-2z" }))));
}

function NavigationGlobe32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M9.328 20.86c-3.937-3.938-3.937-10.404 0-14.34L7.913 5.104c-4.717 4.718-4.717 12.45 0 17.169 4.718 4.718 12.451 4.718 17.17 0l-1.415-1.415c-3.937 3.937-10.403 3.937-14.34 0z" }),
            React.createElement("path", { d: "M25.78 24.295l1.403-1.426-4.154-4.085-1.402 1.426zM10.115 8.63l1.414-1.414L7.444 3.13 6.03 4.545z" }),
            React.createElement("path", { d: "M24.999 13.648A8.5 8.5 0 108 13.352 8.5 8.5 0 0025 13.648zM10 13.387a6.5 6.5 0 1112.998.226 6.5 6.5 0 01-12.998-.226zM15 30h2v-5h-2z" }),
            React.createElement("path", { d: "M20 30v-2h-8v2z" }))));
}

function NavigationHome32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M16.004 3.74L3 13.681v14.318h2v-13.33l11.004-8.412L27 14.669v13.33h2V13.681z" }),
            React.createElement("path", { d: "M12 18.009v10h2v-8h4v8h2v-10z" }))));
}

function NavigationMortgage32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M26.39 14.262L23.754 1.725l-20.77 4.42L5.704 18.68l10.166-2.214-.425-1.954-8.205 1.81-1.86-8.643 16.834-3.55 1.843 8.578-3.267.684.41 1.958z" }),
            React.createElement("path", { d: "M22.5 14.25a3.75 3.75 0 10-7.5 0 3.75 3.75 0 007.5 0zm-5.5 0a1.75 1.75 0 113.5 0 1.75 1.75 0 01-3.5 0zM27.5 21.25a3.25 3.25 0 10-6.5 0 3.25 3.25 0 006.5 0zm-4.5 0a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zM20 24.188l-7-5.456-7 5.456V30h2v-4.73l5-3.997 5 3.997V30h2z" }),
            React.createElement("path", { d: "M12 30h2v-4h-2z" }))));
}

function NavigationPayment32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M30.482 20.814l-8.826 8.826-4.403-4.404 1.515-1.515 2.888 2.888 7.31-7.31z" }),
            React.createElement("path", { fillRule: "nonzero", d: "M23.791 2.46l-13.72 2.667.382 1.964 11.836-2.263.984 4.35 1.95-.444z" }),
            React.createElement("path", { d: "M4.336 15.135l1.987-8.796L24.214 10l-1.91 8.786s-8.45-1.908-9.459-2.112l-.396 1.96c.99.2 11.342 2.55 11.342 2.55l2.79-12.71-21.79-4.492-2.873 12.674 5.268 1.141.423-1.954-3.273-.708zM14.5 25A3.25 3.25 0 108 25a3.25 3.25 0 006.5 0zM10 25a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0z", fillRule: "nonzero" }),
            React.createElement("path", { d: "M13.5 16.25a3.75 3.75 0 10-7.5 0 3.75 3.75 0 007.5 0zm-5.5 0a1.75 1.75 0 113.5 0 1.75 1.75 0 01-3.5 0z", fillRule: "nonzero" }))));
}

function NavigationPension32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M16.004 3l-5.192 9h10.385l-5.193-9zm0 4.002L17.734 10h-3.459l1.729-2.998zM10.235 13l-4.038 7h19.615l-4.038-7H10.235zm1.155 2h9.228l1.731 3H9.66l1.73-3zm-5.77 6l-4.04 7.003L30.428 28 26.389 21H5.62zm1.154 2h18.459l1.732 3-21.922.003L6.774 23z", fill: "currentColor", fillRule: "evenodd" })));
}

function NavigationPhone32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M9 5.319C9 4.628 9.625 4 10.308 4h11.384C22.375 4 23 4.628 23 5.319V26.68c0 .691-.624 1.319-1.308 1.319H10.308A1.31 1.31 0 019 26.681V5.32zM10.308 30h11.384C23.482 30 25 28.474 25 26.681V5.32C25 3.525 23.482 2 21.692 2H10.308C8.518 2 7 3.525 7 5.319V26.68A3.31 3.31 0 0010.308 30z", fillRule: "nonzero" }),
            React.createElement("path", { fillRule: "nonzero", d: "M23 10V8H9v2zM23 23v-2H9v2z" }),
            React.createElement("path", { d: "M16 24a1.5 1.5 0 110 3 1.5 1.5 0 010-3" }))));
}

function NavigationPiggybank32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M3.753 11.845c-.476-.476-.476-1.33.002-1.809L2.339 8.624c-1.256 1.26-1.256 3.377 0 4.636 1.261 1.257 3.137 1.116 4.394-.142l-1.44-1.272c-.477.477-1.061.477-1.54 0z" }),
            React.createElement("path", { d: "M22 22.37V26h-2v-3h-8.01v3H10v-3.63C7.901 21.366 6 18.843 6 16c0-3.16 2.859-6.03 5.99-6h6.499c.035-.078.063-.987 1.012-2C20.45 6.987 20.973 6.862 22 6.862v3.762c2 .625 2.906 2.157 3.154 4.376H28v2h-2.932C25 20.78 23.399 21.683 22 22.37zM29 19h1v-6h-3.233c-.289-1.558-1.444-3-2.767-3.563V5c-2.76 0-3.82 0-5.021 1-1.083.901-1.386 1.479-1.618 2H12c-.909.013-1.96.2-2.789.528C6.24 9.708 4 12.708 4 16c0 3.593 1.768 6.573 4 7.535V28h6v-3h4v3h6v-4.465c2-.963 3.06-3.018 3.062-4.535H29z" }),
            React.createElement("path", { d: "M12.033 11.924v2H18v-2z" }))));
}

function NavigationTransfer32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M20 25v4.204L30.519 20 20 10.796V15H10v1.83L4.52 12 10 7.23V9h9V7h-7V2.796L1.481 12 12 21.204V17h10v-1.821L27.473 20 22 24.802V23h-9v2z", fill: "currentColor", fillRule: "nonzero" })));
}

function NavigationUmbrella32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M17 6h-2c-4.57 0-8.865 3.854-9.809 8.236 1.329-1.007 3.017-1.509 4.878-1.509 2.311 0 4.47 1.062 5.938 2.796 1.492-1.7 3.788-2.796 5.993-2.796 1.879 0 3.511.473 4.789 1.434C25.803 9.824 21.506 6 17 6zm12 11.527h-2c-.957-1.995-2.76-2.8-5-2.8-1.886 0-3.968 1.146-5 2.8h-2c-1.032-1.654-2.867-2.8-4.93-2.8-2.064 0-4.042.778-5.07 2.8H3V16C3 10 8.562 4 15 4h2c6.375 0 12 6 12 12v1.527zM14.791 27.079c-.306.503-.751.885-1.783.885s-1.935-.891-1.935-2.037H9.14c0 2.164 1.676 3.946 3.869 3.946C14.942 29.873 17 28.48 17 26c0-2.48-2 0-2 0s.097.575-.209 1.079z" }),
            React.createElement("path", { d: "M15 16v10h2V16zM17 5V2h-2v3z" }))));
}

function NavigationWages32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M26 27.006H6.898C5.852 27.006 5 26.183 5 25.17V11.84c0-1.012.852-1.835 1.898-1.835h4.143l-2.144 2h-1.83v2H26v3h-3v2h4v3h-4v2h3v3zm-.32-16.978l-2.121 1.978h-11.73l8.395-7.83 5.456 5.852zM29 17.006h-1v-5h-1.508l2.014-1.88-8.183-8.776-7.137 6.656H6.898C4.749 8.006 3 9.726 3 11.84v13.33c0 2.115 1.749 3.835 3.898 3.835H28v-5h1v-7z", fill: "currentColor", fillRule: "evenodd" })));
}

function NotificationSwish32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M6.931 21.247l.47-.578c3.187.896 6.694-.265 8.834-2.88 2.862-3.518 2.372-8.834-1.227-11.779l-.654-.49 2.975-3.486.602.452C20.493 4.521 22 7.609 22 11c0 6.102-4.898 11-11 11-1.356 0-2.713-.226-4.069-.753zM4.144 19.59A11.003 11.003 0 010 11C0 4.898 4.898 0 11 0c1.583 0 3.088.301 4.445.979l-.496.547C11.528.462 7.906 1.433 5.683 4.21c-2.863 3.6-2.29 8.753 1.309 11.78l.654.49-2.975 3.56-.527-.45z", id: "notification-swish-32_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h32v32H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#notification-swish-32_svg__a", transform: "translate(5 5)" }))));
}

function Padlock32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M6 28V13.01h20V28H6zm18-2V15.01H8V26h16z" }),
            React.createElement("path", { d: "M23.994 14.5V9.826C23.994 5.498 20.408 2 15.997 2S8 5.498 8 9.826V14.5h2V9.826C10 6.614 12.68 4 15.997 4c3.317 0 5.997 2.614 5.997 5.826V14.5h2z" }),
            React.createElement("path", { d: "M21 14.542v-4.64C21 7.19 18.756 5 16 5s-5 2.19-5 4.903v4.64h2v-4.64C13 8.305 14.338 7 16 7s3 1.305 3 2.903v4.64h2zM17.492 22l-.712-2.15a.992.992 0 00.49-.851c0-.552-.459-.999-1.024-.999-.566 0-1.024.447-1.024.999 0 .36.196.675.49.85L15 22h2.492zm-4.27-3.001c0-1.668 1.365-2.999 3.024-2.999s3.024 1.331 3.024 2.999c0 .43-.093.844-.262 1.22L20.26 24h-8.029l1.252-3.782a2.968 2.968 0 01-.261-1.22z" }))));
}

function Paper32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M6 3v26h20V10.584l-7.586-7.585H6zm2 2h9v6.998h7V27H8V5zm11 1.413l3.585 3.585H19V6.414z", fill: "currentColor", fillRule: "evenodd" })));
}

function PdfDoc32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { fillRule: "nonzero", d: "M7 27V5h11.586L22 8.414V12h2V7.586L19.414 3H5v26h19.002l-.009-5.002-2 .004.005 2.998z" }),
            React.createElement("path", { d: "M11.352 14.02v7.969h1.62V19.73h1.173c1.528 0 2.588-1.128 2.588-2.815 0-1.733-1.083-2.896-2.656-2.896h-2.725zm1.585 4.252v-2.77h1.208c.605 0 1.038.547 1.038 1.368 0 .844-.433 1.402-1.038 1.402h-1.208zm4.777-4.252V22h2.553c2.018 0 3.363-1.607 3.363-4.013 0-2.382-1.345-3.967-3.363-3.967h-2.553zm1.607 6.441v-4.902h.923c1.072 0 1.779.98 1.779 2.44 0 1.482-.707 2.462-1.779 2.462h-.923zm7.068-1.3h2.303v-1.493h-2.303v-2.155h2.588V14.02h-4.195V22h1.607v-2.839z" }))));
}

function Pencil32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M5 2.974v26h19v-10h-2v8H7v-22h15v-2z" }),
            React.createElement("path", { d: "M26.364 7.228L16 17.592v1.415h1.414L27.778 8.643l-1.414-1.415zm-8.121 13.779H14v-4.243L26.364 4.4l4.243 4.243-12.364 12.364z", fillRule: "nonzero" }),
            React.createElement("path", { d: "M24.414 7.6l2.829 2.828-1.415 1.414L23 9.014z" }))));
}

function Pension32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M23.5 2H20v2h3.5zM30 7a5 5 0 01-5-5h2a3 3 0 003 3v2zM30 12V8.5h-2V12zM23.364 10.09l2.475-2.476L24.425 6.2 21.95 8.675zM15 13.789l2-.002c0 .353.738 1.214 1.229 1.213l1.539.008c.1 0 .238-.149.238-.307v-1.117L12 8.5l-8 5.084v1.222c0 .141.052.194.17.194h1.58c.501-.001 1.244-.85 1.25-1.208l2 .015c0 .341.745 1.194 1.238 1.193h3.512c.49-.002 1.25-.874 1.25-1.211zM13.754 17H10.24c-.832.002-1.642-.449-2.244-1.074-.602.623-1.41 1.072-2.244 1.074h-1.58c-1.237.003-2.171-.96-2.173-2.192v-2.392l10-6.212 10.004 6.212v.583l.002 1.7c.001 1.23-.994 2.306-2.239 2.309L18.228 17c-.833.002-1.639-.451-2.237-1.08-.604.625-1.412 1.078-2.237 1.08z" }),
            React.createElement("path", { d: "M11 16v11h2V16z" }),
            React.createElement("path", { d: "M30 28c-1.375 0-2.4-.387-4.06-1.646-1.903-1.441-3.284-1.954-5.455-1.954-2.171 0-3.557.512-5.465 1.954C13.353 27.612 12.35 28 10.55 28H2v2h8.951c2.171 0 3.302-.512 5.21-1.953 1.668-1.26 2.523-1.647 4.324-1.647 1.8 0 2.652.387 4.312 1.645C26.7 29.487 27.83 30 30 30v-2z" }))));
}

function PensionCapital32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M16.004 3l-5.192 9h10.385l-5.193-9zm-5.769 10l-4.038 7h19.615l-4.038-7H10.235zM5.62 21l-4.04 7.003L30.428 28 26.389 21H5.62zm1.154 2h18.459l1.732 3-21.922.003L6.774 23z", fill: "currentColor", fillRule: "evenodd" })));
}

function PensionOccupational32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M16.004 3l-5.192 9h10.385l-5.193-9zm0 4.002L17.734 10h-3.459l1.729-2.998zM10.235 13l-4.038 7h19.615l-4.038-7H10.235zM5.62 21l-4.04 7.003L30.428 28 26.389 21H5.62zm1.154 2h18.459l1.732 3-21.922.003L6.774 23z", fill: "currentColor", fillRule: "evenodd" })));
}

function PensionPrivate32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M16.004 3l-5.192 9h10.385l-5.193-9zm-5.769 10l-4.038 7h19.615l-4.038-7H10.235zm1.155 2h9.228l1.731 3H9.66l1.73-3zm-5.77 6l-4.04 7.003L30.428 28 26.389 21H5.62zm1.154 2h18.459l1.732 3-21.922.003L6.774 23z", fill: "currentColor", fillRule: "evenodd" })));
}

function Percent32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M21.5 27a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0-2a2.5 2.5 0 110-5 2.5 2.5 0 010 5zM10.5 14a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0-2a2.5 2.5 0 110-5 2.5 2.5 0 010 5zM23.738 5.352l-17 20 1.524 1.296 17-20z" }))));
}

function Phone32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M15.22 9.848c.142.277-.01.742-.292.888l-2.497 1.292-.122.17c-.418.578-.876 2.027.731 5.226 1.651 3.29 3.167 3.671 3.741 3.682l.223.004 2.506-1.297a.634.634 0 01.855.276l2.057 4.096c.144.287-.004.748-.289.895l-2.377 1.228c-.494.255-1.834.363-3.732-.853-1.42-.909-3.094-2.916-5.055-6.822C8.15 13.02 8.34 9.673 8.74 8.45c.28-.867.716-1.505 1.193-1.752l2.376-1.229a.619.619 0 01.485-.04c.164.053.29.162.369.318l2.058 4.102zM9.124 5.134c-.898.463-1.63 1.448-2.06 2.77-.465 1.432-.78 5.323 2.333 11.52 2.139 4.262 4.073 6.487 5.678 7.513 2.04 1.309 4.093 1.658 5.49.934l2.376-1.227a2.44 2.44 0 001.18-1.41 2.448 2.448 0 00-.125-1.837l-2.06-4.1A2.376 2.376 0 0020.54 18.1a2.385 2.385 0 00-1.838.15l-2.017 1.043c-.312-.149-1.087-.697-2.072-2.66-1.012-2.013-.974-2.964-.912-3.28l2.037-1.053c1.103-.573 1.61-2.149 1.053-3.245l-2.057-4.099a2.371 2.371 0 00-1.397-1.202 2.369 2.369 0 00-1.837.151L9.124 5.134z", fill: "currentColor", fillRule: "evenodd" })));
}

function PhoneLandscape32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h32v32H0z" }),
            React.createElement("path", { d: "M28.152 19.91c0 4.231-2.19 6.534-6.235 6.713l.997.998-1.414 1.415-3.536-3.536 3.536-3.536 1.414 1.415-1.258 1.259c3.031-.057 4.424-1.493 4.493-4.49l.003-.239h2zM17.06 5.106a3 3 0 014.242 0l5.657 5.657a3 3 0 010 4.243l-12.02 12.02a3 3 0 01-4.243 0L5.04 21.371a3 3 0 010-4.243zm2.828 1.414a1 1 0 00-1.414 0L6.455 18.542a1 1 0 000 1.414l5.656 5.657a1 1 0 001.414 0l12.02-12.02a1 1 0 000-1.415zm-9.9 13.34a1.5 1.5 0 112.122 2.121 1.5 1.5 0 01-2.121-2.121zm.45-16.896l3.596 3.473-3.473 3.597-1.439-1.39 1.289-1.335c-3.092.084-4.486 1.544-4.502 4.57l.001.24-2 .034c-.073-4.225 2.07-6.565 6.1-6.82l-.962-.93 1.39-1.439z", fill: "currentColor", fillRule: "nonzero" }))));
}

function PensionState32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M16.004 3l-5.192 9h10.385l-5.193-9zm0 4.002L17.734 10h-3.459l1.729-2.998zM10.235 13l-4.038 7h19.615l-4.038-7H10.235zm1.155 2h9.228l1.731 3H9.66l1.73-3zm-5.77 6l-4.04 7.003L30.428 28 26.389 21H5.62z", fill: "currentColor", fillRule: "evenodd" })));
}

function Pin32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M8 12.796C8 8.496 11.579 5 15.978 5c4.398 0 7.976 3.497 7.976 7.796 0 2.015-.83 3.979-2.321 5.513l-5.655 5.54-5.639-5.524C8.831 16.774 8 14.81 8 12.795zm15.05 6.924c1.873-1.927 2.904-4.386 2.904-6.924C25.954 7.395 21.479 3 15.978 3 10.476 3 6 7.395 6 12.796c0 2.537 1.031 4.996 2.922 6.94L15.314 26H7v2h18v-2h-8.359l6.409-6.28z" }),
            React.createElement("path", { d: "M15.977 14.913c-1.27 0-2.264-.956-2.264-2.177 0-1.22.995-2.177 2.264-2.177 1.27 0 2.264.957 2.264 2.177h2c0-2.343-1.872-4.177-4.263-4.177-2.392 0-4.265 1.834-4.265 4.177 0 2.342 1.873 4.177 4.265 4.177v-2z" }))));
}

function Plus32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { fill: "currentColor", d: "M15 8v7H8v2h7v7h2v-7h7v-2h-7V8z", fillRule: "evenodd" })));
}

function Pregnant32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h32v32H0z" }),
            React.createElement("path", { d: "M21 25v5h-2v-5h2zM16 2a5.5 5.5 0 014.61 8.502c1.39.596 2.309 1.746 2.385 3.289L23 14v7a3.002 3.002 0 01-2.824 2.995L20 24h-5c-1.371 0-2.025-1.159-2-2.518.024-1.306.594-2.388 1.834-2.476L15 19l3-.001V15h2v6l-4.911-.001-.016.036c-.03.085-.054.203-.066.34L15 21.52c-.004.184.02.344.058.45l.013.03L20 22c.512 0 .935-.387.993-.884L21 21v-7c0-.964-.669-1.63-1.852-1.868l-.142-.025A5.474 5.474 0 0116 13c-.996 0-1.93-.265-2.735-.727a2.353 2.353 0 00-1.258 1.911L12 14.36v.966c.219-.031.44-.05.665-.059l.23-.004v2c-2.592 0-4.895 2.288-4.895 4.77 0 1.094.43 2.126 1.2 2.93.767.801 2.013 1.29 3.413 1.347l.282.006v2c-.302 0-.6-.016-.895-.046V30h-2v-2.199c-.869-.332-1.638-.82-2.245-1.454C6.635 25.176 6 23.65 6 22.033c0-2.597 1.675-4.979 4-6.098V14.36c0-1.381.649-2.64 1.69-3.445A5.5 5.5 0 0116 2zm0 2a3.5 3.5 0 100 7 3.5 3.5 0 000-7z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Print32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h32v32H0z" }),
            React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
                React.createElement("path", { d: "M4 20v-5.786C4 12.99 4.984 12 6.194 12h19.612c1.21 0 2.194.99 2.194 2.214V20h-5.824v2H30v-7.786C30 11.888 28.123 10 25.806 10H6.194C3.877 10 2 11.888 2 14.214V22h7.02v-2H4z" }),
                React.createElement("path", { d: "M8 2h15v10H8V2zm2 2v6h11V4H10zM8 16h16v14H8V16zm2 2v10h12V18H10z" }),
                React.createElement("path", { d: "M12 26h8.065v-2H12zM12 22h8.065v-2H12z" })))));
}

function RadioEnclosed32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M16 27C9.935 27 5 22.065 5 16S9.935 5 16 5s11 4.935 11 11-4.935 11-11 11m0-24C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3" }),
            React.createElement("path", { d: "M16.058 14.09c-1.157 0-1.967.836-1.967 1.91 0 1.074.926 1.909 1.967 1.909s1.851-.835 1.851-1.91c0-1.073-.694-1.908-1.851-1.908" }))));
}

function RadioRound32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M16 27C9.935 27 5 22.065 5 16S9.935 5 16 5s11 4.935 11 11-4.935 11-11 11m0-24C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3" }),
            React.createElement("path", { d: "M16 17.909a1.884 1.884 0 01-1.909-1.91c0-1.073.835-1.908 1.91-1.908 1.073 0 1.908.835 1.908 1.909A1.884 1.884 0 0116 17.909m0-7.818A5.915 5.915 0 0010.091 16a5.915 5.915 0 005.91 5.909 5.915 5.915 0 005.908-5.91A5.915 5.915 0 0016 10.092" }))));
}

function Rv32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h32v32H0z" }),
            React.createElement("path", { d: "M10 20a3 3 0 110 6 3 3 0 010-6zm13 0a3 3 0 110 6 3 3 0 010-6zm4.72-13l3.334 10-2.333 7H27v-2h.279l1.667-5.001L26.279 9H4.802l-1.555 6.999L6 16v2l-2.613-.001L4.72 22H6v2H3.28L.963 17.053 3.198 7H27.72zM10 22a1 1 0 100 2 1 1 0 000-2zm13 0a1 1 0 100 2 1 1 0 000-2zm-4 0v2h-5v-2h5zm0-11v10h-2v-8h-1v8h-2V11h5zm6.641 0l1.677 6H21v-6h4.641zm-1.518 2H23v2h1.682l-.559-2zM12 11v4h-2v-2H8v2H6v-4h6z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Save32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M13.11 5.005c.14-.426.378-.819.703-1.147a2.872 2.872 0 014.094 0c.326.329.564.723.705 1.151l2.063.012a4.934 4.934 0 00-1.347-2.57 4.872 4.872 0 00-6.936 0 4.934 4.934 0 00-1.342 2.544l2.06.01zM26.125 16.079c0 2.548-.92 4.953-2.549 6.825l.83 6.096h-5.54l-1.035-2.762a10.148 10.148 0 01-3.928 0L12.87 29h-5.54l.829-6.096a10.365 10.365 0 01-2.549-6.825c0-1.77.442-3.478 1.27-4.993L5.652 5.445l5.982 1.205a10.138 10.138 0 014.234-.923c1.479 0 2.915.318 4.234.923l5.982-1.205-1.229 5.64a10.38 10.38 0 011.27 4.994zm-4.658 6.153l.333-.348a8.366 8.366 0 002.325-5.805 8.376 8.376 0 00-1.188-4.317l-.203-.34.743-3.412-3.646.735-.307-.155a8.14 8.14 0 00-3.657-.863 8.14 8.14 0 00-3.657.863l-.307.155-3.646-.735L9 11.422l-.203.34a8.378 8.378 0 00-1.188 4.317c0 2.196.843 4.256 2.325 5.805l.333.348L9.62 27h1.863l1.186-3.165.892.262a8.173 8.173 0 004.614 0l.892-.262L20.252 27h1.863l-.648-4.768z" }),
            React.createElement("path", { d: "M17.98 18.546c0-1.19-.952-2.152-2.12-2.152-1.168 0-2.12.961-2.12 2.152 0 1.19.951 2.151 2.12 2.151s2.12-.961 2.12-2.151zm2 0c0 2.29-1.842 4.151-4.12 4.151s-4.12-1.86-4.12-4.151c0-2.29 1.842-4.152 4.12-4.152s4.12 1.861 4.12 4.152zM12.96 13.424c0-.102.078-.182.17-.182.092 0 .17.08.17.182h2c0-1.202-.97-2.182-2.17-2.182s-2.17.98-2.17 2.182h2zM18.42 13.424c0-.102.078-.182.17-.182.092 0 .17.08.17.182h2c0-1.202-.97-2.182-2.17-2.182s-2.17.98-2.17 2.182h2z" }))));
}

function Screen32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M6.438 22.02A1.44 1.44 0 015 20.584V8.438a1.44 1.44 0 011.437-1.439h19.125A1.44 1.44 0 0127 8.439v12.146a1.44 1.44 0 01-1.438 1.436H6.438zm0-17.02A3.442 3.442 0 003 8.438v12.146a3.441 3.441 0 003.438 3.436H15V26H9v2H23v-2h-6v-1.98h8.563A3.44 3.44 0 0029 20.584V8.438a3.44 3.44 0 00-3.438-3.439H6.438z", fill: "currentColor", fillRule: "evenodd" })));
}

function Shield32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M23.25 4H8.75c0 1.912-1.798 3.75-3.75 3.75v9.492C5 24.062 16 29 16 29s11-4.938 11-11.758V7.75c-1.837 0-3.75-1.876-3.75-3.75m-1.581 2A6.393 6.393 0 0025 9.331v7.911c0 4.115-5.89 7.958-9 9.539-3.111-1.582-9-5.425-9-9.539v-7.88A6.072 6.072 0 0010.362 6h11.307" }),
            React.createElement("path", { fillRule: "nonzero", d: "M11.5 12.414L12.914 11l7.657 7.657-1.414 1.414z" }),
            React.createElement("path", { fillRule: "nonzero", d: "M19.157 11l1.414 1.414-7.657 7.657-1.414-1.414z" }))));
}

function Smalltruck32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h32v32H0z" }),
            React.createElement("path", { d: "M23 5v14H4.219l.6 3h1.216a3.251 3.251 0 016.186 0h8.289a3.251 3.251 0 016.186 0H28v-2.817L25.306 12H24v-2h2.693L30 18.819V24h-3.304a3.25 3.25 0 01-6.186 0h-8.29a3.25 3.25 0 01-6.186 0H3.181l-1-5H2V5h21zm.603 16.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm-14.475 0a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM21 7H4v10h17V7zm-3 7v2h-2v-2h2zM8 14v2H6v-2h2zm5 0v2h-2v-2h2z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Search32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M26.07 27.485L21 22.415 22.414 21l5.071 5.07zM5.984 13.5c0 4.145 3.371 7.516 7.516 7.516 4.144 0 7.516-3.371 7.516-7.516S17.644 5.984 13.5 5.984c-4.145 0-7.516 3.371-7.516 7.516zM4 13.5C4 8.262 8.262 4 13.5 4S23 8.262 23 13.5c0 5.239-4.262 9.5-9.5 9.5S4 18.739 4 13.5z" }))));
}

function Snailmail32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h32v32H0z" }),
            React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
                React.createElement("path", { d: "M2 26h28v-2H2zM20 4h2V2h-4v11.343h2z" }),
                React.createElement("path", { d: "M19 6H8v2h11zM15 26v4h2v-4z" }),
                React.createElement("path", { d: "M13 25V11a5 5 0 10-10 0v11h2V11a3 3 0 116 0v14h2zM30 25V11a5 5 0 00-5-5h-3v2h3a3 3 0 013 3v14h2z" })))));
}

function Snowmobile32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h32v32H0z" }),
            React.createElement("path", { d: "M15.37 18.029c1.502 0 2.63 1.382 2.63 3 0 1.617-1.127 3-2.63 3H4.63c-1.502 0-2.63-1.383-2.63-3s1.128-3 2.63-3zm2.337-10.736l9.69 9.69-2.251 2.363-.186.17 2.029 2.03c.418-.298.92-.792 1.713-1.61l.606-.629 1.442 1.386-.475.491c-2.411 2.482-3 2.798-5.076 2.815L20 24v-2l4.614-.001-1.308-1.307a3.2 3.2 0 01-1.128.3l-.215.008H19L19 19h2.974a.99.99 0 00.438-.106c.31-.137.691-.394 1.128-.786l.19-.176.871-.915-3.603-3.602L18.414 16H7c-.343 0-.963.409-1.076.805l-.178.636-1.926-.535.18-.65c.358-1.252 1.688-2.173 2.844-2.25L7 14h10.584v-.001l-1-1L15 13v-2h2.414L19 12.585l.586-.585-3.292-3.293 1.414-1.414zM15.37 20.029H4.631c-.298 0-.631.407-.631 1 0 .592.333 1 .63 1h10.74c.298 0 .63-.408.63-1 0-.593-.332-1-.63-1z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Star32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M19.588 17.253a.997.997 0 00-.359 1.111l1.664 5.178-4.296-3.193a1 1 0 00-1.194 0l-4.294 3.192 1.664-5.177a1.001 1.001 0 00-.36-1.11l-4.359-3.21 5.361.013h.002a.999.999 0 00.953-.7L16 8.213l1.631 5.146a1 1 0 00.953.699h.002l5.36-.012-4.358 3.209zm8.362-4.529a1.001 1.001 0 00-.95-.687h-.002l-7.682.017-2.363-7.456a1 1 0 00-1.906 0l-2.36 7.456-7.685-.017H5a1.002 1.002 0 00-.593 1.806l6.242 4.595-2.399 7.46a1 1 0 001.55 1.108l6.2-4.608 6.202 4.608a1.001 1.001 0 001.55-1.108l-2.399-7.46 6.24-4.595a1 1 0 00.357-1.119z", fill: "currentColor", fillRule: "evenodd" })));
}

function Sustainability32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 28, height: 30, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M-2-1h32v32H-2z" }),
            React.createElement("path", { d: "M9.416 19.32l2.839 4.26 4.731-7.458-1.935-5.806 1.898-.632 1.42 4.26 2.963-4.672 1.689 1.071-2.466 3.887 3.17-.906.55 1.923-5.332 1.524-1.072 1.69c.696.36 1.489.539 2.392.539C22.888 19 26 16.442 26 13.455c0-2.43-.228-5.76-.685-9.987-5.41 2.411-8.893 4.12-10.404 5.099-2.156 1.396-2.617 4.752-.689 6.625l-1.393 1.434c-2.878-2.795-2.21-7.662.995-9.738 1.745-1.13 5.703-3.053 11.93-5.803l1.243-.549.154 1.35c.566 4.944.849 8.797.849 11.569C28 17.642 23.915 21 20.263 21c-1.286 0-2.447-.283-3.467-.846l-5.952 9.382-1.688-1.072 1.927-3.037-5.915-8.872 1.664-1.11 1.451 2.177c.91-.971 1.007-1.705.157-2.849-.892-1.2-2.993-2.111-6.307-2.64-.335 2.94-.032 5.017.838 6.224.483.67 1.202.831 2.416.429l.629 1.899c-1.982.656-3.624.288-4.667-1.16C.013 17.674-.31 14.785.286 10.852l.146-.967.97.124c4.376.56 7.26 1.71 8.643 3.572 1.706 2.296 1.172 3.984-.63 5.74z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Tag32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M14.914 25.664l-8.5-8.5L17.57 6h4.93L26 9.552v4.962l-11.086 11.15zm12.98-16.558a.996.996 0 00-.278-.66L23.75 4.31c-.184-.1-.439-.21-.705-.31H17.18a.938.938 0 00-.724.293L4.293 16.456a1 1 0 000 1.415l9.914 9.914a.996.996 0 001.414 0L27.7 15.622c.28-.195.385-.463.3-.74l-.107-5.776z" }),
            React.createElement("path", { d: "M20.036 13.098c-.367 0-.648-.128-.937-.461a.5.5 0 01-.1-.156l-.055-.131c-.032-.064-.032-.209-.032-.376a1.14 1.14 0 011.124-1.124 1.14 1.14 0 011.124 1.124 1.14 1.14 0 01-1.124 1.124m0-4.248a3.127 3.127 0 00-3.124 3.124c0 .316 0 .744.212 1.205.116.315.315.627.51.816a3.076 3.076 0 002.402 1.103 3.127 3.127 0 003.124-3.124 3.127 3.127 0 00-3.124-3.124" }))));
}

function Text1Round32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M16 27C9.935 27 5 22.065 5 16S9.935 5 16 5s11 4.935 11 11-4.935 11-11 11m0-24C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3" }),
            React.createElement("path", { d: "M16.979 10.5h-3.3v1.755h1.26v7.02H13.5V21h4.964v-1.725h-1.485z" }))));
}

function Text2Round32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M16 27C9.935 27 5 22.065 5 16S9.935 5 16 5s11 4.935 11 11-4.935 11-11 11m0-24C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3" }),
            React.createElement("path", { d: "M18.04 16.125c1.71-2.79.555-5.774-1.905-5.774-1.77 0-2.85 1.184-2.835 3.239h1.785c0-.869.33-1.319.96-1.319.585 0 .9.434.9 1.29 0 .614-.345 1.214-.645 1.724l-3.105 5.235V21h5.79v-1.95h-2.73l1.785-2.925z" }))));
}

function Text3Round32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M16 27C9.935 27 5 22.065 5 16S9.935 5 16 5s11 4.935 11 11-4.935 11-11 11m0-24C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3" }),
            React.createElement("path", { d: "M17.44 14.49l1.784-3.675V10.5H13.54v1.785h2.94l-1.485 3.345v.315c1.095-.24 2.46 0 2.49 1.68 0 .96-.48 1.59-1.185 1.59-.72 0-1.214-.51-1.245-1.29h-1.86c.046 1.935 1.29 3.225 3.136 3.225 1.904 0 3.165-1.41 3.165-3.54 0-1.455-.646-2.835-2.056-3.12" }))));
}

function ThumbsDown32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h32v32H0z" }),
            React.createElement("path", { d: "M9.847 28l.69-4.83 1.24-2.17H4v-6h.501L4.5 12h.501L5 9h.501L5.5 6h12.662L23 7.613V5h5v17h-5v-3h-1.381l-1.28 2.557-3.024 3.53L15.566 28H9.847zm15.154-8h1V7h-1v13zm-12.848 6h2.282l1.208-2.014.098-.137 2.92-3.405L20.382 17H23V9.721L17.837 8H7.501v.586L9.914 11H7.001v.586L9.421 14H6.5v.586L8.921 17H6v2h9.222l-2.76 4.833-.31 2.167z", fill: "currentColor", fillRule: "nonzero" }))));
}

function ThumbsUp32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h32v32H0z" }),
            React.createElement("path", { d: "M22.153 4l-.69 4.83-1.24 2.17H28v6h-.501l.001 3h-.501L27 23h-.501l.001 3H13.838L9 24.387V27H4V10h5v3h1.381l1.28-2.557 3.024-3.53L16.434 4h5.719zM6.999 12h-1v13h1V12zm12.848-6h-2.282l-1.208 2.014-.098.137-2.92 3.405L11.618 15H9v7.279L14.163 24h10.336v-.586L22.086 21h2.913v-.586L22.579 18h2.92v-.586L23.079 15H26v-2h-9.222l2.76-4.833.31-2.167z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Trailer32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h32v32H0z" }),
            React.createElement("path", { d: "M10 16a3 3 0 110 6 3 3 0 010-6zm0 2a1 1 0 100 2 1 1 0 000-2zm20-6v3h-2v-1h-5.001L23 20h-9v-2l6.999-.001V14H20v-.001H4.999v4L6 18v2H3l-.001-5H2v-3h28z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Trash32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M7 9l2 19h14l2-19H7zm2.222 2h13.556l-1.579 15H10.801L9.222 11zM13 3v3H7v2h10.01v.01l1-.01H25V6h-6.01l-.029-3h-5.96zm2 2h1.98l.01 1H15V5z" }))));
}

function Travel32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M13.463 27.146l-.617.17-8.192-.931-4.452-4.182 5.815-1.637 2.82 1.518 2.054-.6 14.976-4.376 5.131 1.103.167.572a3.094 3.094 0 01-2.102 3.837l-6.49 1.898-4.498 4.793-5.575 1.63.963-3.795zm.715-2.817l1.938.492-.816 3.217 1.69-.494 4.499-4.793.262-.077 6.752-1.974c.397-.116.679-.438.762-.816l-3.323-.714-14.49 4.233-2.84.83-2.83-1.523-1.63.459 1.387 1.304 7.148.812 1.342-.37.149-.586z" }),
            React.createElement("path", { d: "M13.457 19.735l5.108 1.237.47-1.944-5.627-1.363-5.63 1.646 3.685 3.251 1.324-1.5-.964-.85zM20 15.494a.5.5 0 10-1 .012.5.5 0 001-.012zm2-.023a2.5 2.5 0 11-5 .058 2.5 2.5 0 015-.058zM10 1C7.592 1 5.558 2.595 5.097 4.743 2.78 5.138 1 7.027 1 9.333 1 11.931 3.257 14 6 14h2v-2H6c-1.676 0-3-1.214-3-2.667 0-1.452 1.324-2.666 3-2.666h1v-1C7 4.214 8.325 3 10 3c1.676 0 3 1.214 3 2.667v1h1c1.675 0 3 1.214 3 2.666 0 .438-.119.86-.345 1.24l1.72 1.022A4.41 4.41 0 0019 9.333c0-2.306-1.779-4.195-4.097-4.59C14.443 2.595 12.409 1 10 1z" }),
            React.createElement("path", { d: "M14 12.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm2 0a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z" }))));
}

function Triangle32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M10 24.259l13.055-8.24L10 7.777v16.48zM8 4.15l18.802 11.868L8 27.886V4.15z", fill: "currentColor", fillRule: "nonzero" })));
}

function Truck32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 29, height: 25, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M-1-4h32v32H-1z" }),
            React.createElement("path", { d: "M23.504 10.64h3.306l.055 5.97A4.24 4.24 0 1120.5 20.2h-5.4v-1a6.56 6.56 0 00-12.874-1.787L.3 16.87a8.546 8.546 0 012.919-4.377V.118h12.857l3.317 10.522h2.111V5.173c0-.091-.015-.202-.042-.307A1.16 1.16 0 0020.339 4V2a3.16 3.16 0 013.058 2.363c.069.263.107.542.107.81v5.467zM10.54 2.118V9h-2V2.118H5.219v9.191A8.561 8.561 0 0117.041 18.2h4.002a4.239 4.239 0 013.817-2.158l-.032-3.402h-6.901L14.61 2.118h-4.07zM8.539 24.52a5.32 5.32 0 110-10.64 5.32 5.32 0 010 10.64zm0-2a3.32 3.32 0 100-6.64 3.32 3.32 0 000 6.64zm16.2 0a2.24 2.24 0 100-4.48 2.24 2.24 0 000 4.48z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Twitter32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M4 4v24h24V4H4zM2 2h28v28H2V2z" }),
            React.createElement("path", { d: "M13.42 22.8c5.944 0 9.194-4.924 9.194-9.194 0-.09-.001-.178-.004-.267a.288.288 0 01.113-.238 6.555 6.555 0 001.279-1.283c.064-.085-.023-.202-.123-.164-.45.17-.924.29-1.416.357-.023.003-.035-.029-.015-.041a3.251 3.251 0 001.201-1.39.131.131 0 00-.18-.169 6.49 6.49 0 01-1.586.578.285.285 0 01-.258-.075 3.232 3.232 0 00-5.442 2.853.16.16 0 01-.169.188 9.17 9.17 0 01-6.262-3.139.198.198 0 00-.328.044 3.227 3.227 0 001.054 3.986c.024.018.011.057-.02.055a3.204 3.204 0 01-1.167-.301.131.131 0 00-.185.128 3.235 3.235 0 002.472 2.958c.028.006.027.047-.001.053a3.235 3.235 0 01-1.168.056.108.108 0 00-.116.144 3.237 3.237 0 002.678 2.054c.095.01.13.132.051.188a6.483 6.483 0 01-3.784 1.213H9.17c-.177 0-.237.237-.08.32A9.137 9.137 0 0013.42 22.8" }))));
}

function Umbrella32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M17 6h-2c-4.57 0-8.865 3.854-9.809 8.236 1.329-1.007 3.017-1.509 4.878-1.509 2.311 0 4.47 1.062 5.938 2.796 1.492-1.7 3.788-2.796 5.993-2.796 1.879 0 3.511.473 4.789 1.434C25.803 9.824 21.506 6 17 6zm12 11.527h-2c-.957-1.995-2.76-2.8-5-2.8-1.886 0-3.968 1.146-5 2.8h-2c-1.032-1.654-2.867-2.8-4.93-2.8-2.064 0-4.042.778-5.07 2.8H3V16C3 10 8.562 4 15 4h2c6.375 0 12 6 12 12v1.527zM14.791 27.079c-.306.503-.751.885-1.783.885s-1.935-.891-1.935-2.037H9.14c0 2.164 1.676 3.946 3.869 3.946C14.942 29.873 17 28.48 17 26c0-2.48-2 0-2 0s.097.575-.209 1.079z" }),
            React.createElement("path", { d: "M15 16v10h2V16zM17 5V2h-2v3z" }))));
}

function User32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M23.963 14.62c.346 1.043.537 2.203.537 3.38 0 5.81-4.705 10.5-10.5 10.5-5.775 0-10.5-4.725-10.5-10.5C3.5 12.19 8.205 7.5 14 7.5c3.094 0 5.981 1.35 7.993 3.672l1.511-1.31C21.117 7.107 17.681 5.5 14 5.5 7.102 5.5 1.5 11.083 1.5 18c0 6.88 5.62 12.5 12.5 12.5 6.898 0 12.5-5.583 12.5-12.5 0-1.394-.226-2.767-.657-4.058l-.31-.804-.249-.638h-8.588c-2.34 0-3.91-.545-4.89-1.42-.538-.479-.777-.927-.834-1.162l-1.944.47c.146.603.577 1.41 1.447 2.185 1.364 1.217 3.41 1.927 6.221 1.927h7.22l.047.12z" }),
            React.createElement("path", { d: "M10.088 17.826c0-.181.135-.326.236-.326.1 0 .235.145.235.326h2c0-1.256-.998-2.326-2.235-2.326-1.238 0-2.236 1.07-2.236 2.326h2zM17.5 17.826c0-.181.135-.326.235-.326.1 0 .236.145.236.326h2c0-1.256-.998-2.326-2.236-2.326-1.237 0-2.235 1.07-2.235 2.326h2zM17.452 21.61a4.91 4.91 0 01-3.423 1.376 4.91 4.91 0 01-3.423-1.376l-1.389 1.438a6.91 6.91 0 004.812 1.938 6.91 6.91 0 004.813-1.938l-1.39-1.438zM20.212 5.15l.775-3.331-1.949-.453-.774 3.332zM24.355 7.426l2.132-2.698-1.569-1.24-2.132 2.698zM26.63 11.283l3.09-1.549-.897-1.788-3.09 1.55z" }))));
}

function UserHappy32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M27 16c0 6.075-4.925 11-11 11S5 22.075 5 16 9.925 5 16 5a10.97 10.97 0 018.341 3.829l1.516-1.305A12.97 12.97 0 0016 3C8.82 3 3 8.82 3 16s5.82 13 13 13 13-5.82 13-13c0-1.461-.242-2.891-.71-4.246l-.188-.496-.244-.645h-9.089c-2.43 0-4.1-.638-5.194-1.678-.367-.35-.64-.72-.833-1.086a2.348 2.348 0 01-.176-.401l-1.933.515c.174.653.646 1.547 1.564 2.42 1.473 1.403 3.64 2.23 6.572 2.23h7.7C26.818 13.68 27 14.827 27 16z" }),
            React.createElement("path", { d: "M20.293 20.293A6.048 6.048 0 0116 22.068a6.048 6.048 0 01-4.293-1.775l-1.414 1.414A8.048 8.048 0 0016 24.068c2.127 0 4.176-.83 5.707-2.36l-1.414-1.415zM14.392 16.263h-2A.28.28 0 0012.13 16a.28.28 0 00-.263.263h-2c0-1.227 1.036-2.263 2.263-2.263 1.226 0 2.263 1.036 2.263 2.263M21.725 16.263h-2a.28.28 0 00-.263-.263.28.28 0 00-.263.263h-2c0-1.227 1.036-2.263 2.263-2.263 1.226 0 2.263 1.036 2.263 2.263" }))));
}

function WalletMinus32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M11 28c-3.86 0-7-3.092-7-6.893 0-3.801 3.14-6.893 7-6.893 3.823 0 6.936 3.035 6.995 6.786h-.009v.373C17.843 25.05 14.769 28 11 28zm18-17.005V6H10v2h17v2.995h-2.941v2H28V16h-3.941v2h2.983v3h-7.047c-.059-4.854-4.069-8.786-8.995-8.786-1.057 0-2.067.19-3.01.522V6.092c0-1.142.947-2.071 2.114-2.071L27.001 4l-.002-2-16.896.021c-2.268 0-4.113 1.826-4.113 4.071v7.632C3.585 15.322 2 18.035 2 21.107 2 26.011 6.038 30 11 30c4.305 0 7.909-3.003 8.79-7h9.252v-5H30v-7.005h-1z" }),
            React.createElement("path", { d: "M7 20v2h8v-2z" }))));
}

function Wallet32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M29 14h-1V9H8.067v2H26v3h-3v2h4v3h-4v2h3v3H7.898C6.852 24 6 23.177 6 22.165V8.835C6 7.823 6.852 7 7.898 7H26V5H7.898C5.749 5 4 6.721 4 8.835v13.33C4 24.279 5.749 26 7.898 26H28v-5h1v-7z", fill: "currentColor", fillRule: "evenodd" })));
}

function WalletPlus32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M11 28c-3.86 0-7-3.092-7-6.893 0-3.801 3.14-6.893 7-6.893 3.823 0 6.936 3.035 6.995 6.786h-.009v.373C17.843 25.05 14.769 28 11 28zm18-17.005V6H10v2h17v2.995h-2.941v2H28V16h-3.941v2h2.983v3h-7.047c-.059-4.854-4.069-8.786-8.995-8.786-1.057 0-2.067.19-3.01.522V6.092c0-1.142.947-2.071 2.114-2.071L27.001 4l-.002-2-16.896.021c-2.268 0-4.113 1.826-4.113 4.071v7.632C3.585 15.322 2 18.035 2 21.107 2 26.011 6.038 30 11 30c4.305 0 7.909-3.003 8.79-7h9.252v-5H30v-7.005h-1z" }),
            React.createElement("path", { d: "M12 17h-2v3H7v2h3v3h2v-3h3v-2h-3z" }))));
}

function World32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M16 3C8.82 3 3 8.82 3 16s5.82 13 13 13 13-5.82 13-13S23.18 3 16 3m0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16 9.935 5 16 5" }),
            React.createElement("path", { d: "M16.937 24.304c-.105 0-.212-.01-.32-.026-.84-.138-1.876-.84-2.03-3.4-.15-2.478-1.146-2.912-2.297-3.413-.98-.427-2.321-1.011-2.28-2.958.02-.866.299-1.56.83-2.061 1.03-.973 2.675-.913 4.269-.855 2.444.086 3.29-.052 3.463-1.055.059-.343.03-.584-.087-.713-.478-.532-2.357-.41-3.368-.342-1.234.08-1.979.13-2.47-.391a1.152 1.152 0 01-.305-.937c.114-.903.921-1.514 1.857-2.221.659-.497 1.403-1.061 1.716-1.62a1 1 0 011.745.978c-.497.887-1.368 1.565-2.157 2.162 1.56-.087 3.455-.092 4.468 1.033.377.419.782 1.173.57 2.39-.5 2.896-3.392 2.789-5.505 2.714-1.066-.037-2.402-.086-2.825.312-.046.044-.19.18-.2.649-.011.55.089.65 1.077 1.08 1.303.569 3.27 1.426 3.495 5.127.08 1.298.397 1.56.4 1.563.174-.023.994-.658 1.587-2.12.059-.145.129-.305.204-.48.417-.961.987-2.278.987-3.928 0-1.025.93-1.981 2.369-2.435 1.864-.588 4.512-.292 6.335 2.313a1 1 0 11-1.637 1.147c-1.163-1.661-2.64-1.77-3.418-1.693-.988.103-1.587.576-1.662.745.012 1.988-.68 3.588-1.14 4.647-.067.159-.131.305-.186.438-.698 1.718-2.02 3.35-3.486 3.35M7.027 24.211a1 1 0 01-.528-1.85c.41-.254.666-.562.76-.915.33-1.217-1.25-2.839-3.52-3.614a1 1 0 11.645-1.892c3.414 1.166 5.436 3.701 4.806 6.028-.227.846-.794 1.57-1.637 2.093-.164.101-.346.15-.526.15" }))));
}

function Youtube32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M4 4v24h24V4H4zM2 2h28v28H2V2z", fillRule: "nonzero" }),
            React.createElement("path", { d: "M14.214 18.238v-4.861l4.674 2.439-4.674 2.422zm10.263-5.703s-.17-1.192-.688-1.717c-.657-.69-1.395-.692-1.733-.733-2.421-.175-6.052-.175-6.052-.175h-.008s-3.63 0-6.052.175c-.338.04-1.075.044-1.733.733-.519.525-.688 1.717-.688 1.717s-.173 1.4-.173 2.8v1.312c0 1.4.173 2.8.173 2.8s.17 1.192.688 1.718c.658.688 1.522.667 1.907.739 1.384.132 5.882.174 5.882.174s3.635-.006 6.056-.181c.338-.04 1.076-.044 1.733-.732.519-.526.688-1.718.688-1.718s.173-1.4.173-2.8v-1.312c0-1.4-.173-2.8-.173-2.8z" }))));
}

function Apartment40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M36 2v34h2v2H13v-2h3V26h8v10h10V4H6v32h4v2H2v-2h2V2h32zM22 28h-4v8h4v-8zm10-2v6h-6v-6h6zm-18 0v6H8v-6h6zm16 2h-2v2h2v-2zm-18 0h-2v2h2v-2zm20-12v6h-6v-6h6zm-9 0v6h-6v-6h6zm-9 0v6H8v-6h6zm16 2h-2v2h2v-2zm-9 0h-2v2h2v-2zm-9 0h-2v2h2v-2zM32 6v6h-6V6h6zm-9 0v6h-6V6h6zm-9 0v6H8V6h6zm16 2h-2v2h2V8zm-9 0h-2v2h2V8zm-9 0h-2v2h2V8z", fill: "currentColor", fillRule: "nonzero" }))));
}

function ArrowsApart40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M15 4.755V11h6v2h-8V9.244L5.494 16 13 22.755V19h12v-6.245L37.495 24 25 35.245V29h-6v-2h8v3.754l7.505-6.755L27 17.245V21H15v6.245L2.505 16z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Atv40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M21.331 6.835L26.47 13h4.066l2.157 3.232a9.425 9.425 0 013.072.807l.33.157-.897 1.788a7.444 7.444 0 00-3.347-.789c-1.53 0-2.951.46-4.136 1.247l1.22 1.4a6 6 0 11-1.525 1.295l-1.2-1.375a7.449 7.449 0 00-1.835 4.67l-.004.243h-2c0-.572.05-1.132.148-1.675h-5.932l-2.524-2.524-1.12 1.122c.628.909 1.01 2 1.054 3.177L14 26a6 6 0 11-2.451-4.838l1.099-1.1-2.355-2.355 1.414-1.414 5.707 5.706h5.695a9.493 9.493 0 017.232-5.684L29.464 15h-3.932l-1.538-1.846-7.308 4.177L14.464 14H4v2h5v2H2v-6h13.535l1.779 2.668 5.379-3.074-2.025-2.43-2.352.785-.632-1.898 3.647-1.216zM8 22a4 4 0 103.492 2.049l-2.535 2.533-1.414-1.414 2.566-2.567A3.981 3.981 0 008 22zm24 0c-.615 0-1.197.139-1.717.386l2.47 2.831-1.506 1.316-2.499-2.863A4 4 0 1032 22z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Baby40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M24.74 2.365l.174.045.157.049a4.013 4.013 0 012.6 4.706l-.052.2a4.013 4.013 0 01-4.484 2.853l-.008.03a12.684 12.684 0 00-3.303-.436c-6.996 0-12.668 5.672-12.668 12.668 0 6.996 5.672 12.668 12.668 12.668 6.996 0 12.667-5.672 12.667-12.668 0-4.01-1.875-7.703-4.995-10.08l-.287-.213 1.167-1.624A14.647 14.647 0 0134.49 22.48c0 8.1-6.567 14.668-14.667 14.668S5.156 30.58 5.156 22.48 11.723 7.812 19.824 7.812c1.14 0 2.265.131 3.357.387l.02.004.004-.014a2.013 2.013 0 001.258-3.824l-.107-.035-.09-.019c-.37-.056-.735.107-.846.302l-.026.059c-.127.443.059.722.814.595l.148-.029.423 1.955c-2.47.535-3.833-1.244-3.307-3.075.378-1.31 1.875-2.049 3.268-1.753zm-3.76 26.5l1.413 1.415a6.262 6.262 0 01-4.438 1.836 6.258 6.258 0 01-4.224-1.632l-.215-.204 1.415-1.414a4.258 4.258 0 003.024 1.25 4.262 4.262 0 002.846-1.082l.178-.169zm-4.353-6.69l.013.172-1.998.093a.916.916 0 00-1.829-.021v.107l-1.999.093a2.916 2.916 0 015.813-.443zm8.215-.306l.013.17-1.998.093a.916.916 0 00-1.828-.021l-.002.107-1.997.094a2.915 2.915 0 015.812-.443z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Bankid40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
                React.createElement("path", { d: "M13.367 21.094l1.447-9.685h-1.546c-.723 0-1.655-.43-1.93-1.222-.087-.268-.295-1.187.9-2.084.427-.314.701-.663.756-.931.055-.28-.01-.524-.197-.71-.263-.268-.779-.42-1.436-.42-1.107 0-1.886.676-1.962 1.165-.055.36.208.652.438.838.69.547.855 1.339.428 2.084-.439.768-1.392 1.269-2.412 1.28H6.275c-.132.943-2.28 15.4-2.444 16.542h8.56c.077-.513.471-3.248 1.009-6.857h-.033zM25.17 3h-9.138l-1.218 7.81h1.551c.851 0 1.656-.394 2-.963a.938.938 0 00.161-.5c0-.324-.218-.568-.436-.73-.598-.453-.725-.929-.725-1.265 0-.07 0-.128.012-.186.126-.824 1.23-1.717 2.69-1.717.873 0 1.54.209 1.942.591.357.337.495.813.391 1.312-.126.592-.713 1.08-1.046 1.323-.885.626-.77 1.172-.713 1.334.184.488.886.801 1.426.801h2.356v.012c3.219.023 4.943 1.52 4.403 5.001-.506 3.238-2.966 4.63-5.897 4.654l-1.161 7.474h1.713c7.23 0 13.138-4.689 14.3-12.093C39.216 6.668 33.446 3 25.17 3z" }),
                React.createElement("path", { d: "M25.17 3h-9.138l-1.218 7.81h1.551c.851 0 1.656-.394 2-.963a.938.938 0 00.161-.5c0-.324-.218-.568-.436-.73-.598-.453-.725-.929-.725-1.265 0-.07 0-.128.012-.186.126-.824 1.23-1.717 2.69-1.717.873 0 1.54.209 1.942.591.357.337.495.813.391 1.312-.126.592-.713 1.08-1.046 1.323-.885.626-.77 1.172-.713 1.334.184.488.886.801 1.426.801h2.356v.012c3.219.023 4.943 1.52 4.403 5.001-.506 3.238-2.966 4.63-5.897 4.654l-1.161 7.474h1.713c7.23 0 13.138-4.689 14.3-12.093C39.216 6.668 33.446 3 25.17 3zM2.99 30.409h3.627c1.546 0 1.922.825 1.808 1.578-.091.61-.49 1.064-1.171 1.362.864.347 1.205.885 1.08 1.734-.16 1.064-1.035 1.853-2.183 1.853H2.023l.966-6.527zm2.399 2.701c.705 0 1.034-.394 1.103-.86.068-.502-.148-.85-.853-.85h-.626l-.25 1.71h.626zm-.387 2.821c.728 0 1.149-.31 1.25-.944.08-.55-.215-.873-.92-.873h-.717l-.273 1.83h.66v-.013zM13.417 36.983c-.944.072-1.399-.036-1.626-.466-.5.323-1.058.49-1.65.49-1.068 0-1.443-.586-1.34-1.231.045-.31.215-.61.488-.86.591-.539 2.047-.61 2.615-1.017.046-.454-.125-.621-.66-.621-.625 0-1.148.215-2.046.86l.216-1.482c.773-.586 1.524-.86 2.388-.86 1.103 0 2.081.478 1.9 1.745l-.217 1.434c-.08.502-.057.658.478.67l-.546 1.338zm-1.638-2.247c-.5.335-1.432.275-1.535.968-.045.323.148.562.455.562.296 0 .66-.131.955-.347-.022-.12-.011-.239.023-.466l.102-.717zM15.18 31.88h1.887l-.102.657c.602-.538 1.057-.742 1.649-.742 1.057 0 1.546.682 1.375 1.793l-.489 3.336h-1.887l.41-2.762c.079-.502-.069-.74-.433-.74-.296 0-.568.166-.83.537l-.432 2.953H14.44l.74-5.033zM21.456 30.409h1.888l-.478 3.203 1.808-1.733h2.332l-2.32 2.152 1.865 2.893h-2.377l-1.433-2.331h-.022l-.342 2.33H20.49z" }),
                React.createElement("g", null,
                    React.createElement("path", { d: "M28.582 30.41h2.049l-.901 6.632h-2.05zM31.629 30.41h2.929c2.263 0 2.918 1.861 2.703 3.407-.204 1.51-1.255 3.225-3.24 3.225h-3.304l.912-6.633zm1.899 5.05c.997 0 1.545-.56 1.705-1.74.118-.877-.118-1.74-1.223-1.74h-.547l-.472 3.48h.537z" }))))));
}

function Bank40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M33 18v15h5v5H2v-5h5V18H5v-3.874H2V9h6.418L20 2.869 31.582 9H38v5.126h-3V18h-2zm3 17H4v1h32v-1zm-9-17h-4v15h4V18zm-10 0h-4v15h4V18zm-6 0H9v15h2V18zm10 0h-2v15h2V18zm10 0h-2v15h2V18zM20 5.131L8.915 11H4v1.126h6.696l9.325-4.693 8.523 4.693H36V11h-4.915L20 5.131zm13 8.995h-4.97l-8.05-4.433-8.81 4.433H7V16h26v-1.874z", fill: "currentColor", fillRule: "nonzero" }))));
}

function BillsCoins40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
                React.createElement("path", { d: "M33.006 4.898l1.213 6.456 1.965-.37-1.59-8.466-18.286 3.859.413 1.957zM20 22.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-9 0a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0zM24 33.5a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0zm-7 0a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z" }),
                React.createElement("path", { d: "M4.946 20.05L7.867 6.424 35.24 12.18 32.32 25.805 18.87 22.977l-.412 1.957 15.398 3.238 3.76-17.536L6.329 4.058 2.57 21.593l6.979 1.468.411-1.958z" })))));
}

function Bird40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M34.795 10.049l.285.022.29.029 1.626.197-3.353 4.947.01 1.428-.009.695c-.033 1.433-.17 2.434-.524 3.597-.645 2.115-1.93 3.883-4.022 5.262a8.344 8.344 0 01-.31.195l-.352 5.791-1.996-.12.29-4.767c-.71.217-1.458.364-2.23.448l.726 4.722-1.977.304-.761-4.947c-2.843-.067-5.86-.848-8.498-2.013-2.955 2.126-6.64 3.896-11.068 5.324l-.626.198-.592-1.91c5.815-1.805 10.276-4.18 13.44-7.13l.674-.648.374-.371.283-.292.367-.4.287-.328.426-.509.652-.807 1.048-1.32c.167-.212.326-.41.478-.598l.442-.534a20.53 20.53 0 011.676-1.778c.246-.231.499-.457.762-.68l.402-.33 1.25 1.562a17.182 17.182 0 00-1.625 1.477l-.375.399c-.126.137-.252.28-.381.43l-.4.472-.43.53-1.716 2.156-.585.71-.404.465-.287.315-.32.337-.345.346-.529.515c-.342.333-.699.66-1.07.98l.05.019c4.168 1.585 9.173 2.08 12.15.117 1.694-1.117 2.697-2.497 3.209-4.175.34-1.117.442-2.097.445-3.754l-.009-1.258.003-.451.004-.298 1.777-2.622h-.226c-.993.005-2.02.089-3.017.279l-.494.104c-.262.06-.515.127-.76.201l-.221.071.041.15.092.362c.207.845.35 1.685.4 2.483a7.865 7.865 0 01-.043 1.56c-.274 2.293-1.74 3.937-3.967 5.012-1.28.619-2.655.985-3.917 1.172l-.417.055-.237-1.985c1.172-.14 2.51-.468 3.701-1.043 1.668-.805 2.67-1.928 2.854-3.467.048-.345.057-.742.03-1.179a12.438 12.438 0 00-.346-2.134c-.054-.22-.11-.43-.167-.628l-.115-.381-.08-.243-.31-.873.848-.375c.669-.297 1.393-.53 2.166-.708 1.86-.427 3.805-.504 5.553-.382z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Bike40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
                React.createElement("path", { d: "M9 17a8 8 0 105.467 2.16L13.1 20.62A6 6 0 119 19v-2zM23.07 27.865C24.283 30.937 27.327 33 30.763 33 35.305 33 39 29.426 39 25s-3.695-8-8.237-8c-.308 0-.613.016-.916.049l.214 1.988c.232-.024.466-.037.702-.037C34.215 19 37 21.694 37 25s-2.785 6-6.237 6c-2.616 0-4.922-1.563-5.833-3.87l-1.86.735z" }),
                React.createElement("path", { d: "M24.024 14l5.312 10h-7.319l-7.149-12.497-1.736.994L20.858 26H32.664l-7.438-14H18.25v2z" }),
                React.createElement("path", { d: "M16.263 8H20V6h-5.136L8.06 24.657l1.878.686zM23.606 10.5h5.227a1 1 0 100-2h-5.227a1 1 0 100 2zM22.97 25.243l3-12-1.94-.486-3 12z" })))));
}

function Boat40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("g", { fill: "currentColor" },
                React.createElement("path", { d: "M1.681 33.922l2.107.708a6 6 0 004.156-.123l3.003-1.211a4 4 0 012.77-.082l4.372 1.469a6 6 0 003.822 0l4.371-1.47a4 4 0 012.77.083l3.004 1.21a6 6 0 004.156.124l2.107-.708-.638-1.896-2.106.708a4 4 0 01-2.77-.082L29.8 31.441a6 6 0 00-4.156-.123l-4.37 1.469a4 4 0 01-2.55 0l-4.37-1.47a6 6 0 00-4.156.124l-3.003 1.211a4 4 0 01-2.77.082l-2.107-.708-.638 1.896zM20 17.005l13.075 1.26-4.756 11.348 1.845.774 4.756-11.349a2 2 0 00-1.653-2.764l-13.17-1.27h-.193l-13.17 1.27a2 2 0 00-1.653 2.764l4.756 11.349 1.844-.774-4.756-11.348L20 17.005z", fillRule: "nonzero" }),
                React.createElement("path", { fillRule: "nonzero", d: "M19 19v10h2V19zM10.942 15.336l2.026-5.672A1 1 0 0113.909 9h12.182a1 1 0 01.941.664l2.026 5.672 1.884-.672-2.026-5.673A3 3 0 0026.09 7H13.909a3 3 0 00-2.825 1.991l-2.026 5.673 1.884.672z" }),
                React.createElement("path", { d: "M19 4h2a1 1 0 011 1v2h-4V5a1 1 0 011-1z" })))));
}

function BlockCard40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M21 30l.002-2H5.863c-.99 0-1.855-.813-1.855-1.685v-15.63C4.008 9.813 4.873 9 5.863 9h25.32c1.05 0 1.881.79 1.822 1.613l-.003 7.372h2v-7.3C35.147 8.715 33.34 7 31.182 7H5.864c-2.068 0-3.855 1.68-3.855 3.685v15.63C2.008 28.32 3.795 30 5.863 30h15.139v-2L21 30z" }),
            React.createElement("path", { d: "M33.731 13H3.281v2h30.45zM7 20h12v-2H7zM7 23h6v-2H7zM30.5 32a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm0 2a7.5 7.5 0 110-15 7.5 7.5 0 010 15z" }),
            React.createElement("path", { d: "M25.086 22.5l9.765 9.765 1.414-1.414-9.765-9.765z" }))));
}

function BriefcaseFirstAid40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M34.183 32c1.111 0 1.884-.753 1.819-1.688l.003-18.696c.06-.826-.773-1.616-1.822-1.616H5.863c-.99 0-1.855.814-1.855 1.688v18.624c0 .874.865 1.688 1.855 1.688h28.32zM2.008 30.312V11.688C2.008 9.682 3.794 8 5.863 8h28.32c2.157 0 3.964 1.716 3.819 3.688l-.003 18.552c.15 2.07-1.587 3.76-3.816 3.76H5.863c-2.069 0-3.855-1.682-3.855-3.688z" }),
            React.createElement("path", { d: "M7 9.5v24h2v-24zM31 9.5v24h2v-24zM15.008 9.312V6.688c0-.874.865-1.688 1.855-1.688h6.32c1.049 0 1.881.79 1.822 1.616l-.003 2.696h2V6.688C27.147 4.716 25.34 3 23.182 3h-6.319c-2.069 0-3.855 1.682-3.855 3.688v2.624h2zM25 20v2h-4v2h6v-6h-6v2zM15 22v-2h4v-2h-6v6h6v-2z" }),
            React.createElement("path", { d: "M21 16v4h2v-6h-6v6h2v-4zM21 26h-2v-4h-2v6h6v-6h-2z" }))));
}

function Briefcase40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M28 5v5h7.5a2.5 2.5 0 012.5 2.5v20a2.5 2.5 0 01-2.5 2.5h-31A2.5 2.5 0 012 32.5v-20A2.5 2.5 0 014.5 10H12V5h16zm8 10.134L31.362 19H8.638L4 15.135V32.5a.5.5 0 00.5.5h31a.5.5 0 00.5-.5V15.134zM30 21v10h-2V21h2zm-18 0v10h-2V21h2zm7-2v2h2v-2h2v4h-6v-4h2zm16.5-7h-31a.5.5 0 00-.5.5v.031L9.362 17h21.276L36 12.53v-.03a.5.5 0 00-.5-.5zM26 7H14v3h12V7z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Car40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M20 5c6.02 0 9.086.873 10.78 2.642l.634.65c.295.312.56.62.833.971.565.73 1.118 1.607 1.686 2.706l.176.348 3.197.85c.938.196 1.615 1.003 1.688 1.954l.006.169v1.377c0 1.187-.938 2.166-2.118 2.166l.1-.004.07.289c.377 1.615.625 3.636.694 5.452l.015.539.004.443v3.781c0 .775-.4 1.46-1.004 1.844l-.114.066v1.59c0 1.136-.858 2.081-1.965 2.162l-.153.005h-3.47c-1.18 0-2.118-.98-2.117-2.199l.025-.801H10.968l-.033.994c-.076 1.063-.905 1.924-1.96 2L8.825 35H5.47c-1.18 0-2.118-.98-2.118-2.167l-.001-1.59-.113-.066a2.177 2.177 0 01-.998-1.69l-.006-.154v-3.781c0-2.038.267-4.52.712-6.434l.07-.289-.052-.001c-1.056-.077-1.886-.942-1.96-2.008L1 16.667V15.29c0-1.023.701-1.916 1.642-2.11l3.248-.863.177-.348c.505-.977.998-1.778 1.498-2.457l.188-.249c.272-.352.538-.659.833-.97l.76-.78C11.065 5.832 14.126 5 20 5zm0 2l-.41.001c-5.246.036-7.718.763-8.927 2.024-1.537 1.605-1.978 2.142-2.896 4.004l-.476.986-4.188 1.11c-.052.01-.103.075-.103.165v1.377c0 .101.063.166.118.166h2.604l-.56 1.751c-.559 1.753-.927 4.684-.927 6.968V26H13v2H4.235v1.333c0 .081.04.14.085.16l.033.007h1v3.333c0 .102.062.167.118.167h3.353c.055 0 .117-.065.118-.199L9.032 30h22l-.09 2.833c0 .102.062.167.117.167h3.47c.056 0 .118-.065.118-.167V29.5h1c.055 0 .118-.065.118-.167L35.764 28H27v-2h8.764v-.448c0-2.15-.325-4.873-.83-6.647l-.097-.32-.559-1.752h2.604c.055 0 .118-.065.118-.166V15.29c0-.09-.05-.155-.155-.178l-4.136-1.097-.341-.711c-.875-1.804-1.298-2.43-2.435-3.65l-.596-.629C28.097 7.731 25.528 7 20 7zm5 19v2H15v-2h10zm5-8a3 3 0 110 6 3 3 0 010-6zm-20 0a3 3 0 110 6 3 3 0 010-6zm20 2a1 1 0 100 2 1 1 0 000-2zm-20 0a1 1 0 100 2 1 1 0 000-2zm18.622-9.49L31.71 16H12v-2h16.29l-1.412-2.51 1.744-.98z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Caravan40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M19 24a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4zM32.72 9l4.334 13-1.667 5H38v2H24v-2h9.279l1.667-5-3.667-11H5.973l-1.78 10H6v2H4.387l1.333 4H14v2H4.28l-2.31-6.925L4.299 9H32.72zM14 13v13h-2V15H9v11H7V13h7zm9 7v2h-6v-2h6zm5-7v6H17v-6h11zm-2 2h-7v2h7v-2z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Card40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M34.183 30c1.111 0 1.884-.753 1.819-1.688l.003-16.696c.06-.826-.773-1.616-1.822-1.616H5.863c-.99 0-1.855.814-1.855 1.688v16.624c0 .874.865 1.688 1.855 1.688h28.32zM2.008 28.312V11.688C2.008 9.682 3.794 8 5.863 8h28.32c2.157 0 3.964 1.716 3.819 3.688l-.003 16.552c.15 2.07-1.587 3.76-3.816 3.76H5.863c-2.069 0-3.855-1.682-3.855-3.688z" }),
            React.createElement("path", { d: "M36.731 14H3.281v2h33.45zM30 19h-2v5h5v-2h-3zM7 22h12v-2H7zM7 25h6v-2H7z" }))));
}

function CarDamage40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M20 5c6.02 0 9.086.873 10.78 2.642l.634.65c.295.312.56.62.833.971.565.73 1.118 1.607 1.686 2.706l.176.348 3.197.85c.938.196 1.615 1.003 1.688 1.954l.006.169v1.377c0 1.187-.938 2.166-2.118 2.166l.1-.004.07.289c.377 1.615.625 3.636.694 5.452l.015.539.004.443v3.781c0 .775-.4 1.46-1.004 1.844l-.114.066v1.59c0 1.136-.858 2.081-1.965 2.162l-.153.005h-3.47c-1.18 0-2.118-.98-2.117-2.199l.025-.801H10.968l-.033.994c-.076 1.063-.905 1.924-1.96 2L8.825 35H5.47c-1.18 0-2.118-.98-2.118-2.167l-.001-1.59-.113-.066a2.177 2.177 0 01-.998-1.69l-.006-.154v-3.781c0-2.038.267-4.52.712-6.434l.07-.289-.052-.001c-1.056-.077-1.886-.942-1.96-2.008L1 16.667V15.29c0-1.023.701-1.916 1.642-2.11l3.248-.863.177-.348c.505-.977.998-1.778 1.498-2.457l.188-.249c.272-.352.538-.659.833-.97l.76-.78C11.065 5.832 14.126 5 20 5zm0 2l-.41.001c-5.246.036-7.718.763-8.927 2.024-1.537 1.605-1.978 2.142-2.896 4.004l-.476.986-4.188 1.11c-.052.01-.103.075-.103.165v1.377c0 .101.063.166.118.166h2.604l-.56 1.751c-.559 1.753-.927 4.684-.927 6.968V26h18.986v2H4.235v1.333c0 .081.04.14.085.16l.033.007h1v3.333c0 .102.062.167.118.167h3.353c.055 0 .117-.065.118-.199L9.032 30h22l-.09 2.833c0 .102.062.167.117.167h3.47c.056 0 .118-.065.118-.167V29.5h1c.055 0 .118-.065.118-.167v-3.781c0-2.284-.368-5.215-.928-6.968l-.559-1.75h2.604c.055 0 .118-.066.118-.167V15.29c0-.09-.05-.155-.155-.178l-4.136-1.097-.341-.711c-.875-1.804-1.298-2.43-2.435-3.65l-.596-.629C28.097 7.731 25.528 7 20 7zm12.368 19l2.122 1.808-1.297 1.523L31.632 28H25.37v-2h6.998zM30 18v2a1 1 0 10.993 1.117L31 21h2a3 3 0 11-3.176-2.995L30 18zm-20 0a3 3 0 110 6 3 3 0 010-6zm0 2a1 1 0 100 2 1 1 0 000-2zM21.494 7.56l.865.812H26.6l-.544 2.604 2.927-.408L32.976 16H9v-2l20.023-.001-.946-1.285-4.558.637.621-2.979h-2.571L20.126 9.02l1.368-1.46z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Chat40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M20.133 32.188l-4.191-5.148H14.02C8.486 27.04 4 22.554 4 17.02S8.486 7 14.02 7h11.96C31.514 7 36 11.486 36 17.02s-4.486 10.02-10.02 10.02h-1.447v2h1.447c6.638 0 12.02-5.382 12.02-12.02S32.618 5 25.98 5H14.02C7.382 5 2 10.382 2 17.02s5.382 12.02 12.02 12.02h.971l7.142 8.772V26.88h-2v5.308z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Check40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M34.49 8.8L16.481 26.768l-8.557-8.615L6.5 19.557l9.967 10.045 19.432-19.384z", fill: "currentColor", fillRule: "evenodd" })));
}

function Circle40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M20 38c-9.941 0-18-8.059-18-18S10.059 2 20 2s18 8.059 18 18-8.059 18-18 18zm0-2c8.837 0 16-7.163 16-16S28.837 4 20 4 4 11.163 4 20s7.163 16 16 16z", fill: "currentColor", fillRule: "nonzero" })));
}

function Circlediagram40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M22 6c8.837 0 16 7.163 16 16s-7.163 16-16 16S6 30.837 6 22h2c0 7.732 6.268 14 14 14s14-6.268 14-14S29.732 8 22 8V6z" }),
            React.createElement("path", { d: "M2 17.97L1.97 19H19V1.964L17.964 2C9.254 2.31 2.26 9.3 2 17.97zM17 4.073V17H4.067C4.755 10.21 10.17 4.798 17 4.073z" }),
            React.createElement("path", { d: "M21 6h2v17H6v-2h15z" }))));
}

function Clipboard40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M25.055 8h4.258C30.2 8 31 8.8 31 9.688v23.624C31 34.2 30.2 35 29.313 35H10.659c-.943 0-1.713-.777-1.656-1.62l.003-23.692C8.944 8.74 9.658 8 10.659 8h4.333V6h-4.333C8.516 6 6.87 7.704 7.01 9.756l-.003 23.556C6.87 35.27 8.584 37 10.659 37h18.654C31.305 37 33 35.304 33 33.312V9.688C33 7.696 31.305 6 29.313 6h-4.258v2z" }),
            React.createElement("path", { d: "M19 4v3h-3v2h8V7h-3V4h-2zm-2-2h6v3h3v6H14V5h3V2zM8 15h25v-2H8zM13 21h14v-2H13zM13 25h14v-2H13zM13 29h9v-2h-9z" }))));
}

function Clock40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M20 2c9.941 0 18 8.059 18 18s-8.059 18-18 18S2 29.941 2 20 10.059 2 20 2zm0 2C11.163 4 4 11.163 4 20s7.163 16 16 16 16-7.163 16-16S28.837 4 20 4zm1 7v9.052l6.734 7.268-1.468 1.36L19 20.836V11h2z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Coins40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M21 36v2H4v-2h17zm7.5-17a9.5 9.5 0 110 19 9.5 9.5 0 010-19zm0 2a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM17.846 33v2H4v-2h13.846zM35 29a6 6 0 01-6 6v-2a4 4 0 004-4h2zm-18 1v2H4v-2h13zm0-3v2H4v-2h13zm.846-3v2H4v-2h13.846zM19 21v2H4v-2h15zm2-3v2H4v-2h17zm2-3v2H6v-2h17zm0-3v2H6v-2h17zm-4-3v2H2V9h17zm0-3v2H2V6h17z", fill: "currentColor", fillRule: "nonzero" }))));
}

function CommonCamera40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
                React.createElement("path", { d: "M29.987 10.8H35.5a2.5 2.5 0 012.5 2.5v20.2a2.5 2.5 0 01-2.5 2.5h-31A2.5 2.5 0 012 33.5V13.3a2.5 2.5 0 012.5-2.5h5.513l3.039-4.664A2.5 2.5 0 0115.146 5h9.708a2.5 2.5 0 012.094 1.136l3.039 4.664zM4.5 12.8a.5.5 0 00-.5.5v20.2a.5.5 0 00.5.5h31a.5.5 0 00.5-.5V13.3a.5.5 0 00-.5-.5h-6.598l-3.63-5.573A.5.5 0 0024.855 7h-9.708a.5.5 0 00-.419.227l-3.63 5.573H4.5z" }),
                React.createElement("path", { d: "M29 22a9 9 0 10-18 0 9 9 0 0018 0zm-16 0a7 7 0 1114 0 7 7 0 01-14 0z" })))));
}

function Computer40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M2 22V3h28v19H2zm26-2V5H4v15h24zM9 28h14v-2H9z" }),
            React.createElement("path", { d: "M13 21.342V26h2v-4.658zM17 21.342V26h2v-4.658zM12.788 6.803l-6.495 6.49 1.414 1.414 6.495-6.49zM8.425 5.803L5.403 8.824l1.415 1.414 3.02-3.02zM30 34v-2c0-2.204 1.793-4 4-4s4 1.796 4 4v2c0 2.204-1.793 4-4 4s-4-1.795-4-4zm2 0c0 1.1.898 2 2 2 1.102 0 2-.9 2-2v-2c0-1.1-.898-2-2-2-1.102 0-2 .9-2 2v2z" }),
            React.createElement("path", { d: "M33 31v2h2v-2zM24 21.417v.231C24 24.07 25.961 26 28.39 26h2.23A2.38 2.38 0 0133 28.39h2A4.38 4.38 0 0030.62 24h-2.23C27.059 24 26 22.958 26 21.648v-.231h-2z" }))));
}

function Contract40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M29 2v8h-2V4H4v32h23v-5h2v7H2V2h27zM11.524 25.492c1.562.886 1.6 2.326.822 4.339-.078.2-.159.398-.274.67-.352.836-.483 1.16-.546 1.41.203-.15.538-.492 1.024-1.116.084-.11.133-.172.316-.413 1.373-1.796 2.012-2.403 3.192-2.403 1.411 0 1.792.783 2.047 2.481l.004.028c.061.408.101.618.147.75H23v2h-4.873c-1.387 0-1.741-.753-1.996-2.453l-.004-.028c-.062-.413-.105-.628-.154-.763-.26.085-.707.541-1.517 1.602l-.328.427c-1.256 1.614-2.107 2.276-3.386 1.892-1.012-.305-1.395-1.153-1.226-2.16.09-.526.189-.788.713-2.03.108-.257.183-.438.251-.615.459-1.186.446-1.658.057-1.879-1.181-.67-2.008.366-2.546 4.315l-1.982-.27c.7-5.13 2.56-7.46 5.515-5.784zM32.599 9.574l5.8 6.013L25.097 29H19.04l-.042-5.85L32.599 9.574zm-2.811 5.629l-8.785 8.77.022 3.027h3.24l8.623-8.697-3.1-3.1zM16 15v2H7v-2h9zm16.571-2.574l-1.366 1.364 3.092 3.092 1.304-1.314-3.03-3.142zM22 11v2H7v-2h15zm0-4v2H7V7h15z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Cross40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M29.546 9l-9.54 9.541L10.465 9l-1.454 1.454 9.542 9.542L9 29.549l1.454 1.454 9.552-9.553 9.54 9.542L31 29.538l-9.541-9.542L31 10.454z", fill: "currentColor", fillRule: "evenodd" })));
}

function Cup40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M11 5v11c0 4.937 4.048 9 9 9s9-4.063 9-9V5H11zm20 11c0 6.04-4.942 11-11 11S9 22.04 9 16V3h22v13z" }),
            React.createElement("path", { d: "M9.594 8H19.5V6H9.594zM21 26v5.222a5.775 5.775 0 005.775 5.775v-2A3.775 3.775 0 0123 31.222V26h-2zM19.005 26v5.222a5.775 5.775 0 01-5.775 5.775v-2a3.775 3.775 0 003.775-3.775V26h2z" }),
            React.createElement("path", { d: "M10 37h20v-2H10zM30.406 8c2.287 0 4.131 1.797 4.131 4 0 2.203-1.844 4-4.131 4v2c3.38 0 6.131-2.68 6.131-6s-2.75-6-6.131-6v2zM9.594 6c-3.38 0-6.131 2.68-6.131 6s2.75 6 6.131 6v-2c-2.287 0-4.131-1.797-4.131-4 0-2.203 1.844-4 4.131-4V6z" }))));
}

function Damage40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M21 36v2h-9v-2h9zM7 36h3v2H5V2h30v36H23v-2h10V4H7v32z" }),
            React.createElement("path", { d: "M19.45 10.25l1.476 2.893h5.15v4.915l7.307 5.729 1.234-1.574-6.54-5.128v-5.942H22.15l-1.294-2.537L17 7.346V4h-2v4.797zM21.539 24.398l-1.46 4.598L26 32.104V36h2v-5.104l-5.508-2.892 1.398-4.402-5.336-3.735L15.802 21H7v2h9.198l2.105-.867 3.236 2.265z" }))));
}

function DigitalServices40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M34 21h-5c-.764 0-1 .254-1 1.154v9.692c0 .9.236 1.154 1 1.154h5c.764 0 1-.254 1-1.154v-9.692c0-.9-.236-1.154-1-1.154zm-17 6H7.111c-2.544 0-4.02-1.383-4.107-3.843L3 22.923V9.077C3 6.55 4.398 5.09 6.876 5.004L7.11 5H28.89c2.544 0 4.02 1.383 4.107 3.843l.004.234V19h1c1.835 0 2.92 1.099 2.996 2.946l.004.208v9.692C37 33.818 35.903 35 34 35h-5c-1.903 0-3-1.182-3-3.154V27h-7v4h4v2H13v-2h4v-4zm14.5 2a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM28.889 7H7.11c-1.463 0-2.063.535-2.108 1.902L5 9.077v13.846c0 1.437.54 2.03 1.933 2.074L7.11 25H26v-2.846c0-1.902 1.02-3.069 2.8-3.15L29 19h2V9.077c0-1.437-.54-2.03-1.933-2.074L28.89 7z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Document40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M25.77 2L34 10.09V38H7V2h18.77zM9 4v32h23l-.001-24H24V4H9zm17 16v2H12v-2h14zm0-5v2H12v-2h14zm-6-5v2h-8v-2h8zm11.055 0L26 5.031V10h5.055z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Dog40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
                React.createElement("path", { d: "M11 17v14h2V17z" }),
                React.createElement("path", { d: "M8 36v-3a1 1 0 011-1h6v-2H9a3 3 0 00-3 3v5h22.346l.228-.684C29.522 34.473 30 32.08 30 30.125c0-5.361-2.646-10.73-7.873-16.096l-1.433 1.396c4.892 5.022 7.306 9.92 7.306 14.7 0 1.562-.365 3.524-1.102 5.875H8z" }),
                React.createElement("path", { d: "M29 31c5.238 0 8-2.155 8-7h-2c0 3.617-1.773 5-6 5v2zM24.58 23.877A4.674 4.674 0 0021.858 23C19.16 23 17 25.302 17 28.11c0 2.187 1.32 4.12 3.266 4.83l.685-1.88C19.803 30.642 19 29.465 19 28.11 19 26.38 20.294 25 21.858 25c.563 0 1.1.176 1.562.506l1.16-1.63zM11.568 7l.29-.488c1.358-2.276 3.608-2.999 7.018-2.15 2.216.551 3.61 1.875 4.401 3.793.543 1.319.723 2.647.723 4.001C24 13.345 23.451 14 22.143 14c-1.378 0-1.857-.764-1.857-3.265h-2c0 3.467 1.13 5.265 3.857 5.265C24.642 16 26 14.379 26 12.156c0-1.592-.211-3.155-.874-4.763-1.02-2.477-2.898-4.258-5.767-4.972-3.98-.99-7.023-.136-8.904 2.579H4v4.196c0 4.7 5.145 7.701 9.666 5.546l-.861-1.806C9.579 14.475 6 12.387 6 9.196V7h5.568z" })))));
}

function DogRisk40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M10.338 4.011c.383.044 1.106.363 1.882.802l.428.25c1.144.693 2.294 1.577 2.574 2.17l.037.097.01.018.008.06.006.027.097 1.081.115 1.335.039.402.063.536c.021.17.044.33.067.48l.072.42.063.297.106.415c.002.016 0 .021-.008.013l1.03 1.012 1.2 1.198c1.48 1.487 2.945 3 4.316 4.467l.787.85.953 1.048.544.61.514.586.485.563.454.539.216.26.41.506.378.481c.181.236.351.462.51.68l.3.426c.808 1.174 1.236 2.08 1.26 2.736.01.216.005.436-.016.66-.08.84-.372 1.7-.807 2.556-.112.22-.224.424-.331.606l-.079.13.16.225c.08.106.16.212.243.316l.253.306c.468.542.915.93 1.264 1.086a.754.754 0 00.185.06l.042.004h3.108c1.65 0 2.379-.945 2.629-2.934l.02-.17.032-.339.021-.352.008-.188.01-.415L36 29h2l-.002.737-.007.487c-.004.151-.01.293-.016.43l-.025.397a12.86 12.86 0 01-.061.589c-.35 2.79-1.677 4.578-4.364 4.68l-.249.005h-3.108c-.354 0-.703-.085-1.047-.24-.672-.301-1.316-.86-1.958-1.604a13.307 13.307 0 01-.857-1.113l-.238-.354-.103-.164-.35-.576.457-.616.132-.199c.151-.234.303-.495.444-.772.33-.651.546-1.286.599-1.84.012-.13.015-.252.008-.384a.943.943 0 00-.076-.295l-.087-.196a4.137 4.137 0 00-.056-.109l-.135-.241-.166-.27-.196-.298-.225-.324-.254-.35-.281-.375-.309-.399-.334-.42-.549-.671-.396-.473-.638-.743-.687-.781-.735-.816-.757-.824-.392-.421a188.263 188.263 0 00-3.396-3.536l-1.144-1.154-1.334-1.325-.609-.597c-.332-.324-.542-.833-.7-1.608-1.78.225-3.364-.417-4.2-1.795-.569-.877-.533-1.853-.078-2.893.154-.352.34-.685.598-1.09l.235-.354-.037-.02-.133-.062a.342.342 0 00-.065-.024h-.036l-.125.01-.302.044-.267.047-.31.06-.342.072-.414.093-.487.116-.893.226-.232.062-.236-.05c-.15-.032-.307-.069-.476-.11L5.33 6.4l-.995-.26-.172-.042-.019.092a7.757 7.757 0 00-.088.617l-.021.23-.013.182-.017.358-.003.174v.327l.009.293.014.246.02.188a.95.95 0 00.021.118l.01.023.151.095.173.096.215.108.267.124 1.292.566c1.293.582 2.106 1.086 2.657 1.81.32.438.5.907.59 1.673l.033.323.012.174.019.377.011.419.004.712-.014 1.128-.036 1.717c-.003.233-.006.455-.006.667l.003.61.006.283.02.531c.029.592.082 1.09.164 1.53l.037.185c.335 1.678 1.099 2.515 3.233 3.88l.79.497.522.338.304.206.581.401-.436 1.628-.516 1.955-.19.686-.17.577-.054.177c-.281.89-.546 1.529-.862 2.009l-.133.197-.306.434-.345.467c-.174.23-.355.467-.54.703l-.65.815-1.548-1.266.355-.442c.268-.337.536-.681.784-1.012l.29-.392.331-.468.092-.137c.19-.289.394-.78.624-1.51l.103-.336.166-.578.704-2.65-.696-.439c-2.764-1.733-3.908-2.91-4.391-5.335-.17-.795-.25-1.69-.268-2.855l-.004-.663c0-.116 0-.234.002-.354l.04-2.128.008-.606.001-.705-.007-.474-.014-.411-.022-.351-.029-.295c-.043-.358-.107-.577-.194-.696-.253-.331-.784-.674-1.652-1.08l-.402-.181-.945-.412-.215-.096-.37-.175a6.213 6.213 0 01-.448-.242c-.347-.209-.607-.424-.813-.738-.813-1.354-.433-6.011 1.24-6.011l.124.001.176.01.19.024.072.013.256.054.216.051 1.753.453.256.062.194-.05.502-.126.51-.12.438-.1.495-.103.225-.044.406-.068c.377-.057.671-.075.9-.05zm10.576 21.957l1.643 1.141c-.164.236-.323.475-.475.714l-.296.475-.275.467a21.66 21.66 0 00-.13.228l-.238.441c-.337.643-.577 1.195-.673 1.546l-.031.131.032.044.059.076.15.177.092.098c.333.354.812.788 1.361 1.235l.387.308.386.293c.063.048.127.094.19.14l.37.263.35.237.324.206.287.17c.134.074.251.134.348.175l.09.035-.327 1.945H17.36v-2l3.769-.001-.261-.215-.41-.354c-1.067-.95-1.926-1.947-2.023-2.582l-.01-.114c0-1.028.98-3.054 2.314-5.023l.176-.256zM9.237 28l1.885.667-.322.894-.305.81-.192.487-.182.445-.173.399a15.68 15.68 0 01-.083.181l-.156.327c-.126.251-.24.45-.34.589-.13.181-.283.383-.455.601l-.353.44c-.268.328-.554.667-.84 1l-.383.439-1.496-1.327.364-.419c.184-.212.367-.428.545-.641l.425-.52.255-.322.218-.288.096-.13a1.43 1.43 0 00.078-.126l.096-.181.112-.235.127-.284.214-.51.24-.602.258-.682.273-.749.094-.263zM12.1 7.085l-.165.248-.215.336c-.161.26-.277.475-.368.682-.21.482-.222.778-.06 1.028.406.669 1.21 1.004 2.232.879l-.078-.855-.12-1.466-.11-.09-.098-.076-.157-.115-.366-.253-.42-.273-.075-.045z", fill: "currentColor", fillRule: "nonzero" }))));
}

function EInvoice40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M37 3v34.592l-9.629-4.638L20 37.151l-7.372-4.197L3 37.592V3h34zm-2 2H5v29.409l7.705-3.711L20 34.849l7.295-4.151L35 34.409V5zm-6 20v2h-6v-2h6zm0-4v2H11v-2h18zM19.924 8c2.74 0 3.87 2.114 3.278 5.232h-4.82c.126 1.254.825 1.791 1.954 1.791.842 0 1.791-.25 2.544-.573l.25 1.774c-.877.483-1.88.77-2.884.77-2.454 0-4.246-1.72-4.246-4.604C16 9.38 18.007 8 19.924 8zm.018 1.81c-.896 0-1.541.734-1.577 1.88h2.92c.072-1.164-.376-1.88-1.343-1.88z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Envelope40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
                React.createElement("path", { d: "M2 7h36v26H2V7zm2 2v22h32V9H4z" }),
                React.createElement("path", { d: "M20 20.705L3.636 7.228 2.364 8.772 20 23.295 37.636 8.772l-1.272-1.544zM37.669 31.257l-10-9-1.338 1.486 10 9zM3.669 32.743l10-9-1.338-1.486-10 9z" })))));
}

function Facebook40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M5 5v30h30V5H5zM3 3h34v34H3V3z", fillRule: "nonzero" }),
            React.createElement("path", { d: "M18.012 27.984V19.97H16v-2.91h2.012v-2.146c0-2.49 1.521-3.846 3.743-3.846 1.063 0 1.978.079 2.245.114v2.603h-1.54c-1.21 0-1.443.575-1.443 1.417v1.858h2.881l-.375 2.91h-2.506v8.015h-3.005z" }))));
}

function Family40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
                React.createElement("path", { d: "M23.942 12.815c0 4.314-3.528 7.815-7.884 7.815-4.357 0-7.885-3.501-7.885-7.815S11.701 5 16.058 5a7.892 7.892 0 015.987 2.73l1.513-1.309A9.892 9.892 0 0016.058 3C10.6 3 6.173 7.392 6.173 12.815c0 5.422 4.427 9.815 9.885 9.815 5.457 0 9.884-4.393 9.884-9.815 0-.631-.06-1.255-.178-1.866l-.157-.81H17.858c-1.307 0-2.788-1.073-3.523-2.597l-1.801.869c1.049 2.174 3.192 3.728 5.324 3.728h6.055c.02.224.03.45.03.676zM32.37 29.205C34.585 29.948 36 31.77 36 34v4h2v-4c0-3.12-1.991-5.684-4.993-6.691l-.636 1.896zM20 38v-4c0-2.155 1.557-4.02 3.856-4.794l-.638-1.895C20.154 28.34 18 30.922 18 34v4h2z" }),
                React.createElement("path", { d: "M28.115 31.444c3.705 0 6.712-2.983 6.712-6.666 0-3.684-3.007-6.667-6.712-6.667-3.705 0-6.711 2.983-6.711 6.667 0 3.683 3.006 6.666 6.711 6.666zm0-2c-2.603 0-4.711-2.09-4.711-4.666 0-2.576 2.108-4.667 4.711-4.667 2.604 0 4.712 2.091 4.712 4.667 0 2.575-2.108 4.666-4.712 4.666zM4 38V26c0-2.296 1.744-4.33 5.432-6.098l-.864-1.804C4.256 20.165 2 22.798 2 26v12h2z" })))));
}

function Farm40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M23 2.677l15.655 13.567-1.31 1.512L36 16.588V34H38v2H2v-2h3.999v-2.806a5.51 5.51 0 01-2.62-1.22l-.207-.184a5.478 5.478 0 01-1.747-4.015c0-3.039 2.472-5.5 5.52-5.5a5.52 5.52 0 013.055.918L10 16.589l-1.344 1.167-1.31-1.512L23 2.677zm-13 27.68a5.51 5.51 0 01-2 .817L7.999 34h2zM23 5.323l-11.001 9.534L12 34h3.999L16 22h14l-.001 12H34l-.001-15H14v-2h19.999v-2.145L23 5.322zm2.499 26.279L24.5 34h1.999l-1-2.4zm-5 0L19.5 34h1.999l-1-2.4zm-2.5-6.002v6.8l1.417-3.4-1.417-3.4zm5.001 0L21.583 29l1.416 3.399 1.417-3.4L23 25.6zm4.999.003l-1.416 3.397 1.416 3.398v-6.795zM6.945 22.275c-1.945 0-3.52 1.568-3.52 3.5 0 .98.406 1.894 1.111 2.552a3.537 3.537 0 005.141-.344L10 27.62v-3.366l-.443-.823-.082-.089a3.513 3.513 0 00-2.307-1.06zM26.5 24H24.5l.999 2.399 1-2.4zm-5 0H19.5l.999 2.399 1-2.4zM23 9a5 5 0 015 5v1H18v-1a5 5 0 015-5zm0 2c-1.302 0-2.41.83-2.825 1.988L20.17 13h5.659l-.076-.193a3.002 3.002 0 00-2.577-1.802z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Fish40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M28.661 2.442l1.092.867.263.223c.287.248.604.538.945.868.97.94 1.94 2.014 2.845 3.21 3.722 4.915 5.295 10.306 3.41 15.83-1.15 3.361-3.008 6.155-5.457 8.36l-.354.311-.1.076c-.458.303-1.167.648-2.045 1.011l-.61.245c-.315.123-.649.248-.995.373l-.712.252a58.92 58.92 0 01-.367.125l-.757.25-.78.248-.797.244-.81.238-.409.116-.82.227-.818.216-.813.206-.801.192-.785.178-.385.083-.75.153a39.56 39.56 0 01-1.065.195l-.665.104c-.969.14-1.79.205-2.381.168l-.004.037a16.183 16.183 0 01-3.812-.993 4.917 4.917 0 01-.376-.085l-.19-.055.027-.088a13.641 13.641 0 01-3.171-1.975c-1.45-1.209-2.346-2.43-2.795-3.33l-.08-.166-.618-1.35 2.548-.113-.081-.028a7.161 7.161 0 00-1.058-.26l-.237-.031-1.48-.16.707-1.31c1.58-2.925 4.43-4.327 9.206-4.438l.205-.003.167-.245c1.017-1.462 2.439-2.75 3.63-3.254l.197-.077.243-.087.255.042c1.433.234 2.717.557 4.202 1.026l.888.292 2.089.7c.828.265 1.474.434 2.084.538 1.2.203 2.274.143 3.442-.237 2.824-1.328 4.061-3.528 3.118-6.43l-.076-.222 1.882-.675c1.479 4.118-.257 7.268-3.917 9.057l.012.033-.335.118c-.94.427-1.997.767-3.15 1.017-2.482.536-5.241.64-8.553.466l-.628-.036.123-1.996c1.753.107 3.34.14 4.795.076l-1.833-.618c-1.46-.48-2.672-.811-3.973-1.05l-.212-.038-.092.046c-.867.46-2.033 1.6-2.793 2.82l-.138.23-.29.504-.581-.003c-3.683-.019-5.936.675-7.335 2.17l-.082.09.311.101c1.107.377 2.273.968 3.253 1.723l.288.232 1.98 1.66-5.448.225.045.058c.315.38.674.759 1.081 1.125l.315.272a11.689 11.689 0 002.967 1.799c2.379.284 5.037-2.437 4.773-6.204l-.02-.238 1.99-.203c.336 3.308-1.117 6.13-3.192 7.594.507.05 1.43-.057 2.588-.272l.617-.12.652-.138.684-.154.71-.169.73-.18.744-.194.754-.202.76-.212.757-.218 1.122-.336.732-.229.711-.23.687-.23.656-.23c.106-.037.211-.075.314-.113l.6-.223.557-.219c.71-.287 1.288-.556 1.678-.79l.084-.055.285-.25c2.081-1.877 3.685-4.23 4.729-7.056l.16-.45c1.634-4.79.248-9.54-3.112-13.976a26.036 26.036 0 00-2.256-2.6l-.386-.38-.139-.134-.04.123c-.375 1.2-.578 2.408-.528 3.524l.023.332c.09.968.381 1.805.9 2.496l.161.203 1.208 1.42-1.85.221c-2.312.276-3.724.912-5.237 3.05l-.173.249.11.03c1.494.387 3.03.53 4.453.302l.354-.065a6.425 6.425 0 002.14-.844l.27-.18 1.158 1.63c-.945.67-2.008 1.114-3.162 1.353-1.866.387-3.825.23-5.715-.26l-.433-.12-.197-.058-.353-.113-.297-.104a7.505 7.505 0 01-.125-.048l-1.166-.483.575-.988c1.78-3.056 3.449-4.393 5.756-5.005l.274-.069-.052-.11a7.145 7.145 0 01-.556-2.013l-.034-.309c-.14-1.508.102-3.087.588-4.638l.078-.243.154-.445c.05-.14.1-.269.147-.388l.136-.328.063-.139.6-1.245z", fill: "currentColor", fillRule: "nonzero" }))));
}

function FundAssortment40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M4 2v34h34v2H2V2h2zm21.907 21.928l10.38 3.114-.574 1.916-9.62-2.887-10 5-10.38-3.113.574-1.916 9.619 2.886 10.001-5zm9.386-18.635l1.414 1.414L26.285 17.13l-10.149-3.045-9.622 5.773-1.028-1.714 10.378-6.228 9.85 2.955 9.579-9.577z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Glasses40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
                React.createElement("path", { d: "M18 23.5A7.5 7.5 0 113 23.5a7.5 7.5 0 0115-.002zm-2 0a5.5 5.5 0 10-11 .002 5.5 5.5 0 0011-.003zM37 23.5a7.5 7.5 0 11-15 .001 7.5 7.5 0 0115-.002zm-2 0a5.5 5.5 0 10-11 .002 5.5 5.5 0 0011-.003z" }),
                React.createElement("path", { d: "M17.508 22.083a4.9 4.9 0 012.493-.662c.907 0 1.767.234 2.49.661a1 1 0 001.018-1.721A6.888 6.888 0 0020 19.42a6.9 6.9 0 00-3.509.94 1 1 0 001.016 1.722zM34.325 10.513c.263 1.261.53 2.89.794 4.798a214.02 214.02 0 01.905 7.783l1.99-.188c-.011-.124-.034-.355-.066-.678-.054-.538-.116-1.137-.187-1.782-.2-1.843-.423-3.686-.661-5.409-.632-4.564-1.205-7.309-1.936-8.185a1.427 1.427 0 00-.467-.377c-.617-.304-1.44-.44-2.453-.47-.663-.018-1.364.01-2.053.07-.325.027-.576.056-.723.075l.264 1.983c.118-.016.338-.04.63-.066a16.18 16.18 0 011.823-.062c.65.019 1.173.093 1.494.208.15.287.4 1.123.646 2.3zM7.835 8.005c.576-.017 1.203.009 1.822.062.292.025.512.05.63.066l.264-1.983a16.61 16.61 0 00-.723-.076 18.104 18.104 0 00-2.051-.068c-1.014.03-1.836.165-2.453.468a1.434 1.434 0 00-.477.39c-.725.883-1.298 3.629-1.927 8.173a190.192 190.192 0 00-.662 5.41 216.03 216.03 0 00-.254 2.46l1.992.187c.01-.12.033-.348.065-.666.054-.533.116-1.126.185-1.765.2-1.826.42-3.65.655-5.352.515-3.722 1.074-6.458 1.438-7.097.32-.115.844-.19 1.496-.209zM12.293 20.293l-5 5 1.414 1.414 5-5zM7.707 23.707l3-3-1.414-1.414-3 3zM31.293 20.293l-5 5 1.414 1.414 5-5zM26.707 23.707l3-3-1.414-1.414-3 3z" })))));
}

function Gear40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M25.59 3l6.82 3.925-2.384 4.116.137.146.135.148.133.15.13.152.128.154.126.156.124.157.122.16.119.16.117.164.115.165.112.166.11.168.107.17.105.172.103.173.1.175.098.176.095.178.092.18.09.18.088.183.085.184.082.185.08.187.076.188.074.19.071.19.069.193.065.193.063.195.06.196H38v7.85h-4.762l-.06.196-.064.195-.065.193-.069.193-.07.19-.075.19-.077.188-.08.187-.081.185-.085.184-.088.183-.09.18-.092.18-.095.178-.098.176-.1.175-.103.173-.105.172-.107.17-.11.168-.112.166-.115.165-.117.163-.12.161-.12.16-.125.157-.126.156-.128.154-.13.152-.133.15-.135.148-.137.146 2.384 4.116L25.59 38l-2.382-4.11-.193.043-.195.042-.195.04-.197.036-.197.033-.2.03-.198.029-.2.025-.202.022-.202.02-.203.016-.203.013-.205.01-.205.008-.206.005-.207.001-.207-.001-.206-.005-.205-.007-.205-.01-.203-.014-.203-.017-.202-.019-.201-.022-.2-.025-.2-.028-.199-.03-.197-.034-.197-.036-.195-.04-.195-.042-.193-.044L14.41 38l-6.82-3.925 2.384-4.116-.137-.146-.135-.148-.133-.15-.13-.152-.128-.154-.126-.156-.124-.157-.122-.16-.119-.16-.117-.164-.115-.165-.112-.166-.11-.168-.107-.17-.105-.172-.103-.173-.1-.175-.098-.176-.095-.178-.092-.18-.09-.18-.088-.183-.085-.184-.082-.185-.08-.187-.076-.188-.074-.19-.071-.19-.069-.193-.065-.193-.063-.195-.06-.196H2v-7.85h4.762l.06-.196.064-.195.065-.193.069-.193.07-.19.075-.19.077-.188.08-.187.081-.185.085-.184.088-.183.09-.18.092-.18.095-.178.098-.176.1-.175.103-.173.105-.172.107-.17.11-.168.112-.166.115-.165.117-.163.12-.161.12-.16.125-.157.126-.156.128-.154.13-.152.133-.15.135-.148.137-.146L7.59 6.925 14.41 3l2.382 4.11.193-.043.195-.042.195-.04.197-.036.197-.033.2-.03.198-.029.2-.025.202-.022.202-.02.203-.016.203-.013.205-.01.205-.008.206-.005.207-.001.207.001.206.005.205.007.205.01.203.014.203.017.202.019.201.022.2.025.2.028.199.03.197.034.197.036.195.04.195.042.193.044L25.59 3zm.773 2.891l-2.105 3.635-1.52-.347-.168-.038-.166-.036-.164-.034-.165-.03-.165-.029-.173-.026-.167-.024-.169-.021-.17-.02-.176-.016-.166-.014-.173-.012-.18-.009-.169-.007-.175-.004-.177-.001h-.176l-.17.004-.18.007-.174.009-.168.01-.176.015-.171.016-.17.018-.168.02-.173.025-.166.025-.166.028-.165.03-.168.034-.168.036-1.714.39-2.105-3.634-3.148 1.812 2.108 3.64-1.08 1.151-.115.122-.113.123-.113.128-.111.13-.11.13-.105.13-.108.137-.1.13-.104.14-.097.136-.098.14-.096.142-.093.143-.09.141-.088.143-.089.15-.084.146-.083.15-.08.147-.08.157-.075.15-.074.155-.072.154-.07.156-.066.157-.067.163-.061.155-.061.163-.057.16-.057.168-.053.162-.52 1.694h-4.21v3.608h4.21l.46 1.498.05.164.054.168.054.162.059.164.058.156.064.165.064.158.067.157.069.157.072.156.072.151.079.159.076.148.08.152.082.147.086.151.086.145.087.144.091.144.094.143.096.143.094.136.103.143.096.131.106.139.103.132.108.133.109.131.11.13.111.125.112.124 1.218 1.297-2.108 3.64 3.148 1.812 2.105-3.635 1.52.347.168.038.166.036.164.034.165.03.165.029.173.026.167.024.169.021.17.02.176.016.166.014.173.012.18.009.169.007.175.004.177.001h.176l.17-.004.18-.007.174-.009.168-.01.176-.015.171-.016.17-.018.168-.02.173-.025.166-.025.166-.028.165-.03.168-.034.168-.036 1.714-.39 2.105 3.634 3.148-1.812-2.108-3.64 1.08-1.151.115-.122.113-.123.113-.128.111-.13.11-.13.105-.13.108-.137.1-.13.104-.14.097-.136.098-.14.096-.142.093-.143.09-.141.088-.143.089-.15.084-.146.083-.15.08-.147.08-.157.075-.15.074-.155.072-.154.07-.156.066-.157.067-.163.061-.155.061-.163.057-.16.057-.168.053-.162.52-1.694h4.21v-3.608h-4.21l-.46-1.498-.05-.164-.054-.168-.054-.162-.059-.164-.058-.156-.064-.165-.064-.158-.067-.157-.069-.157-.072-.156-.072-.151-.079-.159-.076-.148-.08-.152-.082-.147-.086-.151-.086-.145-.087-.144-.091-.144-.094-.143-.096-.143-.094-.136-.103-.143-.096-.131-.106-.139-.103-.132-.108-.133-.109-.131-.11-.13-.111-.125-.112-.124-1.218-1.297 2.108-3.64-3.148-1.812zM20 14a6 6 0 110 12 6 6 0 010-12zm0 2a4 4 0 100 8 4 4 0 000-8z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Gravestones40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M27.655 1.92l.376.162C34.601 4.928 38 8.608 38 13.142V25h-7v13H11l-.001-8H2V17c0-4.469 3.267-8.103 9.582-10.914l.407-.18.407.18c5.264 2.343 8.75 5.415 9.467 8.208 5.075 2.342 8.085 5.242 8.906 8.706H36v-9.858c0-3.503-2.725-6.528-8.386-9.058-3.118 1.271-5.505 3.105-6.823 4.81L19.21 7.671c1.591-2.06 4.415-4.196 8.065-5.604l.381-.147zM21 16.097c-5.401 2.487-8 5.458-8 8.903v11h16V25c0-3.445-2.599-6.416-8-8.903zm-9.011-8C6.595 10.585 4 13.555 4 17v11h6.999L11 25c0-4.284 3.005-7.8 8.821-10.56-.708-1.904-3.51-4.348-7.832-6.342z", fill: "currentColor", fillRule: "nonzero" }))));
}

function GrowthArrow40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M37.999 8L38 18h-2l-.001-6.636-14.217 13.799-6.6-6.231L2.685 30.727l-1.372-1.454L15.18 16.18l6.581 6.213L34.534 10H28V8h9.999z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Guide40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
                React.createElement("path", { d: "M14 38h12v-2H14zM21 36V2h-2v34zM4.44 14.467l2.49-2.4H19v-2H6.122l-4.563 4.4 4.563 4.4H17v-2H6.93zM33.07 7.533l2.49 2.4-2.49 2.4H23v2h10.878l4.563-4.4-4.563-4.4H21v2z" })))));
}

function Heart40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M32.893 19.402c2.81-2.81 2.81-7.485 0-10.295-2.81-2.81-7.486-2.81-10.295 0L20 11.705l-2.598-2.598c-2.81-2.81-7.485-2.81-10.295 0-2.81 2.81-2.81 7.486 0 10.295L20 32.295l12.893-12.893zm-11.71-11.71c3.591-3.59 9.534-3.59 13.124 0 3.59 3.591 3.59 9.534 0 13.124L20 35.123 5.693 20.816c-3.59-3.59-3.59-9.533 0-13.123s9.533-3.59 13.123 0L20 8.877l1.184-1.184z", fill: "currentColor", fillRule: "nonzero" })));
}

function Heartbeat40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M29.017 19.124l5.941 9.626H38v2h-4.158l-4.86-7.874L19.905 37l-3.627-7.051-2.95 4.302H2v-2h10.273l4.25-6.198 3.573 6.949 8.921-13.877zM20.374 5.607a5.357 5.357 0 010 7.717L12 21.388l-8.374-8.064a5.357 5.357 0 010-7.717 5.698 5.698 0 017.904 0l.47.452.47-.452a5.698 5.698 0 017.904 0zm-6.517 1.44L12 8.837l-1.857-1.788a3.698 3.698 0 00-5.22.089 3.357 3.357 0 00.09 4.746L12 18.612l6.987-6.729a3.357 3.357 0 000-4.835 3.698 3.698 0 00-5.13 0z", fill: "currentColor", fillRule: "nonzero" }))));
}

function House40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
                React.createElement("path", { d: "M6 38V15H4v23zM34 15v23h2V15zM22 25h8v11h2V23H20v13h2zM25.36 14.768l1.28-1.536L20 7.698l-6.64 5.534 1.28 1.536L20 10.302z" }),
                React.createElement("path", { d: "M20 4.302l17.36 14.466 1.28-1.536L20 1.698 1.36 17.232l1.28 1.536zM18 38h20v-2H18zM2 38h11v-2H2zM18 23v9H9v-9h9zm-7 2v5h5v-5h-5z" })))));
}

function HouseSun40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
                React.createElement("path", { d: "M27 2c0 6.075 4.925 11 11 11v-2a9 9 0 01-9-9h-2zM25 2h-5v2h5zM36 15v5h2v-5zM7 38V25H5v13zM27 25v13h2V25zM15 31h4v7h2v-9h-8v9h2z" }),
                React.createElement("path", { d: "M30.382 27.786l1.236-1.572L17 14.728 2.382 26.214l1.236 1.572L17 17.272zM27.293 11.293l-4 4 1.414 1.414 4-4z" })))));
}

function IdSign40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M29 32v1.681c0 .691-.624 1.32-1.308 1.32H12.308A1.31 1.31 0 0111 33.68V6.318C11 5.628 11.625 5 12.308 5h15.384C28.375 5 29 5.627 29 6.318V22h2V6.318C31 4.525 29.482 3 27.692 3H12.308C10.518 3 9 4.525 9 6.318v27.363a3.31 3.31 0 003.308 3.32h15.384C29.483 37 31 35.473 31 33.68V32h-2z" }),
            React.createElement("path", { d: "M24.598 20.553C23.592 20.83 22.088 21 20 21c-2.089 0-3.592-.17-4.598-.447a7.346 7.346 0 01-.308-.09c.021-.117.046-.243.074-.378.169-.803.412-1.605.738-2.345.614-1.39 1.442-2.374 2.487-2.82l-.786-1.84c-1.583.677-2.73 2.04-3.53 3.853-.389.879-.67 1.81-.866 2.741-.118.56-.181 1.001-.207 1.268l-.046.49.36.335c.256.24.749.494 1.556.715 1.192.327 2.87.518 5.126.518 2.256 0 3.934-.19 5.126-.518.807-.22 1.3-.476 1.556-.715l.36-.335-.046-.49a12.073 12.073 0 00-.207-1.268 13.874 13.874 0 00-.865-2.741c-.8-1.813-1.948-3.176-3.53-3.852l-.787 1.838c1.045.447 1.873 1.43 2.487 2.821.326.74.57 1.542.738 2.345.028.135.053.261.074.377-.087.028-.19.059-.308.091z", fillRule: "nonzero" }),
            React.createElement("path", { d: "M20 16a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z", fillRule: "nonzero" }),
            React.createElement("path", { d: "M35.49 19.8l-10.009 9.968-4.557-4.615-1.424 1.404 5.967 6.045 11.432-11.384z" }))));
}

function Letter40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M4 32h32V8H4v24zM38 6v28H2V6h36z" }),
            React.createElement("path", { d: "M3.682 6.688L2.318 8.15 20.055 24.69l17.63-16.54-1.37-1.46L20.052 21.95zM37.646 31.94l-9.915-10.622-1.462 1.364 9.915 10.622zM13.293 21.293l-10 10 1.414 1.414 10-10z" }))));
}

function Mc40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M25.797 8.396l7.25 9.57h-2.013a6.007 6.007 0 00-3.552 1.156l1.013 1.005a5.994 5.994 0 11-1.407 1.422l-1.006-.998a6.003 6.003 0 00-1.078 3.223L25 24v.494l-3.525 2.695-7.35.08L10.31 23.1l-2.607 2.587-1.408-1.42 2.663-2.643L6.558 19 4 19v-2h3.44l7.556 8.258 5.793-.062 2.227-1.703.018-.238a8.04 8.04 0 016.058-7.053l.093-.022-4.982-6.576 1.594-1.208zM5.56 19.385l.812 1.828a3.995 3.995 0 105.227 5.375l.096-.22 1.854.75a5.95 5.95 0 01-1.317 1.984 5.994 5.994 0 11-6.954-9.583l.282-.134zM31.994 21c-.75 0-1.45.206-2.05.565l2.214 2.195-1.408 1.42-2.21-2.192A3.994 3.994 0 1031.994 21zM22 21v2h-4v-2h4zm-11.764-8l5.979 2.989 6.897-.318c1.278-.13 1.834-.513 1.884-1.516L25 14h2c0 2.259-1.344 3.357-3.513 3.639l-.228.026-7.473.346L9.764 15H3v-2h7.236zM24 12v2h-3v-2h3z", fill: "currentColor", fillRule: "nonzero" }))));
}

function MobilePhone40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("g", { transform: "translate(10 3)", fill: "currentColor" },
                React.createElement("path", { d: "M2-1h16a3 3 0 013 3v30a3 3 0 01-3 3H2a3 3 0 01-3-3V2a3 3 0 013-3zm0 2a1 1 0 00-1 1v30a1 1 0 001 1h16a1 1 0 001-1V2a1 1 0 00-1-1H2z", fillRule: "nonzero" }),
                React.createElement("circle", { cx: 10, cy: 30.5, r: 1.5 }),
                React.createElement("path", { fillRule: "nonzero", d: "M0 28h19v-2H0zM0 5h19V3H0z" })))));
}

function MobilePhoneBroken40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("g", { transform: "translate(7 3)", fill: "currentColor" },
                React.createElement("path", { d: "M2-1h16a3 3 0 013 3v30a3 3 0 01-3 3H2a3 3 0 01-3-3V2a3 3 0 013-3zm0 2a1 1 0 00-1 1v30a1 1 0 001 1h16a1 1 0 001-1V2a1 1 0 00-1-1H2z", fillRule: "nonzero" }),
                React.createElement("circle", { cx: 10.5, cy: 30.5, r: 1.5 }),
                React.createElement("path", { fillRule: "nonzero", d: "M1 28h18v-2H1zM8.27 8.086l-3.704 6.2h8.411l-2.184 4.063 8.746 4.539.922-1.776-6.946-3.604 2.808-5.222H8.091l2.953-4.943-7.557-4.216-.974 1.746zM28.553 9.106l-4 2 .894 1.788 4-2zM24.4 21.8l4 3 1.2-1.6-4-3zM31 16h-5v2h5z" })))));
}

function Moped40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M33 22a5 5 0 110 10 5 5 0 010-10zm-29.265.255l1.334 1.49a3.205 3.205 0 104.546 4.505l.124-.152 1.58 1.227a5.205 5.205 0 11-7.773-6.893l.189-.177zM33 24a3 3 0 100 6 3 3 0 000-6zM25.578 9l5.841 10.141c.43-.078.872-.124 1.323-.137L33 19c.732 0 1.687.15 2.886.448l.333.084-.504 1.936C34.509 21.154 33.595 21 33 21c-3.257 0-5.849 2.257-5.97 4.83l-.005.19v3.01H12.604L2 19.111v-6.04l16-.077V14c0 2.94-2.103 5.39-4.923 6.444a5.62 5.62 0 005.383 4.01c3.045 0 5.422-2.26 5.536-5.23L24 19v-4h2v4c0 4.193-3.322 7.454-7.54 7.454a7.618 7.618 0 01-7.326-5.528 8.773 8.773 0 01-.886.07L10 21v-2c2.742 0 5.192-1.665 5.836-3.862l.034-.133L4 15.062v3.181l9.393 8.786h11.632v-1.01c0-2.705 1.809-5.11 4.433-6.276l-5.037-8.744L22 11V9h3.578zM10 16v2H5v-2h5zm20.868-3.497l1.827 3.189-1.735.994-1.828-3.189 1.736-.994z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Mortgage40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M16 23.712l9 7.312V38h-2v-6.024l-7-5.688-7 5.688V38H7v-6.976l9-7.312zM19 33v5h-2v-3h-2v3h-2v-5h6zm12-10a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4zm-.883-22.49l3.162 14.624-5.285 1.115a5 5 0 01-9.463 1.995L7.883 22.49 4.721 7.866 30.117 2.51zM23 15a3 3 0 100 6 3 3 0 000-6zm5.583-10.122L7.1 9.408l2.316 10.714 8.593-1.811a5 5 0 019.682-2.043l3.207-.676-2.316-10.714z", fill: "currentColor", fillRule: "nonzero" }))));
}

function NotificationSwish40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M10 32.83l.747-.897c5.076 1.392 10.663-.412 14.07-4.472 4.56-5.46 3.778-13.714-1.953-18.287l-1.042-.762L26.56 3l.959.702C31.6 6.862 34 11.657 34 16.922 34 26.395 26.2 34 16.48 34c-2.16 0-4.32-.35-6.48-1.17zm-3.56-2.528C2.342 27.038 0 22.143 0 17.015 0 7.576 7.61 0 17.092 0c2.46 0 4.8.466 6.908 1.514l-.771.847C17.913.715 12.285 2.216 8.83 6.513c-4.448 5.568-3.557 13.54 2.034 18.221l1.017.76L7.258 31l-.818-.698z", id: "notification-swish-40_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#notification-swish-40_svg__a", transform: "translate(3 3)" }))));
}

function Padlock40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M7 37V17h26v20H7zm24-2V19H9v16h22z" }),
            React.createElement("path", { d: "M30 17.226v-5.445C30 6.373 25.518 2 20 2c-5.517 0-10 4.373-10 9.78v5.446h2v-5.445C12 7.489 15.576 4 20 4c4.424 0 8 3.489 8 7.78v5.446h2z" }),
            React.createElement("path", { d: "M26 17.678v-5.8C26 8.626 23.308 6 20 6s-6 2.626-6 5.878v5.8h2v-5.8C16 9.742 17.786 8 20 8c2.215 0 4 1.742 4 3.878v5.8h2zM22.272 30.025l-1.277-3.86c.526-.315.879-.88.879-1.527 0-.99-.823-1.793-1.838-1.793-1.015 0-1.838.803-1.838 1.793 0 .647.353 1.212.88 1.528l-1.278 3.86h4.472zm-6.074-5.387c0-2.106 1.73-3.793 3.838-3.793 2.109 0 3.838 1.687 3.838 3.793 0 .742-.218 1.445-.603 2.04l1.77 5.347h-10.01l1.77-5.347a3.745 3.745 0 01-.603-2.04z" }))));
}

function Payment40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M13.5 28a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm23.794-4.708l1.412 1.416-11.835 11.8-5.546-5.08 1.35-1.474 4.138 3.788 10.48-10.45zM13.5 30a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM29.395 1.43l2.177 7.477.953.204-3.702 17.628-12.834-3.06a5.502 5.502 0 01-9.812-1.787L1.48 20.89 5.177 3.285l8.25 1.757L29.394 1.43zM6.722 5.66L3.848 19.348l2.194.468a5.501 5.501 0 1110.797 2.008l10.449 2.492 2.87-13.665-16.72-3.562-.283.065-.03-.132L6.721 5.66zM11.5 17a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM28.001 3.796l-9.906 2.24 11.256 2.398-1.35-4.638z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Pension40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M25 9h-3v2h3zM38 9h-3v2h3zM31 5V2h-2v3zM31 18v-3h-2v3zM34.243 7.172l2.121-2.122-1.414-1.414-2.122 2.121zM25.05 16.364l2.122-2.121-1.415-1.415-2.121 2.122zM32.828 14.243l2.122 2.121 1.414-1.414-2.121-2.122zM23.636 5.05l2.121 2.122 1.415-1.415-2.122-2.121zM32 10a2 2 0 10-4 0 2 2 0 004 0zm2 0a4 4 0 11-8 0 4 4 0 018 0zM17 19.789l2-.002c0 .353.738 1.214 1.229 1.213l2.539.008c.1 0 .238-.149.238-.307v-1.117L14 14.5l-9 5.084v1.222c0 .141.052.194.17.194h2.58c.501-.001 1.244-.85 1.25-1.208l2 .015c0 .341.745 1.194 1.238 1.193h3.512c.49-.002 1.25-.874 1.25-1.211zM15.754 23H12.24c-.832.002-1.642-.449-2.244-1.074-.602.623-1.41 1.072-2.244 1.074h-2.58c-1.237.003-2.171-.96-2.173-2.192v-2.392l11-6.212 11.004 6.212v.583l.002 1.7c.001 1.23-.994 2.306-2.239 2.309L20.228 23c-.833.002-1.639-.451-2.237-1.08-.604.625-1.412 1.078-2.237 1.08z" }),
            React.createElement("path", { d: "M13 23v11h2V23z" }),
            React.createElement("path", { d: "M37 35c-2.16 0-3.183-.387-5.175-1.646-2.283-1.441-3.638-1.954-6.243-1.954-2.606 0-3.963.512-6.253 1.954-2 1.258-3.027 1.646-5.188 1.646H3v2h11.141c2.606 0 3.963-.512 6.253-1.953 2-1.26 3.027-1.647 5.188-1.647 2.159 0 3.182.387 5.175 1.645C33.04 36.487 34.395 37 37 37v-2z" }))));
}

function PensionOccupational40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M33 27.015l5.119 9H1.849l5.151-9h26zm-1.163 2H8.16l-2.861 5H34.68l-2.843-5zM27.37 17.02l5.093 8.978H7.476l5.209-8.978H27.37zM20 3.202l6.961 12.82H13.137L20 3.202zm.013 4.214l-3.537 6.606H23.6l-3.587-6.606z", fill: "currentColor", fillRule: "nonzero" }))));
}

function PensionPrivate40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M33 27.01l5.119 9H1.849l5.151-9h26zm-1.163 2H8.16l-2.861 5H34.68l-2.843-5zM27.37 17.014l5.093 8.98H7.476l5.209-8.98H27.37zm-1.165 2H13.837l-2.888 4.98h18.08l-2.824-4.98zM20 3.197l6.961 12.82H13.137L20 3.197z", fill: "currentColor", fillRule: "nonzero" }))));
}

function PensionState40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M33 26.998l5.119 9H1.849l5.151-9h26zm-5.63-9.995l5.093 8.98H7.476l5.209-8.98H27.37zm-1.165 2H13.837l-2.888 4.98h18.08l-2.824-4.98zM20 3.186l6.961 12.82H13.137L20 3.186zm.013 4.214l-3.537 6.606H23.6L20.013 7.4z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Percent40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M30.164 2.45l1.672 1.1-23 35-1.672-1.1 23-35zM28 24a7 7 0 110 14 7 7 0 010-14zm0 2a5 5 0 100 10 5 5 0 000-10zM11 2a7 7 0 110 14 7 7 0 010-14zm0 2a5 5 0 100 10 5 5 0 000-10z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Phone40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M11 6.319C11 5.628 11.625 5 12.308 5h15.384C28.375 5 29 5.628 29 6.319V33.68c0 .691-.624 1.319-1.308 1.319H12.308A1.31 1.31 0 0111 33.681V6.32zM12.308 37h15.384C29.482 37 31 35.474 31 33.681V6.32C31 4.525 29.482 3 27.692 3H12.308C10.518 3 9 4.525 9 6.319V33.68A3.31 3.31 0 0012.308 37z", fillRule: "nonzero" }),
            React.createElement("path", { fillRule: "nonzero", d: "M29 12v-2H11v2zM29 30v-2H11v2z" }),
            React.createElement("path", { d: "M21.5 32.499a1.5 1.5 0 11-3 .001 1.5 1.5 0 013-.001z" }))));
}

function PhoneLandscape40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M34.67 25.339c0 5.808-3.227 8.7-9.245 8.426l2.09 2.089-1.415 1.414-4.384-4.384L26.1 28.5l1.414 1.414-1.859 1.86c4.72.192 6.926-1.789 7.012-6.166l.002-.27h2zM21.83 6.252a3.6 3.6 0 015.092 0l6.576 6.576a3.6 3.6 0 010 5.091L17.376 34.041a3.6 3.6 0 01-5.091 0l-6.576-6.576a3.6 3.6 0 010-5.091zm3.678 1.414a1.6 1.6 0 00-2.263 0L7.123 23.788a1.6 1.6 0 000 2.263l6.576 6.576a1.6 1.6 0 002.263 0l16.122-16.122a1.6 1.6 0 000-2.263zM11.439 26.439a1.5 1.5 0 112.122 2.122 1.5 1.5 0 01-2.122-2.122zM12.833 3l4.46 4.307-4.307 4.46-1.439-1.39 2.143-2.22c-4.29.079-6.27 2.109-6.28 6.29l.002.269-2 .035c-.093-5.387 2.632-8.313 7.833-8.574L11.444 4.44 12.833 3z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Pin40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M8 37h24v-2H8z" }),
            React.createElement("path", { d: "M20 2c7.68 0 14 6.192 14 13.737 0 3.622-1.491 7.052-4.097 9.732L20 35.172l-.7-.685-9.22-9.035C7.49 22.789 6 19.359 6 15.737 6 8.192 12.32 2 20 2zm8.486 22.058C30.723 21.756 32 18.82 32 15.738 32 9.305 26.585 4 20 4S8 9.306 8 15.737c0 3.083 1.277 6.02 3.496 8.304L20 32.372l8.486-8.314z" }),
            React.createElement("path", { d: "M20 19.503c-1.972 0-3.5-1.529-3.5-3.502 0-1.973 1.528-3.501 3.5-3.501s3.5 1.528 3.5 3.501h2c0-3.077-2.423-5.501-5.5-5.501s-5.5 2.424-5.5 5.501c0 3.078 2.423 5.502 5.5 5.502v-2z" }))));
}

function Pregnant40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M20.032 2c1.63 0 3.177.55 4.424 1.538l.23.19-1.306 1.515a5.13 5.13 0 101.66 2.762l-.03-.117h-3.563c-1.513 0-2.645-.366-3.418-1.018l-.15-.135c-.469-.446-.711-.919-.804-1.315l-.025-.13 1.975-.314c.003.018.062.148.233.31.352.335.967.568 1.954.6l.235.003h4.98l.345.912a7.12 7.12 0 01.39 2.328c0 1.61-.534 3.095-1.434 4.288 1.907.747 3.177 2.295 3.267 4.348L29 18v9c0 1.988-1.834 3.882-3.814 3.995L25 31h-7c-1.566 0-3.03-1.452-3-3.018.027-1.482 1.364-2.879 2.836-2.977L18 25h4.999L23 19.258h2V27h-7c-.434 0-.992.561-1 1.019-.008.404.466.904.9.973L18 29h7c.902 0 1.904-.96 1.994-1.87L27 27v-9c0-1.537-1.093-2.628-2.873-2.97l-.075-.012a7.096 7.096 0 01-4.02 1.24 7.098 7.098 0 01-3.267-.791 3.553 3.553 0 00-1.704 2.842l-.006.197v1.72a8.509 8.509 0 011.688-.222L17 20v2c-3.715 0-7 3.264-7 6.83 0 1.579.62 3.067 1.728 4.225 1.123 1.173 2.934 1.873 4.952 1.94L17 35v2c-.683 0-1.353-.06-2-.176V38h-2v-1.753c-1.05-.43-1.978-1.038-2.717-1.81C8.825 32.915 8 30.934 8 28.83c0-3.318 2.109-6.375 5.055-7.87v-2.454c0-1.694.764-3.241 2.002-4.272A7.13 7.13 0 0120.032 2zM27 32v6h-2v-6h2zm-5.176-21.676l1.414 1.415a4.192 4.192 0 01-2.972 1.23 4.193 4.193 0 01-2.798-1.065l-.175-.165 1.414-1.415c.419.419.976.644 1.559.644.518 0 1.016-.178 1.414-.511l.144-.133z", fill: "currentColor", fillRule: "nonzero" }))));
}

function RadioEnclosed40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M20 38c-9.941 0-18-8.059-18-18S10.059 2 20 2s18 8.059 18 18-8.059 18-18 18zm0-2c8.837 0 16-7.163 16-16S28.837 4 20 4 4 11.163 4 20s7.163 16 16 16z", fillRule: "nonzero" }),
            React.createElement("path", { d: "M20.06 22c-1.09 0-2.06-.875-2.06-2s.848-2 2.06-2c1.213 0 1.94.875 1.94 2s-.848 2-1.94 2z" }))));
}

function RetroPhone40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 37, height: 37, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M-1-1h40v40H-1z" }),
            React.createElement("path", { d: "M31.647 33.566c.02-.022.02-.022.039-.04l.09-.093.293-.298.873-.887c.697-.708 1.079-1.096 1.208-1.232.453-.47.662-.95.662-1.408 0-.45-.205-.906-.661-1.358l-4.436-4.45-.026-.026c-.421-.439-.855-.638-1.289-.638-.441 0-.895.204-1.352.66l-2.563 2.554c-1.653 1.626-5.273-.64-8.805-3.703-2.772-2.403-5.756-7.108-4.544-9.036l.144-.23.2-.182c.218-.199.599-.57 1.092-1.061l.049-.049c.43-.43 1.44-1.448 1.348-1.356.915-.915.915-1.845-.007-2.767-2.593-2.619-4.096-4.12-4.462-4.46-.421-.417-.86-.61-1.3-.61-.451 0-.916.202-1.334.603L4.102 6.285A3.901 3.901 0 002.928 8.79c-.132 1.612.208 3.223.917 5.133 1.23 3.317 3.074 6.394 5.839 9.716 3.36 4.012 7.394 7.17 11.985 9.387 2.434 1.153 4.352 1.781 6.35 1.91.211.01.32.014.413.014 1.31 0 2.338-.439 3.18-1.346.043-.06.04-.053.035-.038zm-.516-11.178l4.436 4.45c.816.808 1.245 1.769 1.245 2.77 0 .994-.42 1.963-1.22 2.795-.348.363-2.49 2.528-2.497 2.544-1.228 1.332-2.796 2.003-4.663 2.003-.161 0-.339-.008-.509-.017-2.771-.177-5.252-1.22-7.11-2.1-4.865-2.35-9.123-5.685-12.662-9.909-2.917-3.505-4.873-6.776-6.182-10.305C1.436 13.18.741 10.984.935 8.626A5.907 5.907 0 012.69 4.87l2.763-2.786C6.26 1.31 7.213.897 8.199.897s1.923.412 2.707 1.187c.35.323 1.843 1.815 4.477 4.474 1.697 1.696 1.697 3.893 0 5.59-.227.225-1.891 1.921-2.554 2.527-.404.643 2.077 4.655 4.16 6.461 2.085 1.807 5.748 4.128 6.094 3.788l2.554-2.544c.816-.816 1.77-1.244 2.763-1.244 1.002 0 1.947.436 2.731 1.252z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Rv40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M14 24a3 3 0 110 6 3 3 0 010-6zm15 0a3 3 0 110 6 3 3 0 010-6zm5.744-14l3.305 11.016L35.72 28H33v-2h1.279l1.672-5.017L33.256 12H5.819l-1.6 8H7v2H4.386l1.334 4H10v2H4.28l-2.313-6.936L4.18 10h30.564zM14 26a1 1 0 100 2 1 1 0 000-2zm15 0a1 1 0 100 2 1 1 0 000-2zm-4 0v2h-7v-2h7zm0-12v11h-2v-9h-3v9h-2V14h7zm7.244 0l2.1 7H27v-7h5.244zm-1.488 2H29v3h2.656l-.9-3zM15 14v5H7v-5h8zm-2 2H9v1h4v-1z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Save40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M7.019 13.697a1.675 1.675 0 01-2.481 0c-.723-.764-.723-2.025 0-2.789L3.083 9.534c-1.451 1.535-1.451 4.002 0 5.537a3.675 3.675 0 005.388 0L7.02 13.697z" }),
            React.createElement("path", { d: "M27 27.721l.698-.221c2.646-.838 4.41-2.692 5.264-5.767l.203-.733H36v-3h-3l-.249-.637c-.985-2.527-2.723-4.246-5.107-5.156L27 11.962V7.47a5.668 5.668 0 00-3.062 1.465 6.062 6.062 0 00-.918 1.062 3.71 3.71 0 00-.258.429l-.27.574h-6.635C11.115 11 7 15.105 7 19.853c0 3.416 1.508 5.673 4.508 7.44l.492.29V32h3v-4h9v4h3v-4.279zm2 1.438V34h-7v-4h-5v4h-7v-5.285c-3.254-2.075-5-4.875-5-8.862C5 14 10.012 9 15.857 9h5.416a7.927 7.927 0 011.311-1.537c1.4-1.288 3.206-2.066 5.416-2.066h1v5.21c2.388 1.078 4.214 2.898 5.346 5.393H38v7h-3.336c-1.03 3.047-2.958 5.096-5.664 6.16z" }),
            React.createElement("path", { d: "M23 13h-7v2h7z" }))));
}

function Shield40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M29.545 2c0 2.88 2.728 5.76 5.455 5.76v12.96C35 27.44 30 33.2 20 38 10 33.2 5 27.44 5 20.72V7.76c2.727 0 5.455-2.88 5.455-5.76h19.09zm-1.7 2h-15.69C11.417 6.479 9.39 8.624 7 9.425V20.72c0 5.625 4.21 10.651 13 15.053 8.79-4.402 13-9.428 13-15.053V9.425C30.611 8.624 28.584 6.479 27.844 4zm-3.865 9.293l1.415 1.414-3.793 3.793 3.793 3.793-1.415 1.414-3.793-3.793-3.792 3.793-1.415-1.414 3.793-3.793-3.793-3.793 1.415-1.414 3.792 3.792 3.793-3.792z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Smalltruck40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M11.071 25.071a4 4 0 110 8 4 4 0 010-8zM30 25a4 4 0 110 8 4 4 0 010-8zM11.07 27.071a2 2 0 100 4 2 2 0 000-4zM30 27a2 2 0 100 4 2 2 0 000-4zm3.677-14L38 23.807V30h-3v-2h1v-3.806L32.323 15H30v-2h3.677zM29 6v18H4.387l1.333 4H6v2H4.28l-2.001-6H2V6h27zm-4 22v2h-9v-2h9zm2-20H4v14h23V8zm-5 11v2h-2v-2h2zm-7 0v2h-2v-2h2zm-6 0v2H7v-2h2z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Snailmail40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
                React.createElement("path", { d: "M2 34h36v-2H2zM28 4V2h-5v13.98h2V4z" }),
                React.createElement("path", { d: "M25 8H9.783v2H25zM19 33v5h2v-5z" }),
                React.createElement("path", { d: "M16.263 32.091v-17.96a6.131 6.131 0 00-12.263 0V30h2V14.131a4.131 4.131 0 018.263 0v17.96h2zM37.98 32.091v-17.96A6.131 6.131 0 0031.849 8H27v2h4.849a4.131 4.131 0 014.131 4.131v17.96h2z" }),
                React.createElement("path", { d: "M10 18h5v-2H8v14h6.868v-2H10z" })))));
}

function Snowmobile40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M19.787 23C21.591 23 23 24.592 23 26.5S21.59 30 19.787 30H5.213C3.41 30 2 28.408 2 26.5S3.41 23 5.213 23zm2.92-12.707L34.425 22.01l-2.904 2.818-.141.136 2.648 2.648.012-.007c.205-.143.439-.35.764-.677l.73-.769 1.745-1.853 1.442 1.386-2.167 2.304c-.651.683-1.071 1.065-1.528 1.355-.748.475-1.453.628-2.74.646L32 30h-7v-2h6.585l-1.81-1.81a6.54 6.54 0 01-1.069.493 5.076 5.076 0 01-1.48.308l-.2.009c-.046 0-.184.002-.406.002L23.998 27l.004-2h2.971c.347-.009.643-.052 1.065-.202.603-.214 1.226-.59 1.865-1.186l1.671-1.623L26 16.415 22.414 20H8c-.623 0-1.319.422-1.494 1.036l-.293 1.05-1.927-.536.296-1.063c.428-1.498 1.846-2.409 3.237-2.482L8 18h13.584v-.001L20.585 17H18v-2h3.414L23 16.584l1.585-1.585-3.291-3.292 1.414-1.414zM19.787 25H5.213C4.573 25 4 25.646 4 26.5S4.572 28 5.213 28h14.574c.641 0 1.213-.646 1.213-1.5s-.572-1.5-1.213-1.5z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Star40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 .833h40v39.024H0z" }),
            React.createElement("path", { d: "M30.104 34.406l-5.402-11.698.692-.479 8.483-5.86H23.219l-.23-.681-3.147-9.352-3.211 10.033H5.99l9.19 6.285-.372.774-5.256 10.926 10.233-6.352 10.318 6.404zm-2.88-11.01l5.929 12.842a1.11 1.11 0 01-.036 1.06 1.104 1.104 0 01-1.534.38l-11.797-7.322L8 37.671c-.338.21-.764.221-1.114.029-.53-.292-.724-.953-.461-1.456l6.21-12.91-10.209-6.982a1.11 1.11 0 01.68-1.983H15.17L18.768 3.13a1.105 1.105 0 012.1-.017l3.788 11.255h12.08c.349 0 .676.166.884.444.359.48.271 1.162-.252 1.573l-10.145 7.01z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Sustainability40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M35.576 4.72l-.5.033.5-.04-.015-.183c-.035-.432-.064-.79-.082-1.058L35.376 2l-2.263.998C29.936 4.38 22.497 7.616 19.967 9.932a9.557 9.557 0 00-2.531 10.333l.17.47 1.947-.704-.17-.47a7.49 7.49 0 011.98-8.101c2.18-1.995 8.89-4.96 12.165-6.385.277 3.454.87 11.063.13 13.92a7.431 7.431 0 01-3.469 4.58 7.508 7.508 0 01-5.742.787 7.97 7.97 0 01-1.331-.504L24.77 21.2l6.127-1.496-.49-2.011-4.07.994 3.157-5.067-1.756-1.094-3.262 5.23-1.003-4.114-2.01.49 1.482 6.083-5.926 9.507-3.027-4.161a4.64 4.64 0 00.315-.353 6.005 6.005 0 001.27-4.4c-.165-1.45-.859-2.73-1.957-3.6-1.359-1.08-4.786-2.198-7.13-2.963-.449-.146-.81-.263-1.032-.343L4.071 13.4l.001 1.476c0 .233-.01.602-.023 1.06-.083 3.023-.12 6.104.395 7.642.687 2.047 2.685 3.48 5.091 3.65l.5.035.144-2.066-.499-.036c-1.285-.09-2.795-.818-3.273-2.242-.418-1.247-.345-4.81-.297-6.62 1.803.589 5.192 1.713 6.224 2.532.663.527 1.084 1.312 1.186 2.21a3.918 3.918 0 01-.78 2.799l-2.256-3.102-1.674 1.217 7.028 9.663-3.56 5.712 1.757 1.094 7.98-12.801a10.09 10.09 0 001.904.74c2.455.65 5.113.29 7.316-1a9.493 9.493 0 004.426-5.846c.843-3.248.215-11.05-.086-14.797", fill: "currentColor", fillRule: "evenodd" })));
}

function Tablet40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("g", { transform: "translate(6 3)", fill: "currentColor" },
                React.createElement("path", { d: "M2-1h24a3 3 0 013 3v30a3 3 0 01-3 3H2a3 3 0 01-3-3V2a3 3 0 013-3zm0 2a1 1 0 00-1 1v30a1 1 0 001 1h24a1 1 0 001-1V2a1 1 0 00-1-1H2z", fillRule: "nonzero" }),
                React.createElement("circle", { cx: 14, cy: 30.5, r: 1.5 }),
                React.createElement("path", { fillRule: "nonzero", d: "M9.293 3.293l-6 6 1.414 1.414 6-6zM3.707 6.707l3-3-1.414-1.414-3 3z" })))));
}

function Tag40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M22.514 5.015L5.46 22.07l12.488 12.488 17.054-17.055.005-7.39-5.097-5.096-7.396-.002zm14.493 4.271l-.005 9.046-19.054 19.054L2.63 22.07 21.686 3.015l9.053.002 6.268 6.27z" }),
            React.createElement("path", { d: "M26 16c1.093 0 2-.907 2-2s-.907-2-2-2-2 .907-2 2c0 .431.018.574.088.714l.054.131c.042.124.144.285.295.44.41.478.916.715 1.563.715zm-4-2c0-2.197 1.803-4 4-4s4 1.803 4 4-1.803 4-4 4c-1.237 0-2.296-.496-3.03-1.357a3.118 3.118 0 01-.7-1.095C22.042 15.073 22 14.7 22 14z" }))));
}

function Thumbup40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M22.231 2.36a1 1 0 011.355-.17c.86.622 1.454 1.86 1.898 3.731a1 1 0 01-.009.497L23.113 15h13.91a1 1 0 011 1v6a1 1 0 01-.073.373l-6.022 15A1 1 0 0131 38H15a1 1 0 01-.555-.168l-3-2A1 1 0 0111 35V16.222a1 1 0 01.231-.64zm.733 2.247L13 16.584v17.88L15.303 36h15.02l5.7-14.193V17H21.8a1 1 0 01-.964-1.265l2.642-9.597a9.146 9.146 0 00-.514-1.53zM9.022 17v19h-7V17h7zm-2 2h-3v15h3V19z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Tractor40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M12.163 22.479a6.44 6.44 0 110 12.88 6.44 6.44 0 010-12.88zm9.301-17.33l4.177 13.249h3.108v-7.143c0-.138-.022-.299-.062-.451a1.721 1.721 0 00-1.519-1.28l-.146-.005v-2a3.721 3.721 0 013.6 2.781c.061.233.102.477.118.716l.009.239v7.143h4.165l.068 7.413a5.08 5.08 0 11-7.487 4.108h-6.812v-1a8.52 8.52 0 00-8.52-8.52 8.524 8.524 0 00-8.125 5.947l-.076.252-1.924-.543a10.504 10.504 0 013.685-5.456V5.15h15.741zm-9.301 19.33a4.44 4.44 0 100 8.88 4.44 4.44 0 000-8.88zm20.4 2.72a3.08 3.08 0 100 6.16 3.08 3.08 0 000-6.16zM12.423 7.147l-4.701.001.001 12.232a10.495 10.495 0 014.44-.981c5.429 0 9.897 4.112 10.46 9.392l.012.127h5.428a5.08 5.08 0 014.914-2.703l-.046-4.817h-8.756l-4.177-13.25h-5.575v8.926h-2V7.147z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Trailer40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M11 19a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4zm27-6v3h-2v-1h-7v7H16v-2l11-.001V17h-2v-.001H5v5L6 22v2H3v-6H2v-3h36z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Travel40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M19.102 26.996l5.253 1.136.422-1.955-5.748-1.243-5.994 1.752 3.424 3.213 1.368-1.459-.87-.817z" }),
            React.createElement("path", { d: "M17.142 35.328l-9.115-1.036-4.804-4.513 6.264-1.763 3.16 1.701 2.348-.686 16.75-4.894 5.648 1.214.167.572a3.346 3.346 0 01-2.273 4.15l-7.302 2.135-5.04 5.37-6.013 1.758 1.078-4.248-.868.24zm1.618-3.195l1.939.492-.967 3.809 2.127-.622 5.04-5.37.263-.077 7.564-2.211c.531-.155.894-.609.959-1.124l-3.866-.831-16.263 4.752-3.135.916-3.17-1.707-2.078.585 1.74 1.634 8.07.918 1.594-.44.183-.724zM23.989 21a.995.995 0 00-.752.354 1 1 0 10.752-.354zm.046 4a3 3 0 11-.07-6 3 3 0 01.07 6zM19.92 6.733C19.448 4.037 16.966 2 14.001 2c-2.966 0-5.448 2.037-5.92 4.733C5.214 7.15 3 9.485 3 12.333 3 15.479 5.7 18 9 18h1.965v-2H9c-2.224 0-4-1.658-4-3.667s1.776-3.666 4-3.666h1v-1C10 5.657 11.776 4 14.001 4c2.224 0 4 1.658 4 3.667v1h1c2.224 0 4 1.657 4 3.666 0 .971-.414 1.884-1.147 2.57l1.364 1.46c1.131-1.055 1.783-2.492 1.783-4.03 0-2.847-2.214-5.183-5.08-5.6z" }),
            React.createElement("path", { d: "M19 17a2 2 0 10-4 0 2 2 0 004 0zm2 0a4 4 0 11-8 0 4 4 0 018 0z" }))));
}

function Twitter40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M5 5v30h30V5H5zM3 3h34v34H3V3z", fillRule: "nonzero" }),
            React.createElement("path", { d: "M16.764 26.797c6.407 0 9.91-5.307 9.91-9.91l-.003-.288a.31.31 0 01.121-.257c.52-.394.986-.86 1.378-1.382.07-.092-.024-.218-.132-.177a6.992 6.992 0 01-1.526.385c-.025.003-.038-.031-.016-.045a3.504 3.504 0 001.295-1.497.141.141 0 00-.195-.183 6.996 6.996 0 01-1.709.623.307.307 0 01-.279-.08 3.484 3.484 0 00-5.866 3.076.173.173 0 01-.181.201 9.884 9.884 0 01-6.75-3.383.213.213 0 00-.354.047 3.478 3.478 0 001.136 4.297c.026.019.012.06-.02.059a3.453 3.453 0 01-1.26-.325.141.141 0 00-.2.138 3.487 3.487 0 002.664 3.188c.032.008.031.051 0 .058a3.487 3.487 0 01-1.258.06.116.116 0 00-.125.156 3.49 3.49 0 002.886 2.214c.103.01.14.142.055.203a6.988 6.988 0 01-4.079 1.306h-.071c-.192 0-.256.256-.088.346a9.849 9.849 0 004.667 1.17" }))));
}

function Umbrella40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M27.5 16.478c2.3 0 4.44.804 6.125 2.194-1.477-6.124-7.136-10.769-13.724-10.769-6.609 0-12.145 4.606-13.554 10.812 1.705-1.408 3.88-2.237 6.153-2.237a9.603 9.603 0 017.503 3.588c1.806-2.214 4.572-3.588 7.497-3.588zm0 2c-2.723 0-5.292 1.519-6.634 3.847h-1.732c-1.362-2.362-3.849-3.847-6.634-3.847-2.723 0-5.292 1.519-6.634 3.847L4 21.826c0-8.82 7.125-15.923 15.901-15.923C28.678 5.903 36 13.104 36 21.826l-1.866.5c-1.362-2.363-3.849-3.848-6.634-3.848zM19.004 33.43c0 1.227-.978 2.215-2.182 2.215s-2.182-.988-2.182-2.216h-2c0 2.327 1.869 4.216 4.182 4.216 2.313 0 4.182-1.889 4.182-4.216h-2z" }),
            React.createElement("path", { d: "M19 21.336v12.34h2v-12.34zM21 6.95V2h-2v4.95z" }))));
}

function User40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M31 23c0 7.194-5.825 13-13 13-7.151 0-13-5.849-13-13 0-7.194 5.825-13 13-13 3.83 0 7.405 1.671 9.895 4.545l1.511-1.31C26.54 9.928 22.417 8 18 8 9.722 8 3 14.7 3 23c0 8.256 6.744 15 15 15 8.278 0 15-6.7 15-15 0-1.674-.272-3.322-.788-4.871l-.173-.472-.24-.655H21.282c-2.885 0-4.879-.76-6.185-2.002a5.08 5.08 0 01-1.003-1.307c-.132-.25-.199-.429-.218-.502l-1.934.512c.195.735.73 1.751 1.777 2.746 1.687 1.604 4.177 2.553 7.563 2.553h9.111C30.788 20.262 31 21.62 31 23z" }),
            React.createElement("path", { d: "M13 22.61c0-.335.256-.61.5-.61s.5.275.5.61h2C16 21.2 14.881 20 13.5 20S11 21.2 11 22.61h2zM22 22.61c0-.335.256-.61.5-.61s.5.275.5.61h2C25 21.2 23.881 20 22.5 20S20 21.2 20 22.61h2zM22.305 27.894A6.176 6.176 0 0118 29.626a6.176 6.176 0 01-4.305-1.732l-1.39 1.439A8.175 8.175 0 0018 31.626a8.175 8.175 0 005.695-2.293l-1.39-1.439zM25.363 6.478l.87-4.062-1.956-.418-.87 4.062zM30.481 9.068l2.532-3.32-1.591-1.213-2.531 3.321zM33.395 13.643l3.719-1.946-.928-1.772-3.718 1.946z" }))));
}

function UserHappy40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M20 2c5.099 0 9.858 2.133 13.244 5.81l-1.471 1.355A15.952 15.952 0 0020 4C11.163 4 4 11.163 4 20s7.163 16 16 16 16-7.163 16-16c0-1.836-.31-3.629-.906-5.321h-12.26c-4.293 0-8.908-2.485-10.154-5.885l1.878-.688c.92 2.512 4.749 4.573 8.275 4.573h13.63l.251.628A17.953 17.953 0 0138 20c0 9.941-8.059 18-18 18S2 29.941 2 20 10.059 2 20 2zm6.28 25.305l1.44 1.39C25.69 30.795 22.934 32 19.993 32c-2.934 0-5.685-1.2-7.712-3.293l1.436-1.391C15.374 29.025 17.61 30 19.994 30c2.39 0 4.63-.98 6.287-2.695zM26 17a3 3 0 013 3h-2a1 1 0 00-2 0h-2a3 3 0 013-3zm-12 0a3 3 0 013 3h-2a1 1 0 00-2 0h-2a3 3 0 013-3z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Wallet40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M33.857 5v2H5a1 1 0 00-1 1v25a1 1 0 001 1h29v-5.96h2V36H5a3 3 0 01-3-3V8a3 3 0 013-3h28.857zM36 9v8h2v11h-8v-2h6v-7h-6v-2h4v-6H6V9h30z", fill: "currentColor", fillRule: "nonzero" }))));
}

function World40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("g", { fill: "currentColor" },
                React.createElement("path", { d: "M20 38c9.941 0 18-8.059 18-18S29.941 2 20 2 2 10.059 2 20s8.059 18 18 18zm0-2c-8.837 0-16-7.163-16-16S11.163 4 20 4s16 7.163 16 16-7.163 16-16 16z", fillRule: "nonzero" }),
                React.createElement("path", { fillRule: "nonzero", d: "M18.102 4.927l-4.287 1.8-1.97 3.247 1.827 3.311 3.241-1.435H20v-2h-3.51l-1.952.865-.383-.693 1.033-1.701 4.914-2.065V3h-2zM12.737 16.18l.126-.112-.068.05-.058.062zm-1.908 1.417l2.058 6.352H16.5l.646-.163v.612l1.365 1.692-.687 1.94 2.189 6.25 4.493-1.6.666-2.25 2.127-1.96v-3.14l3.347-4.04-3.605-1.436-1.992-4.358-3.476-1.64-1.223.808-1.895-.615-.618 1.902 2.811.913 1.09-.72 1.796.849 2.022 4.422 1.796.716-2.053 2.478v2.984l-1.888 1.74-.534 1.804-1.641.584-1.291-3.687.824-2.33-1.623-2.012V21.22l-2.894.73H14.34l-1.17-3.612.894-.672.126-.112 1.764-1.867-1.454-1.374-1.706 1.806-1.966 1.478zM28.044 17.523l3.52-1.515.442-1.225.344-.137 3.86 4.968 1.58-1.228-4.782-6.154-2.577 1.026-.454 1.256-.915.394-1.604-3.57-3.972-2.212-.972 1.748 3.392 1.888z" }),
                React.createElement("path", { d: "M28 31.157l.56-1.866L30 27v2.712L29 32z" }),
                React.createElement("path", { fillRule: "nonzero", d: "M11 27.34v-3.184l-2.93-1.444-2.866-1.82-2.545.923.682 1.88 1.62-.587 2.083 1.322.094.052L9 25.4v1.536l-1.15 2.731V33h2v-2.929zM6.943 12.368l-1.613 4.01-2.575.653.49 1.938 3.562-.9 2.25-5.597L7.96 8.719l-1.92.562z" })))));
}

function Wristwatch40(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 40, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h40v40H0z" }),
            React.createElement("path", { d: "M12.067 10.996L13.567 2h12.917l1.45 8.998A11.971 11.971 0 0132 20c0 3.582-1.57 6.797-4.057 8.996l-1.495 8.96H13.53l-1.44-8.93A11.972 11.972 0 018 20c0-3.586 1.573-6.805 4.067-9.004zm2.293-1.59A11.947 11.947 0 0120 8c2.044 0 3.969.511 5.654 1.413L24.78 4h-9.52l-.9 5.405zm.011 21.195l.864 5.355h9.519l.895-5.366C23.965 31.49 22.042 32 20 32c-2.034 0-3.95-.506-5.629-1.4zM20 30c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm5.724-7.1l-1.172 1.622L19 20.512V11.5h2v7.989l4.724 3.412z", fill: "currentColor", fillRule: "nonzero" }))));
}

function BankidMc70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("g", { fillRule: "nonzero" },
                React.createElement("path", { d: "M24.368 37.202l2.338-15.63h-2.498c-1.169 0-2.674-.696-3.117-1.973-.142-.432-.478-1.916 1.452-3.363.691-.507 1.134-1.07 1.222-1.503.089-.45-.017-.845-.318-1.146-.425-.432-1.258-.676-2.32-.676-1.79 0-3.047 1.09-3.171 1.878-.089.583.336 1.052.708 1.353 1.116.883 1.382 2.16.691 3.363-.708 1.24-2.25 2.048-3.897 2.067h-2.55c-.213 1.521-3.684 24.855-3.95 26.696h13.833c.124-.827.762-5.242 1.63-11.066h-.053z", fill: "#479CBE" }),
                React.createElement("path", { d: "M43.442 8H28.675l-1.97 12.605h2.508c1.375 0 2.675-.637 3.232-1.555.186-.3.26-.562.26-.805 0-.525-.353-.918-.706-1.18-.965-.73-1.17-1.498-1.17-2.042 0-.112 0-.206.019-.3.204-1.329 1.987-2.771 4.346-2.771 1.412 0 2.49.337 3.14.955.575.543.798 1.311.631 2.116-.204.956-1.152 1.742-1.69 2.136-1.43 1.011-1.245 1.891-1.152 2.153.297.787 1.43 1.293 2.303 1.293h3.808v.019c5.201.037 7.987 2.453 7.114 8.072-.817 5.225-4.792 7.473-9.529 7.51l-1.876 12.062h2.768c11.684 0 21.23-7.567 23.107-19.516C66.14 13.918 56.815 8 43.442 8z", fill: "#00A5C3" }),
                React.createElement("path", { d: "M43.442 8H28.675l-1.97 12.605h2.508c1.375 0 2.675-.637 3.232-1.555.186-.3.26-.562.26-.805 0-.525-.353-.918-.706-1.18-.965-.73-1.17-1.498-1.17-2.042 0-.112 0-.206.019-.3.204-1.329 1.987-2.771 4.346-2.771 1.412 0 2.49.337 3.14.955.575.543.798 1.311.631 2.116-.204.956-1.152 1.742-1.69 2.136-1.43 1.011-1.245 1.891-1.152 2.153.297.787 1.43 1.293 2.303 1.293h3.808v.019c5.201.037 7.987 2.453 7.114 8.072-.817 5.225-4.792 7.473-9.529 7.51l-1.876 12.062h2.768c11.684 0 21.23-7.567 23.107-19.516C66.14 13.918 56.815 8 43.442 8z", fill: "#235971" }),
                React.createElement("g", { fill: "#235971" },
                    React.createElement("path", { d: "M7.599 52.235h5.861c2.5 0 3.106 1.331 2.922 2.547-.147.983-.79 1.717-1.893 2.199 1.397.56 1.948 1.427 1.746 2.797-.257 1.717-1.672 2.99-3.528 2.99h-6.67l1.562-10.533zm3.877 4.36c1.14 0 1.672-.637 1.782-1.389.11-.81-.239-1.37-1.378-1.37h-1.01l-.405 2.759h1.01zm-.625 4.553c1.176 0 1.856-.502 2.021-1.524.129-.888-.349-1.408-1.488-1.408h-1.158l-.44 2.951h1.065v-.019zM24.449 62.846c-1.525.115-2.26-.058-2.628-.753a4.86 4.86 0 01-2.664.791c-1.728 0-2.334-.945-2.169-1.987.074-.501.35-.984.79-1.389.956-.868 3.308-.984 4.227-1.64.073-.733-.202-1.003-1.066-1.003-1.01 0-1.856.347-3.308 1.39l.35-2.393c1.25-.945 2.462-1.39 3.858-1.39 1.783 0 3.363.773 3.069 2.818l-.35 2.315c-.128.81-.091 1.06.773 1.08l-.882 2.16zm-2.646-3.627c-.809.54-2.316.443-2.481 1.562-.074.521.239.907.735.907.478 0 1.066-.212 1.544-.56-.037-.192-.019-.385.036-.752l.166-1.157zM27.297 54.608h3.05l-.165 1.061c.974-.868 1.709-1.196 2.664-1.196 1.709 0 2.5 1.1 2.224 2.894l-.79 5.382h-3.05l.66-4.456c.13-.81-.11-1.196-.698-1.196-.477 0-.918.27-1.341.868l-.698 4.765h-3.05l1.194-8.122zM37.44 52.235h3.05l-.772 5.17 2.922-2.797h3.767l-3.749 3.473 3.014 4.668h-3.84l-2.316-3.762h-.036l-.552 3.762h-3.05z" })),
                React.createElement("g", { fill: "#479CBE" },
                    React.createElement("path", { d: "M48.954 52.236h3.311L50.81 62.94h-3.311zM53.878 52.236h4.732c3.658 0 4.716 3.005 4.37 5.5-.33 2.435-2.03 5.205-5.236 5.205h-5.34l1.474-10.705zm3.068 8.152c1.612 0 2.497-.904 2.757-2.81.19-1.414-.191-2.808-1.977-2.808h-.884l-.763 5.618h.867z" }))))));
}

function PensionOccupationalInMc70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("path", { d: "M22.753 36h-2.28l2.737-5H46.5l8.475 15H15l2.737-5h2.28l-1.642 3h33.173l-6.214-11H24.395l-1.642 3z", fill: "#E30613", fillRule: "nonzero" }),
            React.createElement("path", { fill: "#E30613", fillRule: "nonzero", d: "M25.322 36.136l1.435 1.388H15v1.988h11.757l-1.435 1.444 1.435 1.386 3.761-3.824-3.761-3.768z" }),
            React.createElement("path", { d: "M35.003 11.096L25.857 28h18.351l-9.205-16.904zM14.734 49L8.69 60H61.3l-6.121-11H14.734z", stroke: "#005AA0", strokeWidth: 2 }))));
}

function PensionOccupationalMc70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("g", { strokeWidth: 2 },
                React.createElement("path", { d: "M23.95 32l-7.121 13h36.574l-7.341-13H23.95z", stroke: "#E30613" }),
                React.createElement("path", { d: "M35.003 11.216L25.863 28h18.34l-9.2-16.784zM14.734 49L8.69 60H61.3l-6.121-11H14.734z", stroke: "#005AA0" })))));
}

function PensionOccupationalOutMc70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("path", { d: "M14.734 49L8.69 60H61.3l-6.121-11H14.734z", stroke: "#005AA0", strokeWidth: 2 }),
            React.createElement("path", { d: "M47.222 36h2.28l-2.737-5H23.474L15 46h39.975l-2.737-5h-2.28l1.642 3H18.427l6.214-11H45.58l1.642 3z", fill: "#E30613", fillRule: "nonzero" }),
            React.createElement("path", { d: "M35.003 11.096L25.857 28h18.351l-9.205-16.904z", stroke: "#005AA0", strokeWidth: 2 }),
            React.createElement("path", { fill: "#E30613", fillRule: "nonzero", d: "M54.322 36.136l1.435 1.388H44v1.988h11.757l-1.435 1.444 1.435 1.386 3.761-3.824-3.761-3.768z" }))));
}

function PensionPrivateInMc70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("path", { d: "M29.634 19l.296-.544L35 9l10.891 20H24.18l2.512-4.588.224-.412h2.277l-1.65 3.032h14.975l-7.511-13.725L31.91 19h-2.276z", fill: "#E30613", fillRule: "nonzero" }),
            React.createElement("path", { d: "M14.142 48L7 60.894h56L55.767 48H14.142zm40.453 2l4.99 8.894h-49.19L15.32 50h39.274z", fill: "#005AA0", fillRule: "nonzero" }),
            React.createElement("path", { d: "M23.809 32l-7.121 13h36.574L45.92 32H23.809z", stroke: "#005AA0", strokeWidth: 2 }),
            React.createElement("path", { fill: "#E30613", fillRule: "nonzero", d: "M33.322 19.136l1.435 1.388H23v1.988h11.757l-1.435 1.444 1.435 1.386 3.761-3.824-3.761-3.768z" }))));
}

function PensionPrivateMc70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("g", { strokeWidth: 2 },
                React.createElement("path", { d: "M23.95 32l-7.121 13h36.574l-7.341-13H23.95z", stroke: "#005AA0" }),
                React.createElement("path", { d: "M35.003 11.216L25.863 28h18.34l-9.2-16.784z", stroke: "#E30613" }),
                React.createElement("path", { d: "M14.734 49L8.69 60H61.3l-6.121-11H14.734z", stroke: "#005AA0" })))));
}

function PensionPrivateOutMc70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("path", { d: "M14.142 48L7 60.894h56L55.767 48H14.142zm40.453 2l4.99 8.894h-49.19L15.32 50h39.274z", fill: "#005AA0", fillRule: "nonzero" }),
            React.createElement("path", { d: "M23.809 32l-7.121 13h36.574L45.92 32H23.809z", stroke: "#005AA0", strokeWidth: 2 }),
            React.createElement("path", { d: "M43.25 24L46 29H24l2.545-4.618 1.675-3.06 1.607-2.936L35 9l5.5 10h-2.337l-3.193-5.796L27.41 27.02H42.58L40.918 24h2.332z", fill: "#E30613", fillRule: "nonzero" }),
            React.createElement("path", { fill: "#E30613", fillRule: "nonzero", d: "M45.143 19.005l1.435 1.389H34.821V22.38h11.757l-1.435 1.444 1.435 1.386 3.761-3.824-3.76-3.768z" }))));
}

function TabBank70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fillRule: "nonzero", fill: "none" },
            React.createElement("path", { d: "M9 18.998v32.004c0 .547.45.998.991.998h50.018a.997.997 0 00.991-.998V18.998c0-.547-.45-.998-.991-.998H9.991a.997.997 0 00-.991.998zm-2 0A2.997 2.997 0 019.991 16h50.018A3.001 3.001 0 0163 18.998v32.004A2.997 2.997 0 0160.009 54H9.991A3.001 3.001 0 017 51.002V18.998z", fill: "#005AA0" }),
            React.createElement("path", { fill: "#005AA0", d: "M63 23H7.144v2H63zM62.056 30H8.146v2h53.91zM32 41H13v2h19z" }),
            React.createElement("path", { fill: "#E30613", d: "M52 35h-2v7h7v-2h-5zM24 46H13v2h11z" }))));
}

function TabCar70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fillRule: "nonzero", fill: "none" },
            React.createElement("path", { d: "M47.093 25.963a42.929 42.929 0 00-2.728-1.937c-1.792-1.163-3.598-2.105-5.481-2.8-4.474-1.651-10.065-1.584-17.25-.133a33.977 33.977 0 00-3.892 1.072c-2.026.678-4.164 1.558-6.362 2.59a86.794 86.794 0 00-6.994 3.693c-.283.167-.482.288-.589.353l-.348.215L.9 39.412l3.894 4.183 1.464-1.363L3.1 38.84l2.095-8.546.208-.124a84.815 84.815 0 016.827-3.605c2.133-1.001 4.2-1.852 6.147-2.504a31.999 31.999 0 013.657-1.008c6.85-1.384 12.104-1.447 16.157.05 1.733.639 3.41 1.513 5.085 2.6a40.99 40.99 0 012.603 1.85c.308.235 1.603 1.246 1.888 1.458.313.237 7.05 1.266 8.955 1.64 3.253.64 5.667 1.324 6.971 2.043 2.586 1.387 3.86 3.24 3.86 5.53v5.205L63 43v2h6.553v-6.777c0-3.08-1.717-5.576-4.904-7.286-1.533-.845-4.092-1.57-7.541-2.248-1.756-.345-3.41-.62-5.801-.985l-1.091-.166a75.75 75.75 0 01-.849-.135c-.241-.04-.42-.072-.538-.097-.428-.327-1.451-1.125-1.736-1.343z", fill: "#005AA0" }),
            React.createElement("path", { fill: "#005AA0", d: "M46 43H23v2h23zM7 42.5c0-4.178 3.28-7.5 7.455-7.5C18.642 35 22 38.335 22 42.5S18.642 50 14.455 50c-2.876 0-5.429-1.613-6.746-4.237C7.253 44.63 7 43.55 7 42.5zm2 0c0 .764.196 1.603.53 2.44.947 1.88 2.813 3.06 4.925 3.06C17.54 48 20 45.557 20 42.5S17.54 37 14.455 37C11.39 37 9 39.42 9 42.5z" }),
            React.createElement("path", { d: "M14.5 39c1.923 0 3.5 1.577 3.5 3.5S16.423 46 14.5 46a3.513 3.513 0 01-3.5-3.5c0-1.026.454-2.022 1.238-2.619A3.257 3.257 0 0114.5 39zM13 42.5c0 .819.681 1.5 1.5 1.5s1.5-.681 1.5-1.5-.681-1.5-1.5-1.5c-.367 0-.682.128-.906.352l-.126.107c-.276.197-.468.607-.468 1.041zM47 42.5c0-4.178 3.28-7.5 7.455-7.5C58.642 35 62 38.335 62 42.5S58.642 50 54.455 50c-2.876 0-5.429-1.613-6.746-4.237C47.253 44.63 47 43.55 47 42.5zm2 0c0 .764.196 1.603.53 2.44.947 1.88 2.813 3.06 4.925 3.06C57.54 48 60 45.557 60 42.5S57.54 37 54.455 37C51.39 37 49 39.42 49 42.5z", fill: "#005AA0" }),
            React.createElement("path", { d: "M54.5 39c1.923 0 3.5 1.577 3.5 3.5S56.423 46 54.5 46a3.513 3.513 0 01-3.5-3.5c0-1.026.454-2.022 1.238-2.619A3.257 3.257 0 0154.5 39zM53 42.5c0 .819.681 1.5 1.5 1.5s1.5-.681 1.5-1.5-.681-1.5-1.5-1.5c-.367 0-.682.128-.906.352l-.126.107c-.276.197-.468.607-.468 1.041zM45 28H21v2h24z", fill: "#005AA0" }),
            React.createElement("path", { fill: "#005AA0", d: "M31 24v5h2v-5z" }),
            React.createElement("path", { fill: "#E30613", d: "M27.013 34H32v-2h-4.987z" }))));
}

function TabDamage70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fillRule: "nonzero", fill: "none" },
            React.createElement("path", { fill: "#005AA0", d: "M56 12H14v45h9v2H12V10h46v49H34.059v-2H56z" }),
            React.createElement("path", { d: "M18 53h34V16H18v37zm-2-39h38v41H16V14z", fill: "#005AA0" }),
            React.createElement("path", { fill: "#005AA0", d: "M29.877 42.018l-1.898 5.453 5.66 2.237v4.706h2v-6.066l-5.14-2.031 1.838-5.281-5.347-2.754-3.415 1.289H17v2h6.94l2.925-1.104zM45.193 23.602l-6.804-.002-1.755-3.041-3.473-.897L33 15.025l-1.998.07.214 6.13 4.106 1.06 1.912 3.315 5.96.002.002 5.208 8.808 6.354 1.17-1.622-7.978-5.756z" }),
            React.createElement("path", { fill: "#E30613", d: "M25 59h7v-2h-7z" }))));
}

function TabHouse70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fillRule: "nonzero", fill: "none" },
            React.createElement("path", { fill: "#005AA0", d: "M65.1 33.493l1.137-1.646-31.96-22.063L2.432 31.848l1.138 1.644L34.28 12.216z" }),
            React.createElement("path", { fill: "#E30613", d: "M38.037 21.073l1.105-1.666-4.87-3.232-4.756 3.238 1.126 1.654 3.644-2.482z" }),
            React.createElement("path", { fill: "#005AA0", d: "M10 27.06v26.07h2V27.06zM57 27.06v26.07h2V27.06zM48 35v18h2V33H38v20h2V35zM20 35v8h10v-8H20zm12-2v12H18V33h14z" }),
            React.createElement("path", { fill: "#005AA0", d: "M5 54h17.01v-2H5zM32 54h32v-2H32z" }))));
}

function TabLoan70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fillRule: "nonzero", fill: "none" },
            React.createElement("path", { fill: "#005AA0", d: "M56.545 26.132l1.96-.397-4.03-19.919-24.059 5.005-1.694.356.41 1.957 1.694-.355 22.088-4.595zM13.178 16.398l10.52-2.197-.41-1.958-12.466 2.604 3.762 18.486.031.117.09.267 1.896-.634-.07-.209z" }),
            React.createElement("path", { fill: "#005AA0", d: "M36.856 13.419l.98 4.889 1.96-.393-.98-4.89zM43.496 17.229a2.69 2.69 0 01-3.18-2.091 2.69 2.69 0 012.096-3.177 2.69 2.69 0 013.18 2.09 2.69 2.69 0 01-2.096 3.178zm-.403-1.96a.69.69 0 00.54-.814.69.69 0 00-.818-.535.69.69 0 00-.54.814.69.69 0 00.818.536z" }),
            React.createElement("path", { d: "M49.287 16.073a2.69 2.69 0 01-3.18-2.091 2.69 2.69 0 012.096-3.177 2.69 2.69 0 013.18 2.091 2.69 2.69 0 01-2.096 3.177zm-.403-1.959a.69.69 0 00.54-.814.69.69 0 00-.818-.536.69.69 0 00-.54.815.69.69 0 00.818.535z", fill: "#E30613" }),
            React.createElement("path", { fill: "#005AA0", d: "M19.54 18.852l39.56 8.385-4.571 21.42-19.424-4.146-.417 1.956 21.38 4.564 5.406-25.335-43.473-9.215-5.406 25.332 7.214 1.543.418-1.956-5.259-1.124z" }),
            React.createElement("path", { fill: "#005AA0", d: "M42.291 25.467l-.98 4.8 1.96.4.98-4.8zM50.047 29.563a2.69 2.69 0 01-3.19 2.074 2.69 2.69 0 01-2.07-3.193 2.69 2.69 0 013.19-2.074 2.69 2.69 0 012.07 3.193zm-1.956-.416a.69.69 0 00-.53-.821.69.69 0 00-.818.534.69.69 0 00.53.82.69.69 0 00.818-.533zM52.648 32.97a2.69 2.69 0 01-2.07-3.193 2.69 2.69 0 013.19-2.074 2.69 2.69 0 012.07 3.193 2.69 2.69 0 01-3.19 2.074zm.704-3.31a.69.69 0 00-.818.533.69.69 0 00.53.821.69.69 0 00.818-.534.69.69 0 00-.53-.82z" }),
            React.createElement("path", { d: "M44 56.958C44 54.756 42.217 53 40 53c-2.196 0-4 1.82-4 4.042 0 .495.12 1.032.346 1.564.13.325.33.661.587.987C37.669 60.47 38.81 61 40 61c2.196 0 4-1.82 4-4.042zm2 0C46 60.282 43.304 63 40 63c-1.78 0-3.482-.79-4.617-2.143a5.975 5.975 0 01-.887-1.491A6 6 0 0134 57.042C34 53.718 36.696 51 40 51c3.315 0 6 2.645 6 5.958z", fill: "#E30613" }),
            React.createElement("path", { d: "M24.5 54a7.5 7.5 0 110-15 7.5 7.5 0 010 15zm0-2a5.5 5.5 0 100-11 5.5 5.5 0 000 11z", fill: "#005AA0" }))));
}

function TabOffer70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fillRule: "nonzero", fill: "none" },
            React.createElement("path", { fill: "#005AA0", d: "M17 38v12h2V38z" }),
            React.createElement("path", { fill: "#E30613", d: "M38 38v12h2V38z" }),
            React.createElement("path", { fill: "#005AA0", d: "M9 52V26h28v-2H7v30h43V40.005h-2V52z" }),
            React.createElement("path", { d: "M21 26v-8h15v8H21zm13-2v-4H23v4h11zM16.176 34l-4.254-6.683-1.687 1.074L15.078 36h27.738l2.7-3.801-1.631-1.158L41.784 34z", fill: "#005AA0" }),
            React.createElement("path", { d: "M54.55 12.584l-3.764 5.33-6.23-1.963 2.748 5.908-4.819 4.393 6.505.582 1.41 6.363 3.764-5.33 6.23 1.964-2.747-5.908 4.819-4.393-6.506-.583-1.41-6.363zm.974-4.846l2.072 9.348 9.578.857-7.094 6.468 4.042 8.69-9.166-2.887-5.53 7.83-2.072-9.348-9.578-.858 7.095-6.468-4.043-8.69 9.167 2.887 5.529-7.83z", fill: "#005AA0" }))));
}

function TabSave70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fillRule: "nonzero", fill: "none" },
            React.createElement("path", { d: "M29.344 17.508a6.733 6.733 0 011.425-7.52c2.674-2.651 7.013-2.651 9.687 0a6.733 6.733 0 011.502 7.34l1.85.757a8.733 8.733 0 00-1.944-9.516c-3.454-3.425-9.05-3.425-12.504 0a8.733 8.733 0 00-1.844 9.75l1.828-.811z", fill: "#005AA0" }),
            React.createElement("path", { fill: "#E30613", d: "M31 11.5v5.802h2V11.5zM36 16.414V13.86c0-.473.515-.859 1-.859s1 .386 1 .859v2.555h2V13.86C40 12.278 38.586 11 37 11s-3 1.278-3 2.859v2.555h2zM32.69 37.527v1.855h2v-1.855zM36.4 37.527v1.855h2v-1.855z" }),
            React.createElement("path", { d: "M20.262 26.72a17.272 17.272 0 012.704-3.74l-1.45-1.377a19.272 19.272 0 00-3.017 4.173l1.763.944zM52.937 26.183a19.258 19.258 0 00-3.228-4.58l-1.45 1.377a17.258 17.258 0 012.893 4.104l1.785-.9z", fill: "#005AA0" }),
            React.createElement("path", { d: "M54.977 34.775c0 4.88-1.847 9.474-5.105 12.99l1.555 11.225h-9.18l-2.113-5.536a19.488 19.488 0 01-9.043 0l-2.113 5.536h-9.18l1.555-11.224a19.052 19.052 0 01-5.106-12.991c0-3.442.916-6.753 2.625-9.662l-.453-9.827 8.938 2.11a19.41 19.41 0 018.255-1.832c2.891 0 5.694.632 8.256 1.833l8.938-2.11-.454 9.826a19.004 19.004 0 012.625 9.662zm-7.22 12.303l.342-.35c3.11-3.191 4.878-7.433 4.878-11.953 0-3.177-.87-6.226-2.491-8.886l-.16-.262.36-7.785-7.051 1.665-.322-.158a17.409 17.409 0 00-7.7-1.785c-2.707 0-5.324.617-7.701 1.785l-.322.158-7.051-1.665.359 7.785-.16.261a17.01 17.01 0 00-2.49 8.887c0 4.52 1.767 8.762 4.878 11.953l.341.35-1.373 9.912h5.507l2.27-5.947.883.254a17.512 17.512 0 009.717 0l.883-.254 2.27 5.947h5.507l-1.373-9.912z", fill: "#005AA0" }),
            React.createElement("path", { d: "M40 38.5a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0zm2 0a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0zM29 29.479c0-.815.67-1.479 1.5-1.479s1.5.664 1.5 1.479h2C34 27.556 32.431 26 30.5 26S27 27.556 27 29.479h2zM39 29.479c0-.815.67-1.479 1.5-1.479s1.5.664 1.5 1.479h2C44 27.556 42.431 26 40.5 26S37 27.556 37 29.479h2z", fill: "#005AA0" }))));
}

function TabTravel70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("g", { fillRule: "nonzero" },
                React.createElement("path", { d: "M25.077 8.538c-4.836 0-8.813 3.677-9.288 8.388a8.28 8.28 0 00-7.34 8.23 8.293 8.293 0 008.293 8.294h8.335v-2h-8.335a6.293 6.293 0 01-6.294-6.293 6.278 6.278 0 016.291-6.284l1.003.003v-1.003a7.335 7.335 0 0114.67 0v1h2.042a6.293 6.293 0 015.321 9.656l1.69 1.07a8.293 8.293 0 00-7.01-12.725h-.096c-.499-4.686-4.464-8.336-9.282-8.336z", fill: "#005AA0" }),
                React.createElement("path", { d: "M32.696 34.751a5.35 5.35 0 100-10.7 5.35 5.35 0 000 10.7zm0-2a3.35 3.35 0 110-6.7 3.35 3.35 0 010 6.7z", fill: "#E30613" }),
                React.createElement("path", { d: "M40.639 40.596a3.564 3.564 0 100-7.13 3.564 3.564 0 000 7.13zm0-2a1.564 1.564 0 110-3.13 1.564 1.564 0 010 3.13zM30.875 61.686l8.57-2.688 7.46-7.945L58.62 47.76l.129-.084c2.06-1.345 2.942-3.222 2.527-5.465l-.128-.693-7.468-1.209-29.052 8.439-6.187-3.383L9.265 48l7.43 6.273 13.725 1.5 2.124-.66-1.669 6.572zm-.651-7.945L17.52 52.35l-4.102-3.462 4.784-1.374 6.19 3.385 29.412-8.543 5.57.902c.002 1.056-.51 1.915-1.597 2.662l-11.948 3.357-7.484 7.968-4.65 1.46 1.664-6.554-1.938-.492-.3 1.182-2.897.899z", fill: "#005AA0" }),
                React.createElement("path", { fill: "#005AA0", d: "M33.019 42.973l8.538 2.687.6-1.908-9.12-2.87-8.308 2.45 6.638 4.953 1.196-1.603-3.434-2.562z" })))));
}

function Apartment70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("path", { d: "M24 64v-2h6V50h10v12h16V46H44V33h10v5h2v-9H44V16h10v5h2v-9H14v9h2v-5h10v13H14v9h2v-5h10v13H14v16h6v2H9v-2h3V46H8v-8h4v-9H8v-8h4v-9H9V6h53v6h-4v9h4v8h-4v9h4v8h-4v16h3v2H24zm14-12h-6v10h6V52zm16-2v10H44V50h10zm-28 0v10H16V50h10zm26 2h-6v6h6v-6zm-28 0h-6v6h6v-6zm36-12H46v4h14v-4zm-36 0H10v4h14v-4zm16-7v10H30V33h10zm-2 2h-6v6h6v-6zm14 0h-6v3h6v-3zm-28 0h-6v3h6v-3zm0-12H10v4h14v-4zm36 0H46v4h14v-4zm-20-7v10H30V16h10zm-2 2h-6v6h6v-6zm-14 0h-6v3h6v-3zm28 0h-6v3h6v-3zm8-10H11v2h49V8z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Atv70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("path", { d: "M37.34 14.825l3.902 4.876L45.48 25h5.055l2.104 3.155c.37-.028.744-.042 1.12-.042 2.141 0 4.218.462 6.117 1.342l.404.195-.896 1.788a12.51 12.51 0 00-5.624-1.325c-3.13 0-5.994 1.144-8.194 3.038l2.817 2.817a9 9 0 11-1.415 1.415l-2.81-2.811a12.514 12.514 0 00-2.962 7.802l-.004.306h-2c0-1.271.163-2.505.47-3.68H27.55l-2.888-3.25-1.63 1.633a8.959 8.959 0 011.963 5.352L25 43a9 9 0 11-3.382-7.032l1.713-1.714L22.217 33H9v-2h11.439l-1.186-1.336 1.494-1.328L28.45 37h11.892a14.597 14.597 0 0110.116-8.512L49.464 27h-4.945l-3.761-4.702-11.254 6.566-1.008-1.728 10.999-6.416-2.835-3.545-3.957 1.365-.653-1.89 5.29-1.825zM16 36a7 7 0 105.607 2.809l-1.436 1.434a5 5 0 11-1.414-1.414l1.435-1.435A6.97 6.97 0 0016 36zm38 0a6.968 6.968 0 00-4.192 1.394l1.434 1.434a5 5 0 11-1.414 1.414l-1.435-1.433A7 7 0 1054 36zm-38 4a3 3 0 102.707 1.707l-2 2-1.414-1.414 2-2A2.988 2.988 0 0016 40zm38 0c-.463 0-.901.105-1.293.292l2 2-1.414 1.415-2-2A3 3 0 1054 40zM8 27v6H6v-6h2zm20.618-4l1.276 2.553-1.788.894L27.38 25H11v2h7v2H9v-6h19.618zm24.214.445l2 3-1.664 1.11-2-3 1.664-1.11z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Baby70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("path", { d: "M42.687 6.58l.131.033.075.017.149.047c2.953.95 4.668 3.984 3.915 6.95l-.06.216c-.837 2.84-3.677 4.57-6.573 4.154l-.014.05a21.985 21.985 0 00-5.6-.72c-11.853 0-21.454 9.377-21.454 20.932 0 11.554 9.6 20.931 21.454 20.931 11.854 0 21.454-9.376 21.454-20.931 0-6.684-3.233-12.84-8.606-16.764l-.331-.238 1.15-1.637c6.096 4.281 9.787 11.157 9.787 18.639 0 12.67-10.506 22.931-23.454 22.931-12.947 0-23.454-10.262-23.454-22.931 0-12.67 10.507-22.932 23.454-22.932 1.822 0 3.62.204 5.365.603l.007-.025c2.104.593 4.296-.59 4.897-2.628.58-1.964-.528-4.018-2.503-4.68l-.15-.047-.118-.027c-.953-.183-1.938.259-2.213.892l-.039.107c-.33 1.12.328 2.011 2.143 1.698l.198-.039.414 1.957c-3.539.748-5.419-1.648-4.673-4.182.528-1.785 2.667-2.807 4.649-2.376zm-5.615 42.344l1.397 1.431a9.75 9.75 0 01-6.829 2.761 9.751 9.751 0 01-6.586-2.532l-.243-.229 1.398-1.43a7.745 7.745 0 005.431 2.191 7.76 7.76 0 005.198-1.973l.234-.219zM28.823 37.87l.015.203-1.998.095c-.054-1.14-1.055-2.03-2.247-1.976-1.137.051-2.019.946-2.046 2.02l.002.148-1.998.095c-.107-2.254 1.667-4.157 3.951-4.261 2.214-.1 4.11 1.523 4.321 3.676zm13.496-.494l.015.204-1.998.095c-.054-1.14-1.056-2.03-2.247-1.977-1.137.052-2.019.947-2.045 2.02l.002.148-1.998.096c-.109-2.254 1.666-4.158 3.95-4.261 2.214-.101 4.11 1.523 4.32 3.675z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Bank70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M10 20v3h8.426L35 12.642 51.574 23H60v-3h-7.563L35 9.344 17.563 20H10zM35 7l18 11h9v7h-3v3h-2v5h-2v19h3v5h6v7H6v-7h6v-5h3V33h-2v-5h-2v-3H8v-7h9L35 7zm27 52H8v3h54v-3zM30 28h-7v5h-2v19h3v5h5v-5h3V33h-2v-5zm17 0h-7v5h-2v19h3v5h5v-5h3V33h-2v-5zm9 26h-8v3h8v-3zm-17 0h-8v3h8v-3zm-17 0h-8v3h8v-3zm31-21h-2v19h2V33zm-17 0h-2v19h2V33zm-17 0h-2v19h2V33zm36-5h-6v3h6v-3zm-17 0h-6v3h6v-3zm-17 0h-6v3h6v-3zm14-13L19 25h-6v1h44v-1h-6L35 15z", id: "bank-70_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#bank-70_svg__a" }))));
}

function BillsCoins70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("path", { d: "M32.5 53a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM54.53 5.81l5.331 22.904 2.942.626-5.407 25.438-6.174-1.358c-.646 3.323-3.345 5.764-6.515 5.709-3.635-.064-6.476-3.363-6.407-7.318.007-.408.045-.812.112-1.207l-2.466-.542.43-1.954 19.482 4.284 4.573-21.512-43.039-9.148-2.995 14.088.023.098-.046.01-1.556 7.323 5.937 1.26a7 7 0 11-.415 1.958l-7.894-1.677 1.903-8.954-3.592-15.513-.632-2.735-.225-.975L20.527 13.7l.45 1.949-10.678 2.465.406 1.76 2.626 11.342 2.52-11.856L57.7 28.255 53.035 8.208 25.75 14.507l-.45-1.949L54.53 5.81zM40.3 51.846c-.051 2.898 1.965 5.24 4.442 5.283 2.165.038 4.074-1.702 4.525-4.138l-8.898-1.957a5.997 5.997 0 00-.07.812zm-14.887-9.913a5 5 0 10-.175 9.998 5 5 0 00.175-9.998zM55.33 31.819a3 3 0 11-1.247 5.868 3 3 0 011.247-5.868zm-6.847-1.456a3 3 0 11-1.247 5.87 3 3 0 011.247-5.87zm5.245 4.182a1 1 0 101.957.416 1 1 0 00-1.957-.416zm-11.603-5.533l1.957.416-1.248 5.868-1.956-.415 1.247-5.87zm4.756 4.078a1 1 0 101.957.416 1 1 0 00-1.957-.416zM38.41 13.643l1.35 5.846-1.95.45-1.35-5.846 1.95-.45zm7.982 1.236a3 3 0 11-5.846 1.35 3 3 0 015.846-1.35zm6.82-1.574a3 3 0 11-5.845 1.35 3 3 0 015.846-1.35zm-9.968 1.275a1 1 0 10.45 1.948 1 1 0 00-.45-1.948zm6.82-1.575a1 1 0 10.45 1.949 1 1 0 00-.45-1.949z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Boat70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M10.62 50.924l.726 1.864a13 13 0 01-8.72.25l.617-1.902a11 11 0 007.378-.212zm36.76 0a11 11 0 007.377.212l.617 1.903a13 13 0 01-8.72-.25l.725-1.865zm-26.006-1.042l4.235 1.373-.617 1.902-4.235-1.372a11 11 0 00-7.378.212l-.725-1.864a13 13 0 018.72-.25zm23.972.251l-.725 1.864a11 11 0 00-7.378-.212l-4.235 1.372-.617-1.902 4.235-1.373a13 13 0 018.72.251zm-23.972-4.25l4.235 1.372a11 11 0 006.782 0l4.235-1.373a13 13 0 018.72.251l2.033.791a11 11 0 007.378.212l1.935-.627.616 1.903-1.934.627a13 13 0 01-8.72-.25l-2.033-.792a11 11 0 00-7.378-.212l-4.235 1.372a13 13 0 01-8.016 0l-4.235-1.372a11 11 0 00-7.378.212l-2.033.791a13 13 0 01-8.72.25l-1.934-.626.616-1.903 1.935.627a11 11 0 007.378-.212l2.033-.79a13 13 0 018.72-.252zm7.731-25.877l20.489 2.163a2 2 0 011.658 2.704l-7.456 19.484-1.868-.714 7.456-19.485L29 22.006 8.616 24.158l7.456 19.485-1.868.714-7.456-19.484a2 2 0 011.658-2.704l20.49-2.163h.21zM29 31a1 1 0 011 1v10a1 1 0 01-2 0V32a1 1 0 011-1zm0-8a1 1 0 011 1v4a1 1 0 01-2 0v-4a1 1 0 011-1zm2-23a2 2 0 012 2v3.999L39.523 6a3 3 0 012.867 2.118l3.566 11.588-1.912.588L40.48 8.706A1 1 0 0039.523 8L33 7.999V8h-8v-.001L18.477 8a1 1 0 00-.956.706l-3.565 11.588-1.912-.588L15.61 8.118A3 3 0 0118.477 6L25 5.999V2a2 2 0 012-2h4zm-4 10a1 1 0 110 2h-5.558a1 1 0 00-.949.684l-1.544 4.632a1 1 0 11-1.897-.632l1.544-4.633A3 3 0 0121.442 10H27zm4-8h-4v4h4V2z", id: "boat-70_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#boat-70_svg__a", transform: "translate(6 7)" }))));
}

function Briefcase70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("path", { d: "M45 11v7h16.5a2.5 2.5 0 012.5 2.5v35a2.5 2.5 0 01-2.5 2.5h-53A2.5 2.5 0 016 55.5v-35A2.5 2.5 0 018.5 18H25v-7h20zm17 13.079L53.35 31H42v10H28V31H16.65L8 24.08V55.5a.5.5 0 00.5.5h53a.5.5 0 00.5-.5V24.079zM52 33v20h-2V33h2zm-32 0v20h-2V33h2zm41.5-13h-53a.5.5 0 00-.5.5v1.02L17.35 29H32v2h-2v8h10v-8h-2v-2h14.65L62 21.519V20.5a.5.5 0 00-.5-.5zM35 32a3 3 0 110 6 3 3 0 010-6zm0 2a1 1 0 100 2 1 1 0 000-2zm8-18H27v2h16v-2zm0-3H27v1h16v-1z", fill: "currentColor", fillRule: "nonzero" }))));
}

function BriefcaseFirstAid70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M8.5 20a.5.5 0 00-.5.5v35a.5.5 0 00.5.5h53a.5.5 0 00.5-.5v-35a.5.5 0 00-.5-.5h-53zM42 11a3 3 0 013 3v4h16.5a2.5 2.5 0 012.5 2.5v35a2.5 2.5 0 01-2.5 2.5h-53A2.5 2.5 0 016 55.5v-35A2.5 2.5 0 018.5 18H25v-4a3 3 0 013-3h14zm-28 9h-2v36h2V20zm44-.026h-2V56l2-.026v-36zM39 28h-8v6h-6v8h6v6h8v-6h6v-8h-6v-6zm-2 2v6h6v4h-6v6h-4v-6h-6v-4h6v-6h4zm6-14H27v2h16v-2zm-1-3H28a1 1 0 00-1 1h16a1 1 0 00-1-1z", id: "briefcase-first-aid-70_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#briefcase-first-aid-70_svg__a" }))));
}

function Car70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("path", { d: "M35 15c8.751 0 13.146 1.213 15.535 3.63 1.16 1.175 2.772 3.867 4.908 8.154l6.431 1.301A2.662 2.662 0 0164 30.7v1.967a2.657 2.657 0 01-2.647 2.666h-1.92a29.645 29.645 0 011.273 8.598v5.402c0 1.115-.68 2.072-1.647 2.47v2.53A2.657 2.657 0 0156.412 57H51.47a2.657 2.657 0 01-2.647-2.667V52H21.176v2.333A2.657 2.657 0 0118.53 57h-4.94a2.657 2.657 0 01-2.648-2.667v-2.53a2.668 2.668 0 01-1.647-2.47v-5.402c0-2.915.43-5.813 1.274-8.598h-1.92A2.657 2.657 0 016 32.667V30.7c0-1.269.888-2.364 2.126-2.615l6.431-1.301c2.136-4.287 3.747-6.979 4.908-8.154C21.855 16.213 26.25 15 35 15zM19.176 51.999h-6.235v2.334c0 .371.293.667.647.667h4.941a.657.657 0 00.647-.667V52zm37.882 0h-6.235v2.334c0 .371.293.667.648.667h4.94a.657.657 0 00.648-.667L57.058 52zM35 17c-8.268 0-12.178 1.079-14.112 3.036-.996 1.008-2.609 3.727-4.756 8.074l-.218.44-7.392 1.496A.662.662 0 008 30.7v1.967c0 .37.292.666.647.666h4.676l-.642 1.951a27.64 27.64 0 00-1.387 8.647V46L45 46v2l-33.706-.001v1.334c0 .371.292.667.647.667H58.06a.657.657 0 00.647-.667L58.705 48 48 48v-2l10.705-.001v-2.068c0-2.939-.467-5.859-1.386-8.647l-.642-1.95h4.676a.657.657 0 00.647-.667V30.7c0-.32-.22-.593-.522-.654l-7.392-1.497-.218-.44c-2.147-4.346-3.76-7.065-4.756-8.073C47.178 18.08 43.268 17 35 17zm8 24v2H27v-2h16zm-24.5-8a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm33 0a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm-33 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm33 0a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM43 38v2H27v-2h16zm5.857-15.514L52.767 29H19v-2h30.234l-2.091-3.486 1.714-1.028zM26 19v2c-1.352 0-2.389.518-3.2 1.6l-1.6-1.2c1.189-1.585 2.819-2.4 4.8-2.4z", fill: "currentColor", fillRule: "nonzero" }))));
}

function CarDamage70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("path", { d: "M35 15c8.751 0 13.146 1.213 15.535 3.63 1.16 1.175 2.772 3.867 4.908 8.154l6.431 1.301A2.662 2.662 0 0164 30.7v1.967a2.657 2.657 0 01-2.647 2.666h-1.92a29.645 29.645 0 011.273 8.598v5.402c0 1.115-.68 2.072-1.647 2.47v2.53A2.657 2.657 0 0156.412 57H51.47a2.657 2.657 0 01-2.647-2.667V52H21.176v2.333A2.657 2.657 0 0118.53 57h-4.94a2.657 2.657 0 01-2.648-2.667v-2.53a2.668 2.668 0 01-1.647-2.47v-5.402c0-2.915.43-5.813 1.274-8.598h-1.92A2.657 2.657 0 016 32.667V30.7c0-1.269.888-2.364 2.126-2.615l6.431-1.301c2.136-4.287 3.747-6.979 4.908-8.154C21.855 16.213 26.25 15 35 15zM19.176 51.999h-6.235v2.334c0 .371.293.667.647.667h4.941a.657.657 0 00.647-.667V52zm37.882 0h-6.235v2.334c0 .371.293.667.648.667h4.94a.657.657 0 00.648-.667L57.058 52zM35 17c-8.268 0-12.178 1.079-14.112 3.036-.996 1.008-2.609 3.727-4.756 8.074l-.218.44-7.392 1.496A.662.662 0 008 30.7v1.967c0 .37.292.666.647.666h4.676l-.642 1.951a27.64 27.64 0 00-1.387 8.647V46L24 46v2l-12.706-.001v1.334c0 .371.292.667.647.667H58.06a.657.657 0 00.647-.667v-5.402c0-2.939-.468-5.859-1.387-8.647l-.642-1.95h4.676a.657.657 0 00.647-.667V30.7c0-.32-.22-.593-.522-.654l-7.392-1.497-.218-.44c-2.147-4.346-3.76-7.065-4.756-8.073C47.178 18.08 43.268 17 35 17zm18.841 29l2.782 2.218-1.246 1.564L53.14 48H46v-2h7.841zM44 46v2H26v-2h18zm-1-5v2H27v-2h16zm-24.5-8a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm33 0v2a2.5 2.5 0 102.5 2.5h2a4.5 4.5 0 11-4.5-4.5zm-33 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM43 38v2H27v-2h16zM30.832 18.445l1.629 2.443 10.892-2.178-1.022 4.09 6.185-.884L52.766 29H19v-2h30.234l-1.75-2.916L39.67 25.2l.978-3.91-9.108 1.822-2.371-3.557 1.664-1.11z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Caravan70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("path", { d: "M33 42a5 5 0 110 10.001A5 5 0 0133 42zm0 2A3 3 0 1033 50 3 3 0 0033 44zm22.77-25l5.278 20.053L58.443 46 64 46v2l-6.307-.001V48H40v-2h16l.306-.001 2.645-7.053L54.228 21H11.811l-3.58 17H13v2H8.443l2.25 6H26v2H9.307l-3.345-8.921L10.189 19H55.77zM26 25v19h-2V27h-7v17h-2V25h11zm14 10v2h-9v-2h9zm8-10v8H31v-8h17zm-2 2H33v4h13v-4z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Card70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("path", { d: "M61.5 16a2.5 2.5 0 012.5 2.5v34a2.5 2.5 0 01-2.5 2.5h-53A2.5 2.5 0 016 52.5v-34A2.5 2.5 0 018.5 16h53zm.5 14H8v22.5a.5.5 0 00.5.5h53a.5.5 0 00.5-.5V30zM22 40v2H11v-2h11zm8-4v2H11v-2h19zm29-4v6h-6v-2h4v-4h2zm3-10H8v6h54v-6zm-.5-4h-53a.5.5 0 00-.5.5V20h54v-1.5a.5.5 0 00-.5-.5z", fill: "currentColor", fillRule: "nonzero" }))));
}

function CardBlock70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M50.867 12C53.147 12 55 13.828 55 16.09V31.25c5.298 2.314 9 7.6 9 13.751 0 8.284-6.716 15-15 15-7.257 0-13.31-5.153-14.7-12H10.133C7.853 48 6 46.172 6 43.91V16.09C6 13.829 7.854 12 10.133 12h40.734zM36 45c0 7.18 5.82 13 13 13 3.48 0 6.642-1.368 8.976-3.596L39.234 36.42A12.95 12.95 0 0036 45zm13-13c-3.17 0-6.076 1.135-8.333 3.021l18.646 17.894A12.943 12.943 0 0062 45c0-7.18-5.82-13-13-13zm4-6H8v17.91c0 1.15.952 2.09 2.133 2.09h23.9c-.022-.33-.033-.664-.033-1 0-8.284 6.716-15 15-15 1.385 0 2.727.188 4 .54V26zm-31 7v2H11v-2h11zm8-4v2H11v-2h19zm23-11H8v6h45v-6zm-2.133-4H10.133c-1.15 0-2.083.89-2.131 2h44.994l-.001-.058C52.917 14.859 51.997 14 50.867 14z", id: "card-block-70_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#card-block-70_svg__a" }))));
}

function Chat70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M35 58.199V49h2v14.801L26.526 51H25C14.507 51 6 42.493 6 32s8.507-19 19-19h20c10.493 0 19 8.507 19 19s-8.507 19-19 19h-6v-2h6c9.389 0 17-7.611 17-17s-7.611-17-17-17H25c-9.389 0-17 7.611-17 17s7.611 17 17 17h2.474L35 58.199z", id: "chat-70_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#chat-70_svg__a" }))));
}

function Check70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { id: "check-70_svg__a", d: "M31.501 42.566l18.783-19.264 1.432 1.396-20.217 20.736-11.216-11.537 1.434-1.394z" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#check-70_svg__a" }))));
}

function Circle70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M35 6c16.016 0 29 12.984 29 29S51.016 64 35 64 6 51.016 6 35 18.984 6 35 6zm0 2C20.088 8 8 20.088 8 35s12.088 27 27 27 27-12.088 27-27S49.912 8 35 8z", id: "circle-70_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#circle-70_svg__a" }))));
}

function Circlediagram70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("path", { d: "M37.5 11C52.136 11 64 22.864 64 37.5S52.136 64 37.5 64 11 52.136 11 37.5v-1h25.5V11h1zm1 2.02V38.5H13.02C13.545 51.567 24.304 62 37.5 62 51.031 62 62 51.031 62 37.5c0-13.196-10.433-23.955-23.5-24.48zM33 6v27H6v-1C6 17.64 17.64 6 32 6h1zm-2 2.02C18.54 8.531 8.531 18.54 8.02 31H31V8.02z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Clipboard70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M28 0c1.21 0 2 1.185 2 2.5V5h3a2 2 0 011.732 1h7.125C44.181 6 46 8.109 46 10.643v43.714C46 56.891 44.18 59 41.857 59H4.143C1.819 59 0 56.891 0 54.357V10.643C0 8.109 1.82 6 4.143 6h7.125A2 2 0 0113 5h3V2.5c0-1.315.79-2.5 2-2.5h10zM11 8H4.143C2.995 8 2 9.153 2 10.643v43.714C2 55.847 2.995 57 4.143 57h37.714C43.005 57 44 55.847 44 54.357V10.643C44 9.153 43.005 8 41.857 8H35v2h5a2 2 0 012 2v36.414L35.414 55H6a2 2 0 01-2-2V12a2 2 0 012-2h5V8zm0 4H6v41h28v-6h6V12h-5v1a2 2 0 01-2 2H13a2 2 0 01-2-2v-1zm27.585 37H36v2.585L38.585 49zM36 35v2H9v-2h27zm0-5v2H9v-2h27zm0-5v2H9v-2h27zm-11-5v2H9v-2h16zm2.879-18h-9.758a.964.964 0 00-.121.5V7h-5v6h20V7h-5V2.5c0-.208-.05-.39-.121-.5zM23 4a3 3 0 110 6 3 3 0 010-6zm0 2a1 1 0 100 2 1 1 0 000-2z", id: "clipboard-70_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#clipboard-70_svg__a", transform: "translate(12 5)" }))));
}

function Coins70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("path", { d: "M32 14v4h8v6h-5v16H12v2h21v2H12l-.001 2H32v2H12v2h20v2H12l-.001 2H33v2H12v2h23v6H10V22h5v-2H7v-6h25zm17 20c8.284 0 15 6.716 15 15 0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15zM33 60H12v2h21v-2zm16-24c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13-5.82-13-13-13zm0 2c6.075 0 11 4.925 11 11 0 1.06-.15 2.086-.43 3.057l-.036.121-.008.028a10.923 10.923 0 01-2.06 3.817l.016-.018a11.063 11.063 0 01-2.072 1.935l-.035.025c-.068.049-.136.096-.204.142l-.07.047a10.91 10.91 0 01-1.565.87l-.123.055a7.597 7.597 0 01-.265.112c-.367.15-.744.28-1.13.39l-.11.03-.17.046-.06.014a10.99 10.99 0 01-2.39.325L49 60c-6.075 0-11-4.925-11-11a11.16 11.16 0 01.202-2.109l.002-.01a11.012 11.012 0 018.638-8.67l.062-.012c.11-.02.22-.04.33-.058l-.392.07a10.963 10.963 0 011.28-.176l.008-.001A10.996 10.996 0 0149 38zm0 2l-.316.005a9.12 9.12 0 00-.289.015l.153-.009a9.079 9.079 0 00-.318.022l.165-.013c-.15.01-.3.024-.448.04l.283-.027c-.124.01-.247.023-.369.038l.086-.01a8.998 8.998 0 00-.325.044l.24-.034a8.99 8.99 0 00-.316.046l.076-.012c-.124.019-.247.04-.37.065l.294-.053a9.009 9.009 0 00-7.363 7.07l-.016.077-.053.298a8.977 8.977 0 00-.093.811l.01-.136c-.008.11-.016.22-.02.33l.01-.194a9.102 9.102 0 00-.015.307l.004-.112a9 9 0 0011.494 9.079l.139-.041-.138.04a8.929 8.929 0 00.89-.308l-.106.042c.087-.034.174-.07.26-.107l-.154.065c.079-.032.157-.066.235-.1l-.08.035a8.95 8.95 0 00.264-.119l-.184.084c.087-.039.174-.079.26-.12l-.076.036c.075-.035.15-.07.223-.108l-.147.072c.087-.042.173-.085.259-.129l-.112.057c.09-.045.178-.091.265-.139l-.153.082a8.987 8.987 0 00.688-.398l-.12.075a9.013 9.013 0 00.589-.396l-.14.1c.066-.046.132-.094.198-.142l-.058.042c.069-.05.137-.102.205-.154l-.147.112c.08-.06.158-.12.235-.181l-.088.069a9.053 9.053 0 00.694-.596l-.037.034a9.056 9.056 0 00.674-.707l-.08.092c.064-.073.127-.146.189-.22l-.109.128c.057-.066.112-.133.167-.2l-.058.071c.057-.07.114-.14.17-.212l-.112.14a9.028 9.028 0 00.607-.848l-.026.04c.039-.06.076-.12.113-.181l-.087.14c.059-.092.116-.187.172-.282l-.085.142c.045-.075.09-.15.132-.226l-.047.084.108-.192-.06.108.128-.235-.068.127c.153-.28.292-.568.416-.864l.041-.103-.041.103c.032-.078.064-.157.094-.236l-.053.133c.036-.088.07-.176.102-.265l-.049.132c.034-.087.066-.175.096-.263l-.047.13a8.93 8.93 0 00.093-.265l-.046.135c.042-.119.08-.238.117-.359l.013-.046A9 9 0 0049 40zm1.304 2.8v9.36h1.584V54h-5.296v-1.84h1.536v-7.488h-1.344V42.8h3.52zM33 36H12v2h21v-2zm0-4H12v2h21v-2zm0-4H12v2h21v-2zm0-4H12v2h21v-2zm5-4H17v2h21v-2zm-8-4H9v2h21v-2z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Computer70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("path", { d: "M56.5 50h-1a2.5 2.5 0 00-2.5 2.5v5a2.5 2.5 0 002.5 2.5h1a2.5 2.5 0 002.5-2.5v-5a2.5 2.5 0 00-2.5-2.5zm1.5 2v3h-4v-3h4zm-8.286-8.5h3.143c2.32 0 3.594 1.338 3.992 3.418.072.378.111.714.132 1.107A4.501 4.501 0 0161 52.5v5a4.5 4.5 0 01-4.5 4.5h-1a4.5 4.5 0 01-4.5-4.5v-5a4.5 4.5 0 013.976-4.47 5.683 5.683 0 00-.092-.736c-.233-1.219-.78-1.794-2.027-1.794h-3.143C45.822 45.5 44 43.912 44 40h-8v8h7v2H21v-2h7v-8H11V12h42v28h-7c0 2.742.87 3.5 3.714 3.5zM34 40h-4v8h4v-8zm17-26H13v24h38V14zm-25.707 3.293l1.414 1.414-9 9-1.414-1.414 9-9zm-5-1l1.414 1.414-5 5-1.414-1.414 5-5z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Contact70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M18.793 6.391c3.466 4.515 6.344 5.948 11.489 5.948h12.913C49.322 12.34 52 15.546 52 21c0 4.487-3.449 7.744-8.23 7.987-2.417 4.529-6.631 8.031-11.791 9.555a5 5 0 11-.577-1.915C38.78 34.452 44 27.788 44 20.088c0-1.893-.368-3.44-1.27-5.747l-12.448-.002c-5.77 0-9.233-1.724-13.075-6.73l1.586-1.218zM27 36a3 3 0 100 6 3 3 0 000-6zM27.048.858c5.8 0 11.297 2.44 14.898 6.697l-1.527 1.292c-3.213-3.798-8.148-5.99-13.371-5.99-9.992 0-18.343 8.157-18.343 17.956 0 2.383.733 5.236 1.895 7.77L11.25 30H9.69C3.848 30 .229 26.36.229 21.658c0-4.254 3.698-8.392 8.102-8.58C11.457 5.937 18.74.858 27.048.858zm5.687 23.592l1.481 1.345c-1.918 2.113-4.51 3.327-7.28 3.327-2.727 0-5.282-1.176-7.193-3.232l1.465-1.361c1.542 1.659 3.572 2.593 5.728 2.593 2.19 0 4.25-.965 5.799-2.672zM7.549 15.185c-2.923.606-5.32 3.544-5.32 6.473 0 3.188 2.137 5.703 5.915 6.237-.898-2.362-1.439-4.866-1.439-7.082 0-1.95.295-3.84.844-5.628zm37.358-.74l.072.201c.712 2 1.021 3.56 1.021 5.442 0 2.377-.444 4.664-1.26 6.781 3.17-.555 5.26-2.832 5.26-5.87 0-3.867-1.43-6.065-5.093-6.554z", id: "contact-70_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#contact-70_svg__a", transform: "translate(9 13)" }))));
}

function Contract70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M43 0v21.107h-2V2H2v54h39v-8h2v10H0V0h43zM12.518 39.098c2.37 1.202 2.634 3.374 1.729 6.737-.094.349-.193.691-.341 1.185-.55 1.837-.677 2.322-.72 2.934-.04.548.028.686.262.76.438.14 1.047-.602 2.208-2.941l.133-.268c1.667-3.367 2.518-4.492 4.331-4.333 1.219.106 2.031.715 2.309 1.725.183.665.128 1.337-.09 2.381l-.073.337c-.172.784-.232 1.134-.224 1.365v.016l.037-.003h4.936v2h-4.936c-1.139 0-1.88-.634-2.014-1.664-.072-.563-.01-.967.247-2.141l.069-.32c.155-.742.191-1.18.12-1.44-.045-.162-.132-.227-.555-.264-.52-.045-1.167.81-2.365 3.228l-.133.27c-1.692 3.41-2.653 4.578-4.605 3.959-1.249-.397-1.75-1.43-1.653-2.809.06-.828.193-1.34.8-3.366.143-.478.238-.804.326-1.13.684-2.544.53-3.809-.703-4.435-2.343-1.188-3.898 1.179-4.55 8.334l-1.993-.181c.764-8.364 3.209-12.087 7.448-9.936zM48.8 21.586l8.614 8.614-20.8 20.8H28v-8.614l20.8-20.8zM30 45.415V49h3.585L30 45.415zm14.4-16.6L30.315 42.9l5.785 5.785L50.185 34.6 44.4 28.815zm1.893 4.478l1.414 1.414-11 11-1.414-1.414 11-11zm2.507-8.879L45.815 27.4l5.785 5.785 2.986-2.985-5.786-5.786zM21 21v2H8v-2h13zm12-5v2H8v-2h25zm0-5v2H8v-2h25z", id: "contract-70_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#contract-70_svg__a", transform: "translate(9 6)" }))));
}

function Cross70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M23 7v14h14v2H23v14h-2V23H7v-2h14V7h2z", id: "cross-70_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", transform: "rotate(45 12.808 44.192)", xlinkHref: "#cross-70_svg__a" }))));
}

function Cup70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("path", { d: "M52 7l.001 6.05C57.054 13.551 61 17.814 61 23c0 5.223-4.005 9.511-9.11 9.961-.78 6.776-5.543 12.341-11.89 14.292v9.122C40 58.915 42.225 61 45 61h6v2H19v-2h6c2.775 0 5-2.086 5-4.625v-9.122c-6.346-1.95-11.11-7.515-11.888-14.293C13.005 32.511 9 28.223 9 23c0-5.185 3.947-9.449 9-9.95V7h34zM35 48c-1.023 0-2.026-.09-3-.264v8.639c0 1.804-.76 3.434-1.988 4.625h9.976C38.759 59.81 38 58.18 38 56.375v-8.639c-.974.173-1.976.264-3 .264zM50 9H20v4h16v2H20v2h11v2H20v12c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15V9zm2.001 6.062v2.021a6.002 6.002 0 010 11.834v2.021a8.001 8.001 0 000-15.876zM11 23a8.001 8.001 0 007 7.938v-2.02a6.002 6.002 0 010-11.835v-2.021A8.001 8.001 0 0011 23zm4 0a4.002 4.002 0 003 3.874v-7.748c-1.725.444-3 2.01-3 3.874zm37-3.874v7.748a4.002 4.002 0 000-7.748zM43 13v2h-5v-2h5z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Damage70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M2 49h4v2H0V0h44v51H27v-2h15V2H2v47zm22 0v2H9v-2h15zM11.164 19.014l6.428 1.07 4.24 6.361-.072.048 6.79 4.497-2.182 6.502L35 41.78V49h-2v-5.98l-9.082-4.512 2.247-6.698-4.541-3.008-1.648 7.415-1.952-.434 1.687-7.598-11.145 1.904L5.2 25.6l1.6-1.2 2.634 3.511 9.85-1.682-2.876-4.314-5.572-.929.328-1.972zM17 2v5.27l5.928 1.904L24.915 13l6.004-.001-3.184-3.98L31.2 4.4l1.6 1.2-2.535 3.38 2.909 3.638L36.4 10.2l1.2 1.6-3.985 2.987v6.721l9.995 7.7-1.22 1.584-10.775-8.3V15H23.7l-2.167-4.174L15 8.73V2h2z", id: "damage-70_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#damage-70_svg__a", transform: "translate(13 10)" }))));
}

function DigitalServices70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("path", { d: "M52.956 12c1.616 0 2.946 1.244 3.039 2.823L56 15v20h3a3 3 0 012.995 2.824L62 38v17a3 3 0 01-2.824 2.995L59 58h-8a3 3 0 01-2.995-2.824L48 55V44H35v8h8v2H21v-2h8v-8H11.044c-1.625 0-2.946-1.124-3.039-2.693L8 41.131V15c0-1.602 1.272-2.904 2.866-2.995l.178-.005h41.912zM59 37h-8a1 1 0 00-.993.883L50 38v17a1 1 0 00.883.993L51 56h8a1 1 0 00.993-.883L60 55V38a1 1 0 00-1-1zm-4 15a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-22-8h-2v8h2v-8zm15-5H10v2.131c0 .464.358.816.913.863l.131.006H48v-3zm6-21H10v19h38.17a3.002 3.002 0 012.654-1.995L51 35h3V18zm-35.707 2.293l1.414 1.414-5 5-1.414-1.414 5-5zm-3-1l1.414 1.414-3 3-1.414-1.414 3-3zM52.956 14H11.044c-.542 0-.982.394-1.038.892L10 15v1h44v-1c0-.51-.403-.94-.93-.994L52.956 14z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Dog70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M23.84.684c4.398 1.14 7.253 3.962 8.813 7.905C33.673 11.169 34 13.69 34 16.26c0 2.878-1.415 5.045-4.127 5.6 7.467 7.278 11.505 14.648 12.06 22.104 3.801-.276 6.36-2.3 6.941-6.184a3 3 0 112.008.087c-.665 5.029-4.076 7.77-8.884 8.099L42 45.75c0 3.122-.77 6.973-2.301 11.566L39.47 58H3v-4a7 7 0 017-7h1V23h2v24h4v2h-7a5 5 0 00-5 5v2h33.025C39.345 51.899 40 48.478 40 45.75c0-7.96-4.34-15.94-13.102-23.946C24.128 21.032 23 17.98 23 13h2c0 4.846 1.039 7 3.429 7C30.869 20 32 18.593 32 16.26c0-2.34-.298-4.637-1.207-6.936-1.338-3.382-3.72-5.735-7.456-6.704-5.673-1.47-9.383-.189-11.447 3.836L11.61 7H2v4.017c0 5.367 9.579 9.055 15.555 6.087l.89 1.792C11.29 22.449 0 18.1 0 11.017V5h10.405C12.995.495 17.568-.941 23.84.684zM27.072 34c1.608 0 3.148.449 4.46 1.278l-1.067 1.69A6.338 6.338 0 0027.073 36C23.707 36 21 38.556 21 41.679c0 2.433 1.655 4.583 4.09 5.37l-.615 1.903C21.235 47.905 19 45.002 19 41.679 19 37.425 22.627 34 27.073 34zM50 34a1 1 0 100 2 1 1 0 000-2zM16 5a3 3 0 110 6 3 3 0 010-6zm0 2a1 1 0 100 2 1 1 0 000-2z", id: "dog-70_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#dog-70_svg__a", transform: "translate(10 6)" }))));
}

function EInvoice70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("path", { d: "M56 8v54.592l-11.843-5.704L35 61.101l-9.158-4.213L14 62.592V8h42zm-2 2H16v49.409l9.824-4.732L35 58.9l9.176-4.222L54 59.41V10zm-7 36v2H37v-2h10zm0-6v2H23v-2h24zm-8-5v2H23v-2h16zm8 0v2h-4v-2h4zm-8-5v2H23v-2h16zm8 0v2h-4v-2h4zM34.735 14c3.657 0 5.163 2.82 4.375 6.98h-6.43c.167 1.673 1.099 2.39 2.605 2.39 1.123 0 2.39-.334 3.394-.764l.335 2.366c-1.171.646-2.51 1.028-3.849 1.028-3.275 0-5.665-2.295-5.665-6.143C29.5 15.84 32.177 14 34.735 14zm.024 2.414c-1.195 0-2.056.98-2.104 2.51h3.897c.095-1.553-.502-2.51-1.793-2.51z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Family70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("path", { d: "M47.24 32c5.652 0 10.239 4.55 10.239 10.167 0 1.884-.516 3.648-1.416 5.16 4.251 1.696 6.91 5.206 6.91 9.673v7h-2v-7c0-3.766-2.324-6.669-6.15-8.004a10.243 10.243 0 01-7.584 3.337 10.245 10.245 0 01-7.357-3.096C36.279 50.704 34 53.537 34 57v7h-2v-7c0-4.173 2.592-7.565 6.593-9.386A10.058 10.058 0 0137 42.167C37 36.55 41.586 32 47.24 32zM28.371 8c4.541 0 8.763 1.967 11.665 5.321l-1.512 1.309A13.385 13.385 0 0028.372 10C20.985 10 15 15.938 15 23.26c0 7.32 5.985 13.259 13.372 13.259s13.372-5.939 13.372-13.26c0-.576-.037-1.147-.11-1.71h-10.35c-3.194 0-6.456-2.366-8.056-5.682l1.801-.869c1.286 2.666 3.886 4.55 6.255 4.55H43.31l.157.81c.184.95.277 1.92.277 2.901 0 8.43-6.884 15.26-15.372 15.26a15.385 15.385 0 01-11.717-5.382C10.819 34.86 8 38.427 8 44v20H6V44c0-6.263 3.19-10.501 9.392-12.564A15.094 15.094 0 0113 23.259C13 14.83 19.884 8 28.372 8zM47.24 34C42.687 34 39 37.658 39 42.167c0 4.508 3.687 8.166 8.24 8.166 4.551 0 8.239-3.658 8.239-8.166 0-4.509-3.688-8.167-8.24-8.167z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Farm70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("path", { d: "M41 10.665L61.426 28.84l-1.33 1.494L58 28.468V54h6v2H24v-6.806a7.704 7.704 0 01-2.911 1.162l-.001 3.643L22 54v2H6v-2l3.5-.001V48.2a4.675 4.675 0 113.221-8.73A7.737 7.737 0 0119.737 35c1.547 0 3.02.457 4.264 1.28L24 28.5l-2.056 1.833-1.33-1.492 20.385-18.176zM13.538 47.368l-.1.077a4.658 4.658 0 01-1.938.831L11.5 54h7.588v-3.552a7.711 7.711 0 01-4.642-2.065 7.782 7.782 0 01-.907-1.014zM41 13.343L26 26.717V54l6-.001V38h18v15.999L56 54V32.999L28 33v-2l28-.001v-4.31L41 13.343zm3.999 35.893l-2.381 4.763h4.763l-2.382-4.763zm-7.999 0l-2.382 4.763h4.763L37 49.236zm11-6.001L46.118 47 48 50.764v-7.529zm-8 0L38.118 47 40 50.764v-7.529zm2 .003v7.524L43.881 47 42 43.238zm-8-.001v7.525L35.881 47 34 43.237zM19.737 37a5.737 5.737 0 104.241 9.6l.022-.026v-7.675l-.088-.097A5.717 5.717 0 0019.737 37zm-9.062 4a2.675 2.675 0 101.868 4.588 7.788 7.788 0 01-.432-4.168 2.638 2.638 0 00-1.436-.42zm28.707-1.002h-4.765L37 44.763l2.382-4.765zm8 0h-4.765L45 44.763l2.382-4.765zM41 19a6 6 0 016 6v1H35v-1a6 6 0 016-6zm0 2a4.002 4.002 0 00-3.83 2.845l-.044.155h7.747l-.042-.155a4.003 4.003 0 00-3.631-2.84z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Gravestones70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("path", { d: "M47.595 5.918l.38.166C58.583 10.734 64 16.668 64 23.904V43H52.995c.003.121.005.242.005.364V64H21l-.001-13H6V30.364c0-7.02 5.268-12.775 15.581-17.28l.4-.175.401.175c8.747 3.821 14.446 8.818 15.457 13.194l-.44-.195c9.143 3.99 14.326 8.958 15.394 14.917H62V23.903c0-6.207-4.745-11.485-14.448-15.819-5.366 2.166-9.481 5.347-11.757 8.327l-1.59-1.214c2.55-3.338 7.104-6.826 13.004-9.129l.386-.15zM37 28.093c-9.405 4.188-14 9.284-14 15.27V62h28V43.364c0-5.987-4.595-11.083-14-15.271zm-15.018-13C12.589 19.281 8 24.377 8 30.363V49h12.999L21 43.364c0-6.841 5.008-12.48 14.817-16.932-.99-3.454-6.006-7.846-13.835-11.339z", fill: "currentColor", fillRule: "nonzero" }))));
}

function GrowthArrow70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M63.998 15L64 31h-2l-.003-12.615-23.352 22.934L28.09 31.237 7.69 50.723l-1.38-1.446L28.09 28.47l10.536 10.064L60.554 17H48v-2h15.998z", id: "growth-arrow-70_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#growth-arrow-70_svg__a" }))));
}

function Guide70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M22 55v1h16v-1H22zm8-55a3 3 0 011 5.83V7h21.389l7.09 6.5-7.09 6.5H34v-2h17.611l4.91-4.5L51.61 9H31v44h9v5H20v-5h9V15H8.389l-4.91 4.5L8.39 24H26v2H7.611l-7.09-6.5L7.61 13H29V5.829A3.001 3.001 0 0130 0zm0 2a1 1 0 100 2 1 1 0 000-2zm4 10v2h-2v-4h17v2H34z", id: "guide-70_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#guide-70_svg__a", transform: "translate(5 6)" }))));
}

function Heart70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M35 57.605l23.153-22.52c.084-.083.168-.166.25-.25 4.902-5.04 4.79-13.1-.25-18.002-5.245-5.102-13.598-5.102-18.843 0L35 21.025l-4.31-4.192c-5.245-5.102-13.598-5.102-18.843 0a12.73 12.73 0 00-.25.25c-4.902 5.04-4.79 13.1.25 18.001L35 57.605zm0-39.37l2.915-2.835c6.022-5.857 15.611-5.857 21.633 0 5.831 5.672 5.96 14.998.288 20.83a14.73 14.73 0 01-.288.288L35 60.395 10.452 36.518c-5.831-5.672-5.96-14.998-.288-20.83.095-.097.19-.194.288-.288 6.022-5.857 15.611-5.857 21.633 0L35 18.235z", id: "heart-70_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#heart-70_svg__a" }))));
}

function Heartbeat70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M48.51 24.542L58 46h6v2h-7l-8.51-18.542-13.59 30.2-5.86-16.165L24 53H6v-2h17l6.36-12.493 5.74 15.834 13.41-29.8zM22.496 11.29l1.044 1.027 1.044-1.027a7.97 7.97 0 0111.181 0 7.751 7.751 0 01.088 10.961l-.088.088L23.54 34.37 11.314 22.34a7.751 7.751 0 01-.087-10.962l.087-.087a7.97 7.97 0 0111.182 0zm-9.779 1.425l-.065.065a5.751 5.751 0 00.065 8.133L23.54 31.564l10.823-10.65.065-.066a5.751 5.751 0 00-.065-8.133 5.97 5.97 0 00-8.376 0l-2.447 2.408-2.447-2.408a5.97 5.97 0 00-8.376 0z", id: "heartbeat-70_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#heartbeat-70_svg__a" }))));
}

function House70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("path", { d: "M58 32.187L35 13.294 12 32.186V59h11v2H6v-2h4l-.001-25.171-2.364 1.944-1.27-1.546L35 10.706l28.635 23.521-1.27 1.546L60 33.829V59h4v2H33v-2h25V32.187zM51 40v19h-2V42h-8v17h-2V40h12zm-18 0v12H19V40h14zm-2 2H21v8h10v-8zm4-23.302l6.64 5.534-1.28 1.536L35 21.302l-5.36 4.466-1.28-1.536L35 18.698z", fill: "currentColor", fillRule: "nonzero" }))));
}

function HouseSun70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("path", { d: "M46 62v2H33v-2h13zM26.5 24.706L43.92 39 44 39v.065l2.634 2.162-1.268 1.546L44 41.653V62h-2V40.012L26.5 27.294 11 40.01V62h3V48h12v14h2v2H7v-2h2V41.652l-1.366 1.121-1.268-1.546L9 39.065V39l.08-.001L26.5 24.706zM24 62V50h-8v12h8zm15-14v10H29V48h10zm-2 2h-6v6h6v-6zM26.5 32.738l7.11 5.47-1.22 1.585-5.89-4.531-5.89 4.53-1.22-1.585 7.11-5.469zM64.051 25v9h-2v-9h2zm-7.945-2.027l1.79.89-2.298 4.626-1.791-.89 2.299-4.626zm-5.813-4.68l1.414 1.414-7 7-1.414-1.414 7-7zM51 6c0 7.18 5.82 13 13 13v2c-8.284 0-15-6.716-15-15h2zm-5.453 6.94l1.017 1.722-4.447 2.627-1.017-1.722 4.447-2.627zM44 6v2h-9V6h9z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Id70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("path", { d: "M48.6 7c2.357 0 4.284 1.844 4.395 4.163l.005.212v32.779l-2 2V11.375a2.386 2.386 0 00-2.235-2.37L48.6 9H21.4a2.39 2.39 0 00-2.394 2.213l-.006.162v47.25c0 1.255.985 2.286 2.235 2.37L21.4 61h27.2a2.39 2.39 0 002.394-2.213l.006-.162v-5.063l2-2v7.063c0 2.347-1.857 4.26-4.187 4.37L48.6 63H21.4c-2.357 0-4.284-1.844-4.395-4.163L17 58.625v-47.25c0-2.347 1.857-4.26 4.187-4.37L21.4 7h27.2zm12.567 31.378l1.416 1.413-18.858 18.884-9.567-9.84 1.434-1.395 8.152 8.384 17.423-17.446zM45 41v2H25v-2h20zm0-5v2H25v-2h20zm-9.966-23.563a5.142 5.142 0 014.467 7.691c1.218.946 2.201 2.01 2.945 3.187.871 1.38 1.465 3.327 1.807 5.85l.137 1.102-.567.331c-2.24 1.31-4.8 1.788-8.783 1.788-3.846 0-6.363-.442-8.545-1.646l-.25-.142-.566-.331.078-.652c.331-2.742.943-4.838 1.866-6.3.743-1.178 1.726-2.24 2.943-3.19a5.142 5.142 0 014.468-7.688zM31.88 21.64l-.017.012c-1.072.824-1.92 1.734-2.548 2.73-.652 1.034-1.144 2.579-1.456 4.627l-.026.172.088.044c1.67.798 3.688 1.132 6.702 1.16l.418.001c3.238 0 5.363-.327 7.108-1.161l.087-.044-.025-.172c-.29-1.912-.739-3.385-1.327-4.413l-.129-.214c-.632-1.001-1.485-1.916-2.565-2.743a5.114 5.114 0 01-3.155 1.083 5.12 5.12 0 01-3.155-1.082zm3.155-7.203a3.142 3.142 0 100 6.285 3.142 3.142 0 000-6.284z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Letter70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M64 14v42H6V14h58zm-2 3.114l-27 22.18L8 17.115v35.469l14.293-14.291 1.414 1.414L9.414 54h51.171L46.293 39.707l1.414-1.414L62 52.585V17.114zM60.206 16H9.792L35 36.706 60.206 16z", id: "letter-70_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#letter-70_svg__a" }))));
}

function Mc70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("path", { d: "M44.74 19.327L56.266 32h-2.262a9.962 9.962 0 00-6.38 2.303l.877.87a8.8 8.8 0 11-1.408 1.42l-.874-.867a9.949 9.949 0 00-2.215 5.995L44 42v.414L39.414 47H26.54l-6.607-7.708-3.485 3.457-1.408-1.42 3.588-3.56L14.54 33H10v-2h5.46l12 14h11.124l3.424-3.424.007-.183c.277-5.533 4.317-10.089 9.609-11.156l.286-.054-8.65-9.51 1.48-1.346zM14.028 33.47l.454 1.947a6.801 6.801 0 107.715 9.492l.135-.31 1.853.752A8.8 8.8 0 1113.69 33.554l.338-.085zm39.976 1.77a6.77 6.77 0 00-4.071 1.354l4.776 4.736-1.409 1.42-4.775-4.737a6.8 6.8 0 105.48-2.773zm-37.861 2.01l-.046 2a2.796 2.796 0 102.719 2.508l-.027-.196 1.97-.343a4.796 4.796 0 11-4.869-3.967l.253-.001zm37.753 0a4.796 4.796 0 11-4.653 4.216l.037-.247 1.97.343a2.797 2.797 0 102.892-2.31l-.2-.002-.046-2zM39 39v2h-6v-2h6zm0-3v2h-4v-2h4zm-17.74-9l8.932 4.962 10.84-1.545a3.322 3.322 0 002.966-2.96l.015-.25.002-.113 2 .02-.005.248c-.116 2.54-2.026 4.648-4.508 5.012l-.228.028-11.466 1.635L20.74 29 10 29v-2h11.26zM45 24v2h-5v-2h5z", fill: "currentColor", fillRule: "nonzero" }))));
}

function MenuEnvelope70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M6 14h58v42H6V14zm2 2v38h54V16H8z" }),
            React.createElement("path", { d: "M35 36.706L7.635 14.227l-1.27 1.546L35 39.294l28.635-23.521-1.27-1.546zM62.707 53.293l-15-15-1.414 1.414 15 15zM8.707 54.707l15-15-1.414-1.414-15 15z" }))));
}

function MobilePhone70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M33 0a3 3 0 013 3v52a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3h30zm1 46H2v9a1 1 0 001 1h30a1 1 0 001-1v-9zm-16 2a3 3 0 110 6 3 3 0 010-6zm0 2a1 1 0 100 2 1 1 0 000-2zm16-40H2v34h32V10zm-1-8H3a1 1 0 00-1 1v5h32V3a1 1 0 00-1-1zM19 4a1 1 0 010 2h-6a1 1 0 010-2h6zm4 0a1 1 0 010 2h-1a1 1 0 010-2h1z", id: "mobile-phone-70_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#mobile-phone-70_svg__a", transform: "translate(17 6)" }))));
}

function Moped70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("path", { d: "M11.316 37.478l1.333 1.49a5.555 5.555 0 107.934 7.743l.161-.197 1.58 1.226a7.555 7.555 0 11-11.221-10.064l.213-.198zm42.11-1.924a7.5 7.5 0 110 15 7.5 7.5 0 010-15zm0 2a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM42.566 17l9.018 15.03c.525-.087 1.06-.138 1.605-.151l.293-.004c1.496 0 2.951.293 4.302.853l.366.16-.832 1.819a9.195 9.195 0 00-3.836-.832c-5.089 0-9.33 3.959-9.478 8.861L44 43v4H23.605L7 31.433V23h24v1c0 4.906-3.316 9.127-7.803 10.516a9.314 9.314 0 008.902 6.575c5.007 0 8.765-3.767 8.897-8.814L41 32v-7h2v7c0 6.279-4.686 11.09-10.901 11.09-5.093 0-9.489-3.39-10.867-8.16-.312.035-.627.058-.946.066L20 35v-2c4.472 0 8.263-3.392 8.905-7.707l.037-.293H8.999v5.566L24.395 45h17.604L42 43c0-4.804 3.184-8.89 7.563-10.45L41.434 19H37v-2h5.566zm10.916 22.318a3.792 3.792 0 11-3.787 3.987l-.005-.195h2a1.792 1.792 0 101.94-1.786l-.148-.006v-2zm-38.93 3.792a1.792 1.792 0 002.746 1.517l.137-.096 1.22 1.586a3.792 3.792 0 01-6.098-2.812l-.005-.195h2zM19 28v2h-8v-2h8zm30.868-5.497l2.849 4.97-1.735.995-2.85-4.97 1.736-.995z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Mortgage70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("path", { d: "M26.01 38.827l16.52 10.325-1.06 1.696-1.47-.92V64h-2V48.679l-12.01-7.506L13 48.987V64h-2V50.19l-1.107.667-1.031-1.714L26.01 38.827zM25 53v11h-2v-9h-5v9h-2V53h9zm10 0v7h-7v-7h7zm-2 2h-3v3h3v-3zm23.966-13.296a5.5 5.5 0 11-10.05 4.474 5.5 5.5 0 0110.05-4.474zm-6.448-.96a3.5 3.5 0 102.847 6.395 3.5 3.5 0 00-2.847-6.395zm6.749-34.987l5.062 23.583-10.842 2.127-.385-1.962 8.844-1.735L55.73 8.128l-43.038 9.148 3.844 17.882.377 1.774 16.975-3.619a7 7 0 11.133 2.018l-18.648 3.974-.208-.978-.585-2.751-4.265-19.84 46.952-9.98zM38.914 29.265a5 5 0 103.907 9.205 5 5 0 00-3.907-9.205zm1.94-16.677l1.248 5.868-1.956.416-1.248-5.869 1.957-.415zm7.96 1.375a3 3 0 11-5.869 1.247 3 3 0 015.87-1.247zm6.847-1.456a3 3 0 11-5.869 1.248 3 3 0 015.87-1.248zm-9.989 1.101a1 1 0 10.416 1.957 1 1 0 00-.416-1.957zm6.847-1.455a1 1 0 10.416 1.956 1 1 0 00-.416-1.956z", fill: "currentColor", fillRule: "nonzero" }))));
}

function NotificationSwish70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M42 22.005a19.93 19.93 0 00-6.606-14.849l-3.385 4.207c7.135 6.512 8.059 17.52 1.928 25.136a18.348 18.348 0 01-4.74 4.167C36.687 37.776 42 30.51 42 22.005zm2 0C44 34.151 34.15 44 22 44c-2.765 0-5.463-.518-8.012-1.514l.665-1.885c6.4 2.018 13.455-.046 17.726-5.356 5.65-7.019 4.577-17.272-2.388-22.984l-.766-.628 5.89-7.32.78.638C40.99 9.11 44 15.306 44 22.005zm-29.923 9.813l.77.629-5.879 7.294-.779-.628A21.95 21.95 0 010 21.995C0 9.849 9.85 0 22 0c3.09 0 6.094.642 8.87 1.87l-.747 1.854c-6.562-2.398-13.998-.4-18.442 5.12-5.645 7.025-4.572 17.277 2.396 22.974zM10.122 7.591a18.36 18.36 0 015.251-4.467C7.585 5.858 2 13.275 2 21.995a19.94 19.94 0 006.683 14.913l3.376-4.19c-7.137-6.5-8.061-17.506-1.937-25.127z", id: "notification-swish-70_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#notification-swish-70_svg__a", transform: "translate(13 13)" }))));
}

function Padlock70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M23 0c9.948 0 18 8.29 18 18.5V26h5v32H0V26h5v-7.5C5 8.29 13.052 0 23 0zm21 28H2v28h42V28zm-21 4a5 5 0 014.026 7.966L30.346 51h-14.69l3.315-11.038A5 5 0 0123 32zm0 2a3 3 0 00-2.188 5.052l.394.42L18.345 49h9.31l-2.865-9.524.395-.42A3 3 0 0023 34zm0-32C14.17 2 7 9.38 7 18.5V26h5v-7.2C12 12.3 16.907 7 23 7s11 5.3 11 11.8V26h5v-7.5C39 9.38 31.83 2 23 2zm0 7c-4.953 0-9 4.371-9 9.8V26h18v-7.2c0-5.429-4.047-9.8-9-9.8z", id: "padlock-70_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#padlock-70_svg__a", transform: "translate(12 6)" }))));
}

function Parasol70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("path", { d: "M42 53c3.136 0 5.804 1.019 7.952 3.045l.255.248c1.72 1.72 4.824 2.646 9.337 2.704L60 59v2c-5.081 0-8.756-1.006-11-3.094l-.207-.199C46.983 55.897 44.739 55 42 55c-2.62 0-4.788.821-6.554 2.476l-.239.231c-2.106 2.107-4.735 3.207-7.833 3.288L27 61H9v-2h18c2.62 0 4.788-.821 6.554-2.476l.239-.231C35.983 54.103 38.739 53 42 53zM24.999 24.635a1 1 0 011.002 0l14.56 8.437a1 1 0 01.432.507l1.94 5.063A1 1 0 0142 40h-4.5a1 1 0 01-.447-.106L34.5 38.618l-2.553 1.276a1 1 0 01-.331.1L31.5 40h-3a1 1 0 01-.447-.106l-1.554-.776L26.5 57h-2V39.118l-1.553.776a1 1 0 01-.217.08l-.114.02L22.5 40h-3a1 1 0 01-.447-.106L16.5 38.618l-2.553 1.276a1 1 0 01-.331.1L13.5 40H9a1 1 0 01-.934-1.358l1.941-5.063a1 1 0 01.433-.507zm-3.245 4.191l-10.006 5.799L10.454 38h2.808l2.58-1.29 5.912-7.884zM26.5 28.5L26.5 32h-2v-3.5l-6.482 8.641 1.719.859h2.525l2.237-1.119L24.5 34h2v2.881L28.736 38h2.525l1.718-.859L26.5 28.5zm2.745.326l5.912 7.884L37.737 38h2.808l-1.294-3.375-10.007-5.799zM50.5 28.5V33h-2v-4.5h2zm5.01-2.904l3.182 3.182-1.414 1.414-3.182-3.182 1.414-1.414zm-12.02 0l1.414 1.414-3.182 3.182-1.414-1.414 3.182-3.182zM49.5 15.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM42 20v2h-4.5v-2H42zm19.5 0v2H57v-2h4.5zm-19.778-8.192l3.182 3.182-1.414 1.414-3.182-3.182 1.414-1.414zm15.556 0l1.414 1.414-3.182 3.182-1.414-1.414 3.182-3.182zM50.5 9v4.5h-2V9h2z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Pension70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("path", { d: "M13.571 47L5 62h60l-8.571-15H13.57zm1.161 2h40.536l6.286 11H8.446l6.286-11zM23.006 30l-8.631 15h41.25l-8.63-15h-23.99zm22.832 2l6.329 11H17.833l6.33-11h21.675zM35 8L23.75 28h22.5L35 8zm7.83 18H27.17L35 12.08 42.83 26z", fill: "currentColor", fillRule: "nonzero" }),
            React.createElement("g", { strokeWidth: 2 },
                React.createElement("path", { d: "M-146.05 32l-7.121 13h36.574l-7.341-13h-22.112zM-134.997 11.216L-144.137 28h18.34l-9.2-16.784z", stroke: "#E30613" }),
                React.createElement("path", { d: "M-155.266 49l-6.044 11h52.61l-6.121-11h-40.445z", stroke: "#005AA0" })))));
}

function PensionOccupational70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("path", { d: "M55.767 48L63 61H7l7.142-13h41.625zm-1.176 2H15.325l-4.944 9h49.217l-5.007-9zm-7.946-19l8.47 15H15.142l8.217-15h23.287zM35 9.13L45.891 29H24.18L35 9.13zm.006 4.172L27.546 27h14.968l-7.508-13.698z", fill: "currentColor", fillRule: "nonzero" }))));
}

function PensionPrivate70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("path", { d: "M55.767 48L63 61H7l7.142-13h41.625zm-1.176 2H15.325l-4.944 9h49.217l-5.007-9zm-7.946-19l8.47 15H15.142l8.217-15h23.287zm-1.167 2H24.542l-6.025 11H51.69l-6.212-11zM35 9.13L45.891 29H24.18L35 9.13z", fill: "currentColor", fillRule: "nonzero" }))));
}

function PensionState70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M51.429 39L60 54H0l8.571-15H51.43zm-9.435-17l8.631 15H9.375l8.63-15h23.99zm-1.156 2H19.162l-6.329 11h34.334l-6.33-11zM30 0l11.25 20h-22.5L30 0zm0 4.08L22.17 18h15.66L30 4.08z", id: "pension-state-70_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#pension-state-70_svg__a", transform: "translate(5 8)" }))));
}

function Percent70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M41.155.466l1.69 1.068-36 57-1.69-1.068 36-57zM37.5 37C43.299 37 48 41.701 48 47.5S43.299 58 37.5 58 27 53.299 27 47.5 31.701 37 37.5 37zm0 2a8.5 8.5 0 100 17 8.5 8.5 0 000-17zm-27-39C16.299 0 21 4.701 21 10.5S16.299 21 10.5 21 0 16.299 0 10.5 4.701 0 10.5 0zm0 2a8.5 8.5 0 100 17 8.5 8.5 0 000-17z", id: "percent-70_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#percent-70_svg__a", transform: "translate(11 6)" }))));
}

function Pin70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("path", { d: "M35 6.085c13.76 0 24 9.531 24 23.379 0 11.495-7.865 22.333-23.452 32.532l-.007.003L53 62v2H17v-2h17.458l-.005-.004C18.865 51.806 11 40.966 11 29.464 11 15.616 21.24 6.085 35 6.085zm0 2c-12.687 0-22 8.669-22 21.379 0 10.578 7.288 20.75 22 30.498 14.712-9.756 22-19.928 22-30.498 0-12.71-9.313-21.379-22-21.379zM35 23a7 7 0 017 7h-2a5 5 0 10-5 5v2a7 7 0 010-14z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Phone70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M33 0a3 3 0 013 3v52a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3h30zm1 46H2v9a1 1 0 001 1h30a1 1 0 001-1v-9zm-16 2a3 3 0 110 6 3 3 0 010-6zm0 2a1 1 0 100 2 1 1 0 000-2zm16-40H2v34h32V10zm-1-8H3a1 1 0 00-1 1v5h32V3a1 1 0 00-1-1zM19 4a1 1 0 010 2h-6a1 1 0 010-2h6zm4 0a1 1 0 010 2h-1a1 1 0 010-2h1z", id: "phone-70_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#phone-70_svg__a", transform: "translate(17 6)" }))));
}

function Pregnant70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("path", { d: "M35 6c3.134 0 6.056 1.32 8.123 3.582l.218.246-1.516 1.305a9 9 0 10-12 13.23l.041-.015.02.059A9 9 0 0044 17a9.01 9.01 0 00-.37-2.566l-.029-.09h-6.293c-2.367 0-4.155-.639-5.408-1.735l-.184-.168c-.724-.689-1.126-1.395-1.306-1.948l-.043-.147 1.932-.515c.065.242.302.691.796 1.161.83.79 2.081 1.294 3.888 1.348l.325.005h7.689l.403 1.063c.396 1.146.6 2.356.6 3.592 0 2.81-1.054 5.374-2.788 7.318 3.318 1.08 5.672 3.935 5.784 7.42L49 32v15c0 2.843-2.706 4.9-5.775 4.996L43 52H32c-2.206 0-4.041-1.82-4-4.018.039-2.099 1.732-3.868 3.799-3.977L32 44h9V34h2v12H32c-1.056 0-1.98.931-2 2.019-.02 1.019.82 1.898 1.851 1.975L32 50h11c2.094 0 3.877-1.26 3.994-2.836L47 47V32c0-3-2.227-5.435-5.33-6.016l-.248-.043.003-.012A10.95 10.95 0 0135 28a10.95 10.95 0 01-5.341-1.382 6.434 6.434 0 00-3.406 5.424l-.005.257v4.334a12.992 12.992 0 013.237-.485l.307-.004v2c-6.075 0-11 4.925-11 11 0 2.754 1.014 5.347 2.817 7.352 2 2.225 4.81 3.551 7.845 3.643l.338.005v2c-1.306 0-2.582-.194-3.793-.562L26 64h-2l-.001-3.214a13.018 13.018 0 01-3.877-2.953 12.951 12.951 0 01-3.33-8.689c0-5.196 3.049-9.68 7.455-11.761v-5.084a8.433 8.433 0 013.62-6.926A10.975 10.975 0 0124 17c0-6.075 4.925-11 11-11zm10 48v10h-2V54h2zm-7.314-33.707l1.414 1.414a6.209 6.209 0 01-4.403 1.822 6.21 6.21 0 01-4.191-1.619l-.213-.203 1.414-1.414a4.21 4.21 0 002.99 1.236 4.21 4.21 0 002.813-1.07l.176-.166z", fill: "currentColor", fillRule: "nonzero" }))));
}

function RadioEnclosed70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M35 6c16.016 0 29 12.984 29 29S51.016 64 35 64 6 51.016 6 35 18.984 6 35 6zm0 2C20.088 8 8 20.088 8 35s12.088 27 27 27 27-12.088 27-27S49.912 8 35 8zm0 22a5 5 0 110 10 5 5 0 010-10z", id: "radio-enclosed-70_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#radio-enclosed-70_svg__a" }))));
}

function RetroPhone70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M12.689.897c1.592 0 3.106.666 4.372 1.918.566.523 2.976 2.933 7.23 7.231 2.742 2.74 2.742 6.291 0 9.032-.365.365-3.053 3.106-4.123 4.085-.653 1.039 3.354 7.522 6.72 10.441 3.366 2.92 9.283 6.671 9.842 6.122l4.124-4.112c1.319-1.318 2.859-2.01 4.464-2.01 1.618 0 3.145.705 4.411 2.023l7.166 7.192c1.318 1.305 2.01 2.858 2.01 4.476 0 1.606-.679 3.172-1.971 4.516-.561.588-4.02 4.085-4.033 4.112-1.984 2.153-4.516 3.236-7.53 3.236-.262 0-.549-.013-.823-.026-4.477-.287-8.484-1.97-11.485-3.393-7.858-3.798-14.736-9.188-20.452-16.014-4.712-5.665-7.87-10.95-9.985-16.654-.861-2.324-1.984-5.874-1.67-9.685.208-2.362 1.161-4.398 2.832-6.069L8.25 2.815C9.557 1.563 11.097.897 12.69.897zm0 2c-1.057 0-2.108.454-3.023 1.333L5.202 8.733c-1.34 1.34-2.087 2.939-2.253 4.818-.232 2.823.35 5.584 1.552 8.825 2.039 5.499 5.089 10.59 9.643 16.065 5.54 6.615 12.194 11.827 19.775 15.492 4.06 1.924 7.29 2.982 10.724 3.203.361.017.55.023.727.023 2.46 0 4.452-.852 6.049-2.58.15-.158.15-.158.232-.24a2939.13 2939.13 0 011.88-1.911c.924-.94 1.503-1.53 1.801-1.837l-10.47-10.47 1.415-1.414 10.248 10.246c.254-.544.38-1.102.38-1.658 0-1.069-.47-2.117-1.427-3.065l-7.165-7.191c-.93-.968-1.946-1.435-2.995-1.435-1.053 0-2.093.468-3.052 1.427l-4.133 4.12c-1.074 1.056-1.869.857-3.549.073-.758-.354-1.714-.893-2.784-1.563-2.15-1.346-4.525-3.074-6.223-4.546-1.742-1.51-3.696-3.922-5.246-6.366-1.973-3.114-2.818-5.12-1.857-6.65l.144-.23.2-.182c.368-.337.993-.946 1.802-1.751a586.6 586.6 0 002.067-2.08L11.301 6.716l1.398-1.43 11.222 10.979c.812-1.597.463-3.298-1.05-4.81-4.214-4.258-6.635-6.679-7.217-7.217-.903-.894-1.919-1.34-2.965-1.34z", id: "retro-phone-70_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#retro-phone-70_svg__a", transform: "translate(5 5)" }))));
}

function Rv70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("path", { d: "M26 40a4 4 0 110 8 4 4 0 010-8zm24 0a4 4 0 110 8 4 4 0 010-8zm-24 2a2 2 0 100 4 2 2 0 000-4zm24 0a2 2 0 100 4 2 2 0 000-4zm7.693-22l6.408 17.088L59.581 45H55v-2h3.418l3.48-6.089L56.306 22H11.792l-3.53 15H14v2H8.618l2 4H21v2H9.382l-3.438-6.877L10.208 20h47.485zM45 43v2H31v-2h14zm-3-18v16h-2V27h-5v14h-2V25h9zm11.754 0l2.572 9H47v-9h6.754zm-1.509 2H49v5h4.674l-1.429-5zM26 25v7H14v-7h12zm-2 2h-8v3h8v-3z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Save70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M44.29 10.736l-2.464 11.65a19.273 19.273 0 012.174 8.9c0 4.604-1.632 8.968-4.586 12.522L41.914 58l-11.012-.008-2.523-7.19c-1.896.508-3.87.768-5.879.768-1.985 0-3.932-.254-5.813-.751l-2.597 7.174H3.088l2.478-14.207C2.63 40.25 1 35.886 1 31.286c0-3.14.757-6.177 2.19-8.931L.71 10.745l12.394 2.29A22.484 22.484 0 0122.5 11c3.336 0 6.566.718 9.493 2.08l12.296-2.344zM22.5 13c-3.113 0-6.12.684-8.832 1.979l-.293.14-10.084-1.864 2.009 9.4-.177.326A17.287 17.287 0 003 31.286c0 4.27 1.564 8.313 4.386 11.555l.313.359-2.232 12.794h7.22l2.762-7.632.912.283c1.972.613 4.03.926 6.139.926 2.137 0 4.226-.322 6.209-.946l.923-.29 2.688 7.66 7.21.004-2.25-12.778.313-.36C40.433 39.601 42 35.56 42 31.286c0-2.916-.728-5.733-2.106-8.275l-.176-.323 1.993-9.424-9.989 1.903-.298-.144A20.459 20.459 0 0022.5 13zM22 29a7 7 0 110 14 7 7 0 010-14zm0 2a5 5 0 100 10 5 5 0 000-10zm-1 4v2h-2v-2h2zm4 0v2h-2v-2h2zm4.934-11.962c2.48.437 4.038 3.013 3.564 5.705l-1.97-.347c.292-1.659-.613-3.154-1.941-3.388-1.328-.235-2.69.861-2.983 2.52l-1.97-.347c.475-2.693 2.821-4.58 5.3-4.143zm-10.568 4.143l-1.97.347c-.292-1.659-1.655-2.755-2.983-2.52-1.328.234-2.233 1.73-1.94 3.388l-1.97.347c-.475-2.692 1.084-5.268 3.563-5.705 2.479-.437 4.825 1.45 5.3 4.143zM22.437.193c6.853 0 12.605 5.11 13.453 11.85l-1.984.25c-.723-5.743-5.627-10.1-11.469-10.1-5.782 0-10.654 4.272-11.447 9.943l-1.98-.277C9.94 5.203 15.654.193 22.437.193zm3.37 5.737c.52 0 1.011.09 1.47.272.459.181.858.448 1.198.799.34.351.61.776.808 1.275.198.499.297 1.071.297 1.717v1.522c-.717-.215-1.442-.424-2.268-.542l-.035-1.07c-.028-.625-.14-1.777-1.47-1.777-.89-.038-1.488.38-1.545 1.64l.016.757c-.71-.085-1.46-.131-2.267-.12l.005-.41c0-.646.099-1.218.297-1.717a3.79 3.79 0 01.816-1.275 3.457 3.457 0 011.207-.799c.459-.181.95-.272 1.47-.272zm-6.647.17v4.504a14.61 14.61 0 00-2.313.388V8.089H15.42V6.1h3.74z", id: "save-70_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#save-70_svg__a", transform: "translate(13 6)" }))));
}

function Shield70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M9.755 2C8.864 5.656 5.656 8.864 2 9.755V26c0 8.22 6.53 15.507 20 21.798C35.47 41.507 42 34.22 42 26V9.755C38.344 8.864 35.136 5.656 34.245 2H9.755zM36 0c0 4 4 8 8 8v18c0 9.333-7.333 17.333-22 24C7.333 43.333 0 35.333 0 26V8c4 0 8-4 8-8h28zm-7.707 15.537L22 21.829l-6.293-6.292-1.414 1.414 6.292 6.292-6.292 6.294 1.414 1.414L22 24.658l6.293 6.293 1.414-1.414-6.293-6.294 6.293-6.292-1.414-1.414z", id: "shield-70_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#shield-70_svg__a", transform: "translate(13 10)" }))));
}

function Smalltruck70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("path", { d: "M21 41a5 5 0 110 10 5 5 0 010-10zm30 0a5 5 0 110 10 5 5 0 010-10zm-30 2a3 3 0 100 6 3 3 0 000-6zm30 0a3 3 0 100 6 3 3 0 000-6zm-3-26v23H9.416l1.79 5.044h3.43v2H9.794L7.293 40H6V17h42zm9.677 7L64 39.807V47h-7v-2h5v-4.806L56.323 26H52v-2h5.677zM45 45v2H27v-2h18zm6-21v16h-2V24h2zm-5-5H8v19h38V19zm9.66 9l3.857 9H52v-9h3.66zM27 34v2h-2v-2h2zm11 0v2h-2v-2h2zm-22 0v2h-2v-2h2zm38.34-4H54v5h2.483l-2.143-5z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Snailmail70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("path", { d: "M47 6v6h-6v15.639h-2V21H24.423C26.603 22.68 28 25.267 28 28.168v26.729h34V28.159c0-3.91-2.958-7.03-6.761-7.155L55 21H44v-2h11c5.034 0 9 4.076 9 9.16v28.738l-26-.001v7h-2v-7h-2v7h-2v-7H6v-2h20V53H13V31h13v-2.832c0-3.878-3.264-7.037-7.255-7.162l-.245-.004c-4.101 0-7.5 3.208-7.5 7.166v24.866H9V28.168c0-4.925 4.024-8.943 9.072-9.159l.001-.009H39V6h8zM25.818 43.29L15 34.152v15.431l5.293-5.291 1.414 1.414L16.414 51H26v-7.928l-.182.217zM26 33h-9.266L26 40.825V33zM45 8h-4v2h4V8z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Snowmobile70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("path", { d: "M33.506 39C36.02 39 38 41.266 38 44s-1.98 5-4.494 5H10.494C7.98 49 6 46.734 6 44s1.98-5 4.494-5zm6.201-18.707L56.425 37.01l-4.216 4.091a11.657 11.657 0 01-1.09.964l5.154 4.82c.404-.073.675-.19.953-.369.476-.308 3.346-3.361 4.55-4.66l.504-.548 1.441 1.384c-.332.345-.648.679-.964 1.015l-.956 1.03c-.23.252-1.177 1.288-1.4 1.53l-.386.413c-.727.766-1.193 1.186-1.704 1.516-.951.615-1.755.776-3.718.8L54 49H42v-2h11.466l-4.116-3.848c-.473.223-.954.4-1.442.534a8.486 8.486 0 01-2.332.317L38.999 44 39 42l6.258.002c1.834.028 3.385-.375 5.082-1.886l.306-.283.157-.154 2.77-2.69-9.08-9.08L38.088 34H14.46c-1.576 0-2.073.179-2.388 1.16l-.51 1.817-1.927-.535.474-1.698c.61-2.14 1.828-2.707 4.11-2.742L37.289 32l.497-.473L36.528 30H33v-2h4.472l1.767 2.146 3.841-3.651-4.787-4.788 1.414-1.414zM33.506 41H10.494C9.15 41 8 42.315 8 44s1.15 3 2.494 3h23.012C34.85 47 36 45.685 36 44s-1.149-3-2.494-3zM32 36v2H14v-2h18zm21.707-6.707l3 3-1.414 1.414-3-3 1.414-1.414z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Sustainability70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("path", { d: "M59.116 6.547l.239 1.268c1.768 9.42 2.317 17.514 1.64 24.285-.898 8.985-6.538 12.9-14.02 12.9-3.175 0-5.902-.972-8.14-2.905L24.837 63.546l-1.674-1.092 6.725-10.307-10.712-15.58 1.648-1.134 3.716 5.403c2.754-2.712 3.428-4.75 1.21-7.909-1.94-2.764-6.392-4.73-13.375-5.794-.838 6.652-.264 11.386 1.642 14.187 1.165 1.71 2.913 2.126 5.532 1.207l.662 1.887c-3.417 1.199-6.129.555-7.847-1.969-2.342-3.44-2.924-8.964-1.836-16.586l.14-.983.985.133c8.054 1.093 13.306 3.31 15.734 6.77 1.702 2.424 2.008 4.743 1.157 6.897-.566 1.435-1.357 2.4-2.854 3.831l5.379 7.828L41.22 34.779 38.043 24.29l1.914-.58 2.69 8.882 6.868-10.523 1.675 1.093-6.663 10.21 9.213-2.48.52 1.93-11.373 3.065-2.946 4.516C41.85 42.138 44.178 43 46.975 43c6.546 0 11.246-3.263 12.03-11.1.626-6.259.167-13.742-1.383-22.443-10.28 4.84-16.982 8.308-20.065 10.374-4.993 3.345-6.892 11.268-2.899 15.282l-1.418 1.41c-4.985-5.01-2.741-14.37 3.203-18.354 3.313-2.22 10.466-5.901 21.504-11.074l1.17-.548z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Tag70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("path", { d: "M8.063 40.367l20.816 20.816 32.055-32.055.25-10.555L50.675 8.06l-10.556.25L8.063 40.368zM39.254 6.295l12.242-.29 11.745 11.744-.29 12.242-34.072 34.072L5.183 40.367 39.254 6.295zm14.142 20.956c-3.105 3.104-8.171 3.061-11.317-.084-3.146-3.146-3.189-8.213-.084-11.317 3.104-3.105 8.171-3.062 11.317.084 3.145 3.146 3.188 8.212.084 11.317zm-1.44-1.44c2.304-2.304 2.272-6.081-.084-8.437-2.356-2.356-6.133-2.388-8.437-.084-2.304 2.304-2.272 6.081.084 8.437 2.356 2.356 6.133 2.388 8.437.084zm-1.17-1.17c-1.688 1.687-4.437 1.664-6.14-.04-1.705-1.704-1.728-4.454-.041-6.141 1.687-1.687 4.437-1.664 6.14.04 1.705 1.704 1.728 4.453.04 6.14zm-1.44-1.44c.886-.887.874-2.347-.04-3.261-.915-.914-2.374-.927-3.261-.04s-.874 2.346.04 3.26c.914.915 2.374.927 3.26.04z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Tractor70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("path", { d: "M22 39c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10 4.477-10 10-10zm31.477 6.4a6.74 6.74 0 110 13.48 6.74 6.74 0 010-13.48zM22 41a8 8 0 100 16 8 8 0 000-16zm31.477 6.4a4.74 4.74 0 100 9.48 4.74 4.74 0 000-9.48zM22 45a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4zM35.865 9l6.389 21.64h5.494V17.255c0-.092-.01-.194-.027-.297l-.034-.154a1.721 1.721 0 00-1.665-1.285v-2a3.721 3.721 0 013.6 2.781c.081.311.127.64.127.955l-.001 13.385h7.537l.1 11.799c.885.33 1.722.778 2.492 1.336l-1.175 1.62a8.456 8.456 0 00-4.985-1.615c-3.674 0-6.934 2.443-8.078 5.932l-.226.688h-2.676v-2h1.254c1.595-3.927 5.421-6.62 9.726-6.62.563 0 1.119.044 1.664.131l-.079-9.271H40.76L34.37 11l-8.593-.001V32h-2V10.999L14.6 11l-2.026 20.541 1.713 5.683a14.432 14.432 0 017.907-2.344c7.609 0 13.59 5.914 14.074 13.52h3.47v2H34.3v-1c0-6.995-5.291-12.52-12.106-12.52-6.904 0-12.5 5.596-12.5 12.5h-2c0-4.324 1.892-8.206 4.895-10.862l-2.044-6.779L12.788 9h23.077z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Trailer70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("path", { d: "M20 33a6 6 0 110 12 6 6 0 010-12zm0 2a4 4 0 100 8 4 4 0 000-8zm0 1a3 3 0 110 6 3 3 0 010-6zm0 2a.997.997 0 00-1 1 1 1 0 101-1zm44-10v4h-2v-2H49v10H27v-2h20v-8H11v8h2v2H9V28h55zM8 28v4H6v-4h2z", fill: "currentColor", fillRule: "nonzero" }))));
}

function Travel70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M45.38 32.26l7.467 1.208.128.693c.416 2.243-.467 4.12-2.527 5.465l-.129.084-11.713 3.292-7.461 7.945-8.57 2.688 1.669-6.571-2.124.66-13.724-1.501-7.43-6.273 9.175-2.635 6.187 3.383 5.298-1.54-5.197-3.877 8.31-2.45 8.96 2.82 11.68-3.392zm.124 2.045l-29.411 8.543-6.19-3.384-4.785 1.374 4.102 3.463 12.704 1.389 2.897-.9.3-1.181 1.939.492-1.664 6.553 4.65-1.459 7.483-7.968 11.948-3.357c1.088-.747 1.6-1.606 1.598-2.662l-5.57-.903zm-20.785.617l-3.89 1.147 3.204 2.39 6.202-1.802-5.516-1.735zm7.62-9.506a3.564 3.564 0 110 7.129 3.564 3.564 0 010-7.13zm0 2a1.564 1.564 0 100 3.129 1.564 1.564 0 000-3.13zm-7.943-11.417a5.35 5.35 0 110 10.701 5.35 5.35 0 010-10.7zM16.777.487c4.818 0 8.783 3.65 9.282 8.335 4.676 0 8.389 3.713 8.389 8.294 0 1.59-.45 3.116-1.283 4.432l-1.69-1.07a6.293 6.293 0 00-5.321-9.655h-2.042v-1a7.335 7.335 0 00-14.67 0v1.002l-1.002-.003a6.278 6.278 0 00-6.291 6.284 6.293 6.293 0 006.293 6.293h8.335v2H8.442a8.293 8.293 0 01-8.293-8.293 8.28 8.28 0 017.34-8.231c.476-4.71 4.453-8.388 9.288-8.388zM24.397 18a3.35 3.35 0 100 6.701 3.35 3.35 0 000-6.7z", id: "travel-70_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#travel-70_svg__a", transform: "translate(8.3 8.051)" }))));
}

function Truck70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
                React.createElement("path", { d: "M22 59c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm0-2a8 8 0 110-16 8 8 0 010 16z" }),
                React.createElement("path", { d: "M22 53a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 110-4 2 2 0 010 4z" }),
                React.createElement("path", { d: "M22.194 34.88c-8.008 0-14.5 6.492-14.5 14.5h2c0-6.904 5.596-12.5 12.5-12.5 6.815 0 12.106 5.525 12.106 12.52v1h5.437v-2h-3.469c-.484-7.606-6.465-13.52-14.074-13.52zM53.477 58.88a6.74 6.74 0 100-13.48 6.74 6.74 0 000 13.48zm0-2a4.74 4.74 0 110-9.48 4.74 4.74 0 010 9.48z" }),
                React.createElement("path", { d: "M42.737 48.4v2h2.676l.226-.688c1.144-3.489 4.404-5.932 8.078-5.932 1.818 0 3.546.57 4.985 1.614l1.175-1.619a10.456 10.456 0 00-6.16-1.995c-4.305 0-8.13 2.693-9.726 6.62h-1.254z" }),
                React.createElement("path", { d: "M35.865 9H12.788l-2.243 22.739 2.191 7.27 1.915-.578-2.077-6.89L14.6 11h19.77l6.389 21.64h14.543l.089 10.408 2-.016-.106-12.392H42.254z" }),
                React.createElement("path", { d: "M23.777 10v22h2V10zM49.749 32.196V17.255c0-.315-.046-.644-.127-.955a3.721 3.721 0 00-3.6-2.781v2c.788 0 1.47.534 1.665 1.285.04.152.062.313.062.45v14.942h2z" })))));
}

function Umbrella70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M28 0v4.014c14.616.405 26 9.664 26 21.87V27c0 1.333-2 1.333-2 0 0-1.528-2.392-3-5.5-3S41 25.472 41 27c0 1.333-2 1.333-2 0 0-1.528-2.392-3-5.5-3S28 25.472 28 27v24.349C28 54.463 25.545 57 22.5 57S17 54.463 17 51.349a1 1 0 012 0C19 53.373 20.575 55 22.5 55s3.5-1.627 3.5-3.651V27c0-1.528-2.392-3-5.5-3S15 25.472 15 27c0 1.333-2 1.333-2 0 0-1.528-2.392-3-5.5-3-2.937 0-5.235 1.314-5.479 2.749l.005.134a1 1 0 01-.038.298l-.026.091C1.646 28.39 0 28.161 0 27c0-.12.006-.24.018-.358L0 25.883C0 13.678 11.385 4.42 26 4.013V0h2zm-4.294 6.16l-.01.002C12.231 7.295 3.48 14.278 2.17 23.452 3.54 22.541 5.438 22 7.5 22c2.319 0 4.43.684 5.816 1.808 1.264-7.149 4.525-12.945 10.39-17.648zm7.337.083l.104.073c5.393 3.916 8.402 9.706 9.577 17.46C42.11 22.672 44.203 22 46.5 22c2.06 0 3.956.54 5.327 1.449-1.294-8.982-9.694-15.852-20.784-17.206zm-3.042.419L28 10.816h-2V6.918c-5.881 4.344-9.178 9.677-10.548 16.356C16.795 22.471 18.576 22 20.5 22c2.15 0 4.12.588 5.502 1.57L26 22h2v1.569c1.38-.98 3.35-1.569 5.5-1.569 1.961 0 3.773.49 5.125 1.32C37.302 15.563 33.988 10.102 28 6.662zM28 13v3h-2v-3h2z", id: "umbrella-70_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#umbrella-70_svg__a", transform: "translate(8 7)" }))));
}

function User70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M22.828 9.922a22.766 22.766 0 0116.797 7.368l-1.471 1.355a20.766 20.766 0 00-15.326-6.723C11.325 11.922 2 21.247 2 32.75s9.325 20.828 20.828 20.828 20.828-9.325 20.828-20.828c0-2.459-.426-4.857-1.247-7.117H26.466c-5.402 0-11.216-3.13-12.77-7.37l1.878-.688c1.228 3.352 6.255 6.058 10.892 6.058h17.308l.252.628a22.767 22.767 0 011.63 8.489c0 12.608-10.22 22.828-22.828 22.828C10.22 55.578 0 45.358 0 32.75 0 20.142 10.22 9.922 22.828 9.922zm6.296 31.99l1.3 1.52c-2.18 1.863-4.834 2.89-7.627 2.89-2.763 0-5.391-1.006-7.559-2.833l1.29-1.53c1.814 1.53 3.989 2.363 6.27 2.363 2.304 0 4.5-.85 6.326-2.41zm1.642-12.146a4.969 4.969 0 014.968 4.968h-2a2.969 2.969 0 00-5.937 0h-2a4.969 4.969 0 014.969-4.968zm-15.875 0a4.969 4.969 0 014.968 4.968h-2a2.969 2.969 0 00-5.937 0h-2a4.969 4.969 0 014.969-4.968zm39.043-15.684l.811 1.829-7.62 3.378-.81-1.829 7.62-3.378zm-5.99-7.86l1.362 1.463-5.873 5.468-1.363-1.464 5.874-5.468zM39.768.6l1.773.925-3.856 7.39-1.773-.926L39.768.6z", id: "user-70_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#user-70_svg__a", transform: "translate(7 6.827)" }))));
}

function UserHappy70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M26 0c7.365 0 14.239 3.08 19.13 8.392l-1.47 1.355A23.929 23.929 0 0026 2C12.745 2 2 12.745 2 26s10.745 24 24 24 24-10.745 24-24a23.95 23.95 0 00-1.472-8.296H30.167c-7.39 0-12.56-3.081-14.49-8.345l1.878-.689c1.619 4.417 6.01 7.034 12.612 7.034H49.89l.252.628A25.93 25.93 0 0152 26c0 14.36-11.64 26-26 26S0 40.36 0 26 11.64 0 26 0zm9.23 35.362l1.54 1.276C33.955 40.038 30.11 42 25.992 42c-4.11 0-7.947-1.953-10.761-5.342l1.538-1.278c2.448 2.948 5.733 4.62 9.223 4.62 3.497 0 6.788-1.679 9.238-4.638zM36.5 22c2.454 0 4.5 1.754 4.5 4h-2c0-1.067-1.088-2-2.5-2s-2.5.933-2.5 2h-2c0-2.246 2.046-4 4.5-4zm-21 0c2.454 0 4.5 1.754 4.5 4h-2c0-1.067-1.088-2-2.5-2s-2.5.933-2.5 2h-2c0-2.246 2.046-4 4.5-4z", id: "user-happy-70_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#user-happy-70_svg__a", transform: "translate(9 10)" }))));
}

function Wallet70(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 70, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { d: "M57.143 11v2H9a1 1 0 00-1 1v37a5 5 0 005 5h45V44h-8v-2h11a1 1 0 001-1V31a1 1 0 00-1-1H50v-2h8V18H13v-2h47v12h1a3 3 0 013 3v10a3 3 0 01-3 3h-1v14H13a7 7 0 01-7-7V14a3 3 0 013-3h48.143zM56 33a3 3 0 110 6 3 3 0 010-6zm0 2a1 1 0 100 2 1 1 0 000-2z", id: "wallet-70_svg__a" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h70v70H0z" }),
            React.createElement("use", { fill: "currentColor", fillRule: "nonzero", xlinkHref: "#wallet-70_svg__a" }))));
}

function Plus10(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 10, height: 10, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M4 0v4H0v2h4v4h2.001V6H10V4H6.001V0z", fill: "currentColor", fillRule: "evenodd" })));
}

function Calendar26(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 26, height: 26, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M20.2 22H5.244C4.574 22 4 21.44 4 20.767V12h18v8.767c0 .717-.556 1.233-1.227 1.233M5.176 5H8v2h2V5h6v2h2V5h2.793C21.47 5.025 22 5.57 22 6.24V10H4V6.24c0-.67.53-1.215 1.176-1.24M18 3V1h-2v2h-6V1H8v2H4.999C3.318 3.064 2 4.487 2 6.24V21C2 22.827 3.3 24 5 24h15.97c1.7 0 3.031-1.173 3.031-3V6.24C24 4.487 22.682 3.064 20.97 3H18z", fill: "currentColor", fillRule: "evenodd" })));
}

function KontaktaOss26(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 26, height: 26, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M13.018 24.982c-1.633 0-2.951-1.338-2.951-2.983 0-1.646 1.318-2.984 2.95-2.984 1.633 0 2.952 1.338 2.952 2.984 0 1.645-1.319 2.983-2.951 2.983zm0-1.5c.8 0 1.451-.662 1.451-1.483 0-.822-.652-1.484-1.451-1.484-.8 0-1.451.662-1.451 1.484 0 .821.652 1.483 1.45 1.483zM13.018 2.433c2.953 0 5.717 1.321 7.616 3.559l-1.143.97c-1.619-1.907-3.967-3.03-6.473-3.03-3.525 0-6.651 2.197-7.919 5.428l-.123.434a8.694 8.694 0 00-.454 2.825c0 1.212.244 2.398.711 3.504l.44 1.042H4.377C1.98 17.165.05 15.208.05 12.786c0-2.247 1.66-4.094 3.816-4.35 1.613-3.619 5.163-6.003 9.152-6.003zM1.55 12.786c0 1.257.78 2.318 1.875 2.713a10.472 10.472 0 01-.403-2.88c0-.864.102-1.72.295-2.505a2.871 2.871 0 00-1.767 2.672z" }),
            React.createElement("path", { d: "M20.937 9.36l1.443-.406.097.347c.354 1.019.537 2.161.537 3.318 0 3.784-2.076 7.255-5.289 8.977a9.24 9.24 0 01-2.456.912l-.319-1.466a7.751 7.751 0 002.061-.765c2.73-1.464 4.503-4.426 4.503-7.658 0-.993-.156-1.969-.467-2.868l-.11-.39z" }),
            React.createElement("path", { d: "M8.881 6.28l1.449-.389c.012.045.056.162.143.326.153.291.368.586.657.864.855.823 2.154 1.326 4.034 1.326h6.495v1.5h-6.495c-2.26 0-3.934-.648-5.074-1.745-.707-.68-1.073-1.375-1.209-1.881zM15.62 14.995l1.07 1.053a5.217 5.217 0 01-3.727 1.564c-1.39 0-2.727-.55-3.726-1.564l1.068-1.053a3.717 3.717 0 002.658 1.117c.991 0 1.943-.391 2.658-1.117z" }),
            React.createElement("path", { d: "M21.659 9.907v-1.5c2.397 0 4.327 1.957 4.327 4.379 0 2.422-1.93 4.38-4.327 4.38v-1.5c1.564 0 2.827-1.282 2.827-2.88 0-1.598-1.263-2.88-2.827-2.88z" }))));
}

function MulticolorBike48(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 48, height: 48, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fillRule: "nonzero", fill: "none" },
            React.createElement("path", { d: "M12.5 35.956a7.5 7.5 0 110-15 7.5 7.5 0 010 15zm0-2a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM35.5 35.956a7.5 7.5 0 110-15 7.5 7.5 0 010 15zm0-2a5.5 5.5 0 100-11 5.5 5.5 0 000 11z", fill: "#005C9C" }),
            React.createElement("path", { d: "M25.203 28.676a1.095 1.095 0 01-.586-.298l-9.157-8.942 1.398-1.431 8.198 8.006 2.551-6.29h-7.595v-2h9.578l8.49 11.218-2.045-.027a17857.294 17857.294 0 01-10.117-.136l-.437-.007-.094-.002c-.045-.002-.045-.002-.182-.02l-.002-.07zM26.9 26.79l.988.013 6.129.082-4.66-6.157A6772.87 6772.87 0 0126.9 26.79z", fill: "#005C9C" }),
            React.createElement("path", { d: "M27.5 16.456a1 1 0 010-2h4.506a1 1 0 010 2H27.5z", fill: "#E30613" }),
            React.createElement("path", { fill: "#005C9C", d: "M18.736 15l-5.81 14.346-1.854-.75L17.388 13h4.976v2z" }))));
}

function MulticolorCarDamaged48(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 48, height: 48, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fillRule: "nonzero", fill: "none" },
            React.createElement("path", { fill: "#E30613", d: "M36.36 19.833H13.26v-1.666h21.93z" }),
            React.createElement("path", { fill: "#E30613", d: "M30.654 12.722l-4.546-.17-.53-.749-1.345.97 1.003 1.414 3.062.115-1.2 3.214 5.276-.614 1.716 2.577 1.371-.93-2.276-3.419-3.586.418z" }),
            React.createElement("path", { d: "M13.674 24a1.243 1.243 0 000 2.488 1.243 1.243 0 000-2.488m0 4.155c-1.594 0-2.891-1.306-2.891-2.911s1.297-2.91 2.89-2.91c1.595 0 2.892 1.305 2.892 2.91 0 1.605-1.297 2.91-2.891 2.91M35.565 25.25a1.243 1.243 0 01-1.239 1.238 1.243 1.243 0 010-2.488v-1.667c-1.594 0-2.891 1.306-2.891 2.911s1.297 2.911 2.891 2.911c1.592 0 2.888-1.302 2.89-2.905h-1.651z", fill: "#005AA0" }),
            React.createElement("path", { d: "M41.348 20.667c0 .02-.275.027-.643.027-.734 0-1.835-.027-1.835-.027L39.732 24l-.036 5.833V34h-.826v3.333h-3.305V34h-23.13v3.333H9.13V34h-.827v-2.5h19v-1.667h-19V24l.827-3.333s-1.102.027-1.836.027c-.368 0-.643-.006-.643-.027V19c0-.807 4.13-.833 4.13-.833l3.305-5s.804-2.495 9.5-2.5c8.699 0 10.326 2.5 10.326 2.5l3.304 5s4.13.026 4.13.833v1.667zm-6.06-8.425C34.94 11.71 32.716 9 23.614 9c-8.267.005-10.425 2.175-10.987 3.373l-2.739 4.143C7.25 16.6 5 17.05 5 19v1.667c0 .56.371 1.634 1.774 1.687.066.003.145.004.234.005l-.306 1.237-.05.199V34c0 .617.333 1.156.827 1.444v1.89c0 .92.739 1.666 1.652 1.666h3.304c.913 0 1.652-.746 1.652-1.667v-1.666h19.826v1.666c0 .921.74 1.667 1.652 1.667h3.305c.912 0 1.652-.746 1.652-1.667l-.002-1.888c.495-.288.828-.827.828-1.445v-2.5c0-.033-.008-.065-.01-.098l.01-1.558v-6.053l-.041-.212-.315-1.22c.09 0 .168-.002.234-.005C42.63 22.301 43 21.227 43 20.667V19c0-1.95-2.25-2.4-4.888-2.484l-2.824-4.273z", fill: "#005AA0" }),
            React.createElement("path", { fill: "#E30613", d: "M37.361 33.196l1.155-1.192-2.201-2.17H29.37V31.5h6.272z" }))));
}

function MulticolorCar48(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 48, height: 48, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M12 24.5c0 .826.674 1.5 1.5 1.5s1.5-.674 1.5-1.5-.674-1.5-1.5-1.5-1.5.674-1.5 1.5zM33 24.5c0 .826.674 1.5 1.5 1.5s1.5-.674 1.5-1.5-.674-1.5-1.5-1.5-1.5.674-1.5 1.5z", stroke: "#005AA0", strokeWidth: 2 }),
            React.createElement("path", { fill: "#005AA0", fillRule: "nonzero", d: "M15 18.027v2h19.858l-3.555-5.556-1.684 1.078 1.585 2.478z" }),
            React.createElement("path", { d: "M41 22c0 .025-.333.033-.778.033C39.333 22.033 38 22 38 22l1.044 4L39 29h-4v2h4v2h-1v3h-3v-3H13v3h-3v-3H9v-2h17v-2H9v-3l1-4s-1.333.033-2.222.033C7.333 22.033 7 22.025 7 22v-1c0-.968 4-1 4-1l4-6s1-1.995 9-2c8.02 0 9 2 9 2l4 6s4 .032 4 1v1zm-6.336-9c-.81-1.208-2.997-3-10.664-3-6.625.004-9.875 1.688-10.768 3-.893 1.313-3.315 5.019-3.315 5.019C7.75 18.089 5 18.661 5 21v1c0 .672.45 1.961 2.147 2.025.08.003.176.005.284.006l-.37 1.484-.06.239V33c0 .755.381 1.412.999 1.753V36a2 2 0 002 2h3a2 2 0 002-2v-1h18v1a2 2 0 002 2h3a2 2 0 002-2v-1.285c.582-.35 1-.986 1-1.715v-2c0-.04-.01-.078-.012-.118L41 29.013V25.749l-.05-.254-.38-1.464c.107-.001.203-.003.283-.006C42.551 23.961 43 22.672 43 22v-1c0-2.339-2.684-2.91-4.917-2.981L34.664 13z", fill: "#005AA0" }),
            React.createElement("path", { fill: "#E30613", fillRule: "nonzero", d: "M28 31h5v-2h-5z" }))));
}

function MulticolorDogLeft48(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 48, height: 48, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { transform: "translate(4 2)", fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M19.753 37.867c-3.454-.757-5.767-3.876-5.377-7.252.39-3.375 3.358-5.934 6.9-5.948a7.6 7.6 0 014.168 1.3", stroke: "#E30613", strokeWidth: 2 }),
            React.createElement("path", { d: "M10 40H5s-1 0-1.217.23C3.567 40.46 3 41 3 41.978V44h9M11.37 12.306a7.151 7.151 0 01-5.233.672c-1.768-.451-3.276-1.558-4.19-3.076a6.088 6.088 0 01-.897-4.035", stroke: "#005AA0", strokeWidth: 2 }),
            React.createElement("ellipse", { stroke: "#005AA0", cx: 1.241, cy: 4.033, rx: 0.741, ry: 0.733 }),
            React.createElement("path", { d: "M17.514 8.365v2.257c0 1.829 1.443 3.311 3.224 3.311 1.781 0 3.225-1.482 3.225-3.31V9.116c-.342-4.088-3.088-7.543-6.92-8.707C13.21-.754 9.453.761 7 4H3", stroke: "#005AA0", strokeWidth: 2 }),
            React.createElement("path", { d: "M8 16v22", stroke: "#005AA0", strokeWidth: 2, fill: "#000" }),
            React.createElement("path", { d: "M41 28.6c-.013 4.45-3.653 8.054-8.148 8.067M16 40.004h-1.885a1.985 1.985 0 00-1.426.572c-.377.374-.586.696-.578 1.224V44h18.686C34.649 32.98 30.424 22.428 20 17", stroke: "#005AA0", strokeWidth: 2 }))));
}

function MulticolorDogRight48(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 48, height: 48, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { transform: "matrix(-1 0 0 1 45 2)", fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M19.753 37.867c-3.454-.757-5.767-3.876-5.377-7.252.39-3.375 3.358-5.934 6.9-5.948a7.6 7.6 0 014.168 1.3", stroke: "#E30613", strokeWidth: 2 }),
            React.createElement("path", { d: "M10 40H5s-1 0-1.217.23C3.567 40.46 3 41 3 41.978V44h9M11.37 12.306a7.151 7.151 0 01-5.233.672c-1.768-.451-3.276-1.558-4.19-3.076a6.088 6.088 0 01-.897-4.035", stroke: "#005AA0", strokeWidth: 2 }),
            React.createElement("ellipse", { stroke: "#005AA0", cx: 1.241, cy: 4.033, rx: 0.741, ry: 0.733 }),
            React.createElement("path", { d: "M17.514 8.365v2.257c0 1.829 1.443 3.311 3.224 3.311 1.781 0 3.225-1.482 3.225-3.31V9.116c-.342-4.088-3.088-7.543-6.92-8.707C13.21-.754 9.453.761 7 4H3", stroke: "#005AA0", strokeWidth: 2 }),
            React.createElement("path", { d: "M8 16v22", stroke: "#005AA0", strokeWidth: 2, fill: "#000" }),
            React.createElement("path", { d: "M41 28.6c-.013 4.45-3.653 8.054-8.148 8.067M16 40.004h-1.885a1.985 1.985 0 00-1.426.572c-.377.374-.586.696-.578 1.224V44h18.686C34.649 32.98 30.424 22.428 20 17", stroke: "#005AA0", strokeWidth: 2 }))));
}

function MulticolorHouse48(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 48, height: 48, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fillRule: "nonzero", fill: "none" },
            React.createElement("path", { fill: "#005AA0", d: "M24.005 10.259l17.387 13.3 1.216-1.588L24.005 7.74 5.393 21.971l1.214 1.588z" }),
            React.createElement("path", { fill: "#E30613", d: "M24 15.259l2.992 2.288 1.216-1.588L24 12.74l-4.208 3.218 1.214 1.588z" }),
            React.createElement("path", { fill: "#005AA0", d: "M31 25v11h2V23h-8v13h2V25zM21 29v-4h-4v4h4zm-6-6h8v8h-8v-8zM10 19v18h2V19zM36 19v18h2V19z" }),
            React.createElement("path", { fill: "#005AA0", d: "M5 38h12v-2H5zM22 38h21v-2H22z" }))));
}

function MulticolorMoose48(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 48, height: 48, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fillRule: "nonzero", fill: "none" },
            React.createElement("path", { d: "M9.426 23.386l-.28-.081c-1.324-.375-2.229-.338-3.08.47-.131.105-.283.259-.431.466-.66.924-.66 2.129.32 3.356 2.452 2.668 7.49 2.308 11.625-.713l-1.024-1.41c-3.498 2.557-7.57 2.848-9.282.986-.442-.555-.442-.9-.225-1.204a.765.765 0 01.1-.118l.092-.078c.297-.29.627-.305 1.432-.077.072.02.137.039.26.076 1.09.322 1.568.401 2.237.218 1.581-.435 1.68-1.724.736-3.047-.53-.743-1.082-1.3-2.868-2.984l-.231-.218c-1.49-1.41-2.23-2.21-2.565-2.838-.198-.372-.237-.369.33-.453l.057.04c.17.124.399.328.685.608.453.442.406.392 2.003 2.11l.23.247c2.335 2.5 3.213 3.271 4.22 3.06 1.203-.253 1.869-.976 1.874-2.024.003-.632-.148-1.09-.647-2.283l-.076-.182-.073-.18-1.612.656.08.193.077.187c.391.936.513 1.305.512 1.6 0 .179-.052.234-.492.326.117-.024.107-.027.03-.072a4.84 4.84 0 01-.68-.52c-.497-.438-1.083-1.031-1.944-1.953l-.227-.244-.54-.583-.53-.567a33.96 33.96 0 00-.99-1.02c-.921-.9-1.397-1.248-2.026-1.152-1.915.295-2.597 1.519-1.795 3.026.46.865 1.26 1.729 2.905 3.286l.233.22c1.676 1.58 2.212 2.12 2.645 2.728.104.146.175.266.22.351-.235.064-.525.016-1.285-.209z", fill: "#005AA0" }),
            React.createElement("path", { d: "M21.035 19.348c-1.435-.943-2.467-2.013-3.187-3.216-.86-1.439-1.089-2.343-1.506-5.058-.198-1.288-.366-1.894-.805-2.424-1.617-1.958-3.748-1.385-4.515.659-.512 1.366-.429 1.648 1.821 7.635l1.628-.615c-1.941-5.164-2.093-5.68-1.821-6.407.326-.87.846-1.01 1.548-.16.159.192.278.62.425 1.578.452 2.94.716 3.989 1.734 5.69.856 1.43 2.072 2.69 3.725 3.776l.953-1.458z", fill: "#E30613" }),
            React.createElement("path", { d: "M38.952 22.438l-.326.089c-.784.217-1.083.263-1.327.196-.152-.042-.118-.01-.107.075-.004-.029.063-.212.25-.496.405-.619.954-1.203 2.534-2.77l.153-.152c1.539-1.529 2.264-2.333 2.736-3.16.804-1.41.426-2.677-1.23-3.091-1.21-.304-2.46.521-4.193 2.277-.317.32-.646.67-1.026 1.085-.27.296-1.14 1.263-1.204 1.333-.37.408-.647.704-.882.94.096-.78.364-2.017.809-3.722l.092-.352c.927-3.529 1.112-4.394.936-5.25-.311-1.514-2.12-2.568-3.952-1.44-.775.478-.997 1.243-1.276 3.24l-.11.8a46.53 46.53 0 01-.122.838c-.1.641-.207 1.194-.336 1.717-.52 2.108-1.39 3.585-2.842 4.486a6.002 6.002 0 00-.405-.183c-1.62-.663-3.461-.663-5.307.437l.888 1.499c1.331-.793 2.61-.793 3.761-.322.28.116.473.225.556.284l.43.305.468-.241c2.214-1.137 3.463-3.106 4.14-5.846.142-.577.258-1.178.365-1.866.042-.266.08-.535.127-.868.013-.095.088-.647.11-.799.107-.766.187-1.213.287-1.557.085-.294.163-.43.176-.438.705-.434 1.252-.116 1.338.305.09.437-.135 1.49-.914 4.455l-.093.355c-.905 3.467-1.149 4.918-.654 5.882.342.667 1.023.743 1.619.437.297-.152.61-.407.999-.785.294-.286.62-.633 1.078-1.138.068-.075.935-1.037 1.2-1.327.365-.4.68-.734.98-1.037 1.265-1.282 2.197-1.898 2.536-1.813.433.109.416.052.14.534-.361.635-1.036 1.384-2.45 2.787l-.151.151c-1.691 1.677-2.261 2.285-2.764 3.052-.886 1.35-.722 2.629.85 3.06.666.184 1.145.11 2.25-.197l.303-.082c.793-.208 1.147-.189 1.448.085l.07.057c.004.003.05.046.1.117.217.304.217.649-.264 1.25-2.3 2.453-6.409 1.65-9.04-1.734l-1.371 1.072c3.224 4.148 8.555 5.189 11.724 1.804 1.025-1.278 1.025-2.483.365-3.407a2.339 2.339 0 00-.444-.477c-.844-.75-1.737-.792-3.028-.454zM23.54 26.82c0-1.076-.87-1.948-1.944-1.948a1.946 1.946 0 00-1.944 1.948h1.74a.205.205 0 11.408 0h1.74zM29.626 26.82c0-1.076-.87-1.948-1.943-1.948a1.946 1.946 0 00-1.944 1.948h1.74a.205.205 0 11.408 0h1.74z", fill: "#005AA0" }),
            React.createElement("path", { d: "M31.829 31.588c.114-.28.255-.676.396-1.16.343-1.182.523-2.38.45-3.525-.073-1.134-.396-2.147-1.018-2.987l-1.396 1.04c.405.546.625 1.24.678 2.059.059.914-.093 1.922-.384 2.925a11.11 11.11 0 01-.39 1.115l-.075.17v6.288l.004.092c.004.078-.07.294-.373.567-.724.65-2.261 1.084-4.851 1.084V41c2.98 0 4.92-.547 6.012-1.53.724-.652.977-1.38.947-1.985v-5.897zM17.905 37.485c-.03.604.223 1.333.947 1.984 1.093.984 3.032 1.531 6.012 1.531v-1.744c-2.59 0-4.127-.433-4.85-1.084-.304-.273-.378-.489-.372-.599l.002-.06v-6.288l-.075-.17a11.11 11.11 0 01-.657-2.254l-1.712.303c.079.45.184.892.309 1.323.14.485.282.881.396 1.16v5.898z", fill: "#005AA0" }))));
}

function MulticolorThings48(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 48, height: 48, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M22.082 33.018h13.854M17 21.286V14a2 2 0 012-2h20a2 2 0 012 2v13a2 2 0 01-2 2H21.488L17 21.286z", stroke: "#005C9C", strokeWidth: 2 }),
            React.createElement("path", { d: "M11.633 25l.583-1.963h5.038L17.807 25H18a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2v-6a2 2 0 012-2h3.633z", stroke: "#005C9C", strokeWidth: 2 }),
            React.createElement("circle", { stroke: "#E30613", strokeWidth: 2, cx: 14.7, cy: 30, r: 2 }),
            React.createElement("circle", { fill: "#005C9C", cx: 9, cy: 28, r: 1 }),
            React.createElement("path", { d: "M29.036 29.043v3.997", stroke: "#005C9C", strokeWidth: 2 }))));
}

function MulticolorTravel48(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 48, height: 48, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fillRule: "nonzero", fill: "none" },
            React.createElement("path", { d: "M17.5 4c-3.112 0-5.707 2.188-6.175 5.066C8.319 9.494 6 11.978 6 15c0 3.325 2.808 6 6.25 6H15v-2h-2.75C9.892 19 8 17.198 8 15s1.892-4 4.25-4h1v-1c0-2.198 1.892-4 4.25-4s4.25 1.802 4.25 4v1h1c2.358 0 4.25 1.802 4.25 4 0 1.065-.444 2.064-1.228 2.811l1.38 1.448C28.325 18.141 29 16.622 29 15c0-3.02-2.32-5.505-5.325-5.933C23.207 6.188 20.612 4 17.501 4z", fill: "#075BA0" }),
            React.createElement("path", { d: "M23 20a2 2 0 10-4 0 2 2 0 004 0zm2 0a4 4 0 11-8 0 4 4 0 018 0z", fill: "#E30613" }),
            React.createElement("path", { fill: "#005AA0", d: "M23.015 30.388l5.586 1.208.423-1.955-6.082-1.315-6.24 1.824 3.553 3.335 1.369-1.459-1-.939z" }),
            React.createElement("path", { d: "M20.934 39.226l-9.636-1.096-5.002-4.698 6.516-1.835 3.352 1.805 2.515-.735 17.749-5.187 5.941 1.278.167.572a3.488 3.488 0 01-2.37 4.326l-7.76 2.269-5.346 5.696-6.26 1.829 1.144-4.503-1.01.279zm1.576-2.511l.203-.802 1.939.492-1.051 4.143 2.374-.694 5.346-5.696.261-.076 8.024-2.346a1.488 1.488 0 001.065-1.298l-4.168-.896-17.263 5.044-3.302.965-3.362-1.81-2.33.657 1.937 1.82 8.592.977 1.735-.48zm-.566 2.232l.566-2.232-.566 2.232zM27.989 24.03a1.001 1.001 0 00-.755.352.968.968 0 00-.234.644.993.993 0 001.012.974.992.992 0 00.988-.996.993.993 0 00-1.011-.974zm.046 3.97A2.993 2.993 0 0125 25.05a2.968 2.968 0 01.713-1.967 3 3 0 012.253-1.052A2.993 2.993 0 0131 24.98c.019 1.65-1.31 3-2.965 3.019z", fill: "#005AA0" }))));
}

function MulticolorChatHeart64(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 64, height: 64, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M26.127 25.015c-.809 0-1.618.3-2.22.902a3.115 3.115 0 00-.907 2.22c0 .848.322 1.636.907 2.22L30 36.452l6.093-6.093a3.112 3.112 0 00.907-2.22c0-.847-.322-1.636-.907-2.221-1.204-1.204-3.238-1.203-4.441 0L30 27.572l-1.652-1.654a3.135 3.135 0 00-2.221-.902zM30 39.279l-7.507-7.507A5.097 5.097 0 0121 28.138a5.1 5.1 0 011.493-3.635 5.147 5.147 0 017.269 0l.238.239.238-.24a5.146 5.146 0 017.269 0A5.1 5.1 0 0139 28.139c0 1.38-.53 2.672-1.493 3.634L30 39.279z", fill: "#E30613" }),
            React.createElement("path", { d: "M38.222 15H21.86C12.45 15 5.043 21.637 5 30.125c.043 8.615 6.754 14.913 16 14.913h5.997L38 55.954V43.019h-2v8.072l-8-8.072h-7c-7.337 0-13.964-6.09-14-12.894.036-6.707 6.32-13.252 15-13.125h16.313C42.1 17 46.258 18.54 49 21.217c2.742 2.677 4.057 5.794 4 8.93.059 3.101-1.733 7.007-4.006 9.183-2.353 2.254-4.63 3.689-8.037 3.689L41 45.038c4.359 0 6.521-1.462 9.542-4.353 2.948-2.826 4.53-6.589 4.455-10.538.074-3.942-1.483-7.643-4.385-10.422C47.475 16.722 42.959 15 38.222 15z", fill: "#005AA0" }),
            React.createElement("path", { d: "M44.424 8.466l.576 4.64M50 15.49L53.593 11M59 16l-4 2.698", stroke: "#005AA0", strokeWidth: 2 }))));
}

function MulticolorDogLeft64(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 64, height: 64, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { transform: "translate(5 2)", strokeWidth: 2, fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M25.316 53c-4.662-1.032-7.784-5.285-7.258-9.888.526-4.603 4.533-8.093 9.315-8.112A10.19 10.19 0 0133 36.773", stroke: "#E30613" }),
            React.createElement("path", { d: "M13 54H5.625c-.7-.012-1.373.298-1.867.86-.495.56-.768 1.325-.758 2.118V60h12M14 16.781a9.569 9.569 0 01-7.065.916c-2.387-.615-4.422-2.124-5.655-4.194A8.37 8.37 0 01.068 8", stroke: "#005AA0" }),
            React.createElement("circle", { stroke: "#005AA0", cx: 0.5, cy: 5.5, r: 0.5 }),
            React.createElement("path", { d: "M22.293 11.406v3.079c0 2.494 1.95 4.515 4.354 4.515S31 16.979 31 14.485v-2.052C30.538 6.858 26.83 2.147 21.658.559 16.485-1.028 10.903.833 7.59 5.25H3", stroke: "#005AA0" }),
            React.createElement("path", { d: "M11 22v30", stroke: "#005AA0", fill: "#000" }),
            React.createElement("path", { d: "M54 39c-.017 6.068-4.932 10.983-11 11M20.677 54.55h-2.972c-.72-.01-1.415.271-1.924.78-.51.51-.791.95-.78 1.67v3h25.224c5.202-15.026-1.354-30.599-15.426-38", stroke: "#005AA0" }))));
}

function MulticolorDogRight64(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 64, height: 64, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { transform: "matrix(-1 0 0 1 59 2)", strokeWidth: 2, fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M25.316 53c-4.662-1.032-7.784-5.285-7.258-9.888.526-4.603 4.533-8.093 9.315-8.112A10.19 10.19 0 0133 36.773", stroke: "#E30613" }),
            React.createElement("path", { d: "M13 54H5.625c-.7-.012-1.373.298-1.867.86-.495.56-.768 1.325-.758 2.118V60h12M14 16.781a9.569 9.569 0 01-7.065.916c-2.387-.615-4.422-2.124-5.655-4.194A8.37 8.37 0 01.068 8", stroke: "#005AA0" }),
            React.createElement("circle", { stroke: "#005AA0", cx: 0.5, cy: 5.5, r: 0.5 }),
            React.createElement("path", { d: "M22.293 11.406v3.079c0 2.494 1.95 4.515 4.354 4.515S31 16.979 31 14.485v-2.052C30.538 6.858 26.83 2.147 21.658.559 16.485-1.028 10.903.833 7.59 5.25H3", stroke: "#005AA0" }),
            React.createElement("path", { d: "M11 22v30", stroke: "#005AA0", fill: "#000" }),
            React.createElement("path", { d: "M54 39c-.017 6.068-4.932 10.983-11 11M20.677 54.55h-2.972c-.72-.01-1.415.271-1.924.78-.51.51-.791.95-.78 1.67v3h25.224c5.202-15.026-1.354-30.599-15.426-38", stroke: "#005AA0" }))));
}

function MulticolorHappyAccepted64(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 64, height: 64, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { id: "multicolor-happy-accepted-64_svg__a", d: "M34.503.25h-3.33v6.907h3.33z" })),
        React.createElement("g", { transform: "translate(8 1)", fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M23 54.985c-12.682 0-23-10.317-23-23s10.318-23 23-23c6.694 0 13.07 2.927 17.493 8.03l-1.512 1.31c-4.042-4.665-9.867-7.34-15.981-7.34-11.58 0-21 9.421-21 21 0 11.58 9.42 21 21 21s21-9.42 21-21c0-2.337-.372-4.639-1.106-6.84l-.06-.16H28.158c-11.896 0-14.039-7.579-14.125-7.9l1.932-.519c.073.262 1.906 6.42 12.193 6.42h16.061l.56 1.491A23.634 23.634 0 0146 31.985c0 12.683-10.318 23-23 23", fill: "#005AA0", fillRule: "nonzero" }),
            React.createElement("path", { d: "M19.275 31.388h-2c0-.833-.73-1.563-1.56-1.563-.83 0-1.557.73-1.557 1.563h-2c0-1.932 1.63-3.563 3.558-3.563 1.93 0 3.559 1.63 3.559 3.563M34.13 31.388h-2c0-.833-.73-1.563-1.56-1.563-.83 0-1.558.73-1.558 1.563h-2c0-1.932 1.63-3.563 3.558-3.563 1.93 0 3.56 1.63 3.56 3.563M23.804 44.934c-3.155 0-6.132-1.242-8.383-3.497l1.415-1.412c1.874 1.876 4.348 2.909 6.968 2.909s5.095-1.033 6.968-2.91l1.415 1.413c-2.25 2.255-5.228 3.497-8.383 3.497", fill: "#005AA0", fillRule: "nonzero" }),
            React.createElement("path", { fill: "#E30613", fillRule: "nonzero", d: "M41.291 11.05l-1.6-1.201 3.99-5.312 1.6 1.2zM46.065 18.192l-.94-1.767 5.857-3.115.939 1.766z" }),
            React.createElement("mask", { id: "multicolor-happy-accepted-64_svg__b", fill: "#fff" },
                React.createElement("use", { xlinkHref: "#multicolor-happy-accepted-64_svg__a" })),
            React.createElement("path", { fill: "#E30613", fillRule: "nonzero", mask: "url(#multicolor-happy-accepted-64_svg__b)", d: "M33.13 7.157l-1.958-.414L32.546.25l1.957.414z" }))));
}

function MulticolorSadDeclined64(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 64, height: 64, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { id: "multicolor-sad-declined-64_svg__a", d: "M34.503.25h-3.33v6.907h3.33z" })),
        React.createElement("g", { transform: "translate(8 1)", fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M23 54.985c-12.682 0-23-10.317-23-23s10.318-23 23-23c6.694 0 13.07 2.927 17.493 8.03l-1.512 1.31c-4.042-4.665-9.867-7.34-15.981-7.34-11.58 0-21 9.421-21 21 0 11.58 9.42 21 21 21s21-9.42 21-21c0-2.337-.372-4.639-1.106-6.84l-.06-.16H28.158c-11.896 0-14.039-7.579-14.125-7.9l1.932-.519c.073.262 1.906 6.42 12.193 6.42h16.061l.56 1.491A23.634 23.634 0 0146 31.985c0 12.683-10.318 23-23 23", fill: "#005AA0", fillRule: "nonzero" }),
            React.createElement("path", { d: "M23 47c-3.325 0-6-2.676-6-6s2.675-6 6-6c3.323 0 5.998 2.676 5.998 6 .081 3.243-2.675 6-5.999 6zm-.002-10C20.818 37 19 38.818 19 41s1.817 4 3.998 4 3.999-1.818 3.999-4c.09-2.182-1.727-4-3.999-4z", fill: "#005AA0", fillRule: "nonzero" }),
            React.createElement("circle", { fill: "#005AA0", fillRule: "nonzero", cx: 14.25, cy: 29.25, r: 1.25 }),
            React.createElement("circle", { fill: "#005AA0", fillRule: "nonzero", cx: 31.25, cy: 29.25, r: 1.25 }),
            React.createElement("path", { fill: "#E30613", fillRule: "nonzero", d: "M41.291 11.05l-1.6-1.201 3.99-5.312 1.6 1.2zM46.065 18.192l-.94-1.767 5.857-3.115.939 1.766z" }),
            React.createElement("mask", { id: "multicolor-sad-declined-64_svg__b", fill: "#fff" },
                React.createElement("use", { xlinkHref: "#multicolor-sad-declined-64_svg__a" })),
            React.createElement("path", { fill: "#E30613", fillRule: "nonzero", mask: "url(#multicolor-sad-declined-64_svg__b)", d: "M33.13 7.157l-1.958-.414L32.546.25l1.957.414z" }))));
}

function Facebook56(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 56, height: 56, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 56h56V0H0v56zm2.887-2.887h50.226V2.887H2.887v50.226z" }),
            React.createElement("path", { d: "M25.242 41.803V28.736h-4.397v-5.093h4.397v-3.756c0-4.358 2.662-6.73 6.55-6.73 1.862 0 3.463.137 3.93.2v4.554l-2.697.001c-2.115 0-2.524 1.005-2.524 2.48v3.251h5.043l-.657 5.093h-4.386v13.067h-5.259z" }))));
}

function Instagram56(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 56, height: 56, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 56h56V0H0v56zm2.887-2.887h50.226V2.887H2.887v50.226z" }),
            React.createElement("path", { d: "M23.33 27.995a4.665 4.665 0 109.33.002 4.665 4.665 0 00-9.33-.002z" }),
            React.createElement("path", { d: "M33.75 20.501a1.75 1.75 0 113.5-.001 1.75 1.75 0 01-3.5.001zM20.81 28c0-3.97 3.22-7.19 7.19-7.19A7.19 7.19 0 1120.81 28zm20.454-9.17a6.842 6.842 0 00-1.614-2.48 6.86 6.86 0 00-2.48-1.615c-.89-.346-1.908-.583-3.398-.65-1.493-.069-1.97-.085-5.773-.085-3.801 0-4.278.016-5.771.084-1.49.068-2.508.305-3.399.65a6.86 6.86 0 00-2.48 1.616 6.856 6.856 0 00-1.614 2.48c-.346.89-.583 1.907-.651 3.398C14.016 23.721 14 24.198 14 28c0 3.802.016 4.278.084 5.772.068 1.49.305 2.508.65 3.399.36.92.837 1.7 1.616 2.48a6.87 6.87 0 002.48 1.613c.89.347 1.908.583 3.398.651 1.493.068 1.97.084 5.771.084 3.803 0 4.28-.016 5.773-.084 1.49-.068 2.508-.304 3.398-.65a6.87 6.87 0 002.48-1.615 6.857 6.857 0 001.614-2.48c.346-.89.584-1.908.652-3.398.068-1.494.084-1.97.084-5.772 0-3.802-.016-4.279-.084-5.772-.068-1.49-.306-2.508-.652-3.398z" }))));
}

function Linkedin56(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 56, height: 56, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 56h56V0H0v56zm2.887-2.887h50.226V2.887H2.887v50.226z" }),
            React.createElement("path", { d: "M18.799 15.43a2.888 2.888 0 00-2.888 2.889 2.888 2.888 0 105.777 0 2.891 2.891 0 00-2.89-2.89zM24.418 23.401v16.035H29.4v-7.932c0-2.092.396-4.117 2.989-4.117 2.554 0 2.59 2.391 2.59 4.251v7.798h4.979v-8.795c0-4.319-.932-7.64-5.975-7.64-2.424 0-4.05 1.33-4.716 2.591h-.068v-2.19h-4.781zM16.306 39.436h4.986V23.401h-4.986z" }))));
}

function Twitter56(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 56, height: 56, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 56h56V0H0v56zm2.887-2.887h50.226V2.887H2.887v50.226z" }),
            React.createElement("path", { d: "M23.328 40.31c11.05 0 17.093-9.154 17.093-17.092 0-.167-.002-.333-.007-.498a.536.536 0 01.21-.443c.898-.68 1.7-1.484 2.377-2.384.12-.158-.042-.375-.228-.305a12.06 12.06 0 01-2.631.664c-.044.006-.066-.054-.03-.077a6.044 6.044 0 002.234-2.583.244.244 0 00-.335-.315c-.92.479-1.909.843-2.948 1.074a.53.53 0 01-.48-.139 6.009 6.009 0 00-10.117 5.305.298.298 0 01-.315.35A17.047 17.047 0 0116.51 18.03a.368.368 0 00-.61.081 5.98 5.98 0 00-.555 2.522c0 2.015.99 3.8 2.514 4.89.045.032.021.104-.035.101a5.956 5.956 0 01-2.17-.56.244.244 0 00-.346.238c.012.205.032.41.06.59a6.015 6.015 0 004.536 4.91c.053.012.052.088-.001.1a6.014 6.014 0 01-2.171.102.2.2 0 00-.216.269 6.018 6.018 0 004.978 3.818c.177.018.24.247.096.35a12.054 12.054 0 01-7.037 2.254h-.123c-.33 0-.441.44-.15.597a16.987 16.987 0 008.05 2.018" }))));
}

function ShortcutBankid50(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 50, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M34.458 17.893c-.012.423-.075.84-.148 1.256-.106.6-.27 1.181-.492 1.745a8.359 8.359 0 01-1.178 2.079 7.897 7.897 0 01-2.389 2.056c-.633.353-1.3.615-1.997.791-.334.084-.67.153-1.012.188-.182.017-.363.041-.546.051a17.89 17.89 0 01-.709.018c-.268.003-.536 0-.804 0h-.101l.673-4.463c.097-.005.19-.01.282-.017a4.114 4.114 0 001.147-.233c.47-.171.886-.436 1.225-.82a2.99 2.99 0 00.596-1.054c.122-.369.181-.75.208-1.138.022-.338 0-.669-.087-.994a1.79 1.79 0 00-.882-1.149 2.674 2.674 0 00-.821-.284 4.765 4.765 0 00-.873-.074h-1.236c-.174 0-.341-.031-.5-.103a.877.877 0 01-.302-.223c-.15-.17-.143-.407-.017-.611a1.28 1.28 0 01.34-.35c.143-.107.276-.224.39-.364.137-.168.232-.357.236-.58a.81.81 0 00-.214-.576c-.168-.184-.381-.276-.613-.331a2.128 2.128 0 00-.704-.05c-.43.04-.816.194-1.125.52a.894.894 0 00-.264.557c-.009.13.02.251.072.367.078.175.202.309.348.424a.667.667 0 01.21.249c.086.192.036.366-.07.531a1.052 1.052 0 01-.371.34 1.408 1.408 0 01-.594.187 4.132 4.132 0 01-.277.013c-.232.002-.463 0-.694 0h-.103c.009-.072.014-.136.023-.198l.235-1.538.323-2.137c.036-.241.075-.481.112-.72.003-.027.003-.054.005-.08h5.824c.022.004.044.01.066.01.29.006.578.03.866.06.325.033.648.08.968.143.67.133 1.322.33 1.944.63.663.322 1.257.742 1.753 1.308.335.383.601.812.807 1.283.154.351.269.716.346 1.093.064.312.118.627.124.948.001.058.01.116.017.174v.883c-.007.061-.016.122-.017.183zM15.793 16.228H16.703c.29-.002.572-.053.837-.177a1.45 1.45 0 00.687-.613c.211-.377.159-.77-.126-1.073-.054-.056-.116-.104-.171-.156-.045-.041-.09-.081-.13-.127-.158-.195-.157-.402.003-.597a1.2 1.2 0 01.587-.38c.343-.108.69-.098 1.034-.01a.78.78 0 01.31.156.466.466 0 01.098.58 1.346 1.346 0 01-.402.423c-.153.113-.293.24-.403.398a.972.972 0 00-.192.632c.011.183.08.342.195.478a1.303 1.303 0 00.973.454c.294.002.587 0 .88 0h.101c-.013.106-.025.201-.04.296l-.146.956-.185 1.208-.191 1.27c-.059.387-.12.775-.178 1.163-.042.273-.092.544-.12.818-.058.557-.16 1.107-.24 1.66-.077.537-.159 1.073-.239 1.61-.04.271-.08.544-.122.816-.003.02-.01.04-.015.06h-5.197l1.482-9.845M15.084 29.618c.129.016.447.013.545-.01a.546.546 0 00.456-.495c.033-.232-.076-.4-.298-.44-.102-.02-.208-.018-.311-.022-.081-.003-.163 0-.248 0l-.144.967m-.24 1.629c.018.004.028.008.04.008.154 0 .31.003.464-.003.07-.003.14-.02.206-.043a.535.535 0 00.296-.235.749.749 0 00.093-.299c.02-.161-.054-.315-.176-.379a.597.597 0 00-.275-.073h-.423c-.025 0-.049.005-.076.008l-.15 1.016m-1.379.516c.01-.03.025-.058.03-.089.06-.397.117-.794.177-1.19.043-.293.088-.586.132-.878.049-.33.1-.66.148-.99.027-.18.052-.36.079-.548.025-.002.05-.006.074-.006.724 0 1.45-.004 2.174.002.241.002.477.052.68.202.16.119.253.28.27.486a.906.906 0 01-.403.862c-.056.04-.117.07-.176.105l-.082.048.164.085a.84.84 0 01.38.376c.067.14.084.289.07.445a1.288 1.288 0 01-.149.518 1.217 1.217 0 01-.822.621 1.47 1.47 0 01-.334.037c-.804.004-1.608.002-2.412.002v-.088M19.074 31.272c-.16.102-.337.184-.544.18-.137-.002-.265-.116-.244-.3a.36.36 0 01.203-.294c.085-.043.176-.076.266-.11.066-.024.134-.041.201-.065.066-.024.13-.052.205-.082l-.087.671m1.21-.197c-.078-.019-.116-.068-.116-.15 0-.059 0-.118.009-.176.045-.319.1-.636.137-.956a.744.744 0 00-.155-.577.864.864 0 00-.376-.258c-.254-.098-.52-.103-.784-.086-.437.028-.823.204-1.178.462-.029.021-.037.047-.042.08-.03.213-.063.424-.095.635l-.023.183c.028-.016.045-.025.061-.036.064-.043.127-.087.192-.129.22-.14.446-.263.703-.31.138-.027.278-.038.418-.008.135.028.204.104.215.243.005.058-.008.104-.067.126-.127.049-.251.103-.38.144-.236.074-.477.137-.713.21a.947.947 0 00-.587.473.709.709 0 00-.068.487c.057.259.242.374.471.435.044.011.087.024.13.037h.355c.193-.038.386-.074.565-.16.074-.036.146-.075.222-.115a.478.478 0 00.248.209c.071.024.146.038.22.056l.032.01h.407c.04-.008.065-.031.081-.075.075-.19.154-.379.23-.568l.062-.157c-.064-.01-.12-.016-.174-.03M32.693 30.482a.83.83 0 01-.597.432c-.198.041-.398.024-.611.025.094-.658.194-1.307.29-1.97.222-.002.437-.022.645.043.262.083.409.277.445.553.043.324-.021.632-.172.917m1.363-1.404a1.385 1.385 0 00-.775-.86 1.84 1.84 0 00-.757-.154c-.604-.002-1.208 0-1.811 0h-.084a18279 18279 0 01-.562 3.786h2.02c.175 0 .349-.015.52-.055.349-.083.653-.253.909-.513.22-.223.38-.487.49-.783.173-.467.213-.942.05-1.421M23.704 31.847c.006-.021.012-.04.015-.06a1293.018 1293.018 0 01.27-1.826 1.47 1.47 0 00.005-.506.671.671 0 00-.356-.496c-.209-.109-.431-.107-.653-.08a1.177 1.177 0 00-.583.26c-.053.042-.107.083-.172.132l.046-.358H21.16c-.144.978-.29 1.953-.435 2.933h1.115l.015-.071.127-.852c.034-.236.068-.47.104-.705.005-.034.009-.073.027-.1.105-.148.234-.265.415-.293.158-.023.318.048.31.27a2.405 2.405 0 01-.028.262c-.048.333-.099.667-.148 1l-.072.49h1.113M24.837 28.066c-.006.028-.012.05-.015.072l-.16 1.078-.229 1.538c-.043.29-.089.579-.129.869-.01.072-.037.146-.02.224h1.105c.066-.441.133-.882.2-1.338.019.023.028.033.035.045.256.411.512.822.767 1.235.027.044.055.063.108.063.42-.002.84-.001 1.26-.001.02 0 .038-.002.075-.004l-1.09-1.68 1.365-1.253c-.048-.003-.075-.005-.102-.005-.37 0-.739.007-1.108-.004a.392.392 0 00-.312.13c-.238.237-.482.466-.726.698-.052.051-.107.1-.162.149.07-.609.167-1.208.25-1.815h-1.112M28.741 28.068l-.56 3.778h1.281l.561-3.778h-1.282z", fill: "#005AA0" }),
            React.createElement("path", { fill: "#005AA0", d: "M7 3v35h36V10h-2v26H9V5h28V3z" }),
            React.createElement("path", { fill: "#E30613", d: "M44.45.843l-1.414 1.414 1.414 1.415 1.414-1.415zM43.743 4.379l-1.415-1.415-4.95 4.95 1.415 1.414zM35.257 11.45l2.829-1.414-1.414-1.415z" }))));
}

function Youtube56(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 56, height: 56, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 56h56V0H0v56zm2.887-2.887h50.226V2.887H2.887v50.226z" }),
            React.createElement("path", { d: "M24.769 31.776l-.001-8.794 8.456 4.412-8.455 4.382zM43.336 21.46s-.306-2.157-1.244-3.107c-1.19-1.246-2.524-1.252-3.136-1.325-4.38-.317-10.95-.317-10.95-.317h-.013s-6.57 0-10.95.317c-.611.073-1.944.08-3.135 1.325-.938.95-1.244 3.107-1.244 3.107s-.313 2.533-.313 5.065V28.9c0 2.532.313 5.065.313 5.065s.306 2.157 1.244 3.107c1.19 1.246 2.755 1.207 3.45 1.337 2.505.24 10.642.315 10.642.315s6.576-.01 10.956-.327c.612-.073 1.946-.079 3.136-1.325.938-.95 1.244-3.107 1.244-3.107s.313-2.533.313-5.065v-2.375c0-2.532-.313-5.065-.313-5.065z" }))));
}

function ShortcutDocuments50(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 50, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { strokeWidth: 2, fill: "none", fillRule: "evenodd" },
            React.createElement("path", { stroke: "#005AA0", d: "M35 18v12h4l-7 8-7-8h4v-3" }),
            React.createElement("path", { stroke: "#005AA0", d: "M27 37H10V3h15l10 10v5" }),
            React.createElement("path", { d: "M15 12h7m-7 4h14", stroke: "#E30613" }),
            React.createElement("path", { d: "M15 20h14m-14 4.044h14M35 13H25V3", stroke: "#005AA0" }))));
}

function ShortcutFundAssortment50(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 50, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { strokeWidth: 2, fill: "none", fillRule: "evenodd" },
            React.createElement("path", { stroke: "#E30613", d: "M7 22l11-11 4 4 16-7" }),
            React.createElement("path", { stroke: "#005AA0", d: "M7 28l8 2 10-6 13 3" }),
            React.createElement("path", { stroke: "#005AA0", d: "M4 4v33h41" }))));
}

function ShortcutChangeCompany50(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 50, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { strokeWidth: 2, fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M33 16v8.048", stroke: "#E30613" }),
            React.createElement("path", { d: "M17 17v8m1 2h-5l8 9 8-9h-4V14h-4l8-10 8 10h-5", stroke: "#005AA0" }))));
}

function ShortcutPayment50(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 50, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { transform: "translate(6 3)", fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M30.44 11.93L28.113.29l-14.01 2.95-1.028.22m-3.245.656L2.853 5.591l2.163 10.766.054.163", stroke: "#005AA0", strokeWidth: 2 }),
            React.createElement("path", { d: "M22 12l-.6 3", stroke: "#0058A0", strokeWidth: 1.5 }),
            React.createElement("ellipse", { stroke: "#0058A0", strokeWidth: 1.5, cx: 24.697, cy: 14.262, rx: 1.028, ry: 1.039 }),
            React.createElement("ellipse", { stroke: "#0058A0", strokeWidth: 1.5, cx: 28.163, cy: 14.961, rx: 1.028, ry: 1.039 }),
            React.createElement("path", { d: "M18.919 4.06l.594 3.006", stroke: "#E30613", strokeWidth: 1.5 }),
            React.createElement("ellipse", { stroke: "#E30613", strokeWidth: 1.5, cx: 21.838, cy: 4.99, rx: 1.028, ry: 1.039 }),
            React.createElement("ellipse", { stroke: "#E30613", strokeWidth: 1.5, cx: 25.302, cy: 4.279, rx: 1.028, ry: 1.039 }),
            React.createElement("path", { stroke: "#005AA0", strokeWidth: 2, d: "M7.756 22.133L4 21.34 7.005 7.426 32 12.663l-3.004 13.913-12.283-2.592M6 30.902c0 1.622-1.28 2.95-2.845 2.95a2.832 2.832 0 01-2.18-1.034 2.984 2.984 0 01-.427-.738 3.013 3.013 0 01-.237-1.13c0-1.623 1.28-2.95 2.844-2.95C4.72 28 6 29.278 6 30.902h0z" }),
            React.createElement("circle", { stroke: "#005AA0", strokeWidth: 2, cx: 11.5, cy: 26.5, r: 3.5 }),
            React.createElement("path", { stroke: "#005AA0", strokeWidth: 2, d: "M26 29l5 5 10-10" }))));
}

function ShortcutMessages50(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 50, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { strokeWidth: 2, fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M23 13h14", stroke: "#E30613" }),
            React.createElement("path", { stroke: "#005AA0", d: "M42 10h-7V3" }),
            React.createElement("path", { d: "M23 9h9", stroke: "#E30613" }),
            React.createElement("path", { d: "M28 28l8 9M18 15V3.043h18L42 9v28h-4M16 28l-8 9", stroke: "#005AA0" }),
            React.createElement("path", { stroke: "#005AA0", d: "M33 20L22 30 11 20" }),
            React.createElement("path", { stroke: "#005AA0", d: "M8 17h28v20H8z" }))));
}

function ShortcutTransfer50(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 50, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { strokeWidth: 2, fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M19 10h11", stroke: "#E30613" }),
            React.createElement("path", { d: "M21 30h11m2-1v6l12-10-12-10v5H17v5L4 15 17 5v6", stroke: "#005AA0" }))));
}

function ShortcutReportDamage50(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 50, height: 40, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { strokeWidth: 2, fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M36 8h9c1.2 0 2 .8 2 2v25c0 1.2-.8 2-2 2H6c-1.2 0-2-.8-2-2V10c0-1.2.8-2 2-2h28M24 3c-2.44 0-5 2.56-5 5h13c.08-2.44-1.951-5-4.393-5H24z", stroke: "#005AA0" }),
            React.createElement("path", { stroke: "#E30613", d: "M33 24.036h-5V19h-4v5.036h-5V28h5v5h4v-5h5z" }),
            React.createElement("path", { d: "M7 15h37", stroke: "#005AA0" }))));
}

function ReportBuilding50(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 50, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { fill: "#005AA0", d: "M54.508 33.163l1.142-1.642-20.61-14.337L14.428 31.52l1.142 1.642L35.04 19.62z" }),
            React.createElement("path", { fill: "#005AA0", d: "M19 28.697v16.749h2v-16.75zM49 28.697v16.749h2v-16.75zM43 34v11.01h2V32h-8v13.01h2V34zM25 41v-9h9v9h-9zm7-2v-5h-5v5h5z" }),
            React.createElement("path", { fill: "#005AA0", d: "M16 47h11v-2H16zM33 47h22v-2H33zM21.37 5.04c2.035 1.543 3.287 3.59 3.427 6.257l1.999-.077c-.011-.845.238-2.104.99-3.336a6.17 6.17 0 011.442-1.632c.25 1.648.744 2.863 1.492 3.958.193.282.77 1.043.823 1.118.344.484.481.816.507 1.298.068 1.31-.245 2.084-1.142 2.931l1.372 1.455c1.323-1.249 1.866-2.593 1.767-4.49-.048-.906-.327-1.584-.873-2.353-.082-.115-.644-.856-.803-1.088-.768-1.123-1.193-2.403-1.307-4.577l-.079-1.507-1.357.66c-1.566.762-2.737 1.855-3.548 3.184-.093.151-.18.304-.261.458-.732-1.51-1.841-2.792-3.24-3.852a13.873 13.873 0 00-2.843-1.655 10.556 10.556 0 00-1.333-.492L17.068.934l.072 1.383c.184 3.505-.691 5.594-3.068 8.744-.021.028-.646.852-.826 1.093-1.985 2.66-2.793 4.539-2.651 7.247.145 2.76 1.107 4.873 2.625 6.386 1.01 1.008 2.032 1.556 2.764 1.78l.585-1.913a3.577 3.577 0 01-.554-.251 5.938 5.938 0 01-1.383-1.032c-1.171-1.168-1.921-2.815-2.04-5.074-.112-2.145.525-3.626 2.257-5.947.174-.233.794-1.05.82-1.084 2.29-3.037 3.382-5.325 3.487-8.543.757.347 1.51.784 2.214 1.318z" }),
            React.createElement("path", { d: "M20 15.672l1.244 1.566c3.343-2.657 2.868-6.323.33-9.305l-1.15-1.352-.56 1.685c-.42 1.262-.979 2.209-2.038 3.604-.145.191-.681.887-.671.874-2.242 2.922-2.97 4.26-2.867 6.213.152 2.905 2.427 5.117 4.144 5.7l.642-1.894c-1.021-.347-2.687-1.967-2.789-3.911-.067-1.287.518-2.364 2.457-4.89l.677-.883c.687-.905 1.199-1.663 1.605-2.436.943 1.798.765 3.607-1.025 5.03z", fill: "#E30613" }))));
}

function ReportIndemnity50(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 50, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("g", { fill: "#005AA0" },
                React.createElement("path", { d: "M36.322 15.641l-9.447 12.91 1.614 1.182 10.628-14.525-11.791-8.627-10.628 14.524 1.614 1.18 9.447-12.91z" }),
                React.createElement("path", { d: "M25.941 31.802L15.497 24.16l1.285-1.757 2.296 1.672 1.177-1.617-3.908-2.847-3.645 4.982 13.672 10.004 3.647-4.983-7.347-5.376-1.18 1.614 5.732 4.195zM33.512 8.412l-2.159-1.58-2.07-1.514L28 7.073l10.444 7.643 1.285-1.755-6.216-4.549zm1.18-1.614l7.83 5.73-3.646 4.983L25.204 7.506l3.646-4.983.807.59 2.877 2.106 2.159 1.58zM60.363 43.833L31.967 23.055l-1.181 1.614 30.01 21.96 3.61-4.933-30.011-21.96-1.181 1.614L61.61 42.13z" })),
            React.createElement("path", { fill: "#005AA0", d: "M14 41v-2h-4v4.475h2V41zM30 43.475h2V39h-8v2h6z" }),
            React.createElement("path", { fill: "#E30613", d: "M16 41h6v-2h-6z" }),
            React.createElement("path", { d: "M8 44v1h26v-1H8zm28-2v5H6v-5h30z", fill: "#005AA0" }))));
}

function ReportLegal50(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 50, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M35 13a4 4 0 100-8 4 4 0 000 8zm0 2a6 6 0 110-12 6 6 0 010 12z", fill: "#005AA0" }),
            React.createElement("path", { fill: "#005AA0", d: "M30.877 8H17v2h13.877zM14 31v1.088C14 33.694 15.321 35 16.957 35h6.086C24.68 35 26 33.694 26 32.088V31H14zm9.043 6h-6.086C14.222 37 12 34.804 12 32.088V29h16v3.088C28 34.804 25.778 37 23.043 37z" }),
            React.createElement("path", { fill: "#005AA0", d: "M26.054 30.187l1.892-.646-7-20.51h-1.892l-7 20.51 1.892.646L20 12.45zM44 32.088C44 33.694 45.321 35 46.957 35h6.086C54.68 35 56 33.694 56 32.088V31H44v1.088zM53.043 37h-6.086C44.222 37 42 34.804 42 32.088V29h16v3.088C58 34.804 55.778 37 53.043 37z" }),
            React.createElement("path", { fill: "#005AA0", d: "M56.054 30.187l1.892-.646-7-20.51h-1.892l-7 20.51 1.892.646L50 12.45z" }),
            React.createElement("path", { fill: "#005AA0", d: "M39.481 10H53V8H39.481zM47 45H24v-1h10V15.632h2V44h2V13.632h-6V42H22v5h27v-5h-9v2h7z" }),
            React.createElement("path", { d: "M37.5 9a2.5 2.5 0 10-2.5 2.5v-2a.5.5 0 11.5-.5h2z", fill: "#E30613" }))));
}

function ReportOther50(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 50, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { fill: "#005AA0", d: "M52 5H18v40h7v2h-9V3h38v44H35.059v-2H52z" }),
            React.createElement("path", { d: "M21 42h28V8H21v34zM19 6h32v38H19V6z", fill: "#005AA0" }),
            React.createElement("path", { fill: "#005AA0", d: "M31.877 30.018l-1.898 5.453 5.66 2.237v4.706h2v-6.066l-5.14-2.031 1.838-5.281-5.347-2.754-3.415 1.289H20v2h5.94l2.925-1.104zM43.193 15.602l-6.804-.002-1.755-3.041-3.473-.897L31 7.025l-1.998.07.214 6.13 4.106 1.06 1.912 3.315 5.96.002.002 5.208 7.808 5.354 1.17-1.622-6.978-4.756z" }),
            React.createElement("path", { fill: "#E30613", d: "M27 47h6v-2h-6z" }))));
}

function ReportPerson50(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 50, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M47.256 33c0 7.18-5.82 13-13 13s-13-5.82-13-13 5.82-13 13-13c3.838 0 7.402 1.672 9.858 4.525l1.516-1.304A14.966 14.966 0 0034.256 18c-8.284 0-15 6.716-15 15 0 8.285 6.715 15 15 15 8.284 0 15-6.715 15-15a14.98 14.98 0 00-.818-4.898l-.218-.574-.244-.645h-10.49c-2.876 0-4.867-.76-6.173-2.004a5.109 5.109 0 01-1.005-1.31c-.132-.25-.2-.43-.22-.503l-1.932.515c.196.735.732 1.75 1.778 2.746 1.687 1.606 4.173 2.556 7.553 2.556h9.104c.435 1.296.665 2.69.665 4.117z", fill: "#005AA0" }),
            React.createElement("path", { d: "M36 38.192c-.39 0-.532-.056-.946-.332-.711-.473-1.195-.667-2.054-.667-.859 0-1.342.194-2.054.667-.413.276-.555.332-.946.332-.391 0-.533-.056-.946-.332-.711-.473-1.195-.667-2.054-.667v2c.39 0 .532.057.946.332.711.474 1.195.667 2.054.667.859 0 1.343-.193 2.054-.667.414-.275.555-.332.946-.332.391 0 .533.057.946.332.711.474 1.195.667 2.054.667v-2zM36 40.189c.859 0 1.342-.194 2.054-.667.413-.276.555-.332.946-.332.39 0 .532.057.945.332.712.473 1.196.667 2.055.667v-2c-.391 0-.533-.057-.946-.332-.712-.474-1.195-.667-2.054-.667-.86 0-1.343.193-2.054.667-.414.275-.555.332-.946.332v2zM27 30a2.612 2.612 0 005.223 0h-2A.611.611 0 0129 30h-2zM36 30a2.611 2.611 0 105.223 0h-2A.611.611 0 0138 30h-2z", fill: "#005AA0" }),
            React.createElement("path", { d: "M28.996 2.846c.5.415.5 1.181 0 1.596a3.037 3.037 0 000 4.674c.5.415.5 1.181 0 1.596a3.038 3.038 0 00-.002 4.675l1.278-1.539c-.5-.414-.499-1.18.003-1.597a3.037 3.037 0 00-.002-4.674c-.5-.414-.499-1.18.001-1.596a3.038 3.038 0 000-4.673l-1.278 1.538z", fill: "#E30613" }),
            React.createElement("path", { d: "M33.664 2.846c.5.415.5 1.181 0 1.596a3.037 3.037 0 000 4.674c.5.415.5 1.181 0 1.596a3.038 3.038 0 00-.002 4.675l1.278-1.539c-.5-.414-.499-1.18.003-1.597a3.037 3.037 0 00-.002-4.674c-.5-.414-.499-1.18.001-1.596a3.038 3.038 0 000-4.673l-1.278 1.538zM38.333 2.846c.499.415.499 1.181 0 1.596a3.037 3.037 0 00-.001 4.674c.5.415.5 1.181 0 1.596a3.038 3.038 0 00-.002 4.675l1.278-1.539c-.5-.414-.499-1.18.003-1.597a3.037 3.037 0 00-.002-4.674c-.499-.414-.499-1.18.001-1.596a3.038 3.038 0 000-4.673l-1.277 1.538z", fill: "#005AA0" }))));
}

function ReportTransportation50(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 70, height: 50, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fillRule: "nonzero", fill: "none" },
            React.createElement("path", { fill: "#005AA0", d: "M50 18v17h2V18zM66 32.832V40h-5v2h7v-9.632L60.956 18H53v2h6.709zM16.768 34.738l-1.911.587L16.907 42H20v-2h-1.615z" }),
            React.createElement("path", { d: "M53 31V21h5.869l4.707 10H53zm2-2h5.424L57.6 23H55v6zM26 46a3 3 0 100-6 3 3 0 000 6zm0 2a5 5 0 110-10 5 5 0 010 10zM55 46a3 3 0 100-6 3 3 0 000 6zm0 2a5 5 0 110-10 5 5 0 010 10zM32 42h17v-2H32zM47 34H14v-5h-2v7h37V14H31v2h16z", fill: "#005AA0" }),
            React.createElement("path", { fill: "#005AA0", d: "M22.375 9.807l-2.543 5.197-7.422-4.755 1.413 8.259-5.784.017 2.528 4.221-3.72 2.77 7.014 1.325.371-1.965-2.533-.478 1.513-1.128-1.65-2.755 4.631-.014-1.048-6.124 5.497 3.521 1.97-4.026 1.832 2.847 1.858-.823-.557 2.094 1.933.514 1.63-6.128-4.109 1.82zM5.476 19.318l-4.203-.692-.325 1.973 4.203.693zM23.01 7.931l.694-4.202-1.974-.326-.692 4.203zM8.859 11.317L5.284 8.976l-1.096 1.673 3.575 2.341z" }),
            React.createElement("path", { fill: "#E30613", d: "M15.127 7.686l-1.391-4.04-1.891.65 1.39 4.04z" }))));
}

function MulticolorAdultChildren50(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 84, height: 50, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { strokeWidth: 2, fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M35.413 43.47v6.993M20.5 43.736v6.727M25.04 3.64s.743 2.786 5.11 2.786h5.985l.127.333c.302.875.466 1.815.466 2.793a8.552 8.552 0 11-2.067-5.576", stroke: "#005AA0" }),
            React.createElement("path", { d: "M31.097 13.166a4.119 4.119 0 01-2.92 1.208 4.112 4.112 0 01-2.92-1.208M21.774 25.002v16.84a2.387 2.387 0 01-4.774 0V25.33c0-4.26 3.3-7.75 7.484-8.05h.297M34.58 25.002v16.84a2.387 2.387 0 104.773 0V25.33a8.072 8.072 0 00-7.484-8.05h-.297M29.787 50.463v-3.16M26.566 50.463V45.81a2.238 2.238 0 012.238-2.238M66.509 51l-2.035-7.623M46.219 43.377L44.186 51M52.215 3.936s.741 2.781 5.103 2.781h5.977l.126.333a8.54 8.54 0 11-1.599-2.779", stroke: "#005AA0" }),
            React.createElement("path", { d: "M58.264 13.449a4.113 4.113 0 01-2.917 1.206 4.112 4.112 0 01-2.917-1.206M48.819 25.076V41.42a2.316 2.316 0 01-4.634 0V25.394a7.835 7.835 0 017.264-7.814h.288M61.875 25.076V41.42a2.316 2.316 0 004.634 0V25.394a7.835 7.835 0 00-7.265-7.814h-.288", stroke: "#005AA0" }),
            React.createElement("path", { d: "M28.95 27.686h-4.517M56.53 47.037h5.397", stroke: "#E30613" }))));
}

function MulticolorAlone50(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 84, height: 50, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { strokeWidth: 2, fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M34.745 17.794s1.335 5.01 9.194 5.01h10.769l.227.6c.544 1.576.84 3.266.84 5.026 0 8.498-6.89 15.386-15.387 15.386C31.89 43.816 25 36.928 25 28.43s6.89-15.388 15.388-15.388c4.665 0 8.846 2.076 11.668 5.356M33.311 27.928a1.765 1.765 0 013.53 0M43.933 27.928a1.765 1.765 0 013.53 0M48.656 9.745l.217-4.7", stroke: "#005AA0" }),
            React.createElement("path", { d: "M54.308 11.82l2.674-3.87", stroke: "#E30613" }),
            React.createElement("path", { d: "M58.003 16.573l4.318-1.865M45.71 35.194a7.503 7.503 0 01-5.323 2.2 7.502 7.502 0 01-5.322-2.2", stroke: "#005AA0" }))));
}

function MulticolorApart50(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 84, height: 50, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { id: "multicolor-apart-50_svg__a", d: "M17 24v7h-7v-7z" }),
            React.createElement("path", { id: "multicolor-apart-50_svg__b", d: "M17 24v7h-7v-7z" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("g", { fillRule: "nonzero", stroke: "#E30613", strokeWidth: 2 },
                React.createElement("path", { d: "M45 8.795l.905-.822a3.77 3.77 0 015.069 0h0a3.108 3.108 0 010 4.603L45 18l-5.974-5.424a3.108 3.108 0 010-4.603h0a3.77 3.77 0 015.07 0l.904.822z" }),
                React.createElement("path", { d: "M38.33 10.838L36 13l-5.964-5.429c-1.345-1.225-1.386-3.25-.09-4.521l.09-.086c1.413-1.285 3.648-1.285 5.06 0l.904.823.903-.823c1.413-1.285 3.648-1.285 5.06 0 .977.89 1.266 2.2.856 3.338" })),
            React.createElement("path", { d: "M0 10h40v40H0z" }),
            React.createElement("path", { d: "M5 48V25M35 25v23M21 46V34h10v12", stroke: "#005AA0", strokeWidth: 2 }),
            React.createElement("path", { stroke: "#0059A0", strokeWidth: 2, d: "M26 24l-6-5-6 5" }),
            React.createElement("path", { stroke: "#005AA0", strokeWidth: 2, d: "M38 28L20 13 2 28M18 47h20M2 47h11" }),
            React.createElement("g", { transform: "translate(0 10)" },
                React.createElement("use", { stroke: "#979797", xlinkHref: "#multicolor-apart-50_svg__a" }),
                React.createElement("use", { stroke: "#005AA0", strokeWidth: 2, xlinkHref: "#multicolor-apart-50_svg__a" })),
            React.createElement("g", null,
                React.createElement("path", { d: "M44 10h40v40H44z" }),
                React.createElement("path", { d: "M49 48V25M79 25v23M65 46V34h10v12", stroke: "#005AA0", strokeWidth: 2 }),
                React.createElement("path", { stroke: "#0059A0", strokeWidth: 2, d: "M70 24l-6-5-6 5" }),
                React.createElement("path", { stroke: "#005AA0", strokeWidth: 2, d: "M82 28L64 13 46 28M62 47h20M46 47h11" }),
                React.createElement("g", { transform: "translate(44 10)" },
                    React.createElement("use", { stroke: "#979797", xlinkHref: "#multicolor-apart-50_svg__b" }),
                    React.createElement("use", { stroke: "#005AA0", strokeWidth: 2, xlinkHref: "#multicolor-apart-50_svg__b" }))))));
}

function MulticolorMarried50(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 84, height: 50, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { id: "multicolor-married-50_svg__a", d: "M17 24v7h-7v-7z" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h84v50H0z" }),
            React.createElement("path", { d: "M21 10h40v40H21z" }),
            React.createElement("path", { d: "M26 48V25M56 25v23M42 46V34h10v12", stroke: "#005AA0", strokeWidth: 2 }),
            React.createElement("path", { stroke: "#0059A0", strokeWidth: 2, d: "M47 24l-6-5-6 5" }),
            React.createElement("path", { stroke: "#005AA0", strokeWidth: 2, d: "M59 28L41 13 23 28M39 47h20M23 47h11" }),
            React.createElement("g", { transform: "translate(21 10)" },
                React.createElement("use", { stroke: "#979797", xlinkHref: "#multicolor-married-50_svg__a" }),
                React.createElement("use", { stroke: "#005AA0", strokeWidth: 2, xlinkHref: "#multicolor-married-50_svg__a" })),
            React.createElement("g", { fillRule: "nonzero", stroke: "#E30613", strokeWidth: 2 },
                React.createElement("path", { d: "M70 8.795l.905-.822a3.77 3.77 0 015.069 0h0a3.108 3.108 0 010 4.603L70 18l-5.974-5.424a3.108 3.108 0 010-4.603h0a3.77 3.77 0 015.07 0l.904.822z" }),
                React.createElement("path", { d: "M63.33 10.838L61 13l-5.964-5.429c-1.345-1.225-1.386-3.25-.09-4.521l.09-.086c1.413-1.285 3.648-1.285 5.06 0l.904.823.903-.823c1.413-1.285 3.648-1.285 5.06 0 .977.89 1.266 2.2.856 3.338" })))));
}

function MulticolorSingle50(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 84, height: 50, xmlnsXlink: "http://www.w3.org/1999/xlink", "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("defs", null,
            React.createElement("path", { id: "multicolor-single-50_svg__a", d: "M17 24v7h-7v-7z" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M0 0h84v50H0z" }),
            React.createElement("path", { d: "M21 10h40v40H21z" }),
            React.createElement("path", { d: "M26 48V25M56 25v23M42 46V34h10v12", stroke: "#005AA0", strokeWidth: 2 }),
            React.createElement("path", { stroke: "#0059A0", strokeWidth: 2, d: "M47 24l-6-5-6 5" }),
            React.createElement("path", { stroke: "#005AA0", strokeWidth: 2, d: "M59 28L41 13 23 28M39 47h20M23 47h11" }),
            React.createElement("g", { transform: "translate(21 10)" },
                React.createElement("use", { stroke: "#979797", xlinkHref: "#multicolor-single-50_svg__a" }),
                React.createElement("use", { stroke: "#005AA0", strokeWidth: 2, xlinkHref: "#multicolor-single-50_svg__a" })),
            React.createElement("path", { d: "M61 3.795l.905-.822a3.77 3.77 0 015.069 0h0a3.108 3.108 0 010 4.603L61 13l-5.974-5.424a3.108 3.108 0 010-4.603h0a3.77 3.77 0 015.07 0l.904.822z", stroke: "#E30613", strokeWidth: 2 }))));
}

function MulticolorSmallChildren50(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 84, height: 50, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { strokeWidth: 2, fill: "none", fillRule: "evenodd" },
            React.createElement("path", { d: "M56.49 50V37.072M63.264 39.288l-2.417-5.445c-.963-2.913-3.314-4.174-6.01-4.543M44.599 47.39V50M45.882 35.068v10.385a2.128 2.128 0 11-4.255 0V34.686a5.386 5.386 0 015.385-5.386M43.902 24.186a7.221 7.221 0 11.899 2.636", stroke: "#005AA0" }),
            React.createElement("path", { d: "M62.285 37.072l1.907 4.19a2.153 2.153 0 01-3.92 1.782l-1.613-3.618M64.036 40.689v-19.6M73.05 9.786c0 4.978-8.786 11-8.786 11s-8.786-6.022-8.786-11M55.478 9.786A8.786 8.786 0 0164.264 1a8.785 8.785 0 018.786 8.786M54.102 25.208a3.638 3.638 0 01-5.1.674M41.88 25.807a2.346 2.346 0 002.009-2.642", stroke: "#005AA0" }),
            React.createElement("path", { d: "M59.478 9.584A4.583 4.583 0 0164.06 5", stroke: "#E30613" }),
            React.createElement("path", { d: "M21.192 50v-3M33.165 47v3M32.13 35.068v10.385a2.127 2.127 0 104.255 0V34.686A5.386 5.386 0 0031 29.3M34.11 24.186a7.221 7.221 0 10-.899 2.636M23.91 25.208a3.64 3.64 0 005.101.674", stroke: "#005AA0" }),
            React.createElement("path", { d: "M22.255 35.068v10.385a2.127 2.127 0 11-4.255 0V34.686a5.386 5.386 0 015.385-5.386", stroke: "#005AA0" }))));
}

function ArrowLargeLeft(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 16, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fillRule: "nonzero", fill: "currentColor" },
            React.createElement("path", { d: "M32 7H3v2h29z" }),
            React.createElement("path", { d: "M9.278 2.35L7.864.936.793 8.006l7.071 7.072 1.414-1.414-5.657-5.657z" }))));
}

function ArrowLargeRight(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 16, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fillRule: "nonzero", fill: "currentColor" },
            React.createElement("path", { d: "M0 9h29V7H0z" }),
            React.createElement("path", { d: "M22.743 13.664l1.414 1.414 7.07-7.071-7.07-7.071-1.414 1.414 5.656 5.657z" }))));
}

function ArrowSmallLeft(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 21, height: 12, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fillRule: "nonzero", fill: "currentColor" },
            React.createElement("path", { d: "M21 5H3v2h18z" }),
            React.createElement("path", { d: "M7.279 1.76L5.865.346.208 6.003l5.657 5.657 1.414-1.415-4.243-4.242z" }))));
}

function ArrowSmallRight(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 21, height: 12, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fillRule: "nonzero", fill: "currentColor" },
            React.createElement("path", { d: "M0 7h18V5H0z" }),
            React.createElement("path", { d: "M13.728 10.245l1.415 1.415L20.8 6.003 15.143.346 13.728 1.76l4.243 4.243z" }))));
}

function ArrowStandardLeft(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 28, height: 16, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fillRule: "nonzero", fill: "currentColor" },
            React.createElement("path", { d: "M28 7H3v2h25z" }),
            React.createElement("path", { d: "M9.028 2.7L7.614 1.286.896 8.003l6.718 6.718 1.414-1.414-5.303-5.304z" }))));
}

function ArrowStandardRight(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 28, height: 16, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fillRule: "nonzero", fill: "currentColor" },
            React.createElement("path", { d: "M0 9h25V7H0z" }),
            React.createElement("path", { d: "M18.99 13.307l1.413 1.414 6.718-6.718-6.718-6.717L18.99 2.7l5.303 5.303z" }))));
}

function AboutLf32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M19.5 5h-6.995A8.505 8.505 0 004 13.505v1C4 19.201 7.806 23 12.504 23h1.081L19 28.414v-7.416h-2v2.588L14.414 21h-1.91A6.496 6.496 0 016 14.505v-1A6.505 6.505 0 0112.505 7H19.5a6.5 6.5 0 016.5 6.505v1a6.491 6.491 0 01-5.94 6.471l.015 2.005A8.492 8.492 0 0028 14.505v-1C28 8.807 24.196 5 19.5 5" }),
            React.createElement("path", { fillRule: "nonzero", d: "M18 12h-3v-2h5v8h-2z" }),
            React.createElement("path", { fillRule: "nonzero", d: "M14 16h3v2h-5v-8h2z" }),
            React.createElement("path", { d: "M15 13h2v2h-2z" }))));
}

function Accont32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M28 15h-1v-5H9.067v2H25v3h-3v2h4v2h-4v2h3v3H8.898C7.852 24 7 23.177 7 22.165V9.835C7 8.823 7.852 8 8.898 8H25V6H8.898C6.749 6 5 7.721 5 9.835v12.33C5 24.279 6.749 26 8.898 26H27v-5h1v-6z", fill: "currentColor", fillRule: "evenodd" })));
}

function Bank32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M2 27v-2h28v2zM4 24v-2h24v2zM27 21h-2V10h2zM22 21h-2V10h2zM17 21h-2V10h2zM12 21h-2V10h2zM7 21H5V10h2zM16 5.101L7.553 9H3V7h4.114L16 2.899 24.886 7H29v2h-4.553z" }))));
}

function ApplyJob32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M18.539 12.98c-2.71 0-4.716-.767-6.083-2.068-.853-.812-1.293-1.645-1.456-2.258l1.933-.515c.01.043.059.169.155.35.172.328.418.66.747.975.986.938 2.497 1.515 4.704 1.515h8.388l.245.645.173.457c.432 1.25.655 2.57.655 3.919 0 6.627-5.373 12-12 12S4 22.627 4 16C4 9.372 9.372 4 16 4c3.541 0 6.834 1.544 9.1 4.177L23.584 9.48A9.975 9.975 0 0016 6C10.477 6 6 10.477 6 16s4.477 10 10 10 10-4.478 10-10c0-1.046-.16-2.07-.463-3.02h-6.998z" }),
            React.createElement("path", { d: "M11.941 16.262h-2a2.262 2.262 0 114.524 0h-2a.262.262 0 10-.524 0zM19.535 16.262h-2a2.262 2.262 0 114.523 0h-2a.261.261 0 10-.523 0zM19.097 20.129l1.415 1.414A6.363 6.363 0 0116 23.409a6.363 6.363 0 01-4.512-1.866l1.414-1.414A4.364 4.364 0 0016 21.409c1.156 0 2.266-.449 3.097-1.28z" }))));
}

function CardPayment32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M5 22V9c0-.448.552-1 1-1h20c.448 0 1 .552 1 1v13c0 .448-.552 1-1 1H6c-.448 0-1-.552-1-1zm21 3c1.552 0 3-1.448 3-3V9c0-1.552-1.448-3-3-3H6C4.448 6 3 7.448 3 9v13c0 1.552 1.448 3 3 3h20z" }),
            React.createElement("path", { d: "M5 10v2h22v-2zM13 17v-2H7v2z" }))));
}

function Contact32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M10 7.319C10 6.628 10.625 6 11.308 6h9.384C21.375 6 22 6.628 22 7.319V24.68c0 .691-.624 1.319-1.308 1.319h-9.384A1.31 1.31 0 0110 24.681V7.32zM11.308 28h9.384C22.482 28 24 26.474 24 24.681V7.32C24 5.525 22.482 4 20.692 4h-9.384C9.518 4 8 5.525 8 7.319V24.68A3.31 3.31 0 0011.308 28z", fillRule: "nonzero" }),
            React.createElement("path", { fillRule: "nonzero", d: "M23 11V9H9v2zM23 21v-2H9v2z" }),
            React.createElement("path", { d: "M16 22a1.5 1.5 0 110 3 1.5 1.5 0 010-3" }))));
}

function Economy32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M25.791 3.46l-13.72 2.667.382 1.964 11.836-2.263.984 4.35 1.95-.444z" }),
            React.createElement("path", { d: "M6.336 16.135l1.987-8.796L26.214 11l-1.91 8.786s-8.45-1.908-9.459-2.112l-.396 1.96c.99.2 11.342 2.55 11.342 2.55l2.79-12.71-21.79-4.492-2.873 12.674 5.268 1.141.423-1.954-3.273-.708zM18.5 25a3.25 3.25 0 10-6.5 0 3.25 3.25 0 006.5 0zM14 25a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0z" }),
            React.createElement("path", { d: "M15.5 17.25a3.75 3.75 0 10-7.5 0 3.75 3.75 0 007.5 0zm-5.5 0a1.75 1.75 0 113.5 0 1.75 1.75 0 01-3.5 0z" }))));
}

function Finance32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("path", { d: "M6.25 25A1.252 1.252 0 015 23.75V15h8v3h6v-3h8v8.75c0 .688-.562 1.25-1.25 1.25H6.25zM15 16h2v-1h-2v1zm10.75-6c.688 0 1.25.56 1.25 1.249v1.75H5v-1.75c0-.688.56-1.25 1.25-1.25h19.5zM12 8h8V6h-8v2zm10 0V4H10v4H6.25A3.253 3.253 0 003 11.249V23.75A3.254 3.254 0 006.25 27h19.5A3.254 3.254 0 0029 23.75V11.249a3.254 3.254 0 00-3.25-3.25H22z", fill: "currentColor", fillRule: "evenodd" })));
}

function Forms32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M7 4v24h18l-.007-18.914L19.915 4H7zm2 2h10.085l3.908 3.915L23 26H9V6z" }),
            React.createElement("path", { d: "M12 13h8v-2h-8zM12 17h8v-2h-8zM12 21h8v-2h-8z" }))));
}

function Insurance32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M21.077 13.077c-1.853 0-3.752.855-5.068 2.216-1.305-1.39-3.134-2.216-5.027-2.216-1.364 0-2.598.313-3.632.9C8.407 10.686 11.703 8 15.154 8h1.693c3.356 0 6.662 2.687 7.767 5.91-.998-.547-2.191-.833-3.537-.833M16.847 6h-1.693C9.707 6 5 11.077 5 16.154v1.292h1.693c.869-1.71 2.543-2.369 4.289-2.369 1.746 0 3.299.97 4.172 2.37h1.693c.873-1.4 2.634-2.37 4.23-2.37 1.896 0 3.42.681 4.23 2.37H27v-1.293C27 11.077 22.24 6 16.847 6" }),
            React.createElement("path", { fillRule: "nonzero", d: "M15 16v9h2v-9zM17 7V4h-2v3zM10 25h2a1.5 1.5 0 003 0h2a3.5 3.5 0 01-7 0z" }))));
}

function InsuranceAnimal32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M17.308 23.281l-.458 1.947c-1.88-.442-3.24-2.102-3.24-4.06A4.17 4.17 0 0117.779 17c.876 0 1.731.29 2.46.795l-1.137 1.645a2.353 2.353 0 00-1.323-.44 2.17 2.17 0 00-2.169 2.169c0 1.015.708 1.88 1.698 2.112zM12.97 27v2H7v-3.7c0-1.302.937-2.3 2.192-2.3H13v2H9.192c-.121 0-.192.076-.192.3V27h3.97zM7.156 7.016l-.134.685c-.079.59.053 1.236.396 1.808.806 1.42 2.622 1.898 4.074 1.074l.987 1.74c-2.404 1.363-5.444.563-6.788-1.805a4.83 4.83 0 01-.642-3.14l.459-2.362H8.98a6.752 6.752 0 015.025-2.227c3.541 0 6.687 2.744 6.995 6.281v1.092c0 1.588-1.485 2.864-3.084 2.864-1.59 0-2.916-1.277-2.916-2.864V9h2v1.162c0 .465.414.864.916.864.556 0 1.084-.453 1.084-.864v-.363l.004-.64c-.211-2.397-2.474-4.37-4.999-4.37-1.5 0-2.884.692-3.765 1.836l-.3.39H7.156z" }),
            React.createElement("path", { d: "M10 14h2v10.91h-2zM27.332 18.719h2a5.619 5.619 0 01-5.608 5.609v-2a3.619 3.619 0 003.608-3.61z" }),
            React.createElement("path", { d: "M22.723 23.327c0-4.088-1.945-7.9-5.164-10.357l1.213-1.59c3.708 2.829 5.951 7.226 5.951 11.947 0 1.774-.278 3.453-.834 5.01l-.237.663H12.866v-2h9.355c.334-1.149.502-2.376.502-3.673z" }))));
}

function InsuranceBoat32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M22.79 6.652c.246.16.438.346.583.56.057.085.103.168.146.256a4.396 4.396 0 01.087.197l1.826 4.698-1.864.724c-.71-1.827-.71-1.827-1.795-4.628l-.015-.03c-.06-.133-.024-.078-.056-.1-.475-.307-1.96-.54-4.84-.54h-1.716c-2.874.004-4.36.238-4.839.546-.035.023 0-.028-.056.093l-1.819 4.677-1.864-.725c.712-1.83.712-1.83 1.864-4.783.015-.034.037-.084.058-.127a1.95 1.95 0 01.148-.257c.146-.214.34-.4.587-.56.804-.517 2.305-.795 4.92-.853V4.425c0-1.047.815-1.925 1.858-1.925 1.044 0 1.86.878 1.86 1.925v1.373c2.621.054 4.125.333 4.927.854zM1.456 27.483l1.088-1.678a3.446 3.446 0 003.763.03 6.983 6.983 0 017.7-.028l-1.086 1.68c-1.705-1.104-3.816-1.096-5.529.03a5.452 5.452 0 01-5.936-.034zm11.443 0l1.088-1.678a3.446 3.446 0 003.764.03 6.983 6.983 0 017.7-.028l-1.087 1.68c-1.705-1.104-3.816-1.096-5.529.03a5.452 5.452 0 01-5.936-.034zm11.437 0l1.089-1.678a3.452 3.452 0 003.777.022l1.07 1.69a5.452 5.452 0 01-5.936-.034zM27.7 14.836c.347.573.396 1.292.114 1.949L24.27 24.18l-1.804-.864 3.526-7.356a.115.115 0 00-.006-.093l-.092-.006-9.898-1.352-9.837 1.344-.181.008c.02.026.018.068.015.063l3.524 7.364-1.805.863-3.539-7.398A2.112 2.112 0 014.3 14.83c.36-.593.983-.962 1.662-.969l10.034-1.37 10.108 1.38a1.932 1.932 0 011.596.965z" }),
            React.createElement("path", { d: "M15 16h2v6.608h-2z" }))));
}

function InsuranceCar32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M7 16.5c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5S9.327 18 8.5 18 7 17.327 7 16.5zM22 16.5c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5zM9 11.027v2h14.658l-2.655-5.246-1.784.903 1.185 2.343z" }),
            React.createElement("path", { d: "M29 14c0 .025-.333.033-.778.033C27.333 14.033 26 14 26 14l1.044 4L27 19h-6v2h6v2h-1v3h-2v-3H8v3H6v-3H5v-2h6v-2H5v-1l1-4s-1.333.033-2.222.033C3.333 14.033 3 14.025 3 14v-1c0-.968 4-1 4-1l2-3.531s.687-1.997 7-2c6.406 0 7 2 7 2L25 12s4 .032 4 1v1zm-4.336-6.531c-.57-.813-2.039-3-8.664-3-6.625.004-8.38 2.343-8.768 3l-1.315 2.55C3.75 10.089 1 10.661 1 13v1c0 .672.45 1.961 2.147 2.025.08.003.176.005.284.006l-.37 1.484-.06.239V23c0 .746.407 1.396 1.012 1.74L4 26a2 2 0 002 2h2a2 2 0 002-2v-1h12v1a2 2 0 002 2h2a2 2 0 002-2l.016-1.276c.589-.348.984-.99.984-1.724v-2c0-.04-.01-.078-.012-.118L29 19.013v-1.264l-.05-.254-.38-1.464c.107-.001.203-.003.283-.006C30.551 15.961 31 14.672 31 14v-1c0-2.339-2.684-2.91-4.917-2.981l-1.419-2.55z" }),
            React.createElement("path", { d: "M13 21h6v-2h-6z" }))));
}

function InsuranceHome32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M29.392 16.265l1.216-1.588L16.004 3.74 1.393 14.676l1.214 1.59L16.004 6.258z" }),
            React.createElement("path", { d: "M18.392 13.088l1.216-1.588L16 8.74 12.393 11.5l1.214 1.589 2.394-1.83zM14 19h4v8h2V17h-8v10h2zM5 13v14h2V13zM25 13v14h2V13z" }))));
}

function InsuranceTruck32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M12.911 24v-2h8v2zM20 10h-6.96V8H22v11H3v-4.647h2V17h15z" }),
            React.createElement("path", { d: "M8.193 7.2l2.97-2.855.658 5.462-1.986.24-.178-1.48L8.38 9.797 6.905 8.738l.144 1.914-1.691.588 1.114.733-1.099 1.671-4.502-2.959L4.94 9.268l-.348-4.653zM23 14v-2h3.897L30 18.624V23h-4.452v-2H28v-1.93L25.625 14zM7.439 21v2H5.312l-.955-4.16 1.95-.448L6.904 21z" }),
            React.createElement("path", { d: "M21.75 23.5a1.75 1.75 0 103.5 0 1.75 1.75 0 00-3.5 0zm-1.75 0a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0zM8.25 23.5a1.75 1.75 0 103.5 0 1.75 1.75 0 00-3.5 0zm-1.75 0a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z" }))));
}

function InsuranceVehicle32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M5 21a5 5 0 1110 0 5 5 0 01-10 0zm2 0a3 3 0 106 0 3 3 0 00-6 0z" }),
            React.createElement("path", { d: "M17.938 20h4.067v2H16v-1a6 6 0 00-10.654-3.787 6.375 6.375 0 00-1.153 2.123l-1.91-.593a8.372 8.372 0 011.513-2.794A8.002 8.002 0 0117.938 20z" }),
            React.createElement("path", { d: "M21 22a4 4 0 118 0 4 4 0 01-8 0zm2 0a2 2 0 104 0 2 2 0 00-4 0z" }),
            React.createElement("path", { d: "M20.072 13H27v6.798h-2V15h-6.222l-3.146-7H7v7.703H5V6h11.926z" }),
            React.createElement("path", { d: "M20.3 7V5a2.702 2.702 0 012.701 2.701v7.173h-2V7.7A.702.702 0 0020.3 7zM10 7.64h2V12h-2z" }))));
}

function Investment32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M21.017 6v2h3.586l-7.586 7.586-4-4.001-8.707 8.708 1.414 1.414 7.293-7.293 4 4 9-9V13h2V6zM7 23l2-2v5H7z" }),
            React.createElement("path", { d: "M11 19l2-2v9h-2zM15 19l2 2v5h-2zM19 19l2-2v9h-2zM23 15l2-2v13h-2z" }))));
}

function Loan32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M26.125 13.521L23.753 2.725 4.918 6.893l2.457 10.794 8.23-1.962-.425-1.954-6.269 1.559-1.594-6.903L22.215 5.13l1.577 6.836-3.266.685.41 1.957z" }),
            React.createElement("path", { d: "M22.5 14.25a3.75 3.75 0 10-7.5 0 3.75 3.75 0 007.5 0zm-5.5 0a1.75 1.75 0 113.5 0 1.75 1.75 0 01-3.5 0zM27.5 20.25a3.25 3.25 0 10-6.5 0 3.25 3.25 0 006.5 0zm-4.5 0a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zM20 23.188l-7-5.456-7 5.456V29h2v-4.73l5-3.997 5 3.997V29h2z" }),
            React.createElement("path", { d: "M12 29h2v-4h-2z" }))));
}

function Offer32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M5 24.009V13h10v-2H3v15.009h17v-6.954h-2v4.954z" }),
            React.createElement("path", { d: "M10 11.009V10h3V8H8v5.009h5v-2zM22.915 9.753l-1.183-2.654-1.158 2.657-2.882-.31 1.722 2.336-1.705 2.348 2.887-.317 1.183 2.654 1.158-2.657 2.882.31-1.722-2.337 1.705-2.347-2.887.317zm7.163-2.8l-3.503 4.822 3.552 4.82-5.944-.64-2.384 5.47-2.436-5.465-5.93.652 3.503-4.821-3.552-4.821 5.944.64 2.384-5.47 2.436 5.465 5.93-.651z" }))));
}

function OtherVehicles32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M29 21.584c0-1.745-1.351-3.146-3-3.146s-3 1.4-3 3.146c0 1.745 1.351 3.146 3 3.146s3-1.4 3-3.146zm2 0c0 2.834-2.23 5.146-5 5.146s-5-2.312-5-5.146 2.23-5.146 5-5.146 5 2.312 5 5.146zM9 21.584c0-1.745-1.351-3.146-3-3.146s-3 1.4-3 3.146c0 1.745 1.351 3.146 3 3.146s3-1.4 3-3.146zm2 0c0 2.834-2.23 5.146-5 5.146s-5-2.312-5-5.146 2.23-5.146 5-5.146 5 2.312 5 5.146z" }),
            React.createElement("path", { d: "M19.8 22.244h-2c0-4.905 3.675-8.916 8.253-8.916 1.313 0 2.582.332 3.727.958l-.96 1.755a5.735 5.735 0 00-2.767-.713c-3.433 0-6.253 3.078-6.253 6.916z" }),
            React.createElement("path", { d: "M24.27 18.35l-1.44 1.388-2.55-2.642 1.44-1.389zM9.139 19.771l-1.44-1.389 1.581-1.638 1.44 1.388z" }),
            React.createElement("path", { d: "M19 19.547v2h-5.148l-5.719-5.77 1.42-1.408 5.133 5.178zM13.444 13.487l-.888-1.792 7.63-3.784 2.361 2.657h3.358l1.952 3.245-1.714 1.03-1.369-2.275h-3.125l-1.943-2.187z" }),
            React.createElement("path", { d: "M16.085 6.145l-1.896.572-.578-1.915 3.138-.947 4.907 5.673-1.512 1.309zM3 13.328h3.983v2H1V9.182h11.071l2.174 3.841-1.74.985-1.6-2.826H3z" }))));
}

function PressMedia32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { fillRule: "nonzero", d: "M12 23v-2h12v2zM12 20v-2h12v2z" }),
            React.createElement("path", { d: "M12 17h8v-7h-8v7zm2.037-2H18v-2.962h-3.963V15z" }),
            React.createElement("path", { d: "M25.806 25c.74 0 1.194-.546 1.194-1.5V7.135c-.271.084-.565.214-.959.408-1.11.546-1.748.748-2.841.748-1.098 0-1.73-.205-2.805-.755C19.576 7.117 19.215 7 18.5 7c-.717 0-1.088.119-1.927.54-1.092.548-1.728.751-2.823.751-1.094 0-1.748-.206-2.845-.749A7.158 7.158 0 0010 7.147V23.5c0 .56-.087 1.063-.253 1.5h16.059zM6.5 27C4.366 27 3 25.659 3 23.5v-12C3 10.08 4.044 9 5.5 9H7v2H5.5c-.336 0-.5.17-.5.5v12c0 1.046.463 1.5 1.5 1.5 1.066 0 1.5-.419 1.5-1.5V5h1c1.048 0 1.684.202 2.749.728.888.44 1.28.563 2.001.563.717 0 1.088-.119 1.927-.54C16.769 5.205 17.405 5 18.5 5c1.098 0 1.73.205 2.805.755.819.419 1.18.536 1.895.536.72 0 1.1-.12 1.959-.543C26.269 5.202 26.907 5 28 5h1v18.5c0 1.985-1.258 3.5-3.194 3.5H7c-.161-.008-.328 0-.5 0z", fillRule: "nonzero" }))));
}

function Prevent32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M24 17.242c0 3.41-5.227 6.981-7.988 8.5C13.246 24.183 8 20.554 8 17.241v-6.88A6.075 6.075 0 0011.362 7h9.307A6.393 6.393 0 0024 10.331v6.911zM22.25 5H9.75c0 1.912-1.798 3.75-3.75 3.75v8.492C6 23.048 16 28 16 28s10-4.797 10-10.758V8.75c-1.837 0-3.75-1.876-3.75-3.75z" }),
            React.createElement("path", { fillRule: "nonzero", d: "M19.907 12.6l-4.64 4.614-2.343-2.295-1.424 1.405 3.753 3.723 6.063-6.029z" }))));
}

function PensionMega32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "evenodd" },
            React.createElement("path", { d: "M16.002 4l-5.192 9h10.385l-5.193-9zm0 4.002L17.732 11h-3.46l1.73-2.998zM10.233 18l1.153-2h9.228l1.154 2H10.233zm11.538-4h-11.54L6.77 20h18.462l-3.461-6zM6.193 21L2.73 27.003h26.542L25.809 21H6.193zm1.154 2.001h17.305l1.157 2.002H6.192l1.155-2.002z" }))));
}

function ReportDamage32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M25 6H7v20h2.01v2H5V4h22v24h-9.97v-2H25z" }),
            React.createElement("path", { d: "M15.087 18.947L13.66 22.6 18 24.127V27h2v-4.29l-3.725-1.31 1.362-3.484-4.38-2.009L10.67 17H5.826v2h5.25l2.148-.907zM22 10h-4.4l-1.033-1.983-2-.523-.089-2.546-1.998.07.14 4.034 2.583.676L16.388 12H20v2.8l5.33 4.002 1.202-1.6L22 13.8zM11 28h4v-2h-4z" }))));
}

function SaveProfile32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M3.753 10.845c-.476-.476-.476-1.33.002-1.809L2.339 7.624c-1.256 1.26-1.256 3.377 0 4.636 1.261 1.257 3.137 1.116 4.394-.142l-1.44-1.272c-.477.477-1.061.477-1.54 0z" }),
            React.createElement("path", { d: "M22 21.37V25h-2v-3h-8.01v3H10v-3.63C7.901 20.366 6 17.843 6 15c0-3.16 2.859-6.03 5.99-6h6.499c.035-.078.063-.987 1.012-2C20.45 5.987 20.973 5.862 22 5.862v3.762c2 .625 2.906 2.157 3.154 4.376H28v2h-2.932C25 19.78 23.399 20.683 22 21.37zM29 18h1v-6h-3.233c-.289-1.558-1.444-3-2.767-3.563V4c-2.76 0-3.82 0-5.021 1-1.083.901-1.386 1.479-1.618 2H12c-.909.013-1.96.2-2.789.528C6.24 8.708 4 11.708 4 15c0 3.593 1.768 6.573 4 7.535V27h6v-3h4v3h6v-4.465c2-.963 3.06-3.018 3.062-4.535H29z" }),
            React.createElement("path", { d: "M12 11v2h6v-2z" }))));
}

function Subsidiaries32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M12 7v6h8V7h-8zm-2-2h12v10H10V5zM15 23v2h2v-2h-2zm-2-2h6v6h-6v-6zM24 23v2h2v-2h-2zm-2-2h6v6h-6v-6zM6 23v2h2v-2H6zm-2-2h6v6H4v-6z" }),
            React.createElement("path", { d: "M8 19v3H6v-5h20v5h-2v-3z" }),
            React.createElement("path", { d: "M15 13.5h2V22h-2z" }))));
}

function TravelPlane32(_a) {
    var title = _a.title, titleId = _a.titleId, props = __rest(_a, ["title", "titleId"]);
    return (React.createElement("svg", __assign({ width: 32, height: 32, "aria-labelledby": titleId }, props),
        title ? React.createElement("title", { id: titleId }, title) : null,
        React.createElement("g", { fill: "currentColor", fillRule: "nonzero" },
            React.createElement("path", { d: "M14.52 22.31l-1.45 1.38-2.886-3.035 5.183-1.696 5.365 1.369-.495 1.938-4.8-1.225-1.621.53z" }),
            React.createElement("path", { d: "M11.391 26.766l5.287-1.532-.85 3.319 1.288-.373 4-4.223.261-.076 6.005-1.739a.853.853 0 00.563-.514l-2.808-.598-12.86 3.723-2.567.743-2.548-1.359-2.076.445.998.928 5.307 1.256zm.052 2.068l-6.334-1.5L.914 23.43l6.544-1.402 2.476 1.321 1.787-.517 13.342-3.862 4.652.99.169.572a2.842 2.842 0 01-1.946 3.531l-5.743 1.664-4.001 4.223-5.173 1.497.85-3.317-2.428.704zM20 16.494a.5.5 0 10-1 .012.5.5 0 001-.012zm2-.023a2.5 2.5 0 11-5 .058 2.5 2.5 0 015-.058zM15.903 5.743C18.22 6.138 20 8.027 20 10.333c0 .736-.183 1.448-.528 2.09l-1.762-.946c.19-.355.29-.742.29-1.144 0-1.452-1.325-2.666-3-2.666h-1v-1C14 5.214 12.676 4 11 4 9.325 4 8 5.214 8 6.667v1H7c-1.676 0-3 1.214-3 2.666C4 11.786 5.324 13 7 13h1.8v2H7c-2.743 0-5-2.07-5-4.667 0-2.306 1.779-4.195 4.097-4.59C6.557 3.595 8.592 2 11 2c2.409 0 4.443 1.595 4.903 3.743z" }),
            React.createElement("path", { d: "M15 13.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm2 0a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z" }))));
}

export { AboutLf32, Accident20, Accont32, Apartment24, Apartment32, Apartment40, Apartment70, ApplyJob32, ArrowEnclosed20, ArrowEnclosed24, ArrowEnclosed32, ArrowLargeLeft, ArrowLargeRight, ArrowSmallLeft, ArrowSmallRight, ArrowStandardLeft, ArrowStandardRight, ArrowsApart20, ArrowsApart232, ArrowsApart24, ArrowsApart32, ArrowsApart40, Attach20, Attach24, Attach32, Atv24, Atv32, Atv40, Atv70, Baby24, Baby32, Baby40, Baby70, Bank24, Bank32, Bank40, Bank70, Bankid20, Bankid24, Bankid40, BankidMc20, BankidMc24, BankidMc32, BankidMc40, BankidMc70, Bell24, Bell32, Bike40, BillsCoins20, BillsCoins24, BillsCoins32, BillsCoins40, BillsCoins70, Bird40, BlockCard40, Boat20, Boat24, Boat32, Boat40, Boat70, BreifcaseFirstAid20, BreifcaseFirstAid24, Briefcase20, Briefcase24, Briefcase32, Briefcase40, Briefcase70, BriefcaseFirstAid32, BriefcaseFirstAid40, BriefcaseFirstAid70, Calendar20, Calendar24, Calendar26, Calendar32, CalendarCheck20, CalendarCheck24, CalendarCheck32, CalendarCross20, CalendarCross24, CalendarCross32, Car20, Car24, Car32, Car40, Car70, CarDamage24, CarDamage32, CarDamage40, CarDamage70, CarDamaged20, CarDamaged24, CarDamagedMulticolor32, CarMulticolor20, CarMulticolor24, CarMulticolor32, Caravan24, Caravan32, Caravan40, Caravan70, Card20, Card24, Card32, Card40, Card70, CardBlock20, CardBlock24, CardBlock32, CardBlock70, CardMulticolor24, CardMulticolor32, CardPayment32, Chat20, Chat24, Chat32, Chat40, Chat70, Check20, Check24, Check32, Check40, Check70, CheckBold32, CheckEnclosed20, CheckEnclosed24, CheckEnclosed32, Chevron20, Chevron24, Chevron32, ChevronDown20, ChevronDown24, ChevronDown32, ChevronLeft20, ChevronLeft24, ChevronLeft32, ChevronRight20, ChevronRight24, ChevronRight32, ChevronUp20, ChevronUp24, ChevronUp32, Circle24, Circle32, Circle40, Circle70, Circlediagram24, Circlediagram32, Circlediagram40, Circlediagram70, Clipboard20, Clipboard24, Clipboard32, Clipboard40, Clipboard70, Clock20, Clock24, Clock32, Clock40, Coins20, Coins24, Coins32, Coins40, Coins70, CommonCamera24, CommonCamera40, Computer24, Computer32, Computer40, Computer70, Contact32, Contact70, ContactHeader24, ContactMenu32, ContactMenu32Copy, Contentcard20, Contract24, Contract32, Contract40, Contract70, Cross20, Cross24, Cross32, Cross40, Cross70, CrossEnclosed20, CrossEnclosed24, CrossEnclosed32, Cup24, Cup32, Cup40, Cup70, Damage24, Damage32, Damage40, Damage70, DamageMulticolor32, DamageMulticolor40, DigitalServices24, DigitalServices40, DigitalServices70, Document20, Document24, Document32, Document40, Dog20, Dog24, Dog32, Dog40, Dog70, DogRisk40, Download24, EInvoice24, EInvoice32, EInvoice40, EInvoice70, Economy32, EllipsisEnclosed20, EllipsisEnclosed24, EllipsisEnclosed32, Envelope24, Envelope40, ExternalLink20, ExternalLink24, ExternalLink32, ExternalLinkInline20, Facebook32, Facebook40, Facebook56, Family20, Family24, Family32, Family40, Family70, Farm24, Farm32, Farm40, Farm70, Finance32, Fish40, Flag20, Flag24, Flag32, Forms32, FundAssortment24, FundAssortment40, Gear20, Gear24, Gear32, Gear40, Glasses40, Globe20, Globe32, Gravestone32, Gravestones20, Gravestones24, Gravestones40, Gravestones70, GrowthArrow20, GrowthArrow24, GrowthArrow32, GrowthArrow40, GrowthArrow70, Guide24, Guide32, Guide40, Guide70, Heart20, Heart24, Heart32, Heart40, Heart70, Heartbeat20, Heartbeat24, Heartbeat32, Heartbeat40, Heartbeat70, House20, House24, House32, House40, House70, HouseMulticolor32, HouseSun20, HouseSun24, HouseSun32, HouseSun40, HouseSun70, Id70, IdCard20, IdCard24, IdCard32, IdSign24, IdSign40, ImageDoc24, InfoEnclosed20, InfoEnclosed24, InfoEnclosed32, Instagram32, Instagram56, Institution20, Institution32, Insurance32, InsuranceAnimal32, InsuranceBoat32, InsuranceCar32, InsuranceHome32, InsuranceTruck32, InsuranceVehicle32, Investment32, KontaktaOss26, Letter20, Letter32, Letter40, Letter70, Lightbulb24, Linkedin32, Linkedin56, List24, List32, Loan32, LoanMulticolor32, LoginBankid32, LoginDevice20, LoginDevice32, LoginPincode32, Logout20, Logout24, Logout32, Mc24, Mc32, Mc40, Mc70, Menu20, Menu24, Menu32, MenuEnvelope32, MenuEnvelope70, Minpension20, MobilePhone24, MobilePhone32, MobilePhone40, MobilePhone70, MobilePhoneBroken40, MooseMulticolor32, Moped24, Moped32, Moped40, Moped70, Mortgage24, Mortgage40, Mortgage70, MulticolorAdultChildren50, MulticolorAlone50, MulticolorApart50, MulticolorBike48, MulticolorCar48, MulticolorCarDamaged48, MulticolorChatHeart64, MulticolorDogLeft48, MulticolorDogLeft64, MulticolorDogRight48, MulticolorDogRight64, MulticolorHappyAccepted64, MulticolorHouse48, MulticolorMarried50, MulticolorMoose48, MulticolorSadDeclined64, MulticolorSingle50, MulticolorSmallChildren50, MulticolorThings48, MulticolorTravel48, NavigationAccounts32, NavigationBank32, NavigationCard32, NavigationFiletransfer32, NavigationGlobe32, NavigationHome32, NavigationMortgage32, NavigationPayment32, NavigationPension32, NavigationPhone32, NavigationPiggybank32, NavigationTransfer32, NavigationUmbrella32, NavigationWages32, NotificationEnvelope20, NotificationFlag20, NotificationSwish20, NotificationSwish24, NotificationSwish32, NotificationSwish40, NotificationSwish70, Offer32, OfferMulticolor32, OtherVehicles32, Padlock24, Padlock32, Padlock40, Padlock70, Paper20, Paper24, Paper32, Parasol24, Parasol70, Payment24, Payment40, PdfDoc20, PdfDoc24, PdfDoc32, Pencil20, Pencil24, Pencil32, Pension20, Pension24, Pension32, Pension40, Pension70, PensionCapital20, PensionCapital32, PensionMega32, PensionOccupational20, PensionOccupational24, PensionOccupational32, PensionOccupational40, PensionOccupational70, PensionOccupationalInMc70, PensionOccupationalMc70, PensionOccupationalOutMc70, PensionPrivate20, PensionPrivate24, PensionPrivate32, PensionPrivate40, PensionPrivate70, PensionPrivateInMc70, PensionPrivateMc70, PensionPrivateOutMc70, PensionState20, PensionState24, PensionState32, PensionState40, PensionState70, Percent20, Percent24, Percent32, Percent40, Percent70, Phone20, Phone24, Phone32, Phone40, Phone70, PhoneBroken20, PhoneLandscape32, PhoneLandscape40, Pin20, Pin24, Pin32, Pin40, Pin70, Plus10, Plus20, Plus24, Plus32, Pregnant24, Pregnant32, Pregnant40, Pregnant70, PressMedia32, Prevent32, Print20, Print24, Print32, RadioEnclosed20, RadioEnclosed24, RadioEnclosed32, RadioEnclosed40, RadioEnclosed70, RadioRound20, RadioRound24, RadioRound32, ReportBuilding50, ReportDamage32, ReportIndemnity50, ReportLegal50, ReportOther50, ReportPerson50, ReportTransportation50, RetroPhone40, RetroPhone70, Rv24, Rv32, Rv40, Rv70, Save24, Save32, Save40, Save70, SaveMulticolor32, SaveProfile32, Screen20, Screen24, Screen32, Search20, Search24, Search32, Share20, Share24, Shield20, Shield24, Shield32, Shield40, Shield70, ShortcutBankid50, ShortcutChangeCompany50, ShortcutDocuments50, ShortcutFundAssortment50, ShortcutMessages50, ShortcutPayment50, ShortcutReportDamage50, ShortcutTransfer50, Smalltruck24, Smalltruck32, Smalltruck40, Smalltruck70, Snailmail24, Snailmail32, Snailmail40, Snailmail70, Snowmobile24, Snowmobile32, Snowmobile40, Snowmobile70, SpecialGlobe20, SpecialStar20, Star20, Star24, Star32, Star40, Subsidiaries32, Suitcase20, Sustainability20, Sustainability24, Sustainability32, Sustainability40, Sustainability70, TabBank70, TabCar70, TabDamage70, TabHouse70, TabLoan70, TabOffer70, TabSave70, TabTravel70, Tablet40, Tag20, Tag24, Tag32, Tag40, Tag70, Text1Round20, Text1Round24, Text1Round32, Text2Round20, Text2Round24, Text2Round32, Text3Round20, Text3Round24, Text3Round32, ThumbsDown32, ThumbsUp20, ThumbsUp32, Thumbup20, Thumbup40, Tractor24, Tractor40, Tractor70, Trailer24, Trailer32, Trailer40, Trailer70, Trash20, Trash24, Trash32, Travel24, Travel32, Travel40, Travel70, TravelMulticolor32, TravelPlane32, Triangle20, Triangle24, Triangle32, Truck32, Truck70, Twitter32, Twitter40, Twitter56, Umbrella20, Umbrella24, Umbrella32, Umbrella40, Umbrella70, User20, User24, User32, User40, User70, UserHappy24, UserHappy32, UserHappy40, UserHappy70, Wallet20, Wallet24, Wallet32, Wallet40, Wallet70, WalletMinus20, WalletMinus24, WalletMinus32, WalletPlus20, WalletPlus24, WalletPlus32, World20, World32, World40, Wristwatch40, Youtube32, Youtube56 };
//# sourceMappingURL=index.d.js.map
