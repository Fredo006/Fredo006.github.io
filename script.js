const grid = document.querySelector('.grid');

function generateToolCard(name, icon, description, isDeprecated, isInProgress, isDisabled, link, target) {
    const a = document.createElement('a');
    a.className = `card ${isDisabled ? ' disabled' : ''}`;
    a.href = link;
    a.target = target;

    const cardIcon = document.createElement('div');
    cardIcon.className = "card-icon";
    cardIcon.innerText = icon;
    a.appendChild(cardIcon);

    const cardTitle = document.createElement('div');
    cardTitle.className = "card-title";
    cardTitle.innerText = name;
    a.appendChild(cardTitle);

    const cardDescription = document.createElement('div');
    cardDescription.className = "card-desc";
    cardDescription.innerText = description;
    cardDescription.innerText = description;
    a.appendChild(cardDescription);

    const spanArrow = document.createElement('span');
    spanArrow.className = "card-arrow";
    spanArrow.innerText = "↗";
    a.appendChild(spanArrow);

    if(isDeprecated){
        const badgeDeprecated = document.createElement('div');
        badgeDeprecated.className = "badge-deprecated";
        badgeDeprecated.innerText = "Deprecated";
        a.appendChild(badgeDeprecated);
    }

    if(isInProgress){
        const badgeInProgress = document.createElement('div');
        badgeInProgress.className = "badge";
        badgeInProgress.innerText = "In Progress";
        a.appendChild(badgeInProgress);
    }

    grid.appendChild(a);
}

tools_data.forEach((tool) => {
    generateToolCard(tool.name, tool.icon, tool.description, tool.isDeprecated, tool.isInProgress, tool.isDisabled, tool.link, tool.target);
})