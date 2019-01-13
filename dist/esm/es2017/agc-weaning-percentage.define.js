
// AgcWeaningPercentage: Custom Elements Define Library, ES Module/es2017 Target

import { defineCustomElement } from './agc-weaning-percentage.core.js';
import {
  AgcWeaningPercentage,
  AgcWeaningPercentageInputs,
  AgcWeaningPercentageProgress,
  AgcWeaningPercentageResults,
  AgcWeaningPercentageResultsPlaceholder
} from './agc-weaning-percentage.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, [
    AgcWeaningPercentage,
    AgcWeaningPercentageInputs,
    AgcWeaningPercentageProgress,
    AgcWeaningPercentageResults,
    AgcWeaningPercentageResultsPlaceholder
  ], opts);
}
