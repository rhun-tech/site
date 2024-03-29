function randomizePeriods() {
    const paragraphs = document.querySelectorAll('.rhun-center p');

    paragraphs.forEach(paragraph => {
        const periods = paragraph.textContent.match(/\./g);
        if (periods) {
            const periodCount = periods.length;
            let newText = '';

            for (let i = 0; i < periodCount; i++) {
                const periodLength = Math.floor(Math.random() * 10) + 1;
                let periodText = '.'.repeat(periodLength);

                const randomColor = Math.floor(Math.random() * 4);
                switch (randomColor) {
                    case 0:
                        periodText = `<span class="rhun-text">${periodText}</span>`;
                        break;
                    case 1:
                        periodText = `<span class="rhun-text-secondary">${periodText}</span>`;
                        break;
                    case 2:
                        periodText = `<span class="rhun-text-tertiary">${periodText}</span>`;
                        break;
                    case 3:
                        periodText = `<span class="rhun-text-callout">${periodText}</span>`;
                        break;
                    default:
                        break;
                }

                newText += periodText;

                if (i < periodCount - 1) {
                    newText += ' ';
                }
            }

            paragraph.innerHTML = newText;
        }
    });
}

randomizePeriods();
