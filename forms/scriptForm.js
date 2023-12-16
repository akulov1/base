function submitForm() {
    var email = document.getElementById("exampleFormControlInput1").value;
    var textarea = document.getElementById("exampleFormControlTextarea1").value;
    var select = document.getElementById("exampleFormControlSelect1").value;
    var checkbox = document.getElementById("exampleCheck1").checked;

    // Prepare data to send
    var formData = {
        email: email,
        textarea: textarea,
        select: select,
        checkbox: checkbox
    };

    // Use History API to update URL
    var stateObj = { formData: formData };
    history.pushState(stateObj, "", "/submitted");

    // Send data to FormCarry (Note: Update the URL and API endpoint accordingly)
    fetch('https://formcarry.com/s/EHtMLew1to', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch((error) => {
            console.error('Error:', error);
        });
}

// Listen for changes in the History API
window.onpopstate = function (event) {
    if (event.state && event.state.formData) {
        // Populate form with data from the URL
        var formData = event.state.formData;
        document.getElementById("exampleFormControlInput1").value = formData.email;
        document.getElementById("exampleFormControlTextarea1").value = formData.textarea;
        document.getElementById("exampleFormControlSelect1").value = formData.select;
        document.getElementById("exampleCheck1").checked = formData.checkbox;
    }
};