(() => {

  const componentGroups = {
    bx: Object.entries({
      "accordion": [
        "bx-accordion-item",
        "bx-accordion",
      ],
      "breadcrumb": [
        "bx-breadcrumb-item",
        "bx-breadcrumb-link",
        "bx-breadcrumb-overflow-menu",
        "bx-breadcrumb",
      ],
      "button": [
        "bx-btn-skeleton",
        "bx-btn",
      ],
      "checkbox": [
        "bx-checkbox",
      ],
      "code-snippet": [
        "bx-code-snippet-skeleton",
        "bx-code-snippet",
      ],
      "combo-box": [
        "bx-combo-box-item",
        "bx-combo-box",
      ],
      "content-switcher": [
        "bx-content-switcher-item",
        "bx-content-switcher",
      ],
      "copy-button": [
        "bx-copy-button",
      ],
      "data-table": [
        "bx-table-batch-actions",
        "bx-table-body",
        "bx-table-cell-skeleton",
        "bx-table-cell",
        "bx-table-expand-row",
        "bx-table-expanded-row",
        "bx-table-head",
        "bx-table-header-cell-skeleton",
        "bx-table-header-cell",
        "bx-table-header-expand-row",
        "bx-table-header-row",
        "bx-table-row",
        "bx-table-toolbar-content",
        "bx-table-toolbar-search",
        "bx-table-toolbar",
        "bx-table",
      ],
      "date-picker": [
        "bx-date-picker-input-skeleton",
        "bx-date-picker-input",
        "bx-date-picker",
      ],
      "dropdown": [
        "bx-dropdown-item",
        "bx-dropdown-skeleton",
        "bx-dropdown",
      ],
      "file-uploader": [
        "bx-file-drop-container",
        "bx-file-uploader-item",
        "bx-file-uploader",
      ],
      "form": [
        "bx-form-item",
      ],
      "inline-loading": [
        "bx-inline-loading",
      ],
      "input": [
        "bx-input",
      ],
      "link": [
        "bx-link",
      ],
      "list": [
        "bx-list-item",
        "bx-ordered-list",
        "bx-unordered-list",
      ],
      "loading": [
        "bx-loading",
      ],
      "modal": [
        "bx-modal-body",
        "bx-modal-close-button",
        "bx-modal-footer-button",
        "bx-modal-footer",
        "bx-modal-header",
        "bx-modal-heading",
        "bx-modal-label",
        "bx-modal",
      ],
      "multi-select": [
        "bx-multi-select-item",
        "bx-multi-select",
      ],
      "notification": [
        "bx-inline-notification",
        "bx-toast-notification",
      ],
      "number-input": [
        "bx-number-input-skeleton",
        "bx-number-input",
      ],
      "overflow-menu": [
        "bx-overflow-menu-body",
        "bx-overflow-menu-item",
        "bx-overflow-menu",
      ],
      "pagination": [
        "bx-page-sizes-select",
        "bx-pages-select",
        "bx-pagination",
      ],
      "progress-indicator": [
        "bx-progress-indicator-skeleton",
        "bx-progress-indicator",
        "bx-progress-step-skeleton",
        "bx-progress-step",
      ],
      "radio-button": [
        "bx-radio-button-group",
        "bx-radio-button-skeleton",
        "bx-radio-button",
      ],
      "search": [
        "bx-search-skeleton",
        "bx-search",
      ],
      "select": [
        "bx-select-item-group",
        "bx-select-item",
        "bx-select",
      ],
      "skeleton-placeholder": [
        "bx-skeleton-placeholder",
      ],
      "skeleton-text": [
        "bx-skeleton-text",
      ],
      "skip-to-content": [
        "bx-skip-to-content",
      ],
      "slider": [
        "bx-slider-input",
        "bx-slider-skeleton",
        "bx-slider",
      ],
      "structured-list": [
        "bx-structured-list-body",
        "bx-structured-list-cell",
        "bx-structured-list-head",
        "bx-structured-list-header-cell-skeleton",
        "bx-structured-list-header-cell",
        "bx-structured-list-header-row",
        "bx-structured-list-row",
        "bx-structured-list",
      ],
      "tabs": [
        "bx-tab-skeleton",
        "bx-tab",
        "bx-tabs-skeleton",
        "bx-tabs",
      ],
      "tag": [
        "bx-filter-tag",
        "bx-tag",
      ],
      "textarea": [
        "bx-textarea-skeleton",
        "bx-textarea",
      ],
      "tile": [
        "bx-clickable-tile",
        "bx-expandable-tile",
        "bx-radio-tile",
        "bx-selectable-tile",
        "bx-tile-group",
        "bx-tile",
      ],
      "toggle": [
        "bx-toggle",
      ],
      "tooltip": [
        "bx-tooltip-body",
        "bx-tooltip-definition",
        "bx-tooltip-footer",
        "bx-tooltip-icon",
        "bx-tooltip",
      ],
      "ui-shell": [
        "bx-header-menu-button",
        "bx-header-menu-item",
        "bx-header-menu",
        "bx-header-name",
        "bx-header-nav-item",
        "bx-header-nav",
        "bx-header",
        "bx-side-nav-divider",
        "bx-side-nav-items",
        "bx-side-nav-link",
        "bx-side-nav-menu-item",
        "bx-side-nav-menu",
        "bx-side-nav",
      ],
    }),
    dds: Object.entries({
      "back-to-top": [
        "dds-back-to-top"
      ],
      "background-media": [
        "dds-background-media"
      ],
      "button": [
        "dds-button-expressive"
      ],
      "button-group": [
        "dds-button-group-item",
        "dds-button-group"
      ],
      "callout-quote": [
        "dds-callout-link-with-icon",
        "dds-callout-quote"
      ],
      "callout-with-media": [
        "dds-callout-with-media-copy",
        "dds-callout-with-media-image",
        "dds-callout-with-media-video",
        "dds-callout-with-media"
      ],
      "card": [
        "dds-card-eyebrow",
        "dds-card-footer",
        "dds-card-heading",
        "dds-card",
        "dds-image-logo"
      ],
      "card-group": [
        "dds-card-group-card-link-item",
        "dds-card-group-item",
        "dds-card-group"
      ],
      "card-in-card": [
        "dds-card-in-card-image",
        "dds-card-in-card"
      ],
      "card-link": [
        "dds-card-link-heading",
        "dds-card-link"
      ],
      "card-section-carousel": [
        "dds-card-section-carousel"
      ],
      "card-section-images": [
        "dds-card-section-images"
      ],
      "card-section-offset": [
        "dds-card-section-offset"
      ],
      "card-section-simple": [
        "dds-card-section-simple"
      ],
      "carousel": [
        "dds-carousel"
      ],
      "cloud-masthead": [
        "dds-cloud-button-cta",
        "dds-cloud-left-nav-item",
        "dds-cloud-masthead-composite",
        "dds-cloud-masthead-container",
        "dds-cloud-masthead-global-bar",
        "dds-cloud-masthead-profile",
        "dds-cloud-megamenu-category-heading",
        "dds-cloud-megamenu-category-link-group",
        "dds-cloud-megamenu-category-link",
        "dds-cloud-megamenu-left-navigation",
        "dds-cloud-megamenu-right-navigation",
        "dds-cloud-megamenu-tab",
        "dds-cloud-megamenu-tabs",
        "dds-cloud-megamenu",
        "dds-cloud-top-nav-name"
      ],
      "content-block": [
        "dds-content-block-complementary",
        "dds-content-block-copy",
        "dds-content-block-heading",
        "dds-content-block-paragraph",
        "dds-content-block"
      ],
      "content-block-cards": [
        "dds-content-block-cards"
      ],
      "content-block-headlines": [
        "dds-content-block-headlines-heading",
        "dds-content-block-headlines-item",
        "dds-content-block-headlines"
      ],
      "content-block-horizontal": [
        "dds-content-block-horizontal"
      ],
      "content-block-media": [
        "dds-content-block-media-content",
        "dds-content-block-media"
      ],
      "content-block-mixed": [
        "dds-content-block-mixed"
      ],
      "content-block-segmented": [
        "dds-content-block-segmented-item",
        "dds-content-block-segmented"
      ],
      "content-block-simple": [
        "dds-content-block-simple"
      ],
      "content-group": [
        "dds-content-group-copy",
        "dds-content-group-heading",
        "dds-content-group-paragraph",
        "dds-content-group"
      ],
      "content-group-banner": [
        "dds-content-group-banner"
      ],
      "content-group-cards": [
        "dds-content-group-cards-item",
        "dds-content-group-cards"
      ],
      "content-group-horizontal": [
        "dds-content-group-horizontal"
      ],
      "content-group-pictograms": [
        "dds-content-group-pictograms"
      ],
      "content-group-simple": [
        "dds-content-group-simple"
      ],
      "content-item": [
        "dds-content-item-copy",
        "dds-content-item-heading",
        "dds-content-item-paragraph",
        "dds-content-item"
      ],
      "content-item-horizontal": [
        "dds-content-item-horizontal-copy",
        "dds-content-item-horizontal-eyebrow",
        "dds-content-item-horizontal-media-copy",
        "dds-content-item-horizontal-media-featured",
        "dds-content-item-horizontal-media-video",
        "dds-content-item-horizontal-media",
        "dds-content-item-horizontal-thumbnail-copy",
        "dds-content-item-horizontal"
      ],
      "content-section": [
        "dds-content-section-copy",
        "dds-content-section-heading",
        "dds-content-section"
      ],
      "cta": [
        "dds-button-cta",
        "dds-card-cta-footer",
        "dds-card-cta-image",
        "dds-card-cta",
        "dds-card-link-cta",
        "dds-cta",
        "dds-feature-cta-footer",
        "dds-feature-cta",
        "dds-link-list-item-card-cta",
        "dds-link-list-item-cta",
        "dds-text-cta",
        "dds-video-cta-composite",
        "dds-video-cta-container"
      ],
      "cta-block": [
        "dds-cta-block-item-row",
        "dds-cta-block-item",
        "dds-cta-block"
      ],
      "cta-section": [
        "dds-cta-section"
      ],
      "dotcom-shell": [
        "dds-dotcom-shell-composite",
        "dds-dotcom-shell-container",
        "dds-dotcom-shell"
      ],
      "expressive-modal": [
        "dds-expressive-modal-body",
        "dds-expressive-modal-close-button",
        "dds-expressive-modal-footer",
        "dds-expressive-modal-header",
        "dds-expressive-modal-heading",
        "dds-expressive-modal"
      ],
      "feature-card": [
        "dds-feature-card-footer",
        "dds-feature-card"
      ],
      "feature-card-block-large": [
        "dds-feature-card-block-large-footer",
        "dds-feature-card-block-large"
      ],
      "feature-card-block-medium": [
        "dds-feature-card-block-medium-block-heading",
        "dds-feature-card-block-medium"
      ],
      "feature-section": [
        "dds-feature-section-card-link",
        "dds-feature-section"
      ],
      "filter-panel": [
        "dds-filter-group-item",
        "dds-filter-group",
        "dds-filter-modal-footer-button",
        "dds-filter-modal-footer",
        "dds-filter-modal-heading",
        "dds-filter-panel-checkbox",
        "dds-filter-panel-composite",
        "dds-filter-panel-heading",
        "dds-filter-panel-input-select-item",
        "dds-filter-panel-input-select",
        "dds-filter-panel-modal",
        "dds-filter-panel"
      ],
      "footer": [
        "dds-combo-box",
        "dds-dropdown",
        "dds-footer-composite",
        "dds-footer-container",
        "dds-footer-logo",
        "dds-footer-nav-group",
        "dds-footer-nav-item",
        "dds-footer-nav",
        "dds-footer",
        "dds-language-selector-desktop",
        "dds-language-selector-mobile",
        "dds-legal-nav-cookie-preferences-placeholder",
        "dds-legal-nav-item",
        "dds-legal-nav",
        "dds-locale-button"
      ],
      "horizontal-rule": [
        "dds-hr"
      ],
      "image": [
        "dds-image-item",
        "dds-image"
      ],
      "image-with-caption": [
        "dds-image-with-caption"
      ],
      "leadspace": [
        "dds-breadcrumb-item",
        "dds-breadcrumb-link",
        "dds-breadcrumb",
        "dds-leadspace-heading",
        "dds-leadspace-image",
        "dds-leadspace"
      ],
      "leadspace-block": [
        "dds-leadspace-block-content",
        "dds-leadspace-block-cta",
        "dds-leadspace-block-heading",
        "dds-leadspace-block-media",
        "dds-leadspace-block"
      ],
      "leadspace-with-search": [
        "dds-leadspace-with-search-content-copy",
        "dds-leadspace-with-search-content-heading",
        "dds-leadspace-with-search-content",
        "dds-leadspace-with-search-heading",
        "dds-leadspace-with-search"
      ],
      "leaving-ibm": [
        "dds-leaving-ibm-composite",
        "dds-leaving-ibm-container",
        "dds-leaving-ibm-modal-body",
        "dds-leaving-ibm-modal-heading",
        "dds-leaving-ibm-modal-supplemental",
        "dds-leaving-ibm-modal"
      ],
      "lightbox-image-viewer": [
        "dds-lightbox-image-viewer"
      ],
      "lightbox-video-player": [
        "dds-lightbox-media-viewer",
        "dds-lightbox-video-player-composite",
        "dds-lightbox-video-player-container",
        "dds-lightbox-video-player"
      ],
      "link-list": [
        "dds-link-list-heading",
        "dds-link-list-item-card",
        "dds-link-list-item",
        "dds-link-list"
      ],
      "link-list-section": [
        "dds-link-list-section"
      ],
      "link-with-icon": [
        "dds-link-with-icon"
      ],
      "locale-modal": [
        "dds-locale-item",
        "dds-locale-modal-composite",
        "dds-locale-modal-container",
        "dds-locale-modal",
        "dds-locale-search",
        "dds-region-item",
        "dds-regions"
      ],
      "logo-grid": [
        "dds-logo-grid-item",
        "dds-logo-grid-link",
        "dds-logo-grid"
      ],
      "markdown": [
        "dds-markdown"
      ],
      "masthead": [
        "dds-left-nav-item",
        "dds-left-nav-menu-category-heading",
        "dds-left-nav-menu-item",
        "dds-left-nav-menu-section",
        "dds-left-nav-menu",
        "dds-left-nav-name",
        "dds-left-nav-overlay",
        "dds-left-nav",
        "dds-masthead-composite",
        "dds-masthead-container",
        "dds-masthead-global-bar",
        "dds-masthead-l1-name",
        "dds-masthead-l1",
        "dds-masthead-logo",
        "dds-masthead-menu-button",
        "dds-masthead-profile-item",
        "dds-masthead-profile",
        "dds-masthead",
        "dds-megamenu-category-group-copy",
        "dds-megamenu-category-group",
        "dds-megamenu-category-link",
        "dds-megamenu-left-navigation",
        "dds-megamenu-link-with-icon",
        "dds-megamenu-overlay",
        "dds-megamenu-right-navigation",
        "dds-megamenu-top-nav-menu",
        "dds-megamenu",
        "dds-skip-to-content",
        "dds-top-nav-item",
        "dds-top-nav-l1",
        "dds-top-nav-menu-item",
        "dds-top-nav-menu",
        "dds-top-nav-name",
        "dds-top-nav"
      ],
      "notice-choice": [
        "dds-notice-choice"
      ],
      "pictogram-item": [
        "dds-pictogram-item"
      ],
      "pricing-table": [
        "dds-pricing-table-annotation-toggle",
        "dds-pricing-table-body",
        "dds-pricing-table-cell-annotation",
        "dds-pricing-table-cell",
        "dds-pricing-table-group",
        "dds-pricing-table-head",
        "dds-pricing-table-header-cell-caption",
        "dds-pricing-table-header-cell-cta",
        "dds-pricing-table-header-cell-description",
        "dds-pricing-table-header-cell-headline",
        "dds-pricing-table-header-cell-tag",
        "dds-pricing-table-header-cell",
        "dds-pricing-table-header-row",
        "dds-pricing-table-highlight-label",
        "dds-pricing-table-row",
        "dds-pricing-table"
      ],
      "quote": [
        "dds-quote-link-with-icon",
        "dds-quote-source-bottom-copy",
        "dds-quote-source-copy",
        "dds-quote-source-heading",
        "dds-quote"
      ],
      "scroll-animations": [
        "dds-scroll-animations"
      ],
      "search": [
        "dds-search"
      ],
      "search-with-typeahead": [
        "dds-scoped-search-dropdown-mobile",
        "dds-scoped-search-dropdown",
        "dds-search-with-typeahead-item",
        "dds-search-with-typeahead"
      ],
      "structured-list": [
        "dds-structured-list-body",
        "dds-structured-list-cell",
        "dds-structured-list-group",
        "dds-structured-list-head",
        "dds-structured-list-header-cell",
        "dds-structured-list-header-row",
        "dds-structured-list-row",
        "dds-structured-list"
      ],
      "table-of-contents": [
        "dds-table-of-contents"
      ],
      "tabs-extended": [
        "dds-tab",
        "dds-tabs-extended"
      ],
      "tabs-extended-media": [
        "dds-tabs-extended-media"
      ],
      "tag-group": [
        "dds-tag-group"
      ],
      "tag-link": [
        "dds-tag-link"
      ],
      "universal-banner": [
        "dds-universal-banner-copy",
        "dds-universal-banner-heading",
        "dds-universal-banner-image",
        "dds-universal-banner"
      ],
      "video-player": [
        "dds-video-player-composite",
        "dds-video-player-container",
        "dds-video-player"
      ]
    }),
    caem: Object.entries({
      "accordion": [
        "caem-accordion-item",
        "caem-accordion",
      ],
      "brand-button": [
        "caem-brand-button",
      ],
      "brand-cta-section": [
        "caem-brand-cta-section-copy",
        "caem-brand-cta-section-cta-block",
        "caem-brand-cta-section",
      ],
      "brand-leadspace": [
        "caem-brand-leadspace-cta",
        "caem-brand-leadspace-heading-highlight",
        "caem-brand-leadspace-heading-wrapper",
        "caem-brand-leadspace-heading",
        "caem-brand-leadspace-image",
        "caem-brand-leadspace",
        "caem-brand-video-cta-container",
      ],
      "breadcrumb": [
        "caem-breadcrumb-item",
        "caem-breadcrumb-link",
        "caem-breadcrumb",
      ],
      "button-group": [
        "caem-button-group-item",
        "caem-button-group",
      ],
      "card": [
        "caem-card-cta-footer",
        "caem-card-heading",
        "caem-card",
      ],
      "card-group": [
        "caem-card-group-item",
        "caem-card-group",
      ],
      "cta": [
        "caem-button-cta",
      ],
      "generative-leadspace-image": [
        "caem-generative-leadspace-image",
      ],
      "heading": [
        "caem-heading",
      ],
      "horizontal-rule": [
        "caem-hr",
      ],
      "image-with-caption": [
        "caem-image-with-caption",
      ],
      "intro-section": [
        "${caem}-intro-section",
      ],
      "leadspace": [
        "caem-container-leadspace",
        "caem-leadspace-heading",
        "caem-leadspace",
      ],
      "link-list-item": [
        "caem-link-list-item",
      ],
      "paragraph": [
        "caem-paragraph",
      ],
      "tag-group": [
        "caem-tag-group",
      ],
      "tag-link": [
        "caem-tag-link",
      ],
      "technical-diagram": [
        "caem-technical-diagram",
      ],
      "tile": [
        "caem-tile-group",
        "caem-tile",
      ],
      "video-player": [
        "caem-video-player-container",
        "caem-video-player",
      ],
    })
  }

  const endpoint = {
    dds: (cmp) => `https://1.www.s81c.com/common/carbon-for-ibm-dotcom/tag/v1/latest/${cmp}.min.js`,
    caem: (cmp) => `https://1.www.s81c.com/common/carbon/carbon-for-aem/tag/latest/${cmp}.min.js`,
    bx: (cmp) => `https://1.www.s81c.com/common/carbon/web-components/tag/latest/${cmp}.min.js`
  };

  const observer = new MutationObserver(mutations => {
    for (const { addedNodes } of mutations) {
      for (const node of addedNodes) {
        if (node.nodeType === Node.ELEMENT_NODE) {
          discover(node);
        }
      }
    }
  });

  /**
   * Checks a node for undefined elements and attempts to register them.
   */
  async function discover(root) {
    // console.log('DISCOVER: ', root);
    const tags = [root, ...root.querySelectorAll(':not(:defined)')]
      .map(el => el.tagName.toLowerCase())
      .filter(tag => tag.includes('-')); // Possible footgun: Angular?

    // Make the list unique
    const tagsToRegister = [...new Set(tags)];

    if (tagsToRegister.length) {
      await Promise.allSettled(tagsToRegister.map(tagName => register(tagName)));
      document.querySelector('#anti-flicker-style')?.remove();
    }
  }

  /**
   * Registers an element by tag name.
   */
  function register(tagName) {
    // If the element is already defined, there's nothing more to do
    if (customElements.get(tagName)) {
      return Promise.resolve();
    }

    const tagPrefix = tagName.split('-')[0];

    const componentGroup = componentGroups[tagPrefix]
      .find(group => group[1].includes(tagName))?.at(0);

    if (!componentGroup) {
      console.log('UNFOUND: ', tagName);
      return Promise.reject();
    }

    const path = componentGroup === 'masthead'
      ? `https://1.www.s81c.com/common/carbon-for-ibm-dotcom/tag/v2/alpha/masthead.min.js`
      : endpoint[tagPrefix](componentGroup);

    // Register it
    return new Promise((resolve, reject) => {
      import(path)
      .then(() => {
        // console.log(`SUCCESS: Autoloaded <${tagName}> from ${path}`);
        return resolve();
      })
      .catch(() => {
        // console.log(`FAIL: Unable to autoload <${tagName}> from ${path}`);
        return reject();
      })
    });
  }

  // Initial discovery
  discover(document.body);

  // Listen for new undefined elements
  observer.observe(document.documentElement, { subtree: true, childList: true });

})();
