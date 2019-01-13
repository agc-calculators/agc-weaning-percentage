
import { Component } from '@stencil/core';


@Component({
    tag: 'agc-weaning-percentage-results-placeholder'
})
export class AgcWeaningPercentageResultsPlaceholder {

    

    render() {
        const placeholder = () => <span><i class="mark"></i> <i class="mark"></i> <i class="mark"></i> <i class="mark"></i></span>

        return (
            <section>
                <ul class="agc-results-placeholder">
                    <li>
                        <h2 data-i18n="results.weaning-percentage">Weaning Percentage</h2>
                        {placeholder()}
                    </li>
                    <li>
                        <h2 data-i18n="results.total-females">Total Number of Females</h2>
                        {placeholder()}
                    </li>                                      
                </ul>
            </section>
        );
    }
}