import { decorateIcons } from '../../scripts/aem.js';

export default async function decorate(block) {
    const brandWrapperDesktop = document.createElement('div');
    brandWrapperDesktop.innerHTML = ` <a class="brand-logo-wrapper" href="/"><img src="../../icons/search.svg" alt="Pricefx" loading="lazy"></a>`;
    decorateIcons(brandWrapperDesktop, '', 'Pricefx');

}
