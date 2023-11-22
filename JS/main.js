const elsTabLink = document.querySelectorAll('.js--tab-link');
const elsTabsItem = document.querySelectorAll('.tabs__item');
const elsTabsPanels = document.querySelectorAll('.tabs__panel');

function deactivateTabItems () {
    elsTabsItem.forEach(function (elTabsItem) {
        elTabsItem.classList.remove('tabs__item--active');
    });
}
function deactivatetabPanels () {
    elsTabsItem.forEach(function (elTabsItem) {
        elTabsItem.classList.remove('tabs__panel--active');
    });
}

elsTabLink.forEach(function (elTabLink) {
    elTabLink.addEventListener('click', function(evt) {
        // Prevent page move
        evt.preventDefault();

        // Remove active class from tabs-item elements
        deactivateTabItems();

        // Add active class to current Tabs-item
        elTabLink.parentElement.classList.add('tabs__item--active')
        
        // Remove active class from tabs panels
        deactivatetabPanels();
        
        // Show active tab panel
        const elTargetPanel = document.querySelector(`#${elTabLink.href.split('#')[1]}`);
        elTargetPanel.classList.add('tabs__panel--active');
    });
});