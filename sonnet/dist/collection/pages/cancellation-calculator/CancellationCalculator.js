var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class CancellationCalculator {
    static listen() {
        document.addEventListener("formSubmit", (event) => __awaiter(this, void 0, void 0, function* () {
            yield customElements.whenDefined("snt-form");
            const formData = yield event.target.getData();
            var premiumPaymentPeriod = formData.content['cancellation-payment-frequency'];
            let annualPremium = formData.content['cancellation-payment'];
            annualPremium = (premiumPaymentPeriod === 'monthly') ? annualPremium * 12 : annualPremium;
            var cancelCostResult = CancellationCalculator.calculateCancellationPenalty(annualPremium, new Date(formData.content['cancellation-coverage-end-date']), new Date(formData.content['cancellation-coverage-start-date']));
            const costResultEl = document.querySelector('span.dollar-amount');
            if (costResultEl) {
                costResultEl.innerHTML = cancelCostResult.toFixed(2);
                if (this.isMobile()) {
                    const formPanel = document.querySelector('div.form-panel');
                    const resultPanel = document.querySelector('div.result-panel');
                    CancellationCalculator.setMobileResultHeight();
                    formPanel.classList.add('d-none');
                    resultPanel.classList.remove('d-none');
                }
                document.querySelector('div.question-content').classList.add('d-none');
                document.querySelector('div.cost-savings-content').classList.remove('d-none');
            }
        }));
        document.addEventListener('linkEvent', (event) => {
            if (event.detail && event.detail.type === 'click' && event.detail.target && event.detail.target.id === 'backToCalculator') {
                CancellationCalculator.executeEditCancellationCalculator();
            }
        });
    }
    static executeEditCancellationCalculator() {
        document.querySelector('div.form-panel').classList.remove('d-none');
        document.querySelector('div.result-panel').classList.add('d-none');
    }
    static setMobileResultHeight() {
        let height;
        const formPanel = document.querySelector('div.form-panel');
        if (formPanel.classList.toString().includes('d-none')) {
            formPanel.classList.remove('d-none');
            height = window.getComputedStyle(formPanel).height;
            formPanel.classList.add('d-none');
        }
        const resultPanel = document.querySelector('div.result-panel');
        resultPanel.style.height = height || window.getComputedStyle(formPanel).height;
    }
    static resetResultHeight() {
        const resultPanel = document.querySelector('div.result-panel');
        resultPanel.style.height = 'auto';
    }
    static isMobile() {
        const resultPanel = document.querySelector('div.result-panel');
        return window.getComputedStyle(resultPanel).display === 'none';
    }
    // calculate the short rate penalty for the policy cancellation
    static calculateCancellationPenalty(annualPremium, renewalDate, sonnetMoveDate) {
        var premium = Number(annualPremium);
        if (premium < 0) {
            return 0;
        }
        var daysInForce = CancellationCalculator.getDaysInForce(renewalDate, sonnetMoveDate);
        if (daysInForce < 0 || daysInForce > 366) {
            return 0;
        }
        var proRateAmount = CancellationCalculator.getProRateAmount(premium, daysInForce);
        var shortRateAmount = CancellationCalculator.getShortRateAmount(premium, daysInForce);
        return Math.ceil((daysInForce === 366) ? 0 : (shortRateAmount - proRateAmount));
    }
    // calculate the days in force in terms of move date and renewal date
    static getDaysInForce(renewalDate, sonnetMoveDate) {
        var currentTermEffective = renewalDate;
        var moveDate = sonnetMoveDate;
        // Current Term Effective Date = Current Renewal Date � 1Year
        currentTermEffective.setFullYear(currentTermEffective.getFullYear() - 1);
        var timeDiff = Math.abs(moveDate.getTime() - currentTermEffective.getTime());
        return Math.ceil(timeDiff / (1000 * 3600 * 24));
    }
    // calculate the pro-rate amount
    static getProRateAmount(annualPremium, daysInForce) {
        var proRateAmount = (annualPremium * daysInForce) / 365.00;
        return Math.round(proRateAmount * 100) / 100;
    }
    // calculate the short rate amount
    static getShortRateAmount(annualPremium, daysInForce) {
        var shortRate = CancellationCalculator.getShortRate(daysInForce);
        var shortRateAmount = annualPremium * shortRate;
        return Math.round(shortRateAmount * 100) / 100;
    }
    // get the short rate in terms of given number of days from the short rate table
    static getShortRate(days) {
        if (isNaN(days)) {
            return 0;
        }
        var daysInForce = Number(days);
        if (daysInForce < 1) {
            return 0;
        }
        if (daysInForce >= 354) {
            return 1;
        }
        // short rate data from business, for both Auto and Property
        for (var i = 0; i < this.COST_CALCULATOR_SHORT_RATES.length; i++) {
            if (daysInForce >= this.COST_CALCULATOR_SHORT_RATES[i][0] && daysInForce < this.COST_CALCULATOR_SHORT_RATES[i + 1][0]) {
                return this.COST_CALCULATOR_SHORT_RATES[i][1];
            }
        }
        return 1;
    }
}
CancellationCalculator.COST_CALCULATOR_SHORT_RATES = [[1, 0.08], [4, 0.09], [8, 0.1], [12, 0.11], [16, 0.12], [20, 0.13], [24, 0.14], [27, 0.15], [31, 0.16], [35, 0.17], [39, 0.18], [43, 0.19], [47, 0.2], [50, 0.21], [54, 0.22], [58, 0.23], [62, 0.24], [66, 0.25], [70, 0.26], [74, 0.27], [77, 0.28], [81, 0.29], [85, 0.3], [89, 0.31], [93, 0.32], [97, 0.33], [100, 0.34], [104, 0.35], [108, 0.36], [112, 0.37], [116, 0.38], [120, 0.39], [123, 0.4], [127, 0.41], [131, 0.42], [135, 0.43], [139, 0.44], [143, 0.45], [147, 0.46], [150, 0.47], [154, 0.48], [158, 0.49], [162, 0.5], [166, 0.51], [170, 0.52], [173, 0.53], [177, 0.54], [181, 0.55], [185, 0.56], [189, 0.57], [193, 0.58], [196, 0.59], [200, 0.6], [204, 0.61], [208, 0.62], [212, 0.63], [216, 0.64], [220, 0.65], [223, 0.66], [227, 0.67], [231, 0.68], [235, 0.69], [239, 0.7], [243, 0.71], [246, 0.72], [250, 0.73], [254, 0.74], [258, 0.75], [262, 0.76], [266, 0.77], [269, 0.78], [273, 0.79], [277, 0.8], [281, 0.81], [285, 0.82], [289, 0.83], [293, 0.84], [297, 0.85], [300, 0.86], [304, 0.87], [308, 0.88], [312, 0.89], [316, 0.9], [319, 0.91], [323, 0.92], [327, 0.93], [331, 0.94], [335, 0.95], [339, 0.96], [342, 0.97], [346, 0.98], [350, 0.99], [354, 1]];
window.addEventListener('load', () => __awaiter(void 0, void 0, void 0, function* () {
    CancellationCalculator.listen();
}), false);
const mediaQuery = window.matchMedia('(min-width: 768px)');
mediaQuery.addEventListener('change', (event) => {
    if (event.matches) {
        //we are going larger than 768px
        CancellationCalculator.resetResultHeight();
    }
    else {
        //we are going smaller than 768px
        CancellationCalculator.setMobileResultHeight();
    }
});
