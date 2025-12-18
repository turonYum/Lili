<?php
header('Content-Type: application/json');

$interest = $_GET['interest'] ?? '';

$random_messages = [
    '<p>Kirby says: Inhale the birthday vibes! 🐙🌟</p>',
    '<p>Piplup waddles in: Happy birthday, penguin style! 🐧💙</p>',
    '<p>Game over? Nah, birthday level up! 🎮🚀</p>',
    '<p>Rave ready? Drop the beat of joy! 🕺🎵</p>',
    '<p>Grapes and taho: Sweet birthday treats! 🍇🥥</p>',
    '<p>Econ to history? Smart moves! 📚✨</p>',
    '<p>Rainy season = Cozy birthday cuddles! 🌧️❤️</p>',
    '<p>You\'re sweeter than all the candies! 🍬💖</p>',
    '<p>Adventure awaits: Grapes, taho, and you! 🗺️😋</p>',
    '<p>Pink like Kirby, cute like Piplup! 🎂🐾</p>'
];

$random_images = [
    'https://i.imgur.com/4Q3Z3ZM.gif',
    'https://assets.pokemon.com/assets/cms2/img/pokedex/full/393.png',
    '',
    '',
    ''
];

if ($interest) {
    $random_msg = $random_messages[array_rand($random_messages)];
    $random_img = $random_images[array_rand($random_images)];
    $html = $random_msg;
    if ($random_img) {
        $html .= '<br><img src="' . $random_img . '" alt="Surprise" style="max-width: 150px;">';
    }
    echo json_encode(['html' => $html]);
} else {
    echo json_encode(['html' => '<p>Click for random birthday surprises! 🎉</p>']);
}
?>
