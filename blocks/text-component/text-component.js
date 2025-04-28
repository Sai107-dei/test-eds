export default function decorate(block) {
    const child = [...block.children];

    const getTextContent = (el) => el?.querySelector('p')?.textContent.trim() || '';
    const getElement = (el, selector) => el?.querySelector(selector) || null;

    const [
        placement,
        iconImg,
        iconImgAlt,
        eyebrowText,
        title,
        description,
        ctaLabel,
        ctaButtonElement,
        targetPath,
        exitInterstitial,
    ] = [
        getTextContent(child[0]),
        getElement(child[1], 'img'),
        getTextContent(child[2]),
        getElement(child[3], 'p'),
        child[4] || null,
        child[5] || null,
        getTextContent(child[6]),
        getElement(child[7], 'a'),
        getTextContent(child[8]),
        getTextContent(child[9]),
    ];

    block.textContent = '';

    if (placement) {
        block.style.textAlign = placement === 'center' ? 'center' : placement === 'right' ? 'right' : '';
    }

    if (eyebrowText?.textContent.trim()) {
        eyebrowText.classList.add('eyebrow-text');
        eyebrowText.setAttribute('aria-label', eyebrowText.textContent.trim());
        block.append(eyebrowText);
    }

    if (iconImg) {
        iconImg.classList.add('icon-img');
        if (iconImgAlt) {
            iconImg.alt = iconImgAlt;
        }
        block.append(iconImg);
    }

    if (title?.textContent.trim()) {
        title.classList.add('title');
        title.setAttribute('aria-label', title.textContent.trim());
        block.append(title);
    }

    if (description?.textContent.trim()) {
        description.classList.add('description');
        description.setAttribute('aria-label', description.textContent.trim());
        description.querySelectorAll('a').forEach((anchor) => {
            anchor.tabIndex = 0;
        });
        block.append(description);
    }

    if (ctaLabel) {
        const ctaButton = document.createElement('a');
        ctaButton.className = 'button cta-link';
        ctaButton.textContent = ctaLabel;
        ctaButton.setAttribute('aria-label', ctaLabel);
        if(ctaButtonElement?.href){
            ctaButton.setAttribute('href',ctaButtonElement.href);
        }
        ctaButton.tabIndex = 0;
        ctaButton.target = targetPath === 'newTab' ? '_blank' : '_self';

        const btnContainer = document.createElement('div');
        btnContainer.classList.add('cta-button');
        if (placement) {
            btnContainer.style.justifyContent = placement === 'center' ? 'center' : placement === 'right' ? 'flex-end' : '';
        }

        const arrowIcon = document.createElement('div');
        arrowIcon.className = 'cta-arrow-icon';
        arrowIcon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                <path d="M3.125 10.6914H16.875" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.25 5.06641L16.875 10.6914L11.25 16.3164" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`;
        ctaButton.appendChild(arrowIcon);

        btnContainer.appendChild(ctaButton);
        block.appendChild(btnContainer);
    }
}