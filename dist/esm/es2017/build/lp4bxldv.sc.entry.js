/*! Built with http://stenciljs.com */
import { h } from '../agc-weaning-percentage.core.js';

class AgcWeaningPercentageResultsPlaceholder {
    render() {
        const placeholder = () => h("span", null,
            h("i", { class: "mark" }),
            " ",
            h("i", { class: "mark" }),
            " ",
            h("i", { class: "mark" }),
            " ",
            h("i", { class: "mark" }));
        return (h("section", null,
            h("ul", { class: "agc-results-placeholder" },
                h("li", null,
                    h("h2", { "data-i18n": "results.weaning-percentage" }, "Weaning Percentage"),
                    placeholder()),
                h("li", null,
                    h("h2", { "data-i18n": "results.total-females" }, "Total Number of Females"),
                    placeholder()))));
    }
    static get is() { return "agc-weaning-percentage-results-placeholder"; }
}

export { AgcWeaningPercentageResultsPlaceholder };
