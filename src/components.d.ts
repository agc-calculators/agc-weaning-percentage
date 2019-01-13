/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface AgcWeaningPercentageInputs {
    'socket': string;
  }
  interface AgcWeaningPercentageInputsAttributes extends StencilHTMLAttributes {
    'socket'?: string;
  }

  interface AgcWeaningPercentageProgress {
    'socket': string;
  }
  interface AgcWeaningPercentageProgressAttributes extends StencilHTMLAttributes {
    'socket'?: string;
  }

  interface AgcWeaningPercentageResultsPlaceholder {}
  interface AgcWeaningPercentageResultsPlaceholderAttributes extends StencilHTMLAttributes {}

  interface AgcWeaningPercentageResults {
    'socket': string;
  }
  interface AgcWeaningPercentageResultsAttributes extends StencilHTMLAttributes {
    'socket'?: string;
  }

  interface AgcWeaningPercentage {
    'mode': 'full' | 'step';
    'socket': string;
    'tract': string;
  }
  interface AgcWeaningPercentageAttributes extends StencilHTMLAttributes {
    'mode'?: 'full' | 'step';
    'onAgcCalculated'?: (event: CustomEvent) => void;
    'onAgcStepChanged'?: (event: CustomEvent) => void;
    'socket'?: string;
    'tract'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AgcWeaningPercentageInputs': Components.AgcWeaningPercentageInputs;
    'AgcWeaningPercentageProgress': Components.AgcWeaningPercentageProgress;
    'AgcWeaningPercentageResultsPlaceholder': Components.AgcWeaningPercentageResultsPlaceholder;
    'AgcWeaningPercentageResults': Components.AgcWeaningPercentageResults;
    'AgcWeaningPercentage': Components.AgcWeaningPercentage;
  }

  interface StencilIntrinsicElements {
    'agc-weaning-percentage-inputs': Components.AgcWeaningPercentageInputsAttributes;
    'agc-weaning-percentage-progress': Components.AgcWeaningPercentageProgressAttributes;
    'agc-weaning-percentage-results-placeholder': Components.AgcWeaningPercentageResultsPlaceholderAttributes;
    'agc-weaning-percentage-results': Components.AgcWeaningPercentageResultsAttributes;
    'agc-weaning-percentage': Components.AgcWeaningPercentageAttributes;
  }


  interface HTMLAgcWeaningPercentageInputsElement extends Components.AgcWeaningPercentageInputs, HTMLStencilElement {}
  var HTMLAgcWeaningPercentageInputsElement: {
    prototype: HTMLAgcWeaningPercentageInputsElement;
    new (): HTMLAgcWeaningPercentageInputsElement;
  };

  interface HTMLAgcWeaningPercentageProgressElement extends Components.AgcWeaningPercentageProgress, HTMLStencilElement {}
  var HTMLAgcWeaningPercentageProgressElement: {
    prototype: HTMLAgcWeaningPercentageProgressElement;
    new (): HTMLAgcWeaningPercentageProgressElement;
  };

  interface HTMLAgcWeaningPercentageResultsPlaceholderElement extends Components.AgcWeaningPercentageResultsPlaceholder, HTMLStencilElement {}
  var HTMLAgcWeaningPercentageResultsPlaceholderElement: {
    prototype: HTMLAgcWeaningPercentageResultsPlaceholderElement;
    new (): HTMLAgcWeaningPercentageResultsPlaceholderElement;
  };

  interface HTMLAgcWeaningPercentageResultsElement extends Components.AgcWeaningPercentageResults, HTMLStencilElement {}
  var HTMLAgcWeaningPercentageResultsElement: {
    prototype: HTMLAgcWeaningPercentageResultsElement;
    new (): HTMLAgcWeaningPercentageResultsElement;
  };

  interface HTMLAgcWeaningPercentageElement extends Components.AgcWeaningPercentage, HTMLStencilElement {}
  var HTMLAgcWeaningPercentageElement: {
    prototype: HTMLAgcWeaningPercentageElement;
    new (): HTMLAgcWeaningPercentageElement;
  };

  interface HTMLElementTagNameMap {
    'agc-weaning-percentage-inputs': HTMLAgcWeaningPercentageInputsElement
    'agc-weaning-percentage-progress': HTMLAgcWeaningPercentageProgressElement
    'agc-weaning-percentage-results-placeholder': HTMLAgcWeaningPercentageResultsPlaceholderElement
    'agc-weaning-percentage-results': HTMLAgcWeaningPercentageResultsElement
    'agc-weaning-percentage': HTMLAgcWeaningPercentageElement
  }

  interface ElementTagNameMap {
    'agc-weaning-percentage-inputs': HTMLAgcWeaningPercentageInputsElement;
    'agc-weaning-percentage-progress': HTMLAgcWeaningPercentageProgressElement;
    'agc-weaning-percentage-results-placeholder': HTMLAgcWeaningPercentageResultsPlaceholderElement;
    'agc-weaning-percentage-results': HTMLAgcWeaningPercentageResultsElement;
    'agc-weaning-percentage': HTMLAgcWeaningPercentageElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
