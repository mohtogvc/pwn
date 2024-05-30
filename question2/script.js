document.addEventListener('DOMContentLoaded', function() {
    const optionA = document.getElementById('optionA');
    const optionB = document.getElementById('optionB');
    const optionC = document.getElementById('optionC');
    const optionD = document.getElementById('optionD');
    const customAnswerInput = document.getElementById('customAnswer');
    const notification = document.getElementById('notification');
    const errorSound1 = document.getElementById('errorSound1');
    const errorSound2 = document.getElementById('errorSound2');

    function toggleCustomAnswer() {
        customAnswerInput.style.display = optionD.checked ? 'block' : 'none';
    }

    function playRandomErrorSound() {
        const randomSound = Math.random() < 0.5 ? 'errorSound1' : 'errorSound2';
        document.getElementById(randomSound).play();
    }

    function showNotification(message, color) {
        if (message) {
            notification.textContent = message;
        }
        notification.style.color = color;
        notification.style.display = 'block';
        setTimeout(function() {
            notification.style.display = 'none';
        }, 2000); // Hide after 2 seconds
    }

    function handleWrongAnswer() {
        playRandomErrorSound();
        showNotification("Incorrect answer! Please try again.", 'red');
    }

    optionA.addEventListener('change', function() {
        toggleCustomAnswer();
        if (optionA.checked) handleWrongAnswer();
    });
    optionB.addEventListener('change', function() {
        toggleCustomAnswer();
    });
    optionC.addEventListener('change', function() {
        toggleCustomAnswer();
        if (optionC.checked) handleWrongAnswer();
    });
    optionD.addEventListener('change', function() {
        toggleCustomAnswer();
        if (optionD.checked) handleWrongAnswer();
    });

    const submitBtn = document.getElementById('submitBtn');
    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();
        const selectedAnswer = document.querySelector('input[name="answer"]:checked');
        if (selectedAnswer && selectedAnswer.value === 'a') {
            showNotification("ياخي والله انك ذكي احبك.", 'green');
        } else {
            handleWrongAnswer();
        }
    });
});
