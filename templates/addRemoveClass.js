currentActiveElements = document.querySelectorAll('.mmc-accordion__container--active');
        [...currentActiveElements].forEach(element => {
          element.classList.remove('mmc-accordion__container--active');
        });
        document.querySelector(e.currentTarget.classList.add('mmc-accordion__container--active'));
        