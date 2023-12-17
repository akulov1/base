function submitForm() {
    // Получаем значения полей
    var email = document.getElementById('exampleFormControlInput1').value;
    var name = document.getElementById('exampleFormControlTextarea1').value;
    var notification = document.getElementById('exampleFormControlSelect1').value;
    var isChecked = document.getElementById('exampleCheck1').checked;

    // Проверяем, что обязательные поля заполнены
    if (!email || !name) {
        alert('Пожалуйста, заполните обязательные поля (почта и имя).');
        return;
    }

    // Создаем объект с данными формы
    var formData = {
        email: email,
        name: name,
        notification: notification,
        isChecked: isChecked
    };

    // Отправляем данные на Formcarry
    fetch('https://formcarry.com/s/EHtMLew1to', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(response => {
            if (response.ok) {
                alert('Форма успешно отправлена!');
            } else {
                alert('Ошибка при отправке формы. Пожалуйста, попробуйте еще раз.');
            }
        })
        .catch(error => {
            alert('Произошла ошибка: ' + error.message);
        });
}
