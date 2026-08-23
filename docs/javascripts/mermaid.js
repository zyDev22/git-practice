document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("code.language-mermaid").forEach(function (code) {
        const pre = code.parentElement;
        const diagram = document.createElement("div");

        diagram.className = "mermaid";
        diagram.textContent = code.textContent;

        pre.replaceWith(diagram);
    });

    mermaid.initialize({ startOnLoad: true });
});
