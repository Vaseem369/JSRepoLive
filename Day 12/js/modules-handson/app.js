import formatPrice, { PI, add, multiply } from "./mathUtils.js";

const out = document.getElementById("hands-on-module-out");

if (out) {
    const lines = [];

    lines.push(`PI ≈ ${PI.toFixed(5)}`);
    lines.push(`add(2, 3) = ${add(2, 3)}`);
    lines.push(`multiply(4, 5) = ${multiply(4, 5)}`);
    lines.push(`formatPrice(60000) = ${formatPrice(60000)}`);
    out.textContent = lines.join("\n");
}
