const form = document.querySelector('#logoform');
const brandName = document.querySelector('input[name="brandname"]');
const brandColor = document.querySelector('input[name="color"]');
const logoSize = document.querySelector('input[name="size"]');
const results = document.querySelector('#results');

form.addEventListener('submit', function(e) {
e.preventDefault();
const newLogo = makeLogo(
    brandName.value,
    brandColor.value,
    logoSize.value
    );
    results.appendChild(newLogo);
})

function makeLogo(text, color, size) {
    const logo = document.createElement('h1');
    logo.innerText = text;
    logo.style.color = color;
    logo.style.fontSize = size + 'px';
    return logo;
}