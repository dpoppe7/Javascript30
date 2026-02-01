const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    // console log the id property  of the event this
    console.log(this.id, this.name, this.value);

    //data set is a map of all the data attributes on the element: example data-sizing, can create your own, data-foo="bar" in html
    console.log(this.dataset); // DOMStringMap {sizing:"px"} or DOMStringMap {}, color doesnt have data-sizing
    const suffix = this.dataset.sizing || ''; // if there is no sizing property, return an empty string
    
    // change the spacing property of the :root styles
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

    // instead of doing this:
    // if (this.id === 'spacing') {
    //     document.documentElement.style.setProperty('--spacing', `${this.value}px`);
    //     console.log(document.documentElement.style.getPropertyValue('--spacing'));
    // }   
}
// add event listener for range input that updates the spacing padding property when dragged in range
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));