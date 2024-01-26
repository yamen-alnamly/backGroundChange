const LightButton = document.querySelector("#light");
const DarkButton = document.querySelector("#dark");
const SolarButton = document.querySelector("#solar");
const body = document.body;

DarkButton.onclick = () => {
    body.classList.replace('light','dark')
};
LightButton.onclick = () => {
    body.classList.replace('dark','light')
};
SolarButton.onclick = () => {
    if (body.classList.contains('solar')) {
        body.classList.remove('solar')
        SolarButton.innerHTML =`<a href='#'>Solar</a>`
    }
    else
    {
        body.classList.add('solar')
        SolarButton.innerHTML =`<a href='#'>Solarized</a>`
    }
}