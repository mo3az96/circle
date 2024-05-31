/* Source and licensing information for the line(s) below can be found at https://www.thiqah.sa/core/assets/vendor/jquery-once/jquery.once.min.js. */
(function(e) {
    "use strict";
    if (typeof exports === "object" && typeof exports.nodeName !== "string") {
        e(require("jquery"))
    } else if (typeof define === "function" && define.amd) {
        define(["jquery"], e)
    } else e(jQuery)
})(function(t) {
    "use strict";
    var r = function(e) {
        e = e || "once";
        if (typeof e !== "string") throw new TypeError("The jQuery Once id parameter must be a string");
        return e
    };
    t.fn.once = function(e) {
        var n = "jquery-once-" + r(e);
        return this.filter(function() {
            return t(this).data(n) !== true
        }).data(n, true)
    };
    t.fn.removeOnce = function(e) {
        return this.findOnce(e).removeData("jquery-once-" + r(e))
    };
    t.fn.findOnce = function(e) {
        var n = "jquery-once-" + r(e);
        return this.filter(function() {
            return t(this).data(n) === true
        })
    }
})
/* Source and licensing information for the above line(s) can be found at https://www.thiqah.sa/core/assets/vendor/jquery-once/jquery.once.min.js. */
;
/* Source and licensing information for the line(s) below can be found at https://www.thiqah.sa/core/misc/drupalSettingsLoader.js. */
(function() {
    var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');
    window.drupalSettings = {};
    if (settingsElement !== null) window.drupalSettings = JSON.parse(settingsElement.textContent)
})()
/* Source and licensing information for the above line(s) can be found at https://www.thiqah.sa/core/misc/drupalSettingsLoader.js. */
;
/* Source and licensing information for the line(s) below can be found at https://www.thiqah.sa/sites/thiqah/files/languages/ar_eAjAIsO0IUsCBMXGWRsjpkDlXEsl0iksrMfymwQVRLw.js. */
window.drupalTranslations = {
    "strings": {
        "": {
            "Next": "\u0627\u0644\u062a\u0627\u0644\u064a",
            "closed": "\u0645\u063a\u0644\u0642",
            "Link": "\u0631\u0627\u0628\u0637",
            "Edit": "\u062a\u062d\u0631\u064a\u0631",
            "Image": "\u0627\u0644\u0635\u0648\u0631\u0629",
            "Enabled": "\u0645\u0641\u0639\u0644",
            "Disabled": "\u0645\u0639\u0637\u0644",
            "Cancel": "\u0625\u0644\u063a\u0627\u0621",
            "Sunday": "\u0627\u0644\u0623\u062d\u062f",
            "Monday": "\u0627\u0644\u0627\u062b\u0646\u064a\u0646",
            "Home": "Home",
            "Tuesday": "\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621",
            "Wednesday": "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621",
            "Thursday": "\u0627\u0644\u062e\u0645\u064a\u0633",
            "Friday": "\u0627\u0644\u062c\u0645\u0639\u0629",
            "Saturday": "\u0627\u0644\u0633\u0628\u062a",
            "Add": "\u0625\u0636\u0627\u0641\u0629",
            "Continue": "\u0645\u062a\u0627\u0628\u0639\u0629",
            "Done": "\u062a\u0645\u0651",
            "Open": "\u0645\u0641\u062a\u0648\u062d",
            "1 day\u0003@count days": "\u064a\u0648\u0645 \u0648\u0627\u062d\u062f\u0003\u0623\u0642\u0644 \u0645\u0646 \u064a\u0648\u0645\u0003\u064a\u0648\u0645\u064a\u0646\u0003@count \u0623\u064a\u0627\u0645\u0003@count \u064a\u0648\u0645\u0627\u0003@count \u064a\u0648\u0645",
            "Prev": "\u0627\u0644\u0633\u0627\u0628\u0642",
            "Mon": "\u0627\u062b\u0646\u064a\u0646",
            "Tue": "\u062b\u0644\u0627\u062b\u0627\u0621",
            "Wed": "\u0623\u0631\u0628\u0639\u0627\u0621",
            "Thu": "\u062e\u0645\u064a\u0633",
            "Fri": "\u062c\u0645\u0639\u0629",
            "Sat": "\u0633\u0628\u062a",
            "Sun": "\u0623\u062d\u062f",
            "May": "\u0645\u0627\u064a\u0648",
            "Close": "\u0625\u063a\u0644\u0627\u0642",
            "Show": "\u0639\u0631\u0636",
            "Select all rows in this table": "\u0627\u062e\u062a\u0631 \u0643\u0644 \u0627\u0644\u0635\u0641\u0648\u0641 \u0641\u064a \u0647\u0630\u0627 \u0627\u0644\u062c\u062f\u0648\u0644",
            "Deselect all rows in this table": "\u0623\u0644\u063a \u0627\u062e\u062a\u064a\u0627\u0631 \u0643\u0644 \u0627\u0644\u0635\u0641\u0648\u0641 \u0641\u064a \u0647\u0630\u0627 \u0627\u0644\u062c\u062f\u0648\u0644",
            "Today": "\u0627\u0644\u064a\u0648\u0645",
            "Jan": "\u064a\u0646\u0627\u064a\u0631",
            "Feb": "\u0641\u0628\u0631\u0627\u064a\u0631",
            "Mar": "\u0645\u0627\u0631\u0633",
            "Apr": "\u0623\u0628\u0631\u064a\u0644",
            "Jun": "\u064a\u0648\u0646\u064a\u0648",
            "Jul": "\u064a\u0648\u0644\u064a\u0648",
            "Aug": "\u0623\u063a\u0633\u0637\u0633",
            "Sep": "\u0633\u0628\u062a\u0645\u0628\u0631",
            "Oct": "\u0623\u0643\u062a\u0648\u0628\u0631",
            "Nov": "\u0646\u0648\u0641\u0645\u0628\u0631",
            "Dec": "\u062f\u064a\u0633\u0645\u0628\u0631",
            "Extend": "\u0627\u0644\u0648\u062d\u062f\u0627\u062a",
            "Su": "\u0627\u0644\u0623\u062d\u062f",
            "Mo": "\u0627\u0644\u0625\u062b\u0646\u064a\u0646",
            "Tu": "\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621",
            "We": "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621",
            "Th": "\u0627\u0644\u062e\u0645\u064a\u0633",
            "Fr": "\u0627\u0644\u062c\u0645\u0639\u0629",
            "Sa": "\u0627\u0644\u0633\u0628\u062a",
            "Not published": "\u0644\u0645 \u064a\u0646\u0634\u0631",
            "Loading...": "\u062a\u062d\u0645\u064a\u0644...",
            "Please wait...": "\u064a\u0631\u062c\u0649 \u0627\u0644\u0627\u0646\u062a\u0638\u0627\u0631...",
            "Hide": "\u0625\u062e\u0641\u0627\u0621",
            "1 min\u0003@count min": "\u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u062d\u062f\u0629\u0003\u0623\u0642\u0644 \u0645\u0646 \u062f\u0642\u064a\u0642\u0629\u0003\u062f\u0642\u064a\u0642\u062a\u064a\u0646\u0003@count \u062f\u0642\u0627\u0626\u0642\u0003@count \u062f\u0642\u064a\u0642\u0629\u0003@count \u062f\u0642\u064a\u0642\u0629",
            "1 sec\u0003@count sec": "\u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629\u0003\u0623\u0642\u0644 \u0645\u0646 \u062b\u0627\u0646\u064a\u0629\u0003\u062b\u0627\u0646\u064a\u062a\u064a\u0646\u0003@count \u062b\u0648\u0627\u0646\u0003@count \u062b\u0627\u0646\u064a\u0629\u0003@count \u062b\u0627\u0646\u064a\u0629",
            "mm\/dd\/yy": "mm\/dd\/yy",
            "Error message": "\u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u062e\u0637\u0623",
            "Warning message": "\u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u062a\u062d\u0630\u064a\u0631",
            "By @name on @date": "\u0645\u0646 @name \u0628\u062a\u0627\u0631\u064a\u062e \u00a0@date",
            "By @name": "\u0645\u0646 %name",
            "Not in menu": "\u063a\u064a\u0631 \u0645\u0648\u062c\u0648\u062f \u0641\u064a \u0627\u0644\u0642\u0627\u0626\u0645\u0629",
            "Alias: @alias": "\u0627\u0644\u0628\u062f\u064a\u0644: @alias",
            "No alias": "\u0644\u0627 \u064a\u0648\u062c\u062f \u0628\u062f\u0627\u0626\u0644",
            "0 sec": "0 \u062b\u0627\u0646\u064a\u0629",
            "New revision": "\u0645\u0631\u0627\u062c\u0639\u0629 \u062c\u062f\u064a\u062f\u0629",
            "Drag to re-order": "\u0627\u0633\u062d\u0628 \u0644\u062a\u063a\u064a\u0631 \u0627\u0644\u062a\u0631\u062a\u064a\u0628",
            "Changes made in this table will not be saved until the form is submitted.": "\u0627\u0644\u062a\u063a\u064a\u064a\u0631\u0627\u062a \u0627\u0644\u062d\u0627\u062f\u062b\u0629 \u0639\u0644\u0649 \u0647\u0630\u0627 \u0627\u0644\u062c\u062f\u0648\u0644 \u0644\u0646 \u062a\u064f\u062d\u0641\u0638 \u0625\u0644\u0627 \u0628\u0639\u062f \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0627\u0633\u062a\u0645\u0627\u0631\u0629.",
            "Not restricted": "\u063a\u064a\u0631 \u0645\u0642\u064a\u062f",
            "This permission is inherited from the authenticated user role.": "\u0647\u0630\u0647 \u0627\u0644\u0635\u0644\u0627\u062d\u064a\u0629 \u0645\u0646\u0628\u062b\u0642\u0629 \u0645\u0646 \u062f\u0648\u0631 \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0645\u0639\u0631\u0641.",
            "No revision": "\u0644\u0627 \u062a\u0648\u062c\u062f \u0623\u064a \u0645\u0631\u0627\u062c\u0639\u0629",
            "Requires a title": "\u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0636\u0631\u0648\u0631\u064a",
            "(active tab)": "(\u0639\u0644\u0627\u0645\u0629 \u0627\u0644\u062a\u0628\u0648\u064a\u0628 \u0627\u0644\u0646\u0634\u0637\u0629)",
            "Status message": "\u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u062d\u0627\u0644\u0629",
            "An AJAX HTTP error occurred.": "\u062d\u062f\u062b \u062e\u0637\u0623 \u0623\u062c\u0627\u0643\u0633 HTTP.",
            "HTTP Result Code: !status": "\u0646\u062a\u064a\u062c\u0629 \u0643\u0648\u062f PHP: !status",
            "An AJAX HTTP request terminated abnormally.": "\u062a\u0645 \u0625\u0646\u0647\u0627\u0621 \u0637\u0644\u0628 AJAX HTTP \u0628\u0634\u0643\u0644 \u063a\u064a\u0631 \u0639\u0627\u062f\u064a.",
            "Debugging information follows.": "\u064a\u0644\u064a\u0647 \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u062a\u0646\u0642\u064a\u062d.",
            "Path: !uri": "\u0627\u0644\u0645\u0633\u0627\u0631: !uri",
            "ResponseText: !responseText": "ResponseText: !responseText",
            "ReadyState: !readyState": "ReadyState: !readyState",
            "Restricted to certain pages": "\u062e\u0627\u0636\u0639 \u0644\u0628\u0639\u0636 \u0627\u0644\u0635\u0641\u062d\u0627\u062a",
            "The block cannot be placed in this region.": "\u0644\u0627 \u064a\u0645\u0643\u0646 \u0648\u0636\u0639 \u0627\u0644\u0635\u0646\u062f\u0648\u0642 \u0641\u064a \u0647\u0630\u0647 \u0627\u0644\u0645\u0646\u0637\u0642\u0629.",
            "Hide summary": "\u0625\u062e\u0641\u0627\u0621 \u0627\u0644\u0645\u0648\u062c\u0632",
            "Edit summary": "\u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0645\u0644\u062e\u0635",
            "Don\u0027t display post information": "\u0639\u062f\u0645 \u0639\u0631\u0636 \u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u0629",
            "Collapse": "\u0637\u064a",
            "The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.": "\u0644\u0627 \u064a\u0645\u0643\u0646 \u0631\u0641\u0639 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0645\u062d\u062f\u062f %filename. \u064a\u0633\u0645\u062d \u0641\u0642\u0637 \u0628\u0627\u0644\u0645\u0644\u0641\u0627\u062a \u0630\u0627\u062a \u0627\u0644\u0644\u0648\u0627\u062d\u0642 \u0627\u0644\u062a\u0627\u0644\u064a\u0629: %extensions.",
            "Show row weights": "\u0625\u0638\u0647\u0627\u0631 \u0623\u0648\u0632\u0627\u0646 \u0627\u0644\u0623\u0633\u0637\u0631",
            "Hide row weights": "\u0625\u062e\u0641\u0627\u0621 \u0623\u0648\u0632\u0627\u0646 \u0627\u0644\u0633\u0637\u0648\u0631",
            "Apply (all displays)": "\u062a\u0637\u0628\u064a\u0642 (\u0643\u0644 \u0627\u0644\u0639\u0631\u0648\u0636)",
            "Apply (this display)": "\u062a\u0637\u0628\u064a\u0642 (\u0647\u0630\u0627 \u0627\u0644\u0639\u0631\u0636)",
            "1 hour\u0003@count hours": "\u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629\u0003\u0623\u0642\u0644 \u0645\u0646 \u0633\u0627\u0639\u0629\u0003\u0633\u0627\u0639\u062a\u064a\u0646\u0003@count \u0633\u0627\u0639\u0627\u062a\u0003@count \u0633\u0627\u0639\u0629\u0003@count \u0633\u0627\u0639\u0629",
            "1 year\u0003@count years": "\u0633\u0646\u0629 \u0648\u0627\u062d\u062f\u0629\u0003\u0623\u0642\u0644 \u0645\u0646 \u0633\u0646\u0629\u0003\u0633\u0646\u062a\u0627\u0646\u0003@count \u0633\u0646\u0648\u0627\u062a\u0003@count \u0633\u0646\u0629\u0003@count \u0633\u0646\u0629",
            "1 week\u0003@count weeks": "\u0623\u0633\u0628\u0648\u0639 \u0648\u0627\u062d\u062f\u0003\u0623\u0642\u0644 \u0645\u0646 \u0623\u0633\u0628\u0648\u0639\u0003\u0623\u0633\u0628\u0648\u0639\u064a\u0646\u0003@count \u0623\u0633\u0627\u0628\u064a\u0639\u0003@count \u0623\u0633\u0628\u0648\u0639\u0627\u0003@count \u0623\u0633\u0628\u0648\u0639",
            "1 month\u0003@count months": "\u0634\u0647\u0631 \u0648\u0627\u062d\u062f\u0003\u0623\u0642\u0644 \u0645\u0646 \u0634\u0647\u0631\u0003\u0634\u0647\u0631\u0627\u0646\u0003@count \u0623\u0634\u0647\u0631\u0003@count \u0634\u0647\u0631\u0627\u064b\u0003@count \u0634\u0647\u0631"
        },
        "Long month name": {
            "June": "\u064a\u0648\u0646\u064a\u0648",
            "July": "\u064a\u0648\u0644\u064a\u0648",
            "August": "\u0623\u063a\u0633\u0637\u0633",
            "January": "\u064a\u0646\u0627\u064a\u0631",
            "February": "\u0641\u0628\u0631\u0627\u064a\u0631",
            "March": "\u0645\u0627\u0631\u0633",
            "April": "\u0623\u0628\u0631\u064a\u0644",
            "May": "\u0645\u0627\u064a\u0648",
            "September": "\u0633\u0628\u062a\u0645\u0628\u0631",
            "October": "\u0623\u0643\u062a\u0648\u0628\u0631",
            "November": "\u0646\u0648\u0641\u0645\u0628\u0631",
            "December": "\u062f\u064a\u0633\u0645\u0628\u0631"
        }
    },
    "pluralFormula": {
        "0": 1,
        "1": 0,
        "2": 2,
        "3": 3,
        "4": 3,
        "5": 3,
        "6": 3,
        "7": 3,
        "8": 3,
        "9": 3,
        "10": 3,
        "100": 5,
        "101": 5,
        "102": 5,
        "103": 3,
        "104": 3,
        "105": 3,
        "106": 3,
        "107": 3,
        "108": 3,
        "109": 3,
        "110": 3,
        "default": 4
    }
};
/* Source and licensing information for the above line(s) can be found at https://www.thiqah.sa/sites/thiqah/files/languages/ar_eAjAIsO0IUsCBMXGWRsjpkDlXEsl0iksrMfymwQVRLw.js. */
;
/* Source and licensing information for the line(s) below can be found at https://www.thiqah.sa/core/misc/drupal.js. */
window.Drupal = {
    behaviors: {},
    locale: {}
};
(function(Drupal, drupalSettings, drupalTranslations, console, Proxy, Reflect) {
    Drupal.throwError = function(error) {
        setTimeout(function() {
            throw error
        }, 0)
    };
    Drupal.attachBehaviors = function(context, settings) {
        context = context || document;
        settings = settings || drupalSettings;
        var behaviors = Drupal.behaviors;
        Object.keys(behaviors || {}).forEach(function(i) {
            if (typeof behaviors[i].attach === 'function') try {
                behaviors[i].attach(context, settings)
            } catch (e) {
                Drupal.throwError(e)
            }
        })
    };
    Drupal.detachBehaviors = function(context, settings, trigger) {
        context = context || document;
        settings = settings || drupalSettings;
        trigger = trigger || 'unload';
        var behaviors = Drupal.behaviors;
        Object.keys(behaviors || {}).forEach(function(i) {
            if (typeof behaviors[i].detach === 'function') try {
                behaviors[i].detach(context, settings, trigger)
            } catch (e) {
                Drupal.throwError(e)
            }
        })
    };
    Drupal.checkPlain = function(str) {
        str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
        return str
    };
    Drupal.formatString = function(str, args) {
        var processedArgs = {};
        Object.keys(args || {}).forEach(function(key) {
            switch (key.charAt(0)) {
                case '@':
                    processedArgs[key] = Drupal.checkPlain(args[key]);
                    break;
                case '!':
                    processedArgs[key] = args[key];
                    break;
                default:
                    processedArgs[key] = Drupal.theme('placeholder', args[key]);
                    break
            }
        });
        return Drupal.stringReplace(str, processedArgs, null)
    };
    Drupal.stringReplace = function(str, args, keys) {
        if (str.length === 0) return str;
        if (!Array.isArray(keys)) {
            keys = Object.keys(args || {});
            keys.sort(function(a, b) {
                return a.length - b.length
            })
        };
        if (keys.length === 0) return str;
        var key = keys.pop(),
            fragments = str.split(key);
        if (keys.length)
            for (var i = 0; i < fragments.length; i++) fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
        return fragments.join(args[key])
    };
    Drupal.t = function(str, args, options) {
        options = options || {};
        options.context = options.context || '';
        if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) str = drupalTranslations.strings[options.context][str];
        if (args) str = Drupal.formatString(str, args);
        return str
    };
    Drupal.url = function(path) {
        return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path
    };
    Drupal.url.toAbsolute = function(url) {
        var urlParsingNode = document.createElement('a');
        try {
            url = decodeURIComponent(url)
        } catch (e) {};
        urlParsingNode.setAttribute('href', url);
        return urlParsingNode.cloneNode(false).href
    };
    Drupal.url.isLocal = function(url) {
        var absoluteUrl = Drupal.url.toAbsolute(url),
            protocol = window.location.protocol;
        if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) protocol = 'https:';
        var baseUrl = "".concat(protocol, "//").concat(window.location.host).concat(drupalSettings.path.baseUrl.slice(0, -1));
        try {
            absoluteUrl = decodeURIComponent(absoluteUrl)
        } catch (e) {};
        try {
            baseUrl = decodeURIComponent(baseUrl)
        } catch (e) {};
        return absoluteUrl === baseUrl || absoluteUrl.indexOf("".concat(baseUrl, "/")) === 0
    };
    Drupal.formatPlural = function(count, singular, plural, args, options) {
        args = args || {};
        args['@count'] = count;
        var pluralDelimiter = drupalSettings.pluralDelimiter,
            translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter),
            index = 0;
        if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
            index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default
        } else if (args['@count'] !== 1) index = 1;
        return translations[index]
    };
    Drupal.encodePath = function(item) {
        return window.encodeURIComponent(item).replace(/%2F/g, '/')
    };
    Drupal.deprecationError = function(_ref) {
        var message = _ref.message;
        if (drupalSettings.suppressDeprecationErrors === false && typeof console !== 'undefined' && console.warn) console.warn("[Deprecation] ".concat(message))
    };
    Drupal.deprecatedProperty = function(_ref2) {
        var target = _ref2.target,
            deprecatedProperty = _ref2.deprecatedProperty,
            message = _ref2.message;
        if (!Proxy || !Reflect) return target;
        return new Proxy(target, {
            get: function get(target, key) {
                if (key === deprecatedProperty) Drupal.deprecationError({
                    message: message
                });
                for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) rest[_key - 2] = arguments[_key];
                return Reflect.get.apply(Reflect, [target, key].concat(rest))
            }
        })
    };
    Drupal.theme = function(func) {
        if (func in Drupal.theme) {
            var _Drupal$theme;
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) args[_key2 - 1] = arguments[_key2];
            return (_Drupal$theme = Drupal.theme)[func].apply(_Drupal$theme, args)
        }
    };
    Drupal.theme.placeholder = function(str) {
        return "<em class=\"placeholder\">".concat(Drupal.checkPlain(str), "</em>")
    }
})(Drupal, window.drupalSettings, window.drupalTranslations, window.console, window.Proxy, window.Reflect)
/* Source and licensing information for the above line(s) can be found at https://www.thiqah.sa/core/misc/drupal.js. */
;;