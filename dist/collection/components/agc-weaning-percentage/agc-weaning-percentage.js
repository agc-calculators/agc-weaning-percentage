import { validate, round } from '../../utils';
export class AgcWeaningPercentage {
    constructor() {
        this.socket = "";
        this.tract = "";
        this.mode = 'step';
        this.currentStep = 0;
        this.cache = {};
        this.submitted = false;
        this.results = {};
    }
    render() {
        return (h("div", null,
            h("form", { onSubmit: (e) => e.preventDefault(), ref: c => this.form = c, "data-wizard": "agc-weaning-percentage", "data-wizard-mode": this.mode, class: "agc-wizard" },
                h("slot", null),
                h("section", { "data-wizard-section": "1" },
                    h("div", { class: "agc-wizard__field" },
                        h("label", { "data-i18n": "fields.number-weaned" }, "Total Calves Weaned"),
                        h("input", { name: "numberWeaned", type: "number", min: "1", step: "1", required: true }),
                        h("p", { class: "agc-wizard__validation-message", "data-i18n": "validation.number-weaned.required", "data-validates": "numberWeaned" }, "Please enter a whole number of 1 or more."),
                        h("p", { "data-i18n": "hints.number-weaned" }, "\u2BA4 Enter the total number of calves weaned.")),
                    h("div", { class: "agc-wizard__actions" }, this.mode === 'step' && h("button", { class: "agc-wizard__actions-next", "data-i18n": "actions.next", onClick: this.nextPrev.bind(this, 1) }, "Next \uD83E\uDC16"))),
                h("section", { "data-wizard-section": "2" },
                    h("div", { class: "agc-wizard__field" },
                        h("label", { "data-i18n": "fields.females-exposed" }, "Total Females Exposed"),
                        h("input", { name: "femalesExposed", type: "number", min: "1", step: "1", required: true }),
                        h("p", { class: "agc-wizard__validation-message", "data-i18n": "validation.females-exposed.required", "data-validates": "femalesExposed" }, "Please enter a whole number of 1 or more."),
                        h("p", { "data-i18n": "hints.femalesExposed" }, "\u2BA4 Enter the total number of females exposed to breeding.")),
                    h("div", { class: "agc-wizard__actions" }, this.mode === 'step' && [h("button", { class: "agc-wizard__actions-prev", "data-i18n": "actions.prev", onClick: this.nextPrev.bind(this, -1) }, "\uD83E\uDC14 Back"),
                        h("button", { class: "agc-wizard__actions-next", "data-i18n": "actions.next", onClick: this.nextPrev.bind(this, 1) }, "Next \uD83E\uDC16")])),
                h("section", { "data-wizard-section": "3" },
                    h("div", { class: "agc-wizard__field" },
                        h("label", { "data-i18n": "fields.females-sold-died" }, "Total Females Sold or Died"),
                        h("input", { name: "femalesSoldDied", type: "number", min: "0", step: "1", required: true }),
                        h("p", { class: "agc-wizard__validation-message", "data-i18n": "validation.females-sold-died.required", "data-validates": "femalesSoldDied" }, "Please enter a whole number of 0 or more."),
                        h("p", { "data-i18n": "hints.females-sold-died" }, "\u2BA4 Enter the total number of females that were sold or died.")),
                    h("div", { class: "agc-wizard__actions" }, this.mode === 'step' && [h("button", { class: "agc-wizard__actions-prev", "data-i18n": "actions.prev", onClick: this.nextPrev.bind(this, -1) }, "\uD83E\uDC14 Back"),
                        h("button", { class: "agc-wizard__actions-next", "data-i18n": "actions.next", onClick: this.nextPrev.bind(this, 1) }, "Next \uD83E\uDC16")])),
                h("section", { "data-wizard-section": "4" },
                    h("div", { class: "agc-wizard__field" },
                        h("label", { "data-i18n": "fields.females-purchased" }, "Total Females Purchased"),
                        h("input", { name: "femalesPurchased", type: "number", min: "0", step: "1", required: true }),
                        h("p", { class: "agc-wizard__validation-message", "data-i18n": "validation.females-purchased.required", "data-validates": "femalesPurchased" }, "Please enter a whole number of 0 or more."),
                        h("p", { "data-i18n": "hints.females-purchased" }, "\u2BA4 Enter the total number of females that were purchased and added to the herd.")),
                    h("div", { class: "agc-wizard__actions" },
                        this.mode === 'step' && h("button", { class: "agc-wizard__actions-prev", "data-i18n": "actions.prev", onClick: this.nextPrev.bind(this, -1) }, "\uF814 Back"),
                        h("button", { class: "agc-wizard__actions-next", "data-i18n": "actions.finish", onClick: this.nextPrev.bind(this, this.mode === 'step' ? 1 : 4) }, "Calculate \uD83E\uDC16"))),
                h("section", { "data-wizard-results": true },
                    h("slot", { name: "results" })))));
    }
    showTab(n) {
        if (this.mode === 'step') {
            this.cache['sections'][n].style.display = "block";
        }
        if (this.socket) {
            this.agcStepChanged.emit({ socket: this.socket, tract: this.tract, step: this.currentStep });
        }
    }
    reset() {
        this.currentStep = 0;
        this.submitted = false;
        this.showTab(0);
    }
    validateForm() {
        let valid = true;
        if (this.currentStep === 0 || this.mode === 'full') {
            if (!validate(this.form, 'numberWeaned')) {
                valid = false;
            }
        }
        if (this.currentStep === 1 || this.mode === 'full') {
            if (!validate(this.form, 'femalesExposed')) {
                valid = false;
            }
        }
        if (this.currentStep === 2 || this.mode === 'full') {
            if (!validate(this.form, 'femalesSoldDied')) {
                valid = false;
            }
        }
        if (this.currentStep === 3 || this.mode === 'full') {
            if (!validate(this.form, 'femalesPurchased')) {
                valid = false;
            }
        }
        return valid;
    }
    nextPrev(n, e) {
        e && e.preventDefault();
        if (this.mode === 'full') {
            if (!this.validateForm())
                return false;
        }
        else if (n == 1 && !this.validateForm())
            return false;
        if (this.mode === 'step') {
            this.cache['sections'][this.currentStep].style.display = "none";
        }
        this.currentStep = this.currentStep + n;
        if (this.currentStep >= this.cache['sections'].length) {
            this.submitted = true;
            this.showResults.call(this);
            return false;
        }
        this.showTab.call(this, this.currentStep);
    }
    showResults() {
        let numberWeaned = parseInt(this.form.querySelector('[name="numberWeaned"').value);
        let femalesExposed = parseInt(this.form.querySelector('[name="femalesExposed"').value);
        let femalesSoldDied = parseInt(this.form.querySelector('[name="femalesSoldDied"').value);
        let femalesPurchased = parseInt(this.form.querySelector('[name="femalesPurchased"').value);
        let totalFemales = femalesExposed - femalesSoldDied + femalesPurchased;
        let weaningPercentage = round((numberWeaned / totalFemales) * 100, 2);
        let results = {
            socket: this.socket,
            tract: this.tract,
            numberWeaned,
            femalesExposed,
            femalesSoldDied,
            femalesPurchased,
            totalFemales,
            weaningPercentage,
            calculated: new Date()
        };
        if (this.socket) {
            this.agcCalculated.emit({ socket: this.socket, tract: this.tract, results: Object.assign({}, results) });
        }
        this.results = Object.assign({}, results);
        this.cache['results'].forEach(result => {
            result.style.display = 'block';
        });
    }
    handleAction(e) {
        if (e.detail['action'] === 'reset') {
            this.reset();
        }
    }
    componentDidLoad() {
        var sections = Array.from(this.form.querySelectorAll('[data-wizard-section]')).map(c => c).map(c => c);
        var results = Array.from(this.form.querySelectorAll('[data-wizard-results]')).map(c => c).map(c => c);
        this.cache = Object.assign({}, this.cache, { sections: sections, results: results });
        window.document.addEventListener('agcAction', this.handleAction.bind(this));
        this.form.querySelector('[name="femalesSoldDied"]').defaultValue = '0';
        this.form.querySelector('[name="femalesPurchased"]').defaultValue = '0';
        this.showTab(0);
    }
    componentDidUnload() {
        window.document.removeEventListener('agcAction', this.handleAction);
    }
    static get is() { return "agc-weaning-percentage"; }
    static get properties() { return {
        "cache": {
            "state": true
        },
        "currentStep": {
            "state": true
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "results": {
            "state": true
        },
        "socket": {
            "type": String,
            "attr": "socket"
        },
        "submitted": {
            "state": true
        },
        "tract": {
            "type": String,
            "attr": "tract"
        }
    }; }
    static get events() { return [{
            "name": "agcCalculated",
            "method": "agcCalculated",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "agcStepChanged",
            "method": "agcStepChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
}
