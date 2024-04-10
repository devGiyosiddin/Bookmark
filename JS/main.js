const modifiers = {
    tabItemActive: 'tabs__item--active',
    tabPanelActive: 'tabpanels__item--active',
    accordionItemOpen: 'accordion__item--open'
}

const elsTabsItem = document.querySelectorAll('.tabs__item');
const elsTabsPanel = document.querySelectorAll('.tabpanels__item');
const elsTabLink = document.querySelectorAll('.js-tab-link');

const elsAccordionItem = document.querySelectorAll('.accordion__item');
const elsAccordionItemToggler = document.querySelectorAll('.accordion__item-toggler');

function deactivateTabItems () {
    elsTabsItem.forEach(function (elTabsItem) {
        elTabsItem.classList.remove(modifiers.tabItemActive);
    });
}

function deactivatetabPanels () {
    elsTabsPanel.forEach(function (elTabsPanel) {
        elTabsPanel.classList.remove(modifiers.tabPanelActive);
    });
}

function closeAccordionItems (){
    elsAccordionItem.forEach(function (elAccordionItem) {
        elAccordionItem.classList.remove(modifiers.accordionItemOpen);
    });
};

elsTabLink.forEach(function (elTabLink) {
    elTabLink.addEventListener('click', function(evt) {
        // Prevent page move
        evt.preventDefault();
        
        // Remove active class from tabs-item elements
        deactivateTabItems();
        
        // Add active class to current Tabs-item
        elTabLink.parentElement.classList.add(modifiers.tabItemActive);
        
        // Remove active class from tabs panels
        deactivatetabPanels();
        
        // Show active tab panel
        // const elTargetPanel = document.querySelector(`#${elTabLink.href.split('#')[1]}`);
        const elTargetPanel = document.querySelector(elTabLink.dataset.tabTarget);
        elTargetPanel.classList.add(modifiers.tabPanelActive);
    });
});

elsAccordionItemToggler.forEach(function(elAccordionItemToggler) {
    elAccordionItemToggler.addEventListener('click', function() {
        closeAccordionItems();

        elAccordionItemToggler.closest('.accordion__item').classList.add(modifiers.accordionItemOpen);
    })
})


/* Sitenav Menu modal */
const elSitenavBtn = document.querySelector('.sitenav-button');
const elSitenav = document.querySelector('.sitenav__list');
const elSitenavLogo = document.querySelector('.site-header__logo');
if (elSitenavBtn) {
    elSitenavBtn.addEventListener('click', function () {
        elSitenavBtn.classList.toggle('sitenav-menu-close');
        elSitenav.classList.toggle('sitenav__list--active');
        elSitenavLogo.classList.toggle('site-header__logo--white');
        document.body.classList.toggle("body-hidden");
    });
};