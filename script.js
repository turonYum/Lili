// Interactive Birthday Card Game

const scenes = {
    start: {
        text: "Happy Birthday, Lili! 🎉 It's your main-character dayyy woooooo. You wake up to soft rain outside—very cozy, very cinematic.",
        choices: [
            { text: "Make a birthday wish (no spoilers 🤫🎂)", next: "cake" }
        ]
    },
    cake: {
        text: "Hover over each candle to blow them out—one wish per puff! Don't let the cake catch feelings.",
        choices: [],
        special: "cake"
    },
    breakfast: {
        text: "You're happily snacking on juicy grapes 🍇 while casually thinking, 'Hmm… maybe history someday? hehe' Suddenly—POOF! A wild Piplup appears. Cute level: CRITICAL (mas cute ka parin :3)",
        choices: [
            { text: "Battle with grapes!", next: "piplup_battle" },
            { text: "Share the grapes (friendship route <3)", next: "share_food" }
        ]
    },
    kirby: {
        text: "Kirby floats in like a pink miracle and inhales all your worries. Birthday stress = wala na sana. Adventure mode = ON.",
        choices: [
            { text: "Inhale some cake 🍰", next: "cake_time" },
            { text: "Fly to the rave with Kirby 🎶", next: "rave_fly" }
        ]
    },
    music: {
        text: "Your playlist drops the beat just right. Pre-birthday rave vibes activated womp womp",
        choices: [
            { text: "Dance with imaginary friends 💃", next: "dance_party" },
            { text: "Sing happy birthday to myself 🎤", next: "solo_sing" }
        ]
    },
    piplup_battle: {
        text: "Piplup dodges your grape attacks with maximum cuteness. You both laugh, call a truce, and instantly become besties.",
        choices: [
            { text: "Team up for games 🎮", next: "game_team" },
            { text: "Go on a food adventure 🍽️", next: "food_adventure" }
        ]
    },
    share_food: {
        text: "Piplup LOVES the grapes yehey. You bond over snacks and dream about future taho dates (us please)",
        choices: [
            { text: "Think about studying history someday 📚", next: "study_buddy" },
            { text: "Plan the perfect birthday 🎉", next: "birthday_plan" }
        ]
    },
    cake_time: {
        text: "Plot twist: Kirby becomes cake ngek. You inhale the sweetness (kasi u're so sweet). Honestly? Best birthday decision ever.",
        choices: [
            { text: "End the adventure", next: "end" }
        ]
    },
    rave_fly: {
        text: "You and Kirby soar straight into the rave. The music slaps, the lights sparkle, and the vibes are immaculate.",
        choices: [
            { text: "Dance all night", next: "end" }
        ]
    },
    dance_party: {
        text: "You dance like nobody's watching (except ako. im always watching,,, jk). The rain outside makes it extra magical.",
        choices: [
            { text: "Invite friends over", next: "end" }
        ]
    },
    solo_sing: {
        text: "You sing the happiest birthday song with full confidence. Somewhere, the universe harmonizes.",
        choices: [
            { text: "Time for presents!", next: "end" }
        ]
    },
    game_team: {
        text: "You and Piplup dominate every game. Birthday buffs unlocked. Victory never tasted so sweet.",
        choices: [
            { text: "Victory celebration!", next: "end" }
        ]
    },
    food_adventure: {
        text: "An epic quest for the best taho begins—and succeeds. Legendary dessert secured.",
        choices: [
            { text: "Share with loved ones", next: "end" }
        ]
    },
    study_buddy: {
        text: "Piplup becomes your study buddy. History might happen someday, but today you're the smartest penguin duo alive (WE CAN BE AN EVEN BETTER DUO)",
        choices: [
            { text: "Graduation party someday!", next: "end" }
        ]
    },
    birthday_plan: {
        text: "The perfect birthday lineup: grapes, taho, games, music, and YOU. ABSOLUTE PERFECTION !!!",
        choices: [
            { text: "Make it happen!", next: "end" }
        ]
    },
    end: {
        text: "Hear ye, hear ye! 🎺 On this most blessed day, we celebrate Lady Lili, whose kindness outshines gold and whose spirit brings joy to every quest. May thy days be filled with merry feasts of grapes and taho, gentle cuddles from Sir Piplup, and wondrous magic worthy of Kirby himself. May all thy noble dreams—aye, even those of ancient histories—one day be fulfilled.<br><br>And beyond all the quests and merriment, know this: nakikita kita. Nakikita ko ang effort mo :]. Every late night, every quiet struggle, every time you chose to keep going kahit mahirap—hindi yun nasasayang. All your hard work will pay off. I see you, I believe in you, and I'm so, soooooooooo proud of you. Ever devoted and sworn in cheer—Sir Tim and the loyal court fish, Darwin 🐟✨",
        choices: [
            { text: "Play Again!", next: "start" }
        ]
    }
};

