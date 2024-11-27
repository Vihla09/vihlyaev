//Валидация деталей заказа пользователя
function checkOrderDetails() {
    const orderDetails = document.getElementById('orderDetails').value.trim();
    if (orderDetails.length < 1 || orderDetails.length > 500) {
        alert("Описание заказа не может быть пустым и должно содержать максимум 500 символов.");
        return false;
    }
    return true;
}


//Валидация количества товаров
function checkQuantity() {
    const quantity = document.getElementById('quantity').value.trim();
    if (quantity < 0) {
        alert("Количество должно быть больше 0");
        return false;
    }
    return true;
}


//Валидация имени пользователя
function checkFirstName() {
    const firstName = document.getElementById('firstName').value.trim();
    if (firstName.length < 2 || firstName.length > 50) {
        alert("Имя должно содержать от 2 до 50 символов.");
        return false;
    }
    return true;
}


//Валидация Фамилии пользователя
function checkLastName() {
    const lastName = document.getElementById('lastName').value.trim();
    if (lastName.length < 2 || lastName.length > 50) {
        alert("Фамилия должна содержать от 2 до 50 символов.");
        return false;
    }
    return true;
}


//Валидация email пользователя
function checkEmail() {
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Введите корректный Email.");
        return false;
    }
    return true;
}


//Валидация телефона пользователя
function checkPhone() {
    const phone = document.getElementById('phone').value.trim();
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    if (!phoneRegex.test(phone)) {
        alert("Введите номер телефона в формате +1234567890 (от 10 до 15 цифр).");
        return false;
    }
    return true;
}


// Форма валидации
function validateForm() {
    return (
        checkFirstName() &&
        checkLastName() &&
        checkEmail() &&
        checkPhone() &&
        checkOrderDetails() &&
        checkQuantity()
    );
}
// Отправка формы
function formSubmit() {
    if (!validateForm()) {
        return false;
    }

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const orderDetails = document.getElementById('orderDetails').value.trim();
    const quantity = document.getElementById('quantity').value.trim();

    const output = `
        <h3>Сведения о заказе:</h3>
        <p><strong>Имя:</strong> ${firstName}</p>
        <p><strong>Фамилия:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Описание заказа:</strong> ${orderDetails}</p>
        <p><strong>Количество:</strong> ${quantity}</p>
    `;

    document.getElementById('formOutput').innerHTML = output;

    return false;
}
//Меняем стили для динамики
function changeformOutputBackground() {
    // Генерируем случайный цвет
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
                            ${Math.floor(Math.random() * 256)}, 
                            ${Math.floor(Math.random() * 256)})`;

    // Меняем цвет фона для formOutput
    const formOutput = document.getElementById('formOutput');
    formOutput.style.backgroundColor = randomColor;
}

function changeHeaderBackground() {
    // Генерируем случайный цвет
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
                            ${Math.floor(Math.random() * 256)}, 
                            ${Math.floor(Math.random() * 256)})`;

    // Меняем цвет фона для header
    const headerSection = document.getElementById('header');
    headerSection.style.backgroundColor = randomColor;
}
