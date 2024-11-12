// script.js

document.addEventListener('DOMContentLoaded', () => {
    initializeButtons();
});

function initializeButtons() {
    // Botão de início (home)
    const homeBtn = document.getElementById('home-btn');
    if (homeBtn) {
        homeBtn.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }

    // Botão de perfil (perfil)
    const profileBtn = document.getElementById('profile-btn');
    if (profileBtn) {
        profileBtn.addEventListener('click', () => {
            window.location.href = 'profile.html';
        });
    }

    // Botão de logoff (logout)
    const logoffButtons = document.querySelectorAll('#logoff-btn');
    logoffButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (confirm('Tem certeza que deseja deslogar?')) {
                window.location.href = 'logout.html';
            }
        });
    });

    // Botão de confirmar logout
    const confirmLogoutBtn = document.getElementById('confirm-logout-btn');
    if (confirmLogoutBtn) {
        confirmLogoutBtn.addEventListener('click', () => {
            alert('Você foi deslogado com sucesso.');
            window.location.href = 'login.html';
        });
    }

    // Botão de cancelar logout
    const cancelLogoutBtn = document.getElementById('cancel-logout-btn');
    if (cancelLogoutBtn) {
        cancelLogoutBtn.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }

    // Formulário de criação de torneio
    const createTournamentForm = document.getElementById('create-tournament-form');
    if (createTournamentForm) {
        createTournamentForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const tournamentName = document.getElementById('tournament-name').value;
            const tournamentDate = document.getElementById('date').value;

            alert(`Torneio "${tournamentName}" criado para a data ${tournamentDate}`);
            createTournamentForm.reset();
        });
    }

    // Formulário de login
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === "admin" && password === "1234") {
                alert(`Bem-vindo, ${username}!`);
                window.location.href = 'index.html';
            } else {
                alert('Credenciais inválidas. Tente novamente.');
            }
        });
    }

    // Formulário de atualização de partida
    const updateMatchForm = document.getElementById('update-match-form');
    if (updateMatchForm) {
        updateMatchForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const matchId = document.getElementById('match-id').value;
            const winner = document.getElementById('winner').value;
            const score = document.getElementById('score').value;

            alert(`Resultado da partida ${matchId} atualizado: Vencedor - ${winner}, Placar - ${score}`);
            updateMatchForm.reset();
        });
    }
}