let currentScene = 'start';

document.addEventListener('DOMContentLoaded', function() {
    const hasVisited = localStorage.getItem('birthdayVisited');
    const titleSection = document.querySelector('.title-section');

    if (!hasVisited) {
        // First visit: fast rotating/shrinking entry
        titleSection.style.animation = 'cartoonEntry 2s ease-out';
        localStorage.setItem('birthdayVisited', 'true');
    } else {
        // Repeat visits: quick bounce
        titleSection.style.animation = 'quickBounce 1.5s ease-out';
    }

    setTimeout(() => {
        titleSection.style.animation = '';
        loadScene(currentScene);
    }, hasVisited ? 1500 : 2000);
});

function loadScene(sceneId) {
    const scene = scenes[sceneId];
    const sceneEl = document.getElementById('scene');

    if (scene.special === 'cake') {
        sceneEl.innerHTML = `
            <h1 class="card-title text-pink mb-4">Make a Wish! 🎂</h1>
            <p class="story-text lead mb-3">${scene.text}</p>
            <div class="cake-container">
                <div class="cake">
                    <div class="cake-top"></div>
                    <div class="candles">
                        <div class="candle" data-id="1"><div class="flame"></div></div>
                        <div class="candle" data-id="2"><div class="flame"></div></div>
                        <div class="candle" data-id="3"><div class="flame"></div></div>
                        <div class="candle" data-id="4"><div class="flame"></div></div>
                        <div class="candle" data-id="5"><div class="flame"></div></div>
                    </div>
                </div>
            </div>
            <button class="choice-btn btn btn-lg mt-4" id="continue-btn" style="display: none;">Continue the adventure 🚀</button>
        `;

        // Add candle hover effects
        let extinguished = 0;
        const totalCandles = 5;
        document.querySelectorAll('.candle').forEach(candle => {
            candle.addEventListener('mouseenter', function() {
                this.querySelector('.flame').style.opacity = '0';
                extinguished++;
                if (extinguished === totalCandles) {
                    document.getElementById('continue-btn').style.display = 'block';
                    createConfetti();
                }
            });
        });

        document.getElementById('continue-btn').addEventListener('click', function() {
            currentScene = 'breakfast';
            loadScene(currentScene);
        });
    } else {
        const iconMap = {
            breakfast: 'bi-apple',
            kirby: 'bi-star-fill',
            music: 'bi-music-note-beamed',
            piplup_battle: 'bi-lightning-charge-fill',
            share_food: 'bi-heart-fill',
            cake_time: 'bi-cake2',
            rave_fly: 'bi-airplane-fill',
            dance_party: 'bi-music-note-list',
            solo_sing: 'bi-mic-fill',
            game_team: 'bi-controller',
            food_adventure: 'bi-cup-straw',
            study_buddy: 'bi-book-fill',
            birthday_plan: 'bi-calendar-heart-fill'
        };

        sceneEl.innerHTML = `
            <p class="story-text lead mb-4">${scene.text}</p>
            <div class="choices d-grid gap-3">
                ${scene.choices.map(choice => {
                    const icon = iconMap[choice.next] || 'bi-arrow-right-circle-fill';
                    return `<button class="choice-btn btn btn-lg ${sceneId === 'end' ? 'restart-btn' : ''}" data-next="${choice.next}">
                        <i class="bi ${icon} me-2"></i>${choice.text}
                    </button>`;
                }).join('')}
            </div>
        `;

        // Add event listeners to new buttons
        document.querySelectorAll('.choice-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                currentScene = this.getAttribute('data-next');
                loadScene(currentScene);
            });
        });
    }
}

function createConfetti() {
    const confettiCount = 100;
    const container = document.body;
    const colors = ['#ff69b4', '#ffb6c1', '#ff1493', '#ff6b9d', '#e91e63', '#f48fb1'];
    const shapes = ['🎉', '✨', '🎊', '🌟', '💖', '🦋', '🌸', '⭐'];

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        const isEmoji = Math.random() > 0.5;
        if (isEmoji) {
            confetti.textContent = shapes[Math.floor(Math.random() * shapes.length)];
        } else {
            confetti.style.width = Math.random() * 8 + 4 + 'px';
            confetti.style.height = confetti.style.width;
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        }
        confetti.style.position = 'absolute';
        confetti.style.fontSize = Math.random() * 1.5 + 1 + 'rem';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-50px';
        confetti.style.animation = `fall ${Math.random() * 4 + 3}s ease-out forwards`;
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.pointerEvents = 'none';
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        container.appendChild(confetti);

        // Remove after animation
        setTimeout(() => confetti.remove(), 7000);
    }
}
