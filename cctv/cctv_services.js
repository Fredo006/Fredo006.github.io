// root element
const grid = document.querySelector(".grid");


class CCTV {
    constructor(title, icon, description, isDisabled, isDeprecated, isMaintenance, link, htmlElement) {
        this.title = title;
        this.icon = icon;
        this.description = description;
        this.isDisabled = isDisabled;
        this.isDeprecated = isDeprecated;
        this.isMaintenance = isMaintenance;
        this.link = link;
        this.htmlElement = htmlElement;
    }
}

function generateCCTVCard(title, icon, description, isDisabled, isDeprecated, isMaintenance, link) {
    const a = document.createElement('a');
    a.className = `card ${isDisabled ? ' disabled' : ''}`;
    a.href = link;

    const divIcon = document.createElement('div');
    divIcon.className = "card-icon";
    divIcon.innerText = icon;
    a.appendChild(divIcon);

    const divTitle = document.createElement('div');
    divTitle.className = "card-title";
    divTitle.innerText = title;
    a.appendChild(divTitle);

    const divDesc = document.createElement('div');
    divDesc.className = "card-desc";
    divDesc.innerText = description;
    a.appendChild(divDesc);

    const spanArrow = document.createElement('span');
    spanArrow.className = "card-arrow";
    spanArrow.innerText = "↗";
    a.appendChild(spanArrow);

    if(isDeprecated){
        const divDeprecated = document.createElement('div');
        divDeprecated.className = "badge-deprecated";
        divDeprecated.innerText = "Deprecated";
        a.appendChild(divDeprecated);
    }

    if(isMaintenance){
        const divMaintenance = document.createElement('div');
        divMaintenance.className = "badge-maintenance";
        divMaintenance.innerText = "Maintenance";
        a.appendChild(divMaintenance);
    }

    grid.appendChild(a);

    return a;
}


let arrayOfCCTV = [];

list_cctv_services.forEach((cctv) => {
    arrayOfCCTV.push(
        new CCTV(
            cctv.title,
            cctv.icon,
            cctv.description,
            cctv.isDisabled,
            cctv.isDeprecated,
            cctv.isMaintenance,
            cctv.link,
            generateCCTVCard(
                cctv.title,
                cctv.icon,
                cctv.description,
                cctv.isDisabled,
                cctv.isDeprecated,
                cctv.isMaintenance,
                cctv.link
            )
        )
    )
});

const searchInput = document.querySelector('.search');

searchInput.addEventListener('input', e => {
    const value = e.target.value.toLowerCase();
    arrayOfCCTV.forEach(cctv => {
        // console.log(iptv);
        const isFound = cctv.title.toLowerCase().includes(value);
        cctv.htmlElement.classList.toggle('hide', !isFound);
    })
})