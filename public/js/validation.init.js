!(function () {
    "use strict";
    window.addEventListener(
        "load",
        function () {
            var e = document.getElementsByClassName("needs-validation");
            Array.prototype.filter.call(e, function (t) {
                t.addEventListener(
                    "submit",
                    function (e) {
                        !1 === t.checkValidity() &&
                            (e.preventDefault(), e.stopPropagation()),
                            t.classList.add("was-validated");
                    },
                    !1
                );
            });
        },
        !1
    );
})(),
    (window.onload = function () {
        var e = document.getElementById("pristine-valid-example"),
            t = new Pristine(e);
        e.addEventListener("submit", function (e) {
            e.preventDefault();
            t.validate();
        });
        var n = document.getElementById("pristine-valid-common"),
            i = new Pristine(n);
        n.addEventListener("submit", function (e) {
            e.preventDefault();
            i.validate();
        });
        var e = document.getElementById("pristine-valid-specificfield"),
            a = new Pristine(e),
            n = document.getElementById("specificfield");
        a.addValidator(
            n,
            function (e, t) {
                return !(!e.length || e[0] !== e[0].toUpperCase());
            },
            "The first character must be capitalized",
            2,
            !1
        ),
            e.addEventListener("submit", function (e) {
                e.preventDefault();
                a.validate();
            });
    });