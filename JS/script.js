const searchInput =
            document.getElementById("searchInput");


        searchInput.addEventListener(
            "keypress",
            function(event) {

                if (event.key === "Enter") {

                    const pesquisa =
                        searchInput.value.trim();

                    if (pesquisa !== "") {

                        alert(
                            "Você pesquisou por: " +
                            pesquisa
                        );

                    } else {

                        alert(
                            "Digite o que seu pet precisa."
                        );

                    }

                }

            }
        );


        const buttons =
            document.querySelectorAll(
                ".category-button"
            );


        buttons.forEach(
            function(button) {

                button.addEventListener(
                    "click",
                    function() {

                        alert(
                            "Você selecionou: " +
                            button.textContent.trim()
                        );

                    }
                );

            }
        );
