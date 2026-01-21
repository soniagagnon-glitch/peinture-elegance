



// page réalisations / portfolio

 //script Filtre


        document.querySelectorAll('[category-one]').forEach(button => {
            button.addEventListener('click', function () {

                /* ✅ 1️⃣ Bouton actif */
                document.querySelectorAll('[category-one]').forEach(btn => {
                    btn.classList.remove('current');
                });
                this.classList.add('current');

                /* ✅ 2️⃣ Filtrage */
                const selectedCategory = this.getAttribute('category-one');
                const cards = document.querySelectorAll('.portfolio_card');

                cards.forEach(card => {
                    const cardCategory = card.dataset.category;

                    if (selectedCategory === 'all' || cardCategory === selectedCategory) {
                        card.style.display = 'block';
                        card.classList.remove('hide');
                        card.classList.add('show');
                    } else {
                        card.classList.remove('show');
                        card.classList.add('hide');

                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 400);
                    }
                });
                setTimeout(resizeAllMasonryItems, 450);

            });
        });


    //script Masonry

        function resizeMasonryItem(item) {
            const grid = document.querySelector('.masonry');
            const rowHeight = parseInt(getComputedStyle(grid).gridAutoRows);
            const rowGap = parseInt(getComputedStyle(grid).gap);

            const itemHeight = item.querySelector('.portfolio-item').offsetHeight;
            const rowSpan = Math.ceil((itemHeight + rowGap) / (rowHeight + rowGap));

            item.style.gridRowEnd = `span ${rowSpan}`;
        }

        function resizeAllMasonryItems() {
            document.querySelectorAll('.portfolio_card.show').forEach(item => {
                resizeMasonryItem(item);
            });
        }

        window.addEventListener('load', resizeAllMasonryItems);
        window.addEventListener('resize', resizeAllMasonryItems);



// autre script pour portfolio masonry

        document.querySelectorAll('.portfolio_card img').forEach(img => {
            if (img.complete) {
                resizeAllMasonryItems();
            } else {
                img.addEventListener('load', resizeAllMasonryItems);
            }
        });


  
        //Get the button
        let mybutton = document.getElementById("btn-back-to-top");

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function () {
            scrollFunction();
        };

        function scrollFunction() {
            if (
                document.body.scrollTop > 20 ||
                document.documentElement.scrollTop > 20
        ) {
            mybutton.style.display = "block";
            } else {
            mybutton.style.display = "none";
            }
        }
        // When the user clicks on the button, scroll to the top of the document
        mybutton.addEventListener("click", backToTop);

        function backToTop() {
            document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        }

  