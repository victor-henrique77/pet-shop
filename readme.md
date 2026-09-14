<!-- FOOTER PETCARINHO -->
<footer class="footer">
    <div class="footer-container">

        <!-- Coluna 1 -->
        <div class="footer-column">
            <h2 class="logo">PetCarinho 🐾</h2>
            <p>
                Amor, cuidado e carinho para quem faz parte da nossa família.
                No PetCarinho, cuidamos dos seus animais com dedicação,
                segurança e muito carinho.
            </p>
        </div>

        <!-- Coluna 2 -->
        <div class="footer-column">
            <h3>Links Rápidos</h3>
            <ul>
                <li><a href="#">Banho e Tosa</a></li>
                <li><a href="#">Estética Animal</a></li>
                <li><a href="#">Rações</a></li>
                <li><a href="#">Coleiras e Brinquedos</a></li>
            </ul>
        </div>

        <!-- Coluna 3 -->
        <div class="footer-column">
            <h3>Atendimento</h3>
            <p>🕒 <strong>Horários:</strong></p>
            <p>Segunda a Sexta: 08h às 18h</p>
            <p>Sábado: 08h às 14h</p>

            <p>📍 <strong>Endereço:</strong></p>
            <p>Rua dos Animais, 123 - Centro</p>

            <p>📞 <strong>Contato:</strong></p>
            <p>(31) 99999-9999</p>
            <p>petcarinho@email.com</p>
        </div>

    </div>

    <!-- Linha inferior -->
    <div class="footer-bottom">
        <p>&copy; 2026 PetCarinho. Todos os direitos reservados.</p>

        <div class="footer-links">
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos de Uso</a>
        </div>
    </div>
</footer>

<style>
    /* FOOTER */
    .footer {
        background-color: #1E3A8A;
        color: #FAF5EF;
        padding: 50px 8% 20px;
        font-family: Arial, sans-serif;
    }

    .footer-container {
        max-width: 1200px;
        margin: auto;
        display: grid;
        grid-template-columns: 1.5fr 1fr 1.3fr;
        gap: 50px;
    }

    /* Títulos */
    .footer h2,
    .footer h3 {
        color: #F59E0B;
        margin-bottom: 20px;
    }

    .footer h2 {
        font-size: 28px;
    }

    .footer h3 {
        font-size: 20px;
    }

    /* Textos */
    .footer p {
        color: #FAF5EF;
        line-height: 1.7;
        margin: 6px 0;
        font-size: 15px;
    }

    /* Links */
    .footer ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .footer li {
        margin-bottom: 12px;
    }

    .footer a {
        color: #FAF5EF;
        text-decoration: none;
        transition: 0.3s;
    }

    .footer a:hover {
        color: #F59E0B;
        padding-left: 5px;
    }

    /* Linha inferior */
    .footer-bottom {
        max-width: 1200px;
        margin: 40px auto 0;
        padding-top: 20px;
        border-top: 1px solid rgba(250, 245, 239, 0.3);

        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
    }

    .footer-bottom p {
        margin: 0;
    }

    .footer-links {
        display: flex;
        gap: 25px;
    }

    .footer-links a:hover {
        color: #F59E0B;
    }

    /* RESPONSIVO */
    @media (max-width: 768px) {
        .footer-container {
            grid-template-columns: 1fr;
            gap: 30px;
        }

        .footer-bottom {
            flex-direction: column;
            text-align: center;
        }

        .footer-links {
            flex-direction: column;
            gap: 10px;
        }
    }
</style>
