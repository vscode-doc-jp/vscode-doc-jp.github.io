/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  [The MIT License (MIT)](https://github.com/Microsoft/vscode/blob/master/LICENSE.txt)
 *--------------------------------------------------------------------------------------------*/
$(function () {
    var t = 20;
    var n = navigator.userAgent,
        r = n.indexOf("Macintosh") >= 0,
        o = n.indexOf("Linux") >= 0,
        i = n.indexOf("Windows") >= 0;
    if (r || o || i) {
        var a, u, s, l, c;
        r ? (a = "osx", u = "win", l = "Windows", s = "linux", c = "Linux") : i ? (a = "win", u = "osx", l = "OSX", s = "linux", c = "Linux") : (a = "linux", u = "osx", l = "OSX", s = "win", c = "Windows"),
            $(".dynamic-keybinding").each(function (e) {
                var t = ($(this), this.getAttribute("data-" + a));
                t || (t = "unassigned");
                var n = this.getAttribute("data-" + u),
                    r = this.getAttribute("data-" + s),
                    o = "";
                n && r ? o = l + ": " + n + ", " + c + ": " + r : n ? o = l + ": " + n : r && (o = c + ": " + r), this.setAttribute("title", o), this.className += " keybinding " + a, this.innerHTML = "", this.appendChild(document.createTextNode(t))
            })
    }
});
